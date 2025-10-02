import { TriPay } from 'tripay-nodejs'

// Initialize Tripay SDK
const tripay = new TriPay({
  apiKey: process.env.TRIPAY_API_KEY || '',
  privateKey: process.env.TRIPAY_PRIVATE_KEY || '',
  merchantCode: process.env.TRIPAY_MERCHANT_CODE || '',
  mode: (process.env.TRIPAY_MODE as 'development' | 'production') || 'development',
})

// Type definitions for our application
interface CreateTransactionParams {
  method: string
  merchantRef: string
  amount: number
  customerName: string
  customerEmail: string
  customerPhone?: string
  orderItems: Array<{
    name: string
    price: number
    quantity: number
  }>
  returnUrl?: string
  expiredTime?: number
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

interface TripayTransaction {
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

class TripayService {
  /**
   * Get available payment channels
   */
  async getPaymentChannels(): Promise<PaymentChannel[]> {
    try {
      const response = await tripay.channel()
      
      if (!response.success) {
        throw new Error(response.message || 'Failed to fetch payment channels')
      }

      // Filter only active channels
      return response.data.filter((channel: PaymentChannel) => channel.active)
    } catch (error) {
      console.error('Error fetching payment channels:', error)
      throw error
    }
  }

  /**
   * Get specific payment channel
   */
  async getPaymentChannel(code: string): Promise<PaymentChannel | null> {
    try {
      const channels = await this.getPaymentChannels()
      return channels.find((channel) => channel.code === code) || null
    } catch (error) {
      console.error('Error fetching payment channel:', error)
      return null
    }
  }

  /**
   * Create payment transaction (Closed Payment)
   */
  async createTransaction(
    params: CreateTransactionParams
  ): Promise<TripayTransaction> {
    try {
      const payload = {
        method: params.method,
        merchant_ref: params.merchantRef,
        amount: params.amount,
        customer_name: params.customerName,
        customer_email: params.customerEmail,
        customer_phone: params.customerPhone || '',
        order_items: params.orderItems,
        return_url: params.returnUrl || process.env.NEXTAUTH_URL || '',
        expired_time: params.expiredTime || 24 * 60 * 60, // 24 hours in seconds
      }

      const response = await tripay.transaction(payload)

      if (!response.success) {
        throw new Error(response.message || 'Failed to create transaction')
      }

      return response.data
    } catch (error) {
      console.error('Error creating transaction:', error)
      throw error
    }
  }

  /**
   * Get transaction detail
   */
  async getTransactionDetail(reference: string): Promise<TripayTransaction> {
    try {
      const response = await tripay.detailTransaction(reference)

      if (!response.success) {
        throw new Error(response.message || 'Failed to fetch transaction detail')
      }

      return response.data
    } catch (error) {
      console.error('Error fetching transaction detail:', error)
      throw error
    }
  }

  /**
   * Get list of transactions
   */
  async getTransactionList(page: number = 1, perPage: number = 10) {
    try {
      const response = await tripay.listTransaction(page, perPage)

      if (!response.success) {
        throw new Error(response.message || 'Failed to fetch transaction list')
      }

      return response.data
    } catch (error) {
      console.error('Error fetching transaction list:', error)
      throw error
    }
  }

  /**
   * Verify callback signature
   */
  verifyCallbackSignature(
    callbackSignature: string,
    json: string
  ): boolean {
    return tripay.validateSignature(callbackSignature, json)
  }

  /**
   * Calculate payment fee
   */
  async calculateFee(amount: number, code: string): Promise<number> {
    try {
      const response = await tripay.feeCalculator(amount, code)

      if (!response.success) {
        throw new Error('Failed to calculate fee')
      }

      return response.data[0]?.total_fee?.customer || 0
    } catch (error) {
      console.error('Error calculating fee:', error)
      return 0
    }
  }

  /**
   * Get merchant info
   */
  async getMerchantInfo() {
    try {
      const response = await tripay.merchant()

      if (!response.success) {
        throw new Error('Failed to fetch merchant info')
      }

      return response.data
    } catch (error) {
      console.error('Error fetching merchant info:', error)
      throw error
    }
  }
}

// Export singleton instance
export const tripayService = new TripayService()

// Export Tripay SDK instance
export { tripay }

// Export types
export type {
  TripayTransaction,
  CreateTransactionParams,
  PaymentChannel,
}
