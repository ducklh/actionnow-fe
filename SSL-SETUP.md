# SSL Setup cho k-network.io

## Cách 1: Sử dụng Let's Encrypt (Khuyến nghị)

### 1. Cài đặt Certbot
```bash
# Ubuntu/Debian
sudo apt update
sudo apt install certbot

# CentOS/RHEL
sudo yum install certbot

# macOS
brew install certbot
```

### 2. Tạo SSL certificates
```bash
# Tạo certificate cho domain
sudo certbot certonly --standalone -d k-network.io -d www.k-network.io

# Certificates sẽ được lưu tại:
# /etc/letsencrypt/live/k-network.io/fullchain.pem
# /etc/letsencrypt/live/k-network.io/privkey.pem
```

### 3. Copy certificates vào project
```bash
# Tạo thư mục ssl trong project
mkdir ssl

# Copy certificates
sudo cp /etc/letsencrypt/live/k-network.io/fullchain.pem ssl/k-network.io.crt
sudo cp /etc/letsencrypt/live/k-network.io/privkey.pem ssl/k-network.io.key

# Set permissions
sudo chown $USER:$USER ssl/*
chmod 644 ssl/k-network.io.crt
chmod 600 ssl/k-network.io.key
```

### 4. Cập nhật docker-compose.yml
Uncomment dòng SSL volume mount:
```yaml
volumes:
  - ./nginx.conf:/etc/nginx/nginx.conf:ro
  - ./ssl:/etc/nginx/ssl:ro  # Uncomment dòng này
```

## Cách 2: Sử dụng Cloudflare (Dễ dàng hơn)

### 1. Đăng ký Cloudflare
- Truy cập https://cloudflare.com
- Thêm domain k-network.io
- Follow DNS setup instructions

### 2. Cập nhật nginx.conf cho Cloudflare
```nginx
# Thay thế SSL config bằng:
ssl_certificate /etc/nginx/ssl/cloudflare-origin.crt;
ssl_certificate_key /etc/nginx/ssl/cloudflare-origin.key;
```

### 3. Download Origin certificates từ Cloudflare
- Vào SSL/TLS → Origin Server
- Tạo Origin Certificate
- Download và đặt vào thư mục ssl/

## Cách 3: Self-signed certificates (Development only)

```bash
# Tạo self-signed certificate
openssl req -x509 -nodes -days 365 -newkey rsa:2048 \
  -keyout ssl/k-network.io.key \
  -out ssl/k-network.io.crt \
  -subj "/C=VN/ST=HCM/L=HCM/O=K-Network/CN=k-network.io"
```

## Auto-renewal với Let's Encrypt

### 1. Tạo script renewal
```bash
#!/bin/bash
# renew-ssl.sh

certbot renew --quiet
cp /etc/letsencrypt/live/k-network.io/fullchain.pem ssl/k-network.io.crt
cp /etc/letsencrypt/live/k-network.io/privkey.pem ssl/k-network.io.key
docker-compose restart nginx
```

### 2. Thêm vào crontab
```bash
# Chạy mỗi tháng
0 3 1 * * /path/to/renew-ssl.sh
```

## Kiểm tra SSL

```bash
# Test SSL configuration
openssl s_client -connect k-network.io:443 -servername k-network.io

# Test với curl
curl -I https://k-network.io

# Test SSL rating
# Truy cập: https://www.ssllabs.com/ssltest/
```

## Troubleshooting

### Lỗi: SSL certificate not found
- Kiểm tra đường dẫn certificates trong nginx.conf
- Đảm bảo certificates có đúng permissions
- Restart nginx container: `docker-compose restart nginx`

### Lỗi: Domain not pointing to server
- Kiểm tra DNS records
- Đảm bảo domain trỏ đúng IP server
- Sử dụng `nslookup k-network.io` để kiểm tra

### Lỗi: Certificate expired
- Renew certificate: `certbot renew`
- Restart nginx: `docker-compose restart nginx`
