# K-Network - Forex & Crypto Brokers Platform

## Cài đặt

### Cách 1: Chạy với Docker (Khuyến nghị)

1. Clone repository:
```bash
git clone <repository-url>
cd forex-news
```

2. Chạy với Docker Compose:
```bash
# Production
docker-compose up -d

# Development
docker-compose -f docker-compose.dev.yml up -d
```

3. Truy cập ứng dụng:
- Production: https://k-network.io
- Development: http://localhost:3000
- Backend API: http://localhost:8080
- Nginx Proxy: http://localhost:80

### Cách 2: Chạy thủ công

1. Clone repository:
```bash
git clone <repository-url>
cd forex-news
```

2. Cài đặt dependencies:
```bash
npm install
```

3. Cấu hình environment variables:
Tạo file `.env.local` trong thư mục gốc:
```env
# Backend API URL
NEXT_PUBLIC_API_BASE_URL=http://localhost:8080

# Other environment variables
# NEXT_PUBLIC_APP_NAME=K-Network
# NEXT_PUBLIC_APP_VERSION=1.0.0
```

4. Chạy development server:
```bash
npm run dev
```

## Cấu trúc dự án

```
forex-news/
├── app/                    # Next.js app directory
│   ├── api/               # API routes
│   ├── broker/            # Forex brokers pages
│   ├── crypto-brokers/    # Crypto brokers pages
│   ├── components/        # Reusable components
│   ├── contexts/          # React contexts
│   ├── contact/           # Contact page
│   ├── knowledge/         # Knowledge pages
│   ├── news/              # News pages
│   └── page.tsx           # Home page
├── lib/                   # Utility libraries
│   ├── api.ts            # API configuration & functions
│   └── data.ts           # Data interfaces
├── public/                # Static assets
├── data/                  # JSON data files
├── Dockerfile             # Production Docker image
├── Dockerfile.dev         # Development Docker image
├── docker-compose.yml     # Production Docker Compose
├── docker-compose.dev.yml # Development Docker Compose
├── nginx.conf             # Nginx configuration
├── SSL-SETUP.md          # SSL setup guide
└── .dockerignore          # Docker ignore file
```

## API Configuration

Dự án sử dụng centralized API configuration trong `lib/api.ts`:

- **Environment Variables**: URL backend được cấu hình qua `NEXT_PUBLIC_API_BASE_URL`
- **API Endpoints**: Định nghĩa tất cả endpoints trong một nơi
- **Type Safety**: Sử dụng TypeScript interfaces cho API responses
- **Error Handling**: Xử lý lỗi tập trung

### Sử dụng API:

```typescript
import { forexBrokersApi, cryptoBrokersApi } from '@/lib/api'

// Lấy danh sách Forex brokers
const forexBrokers = await forexBrokersApi.getAll()

// Lấy danh sách Crypto brokers  
const cryptoBrokers = await cryptoBrokersApi.getAll()
```

## Tính năng

- 🌍 **Multi-language Support**: Tiếng Việt và Tiếng Anh
- 🎨 **Dark/Light Theme**: Hỗ trợ theme sáng/tối
- 📱 **Responsive Design**: Tương thích mọi thiết bị
- 🔍 **Search & Filter**: Tìm kiếm và lọc brokers
- 📊 **Broker Reviews**: Đánh giá chi tiết các sàn giao dịch
- 📰 **News & Knowledge**: Tin tức và kiến thức forex/crypto

## Công nghệ sử dụng

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS
- **State Management**: React Context API
- **Icons**: Lucide React
- **Build Tool**: Next.js App Router

## Docker Commands

### Production:
```bash
# Build và chạy tất cả services
docker-compose up -d

# Chỉ build frontend
docker-compose build frontend

# Xem logs
docker-compose logs -f frontend

# Dừng tất cả services
docker-compose down

# Dừng và xóa volumes
docker-compose down -v
```

### Development:
```bash
# Chạy development environment
docker-compose -f docker-compose.dev.yml up -d

# Rebuild development container
docker-compose -f docker-compose.dev.yml build --no-cache

# Xem logs development
docker-compose -f docker-compose.dev.yml logs -f frontend-dev
```

### Docker Commands khác:
```bash
# Build Docker image
docker build -t forex-news .

# Hoặc sử dụng script build
./docker-build.sh

# Chạy container đơn lẻ
docker run -p 3000:3000 forex-news

# Xem images
docker images

# Xóa unused images
docker image prune

# Debug build issues
docker build --no-cache -t forex-news .
```

## Development

### Scripts:

```bash
npm run dev          # Development server
npm run build        # Build production
npm run start        # Start production server
npm run lint         # Lint code
```

### Environment Variables:

- `NEXT_PUBLIC_API_BASE_URL`: URL của backend API (default: http://localhost:8080)

## Troubleshooting

### Docker Build Issues:

**Lỗi: Cannot find module '@tailwindcss/typography'**
- ✅ Đã sửa: Dockerfile đã được cập nhật để cài đặt tất cả dependencies (bao gồm devDependencies) cho build process

**Lỗi: Invalid next.config.js options detected**
- ✅ Đã sửa: Loại bỏ `suppressHydrationWarning` khỏi experimental config

**Lỗi: Build failed because of webpack errors**
```bash
# Thử build lại với no-cache
docker build --no-cache -t forex-news .

# Hoặc xóa images cũ và build lại
docker image rm forex-news:latest
docker build -t forex-news .
```

### Common Docker Commands:

```bash
# Xem logs của container
docker-compose logs -f frontend

# Restart services
docker-compose restart

# Rebuild và restart
docker-compose up -d --build

# Xóa tất cả containers và volumes
docker-compose down -v
docker system prune -a
```

## SSL & Domain Setup

### Production Domain: k-network.io

Dự án đã được cấu hình để chạy trên domain `https://k-network.io/` với:

- ✅ **HTTPS Redirect**: Tự động redirect HTTP → HTTPS
- ✅ **SSL Security**: TLS 1.2/1.3 với strong ciphers
- ✅ **Security Headers**: HSTS, XSS Protection, Content Security
- ✅ **Performance**: Gzip compression, static file caching
- ✅ **WWW Support**: Hỗ trợ cả k-network.io và www.k-network.io

### SSL Setup:

Xem file [SSL-SETUP.md](./SSL-SETUP.md) để biết cách:
- Sử dụng Let's Encrypt (miễn phí)
- Sử dụng Cloudflare (dễ dàng)
- Tạo self-signed certificates (development)

### DNS Configuration:

Đảm bảo DNS records trỏ đúng:
```
A    k-network.io     → YOUR_SERVER_IP
A    www.k-network.io → YOUR_SERVER_IP
```

## Contributing

1. Fork repository
2. Tạo feature branch
3. Commit changes
4. Push to branch
5. Tạo Pull Request

## License

MIT License 