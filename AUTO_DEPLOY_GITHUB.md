# 🚀 Auto-Deploy from GitHub Without Docker Rebuild

## 📋 Overview

This setup enables **continuous deployment** directly from GitHub without rebuilding Docker images. When you push code to the `deploy` branch, the container automatically:

1. ✅ Detects new commits (checks every 5 minutes)
2. ✅ Pulls latest code from GitHub
3. ✅ Installs dependencies if needed
4. ✅ Runs database migrations
5. ✅ Rebuilds Next.js app
6. ✅ Restarts the application
7. ✅ Logs everything

---

## 🎯 How It Works

```
Every 5 minutes:
   ↓
Check GitHub for updates
   ↓
New commit found?
   ├─ NO → Skip deployment
   └─ YES ↓
         Pull latest code
         ↓
         Install dependencies (if package.json changed)
         ↓
         Generate Prisma (if schema changed)
         ↓
         Build Next.js app
         ↓
         Stop old app
         ↓
         Start new app
         ↓
         Verify app is running
         ↓
         ✅ Deployment complete!
```

---

## 🔧 Setup Instructions

### Option 1: Quick Setup (Existing Container)

If your container is already running:

```bash
# 1. SSH into container
ssh nodejs@your-server.com -p 22

# 2. Switch to root (or SSH as root)
su root

# 3. Install git
apk add --no-cache git

# 4. Download the auto-deploy scripts
# (You need to copy them from your local machine)

# 5. Make scripts executable
chmod +x /app/scripts/auto-deploy.sh
chmod +x /app/scripts/setup-auto-deploy.sh

# 6. Run setup
/app/scripts/setup-auto-deploy.sh

# 7. Test it manually
/app/scripts/auto-deploy.sh
```

### Option 2: Add to Dockerfile (Recommended)

Update your Dockerfile to include auto-deploy at build time:

```dockerfile
# Add git installation
RUN apk add --no-cache git openssh-server openssh tzdata cronie curl

# Setup git configuration
RUN git config --global user.email "deploy@intra-booking.local" && \
    git config --global user.name "Auto Deploy" && \
    git config --global --add safe.directory /app

# Add auto-deploy to startup
RUN echo '/app/scripts/setup-auto-deploy.sh' >> /app/startup.sh
```

Then rebuild:
```bash
docker build -t frostfire2007/jhic-arsyad:v1.1.0 .
docker push frostfire2007/jhic-arsyad:v1.1.0
```

---

## 📁 Required Files

### 1. `scripts/auto-deploy.sh`
Main deployment script that:
- Checks GitHub for updates
- Pulls new code
- Builds and restarts app
- Logs all actions

### 2. `scripts/setup-auto-deploy.sh`
Setup script that:
- Installs git
- Configures cron job
- Makes scripts executable

---

## 🎮 Usage

### Automatic Deployment

Once set up, just push to the `deploy` branch:

```bash
# On your local machine:
git add .
git commit -m "Update feature"
git push origin deploy

# Wait up to 5 minutes
# Container will automatically detect, pull, and deploy!
```

### Manual Deployment

Force deployment immediately:

```bash
# SSH into container
ssh nodejs@your-server.com -p 22

# Run deployment manually
sudo /app/scripts/auto-deploy.sh

# Or as root:
/app/scripts/auto-deploy.sh
```

### Check Deployment Status

```bash
# View auto-deploy logs
tail -f /var/log/auto-deploy.log

# View app logs
tail -f /var/log/nextjs.log

# Check current commit
cd /app
git log -1 --oneline
```

---

## ⚙️ Configuration

### Change Check Interval

Default is every 5 minutes. To change:

```bash
# Edit crontab
crontab -e

# Change from:
*/5 * * * * /app/scripts/auto-deploy.sh

# To every 2 minutes:
*/2 * * * * /app/scripts/auto-deploy.sh

# Or every 10 minutes:
*/10 * * * * /app/scripts/auto-deploy.sh

# Or every hour:
0 * * * * /app/scripts/auto-deploy.sh
```

### Change Repository or Branch

Edit `/app/scripts/auto-deploy.sh`:

```bash
# Change these variables:
REPO_URL="https://github.com/frostfire1/Booking-Infra_Competition.git"
BRANCH="deploy"  # Change to main, master, etc.
```

### Use Private Repository (with GitHub Token)

If your repo is private:

