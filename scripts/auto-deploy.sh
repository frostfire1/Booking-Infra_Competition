#!/bin/sh
# Auto-deploy script - Checks GitHub for updates and redeploys
# This script polls the GitHub repository and automatically pulls and restarts the app

REPO_URL="https://github.com/frostfire1/Booking-Infra_Competition.git"
BRANCH="deploy"
APP_DIR="/app"
LOG_FILE="/var/log/auto-deploy.log"
LOCK_FILE="/var/run/auto-deploy.lock"

# Colors for logging (if terminal supports it)
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

log_message() {
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] $1" | tee -a "$LOG_FILE"
}

log_success() {
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] ✅ $1" | tee -a "$LOG_FILE"
}

log_error() {
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] ❌ $1" | tee -a "$LOG_FILE"
}

log_info() {
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] ℹ️  $1" | tee -a "$LOG_FILE"
}

# Check if another instance is running
if [ -f "$LOCK_FILE" ]; then
    PID=$(cat "$LOCK_FILE")
    if kill -0 "$PID" 2>/dev/null; then
        log_info "Another auto-deploy is running (PID: $PID), skipping..."
        exit 0
    else
        rm -f "$LOCK_FILE"
    fi
fi

# Create lock file
echo $$ > "$LOCK_FILE"

# Cleanup on exit
cleanup() {
    rm -f "$LOCK_FILE"
}
trap cleanup EXIT

log_message "=========================================="
log_message "🔍 Checking for updates from GitHub..."

cd "$APP_DIR" || {
    log_error "Failed to change to app directory: $APP_DIR"
    exit 1
}

# Initialize git if not already initialized
if [ ! -d ".git" ]; then
    log_info "Initializing git repository..."
    git init
    git remote add origin "$REPO_URL"
    git fetch origin
    git checkout -b "$BRANCH" "origin/$BRANCH"
    NEED_DEPLOY=true
else
    # Fetch latest changes from remote
    log_info "Fetching from remote: $REPO_URL"
    git fetch origin "$BRANCH" 2>&1 | tee -a "$LOG_FILE"
    
    # Get current local commit
    LOCAL_COMMIT=$(git rev-parse HEAD)
    log_info "Local commit: $LOCAL_COMMIT"
    
    # Get remote commit
    REMOTE_COMMIT=$(git rev-parse "origin/$BRANCH")
    log_info "Remote commit: $REMOTE_COMMIT"
    
    # Compare commits
    if [ "$LOCAL_COMMIT" = "$REMOTE_COMMIT" ]; then
        log_success "Already up to date. No deployment needed."
        exit 0
    else
        log_message "📦 New commits detected!"
        log_info "Changes:"
        git log --oneline "$LOCAL_COMMIT".."$REMOTE_COMMIT" | tee -a "$LOG_FILE"
        NEED_DEPLOY=true
    fi
fi

if [ "$NEED_DEPLOY" = true ]; then
    log_message "🚀 Starting deployment process..."
    
    # Pull latest changes
    log_info "Pulling latest changes..."
    git pull origin "$BRANCH" 2>&1 | tee -a "$LOG_FILE"
    
    if [ $? -ne 0 ]; then
        log_error "Git pull failed!"
        exit 1
    fi
    
    log_success "Code updated successfully"
    
    # Always update dependencies to ensure everything is in sync
    log_info "📦 Updating npm dependencies..."
    npm install --production 2>&1 | tee -a "$LOG_FILE"
    
    if [ $? -eq 0 ]; then
        log_success "Dependencies updated successfully"
    else
        log_error "npm install failed, trying npm ci..."
        npm ci --production 2>&1 | tee -a "$LOG_FILE"
    fi
    
    # Always regenerate Prisma client to ensure compatibility
    log_info "🔧 Regenerating Prisma client..."
    npx prisma generate 2>&1 | tee -a "$LOG_FILE"
    
    if [ $? -eq 0 ]; then
        log_success "Prisma client generated successfully"
    else
        log_error "Prisma generate failed!"
        exit 1
    fi
    
    # Run database migration
    log_info "🗄️  Running database migration..."
    npx prisma db push --skip-generate --accept-data-loss 2>&1 | tee -a "$LOG_FILE"
    
    if [ $? -eq 0 ]; then
        log_success "Database migration completed"
    else
        log_error "Database migration failed! (continuing anyway...)"
    fi
    
    # Build Next.js application
    log_info "Building Next.js application..."
    npm run build 2>&1 | tee -a "$LOG_FILE"
    
    if [ $? -ne 0 ]; then
        log_error "Build failed!"
        exit 1
    fi
    
    log_success "Build completed successfully"
    
    # Stop old process
    log_info "Stopping old application..."
    pkill -f "node server.js" 2>/dev/null
    sleep 2
    
    # Start new process
    log_info "Starting new application..."
    if [ -f "server.js" ]; then
        # Standalone build
        nohup node server.js > /var/log/nextjs.log 2>&1 &
        NEW_PID=$!
        echo "$NEW_PID" > /var/run/nextjs.pid
    elif [ -f ".next/standalone/server.js" ]; then
        # Standalone in .next
        cd .next/standalone
        nohup node server.js > /var/log/nextjs.log 2>&1 &
        NEW_PID=$!
        echo "$NEW_PID" > /var/run/nextjs.pid
        cd "$APP_DIR"
    else
        # Regular Next.js
        nohup npm start > /var/log/nextjs.log 2>&1 &
        NEW_PID=$!
        echo "$NEW_PID" > /var/run/nextjs.pid
    fi
    
    log_success "Application started with PID: $NEW_PID"
    
    # Wait and verify
    sleep 5
    if curl -f -s http://localhost:3000 > /dev/null 2>&1; then
        log_success "✅ Deployment successful! Application is responding."
    else
        log_error "Application failed to respond on port 3000"
        log_info "Check logs: tail -f /var/log/nextjs.log"
    fi
    
    log_message "=========================================="
    log_success "🎉 Auto-deployment completed!"
fi
