#!/bin/sh
# One-time setup script - Install services and cron jobs
# Run once after container deployment: sudo /app/setup-services.sh

set -e
echo "🚀 Setting up Intra Booking System Services"
echo ""

# 1. Install the OpenRC service
echo "📦 Installing OpenRC service..."
if [ -f /app/intra-booking.initd ]; then
    cp /app/intra-booking.initd /etc/init.d/intra-booking
    chmod +x /etc/init.d/intra-booking
    echo "✅ Service file installed"
else
    echo "❌ Service file not found!"
    exit 1
fi
echo ""

# 2. Enable service to start on boot
echo "🔧 Enabling service to start on boot..."
rc-update add intra-booking default || true
echo "✅ Service enabled"
echo ""

# Ensure SSH is enabled and will auto-start on container restart
echo "🔐 Ensuring SSH service is enabled and running..."
# Generate host keys if missing
if [ ! -f /etc/ssh/ssh_host_rsa_key ]; then
    ssh-keygen -A || true
fi
rc-update add sshd default || true
rc-service sshd start || true
echo "✅ SSH enabled and started"
echo ""

# 3. Make scripts executable
echo "🔧 Setting up scripts..."
chmod +x /app/scripts/*.sh 2>/dev/null || true
chmod +x /app/manual-start.sh 2>/dev/null || true
chmod +x /app/quick-restart.sh 2>/dev/null || true
echo "✅ Scripts ready"
echo ""

# NOTE: This setup will NOT overwrite runtime Docker environment variables.
# If you want to use Docker-provided env vars, set them at container runtime
# (docker run -e ... / docker-compose / Virtuozzo dashboard). The scripts
# only source /app/.env for missing variables and will never override existing
# runtime environment values.

# 4. Setup cron jobs
echo "⏰ Setting up cron jobs..."
# Health check every 5 minutes
(crontab -l 2>/dev/null | grep -v "/app/scripts/health-check.sh" || true; echo "*/5 * * * * /app/scripts/health-check.sh") | crontab -
# Auto-deploy every 5 minutes
(crontab -l 2>/dev/null | grep -v "/app/scripts/auto-deploy.sh" || true; echo "*/5 * * * * /app/scripts/auto-deploy.sh") | crontab -
echo "✅ Cron jobs configured:"
crontab -l | grep -v "^#" | grep -v "run-parts"
echo ""

# 5. Initialize git repository
echo "🔄 Setting up git repository..."
cd /app
if [ ! -d .git ]; then
    git init
    git remote add origin https://github.com/frostfire1/Booking-Infra_Competition.git 2>/dev/null || true
    git fetch origin
    git checkout -b deploy origin/deploy 2>/dev/null || git checkout deploy
    echo "✅ Git repository initialized"
else
    echo "✅ Git repository already initialized"
fi
echo ""

# 6. Start the service
echo "🚀 Starting intra-booking service..."
rc-service intra-booking start
echo ""

# 7. Verify service is running
sleep 3
if rc-service intra-booking status | grep -q "started"; then
    echo "✅ Service started successfully!"
    echo ""
    echo "📊 Service Status:"
    rc-service intra-booking status
    echo ""
    echo "📊 Process:"
    ps aux | grep "node server.js" | grep -v grep
    echo ""
    echo "🌐 App should be available at: http://localhost:3000"
    echo ""
    echo "📋 Useful Commands:"
    echo "   rc-service intra-booking status   - Check service status"
    echo "   rc-service intra-booking start    - Start service"
    echo "   rc-service intra-booking stop     - Stop service"
    echo "   rc-service intra-booking restart  - Restart service"
    echo "   tail -f /var/log/nextjs.log       - View app logs"
    echo "   tail -f /var/log/app-monitor.log  - View health monitor"
    echo "   tail -f /var/log/auto-deploy.log  - View auto-deploy"
    echo ""
    echo "✅ Setup Complete! Service will auto-start on container restart."
else
    echo "❌ Service failed to start!"
    echo "📊 Check logs:"
    echo "   tail -50 /var/log/nextjs.log"
    echo "   tail -50 /var/log/prisma.log"
    exit 1
fi
