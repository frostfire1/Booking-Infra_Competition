import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  // Check if any users exist
  const userCount = await prisma.user.count()
  
  // Create default admin user if no users exist
  if (userCount === 0) {
    const defaultAdminPassword = 'admin123' // Default password
    const hashedPassword = await bcrypt.hash(defaultAdminPassword, 10)
    
    await prisma.user.create({
      data: {
        email: 'admin@smktelkom-mlg.sch.id',
        name: 'Admin SMK Telkom',
        password: hashedPassword,
        role: 'ADMIN',
      },
    })
    
    console.log('✅ Default admin user created!')
    console.log('📧 Email: admin@smktelkom-mlg.sch.id')
    console.log('🔑 Password: admin123')
    console.log('⚠️  Please change this password after first login!')
  }

  // Create facilities
  const facilities = [
    {
      name: 'Aula',
      description: 'Aula besar untuk acara dengan kapasitas hingga 600 orang',
      capacity: 600,
    },
    {
      name: 'Lab Cyber, Cloud & ITNSA (Lab 1)',
      description: 'Laboratorium untuk kegiatan cyber security dan cloud computing',
      capacity: 40,
    },
    {
      name: 'Lab Podcast dan Rapat (Lab 2)',
      description: 'Laboratorium dengan fasilitas podcast dan meeting',
      capacity: 30,
    },
    {
      name: 'Lab Robotik (Lab 5)',
      description: 'Laboratorium robotik dengan peralatan lengkap',
      capacity: 35,
    },
    {
      name: 'Ruang Gabungan (34-36)',
      description: 'Ruang gabungan untuk berbagai keperluan',
      capacity: 100,
    },
  ]

  for (const facility of facilities) {
    await prisma.facility.upsert({
      where: { name: facility.name },
      update: {},
      create: facility,
    })
  }

  // Create equipment
  const equipment = [
    { name: 'Microphone', quantity: 16, available: 16 },
    { name: 'Sound System', quantity: 5, available: 5 },
    { name: 'Kursi Lipat', quantity: 200, available: 200 },
    { name: 'Proyektor', quantity: 10, available: 10 },
    { name: 'Speaker', quantity: 15, available: 15 },
  ]

  for (const item of equipment) {
    await prisma.equipment.upsert({
      where: { id: item.name },
      update: {},
      create: item,
    })
  }

  // Get or create admin user for sample bookings
  const adminEmail = 'admin@smktelkom-mlg.sch.id'
  let admin = await prisma.user.findUnique({
    where: { email: adminEmail },
  })
  
  // If admin doesn't exist (shouldn't happen as we create it above), create it
  if (!admin) {
    const hashedPassword = await bcrypt.hash('admin123', 10)
    admin = await prisma.user.create({
      data: {
        email: adminEmail,
        name: 'Admin SMK Telkom',
        password: hashedPassword,
        role: 'ADMIN',
      },
    })
  }

  // Create sample bookings
  const aula = await prisma.facility.findUnique({
    where: { name: 'Aula' },
  })

  const ruangGabungan = await prisma.facility.findUnique({
    where: { name: 'Ruang Gabungan (34-36)' },
  })

  if (aula && admin) {
    const bookings = [
      {
        facilityId: aula.id,
        userId: admin.id,
        title: 'Mantu Pak Budi',
        startDate: new Date('2024-03-11T08:00:00'),
        endDate: new Date('2024-03-11T17:00:00'),
        status: 'APPROVED' as const,
      },
      {
        facilityId: aula.id,
        userId: admin.id,
        title: 'Sosialisasi Pak Aris',
        startDate: new Date('2024-03-12T08:00:00'),
        endDate: new Date('2024-03-12T17:00:00'),
        status: 'APPROVED' as const,
      },
      {
        facilityId: aula.id,
        userId: admin.id,
        title: 'Wisuda TKIT Darush Sholihin',
        startDate: new Date('2024-03-25T08:00:00'),
        endDate: new Date('2024-03-25T17:00:00'),
        status: 'APPROVED' as const,
      },
    ]

    for (const booking of bookings) {
      await prisma.booking.create({
        data: booking,
      })
    }
  }

  if (ruangGabungan && admin) {
    await prisma.booking.create({
      data: {
        facilityId: ruangGabungan.id,
        userId: admin.id,
        title: 'Workshop Pak Onno : Kerentanan Siber di Dunia Modern',
        startDate: new Date('2024-03-28T08:00:00'),
        endDate: new Date('2024-03-28T17:00:00'),
        status: 'APPROVED' as const,
      },
    })
  }

  console.log('Database seeded successfully!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
