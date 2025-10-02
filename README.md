# Intra Booking System

A comprehensive facility booking system built with Next.js, NextAuth, Prisma, and MySQL/MariaDB.

## 🚀 Features

- 🔐 **Authentication**: Email/password + Google OAuth
- 👤 **Auto Admin**: Automatically creates admin user on first run
- 📅 **Booking System**: Facility and equipment booking management
- 🐳 **Docker Ready**: Full Docker and Docker Compose support
- 💾 **Database**: MySQL/MariaDB with Prisma ORM
- 🎨 **Modern UI**: Built with Next.js 15 and Tailwind CSS

## 📋 Prerequisites

- Node.js 20+ (for local development)
- Docker Desktop (for Docker deployment)
- MySQL/MariaDB (for local development without Docker)
- Docker Hub account (for Virtuozzo PaaS deployment)

## 🏃 Quick Start

### Option 1: Docker (Recommended)

```bash
# Start everything with Docker Compose
docker-compose up --build

# Access at http://localhost:3000
# Default admin: admin@smktelkom-mlg.sch.id / admin123
```

### Option 2: Local Development

First, run the development server:

```bash
# 1. Install dependencies
npm install

# 2. Setup database (create database and user in MySQL/MariaDB)

# 3. Configure environment variables
cp .env.example .env
# Edit .env with your database credentials

# 4. Push database schema
npx prisma db push

# 5. Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🐳 Docker Deployment

### With External Database (Recommended)

Use your existing MySQL/MariaDB database:

```bash
# 1. Update DATABASE_URL in docker-compose.yml
# DATABASE_URL: "mysql://infra:password@host.docker.internal:3306/intra_booking"

# 2. Build and start
docker-compose up -d --build

# 3. View logs
docker-compose logs -f

# 4. Stop
docker-compose down
```

**What gets built in the image:**
- ✅ Next.js application (compiled)
- ✅ Prisma Client (generated)
- ✅ All dependencies
- ✅ Admin creation script
- ❌ Database (uses external DB)

### With Internal Database (Testing)

Database runs inside Docker:

```bash
# Use internal database compose file
docker-compose -f docker-compose.internal-db.yml up -d --build

# Includes both app and MariaDB container
```

### Development Mode (Hot Reload)
```bash
# Use development Docker Compose
docker-compose -f docker-compose.dev.yml up

# Your code changes will be reflected immediately
```

### Build Docker Image Only
```bash
# Build image (includes Next.js + Prisma + dependencies)
docker build -t intra-booking-app .

# Run with external database on host (Windows/Mac)
docker run -p 3000:3000 \
  --add-host=host.docker.internal:host-gateway \
  -e DATABASE_URL="mysql://infra:password@host.docker.internal:3306/intra_booking" \
  -e NEXTAUTH_URL="http://localhost:3000" \
  -e NEXTAUTH_SECRET="your-secret" \
  intra-booking-app

# Run with external database on host (Linux)
docker run -p 3000:3000 \
  -e DATABASE_URL="mysql://infra:password@172.17.0.1:3306/intra_booking" \
  -e NEXTAUTH_URL="http://localhost:3000" \
  -e NEXTAUTH_SECRET="your-secret" \
  intra-booking-app
```

## 👤 Default Admin User

On first run with empty database, an admin user is automatically created:

- **Email**: admin@smktelkom-mlg.sch.id
- **Password**: admin123
- **Role**: ADMIN

⚠️ **IMPORTANT**: Change this password after first login!

## 🔧 Environment Variables

Create a `.env` file in the root directory:

```env
# Database
DATABASE_URL="mysql://username:password@localhost:3306/database_name"

# NextAuth
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="generate-with-openssl-rand-base64-32"

# Google OAuth (optional)
GOOGLE_CLIENT_ID="your-google-client-id"
GOOGLE_CLIENT_SECRET="your-google-client-secret"
```

## 📦 Available Scripts

```bash
# Development
npm run dev          # Start dev server (auto-creates admin if needed)
npm run build        # Build for production (auto-creates admin if needed)
npm run start        # Start production server
npm run lint         # Run ESLint

# Database
npx prisma generate  # Generate Prisma Client
npx prisma db push   # Push schema to database
npx prisma studio    # Open Prisma Studio
npm run seed         # Seed database with sample data

