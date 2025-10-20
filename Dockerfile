FROM ubuntu:latest

RUN apt-get update && \
    apt-get install -y curl openssh-server systemd unzip

RUN curl -fsSL https://bun.sh/install | bash

RUN echo 'root:root123' | chpasswd

RUN mkdir /var/run/sshd

WORKDIR /app
COPY . .
RUN /root/.bun/bin/bun install
RUN /root/.bun/bin/bun run build

    COPY update-and-run.sh /app/update-and-run.sh
    RUN chmod +x /app/update-and-run.sh
    RUN echo "[Unit]\n\
Description=Next.js App with Bun\n\
After=network.target\n\
\n\
[Service]\n\
WorkingDirectory=/app\n\
ExecStart=/app/update-and-run.sh\n\
Environment=NODE_ENV=production\n\
Environment=PORT=3000\n\
Restart=always\n\
RestartSec=5\n\
User=root\n\
Group=root\n\
StandardOutput=append:/var/log/nextjs-bun.log\n\
StandardError=append:/var/log/nextjs-bun-error.log\n\
\n\
[Install]\n\
WantedBy=multi-user.target" > /etc/systemd/system/bun-app.service

RUN systemctl enable ssh && \
    systemctl enable bun-app

EXPOSE 22 3000

CMD ["/sbin/init"]