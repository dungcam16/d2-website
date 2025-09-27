worker_processes 1;

events { worker_connections 1024; }

http {
  include       mime.types;
  default_type  application/octet-stream;
  sendfile        on;
  keepalive_timeout  65;

  upstream blog_upstream {
    server blog-server:3000;
  }

  server {
    listen 80;
    server_name _;

    # API/landing page tĩnh
    root /usr/share/nginx/html;
    index index.html;

    # Proxy /blog và tất cả route con tới backend blog-server
    location ^~ /blog/ {
      proxy_pass         http://blog_upstream;
      proxy_http_version 1.1;
      proxy_set_header   Host $host;
      proxy_set_header   X-Real-IP $remote_addr;
      proxy_set_header   X-Forwarded-For $proxy_add_x_forwarded_for;
      proxy_set_header   X-Forwarded-Proto $scheme;
    }

    # Phục vụ SPA chính
    location / {
      try_files $uri $uri/ /index.html;
    }

    # Cache static assets
    location ~* \.(?:js|css|png|jpg|jpeg|gif|svg|ico)$ {
      expires 1y;
      add_header Cache-Control "public";
    }
  }
}
