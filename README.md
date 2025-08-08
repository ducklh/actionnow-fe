# Forex News & Crypto Trading Platform

Nền tảng tin tức forex và giao dịch cryptocurrency với hỗ trợ đa ngôn ngữ (Tiếng Việt/English).

## 🚀 Tính năng chính

### 📊 Forex Trading
- **Danh sách sàn forex uy tín** với đánh giá chi tiết
- **Tin tức forex** cập nhật hàng ngày
- **Kiến thức giao dịch** từ cơ bản đến nâng cao
- **Phân tích kỹ thuật và cơ bản**

### 🪙 Cryptocurrency Trading
- **Danh sách sàn crypto** với thông tin chi tiết
- **Tin tức cryptocurrency** mới nhất
- **Hỗ trợ DeFi, NFT, và các xu hướng crypto**

### 🌐 Đa ngôn ngữ
- **Tiếng Việt** và **English**
- Chuyển đổi ngôn ngữ dễ dàng
- Giao diện thân thiện

### 🎨 Giao diện
- **Dark/Light mode** tự động
- **Responsive design** cho mọi thiết bị
- **Modern UI/UX** với Tailwind CSS

## 📁 Cấu trúc dự án

```
forex-news/
├── app/                          # Next.js App Router
│   ├── broker/[id]/              # Chi tiết sàn forex
│   ├── crypto/                   # Tin tức crypto
│   │   └── [id]/                 # Chi tiết tin tức crypto
│   ├── crypto-brokers/           # Danh sách sàn crypto
│   │   └── [id]/                 # Chi tiết sàn crypto
│   ├── knowledge/                # Kiến thức giao dịch
│   │   └── [id]/                 # Chi tiết bài viết kiến thức
│   ├── news/                     # Tin tức forex
│   │   └── [id]/                 # Chi tiết tin tức forex
│   ├── components/               # React components
│   ├── contexts/                 # React contexts
│   └── globals.css               # Global styles
├── data/                         # Dữ liệu JSON
│   ├── forex-brokers.json        # Dữ liệu sàn forex
│   ├── crypto-brokers.json       # Dữ liệu sàn crypto
│   ├── forex-news.json           # Tin tức forex
│   ├── crypto-news.json          # Tin tức crypto
│   └── knowledge.json            # Kiến thức giao dịch
├── lib/                          # Utility functions
│   └── data.ts                   # Data management
└── public/                       # Static assets
```

## 📊 Cấu trúc dữ liệu

### Forex Brokers (`data/forex-brokers.json`)
```json
{
  "id": 1,
  "name": "XM",
  "logo": "logo_url",
  "url": "website_url",
  "description": "Mô tả sàn",
  "rating": 4.8,
  "features": ["Tính năng 1", "Tính năng 2"],
  "regulation": "CySEC, ASIC, FCA",
  "minDeposit": "$5",
  "spreads": "Từ 0.6 pips",
  "leverage": "1:888",
  "platforms": ["MT4", "MT5"],
  "instruments": ["Forex", "CFD"],
  "pros": ["Ưu điểm 1", "Ưu điểm 2"],
  "cons": ["Nhược điểm 1", "Nhược điểm 2"],
  "founded": "2009",
  "headquarters": "Limassol, Cyprus",
  "languages": ["Tiếng Việt", "Tiếng Anh"],
  "support": ["Live Chat", "Email"],
  "paymentMethods": ["Ngân hàng", "Thẻ tín dụng"]
}
```

### Crypto Brokers (`data/crypto-brokers.json`)
```json
{
  "id": 1,
  "name": "Binance",
  "logo": "logo_url",
  "url": "website_url",
  "description": "Mô tả sàn",
  "rating": 4.9,
  "features": ["Giao dịch spot", "Futures"],
  "regulation": "Đa quốc gia",
  "minDeposit": "$10",
  "tradingFees": "0.1%",
  "supportedCoins": ["Bitcoin", "Ethereum"],
  "pros": ["Ưu điểm 1", "Ưu điểm 2"],
  "cons": ["Nhược điểm 1", "Nhược điểm 2"],
  "founded": "2017",
  "headquarters": "Malta",
  "tradingVolume": "$20+ tỷ/ngày",
  "securityFeatures": ["2FA", "Cold storage"],
  "paymentMethods": ["Credit card", "Bank transfer"],
  "customerSupport": ["Live chat", "Email"],
  "mobileApp": true,
  "apiSupport": true,
  "detailedDescription": "Mô tả chi tiết"
}
```

