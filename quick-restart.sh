#!/bin/sh
# Quick restart with proper environment loading
# Run this: sudo /app/quick-restart.sh

echo "🔄 Quick Restart with Environment Variables"
echo ""

# Load missing environment variables from /app/.env (do not override existing env)
echo "📦 Loading missing environment variables from /app/.env (if any)..."
if [ -f /app/.env ]; then
    while IFS='=' read -r name val; do
        case "$name" in
            \#*|"") continue;;
        esac
        name=$(echo "$name" | xargs)
        val=$(echo "$val" | sed -e 's/^"//' -e 's/"$//' | xargs)
        if [ -z "${!name}" ] && [ -n "$val" ]; then
            export "$name"="$val"
        fi
    done < /app/.env
    echo "✅ Environment loaded (missing values only)"
else
    echo "⚠️  /app/.env not found — relying on runtime environment variables only"
fi
echo ""

# Kill existing process
echo "🛑 Stopping existing app..."
pkill -f "node server.js" 2>/dev/null || true
sleep 2
echo ""

# Start with environment as root
echo "🚀 Starting app with environment as root..."
cd /app
touch /var/log/nextjs.log
chown root:root /var/log/nextjs.log 2>/dev/null || true
export DATABASE_URL='${DATABASE_URL}'
export NEXTAUTH_URL='${NEXTAUTH_URL}'
export NEXTAUTH_SECRET='${NEXTAUTH_SECRET}'
export GOOGLE_CLIENT_ID='${GOOGLE_CLIENT_ID}'
export GOOGLE_CLIENT_SECRET='${GOOGLE_CLIENT_SECRET}'
export TRIPAY_API_KEY='${TRIPAY_API_KEY}'
export TRIPAY_PRIVATE_KEY='${TRIPAY_PRIVATE_KEY}'
export TRIPAY_MERCHANT_CODE='${TRIPAY_MERCHANT_CODE}'
export TRIPAY_MODE='${TRIPAY_MODE}'
export NODE_ENV='${NODE_ENV}'
export PORT=3000
export HOSTNAME=0.0.0.0
nohup node server.js > /var/log/nextjs.log 2>&1 &
sleep 3
echo ""

# Verify
if pgrep -f "node server.js" > /dev/null; then
    echo "✅ App started successfully!"
    echo "🌐 Running on http://localhost:3000"
    echo ""
    echo "📊 View logs: tail -f /var/log/nextjs.log"
    echo "📊 Check process: ps aux | grep node"
else
    echo "❌ Failed to start!"
    echo "📊 Check logs: tail -50 /var/log/nextjs.log"
fi
