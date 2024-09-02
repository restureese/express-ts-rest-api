FROM oven/bun:1-slim as builder

WORKDIR /app

COPY package*.json bun.lockb ./

RUN bun install

FROM oven/bun:1-slim as production

WORKDIR /app

COPY --from=builder /app/node_modules node_modules

ENV NODE_ENV=production

COPY . .

EXPOSE 8000

CMD ["bun", "start"]