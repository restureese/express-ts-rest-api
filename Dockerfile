FROM oven/bun:1-slim

WORKDIR /app

COPY package*.json bun.lockb ./

RUN bun install

COPY . .

EXPOSE 8000

CMD ["bun", "start"]