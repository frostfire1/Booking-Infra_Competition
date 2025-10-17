# 🚀 Quick Fix Commands - v1.0.7

## Build and Deploy

```powershell
# Build
docker build -t frostfire2007/jhic-arsyad:v1.0.7 -t frostfire2007/jhic-arsyad:latest .

# Push
docker push frostfire2007/jhic-arsyad:v1.0.7
docker push frostfire2007/jhic-arsyad:latest
```

## After Deployment - Check Status

```bash
# SSH into container
ssh nodejs@node34264-timnya-arsyad.jh-beon.cloud -p 22

# Check if app is running
ps aux | grep node

# Check logs
sudo tail -f /var/log/nextjs.log
sudo tail -f /var/log/prisma.log

# Test app
curl http://localhost:3000
```

## If App Not Running - Manual Start

```bash
# SSH in
ssh nodejs@node34264-timnya-arsyad.jh-beon.cloud -p 22

# Become root (now works with sudo!)
sudo su

# Go to app directory
cd /app

# Check environment variables
echo $DATABASE_URL
# If empty, load from .env.example:
export $(cat .env.example | grep -v "^#" | xargs)

# Start app manually
PORT=3000 HOSTNAME=0.0.0.0 node server.js
# Watch for errors, press Ctrl+C to stop

# Or start in background
su -s /bin/sh nodejs -c "cd /app && nohup node server.js > /var/log/nextjs.log 2>&1 &"

# Verify it started
ps aux | grep node
curl http://localhost:3000
```

## Set Environment Variables

**In Virtuozzo Dashboard:**
1. Go to your environment
2. Click container settings
3. Add these variables:

```env
DATABASE_URL=mysql://user:password@host:port/database
NEXTAUTH_SECRET=your-secret-here
NEXTAUTH_URL=http://node34264-timnya-arsyad.jh-beon.cloud
TRIPAY_API_KEY=your-key
TRIPAY_PRIVATE_KEY=your-key
TRIPAY_MERCHANT_CODE=your-code
SSH_PASSWORD=your-password
NODE_ENV=production
```

4. Redeploy container

**Or create .env file in container:**

```bash
ssh nodejs@node34264-timnya-arsyad.jh-beon.cloud -p 22
sudo su
cd /app

# Create .env file
cat > .env << 'EOF'
DATABASE_URL="mysql://user:pass@host:port/database"
NEXTAUTH_SECRET="your-secret"
NEXTAUTH_URL="http://node34264-timnya-arsyad.jh-beon.cloud"
TRIPAY_API_KEY="your-key"
TRIPAY_PRIVATE_KEY="your-key"
TRIPAY_MERCHANT_CODE="your-code"
NODE_ENV="production"
EOF

# Restart app
pkill -f "node server.js"
su -s /bin/sh nodejs -c "cd /app && nohup node server.js > /var/log/nextjs.log 2>&1 &"
```

## Common Issues

### "No node process running"
```bash
sudo su
cd /app
su -s /bin/sh nodejs -c "cd /app && nohup node server.js > /var/log/nextjs.log 2>&1 &"
```

### "Database connection failed"
```bash
# Check DATABASE_URL is set
echo $DATABASE_URL

# Test database connection
npx prisma db push

# Check if database host is reachable
ping your-db-host
```

### "Permission denied"
```bash
# Use sudo (now works!)
sudo su
```

### "App crashes immediately"
```bash
# Check logs for errors
sudo tail -100 /var/log/nextjs.log
sudo tail -100 /var/log/prisma.log
```

## What's Fixed in v1.0.7

✅ Sudo works - can use `sudo su`  
✅ Environment variables checked on startup  
✅ Falls back to .env.example if no env vars  
✅ Better error messages  
✅ Verifies app actually starts  
✅ Separate log files for debugging  

## Sudo Commands Now Work!

```bash
# Become root
sudo su

# Run commands as root
sudo tail -f /var/log/nextjs.log
sudo pkill -f "node server.js"
sudo ls -la /app

# Check who you are
sudo whoami
# Output: root
```

---

**Need detailed help?** See `DOCKER_FIXES_V1.0.7.md`
