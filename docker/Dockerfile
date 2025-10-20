# Bun + Next.js + WebSocket Dockerfile for production
FROM oven/bun:latest

WORKDIR /app

COPY package.json bun.lockb ./
RUN bun install --production

COPY . .

RUN bun run build

EXPOSE 3000 8080

CMD ["bunx", "next", "start"]
