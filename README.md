# Forex News - Website Tin Tức và Sàn Forex

Website hiện đại cung cấp thông tin về các sàn forex uy tín và tin tức thị trường forex mới nhất.

## Tính năng chính

### 🏦 Trang Sàn Forex
- Danh sách các sàn forex uy tín với thông tin chi tiết
- Đánh giá và xếp hạng sàn
- Thông tin về quy định, spread, nạp tối thiểu
- Link trực tiếp đến website chính thức của sàn
- Tìm kiếm và lọc sàn theo tiêu chí

### 📰 Trang Tin Tức
- Tin tức forex mới nhất và cập nhật
- Phân tích kỹ thuật và cơ bản
- Tìm kiếm và lọc tin tức theo danh mục
- Giao diện đẹp mắt và dễ đọc

## Công nghệ sử dụng

- **Next.js 14** - Framework React hiện đại
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling framework
- **Lucide React** - Icon library
- **Responsive Design** - Tương thích mọi thiết bị

## Cài đặt và chạy

### Yêu cầu hệ thống
- Node.js 18+ 
- npm hoặc yarn

### Cài đặt dependencies
```bash
npm install
# hoặc
yarn install
```

### Chạy development server
```bash
npm run dev
# hoặc
yarn dev
```

Website sẽ chạy tại: [http://localhost:3000](http://localhost:3000)

### Build production
```bash
npm run build
npm start
```

## Cấu trúc dự án

```
forex-news/
├── app/
│   ├── globals.css          # CSS toàn cục
│   ├── layout.tsx           # Layout chính
│   ├── page.tsx             # Trang chủ (Sàn Forex)
│   └── news/
│       └── page.tsx         # Trang tin tức
├── package.json
├── tailwind.config.js       # Cấu hình Tailwind
├── next.config.js           # Cấu hình Next.js
└── README.md
```

## Tính năng nổi bật

### 🎨 Giao diện hiện đại
- Thiết kế responsive
- Gradient backgrounds đẹp mắt
- Hover effects mượt mà
- Icon trực quan

### 🔍 Tìm kiếm và lọc
- Tìm kiếm sàn forex theo tên và mô tả
- Sắp xếp theo đánh giá hoặc tên
- Lọc tin tức theo danh mục
- Tìm kiếm tin tức theo từ khóa

### 📱 Responsive
- Tương thích desktop, tablet, mobile
- Layout thích ứng theo kích thước màn hình
- Navigation menu responsive

### ⚡ Performance
- Next.js App Router
- Optimized images
- Fast loading times

## Dữ liệu mẫu

Website hiện tại sử dụng dữ liệu mẫu cho:

### Sàn Forex
- XM, FXTM, IC Markets, Pepperstone, OANDA, AvaTrade
- Thông tin chi tiết về quy định, spread, nạp tối thiểu
- Link trực tiếp đến website chính thức

### Tin Tức
- 6 bài viết mẫu về thị trường forex
- Phân tích EUR/USD, USD/JPY, GBP/USD, AUD/USD, USD/CAD, NZD/USD
- Các danh mục: Phân tích kỹ thuật, Phân tích cơ bản, Tin tức thị trường

## Tùy chỉnh

### Thêm sàn forex mới
Chỉnh sửa mảng `forexBrokers` trong `app/page.tsx`:

```typescript
{
  id: 7,
  name: "Tên sàn mới",
  logo: "URL logo",
  url: "URL website",
  description: "Mô tả sàn",
  rating: 4.5,
  features: ["Tính năng 1", "Tính năng 2"],
  regulation: "Quy định",
  minDeposit: "$100",
  spreads: "Từ 0.5 pips"
}
```

### Thêm tin tức mới
Chỉnh sửa mảng `newsArticles` trong `app/news/page.tsx`:

```typescript
{
  id: 7,
  title: "Tiêu đề tin tức",
  excerpt: "Tóm tắt tin tức",
  content: "Nội dung chi tiết",
  author: "Tác giả",
  date: "2024-01-16",
  category: "Danh mục",
  image: "URL hình ảnh",
  readTime: "5 phút",
  tags: ["Tag 1", "Tag 2"]
}
```

## License

MIT License - Xem file LICENSE để biết thêm chi tiết.

## Đóng góp

Mọi đóng góp đều được chào đón! Vui lòng tạo issue hoặc pull request.

---

**Lưu ý**: Website này chỉ mang tính chất tham khảo và giáo dục. Thông tin về các sàn forex có thể thay đổi theo thời gian. Vui lòng kiểm tra thông tin chính xác trên website chính thức của sàn trước khi đưa ra quyết định đầu tư. 