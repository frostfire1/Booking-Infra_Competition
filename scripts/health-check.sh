#!/bin/sh
# Health check and auto-restart script for Next.js application
# This script checks if the web server is running and restarts it if needed

LOG_FILE="/var/log/app-monitor.log"
APP_DIR="/app"
PID_FILE="/var/run/nextjs.pid"
PORT=3000

log_message() {
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] $1" >> "$LOG_FILE"
}

check_and_start() {
    # Check if the app is responding on port 3000
    if curl -f -s http://localhost:${PORT} > /dev/null 2>&1; then
        log_message "✅ Application is running and responding on port ${PORT}"
        return 0
    else
        log_message "❌ Application not responding on port ${PORT}"
        
        # Check if process is running but not responding
        if [ -f "$PID_FILE" ]; then
            OLD_PID=$(cat "$PID_FILE")
            if kill -0 "$OLD_PID" 2>/dev/null; then
                log_message "⚠️  Process $OLD_PID exists but not responding, killing it..."
                kill -9 "$OLD_PID" 2>/dev/null
                rm -f "$PID_FILE"
            fi
        fi
        
        # Kill any hanging node processes
        pkill -9 -f "node server.js" 2>/dev/null
        
        log_message "🚀 Starting application..."
        
        # Start the application in background
        cd "$APP_DIR" || exit 1
        
        # Run database migration first
        log_message "📦 Running database migration..."
        npx prisma db push --skip-generate --accept-data-loss 2>&1 | tee -a "$LOG_FILE"
        
        # Check admin user
        log_message "👤 Checking admin user..."
        node node_modules/tsx/dist/cli.mjs scripts/check-admin.ts 2>&1 | tee -a "$LOG_FILE"
        
        # Start the server
        nohup node server.js > /var/log/nextjs.log 2>&1 &
        NEW_PID=$!
        echo "$NEW_PID" > "$PID_FILE"
        
        log_message "✅ Application started with PID: $NEW_PID"
        
        # Wait a bit and verify it started
        sleep 5
        if curl -f -s http://localhost:${PORT} > /dev/null 2>&1; then
            log_message "✅ Application startup verified!"
        else
            log_message "❌ Application failed to start properly"
        fi
    fi
}

# Main execution
log_message "=========================================="
log_message "🔍 Running health check..."
check_and_start
log_message "=========================================="
