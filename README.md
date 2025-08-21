# K-Network - Forex & Crypto Brokers Platform

## Cài đặt

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
└── data/                  # JSON data files
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

## Contributing

1. Fork repository
2. Tạo feature branch
3. Commit changes
4. Push to branch
5. Tạo Pull Request

## License

MIT License 