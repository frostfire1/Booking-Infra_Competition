import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'

// GET all documentation
export async function GET() {
  try {
    const session = await getServerSession(authOptions)
    
    if (!session) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    const where = session.user.role === 'ADMIN'
      ? {}
      : { booking: { userId: session.user.id } }

    const documentation = await prisma.documentation.findMany({
      where,
      include: {
        booking: {
          include: {
            facility: true,
          },
        },
        user: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
      },
      orderBy: {
        createdAt: 'desc',
      },
    })

    return NextResponse.json(documentation)
  } catch (error) {
    console.error('Error fetching documentation:', error)
    return NextResponse.json(
      { error: 'Failed to fetch documentation' },
      { status: 500 }
    )
  }
}

// POST create documentation
export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions)
    
    if (!session) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    const formData = await request.formData()
    const bookingId = formData.get('bookingId') as string
    const title = formData.get('title') as string
    const description = formData.get('description') as string
    const documentType = formData.get('documentType') as string

    // Verify booking exists and user has access
    const booking = await prisma.booking.findUnique({
      where: { id: bookingId },
    })

    if (!booking) {
      return NextResponse.json(
        { error: 'Booking not found' },
        { status: 404 }
      )
    }

    if (booking.userId !== session.user.id && session.user.role !== 'ADMIN') {
      return NextResponse.json(
        { error: 'You do not have access to this booking' },
        { status: 403 }
      )
    }

    // Note: File upload handling would require additional setup
    // For now, we'll store metadata and you can add file storage later (e.g., AWS S3, Cloudinary)
    const files = formData.getAll('files') as File[]
    
    // Create documentation entry
    // In production, you'd upload files to cloud storage first
    const documentation = await prisma.documentation.create({
      data: {
        bookingId,
        userId: session.user.id,
        title,
        description,
        documentType,
        fileUrl: '', // TODO: Add actual file URL after upload
        fileName: files[0]?.name || '',
        fileSize: files[0]?.size || 0,
        mimeType: files[0]?.type || '',
      },
      include: {
        booking: {
          include: {
            facility: true,
          },
        },
      },
    })

    return NextResponse.json(documentation)
  } catch (error) {
    console.error('Error creating documentation:', error)
    return NextResponse.json(
      { error: 'Failed to create documentation' },
      { status: 500 }
    )
  }
}