# Docker
docker-compose up --build              # Start all services
docker-compose down                    # Stop all services
docker-compose logs -f                 # View logs
docker-compose -f docker-compose.dev.yml up  # Development mode
```

## 📁 Project Structure

```
intra-booking/
├── prisma/
│   ├── schema.prisma       # Database schema
│   └── seed.ts            # Database seeding
├── scripts/
│   └── check-admin.ts     # Auto-create admin script
├── src/
│   ├── app/               # Next.js app directory
│   ├── components/        # React components
│   └── lib/               # Utility functions
├── docs/                  # Documentation
│   ├── DOCKER_SETUP.md    # Docker guide
│   ├── DEFAULT_ADMIN.md   # Admin user docs
│   └── AUTH_SYSTEM.md     # Authentication docs
├── Dockerfile             # Production Docker image
├── docker-compose.yml     # Production Docker Compose
├── docker-compose.dev.yml # Development Docker Compose
└── package.json           # Dependencies and scripts
```

## 📚 Documentation

- [Docker Setup Guide](docs/DOCKER_SETUP.md) - Complete Docker documentation
- [Quick Start Guide](DOCKER_QUICK_START.md) - Docker quick reference
- [Default Admin](docs/DEFAULT_ADMIN.md) - Admin user documentation
- [Authentication System](docs/AUTH_SYSTEM.md) - Auth implementation details
- [Build Scripts](docs/BUILD_SCRIPTS.md) - Build automation scripts

## 🔍 Troubleshooting

### Port Already in Use
```bash
# Windows
netstat -ano | findstr :3000
# Kill the process or change port in docker-compose.yml
```

### Database Connection Failed
```bash
# Check if database is running
docker-compose ps

# View database logs
docker-compose logs db

# Restart database
docker-compose restart db
```

### Admin User Not Created
```bash
# Manually run admin check
tsx scripts/check-admin.ts

# Or seed the database
npm run seed
```

## 🛠️ Tech Stack

- **Framework**: Next.js 15.5.0
- **Runtime**: Node.js 20
- **Authentication**: NextAuth.js 4.24.11
- **Database**: MySQL/MariaDB with Prisma ORM
- **Styling**: Tailwind CSS 4
- **Container**: Docker & Docker Compose
- **Language**: TypeScript

## 📈 Performance

- Multi-stage Docker builds for optimized image size
- Standalone output for minimal production footprint
- Alpine Linux base image (~50MB)
- Health checks for service reliability
- Persistent database volumes

## 🔒 Security

- Bcrypt password hashing (10 rounds)
- JWT session strategy
- Environment variable separation
- Non-root Docker user
- Database credential isolation

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open Pull Request

## 📄 License

This project is for educational purposes.

## 🚀 Deployment to Virtuozzo PaaS

### Quick Deploy

1. **Build and push to Docker Hub**:
   ```bash
   docker build -t frostfire2007/jhic-arsyad:latest .
   docker push frostfire2007/jhic-arsyad:latest
   ```

2. **Deploy in Virtuozzo Dashboard**:
   - Image: `frostfire2007/jhic-arsyad:latest`
   - Environment Variables: Set in dashboard (DATABASE_URL, NEXTAUTH_SECRET, etc.)
   - Port: 3000
   - Restart: Container only (no rebuild needed for env changes!)

### 📝 Editing Environment Variables

**You can edit environment variables in Virtuozzo anytime WITHOUT rebuilding!**

Just edit in dashboard → Save → Restart (20-30 seconds) → Done!

**Read more:**
- [Virtuozzo Deployment Guide](docs/VIRTUOZZO_DEPLOYMENT.md) - Complete deployment steps
- [Environment Variable Editing](docs/VIRTUOZZO_ENV_EDITING.md) - How to edit env vars in dashboard
- [Quick Reference](VIRTUOZZO_ENV_QUICK_GUIDE.md) - 2-minute quick guide
- [Rebuild vs Restart](docs/REBUILD_VS_RESTART.md) - When rebuild is needed

## 🆘 Support

For issues or questions:
1. Check the documentation in `docs/` folder
2. Review logs: `docker-compose logs -f`
3. Create an issue on GitHub

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Prisma Documentation](https://www.prisma.io/docs) - learn about Prisma ORM.
- [NextAuth.js Documentation](https://next-auth.js.org) - learn about authentication.
- [Docker Documentation](https://docs.docker.com) - learn about Docker.