```bash
# 1. Create GitHub Personal Access Token
# Go to: https://github.com/settings/tokens
# Create token with 'repo' scope

# 2. Set token as environment variable
export GITHUB_TOKEN="ghp_your_token_here"

# 3. Update REPO_URL in auto-deploy.sh:
REPO_URL="https://${GITHUB_TOKEN}@github.com/frostfire1/Booking-Infra_Competition.git"

# Or set in Virtuozzo environment variables:
# GITHUB_TOKEN=ghp_your_token_here
```

---

## 📊 Monitoring

### View Deployment Logs

```bash
# Live tail
tail -f /var/log/auto-deploy.log

# Last 50 lines
tail -50 /var/log/auto-deploy.log

# Search for errors
grep "❌" /var/log/auto-deploy.log

# Search for successful deployments
grep "🎉" /var/log/auto-deploy.log
```

### Check Deployment History

```bash
# See all deployments today
grep "$(date +%Y-%m-%d)" /var/log/auto-deploy.log

# Count deployments
grep "Auto-deployment completed" /var/log/auto-deploy.log | wc -l

# Last deployment time
grep "Auto-deployment completed" /var/log/auto-deploy.log | tail -1
```

### Monitor in Real-Time

```bash
# Watch for changes
watch -n 10 'tail -5 /var/log/auto-deploy.log'

# Full dashboard
watch -n 10 '
echo "=== LAST DEPLOYMENT ===" && \
tail -10 /var/log/auto-deploy.log && \
echo "" && \
echo "=== APP STATUS ===" && \
ps aux | grep "node server.js" | grep -v grep && \
echo "" && \
echo "=== CURRENT COMMIT ===" && \
cd /app && git log -1 --oneline
'
```

---

## 🧪 Testing

### Test 1: Manual Deployment

```bash
# SSH into container
ssh nodejs@your-server.com -p 22

# Run deployment manually
sudo /app/scripts/auto-deploy.sh

# Check logs
tail -f /var/log/auto-deploy.log

# Should see:
# ✅ Already up to date (if no changes)
# OR
# 📦 New commits detected!
# 🚀 Starting deployment process...
# ✅ Deployment successful!
```

### Test 2: Push and Auto-Deploy

```bash
# On local machine, make a change
echo "console.log('test')" >> src/app/page.jsx

# Commit and push
git add .
git commit -m "Test auto-deploy"
git push origin deploy

# Wait 5 minutes (or less)

# SSH to server and check logs
ssh nodejs@your-server.com -p 22
tail -f /var/log/auto-deploy.log

# Should see automatic deployment!
```

### Test 3: Verify App Updated

```bash
# Check current commit on server
ssh nodejs@your-server.com -p 22
cd /app
git log -1 --oneline

# Should match your latest local commit!

# Test app is running
curl http://localhost:3000
```

---

## 🚨 Troubleshooting

### Issue: "Git pull failed"

**Causes**:
- Network connectivity issues
- Git conflicts
- Permissions

**Solutions**:
```bash
# Check network
ping github.com

# Check git status
cd /app
git status

# Reset local changes (CAUTION!)
git reset --hard origin/deploy

# Check permissions
ls -la /app/.git
chown -R nodejs:nodejs /app
```

### Issue: "Build failed"

**Causes**:
- Syntax errors in code
- Missing dependencies
- Node/npm issues

**Solutions**:
```bash
# Check build logs
tail -100 /var/log/auto-deploy.log

# Try building manually
cd /app
npm run build

# Clear cache and rebuild
rm -rf .next node_modules
npm ci
npm run build
```

### Issue: "App not responding after deploy"

**Causes**:
- App crashed during startup
- Port already in use
- Missing environment variables

**Solutions**:
```bash
# Check app logs
tail -100 /var/log/nextjs.log

# Check if app is running
ps aux | grep node

# Check port
netstat -tlnp | grep 3000

# Restart manually
pkill -f "node server.js"
cd /app
node server.js
```

### Issue: "No updates detected"

**Causes**:
- Git fetch not working
- Wrong branch
- Git cache issue

**Solutions**:
```bash
# Check remote
cd /app
git remote -v

# Force fetch
git fetch --all

# Check branch
git branch -a

# Reset tracking
git branch --set-upstream-to=origin/deploy deploy
```

---

## 🔒 Security Considerations

### For Private Repositories

**Option 1: Deploy Keys (Recommended)**

```bash
# 1. Generate SSH key in container
ssh-keygen -t ed25519 -C "deploy@intra-booking"

# 2. Copy public key
cat ~/.ssh/id_ed25519.pub

# 3. Add to GitHub repo:
# Settings → Deploy keys → Add deploy key
# Paste the public key

# 4. Update auto-deploy.sh to use SSH:
REPO_URL="git@github.com:frostfire1/Booking-Infra_Competition.git"
```

