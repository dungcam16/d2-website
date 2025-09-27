# 1. Build Stage
FROM node:20-alpine AS builder
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build

# 2. Serve Stage
FROM nginx:alpine
# Remove default site
RUN rm -rf /usr/share/nginx/html/*

# Copy custom Nginx config
COPY nginx.conf /etc/nginx/nginx.conf

# Copy built files (main app)
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy blog build vào thư mục /blog
# Giả sử build blog ra /app/blog-dist
COPY --from=builder /app/blog-dist /usr/share/nginx/html/blog

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
