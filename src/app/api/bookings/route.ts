import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'

// GET all bookings
export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions)
    
    if (!session?.user) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    const { searchParams } = new URL(request.url)
    const facilityId = searchParams.get('facilityId')
    const startDate = searchParams.get('startDate')
    const endDate = searchParams.get('endDate')

    const where: {
      facilityId?: string
      userId?: string
      OR?: Array<{
        startDate: { lte: Date }
        endDate: { gte: Date }
      }>
    } = {}
    
    // Role-based filtering
    if (session.user.role !== 'ADMIN') {
      // Regular users can only see their own bookings
      where.userId = session.user.id
    }
    // Admins can see all bookings (no userId filter)
    
    if (facilityId) {
      where.facilityId = facilityId
    }
    
    if (startDate && endDate) {
      where.OR = [
        {
          startDate: {
            lte: new Date(endDate),
          },
          endDate: {
            gte: new Date(startDate),
          },
        },
      ]
    }

    const bookings = await prisma.booking.findMany({
      where,
      include: {
        facility: true,
        user: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
        equipment: {
          include: {
            equipment: true,
          },
        },
      },
      orderBy: {
        startDate: 'asc',
      },
    })

    return NextResponse.json(bookings)
  } catch (error) {
    console.error('Error fetching bookings:', error)
    return NextResponse.json(
      { error: 'Failed to fetch bookings' },
      { status: 500 }
    )
  }
}

// POST create new booking
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
    const { facilityId, title, description, startDate, endDate, equipment } = body

    // Validate required fields
    if (!facilityId || !title || !startDate || !endDate) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Check for overlapping bookings
    const overlappingBooking = await prisma.booking.findFirst({
      where: {
        facilityId,
        status: {
          in: ['PENDING', 'APPROVED'],
        },
        OR: [
          {
            startDate: {
              lte: new Date(endDate),
            },
            endDate: {
              gte: new Date(startDate),
            },
          },
        ],
      },
    })

    if (overlappingBooking) {
      return NextResponse.json(
        { error: 'Facility is already booked for the selected dates' },
        { status: 409 }
      )
    }

    // Create booking with equipment
    const booking = await prisma.booking.create({
      data: {
        facilityId,
        userId: session.user.id,
        title,
        description,
        startDate: new Date(startDate),
        endDate: new Date(endDate),
        equipment: equipment ? {
          create: equipment.map((item: { equipmentId: string; quantity: number }) => ({
            equipmentId: item.equipmentId,
            quantity: item.quantity,
          })),
        } : undefined,
      },
      include: {
        facility: true,
        equipment: {
          include: {
            equipment: true,
          },
        },
      },
    })

    return NextResponse.json(booking, { status: 201 })
  } catch (error) {
    console.error('Error creating booking:', error)
    return NextResponse.json(
      { error: 'Failed to create booking' },
      { status: 500 }
    )
  }
}
