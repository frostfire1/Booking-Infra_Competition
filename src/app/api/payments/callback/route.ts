import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { tripayService } from '@/lib/tripay'

// POST - Handle Tripay callback
export async function POST(request: NextRequest) {
  try {
    const callbackSignature = request.headers.get('x-callback-signature') || ''
    const body = await request.text()
    
    // Verify callback signature
    const isValid = tripayService.verifyCallbackSignature(callbackSignature, body)
    
    if (!isValid) {
      console.error('Invalid callback signature')
      return NextResponse.json(
        { success: false, message: 'Invalid signature' },
        { status: 403 }
      )
    }

    const data = JSON.parse(body)
    
    console.log('Tripay callback received:', data)

    // Find payment by Tripay reference
    const payment = await prisma.payment.findFirst({
      where: {
        OR: [
          { tripayReference: data.reference },
          { reference: data.merchant_ref },
        ],
      },
      include: {
        booking: true,
      },
    })

    if (!payment) {
      console.error('Payment not found for reference:', data.reference)
      return NextResponse.json(
        { success: false, message: 'Payment not found' },
        { status: 404 }
      )
    }

    // Update payment status based on Tripay status
    let paymentStatus: 'UNPAID' | 'PAID' | 'FAILED' | 'EXPIRED' | 'REFUNDED' = 'UNPAID'
    let bookingStatus: 'PENDING' | 'APPROVED' | 'REJECTED' | 'CANCELLED' | undefined

    if (data.status === 'PAID') {
      paymentStatus = 'PAID'
      bookingStatus = 'APPROVED' // Auto-approve booking when paid
    } else if (data.status === 'FAILED') {
      paymentStatus = 'FAILED'
    } else if (data.status === 'EXPIRED') {
      paymentStatus = 'EXPIRED'
      bookingStatus = 'CANCELLED' // Cancel booking if payment expired
    } else if (data.status === 'REFUND') {
      paymentStatus = 'REFUNDED'
      bookingStatus = 'CANCELLED'
    }

    // Update payment
    await prisma.payment.update({
      where: { id: payment.id },
      data: {
        status: paymentStatus,
        paidAt: data.status === 'PAID' ? new Date() : null,
      },
    })

    // Update booking status if needed
    if (bookingStatus) {
      await prisma.booking.update({
        where: { id: payment.bookingId },
        data: {
          status: bookingStatus,
        },
      })
    }

    console.log(`Payment ${payment.reference} updated to ${paymentStatus}`)
    console.log(`Booking ${payment.bookingId} updated to ${bookingStatus}`)

    return NextResponse.json({
      success: true,
      message: 'Callback processed successfully',
    })
  } catch (error) {
    console.error('Error processing callback:', error)
    return NextResponse.json(
      { 
        success: false, 
        message: 'Failed to process callback' 
      },
      { status: 500 }
    )
  }
}

// GET - Manual check payment status
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const reference = searchParams.get('reference')

    if (!reference) {
      return NextResponse.json(
        { error: 'Missing reference parameter' },
        { status: 400 }
      )
    }

    // Get transaction detail from Tripay
    const transaction = await tripayService.getTransactionDetail(reference)

    // Find payment in database
    const payment = await prisma.payment.findFirst({
      where: {
        OR: [
          { tripayReference: reference },
          { reference: reference },
        ],
      },
    })

    if (!payment) {
      return NextResponse.json(
        { error: 'Payment not found' },
        { status: 404 }
      )
    }

    // Update payment if status changed
    if (transaction.status === 'PAID' && payment.status !== 'PAID') {
      await prisma.payment.update({
        where: { id: payment.id },
        data: {
          status: 'PAID',
          paidAt: new Date(),
        },
      })

      // Auto-approve booking
      await prisma.booking.update({
        where: { id: payment.bookingId },
        data: {
          status: 'APPROVED',
        },
      })
    }

    return NextResponse.json({
      success: true,
      data: {
        reference: transaction.reference,
        status: transaction.status,
        amount: transaction.amount,
        paidAt: payment.paidAt,
      },
    })
  } catch (error) {
    console.error('Error checking payment status:', error)
    return NextResponse.json(
      { 
        success: false,
        error: 'Failed to check payment status' 
      },
      { status: 500 }
    )
  }
}
