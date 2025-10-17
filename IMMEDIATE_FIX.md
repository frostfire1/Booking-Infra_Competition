# 🚨 IMMEDIATE FIX - Your Container Right Now

## Problem
Your `.env` file exists but environment variables aren't being loaded, so Prisma connects to `localhost:3306` instead of `10.128.2.169:3306`.

## Quick Fix (Do This Now!)

### Option 1: Quick Restart Script (Easiest)

```bash
# You're already SSH'd in as root, so just run:
/app/quick-restart.sh
```

This will:
- Load variables from `/app/.env`
- Kill old process
- Start new process with proper environment
- ✅ Done!

### Option 2: Manual Restart with Environment

```bash
# Load environment
cd /app
set -a
. /app/.env
set +a

# Kill old process
pkill -f "node server.js"
sleep 2

# Start with environment
su -s /bin/sh nodejs -c "
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
    cd /app
    nohup node server.js > /var/log/nextjs.log 2>&1 &
"

# Wait and verify
sleep 3
ps aux | grep node
curl http://localhost:3000
```

## Verify It's Working

```bash
# Check if running
ps aux | grep node

# Should show something like:
# nodejs  1234  ... node server.js

# Test the app
curl http://localhost:3000

# Check logs
tail -f /var/log/nextjs.log
```

## For Next Deployment (v2.0.2)

The new Docker image will have proper environment loading in the service. After deploying v2.0.2:

```bash
# Setup service (once)
sudo /app/setup-services.sh

# Service will automatically load .env
rc-service intra-booking restart
```

## Why This Happened

The manual start was running Prisma commands (`npx prisma db push`, `check-admin.ts`) **before** starting the app, but those commands didn't have the environment variables loaded. The startup sequence needs to:

1. ✅ Load `.env` file first
2. ✅ Export all variables
3. ✅ Then run Prisma commands
4. ✅ Then start app

The new service file and scripts do this correctly!

## Quick Commands

```bash
# Restart with environment
/app/quick-restart.sh

# Check status
ps aux | grep node

# View logs
tail -f /var/log/nextjs.log

# Test app
curl http://localhost:3000
```

---

**TL;DR**: Run `/app/quick-restart.sh` right now to fix it! 🚀
