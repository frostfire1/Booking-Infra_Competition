declare module 'tripay-nodejs' {
  interface TripayConfig {
    apiKey: string
    privateKey: string
    merchantCode: string
    mode: 'development' | 'production'
  }

  interface TripayResponse<T = unknown> {
    success: boolean
    message: string
    data: T
  }

  interface PaymentChannel {
    code: string
    name: string
    fee: {
      flat: number
      percent: string
    }
    minimum_fee: number
    maximum_fee: number
    active: boolean
    icon_url: string
  }

  interface TransactionPayload {
    method: string
    merchant_ref: string
    amount: number
    customer_name: string
    customer_email: string
    customer_phone: string
    order_items: Array<{
      name: string
      price: number
      quantity: number
    }>
    return_url?: string
    expired_time?: number
  }

  interface Transaction {
    reference: string
    merchant_ref: string
    payment_method: string
    payment_name: string
    customer_name: string
    customer_email: string
    customer_phone: string
    callback_url: string
    return_url: string
    amount: number
    fee_merchant: number
    fee_customer: number
    total_fee: number
    amount_received: number
    pay_code: string
    pay_url: string | null
    checkout_url: string
    order_items: Array<{
      name: string
      price: number
      quantity: number
    }>
    status: string
    expired_time: number
    qr_code?: string
    qr_url?: string
    instructions?: Array<{
      title: string
      steps: string[]
    }>
  }

  interface FeeCalculator {
    total_fee: {
      customer: number
      merchant: number
    }
  }

  export class TriPay {
    constructor(config: TripayConfig)

    /**
     * Get payment channels
     */
    channel(): Promise<TripayResponse<PaymentChannel[]>>

    /**
     * Create closed payment transaction
     */
    transaction(payload: TransactionPayload): Promise<TripayResponse<Transaction>>

    /**
     * Get transaction detail
     */
    detailTransaction(reference: string): Promise<TripayResponse<Transaction>>

    /**
     * Get list of transactions
     */
    listTransaction(page?: number, perPage?: number): Promise<TripayResponse<Transaction[]>>

    /**
     * Calculate fee
     */
    feeCalculator(amount: number, code: string): Promise<TripayResponse<FeeCalculator[]>>

    /**
     * Get merchant info
     */
    merchant(): Promise<TripayResponse<{ name: string; balance: number }>>

    /**
     * Validate callback signature
     */
    validateSignature(signature: string, json: string): boolean
  }
}
