# 🚀 OpenRC Service Setup - Auto-Start Solution

## Why Service is Better

✅ **Auto-starts on boot** - No manual intervention needed  
✅ **Proper init system** - Works with Virtuozzo's jelinit  
✅ **Easy management** - Simple start/stop/restart commands  
✅ **Logging built-in** - Automatic log file management  
✅ **Standard practice** - The proper Linux way  

## How It Works

We use **OpenRC** (Alpine's init system) to create a proper service:

1. **Service file**: `/etc/init.d/intra-booking`
2. **Enabled at boot**: Runs automatically when container starts
3. **Manages process**: Starts as nodejs user, proper PID tracking
4. **Environment handling**: Loads .env.example if variables not set
5. **Pre-start tasks**: Runs database migration and admin check

## One-Time Setup

### Step 1: Build & Deploy

```powershell
# Build v2.0.2
docker build -t frostfire2007/jhic-arsyad:v2.0.2 -t frostfire2007/jhic-arsyad:latest .

# Push
docker push frostfire2007/jhic-arsyad:v2.0.2
docker push frostfire2007/jhic-arsyad:latest
```

Deploy in Virtuozzo with image: `frostfire2007/jhic-arsyad:v2.0.2`

### Step 2: Run Setup Script (Once!)

```bash
# SSH into container
ssh nodejs@node34264-timnya-arsyad.jh-beon.cloud -p 22

# Become root
sudo su

# Run setup (only once!)
/app/setup-services.sh
```

This script will:
- ✅ Install OpenRC service
- ✅ Enable service to start on boot
- ✅ Setup cron jobs (health check + auto-deploy)
- ✅ Initialize git repository
- ✅ Start the service

### Step 3: Done! ✅

The app is now running and will **automatically start** every time the container restarts!

## Service Management

### Check Status
```bash
rc-service intra-booking status
```

### Start Service
```bash
sudo rc-service intra-booking start
```

### Stop Service
```bash
sudo rc-service intra-booking stop
```

### Restart Service
```bash
sudo rc-service intra-booking restart
```

### View Logs
```bash
tail -f /var/log/nextjs.log
tail -f /var/log/prisma.log
tail -f /var/log/admin-check.log
```

## What Happens on Container Restart?

1. Container starts
2. Virtuozzo's `jelinit` runs
3. OpenRC starts enabled services
4. `intra-booking` service starts automatically
5. Service runs pre-start checks (DB, admin)
6. Service starts Node.js app as nodejs user
7. App is running! ✅

**No manual intervention needed!** 🎉

## Features

### Service File (`/etc/init.d/intra-booking`)
```bash
- Runs as nodejs user
- Automatic PID tracking
- Proper logging
- Pre-start tasks (DB migration, admin check)
- Dependency management (waits for network, runs after SSH)
```

### Cron Jobs (Auto-configured)
```bash
*/5 * * * * /app/scripts/health-check.sh    # Restart if app crashes
*/5 * * * * /app/scripts/auto-deploy.sh     # Deploy from GitHub
```

### Git Repository (Auto-configured)
```bash
- Initialized and connected to GitHub
- Tracks deploy branch
- Ready for auto-deploy
```

## Troubleshooting

### Service not starting?
```bash
# Check service status
rc-service intra-booking status

# View logs
tail -50 /var/log/nextjs.log
tail -50 /var/log/prisma.log

# Try starting manually
rc-service intra-booking start

# Check for errors
rc-service intra-booking status --verbose
```

### App not responding?
```bash
# Restart service
sudo rc-service intra-booking restart

# Check if running
ps aux | grep "node server.js"

# Test locally
curl http://localhost:3000
```

### Environment variables not working?
```bash
# Check if set
echo $DATABASE_URL

# Service will use .env.example as fallback
cat /app/.env.example

# Or set in Virtuozzo dashboard and redeploy
```

### Re-run setup?
```bash
# Remove service
sudo rc-update del intra-booking default
sudo rm /etc/init.d/intra-booking

# Run setup again
sudo /app/setup-services.sh
```

## Benefits Over Manual Start

| Manual Start | OpenRC Service |
|-------------|----------------|
| ❌ Must run after every restart | ✅ Auto-starts on boot |
| ❌ No process management | ✅ Proper init system |
| ❌ Manual logging | ✅ Automatic logging |
| ❌ Can forget to start | ✅ Always starts |
| ❌ Multiple steps | ✅ One setup, done forever |

## Architecture

```
Container Start
    ↓
Virtuozzo jelinit
    ↓
OpenRC system
    ↓
/etc/init.d/intra-booking (enabled)
    ↓
Pre-start: Load env, DB migration, admin check
    ↓
Start: node server.js (as nodejs user)
    ↓
Post-start: Verify running
    ↓
✅ App Running on port 3000

Cron (every 5 min):
├── health-check.sh → Restart if crashed
└── auto-deploy.sh  → Deploy from GitHub
```

## Quick Reference

```bash
# One-time setup (run once after deployment)
sudo /app/setup-services.sh

# Check if running
rc-service intra-booking status
ps aux | grep node

# Restart
sudo rc-service intra-booking restart

# View logs
tail -f /var/log/nextjs.log

# Test app
curl http://localhost:3000
```

## Summary

✅ **Setup once** with `/app/setup-services.sh`  
✅ **Auto-starts** on every container restart  
✅ **Self-healing** with health check cron  
✅ **Auto-deploys** from GitHub every 5 min  
✅ **Proper logging** to `/var/log/nextjs.log`  
✅ **Easy management** with `rc-service` commands  

**This is the proper Linux way!** 🐧
