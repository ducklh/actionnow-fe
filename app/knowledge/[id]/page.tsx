'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, BookOpen, Clock, Tag, Share2, Bookmark, TrendingUp, DollarSign, Shield, BarChart3, Users, AlertTriangle, CheckCircle, Info, Zap, Settings, Brain, Target } from 'lucide-react'
import { useLanguage } from '../../contexts/LanguageContext'
import { getKnowledgeDetail, getKnowledgeDetailById } from '../../../lib/data'

interface KnowledgeItem {
    id: number
    title: string
    category: string
    level: string
    readTime: string
    description: string
    icon: any
    tags: string[]
    content: string
    fullContent: string
}

const knowledgeItems: KnowledgeItem[] = [
    {
        id: 1,
        title: "Forex là gì? Hướng dẫn cơ bản cho người mới",
        category: "Kiến thức cơ bản",
        level: "Cơ bản",
        readTime: "10 phút",
        description: "Tìm hiểu về thị trường forex, cách hoạt động và các khái niệm cơ bản",
        icon: Info,
        tags: ["Forex", "Cơ bản", "Thị trường", "Tiền tệ"],
        content: "Forex (Foreign Exchange) là thị trường trao đổi tiền tệ quốc tế. Đây là thị trường tài chính lớn nhất thế giới với khối lượng giao dịch hàng ngày lên tới 6.6 nghìn tỷ USD...",
        fullContent: `
            <h2>Thị trường Forex là gì?</h2>
            <p>Forex (Foreign Exchange) là thị trường trao đổi tiền tệ quốc tế. Đây là thị trường tài chính lớn nhất thế giới với khối lượng giao dịch hàng ngày lên tới 6.6 nghìn tỷ USD.</p>
            
            <h3>Đặc điểm của thị trường Forex</h3>
            <ul>
                <li><strong>Giao dịch 24/5:</strong> Thị trường mở cửa từ Chủ nhật đến thứ Sáu</li>
                <li><strong>Thanh khoản cao:</strong> Dễ dàng mua bán với khối lượng lớn</li>
                <li><strong>Đòn bẩy:</strong> Có thể giao dịch với số tiền nhỏ</li>
                <li><strong>Hai chiều:</strong> Có thể kiếm lời khi giá tăng hoặc giảm</li>
            </ul>

            <h3>Các cặp tiền tệ chính</h3>
            <p>Các cặp tiền tệ chính (Major pairs) bao gồm:</p>
            <ul>
                <li>EUR/USD (Euro/Đô la Mỹ)</li>
                <li>GBP/USD (Bảng Anh/Đô la Mỹ)</li>
                <li>USD/JPY (Đô la Mỹ/Yên Nhật)</li>
                <li>USD/CHF (Đô la Mỹ/Franc Thụy Sĩ)</li>
                <li>AUD/USD (Đô la Úc/Đô la Mỹ)</li>
                <li>USD/CAD (Đô la Mỹ/Đô la Canada)</li>
                <li>NZD/USD (Đô la New Zealand/Đô la Mỹ)</li>
            </ul>

            <h3>Cách đọc tỷ giá</h3>
            <p>Ví dụ với cặp EUR/USD = 1.0850:</p>
            <ul>
                <li>EUR là đồng tiền cơ sở (base currency)</li>
                <li>USD là đồng tiền định giá (quote currency)</li>
                <li>1.0850 có nghĩa là 1 EUR = 1.0850 USD</li>
            </ul>

            <h3>Lợi ích của giao dịch Forex</h3>
            <ul>
                <li>Không cần vốn lớn để bắt đầu</li>
                <li>Có thể giao dịch từ bất kỳ đâu</li>
                <li>Thị trường minh bạch và được quản lý</li>
                <li>Nhiều cơ hội kiếm lời</li>
            </ul>

            <h3>Rủi ro cần lưu ý</h3>
            <ul>
                <li>Đòn bẩy có thể gây thua lỗ lớn</li>
                <li>Thị trường biến động mạnh</li>
                <li>Cần kiến thức và kinh nghiệm</li>
                <li>Không có lợi nhuận đảm bảo</li>
            </ul>

            <h3>Kết luận</h3>
            <p>Forex là thị trường tài chính hấp dẫn nhưng cũng đầy thách thức. Để thành công, bạn cần:</p>
            <ul>
                <li>Học hỏi kiến thức cơ bản</li>
                <li>Thực hành trên tài khoản demo</li>
                <li>Quản lý rủi ro tốt</li>
                <li>Kiên nhẫn và kỷ luật</li>
            </ul>
        `
    },
    {
        id: 2,
        title: "Các cặp tiền tệ chính và cách đọc tỷ giá",
        category: "Kiến thức cơ bản",
        level: "Cơ bản",
        readTime: "8 phút",
        description: "Hiểu về các cặp tiền tệ chính, phụ và cách đọc tỷ giá forex",
        icon: DollarSign,
        tags: ["Cặp tiền", "Tỷ giá", "Major", "Minor"],
        content: "Các cặp tiền tệ chính (Major pairs) bao gồm EUR/USD, GBP/USD, USD/JPY, USD/CHF, AUD/USD, USD/CAD, NZD/USD...",
        fullContent: `
            <h2>Phân loại cặp tiền tệ</h2>
            <p>Trong thị trường forex, các cặp tiền tệ được phân loại thành 3 nhóm chính:</p>

            <h3>1. Major Pairs (Cặp tiền chính)</h3>
            <p>Đây là những cặp tiền có khối lượng giao dịch lớn nhất và thanh khoản cao nhất:</p>
            <ul>
                <li><strong>EUR/USD:</strong> Euro/Đô la Mỹ - Cặp tiền giao dịch nhiều nhất</li>
                <li><strong>GBP/USD:</strong> Bảng Anh/Đô la Mỹ - Cặp tiền biến động mạnh</li>
                <li><strong>USD/JPY:</strong> Đô la Mỹ/Yên Nhật - Cặp tiền ổn định</li>
                <li><strong>USD/CHF:</strong> Đô la Mỹ/Franc Thụy Sĩ - Cặp tiền an toàn</li>
                <li><strong>AUD/USD:</strong> Đô la Úc/Đô la Mỹ - Cặp tiền hàng hóa</li>
                <li><strong>USD/CAD:</strong> Đô la Mỹ/Đô la Canada - Cặp tiền dầu mỏ</li>
                <li><strong>NZD/USD:</strong> Đô la New Zealand/Đô la Mỹ - Cặp tiền nông sản</li>
            </ul>

            <h3>2. Minor Pairs (Cặp tiền phụ)</h3>
            <p>Những cặp tiền không có USD nhưng vẫn có khối lượng giao dịch đáng kể:</p>
            <ul>
                <li>EUR/GBP (Euro/Bảng Anh)</li>
                <li>EUR/JPY (Euro/Yên Nhật)</li>
                <li>GBP/JPY (Bảng Anh/Yên Nhật)</li>
                <li>AUD/JPY (Đô la Úc/Yên Nhật)</li>
                <li>EUR/AUD (Euro/Đô la Úc)</li>
            </ul>

            <h3>3. Exotic Pairs (Cặp tiền kỳ lạ)</h3>
            <p>Những cặp tiền có ít thanh khoản và spread cao:</p>
            <ul>
                <li>USD/TRY (Đô la Mỹ/Lira Thổ Nhĩ Kỳ)</li>
                <li>USD/ZAR (Đô la Mỹ/Rand Nam Phi)</li>
                <li>USD/MXN (Đô la Mỹ/Peso Mexico)</li>
                <li>EUR/TRY (Euro/Lira Thổ Nhĩ Kỳ)</li>
            </ul>

            <h2>Cách đọc tỷ giá</h2>
            <h3>Cấu trúc tỷ giá</h3>
            <p>Ví dụ: EUR/USD = 1.0850</p>
            <ul>
                <li><strong>EUR:</strong> Đồng tiền cơ sở (Base Currency)</li>
                <li><strong>USD:</strong> Đồng tiền định giá (Quote Currency)</li>
                <li><strong>1.0850:</strong> Tỷ giá hiện tại</li>
            </ul>

            <h3>Ý nghĩa của tỷ giá</h3>
            <p>EUR/USD = 1.0850 có nghĩa là:</p>
            <ul>
                <li>1 EUR = 1.0850 USD</li>
                <li>Để mua 1 EUR, bạn cần 1.0850 USD</li>
                <li>Để bán 1 EUR, bạn sẽ nhận được 1.0850 USD</li>
            </ul>

            <h3>Bid và Ask</h3>
            <p>Mỗi cặp tiền có 2 mức giá:</p>
            <ul>
                <li><strong>Bid:</strong> Giá bán (giá bạn bán đồng tiền cơ sở)</li>
                <li><strong>Ask:</strong> Giá mua (giá bạn mua đồng tiền cơ sở)</li>
                <li><strong>Spread:</strong> Chênh lệch giữa Bid và Ask</li>
            </ul>

            <h2>Yếu tố ảnh hưởng đến tỷ giá</h2>
            <h3>1. Yếu tố kinh tế</h3>
            <ul>
                <li>Lãi suất ngân hàng trung ương</li>
                <li>Tỷ lệ thất nghiệp</li>
                <li>Chỉ số lạm phát (CPI)</li>
                <li>Tổng sản phẩm quốc nội (GDP)</li>
            </ul>

            <h3>2. Yếu tố chính trị</h3>
            <ul>
                <li>Bầu cử</li>
                <li>Chính sách của chính phủ</li>
                <li>Quan hệ quốc tế</li>
                <li>Xung đột địa chính trị</li>
            </ul>

            <h3>3. Yếu tố thị trường</h3>
            <ul>
                <li>Tâm lý nhà đầu tư</li>
                <li>Dòng vốn</li>
                <li>Biến động thị trường</li>
                <li>Tin tức bất ngờ</li>
            </ul>

            <h2>Lời khuyên cho người mới</h2>
            <ul>
                <li>Bắt đầu với các cặp tiền chính (Major pairs)</li>
                <li>Tránh các cặp tiền kỳ lạ (Exotic pairs)</li>
                <li>Chú ý đến spread khi chọn cặp tiền</li>
                <li>Học cách đọc tin tức kinh tế</li>
                <li>Thực hành trên tài khoản demo trước</li>
            </ul>
        `
    },
    {
        id: 3,
        title: "Pip, Lot và Leverage - Khái niệm quan trọng",
        category: "Kiến thức cơ bản",
        level: "Cơ bản",
        readTime: "12 phút",
        description: "Tìm hiểu về pip, lot size và đòn bẩy trong giao dịch forex",
        icon: Zap,
        tags: ["Pip", "Lot", "Leverage", "Đòn bẩy"],
        content: "Pip (Percentage in Point) là đơn vị nhỏ nhất để đo lường sự thay đổi tỷ giá. Một pip thường bằng 0.0001 cho hầu hết các cặp tiền...",
        fullContent: `
            <h2>Pip - Đơn vị đo lường cơ bản</h2>
            <p>Pip (Percentage in Point) là đơn vị nhỏ nhất để đo lường sự thay đổi tỷ giá trong forex.</p>

            <h3>Giá trị của Pip</h3>
            <p>Đối với hầu hết các cặp tiền:</p>
            <ul>
                <li>1 pip = 0.0001 (cho các cặp có 4 chữ số thập phân)</li>
                <li>1 pip = 0.01 (cho các cặp có 2 chữ số thập phân như USD/JPY)</li>
            </ul>

            <h3>Ví dụ thực tế</h3>
            <p>Với cặp EUR/USD:</p>
            <ul>
                <li>Tỷ giá từ 1.0850 → 1.0851 = Tăng 1 pip</li>
                <li>Tỷ giá từ 1.0850 → 1.0860 = Tăng 10 pips</li>
                <li>Tỷ giá từ 1.0850 → 1.0840 = Giảm 10 pips</li>
            </ul>

            <h2>Lot - Đơn vị khối lượng giao dịch</h2>
            <h3>Các loại Lot</h3>
            <ul>
                <li><strong>Standard Lot:</strong> 100,000 đơn vị tiền tệ</li>
                <li><strong>Mini Lot:</strong> 10,000 đơn vị tiền tệ</li>
                <li><strong>Micro Lot:</strong> 1,000 đơn vị tiền tệ</li>
                <li><strong>Nano Lot:</strong> 100 đơn vị tiền tệ</li>
            </ul>

            <h3>Giá trị của Pip theo Lot</h3>
            <p>Với cặp EUR/USD:</p>
            <ul>
                <li>1 Standard Lot = $10/pip</li>
                <li>1 Mini Lot = $1/pip</li>
                <li>1 Micro Lot = $0.1/pip</li>
                <li>1 Nano Lot = $0.01/pip</li>
            </ul>

            <h3>Ví dụ tính toán</h3>
            <p>Nếu bạn giao dịch 1 Mini Lot EUR/USD:</p>
            <ul>
                <li>Giá tăng 10 pips = Lợi nhuận $10</li>
                <li>Giá giảm 10 pips = Thua lỗ $10</li>
            </ul>

            <h2>Leverage - Đòn bẩy</h2>
            <h3>Định nghĩa</h3>
            <p>Leverage (đòn bẩy) cho phép bạn giao dịch với khối lượng lớn hơn số tiền thực tế trong tài khoản.</p>

            <h3>Cách tính đòn bẩy</h3>
            <p>Công thức: Leverage = Khối lượng giao dịch / Số tiền ký quỹ</p>

            <h3>Ví dụ thực tế</h3>
            <p>Với đòn bẩy 1:100:</p>
            <ul>
                <li>Bạn có $1,000 trong tài khoản</li>
                <li>Có thể giao dịch tối đa $100,000</li>
                <li>Điều này tương đương với 1 Standard Lot</li>
            </ul>

            <h3>Các mức đòn bẩy phổ biến</h3>
            <ul>
                <li><strong>1:50:</strong> Bảo thủ, phù hợp người mới</li>
                <li><strong>1:100:</strong> Cân bằng, phổ biến nhất</li>
                <li><strong>1:200:</strong> Mạo hiểm, cần kinh nghiệm</li>
                <li><strong>1:500:</strong> Rất mạo hiểm, chỉ cho chuyên gia</li>
            </ul>

            <h2>Margin - Ký quỹ</h2>
            <h3>Định nghĩa</h3>
            <p>Margin là số tiền cần thiết để mở và duy trì một vị thế giao dịch.</p>

            <h3>Loại Margin</h3>
            <ul>
                <li><strong>Required Margin:</strong> Số tiền tối thiểu để mở lệnh</li>
                <li><strong>Used Margin:</strong> Số tiền đang được sử dụng</li>
                <li><strong>Free Margin:</strong> Số tiền còn lại có thể sử dụng</li>
            </ul>

            <h3>Ví dụ tính Margin</h3>
            <p>Với đòn bẩy 1:100 và giao dịch 1 Mini Lot EUR/USD:</p>
            <ul>
                <li>Khối lượng giao dịch: $10,000</li>
                <li>Required Margin: $10,000 ÷ 100 = $100</li>
            </ul>

            <h2>Margin Call và Stop Out</h2>
            <h3>Margin Call</h3>
            <p>Khi tài khoản của bạn gần hết tiền ký quỹ, sàn sẽ cảnh báo để bạn nạp thêm tiền hoặc đóng lệnh.</p>

            <h3>Stop Out</h3>
            <p>Khi tài khoản không còn đủ tiền ký quỹ, sàn sẽ tự động đóng các lệnh để bảo vệ tài khoản.</p>

            <h2>Quản lý rủi ro với Leverage</h2>
            <h3>Nguyên tắc quan trọng</h3>
            <ul>
                <li>Không bao giờ sử dụng toàn bộ đòn bẩy có sẵn</li>
                <li>Luôn để lại Free Margin để tránh Margin Call</li>
                <li>Sử dụng Stop Loss để giới hạn thua lỗ</li>
                <li>Không giao dịch quá 2% tài khoản cho một lệnh</li>
            </ul>

            <h3>Công thức tính khối lượng giao dịch an toàn</h3>
            <p>Khối lượng = (Tài khoản × 2%) ÷ (Stop Loss pips × Giá trị pip)</p>

            <h2>Lời khuyên cho người mới</h2>
            <ul>
                <li>Bắt đầu với đòn bẩy thấp (1:50 hoặc 1:100)</li>
                <li>Sử dụng Micro Lot để học hỏi</li>
                <li>Luôn đặt Stop Loss</li>
                <li>Không bao giờ giao dịch quá khả năng tài chính</li>
                <li>Thực hành trên tài khoản demo trước</li>
            </ul>
        `
    },
    {
        id: 4,
        title: "Phân tích kỹ thuật - Các mô hình biểu đồ",
        category: "Phân tích kỹ thuật",
        level: "Trung cấp",
        readTime: "15 phút",
        description: "Học về các mô hình biểu đồ quan trọng trong phân tích kỹ thuật",
        icon: BarChart3,
        tags: ["Mô hình", "Biểu đồ", "Kỹ thuật", "Pattern"],
        content: "Các mô hình biểu đồ như Head and Shoulders, Double Top/Bottom, Triangle, Flag và Pennant là công cụ quan trọng...",
        fullContent: `
          <h2>Các mô hình biểu đồ phổ biến</h2>
          <p>Trong phân tích kỹ thuật, mô hình biểu đồ giúp nhà giao dịch nhận biết xu hướng và điểm vào/ra lệnh tiềm năng.</p>
          
          <h3>1. Mô hình Head and Shoulders</h3>
          <p>Là mô hình đảo chiều thường gặp nhất. Gồm 3 đỉnh: vai trái, đầu và vai phải.</p>
    
          <h3>2. Double Top và Double Bottom</h3>
          <p>Mô hình đảo chiều quan trọng với hai đỉnh hoặc hai đáy liên tiếp.</p>
    
          <h3>3. Mô hình Tam giác (Triangle)</h3>
          <ul>
            <li>Ascending Triangle: xu hướng tăng tiếp diễn</li>
            <li>Descending Triangle: xu hướng giảm tiếp diễn</li>
            <li>Symmetrical Triangle: chờ phá vỡ</li>
          </ul>
    
          <h3>4. Flag và Pennant</h3>
          <p>Là các mô hình tiếp diễn sau một đợt tăng hoặc giảm mạnh.</p>
    
          <h3>Lưu ý khi sử dụng</h3>
          <ul>
            <li>Kết hợp với chỉ báo kỹ thuật</li>
            <li>Chờ tín hiệu xác nhận</li>
            <li>Quản lý rủi ro chặt chẽ</li>
          </ul>
        `
    },
    {
        id: 5,
        title: "Chỉ báo kỹ thuật phổ biến và cách sử dụng",
        category: "Phân tích kỹ thuật",
        level: "Trung cấp",
        readTime: "20 phút",
        description: "Tìm hiểu về RSI, MACD, Moving Average và các chỉ báo khác",
        icon: TrendingUp,
        tags: ["RSI", "MACD", "Moving Average", "Chỉ báo"],
        content: "RSI (Relative Strength Index) là chỉ báo đo lường tốc độ và mức độ thay đổi giá. Giá trị từ 0-100...",
        fullContent: `
          <h2>Các chỉ báo kỹ thuật phổ biến</h2>
          
          <h3>1. RSI - Relative Strength Index</h3>
          <ul>
            <li>Đo mức quá mua/quá bán</li>
            <li>Trên 70: quá mua, Dưới 30: quá bán</li>
          </ul>
    
          <h3>2. MACD - Moving Average Convergence Divergence</h3>
          <ul>
            <li>Xác định xu hướng và tín hiệu giao cắt</li>
            <li>MACD line cắt Signal line = tín hiệu mua/bán</li>
          </ul>
    
          <h3>3. Moving Average - Trung bình động</h3>
          <ul>
            <li>MA đơn giản (SMA) và MA hàm mũ (EMA)</li>
            <li>Xác định xu hướng ngắn hạn và dài hạn</li>
          </ul>
    
          <h3>4. Bollinger Bands</h3>
          <ul>
            <li>Đo độ biến động thị trường</li>
            <li>Giá gần dải trên: quá mua, gần dải dưới: quá bán</li>
          </ul>
    
          <h3>Lưu ý khi sử dụng chỉ báo</h3>
          <ul>
            <li>Không sử dụng đơn lẻ</li>
            <li>Kết hợp nhiều chỉ báo cho tín hiệu chính xác</li>
            <li>Kiểm tra trên nhiều khung thời gian</li>
          </ul>
        `
    },
    {
        id: 6,
        title: "Phân tích cơ bản - Các yếu tố ảnh hưởng",
        category: "Phân tích cơ bản",
        level: "Trung cấp",
        readTime: "18 phút",
        description: "Hiểu về các yếu tố kinh tế ảnh hưởng đến tỷ giá tiền tệ",
        icon: Users,
        tags: ["Kinh tế", "Lãi suất", "GDP", "CPI"],
        content: "Các yếu tố cơ bản ảnh hưởng đến tỷ giá bao gồm lãi suất, GDP, tỷ lệ thất nghiệp, lạm phát...",
        fullContent: `
          <h2>Các yếu tố cơ bản ảnh hưởng đến tỷ giá</h2>
    
          <h3>1. Lãi suất</h3>
          <p>Lãi suất cao → dòng vốn đổ vào → đồng tiền mạnh lên.</p>
    
          <h3>2. Tăng trưởng GDP</h3>
          <p>GDP tăng → kỳ vọng tăng trưởng tốt → đồng tiền tăng giá.</p>
    
          <h3>3. Tỷ lệ thất nghiệp</h3>
          <p>Thất nghiệp cao → nền kinh tế yếu → đồng tiền suy yếu.</p>
    
          <h3>4. Lạm phát (CPI)</h3>
          <p>Lạm phát cao → ảnh hưởng đến sức mua → ảnh hưởng tỷ giá.</p>
    
          <h3>5. Cán cân thương mại</h3>
          <p>Thặng dư thương mại → dòng tiền đổ vào → đồng tiền tăng giá.</p>
    
          <h3>Kết hợp với phân tích kỹ thuật</h3>
          <p>Phân tích cơ bản giúp xác định xu hướng dài hạn, trong khi kỹ thuật hỗ trợ tìm điểm vào/ra lệnh.</p>
        `
    },
    {
        id: 7,
        title: "Quản lý vốn và quản lý rủi ro",
        category: "Quản lý rủi ro",
        level: "Nâng cao",
        readTime: "25 phút",
        description: "Chiến lược quản lý vốn hiệu quả và giảm thiểu rủi ro",
        icon: Shield,
        tags: ["Quản lý vốn", "Rủi ro", "Stop Loss", "Risk/Reward"],
        content: "Quy tắc 2%: Không bao giờ rủi ro quá 2% tài khoản cho một giao dịch. Điều này giúp bảo vệ vốn...",
        fullContent: `
          <h2>Nguyên tắc quản lý vốn hiệu quả</h2>
    
          <h3>1. Quy tắc 2%</h3>
          <p>Chỉ mạo hiểm tối đa 2% tài khoản cho mỗi lệnh.</p>
    
          <h3>2. Risk/Reward ratio</h3>
          <p>Tỷ lệ lợi nhuận:rủi ro nên là 2:1 hoặc cao hơn.</p>
    
          <h3>3. Đặt Stop Loss</h3>
          <p>Luôn đặt lệnh cắt lỗ để hạn chế thua lỗ.</p>
    
          <h3>4. Diversification</h3>
          <p>Không bỏ hết vốn vào một lệnh hoặc một loại tài sản.</p>
    
          <h3>5. Tâm lý quản lý rủi ro</h3>
          <p>Kiên định, kỷ luật, không tăng khối lượng khi thua lỗ liên tiếp.</p>
        `
    },
    {
        id: 8,
        title: "Tâm lý giao dịch - Kỷ luật và kiên nhẫn",
        category: "Tâm lý giao dịch",
        level: "Nâng cao",
        readTime: "22 phút",
        description: "Phát triển tâm lý giao dịch vững vàng và kỷ luật",
        icon: CheckCircle,
        tags: ["Tâm lý", "Kỷ luật", "Kiên nhẫn", "Emotion"],
        content: "Tâm lý giao dịch chiếm 80% thành công trong forex. Fear và Greed là hai cảm xúc nguy hiểm nhất...",
        fullContent: `
          <h2>Tầm quan trọng của tâm lý giao dịch</h2>
    
          <h3>1. Kiểm soát cảm xúc</h3>
          <p>Sợ hãi và tham lam dễ dẫn đến quyết định sai lầm.</p>
    
          <h3>2. Tính kỷ luật</h3>
          <p>Tuân thủ kế hoạch giao dịch đã đề ra, không giao dịch theo cảm tính.</p>
    
          <h3>3. Tính kiên nhẫn</h3>
          <p>Chờ đợi cơ hội tốt thay vì giao dịch mọi lúc.</p>
    
          <h3>4. Tự tin nhưng không tự mãn</h3>
          <p>Biết rút kinh nghiệm sau mỗi giao dịch.</p>
    
          <h3>Bài học thực tế</h3>
          <p>Giao dịch thành công = 20% kỹ thuật + 80% tâm lý.</p>
        `
    },
    {
        id: 9,
        title: "Chiến lược Scalping cho người mới",
        category: "Chiến lược giao dịch",
        level: "Trung cấp",
        readTime: "16 phút",
        description: "Hướng dẫn chiến lược giao dịch ngắn hạn hiệu quả",
        icon: Settings,
        tags: ["Scalping", "Ngắn hạn", "Chiến lược", "Quick trade"],
        content: "Scalping là chiến lược giao dịch trong thời gian rất ngắn, thường từ vài giây đến vài phút...",
        fullContent: `
          <h2>Chiến lược Scalping là gì?</h2>
    
          <h3>1. Khái niệm</h3>
          <p>Scalping là chiến lược tập trung vào giao dịch ngắn hạn, kiếm lợi nhuận nhỏ nhưng liên tục.</p>
    
          <h3>2. Công cụ hỗ trợ</h3>
          <ul>
            <li>Khung thời gian thấp (M1, M5)</li>
            <li>EMA, Bollinger Bands, RSI</li>
          </ul>
    
          <h3>3. Ưu điểm</h3>
          <ul>
            <li>Phản ứng nhanh với biến động</li>
            <li>Không cần giữ lệnh qua đêm</li>
          </ul>
    
          <h3>4. Nhược điểm</h3>
          <ul>
            <li>Áp lực cao, đòi hỏi tập trung</li>
            <li>Dễ bị spread ăn mất lợi nhuận</li>
          </ul>
        `
    },
    {
        id: 10,
        title: "Chiến lược Swing Trading",
        category: "Chiến lược giao dịch",
        level: "Trung cấp",
        readTime: "19 phút",
        description: "Chiến lược giao dịch trung hạn từ vài ngày đến vài tuần",
        icon: TrendingUp,
        tags: ["Swing", "Trung hạn", "Trend", "Momentum"],
        content: "Swing Trading là chiến lược nắm giữ vị thế từ vài ngày đến vài tuần, tận dụng các xu hướng...",
        fullContent: `
          <h2>Chiến lược Swing Trading</h2>
    
          <h3>1. Định nghĩa</h3>
          <p>Nắm giữ lệnh từ vài ngày đến vài tuần, tận dụng các sóng giá trung hạn.</p>
    
          <h3>2. Công cụ hỗ trợ</h3>
          <ul>
            <li>Moving Average, RSI, MACD</li>
            <li>Fibonacci retracement</li>
          </ul>
    
          <h3>3. Ưu điểm</h3>
          <ul>
            <li>Ít căng thẳng hơn Scalping</li>
            <li>Tiềm năng lợi nhuận cao hơn</li>
          </ul>
    
          <h3>4. Nhược điểm</h3>
          <ul>
            <li>Gặp rủi ro qua đêm/cuối tuần</li>
            <li>Cần kiên nhẫn và kiểm soát tâm lý</li>
          </ul>
        `
    },
    {
        id: 11,
        title: "MT4 và MT5 - Hướng dẫn sử dụng cơ bản",
        category: "Công cụ giao dịch",
        level: "Cơ bản",
        readTime: "14 phút",
        description: "Hướng dẫn sử dụng MetaTrader 4 và MetaTrader 5",
        icon: BarChart3,
        tags: ["MT4", "MT5", "Platform", "Giao dịch"],
        content: "MetaTrader là nền tảng giao dịch phổ biến nhất thế giới. MT4 và MT5 có giao diện thân thiện...",
        fullContent: `
          <h2>Giới thiệu nền tảng MetaTrader</h2>
    
          <h3>1. MT4 vs MT5</h3>
          <p>MT4: đơn giản, phổ biến cho forex. MT5: hỗ trợ thêm cổ phiếu, nhiều công cụ hơn.</p>
    
          <h3>2. Các chức năng chính</h3>
          <ul>
            <li>Mở và đóng lệnh</li>
            <li>Thiết lập chỉ báo kỹ thuật</li>
            <li>Quản lý biểu đồ, timeframe</li>
          </ul>
    
          <h3>3. Cách tải và cài đặt</h3>
          <p>Vào trang sàn, chọn phiên bản MT4/MT5 phù hợp hệ điều hành và làm theo hướng dẫn.</p>
        `
    },
    {
        id: 12,
        title: "Các lỗi thường gặp và cách tránh",
        category: "Kiến thức cơ bản",
        level: "Cơ bản",
        readTime: "12 phút",
        description: "Tổng hợp các lỗi phổ biến và cách phòng tránh",
        icon: AlertTriangle,
        tags: ["Lỗi", "Phòng tránh", "Kinh nghiệm", "Tips"],
        content: "Giao dịch quá nhiều, không có kế hoạch, bỏ qua quản lý rủi ro là những lỗi phổ biến nhất...",
        fullContent: `
          <h2>Các lỗi phổ biến trong giao dịch Forex</h2>
    
          <h3>1. Overtrading</h3>
          <p>Giao dịch quá nhiều dẫn đến kiệt sức và thua lỗ.</p>
    
          <h3>2. Không có kế hoạch giao dịch</h3>
          <p>Dễ bị cuốn theo thị trường, thiếu kỷ luật.</p>
    
          <h3>3. Bỏ qua quản lý rủi ro</h3>
          <p>Không đặt Stop Loss, sử dụng đòn bẩy quá mức.</p>
    
          <h3>4. Thiếu kiến thức cơ bản</h3>
          <p>Dễ bị lừa hoặc đưa ra quyết định sai.</p>
    
          <h3>5. Giao dịch theo cảm xúc</h3>
          <p>Không kiểm soát được sợ hãi, tham lam.</p>
        `
    }
]

