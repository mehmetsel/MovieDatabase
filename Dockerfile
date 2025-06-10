# 1. Build aşaması
FROM node:18-alpine AS builder

WORKDIR /app

COPY . .

RUN npm install
RUN npm run build

# 2. Runtime aşaması
FROM node:18-alpine

WORKDIR /app

# Sadece .output klasörünü al
COPY --from=builder /app/.output .output
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package*.json ./

EXPOSE 3000

CMD ["node", ".output/server/index.mjs"]