**Option 2: Personal Access Token**

```bash
# 1. Create token at: https://github.com/settings/tokens
# Scope: repo

# 2. Set as environment variable
export GITHUB_TOKEN="ghp_your_token"

# 3. Update auto-deploy.sh:
REPO_URL="https://${GITHUB_TOKEN}@github.com/frostfire1/Booking-Infra_Competition.git"
```

### Protect Production

```bash
# Only deploy from specific branch
BRANCH="deploy"  # Not main/master

# Add confirmation before deploy
echo "Deploy to production? (y/n)"
read -r CONFIRM
[ "$CONFIRM" != "y" ] && exit 0

# Add Slack/Discord webhook notification
curl -X POST -H 'Content-type: application/json' \
  --data '{"text":"🚀 Deployed to production!"}' \
  YOUR_WEBHOOK_URL
```

---

## 📈 Advanced Features

### Rollback to Previous Version

```bash
# See recent commits
cd /app
git log --oneline -10

# Rollback to specific commit
git reset --hard <commit-hash>

# Rebuild and restart
npm run build
pkill -f "node server.js"
node server.js &
```

### Zero-Downtime Deployment

```bash
# Start new instance on different port
PORT=3001 node server.js &

# Wait for it to be ready
sleep 5

# Switch nginx to new port
# Update nginx config and reload

# Kill old instance
pkill -f "PORT=3000"
```

### Post-Deploy Hooks

Edit `auto-deploy.sh`, add after successful deployment:

```bash
# Clear cache
redis-cli FLUSHALL

# Warm up cache
curl http://localhost:3000/api/warmup

# Send notification
curl -X POST https://slack.com/webhook \
  -d '{"text":"Deployed successfully!"}'

# Run tests
npm test
```

---

## ✅ Best Practices

1. **Always test locally first**
   ```bash
   npm run build
   npm start
   ```

2. **Use feature branches for development**
   ```bash
   # Develop in feature branch
   git checkout -b feature/new-thing
   
   # Merge to deploy when ready
   git checkout deploy
   git merge feature/new-thing
   git push origin deploy
   ```

3. **Monitor logs after deployment**
   ```bash
   tail -f /var/log/auto-deploy.log /var/log/nextjs.log
   ```

4. **Keep deploy branch clean**
   ```bash
   # Only merge tested code
   # Don't commit directly to deploy
   ```

5. **Set up alerts for failed deployments**
   ```bash
   # Add to auto-deploy.sh
   if [ $? -ne 0 ]; then
       echo "Deploy failed!" | mail -s "Alert" admin@example.com
   fi
   ```

---

## 📊 Workflow Example

### Developer Workflow

```bash
# 1. Create feature branch
git checkout -b feature/new-ui
git push origin feature/new-ui

# 2. Develop and test locally
# ... make changes ...
npm run dev
npm run build
npm test

# 3. Commit changes
git add .
git commit -m "Add new UI"
git push origin feature/new-ui

# 4. Merge to deploy branch
git checkout deploy
git merge feature/new-ui
git push origin deploy

# 5. Wait 5 minutes (or force deploy)
# Container automatically deploys! 🎉

# 6. Monitor deployment
ssh nodejs@server "tail -f /var/log/auto-deploy.log"

# 7. Verify
curl https://your-domain.com

# 8. If issues, rollback
ssh nodejs@server
cd /app
git reset --hard HEAD~1
/app/scripts/auto-deploy.sh
```

---

## 🎉 Summary

### What You Get:

- ✅ **No Docker rebuild** needed for code changes
- ✅ **Automatic deployment** from GitHub (every 5 min)
- ✅ **Full build pipeline** (deps, prisma, next.js)
- ✅ **Zero-config** after initial setup
- ✅ **Complete logging** of all deployments
- ✅ **Manual deploy** option available
- ✅ **Rollback** capability
- ✅ **Works with .next** standalone output

### Deployment Process:

```
Push to deploy branch
   ↓ (wait 5 min)
Auto-detected
   ↓
Pull code
   ↓
Install deps
   ↓
Build app
   ↓
Restart app
   ↓
✅ Live!
```

### Commands You'll Use:

```bash
# Monitor deployments
tail -f /var/log/auto-deploy.log

# Force deploy now
/app/scripts/auto-deploy.sh

# Check current version
cd /app && git log -1 --oneline

# View cron schedule
crontab -l
```

---

**Your app now deploys automatically from GitHub! No Docker rebuild needed! 🚀**
