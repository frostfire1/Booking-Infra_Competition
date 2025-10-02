#!/bin/bash
# Quick fix for nginx log error in Jelastic/Virtuozzo
# Run: bash fix-nginx.sh

echo "🔧 Fixing nginx log directory issue..."
echo ""

# Create log directory
echo "📁 Creating /var/log/nginx directory..."
mkdir -p /var/log/nginx
mkdir -p /var/cache/nginx
mkdir -p /var/run

# Create log files
echo "📝 Creating log files..."
touch /var/log/nginx/error.log
touch /var/log/nginx/access.log

# Set permissions
echo "🔐 Setting permissions..."
chmod 755 /var/log/nginx
chmod 755 /var/cache/nginx
chmod 644 /var/log/nginx/error.log
chmod 644 /var/log/nginx/access.log

# Try to set ownership (nginx or www-data)
echo "👤 Setting ownership..."
if id nginx &>/dev/null; then
    chown -R nginx:nginx /var/log/nginx
    chown -R nginx:nginx /var/cache/nginx
    echo "   ✅ Set owner to nginx"
elif id www-data &>/dev/null; then
    chown -R www-data:www-data /var/log/nginx
    chown -R www-data:www-data /var/cache/nginx
    echo "   ✅ Set owner to www-data"
else
    echo "   ⚠️  Could not find nginx or www-data user"
fi

# Test nginx configuration
echo ""
echo "🧪 Testing nginx configuration..."
if nginx -t; then
    echo "   ✅ Configuration is valid"
else
    echo "   ❌ Configuration has errors"
    echo "   Check /etc/nginx/nginx.conf"
fi

# Restart nginx
echo ""
echo "🔄 Restarting nginx..."
if systemctl restart nginx; then
    echo "   ✅ Nginx restarted successfully"
else
    echo "   ❌ Failed to restart nginx"
fi

# Check status
echo ""
echo "📊 Checking nginx status..."
systemctl status nginx --no-pager | head -10

# Check if Docker container is running
echo ""
echo "🐳 Checking Docker containers..."
if command -v docker &> /dev/null; then
    docker ps --format "table {{.Names}}\t{{.Status}}\t{{.Ports}}"
else
    echo "   Docker not found or not accessible"
fi

echo ""
echo "✅ Done! If nginx is running, your app should be accessible."
echo ""
echo "🔍 Quick checks:"
echo "   - Nginx status: systemctl status nginx"
echo "   - Docker status: docker ps"
echo "   - App logs: docker logs <container-name>"
echo "   - Test: curl http://localhost:3000"
