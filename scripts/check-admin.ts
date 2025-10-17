import { PrismaClient } from '@prisma/client'
import * as bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function checkAndCreateAdmin() {
  try {
    // Skip if DATABASE_URL is not provided
    if (!process.env.DATABASE_URL) {
      console.log('⏭️  DATABASE_URL not found. Skipping admin check...')
      return
    }
    
    // Skip during Docker build (dummy DATABASE_URL)
    if (process.env.DATABASE_URL?.includes('dummy')) {
      console.log('⏭️  Skipping admin check during Docker build...')
      return
    }
    
    // Check if any users exist
    const userCount = await prisma.user.count()
    
    if (userCount === 0) {
      console.log('🔍 No users found in database. Creating default admin...')
      
      const defaultAdminPassword = 'admin123'
      const hashedPassword = await bcrypt.hash(defaultAdminPassword, 10)
      
      await prisma.user.create({
        data: {
          email: 'admin@smktelkom-mlg.sch.id',
          name: 'Admin SMK Telkom',
          password: hashedPassword,
          role: 'ADMIN',
        },
      })
      
      console.log('✅ Default admin user created successfully!')
      console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━')
      console.log('📧 Email:    admin@smktelkom-mlg.sch.id')
      console.log('🔑 Password: admin123')
      console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━')
      console.log('⚠️  IMPORTANT: Please change this password after first login!')
      console.log('')
    } else {
      console.log('✅ Database already has users. Skipping admin creation.')
    }
  } catch (error) {
    console.error('❌ Error checking/creating admin:', error)
    // Don't exit with error - let the app continue
  } finally {
    await prisma.$disconnect()
  }
}

checkAndCreateAdmin()
