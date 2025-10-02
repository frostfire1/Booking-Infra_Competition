import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { tripayService } from '@/lib/tripay'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'

// GET - Get payment channels
export async function GET() {
  try {
    const channels = await tripayService.getPaymentChannels()
    
    // Filter only active channels
    const activeChannels = channels.filter(channel => channel.active)
    
    return NextResponse.json({
      success: true,
      data: activeChannels,
    })
  } catch (error) {
    console.error('Error fetching payment channels:', error)
    return NextResponse.json(
      { 
        success: false,
        error: 'Failed to fetch payment channels' 
      },
      { status: 500 }
    )
  }
}

// POST - Create payment for booking
export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions)
    
    if (!session?.user) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    const body = await request.json()
    const { bookingId, paymentMethod } = body

    // Validate required fields
    if (!bookingId || !paymentMethod) {
      return NextResponse.json(
        { error: 'Missing required fields: bookingId, paymentMethod' },
        { status: 400 }
      )
    }

    // Get booking details
    const booking = await prisma.booking.findUnique({
      where: { id: bookingId },
      include: {
        facility: true,
        user: true,
        equipment: {
          include: {
            equipment: true,
          },
        },
      },
    })

    if (!booking) {
      return NextResponse.json(
        { error: 'Booking not found' },
        { status: 404 }
      )
    }

    // Check if user owns the booking
    if (booking.userId !== session.user.id) {
      return NextResponse.json(
        { error: 'Unauthorized - not your booking' },
        { status: 403 }
      )
    }

    // Check if payment already exists
    const existingPayment = await prisma.payment.findUnique({
      where: { bookingId },
    })

    if (existingPayment && existingPayment.status === 'PAID') {
      return NextResponse.json(
        { error: 'Booking already paid' },
        { status: 400 }
      )
    }

    // Generate unique merchant reference
    const merchantRef = `BKG-${bookingId}-${Date.now()}`

    // Calculate total amount
    const amount = Number(booking.totalPrice)

    // Prepare order items
    const orderItems = [
      {
        name: `Booking ${booking.facility.name}`,
        price: amount,
        quantity: 1,
      },
    ]

    // Add equipment to order items
    if (booking.equipment.length > 0) {
      booking.equipment.forEach((item) => {
        orderItems.push({
          name: item.equipment.name,
          price: 0, // You can set equipment price here
          quantity: item.quantity,
        })
      })
    }

    // Create Tripay transaction
    const transaction = await tripayService.createTransaction({
      method: paymentMethod,
      merchantRef,
      amount,
      customerName: booking.user.name || 'Guest',
      customerEmail: booking.user.email,
      customerPhone: '',
      orderItems,
      returnUrl: `${process.env.NEXTAUTH_URL}/bookings/${bookingId}`,
      expiredTime: 24 * 60 * 60, // 24 hours
    })

    // Save or update payment in database
    const payment = await prisma.payment.upsert({
      where: { bookingId },
      create: {
        bookingId,
        amount,
        paymentMethod: transaction.payment_method,
        paymentChannel: transaction.payment_name,
        reference: transaction.reference,
        merchantRef: transaction.merchant_ref,
        tripayReference: transaction.reference,
        status: transaction.status === 'PAID' ? 'PAID' : 'UNPAID',
        expiredAt: new Date(transaction.expired_time * 1000),
        checkoutUrl: transaction.checkout_url,
        qrCode: transaction.qr_url,
        instructions: transaction.instructions || [],
      },
      update: {
        amount,
        paymentMethod: transaction.payment_method,
        paymentChannel: transaction.payment_name,
        reference: transaction.reference,
        tripayReference: transaction.reference,
        status: transaction.status === 'PAID' ? 'PAID' : 'UNPAID',
        expiredAt: new Date(transaction.expired_time * 1000),
        checkoutUrl: transaction.checkout_url,
        qrCode: transaction.qr_url,
        instructions: transaction.instructions || [],
      },
    })

    return NextResponse.json({
      success: true,
      data: {
        payment,
        transaction: {
          reference: transaction.reference,
          checkoutUrl: transaction.checkout_url,
          qrCode: transaction.qr_url,
          payCode: transaction.pay_code,
          payUrl: transaction.pay_url,
          amount: transaction.amount,
          fee: transaction.total_fee,
          totalAmount: transaction.amount_received,
          expiredAt: new Date(transaction.expired_time * 1000),
          instructions: transaction.instructions,
        },
      },
    })
  } catch (error) {
    console.error('Error creating payment:', error)
    return NextResponse.json(
      { 
        success: false,
        error: 'Failed to create payment' 
      },
      { status: 500 }
    )
  }
}
