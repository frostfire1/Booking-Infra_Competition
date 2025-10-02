#!/bin/sh
# Setup cron job for application monitoring
# This script installs a cron job that checks the app every 5 minutes

CRON_SCHEDULE="*/5 * * * *"  # Every 5 minutes
HEALTH_CHECK_SCRIPT="/app/scripts/health-check.sh"
CRON_FILE="/etc/crontabs/root"

echo "🔧 Setting up cron job for application monitoring..."

# Install cronie if not present (for Alpine Linux)
if ! command -v crond > /dev/null 2>&1; then
    echo "📦 Installing cronie..."
    apk add --no-cache cronie curl
fi

# Make health check script executable
chmod +x "$HEALTH_CHECK_SCRIPT"

# Create log directory
mkdir -p /var/log
touch /var/log/app-monitor.log
touch /var/log/nextjs.log

# Check if cron job already exists
if grep -q "health-check.sh" "$CRON_FILE" 2>/dev/null; then
    echo "⚠️  Cron job already exists, removing old entry..."
    sed -i '/health-check.sh/d' "$CRON_FILE"
fi

# Add cron job
echo "$CRON_SCHEDULE $HEALTH_CHECK_SCRIPT" >> "$CRON_FILE"

echo "✅ Cron job added: $CRON_SCHEDULE $HEALTH_CHECK_SCRIPT"

# Start crond if not running
if ! pgrep crond > /dev/null; then
    echo "🚀 Starting crond..."
    crond -b -l 2
    echo "✅ Crond started"
else
    echo "✅ Crond is already running"
fi

# Show cron jobs
echo ""
echo "📋 Current cron jobs:"
crontab -l

echo ""
echo "✅ Cron job setup complete!"
echo "📊 Monitor logs with: tail -f /var/log/app-monitor.log"
echo "📊 View app logs with: tail -f /var/log/nextjs.log"
