#!/bin/sh
# Setup auto-deploy cron job
# This installs a cron job that checks GitHub for updates every 5 minutes

CRON_SCHEDULE="*/5 * * * *"  # Every 5 minutes (adjust as needed)
AUTO_DEPLOY_SCRIPT="/app/scripts/auto-deploy.sh"
CRON_FILE="/etc/crontabs/root"

echo "🔧 Setting up auto-deploy cron job..."

# Install git if not present
if ! command -v git > /dev/null 2>&1; then
    echo "📦 Installing git..."
    apk add --no-cache git
fi

# Install curl if not present (for health checks)
if ! command -v curl > /dev/null 2>&1; then
    echo "📦 Installing curl..."
    apk add --no-cache curl
fi

# Make auto-deploy script executable
chmod +x "$AUTO_DEPLOY_SCRIPT"

# Create log directory
mkdir -p /var/log
touch /var/log/auto-deploy.log

# Configure git
git config --global user.email "deploy@intra-booking.local"
git config --global user.name "Auto Deploy"
git config --global --add safe.directory /app

# Check if cron job already exists
if grep -q "auto-deploy.sh" "$CRON_FILE" 2>/dev/null; then
    echo "⚠️  Auto-deploy cron job already exists, removing old entry..."
    sed -i '/auto-deploy.sh/d' "$CRON_FILE"
fi

# Add cron job
echo "$CRON_SCHEDULE $AUTO_DEPLOY_SCRIPT" >> "$CRON_FILE"

echo "✅ Cron job added: $CRON_SCHEDULE $AUTO_DEPLOY_SCRIPT"

# Show cron jobs
echo ""
echo "📋 Current cron jobs:"
crontab -l

echo ""
echo "✅ Auto-deploy setup complete!"
echo "📊 Monitor logs with: tail -f /var/log/auto-deploy.log"
echo "🔄 Checks for updates every 5 minutes"
echo "🚀 Automatically pulls and redeploys when changes detected"
