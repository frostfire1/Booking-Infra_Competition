# 🚀 Virtuozzo Manual Start Guide

## The Problem

Virtuozzo uses its own init system (`jelinit`) that doesn't automatically run Docker CMD or ENTRYPOINT. The startup.sh script in the Dockerfile doesn't execute automatically.

## The Solution

Run the manual start script after container deployment.

## Steps to Get App Running

### 1. SSH into Container
```bash
ssh nodejs@node34264-timnya-arsyad.jh-beon.cloud -p 22
```

### 2. Become Root
```bash
sudo su
```

### 3. Run Manual Start Script
```bash
/app/manual-start.sh
```

This script will:
- ✅ Check environment variables
- ✅ Setup cron jobs (health check + auto-deploy)
- ✅ Initialize git repository
- ✅ Run database migration
- ✅ Check/create admin user
- ✅ Start Next.js app
- ✅ Verify app is running

### 4. Verify App is Running
```bash
# Check process
ps aux | grep node

# Should show:
nodejs    1234  0.0  0.0   node server.js

# Test app
curl http://localhost:3000

# Check logs
tail -f /var/log/nextjs.log
```

## One-Line Command

```bash
ssh nodejs@node34264-timnya-arsyad.jh-beon.cloud -p 22 "sudo /app/manual-start.sh"
```

## After First Run

The cron jobs will keep the app running:
- **Health check** (every 5 min): Restarts app if it crashes
- **Auto-deploy** (every 5 min): Pulls new code from GitHub

## If You Need to Restart App

```bash
sudo su
pkill -f "node server.js"
/app/manual-start.sh
```

## Check Status Anytime

```bash
# App running?
ps aux | grep node

# Cron jobs setup?
crontab -l

# View logs
tail -f /var/log/nextjs.log
tail -f /var/log/app-monitor.log
tail -f /var/log/auto-deploy.log
```

## Environment Variables

Set these in Virtuozzo dashboard before running manual-start.sh:

```env
DATABASE_URL=mysql://user:password@host:port/database
NEXTAUTH_SECRET=your-secret
NEXTAUTH_URL=http://node34264-timnya-arsyad.jh-beon.cloud
TRIPAY_API_KEY=your-key
TRIPAY_PRIVATE_KEY=your-key
TRIPAY_MERCHANT_CODE=your-code
SSH_PASSWORD=your-password
NODE_ENV=production
```

If not set, it will use `.env.example` as fallback.

## Build New Version

```powershell
# Build
docker build -t frostfire2007/jhic-arsyad:v1.0.8 -t frostfire2007/jhic-arsyad:latest .

# Push
docker push frostfire2007/jhic-arsyad:v1.0.8
docker push frostfire2007/jhic-arsyad:latest
```

## Deploy to Virtuozzo

1. Update container to `frostfire2007/jhic-arsyad:v1.0.8`
2. Redeploy
3. SSH in and run: `sudo /app/manual-start.sh`
4. Done! ✅

---

**Why manual start?**
Virtuozzo's `jelinit` system doesn't run Docker CMD automatically. The manual start script ensures everything starts correctly with proper error handling and logging.
