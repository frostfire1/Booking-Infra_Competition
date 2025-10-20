import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function DELETE(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session?.user) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    if (session.user.role !== "ADMIN") {
      return NextResponse.json(
        { error: "Forbidden" },
        { status: 403 }
      );
    }

    const body = await request.json();
    const { bookingIds } = body;

    if (!bookingIds || !Array.isArray(bookingIds) || bookingIds.length === 0) {
      return NextResponse.json(
        { error: "Invalid booking IDs" },
        { status: 400 }
      );
    }

    // Delete bookings in transaction
    const result = await prisma.booking.deleteMany({
      where: {
        id: {
          in: bookingIds,
        },
      },
    });

    return NextResponse.json({
      message: `${result.count} bookings deleted successfully`,
      deletedCount: result.count,
    });
  } catch (error) {
    console.error("Error bulk deleting bookings:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
