import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { Prisma, BookingStatus } from "@prisma/client";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get("page") || "1");
    const limit = parseInt(searchParams.get("limit") || "10");
    const facilityId = searchParams.get("facilityId");
    const statusParam = searchParams.get("status") || "APPROVED";
    
    const skip = (page - 1) * limit;

    // Build where clause
    const where: Prisma.BookingWhereInput = {
      status: statusParam as BookingStatus,
    };

    if (facilityId) {
      where.facilityId = facilityId;
    }

    // Get total count
    const total = await prisma.booking.count({ where });

    // Get bookings with pagination
    const bookings = await prisma.booking.findMany({
      where,
      include: {
        facility: {
          select: {
            id: true,
            name: true,
          },
        },
        user: {
          select: {
            name: true,
            email: true,
          },
        },
      },
      orderBy: {
        startDate: "asc",
      },
      skip,
      take: limit,
    });

    // Transform bookings to events format
    const events = bookings.map((booking) => ({
      id: booking.id,
      title: booking.title || `${booking.facility.name} Booking`,
      startDate: booking.startDate.toISOString(),
      endDate: booking.endDate.toISOString(),
      facility: booking.facility.name,
      facilityId: booking.facility.id,
      organizer: booking.user.name || booking.user.email,
      status: booking.status,
    }));

    return NextResponse.json({
      success: true,
      data: events,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
    });
  } catch (error) {
    console.error("Error fetching events:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch events" },
      { status: 500 }
    );
  }
}
