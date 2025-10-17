# Base stage - Install dependencies
FROM node:20-alpine AS base

# Install dependencies only when needed
FROM base AS deps
WORKDIR /app

# Copy package files
COPY package.json package-lock.json* ./

# Install dependencies
RUN npm ci

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Set environment variables for build
ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_ENV=production

# Set dummy environment variables for build (will be overridden at runtime)
# These are needed for check-admin.ts and Next.js build
ENV DATABASE_URL="mysql://dummy:dummy@localhost:3306/dummy"
ENV NEXTAUTH_URL="http://localhost:3000"
ENV NEXTAUTH_SECRET="dummy-secret-for-build-only"
ENV TRIPAY_API_KEY="dummy-tripay-api-key-for-build"
ENV TRIPAY_PRIVATE_KEY="dummy-tripay-private-key-for-build"
ENV TRIPAY_MERCHANT_CODE="dummy-merchant-code"

# Generate Prisma Client
RUN npx prisma generate

RUN npm run build

# Production image, copy all the files and run next
FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# Install OpenSSH server and required packages
RUN apk add --no-cache openssh-server openssh tzdata && \
    # Generate SSH host keys
    ssh-keygen -A && \
    # Create SSH directory
    mkdir -p /var/run/sshd && \
    # Configure SSH: Disable root login
    sed -i 's/#PermitRootLogin prohibit-password/PermitRootLogin no/' /etc/ssh/sshd_config && \
    # Enable password authentication
    sed -i 's/#PasswordAuthentication yes/PasswordAuthentication yes/' /etc/ssh/sshd_config && \
    # Set SSH port to 22
    sed -i 's/#Port 22/Port 22/' /etc/ssh/sshd_config && \
    # Additional security settings
    echo "X11Forwarding no" >> /etc/ssh/sshd_config && \
    echo "AllowTcpForwarding yes" >> /etc/ssh/sshd_config && \
    echo "AllowUsers nodejs" >> /etc/ssh/sshd_config

# Create a non-root user for both Node.js and SSH
RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 --ingroup nodejs --shell /bin/sh nodejs && \
    # Set default password (will be overridden by ENV at runtime)
    echo "nodejs:docker123" | chpasswd && \
    # Configure sudo: allow nodejs user to run commands as root without password
    echo "nodejs ALL=(ALL) NOPASSWD: ALL" >> /etc/sudoers

# Copy necessary files
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/prisma ./prisma
COPY --from=builder /app/node_modules/.prisma ./node_modules/.prisma
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/scripts ./scripts
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/.env.example ./.env.example
COPY manual-start.sh /app/manual-start.sh
COPY intra-booking.initd /app/intra-booking.initd
COPY setup-services.sh /app/setup-services.sh
COPY quick-restart.sh /app/quick-restart.sh

# Install cronie, curl, git, and sudo for health checks, monitoring, auto-deploy, and user privileges
RUN apk add --no-cache cronie curl git sudo

# Make scripts executable
RUN chmod +x /app/scripts/*.sh 2>/dev/null || true && \
    chmod +x /app/manual-start.sh && \
    chmod +x /app/setup-services.sh && \
    chmod +x /app/intra-booking.initd && \
    chmod +x /app/quick-restart.sh

# Set the correct permission for prerender cache
RUN mkdir -p .next
RUN chown -R nodejs:nodejs /app

# Don't switch to non-root user yet (SSH needs root)
# USER nodejs

EXPOSE 3000
EXPOSE 22

ENV PORT=3000
ENV HOSTNAME="0.0.0.0"
ENV SSH_PASSWORD=docker123

# Start the application with startup script (runs as root for SSH)
CMD ["/app/startup.sh"]
