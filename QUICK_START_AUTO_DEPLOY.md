# 🚀 Quick Start - Auto-Deploy v1.0.6

## What Changed?

Your Docker container now **automatically deploys from GitHub** without rebuilding!

## How to Deploy Now:

### 1️⃣ Push to GitHub
```bash
git add .
git commit -m "Your changes"
git push origin deploy
```

### 2️⃣ Wait 5 Minutes
The container automatically:
- Detects new commits
- Pulls latest code
- Updates npm packages (if needed)
- Updates Prisma (if needed)  
- Rebuilds Next.js
- Restarts app

### 3️⃣ Done! ✅

## Or Deploy Immediately:

```bash
ssh nodejs@node34263-timnya-arsyad.jh-beon.cloud -p 22
/app/scripts/auto-deploy.sh
```

## Check Deployment Status:

```bash
ssh nodejs@your-server -p 22
tail -f /var/log/auto-deploy.log
```

## What's Happening?

```
Every 5 minutes:
  Check GitHub for new commits
    ↓
  If found: Pull → Update → Build → Restart
    ↓
  ✅ New code is live!
```

## Smart Features:

✅ **npm install** - Only if `package.json` changed  
✅ **prisma generate** - Only if `schema.prisma` changed  
✅ **npm run build** - Always runs for latest code  
✅ **Auto-restart** - Stops old, starts new  
✅ **Health check** - Verifies app responds  
✅ **Lock file** - Prevents concurrent deployments  

## Logs to Watch:

```bash
# Auto-deploy activity
tail -f /var/log/auto-deploy.log

# App output
tail -f /var/log/nextjs.log

# Health monitoring
tail -f /var/log/app-monitor.log
```

## Docker Image:

```
frostfire2007/jhic-arsyad:v1.0.6
```

## Key Files:

- **Auto-deploy script**: `/app/scripts/auto-deploy.sh`
- **Cron job**: `*/5 * * * * /app/scripts/auto-deploy.sh`
- **Git repo**: https://github.com/frostfire1/Booking-Infra_Competition.git
- **Branch**: `deploy`

## Troubleshooting:

### Not deploying?
```bash
# Check cron is running
pgrep crond

# Check cron jobs
crontab -l

# Run manually
/app/scripts/auto-deploy.sh
```

### Check logs
```bash
tail -n 100 /var/log/auto-deploy.log
```

## Benefits:

### Before:
- Build Docker: 10 min
- Push to Hub: 5 min  
- Pull in Virtuozzo: 5 min
- **Total: 20+ minutes**

### Now:
- Push to GitHub: 1 min
- Auto-deploy: 3-5 min
- **Total: 5 minutes!** 🚀

## 🎉 You're Ready!

Just push to `deploy` branch and your changes will be live in ~5 minutes!

---

**Need help?** Check `AUTO_DEPLOY_COMPLETE.md` for detailed documentation.
