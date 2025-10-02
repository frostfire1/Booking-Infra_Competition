# 🚀 Auto-Deploy Setup Complete - v1.0.6

## ✅ What's New in v1.0.6

Your Docker image now includes **automatic deployment from GitHub** without needing to rebuild the Docker image!

### Features Added:

1. **Auto-Deploy Script** (`/app/scripts/auto-deploy.sh`)
   - Automatically checks GitHub every 5 minutes
   - Pulls latest code from `deploy` branch
   - Updates npm packages when needed
   - Regenerates Prisma client when needed
   - Rebuilds Next.js application
   - Restarts the app automatically

2. **Git Integration**
   - Git installed in container
   - Auto-initializes repository on startup
   - Connects to: https://github.com/frostfire1/Booking-Infra_Competition.git
   - Tracks `deploy` branch

3. **Smart Update Logic**
   - Only updates dependencies when `package.json` changes
   - Only regenerates Prisma when `schema.prisma` changes
   - Always rebuilds Next.js for latest code
   - Complete logging and error handling

## 🔄 How It Works

### Automatic Deployment Flow:

```
GitHub (deploy branch) 
    ↓ (Push changes)
    ↓
Container checks every 5 minutes
    ↓ (New commit detected)
    ↓
Git pulls latest code
    ↓
Checks for changes:
    • package.json changed? → npm install
    • schema.prisma changed? → prisma generate
    ↓
Always runs:
    • npx prisma db push (migrate database)
    • npm run build (rebuild Next.js)
    ↓
Restarts application
    ↓
✅ New code is live!
```

## 📋 Deployment Instructions

### Step 1: Deploy to Virtuozzo

1. **Pull the new image** in Virtuozzo dashboard:
   - Go to your environment: `node34263-timnya-arsyad.jh-beon.cloud`
   - Update container to use: `frostfire2007/jhic-arsyad:v1.0.6` or `:latest`
   - Redeploy

2. **Set environment variables** (if not already set):
   ```env
   DATABASE_URL=mysql://user:pass@host:port/database
   NEXTAUTH_SECRET=your-secret-here
   NEXTAUTH_URL=http://node34263-timnya-arsyad.jh-beon.cloud
   TRIPAY_API_KEY=your-tripay-api-key
   TRIPAY_PRIVATE_KEY=your-tripay-private-key
   TRIPAY_MERCHANT_CODE=your-merchant-code
   SSH_PASSWORD=your-secure-password
   ```

### Step 2: Verify Auto-Deploy is Running

SSH into your container:
```bash
ssh nodejs@node34263-timnya-arsyad.jh-beon.cloud -p 22
```

Check cron jobs:
```bash
crontab -l
```

You should see:
```
*/5 * * * * /app/scripts/health-check.sh
*/5 * * * * /app/scripts/auto-deploy.sh
```

### Step 3: Test Auto-Deploy

1. **Make a code change** in your repository
2. **Commit and push** to the `deploy` branch:
   ```bash
   git add .
   git commit -m "Test auto-deploy"
   git push origin deploy
   ```

3. **Wait 5 minutes** (or run manually):
   ```bash
   ssh nodejs@your-server -p 22
   /app/scripts/auto-deploy.sh
   ```

4. **Check logs**:
   ```bash
   tail -f /var/log/auto-deploy.log
   ```

## 📊 Monitoring

### Log Files:

- **Auto-Deploy Log**: `/var/log/auto-deploy.log`
  - Git fetch/pull status
  - npm install output
  - Prisma generate output
  - Build status
  - Restart confirmation

- **Application Log**: `/var/log/nextjs.log`
  - Next.js server output
  - Application errors

- **Health Monitor Log**: `/var/log/app-monitor.log`
  - Health check results
  - Auto-restart events

- **SSH Monitor Log**: `/var/log/ssh-monitor.log`
  - SSH status checks
  - SSH restart events

### View Logs:

```bash
# Auto-deploy logs (real-time)
tail -f /var/log/auto-deploy.log

# Last 100 lines of all logs
tail -n 100 /var/log/auto-deploy.log
tail -n 100 /var/log/nextjs.log
tail -n 100 /var/log/app-monitor.log
tail -n 100 /var/log/ssh-monitor.log

# All logs at once
tail -f /var/log/*.log
```

## 🎯 Manual Deployment

If you need to deploy immediately without waiting for cron:

```bash
ssh nodejs@your-server -p 22
/app/scripts/auto-deploy.sh
```

The script will:
1. ✅ Check for new commits
2. ✅ Pull if updates found
3. ✅ Update dependencies (if needed)
4. ✅ Update Prisma (if needed)
5. ✅ Rebuild Next.js
6. ✅ Restart application
7. ✅ Verify health

## 🔧 Script Configuration

### Change Polling Interval

Currently checks every 5 minutes. To change:

```bash
ssh nodejs@your-server -p 22

# Edit crontab
crontab -e

# Change from:
*/5 * * * * /app/scripts/auto-deploy.sh

# To check every minute:
* * * * * /app/scripts/auto-deploy.sh

# Or every 10 minutes:
*/10 * * * * /app/scripts/auto-deploy.sh
```

### Change Target Branch