### News Articles (`data/forex-news.json`, `data/crypto-news.json`)
```json
{
  "id": 1,
  "title": "Tiêu đề bài viết",
  "excerpt": "Tóm tắt ngắn",
  "content": "Nội dung đầy đủ",
  "category": "Phân tích kỹ thuật",
  "author": "Tác giả",
  "publishedAt": "2024-03-20T10:00:00Z",
  "readTime": 5,
  "image": "image_url",
  "tags": ["Tag 1", "Tag 2"]
}
```

### Knowledge Items (`data/knowledge.json`)
```json
{
  "id": 1,
  "title": "Tiêu đề bài viết",
  "excerpt": "Tóm tắt ngắn",
  "content": "Nội dung đầy đủ",
  "category": "Kiến thức cơ bản",
  "level": "Cơ bản",
  "author": "Tác giả",
  "publishedAt": "2024-03-20T10:00:00Z",
  "readTime": 8,
  "image": "image_url",
  "tags": ["Tag 1", "Tag 2"]
}
```

## 🛠️ Cài đặt và chạy

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

### Build production
```bash
npm run build
# hoặc
yarn build
```

## 🔧 Cấu hình

### Thêm dữ liệu mới
1. **Thêm sàn forex**: Cập nhật `data/forex-brokers.json`
2. **Thêm sàn crypto**: Cập nhật `data/crypto-brokers.json`
3. **Thêm tin tức**: Cập nhật `data/forex-news.json` hoặc `data/crypto-news.json`
4. **Thêm kiến thức**: Cập nhật `data/knowledge.json`

### Thêm bản dịch mới
1. Cập nhật `app/contexts/LanguageContext.tsx`
2. Thêm key-value pairs cho cả tiếng Việt và English

## 🎯 Tính năng chính

### 🔍 Tìm kiếm và lọc
- Tìm kiếm sàn theo tên, tính năng
- Lọc tin tức theo danh mục
- Sắp xếp theo đánh giá, tên

### 📱 Responsive Design
- Tối ưu cho desktop, tablet, mobile
- Giao diện thân thiện người dùng

### 🌙 Dark/Light Mode
- Chuyển đổi theme tự động
- Lưu trữ preference trong localStorage

### 🌍 Đa ngôn ngữ
- Hỗ trợ tiếng Việt và English
- Chuyển đổi ngôn ngữ dễ dàng

## 📈 Roadmap

### Phase 1 ✅
- [x] Cấu trúc dự án cơ bản
- [x] Trang danh sách sàn forex
- [x] Trang tin tức forex
- [x] Trang kiến thức

### Phase 2 ✅
- [x] Thêm phần crypto
- [x] Hỗ trợ đa ngôn ngữ
- [x] Dark/Light mode
- [x] Responsive design

### Phase 3 🚧
- [ ] Thêm tính năng đăng ký newsletter
- [ ] Thêm trang so sánh sàn
- [ ] Thêm tính năng bookmark
- [ ] Thêm trang profile user

### Phase 4 📋
- [ ] Thêm API backend
- [ ] Thêm database
- [ ] Thêm authentication
- [ ] Thêm tính năng comment

## 🤝 Đóng góp

1. Fork dự án
2. Tạo feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Mở Pull Request

## 📄 License

Dự án này được phân phối dưới MIT License. Xem `LICENSE` để biết thêm chi tiết.

## 📞 Liên hệ

- Email: contact@forex-news.com
- Website: https://forex-news.com
- GitHub: https://github.com/your-username/forex-news

---

**Lưu ý**: Dự án này chỉ cung cấp thông tin tham khảo. Không phải là lời khuyên đầu tư. Hãy tự nghiên cứu và chịu trách nhiệm với quyết định đầu tư của mình. 