export default function KnowledgeDetailPage({ params }: { params: { id: string } }) {
    const { t, language } = useLanguage()

    const getIconByCategory = (category: string) => {
        const cat = category.toLowerCase()
        if (cat.includes('basic') || cat.includes('cơ bản')) return Info
        if (cat.includes('technical') || cat.includes('kỹ thuật')) return BarChart3
        if (cat.includes('fundamental') || cat.includes('cơ bản') || cat.includes('phân tích cơ bản')) return Users
        if (cat.includes('risk') || cat.includes('rủi ro')) return Shield
        if (cat.includes('psychology') || cat.includes('tâm lý')) return CheckCircle
        if (cat.includes('strategy') || cat.includes('chiến lược')) return TrendingUp
        if (cat.includes('tool') || cat.includes('công cụ')) return Settings
        return BookOpen
    }

    const items = getKnowledgeDetail(language).map(item => ({
        id: item.id,
        title: item.title,
        category: item.category,
        level: item.level,
        readTime: `${item.readTime} ${t('common.readTime')}`,
        description: (item as any).excerpt || '',
        icon: getIconByCategory(item.category),
        tags: item.tags || [],
        content: item.content || '',
        fullContent: (item as any).fullContent || ''
    }))

    const article = items.find(item => item.id === parseInt(params.id))

    if (!article) {
        return (
            <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <div className="text-center">
                        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Không tìm thấy bài viết</h1>
                        <p className="text-gray-600 dark:text-gray-400 mb-8">Bài viết bạn đang tìm kiếm không tồn tại.</p>
                        <Link href="/knowledge" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                            {t('common.back')}
                        </Link>
                    </div>
                </div>
            </div>
        )
    }

    const IconComponent = article.icon
    const getLevelColor = (level: string) => {
        switch (level) {
            case 'Cơ bản': return 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200'
            case 'Trung cấp': return 'bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200'
            case 'Nâng cao': return 'bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200'
            default: return 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300'
        }
    }

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
            {/* Header */}
            <header className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center py-6">
                        <div className="flex items-center">
                            <Link href="/knowledge" className="flex items-center text-gray-600 hover:text-blue-600 mr-6 dark:text-gray-400 dark:hover:text-blue-400">
                                <ArrowLeft className="h-5 w-5 mr-2" />
                                {t('common.back')}
                            </Link>
                            <BookOpen className="h-8 w-8 text-blue-600 mr-3" />
                            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Action Now</h1>
                        </div>
                        <nav className="flex space-x-8">
                            <Link href="/" className="text-gray-500 hover:text-gray-900 transition-colors dark:text-gray-400 dark:hover:text-white">
                                {t('nav.forex')}
                            </Link>
                            <Link href="/news" className="text-gray-500 hover:text-gray-900 transition-colors dark:text-gray-400 dark:hover:text-white">
                                {t('nav.news')}
                            </Link>
                            <Link href="/knowledge" className="text-blue-600 font-medium">
                                {t('nav.knowledge')}
                            </Link>
                        </nav>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Article Header */}
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8 border border-gray-100 dark:border-gray-700">
                    <div className="mb-6">
                        <div className="flex items-center mb-4">
                            <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg mr-3">
                                <IconComponent className="h-6 w-6 text-blue-600" />
                            </div>
                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getLevelColor(article.level)}`}>
                                {article.level}
                            </span>
                        </div>

                        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">{article.title}</h1>
                        <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">{article.description}</p>

                        {/* Article Meta */}
                        <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-6">
                            <div className="flex items-center space-x-6">
                                <div className="flex items-center">
                                    <Clock className="h-4 w-4 mr-2" />
                                    {article.readTime}
                                </div>
                                <div className="flex items-center">
                                    <span className="text-blue-600 font-medium">
                                        {article.category}
                                    </span>
                                </div>
                            </div>
                            <div className="flex items-center space-x-4">
                                <button className="text-gray-500 hover:text-blue-600">
                                    <Bookmark className="h-5 w-5" />
                                </button>
                                <button className="text-gray-500 hover:text-blue-600">
                                    <Share2 className="h-5 w-5" />
                                </button>
                            </div>
                        </div>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2">
                            {article.tags.map((tag, index) => (
                                <span
                                    key={index}
                                    className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full flex items-center"
                                >
                                    <Tag className="h-3 w-3 mr-1" />
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Article Content */}
                <div className="bg-white rounded-lg shadow-md p-8 mb-8 border border-gray-100">
                    <div
                        className="prose prose-lg max-w-none"
                        dangerouslySetInnerHTML={{ __html: article.fullContent }}
                    />
                </div>

                {/* Related Articles */}
                <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('knowledge.related')}</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {items
                            .filter(item => item.id !== article.id)
                            .slice(0, 4)
                            .map((relatedArticle) => {
                                const RelatedIconComponent = relatedArticle.icon
                                return (
                                    <Link
                                        key={relatedArticle.id}
                                        href={`/knowledge/${relatedArticle.id}`}
                                        className="block bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors border border-gray-200"
                                    >
                                        <div className="flex items-center mb-3">
                                            <div className="p-2 bg-blue-100 rounded-lg mr-3">
                                                <RelatedIconComponent className="h-4 w-4 text-blue-600" />
                                            </div>
                                            <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${getLevelColor(relatedArticle.level)}`}>
                                                {relatedArticle.level}
                                            </span>
                                        </div>
                                        <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                                            {relatedArticle.title}
                                        </h3>
                                        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                                            {relatedArticle.description}
                                        </p>
                                        <div className="flex items-center justify-between text-xs text-gray-500">
                                            <span className="flex items-center">
                                                <Clock className="h-3 w-3 mr-1" />
                                                {relatedArticle.readTime}
                                            </span>
                                            <span className="text-blue-600 font-medium">
                                                {relatedArticle.category}
                                            </span>
                                        </div>
                                    </Link>
                                )
                            })}
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="bg-gray-900 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="text-center">
                        <h3 className="text-xl font-bold mb-4">Action Now</h3>
                        <p className="text-gray-400 mb-6">
                            Cung cấp thông tin chính xác và cập nhật về thị trường forex
                        </p>
                        <div className="flex justify-center space-x-6">
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                Về chúng tôi
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                Liên hệ
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                Chính sách
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
} 