Edit `/app/scripts/auto-deploy.sh`:
```bash
BRANCH="deploy"  # Change to your branch name
```

## 🛡️ Safety Features

### Lock File Protection
- Prevents multiple deployments running simultaneously
- Uses `/tmp/auto-deploy.lock` with PID tracking
- Auto-cleans stale locks after 30 minutes

### Error Handling
- Comprehensive error logging
- Continues even if some steps fail
- Verifies app health after restart
- Rollback available (manual via git)

### Git Safety
- Uses `git fetch` to check updates safely
- Compares commits before pulling
- No destructive operations
- `.gitignore` prevents accidental commits

## 📦 What Gets Updated

### Always Updated:
- ✅ Application code (src/*)
- ✅ Next.js pages and components
- ✅ API routes
- ✅ Public assets
- ✅ Environment-specific configs

### Conditionally Updated:
- 📦 npm packages (only if `package.json` changed)
- 🗄️ Prisma client (only if `schema.prisma` changed)
- 🗄️ Database schema (via `prisma db push`)

### Never Updated (Built into Docker):
- ❌ Node.js version
- ❌ Alpine Linux packages
- ❌ SSH configuration
- ❌ Cron jobs setup
- ❌ Base system tools

## 🚨 Troubleshooting

### Auto-deploy not triggering?

1. **Check cron is running**:
   ```bash
   pgrep crond
   # Should return a PID
   ```

2. **Check crontab**:
   ```bash
   crontab -l
   # Should show auto-deploy.sh entry
   ```

3. **Test manually**:
   ```bash
   /app/scripts/auto-deploy.sh
   # Check output for errors
   ```

4. **Check logs**:
   ```bash
   tail -n 50 /var/log/auto-deploy.log
   ```

### Git errors?

```bash
# Re-initialize git
cd /app
rm -rf .git
git init
git remote add origin https://github.com/frostfire1/Booking-Infra_Competition.git
git fetch origin
git checkout -b deploy origin/deploy
```

### npm or Prisma errors?

```bash
# Clean install
cd /app
rm -rf node_modules package-lock.json
npm install
npx prisma generate
npm run build
```

### App not restarting?

```bash
# Manual restart
pkill -f "node server.js"
cd /app
nohup node server.js > /var/log/nextjs.log 2>&1 &

# Check if running
ps aux | grep "node server.js"
curl http://localhost:3000
```

## 🎉 Benefits

### Before (Manual Deployment):
1. Make code changes
2. Commit to GitHub
3. Rebuild Docker image locally (5-10 min)
4. Push to Docker Hub (5-10 min)
5. Pull in Virtuozzo (2-5 min)
6. Restart container
**Total: 15-30 minutes + manual work**

### After (Auto-Deploy):
1. Make code changes
2. Push to `deploy` branch
3. Wait up to 5 minutes
**Total: ~5 minutes, fully automated!** 🚀

## 📝 Development Workflow

### Recommended Git Workflow:

```bash
# Your local development
git checkout main
# Make changes...
git add .
git commit -m "New feature"

# Deploy to production
git checkout deploy
git merge main
git push origin deploy

# Auto-deploy takes over!
# Wait 5 minutes and your changes are live!
```

### Branch Strategy:
- **main**: Development branch
- **deploy**: Production branch (auto-deploys)
- Feature branches: Create as needed, merge to main first

## 🔐 Security Notes

1. **SSH Access**: Always use strong `SSH_PASSWORD` in environment variables
2. **Git Credentials**: Currently uses public repo, no credentials needed
3. **Environment Variables**: Never commit sensitive data to Git
4. **Database**: Auto-deploy runs `prisma db push` - test schema changes first!

## 📞 Support

If you encounter issues:

1. Check logs: `/var/log/auto-deploy.log`
2. Test manually: `/app/scripts/auto-deploy.sh`
3. Verify environment variables are set
4. Ensure GitHub repo is accessible
5. Check disk space: `df -h`
6. Verify permissions: `ls -la /app/scripts/`

## 🎯 Next Steps

1. ✅ Deploy v1.0.6 to Virtuozzo
2. ✅ Set environment variables
3. ✅ Verify auto-deploy is running
4. ✅ Test with a small change
5. ✅ Monitor logs for first few deployments
6. 🚀 Enjoy automated deployments!

---

## 📋 Quick Command Reference

```bash
# SSH into container
ssh nodejs@node34263-timnya-arsyad.jh-beon.cloud -p 22

# View auto-deploy logs
tail -f /var/log/auto-deploy.log

# Run deploy manually
/app/scripts/auto-deploy.sh

# Check cron jobs
crontab -l

# Check app status
ps aux | grep node
curl http://localhost:3000

# Restart app manually
pkill -f "node server.js"
cd /app && nohup node server.js > /var/log/nextjs.log 2>&1 &
```

---

**Docker Image**: `frostfire2007/jhic-arsyad:v1.0.6`
**GitHub Repo**: https://github.com/frostfire1/Booking-Infra_Competition.git
**Deploy Branch**: `deploy`
**Check Interval**: Every 5 minutes

🎉 **You can now push code changes to GitHub and they'll automatically deploy without rebuilding Docker!**
