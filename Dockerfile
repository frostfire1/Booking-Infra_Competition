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

# Build Next.js application (skip admin check during build)
# Note: We can't use --turbopack flag in Docker build
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

# Create startup script (runs as root, then switches to nodejs)
RUN echo '#!/bin/sh' > /app/startup.sh && \
    echo 'set -e' >> /app/startup.sh && \
    echo 'echo "🚀 Starting Intra Booking System..."' >> /app/startup.sh && \
    echo 'echo ""' >> /app/startup.sh && \
    echo '' >> /app/startup.sh && \
    echo '# Set SSH password dynamically from environment variable' >> /app/startup.sh && \
    echo 'echo "🔐 Configuring SSH access..."' >> /app/startup.sh && \
    echo 'echo "nodejs:${SSH_PASSWORD:-docker123}" | chpasswd' >> /app/startup.sh && \
    echo '' >> /app/startup.sh && \
    echo '# Start SSH server as root' >> /app/startup.sh && \
    echo 'echo "🔐 Starting SSH server on port 22..."' >> /app/startup.sh && \
    echo '/usr/sbin/sshd' >> /app/startup.sh && \
    echo 'echo "✅ SSH server started (user: nodejs, port: 22)"' >> /app/startup.sh && \
    echo 'echo ""' >> /app/startup.sh && \
    echo '' >> /app/startup.sh && \
    echo '# Setup cron jobs for monitoring and auto-deploy' >> /app/startup.sh && \
    echo 'echo "⏰ Setting up cron jobs..."' >> /app/startup.sh && \
    echo 'chmod +x /app/scripts/health-check.sh' >> /app/startup.sh && \
    echo 'chmod +x /app/scripts/setup-cron.sh' >> /app/startup.sh && \
    echo 'chmod +x /app/scripts/auto-deploy.sh' >> /app/startup.sh && \
    echo '/app/scripts/setup-cron.sh' >> /app/startup.sh && \
    echo '' >> /app/startup.sh && \
    echo '# Initialize git repository for auto-deploy' >> /app/startup.sh && \
    echo 'echo "🔄 Setting up auto-deploy from GitHub..."' >> /app/startup.sh && \
    echo 'cd /app' >> /app/startup.sh && \
    echo 'if [ ! -d .git ]; then' >> /app/startup.sh && \
    echo '  git init' >> /app/startup.sh && \
    echo '  git remote add origin https://github.com/frostfire1/Booking-Infra_Competition.git' >> /app/startup.sh && \
    echo '  git fetch origin' >> /app/startup.sh && \
    echo '  git checkout -b deploy origin/deploy' >> /app/startup.sh && \
    echo '  echo "✅ Git repository initialized"' >> /app/startup.sh && \
    echo 'else' >> /app/startup.sh && \
    echo '  echo "✅ Git repository already initialized"' >> /app/startup.sh && \
    echo 'fi' >> /app/startup.sh && \
    echo '' >> /app/startup.sh && \
    echo '# Add auto-deploy cron job (every 5 minutes)' >> /app/startup.sh && \
    echo '(crontab -l 2>/dev/null || true; echo "*/5 * * * * /app/scripts/auto-deploy.sh") | crontab -' >> /app/startup.sh && \
    echo 'echo "✅ Auto-deploy enabled (checks every 5 minutes)"' >> /app/startup.sh && \
    echo 'echo ""' >> /app/startup.sh && \
    echo '' >> /app/startup.sh && \
    echo '# Check if environment variables are set' >> /app/startup.sh && \
    echo 'echo "🔍 Checking environment variables..."' >> /app/startup.sh && \
    echo 'if [ -z "$DATABASE_URL" ]; then' >> /app/startup.sh && \
    echo '  echo "⚠️  WARNING: DATABASE_URL not set! Using .env.example as fallback"' >> /app/startup.sh && \
    echo '  if [ -f /app/.env.example ]; then' >> /app/startup.sh && \
    echo '    export $(cat /app/.env.example | grep -v "^#" | xargs)' >> /app/startup.sh && \
    echo '  fi' >> /app/startup.sh && \
    echo 'else' >> /app/startup.sh && \
    echo '  echo "✅ Environment variables configured"' >> /app/startup.sh && \
    echo 'fi' >> /app/startup.sh && \
    echo 'echo ""' >> /app/startup.sh && \
    echo '' >> /app/startup.sh && \
    echo '# Run database and admin checks' >> /app/startup.sh && \
    echo 'echo "📦 Checking database connection..."' >> /app/startup.sh && \
    echo 'if npx prisma db push --skip-generate --accept-data-loss 2>&1 | tee -a /var/log/prisma.log; then' >> /app/startup.sh && \
    echo '  echo "✅ Database connected and synced"' >> /app/startup.sh && \
    echo '  echo ""' >> /app/startup.sh && \
    echo '  echo "👤 Checking admin user..."' >> /app/startup.sh && \
    echo '  node node_modules/tsx/dist/cli.mjs scripts/check-admin.ts 2>&1 | tee -a /var/log/admin-check.log || echo "⚠️  Admin check skipped"' >> /app/startup.sh && \
    echo 'else' >> /app/startup.sh && \
    echo '  echo "⚠️  Database connection failed! App may not work properly."' >> /app/startup.sh && \
    echo '  echo "📊 Check logs: tail -f /var/log/prisma.log"' >> /app/startup.sh && \
    echo 'fi' >> /app/startup.sh && \
    echo 'echo ""' >> /app/startup.sh && \
    echo '' >> /app/startup.sh && \
    echo '# Start Next.js server in background with proper environment' >> /app/startup.sh && \
    echo 'echo "✅ Starting Next.js server..."' >> /app/startup.sh && \
    echo 'mkdir -p /var/run /var/log' >> /app/startup.sh && \
    echo 'cd /app' >> /app/startup.sh && \
    echo 'chown nodejs:nodejs /var/log/nextjs.log 2>/dev/null || true' >> /app/startup.sh && \
    echo 'su -s /bin/sh nodejs -c "cd /app && PORT=3000 HOSTNAME=0.0.0.0 nohup node server.js > /var/log/nextjs.log 2>&1 &"' >> /app/startup.sh && \
    echo 'sleep 3' >> /app/startup.sh && \
    echo '' >> /app/startup.sh && \
    echo '# Verify app is running' >> /app/startup.sh && \
    echo 'if pgrep -f "node server.js" > /dev/null; then' >> /app/startup.sh && \
    echo '  echo "✅ Next.js server started successfully!"' >> /app/startup.sh && \
    echo '  echo "📊 Logs: tail -f /var/log/nextjs.log"' >> /app/startup.sh && \
    echo '  echo "📊 Monitor: tail -f /var/log/app-monitor.log"' >> /app/startup.sh && \
    echo 'else' >> /app/startup.sh && \
    echo '  echo "❌ ERROR: Next.js server failed to start!"' >> /app/startup.sh && \
    echo '  echo "📊 Check logs: tail -f /var/log/nextjs.log"' >> /app/startup.sh && \
    echo '  cat /var/log/nextjs.log' >> /app/startup.sh && \
    echo 'fi' >> /app/startup.sh && \
    echo 'echo ""' >> /app/startup.sh && \
    echo '' >> /app/startup.sh && \
    echo '# Keep container running and monitor both SSH and app' >> /app/startup.sh && \
    echo 'echo "✅ Container is ready!"' >> /app/startup.sh && \
    echo 'echo "🔐 SSH: ssh nodejs@<host> -p 22"' >> /app/startup.sh && \
    echo 'echo "🌐 App: http://<host>:3000"' >> /app/startup.sh && \
    echo 'echo ""' >> /app/startup.sh && \
    echo 'echo "Monitoring services... (Ctrl+C to stop)"' >> /app/startup.sh && \
    echo '' >> /app/startup.sh && \
    echo '# Keep container alive by monitoring SSH and app' >> /app/startup.sh && \
    echo 'while true; do' >> /app/startup.sh && \
    echo '  # Check if SSH is running, restart if needed' >> /app/startup.sh && \
    echo '  if ! pgrep -x sshd > /dev/null; then' >> /app/startup.sh && \
    echo '    echo "[$(date)] ⚠️  SSH stopped, restarting..." >> /var/log/ssh-monitor.log' >> /app/startup.sh && \
    echo '    /usr/sbin/sshd' >> /app/startup.sh && \
    echo '    echo "[$(date)] ✅ SSH restarted" >> /var/log/ssh-monitor.log' >> /app/startup.sh && \
    echo '  fi' >> /app/startup.sh && \
    echo '  # Check if app is running (handled by cron, just log status)' >> /app/startup.sh && \
    echo '  if pgrep -f "node server.js" > /dev/null; then' >> /app/startup.sh && \
    echo '    : # App is running, do nothing' >> /app/startup.sh && \
    echo '  fi' >> /app/startup.sh && \
    echo '  # Sleep for 30 seconds before next check' >> /app/startup.sh && \
    echo '  sleep 30' >> /app/startup.sh && \
    echo 'done' >> /app/startup.sh && \
    chmod +x /app/startup.sh

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
