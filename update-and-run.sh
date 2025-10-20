if [ "$(id -u)" -ne 0 ]; then
	echo "This script must be run as root." >&2
	exit 1
fi
#!/bin/sh
set -e


echo "Updating code from GitHub..."
if [ -d /app/.git ]; then
	cd /app
	git pull origin master || true
else
	if [ -f /app/.env ]; then
		cp /app/.env /tmp/.env
	fi
	rm -rf /app/*
	git clone https://github.com/frostfire1/Booking-Infra_Competition.git /app
	if [ -f /tmp/.env ]; then
		mv /tmp/.env /app/.env
	fi
	cd /app
fi

# Always install dependencies and build after update
/root/.bun/bin/bun install
/root/.bun/bin/bun run build

# Start the Bun app
exec /root/.bun/bin/bun run start
