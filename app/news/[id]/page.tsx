'use client'

import Link from 'next/link'
import { ArrowLeft, Calendar, User, Clock, Share2, Bookmark, TrendingUp, Tag } from 'lucide-react'
import { useLanguage } from '../../contexts/LanguageContext'
import { getNewsById, getNews } from '../../../lib/data'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

interface NewsArticle {
  id: number
  title: string
  excerpt: string
  content: string
  author: string
  date: string
  category: string
  image: string
  readTime: string
  tags: string[]
  fullContent: string
  relatedArticles: number[]
}

const newsArticles: NewsArticle[] = [
  {
    id: 1,
    title: "EUR/USD tăng mạnh sau quyết định lãi suất của ECB",
    excerpt: "Cặp tiền EUR/USD đã tăng hơn 100 pips sau khi Ngân hàng Trung ương Châu Âu (ECB) quyết định giữ nguyên lãi suất và đưa ra tín hiệu hawkish về chính sách tiền tệ.",
    content: "Ngân hàng Trung ương Châu Âu (ECB) đã quyết định giữ nguyên lãi suất chính ở mức 4.5% trong cuộc họp chính sách tiền tệ tháng 12. Tuy nhiên, Chủ tịch ECB Christine Lagarde đã đưa ra những tín hiệu hawkish về tương lai của chính sách tiền tệ, khiến thị trường kỳ vọng về việc lãi suất sẽ được duy trì ở mức cao trong thời gian dài hơn so với dự kiến ban đầu.",
    author: "Nguyễn Văn A",
    date: "2024-01-15",
    category: "Phân tích kỹ thuật",
    image: "https://media.vneconomy.vn/images/upload/2022/07/22/usd-euro-16581227671331631804271.jpg",
    readTime: "5 phút",
    tags: ["EUR/USD", "ECB", "Lãi suất", "Phân tích"],
    fullContent: `
      <h2>Phân tích chi tiết quyết định lãi suất ECB</h2>
      
      <p>Ngân hàng Trung ương Châu Âu (ECB) đã quyết định giữ nguyên lãi suất chính ở mức 4.5% trong cuộc họp chính sách tiền tệ tháng 12. Đây là lần thứ ba liên tiếp ECB giữ nguyên lãi suất sau chuỗi tăng lãi suất kéo dài từ tháng 7/2022.</p>
      
      <h3>Tác động lên thị trường forex</h3>
      
      <p>Cặp tiền EUR/USD đã tăng mạnh hơn 100 pips sau khi quyết định được công bố, từ mức 1.0850 lên 1.0950. Động thái này phản ánh kỳ vọng của thị trường về việc ECB sẽ duy trì lãi suất cao trong thời gian dài hơn so với dự kiến ban đầu.</p>
      
      <p>Chủ tịch ECB Christine Lagarde đã đưa ra những tín hiệu hawkish trong cuộc họp báo sau đó, nhấn mạnh rằng:</p>
      
      <ul>
        <li>Lạm phát vẫn còn cao hơn mục tiêu 2%</li>
        <li>ECB sẽ cần thêm thời gian để đánh giá tác động của các biện pháp thắt chặt tiền tệ</li>
        <li>Không loại trừ khả năng tăng lãi suất thêm nếu cần thiết</li>
      </ul>
      
      <h3>Triển vọng kỹ thuật</h3>
      
      <p>Từ góc độ kỹ thuật, EUR/USD đã phá vỡ ngưỡng kháng cự quan trọng tại 1.0920 và hiện đang hướng tới mục tiêu tiếp theo tại 1.1000. Các chỉ báo kỹ thuật cho thấy:</p>
      
      <ul>
        <li>RSI đang ở mức 65, cho thấy momentum tăng giá vẫn còn</li>
        <li>MACD đã tạo ra tín hiệu mua mới</li>
        <li>Đường trung bình động 50 ngày đang hỗ trợ giá</li>
      </ul>
      
      <h3>Khuyến nghị giao dịch</h3>
      
      <p>Với những tín hiệu tích cực từ ECB và phân tích kỹ thuật, chúng tôi khuyến nghị:</p>
      
      <ul>
        <li>Mua EUR/USD tại mức hiện tại với mục tiêu 1.1000</li>
        <li>Đặt stop loss tại 1.0850</li>
        <li>Chú ý theo dõi các dữ liệu kinh tế Mỹ sắp tới</li>
      </ul>
      
      <p><strong>Lưu ý:</strong> Giao dịch forex có rủi ro cao. Vui lòng quản lý vốn một cách thận trọng và không đầu tư quá khả năng tài chính của mình.</p>
    `,
    relatedArticles: [2, 3, 4]
  },
  {
    id: 2,
    title: "USD/JPY giảm mạnh do lo ngại về suy thoái kinh tế Mỹ",
    excerpt: "Đồng đô la Mỹ giảm giá mạnh so với đồng yên Nhật sau khi dữ liệu kinh tế Mỹ cho thấy dấu hiệu suy yếu, làm dấy lên lo ngại về khả năng suy thoái.",
    content: "Dữ liệu kinh tế Mỹ mới nhất cho thấy chỉ số PMI sản xuất giảm xuống mức 48.2, thấp hơn mức kỳ vọng 49.5. Điều này đã làm dấy lên lo ngại về khả năng suy thoái kinh tế Mỹ, khiến các nhà đầu tư chuyển sang tài sản an toàn như đồng yên Nhật.",
    author: "Trần Thị B",
    date: "2024-01-14",
    category: "Tin tức thị trường",
    image: "https://media.vneconomy.vn/w800/images/upload/2025/06/10/anh-man-hinh-2025-06-10-luc-21-51-02.png",
    readTime: "4 phút",
    tags: ["USD/JPY", "Kinh tế Mỹ", "PMI", "Suy thoái"],
    fullContent: `
      <h2>Phân tích dữ liệu PMI và tác động lên USD/JPY</h2>
      
      <p>Dữ liệu kinh tế Mỹ mới nhất đã gây sốc cho thị trường khi chỉ số PMI sản xuất giảm xuống mức 48.2 trong tháng 12, thấp hơn đáng kể so với mức kỳ vọng 49.5 và mức 49.0 của tháng trước. Đây là lần thứ 14 liên tiếp PMI sản xuất ở dưới ngưỡng 50, cho thấy hoạt động sản xuất đang co lại.</p>
      
      <h3>Tác động lên thị trường forex</h3>
      
      <p>Cặp tiền USD/JPY đã giảm mạnh hơn 150 pips sau khi dữ liệu được công bố, từ mức 148.50 xuống 147.00. Động thái này phản ánh:</p>
      
      <ul>
        <li>Lo ngại về khả năng suy thoái kinh tế Mỹ</li>
        <li>Kỳ vọng Fed sẽ giảm lãi suất sớm hơn</li>
        <li>Dòng tiền chảy vào tài sản an toàn như đồng yên Nhật</li>
      </ul>
      
      <h3>Phân tích kỹ thuật</h3>
      
      <p>Từ góc độ kỹ thuật, USD/JPY đã phá vỡ ngưỡng hỗ trợ quan trọng tại 147.50 và hiện đang hướng tới mục tiêu tiếp theo tại 146.00. Các chỉ báo kỹ thuật cho thấy:</p>
      
      <ul>
        <li>RSI đang ở mức 35, cho thấy momentum giảm giá mạnh</li>
        <li>MACD đã tạo ra tín hiệu bán mới</li>
        <li>Giá đã phá vỡ đường trung bình động 200 ngày</li>
      </ul>
      
      <h3>Triển vọng kinh tế Mỹ</h3>
      
      <p>Các chuyên gia kinh tế đang lo ngại về:</p>
      
      <ul>
        <li>Lạm phát vẫn còn cao mặc dù đã giảm</li>
        <li>Lãi suất cao đang ảnh hưởng đến hoạt động kinh doanh</li>
        <li>Nợ tiêu dùng đang tăng cao</li>
        <li>Thị trường lao động có thể suy yếu</li>
      </ul>
      
      <h3>Khuyến nghị giao dịch</h3>
      
      <p>Với những tín hiệu tiêu cực từ dữ liệu kinh tế và phân tích kỹ thuật, chúng tôi khuyến nghị:</p>
      
      <ul>
        <li>Bán USD/JPY tại mức hiện tại với mục tiêu 146.00</li>
        <li>Đặt stop loss tại 148.50</li>
        <li>Theo dõi các dữ liệu kinh tế Mỹ sắp tới</li>
      </ul>
    `,
    relatedArticles: [1, 3, 5]
  },
  {
    id: 3,
    title: "GBP/USD phục hồi sau dữ liệu lạm phát Anh",
    excerpt: "Đồng bảng Anh tăng giá so với đô la Mỹ sau khi dữ liệu lạm phát Anh cho thấy CPI tăng cao hơn dự kiến, làm tăng kỳ vọng về việc BoE sẽ duy trì lãi suất cao.",
    content: "Chỉ số giá tiêu dùng (CPI) của Anh trong tháng 12 đã tăng 4.0% so với cùng kỳ năm trước, cao hơn mức kỳ vọng 3.8%. Điều này đã làm tăng kỳ vọng về việc Ngân hàng Trung ương Anh (BoE) sẽ duy trì lãi suất ở mức cao trong thời gian dài hơn.",
    author: "Lê Văn C",
    date: "2024-01-13",
    category: "Phân tích cơ bản",
    image: "https://editorial.fxsstatic.com/miscelaneous/_GBP_USD_2025-08-04_12-31-39-1754291567265-1754291567275.png",
    readTime: "6 phút",
    tags: ["GBP/USD", "BoE", "Lạm phát", "CPI"],
    fullContent: `
      <h2>Phân tích dữ liệu lạm phát Anh và tác động lên GBP/USD</h2>
      
      <p>Dữ liệu lạm phát Anh mới nhất đã gây bất ngờ cho thị trường khi CPI tăng 4.0% so với cùng kỳ năm trước, cao hơn mức kỳ vọng 3.8% và mức 3.9% của tháng trước. Đây là lần đầu tiên trong 6 tháng qua, lạm phát Anh tăng trở lại.</p>
      
      <h3>Tác động lên thị trường forex</h3>
      
      <p>Cặp tiền GBP/USD đã tăng mạnh hơn 80 pips sau khi dữ liệu được công bố, từ mức 1.2650 lên 1.2730. Động thái này phản ánh:</p>
      
      <ul>
        <li>Kỳ vọng BoE sẽ duy trì lãi suất cao hơn</li>
        <li>Chênh lệch lãi suất giữa Anh và Mỹ có thể thu hẹp</li>
        <li>Đồng bảng Anh được hỗ trợ bởi dữ liệu kinh tế tích cực</li>
      </ul>
      
      <h3>Phân tích cơ bản</h3>
      
      <p>Các yếu tố đang hỗ trợ lạm phát Anh:</p>
      
      <ul>
        <li>Giá năng lượng tăng trở lại</li>
        <li>Lương tăng cao hơn dự kiến</li>
        <li>Chi phí vận chuyển tăng</li>
        <li>Thời tiết lạnh ảnh hưởng đến sản xuất</li>
      </ul>
      
      <h3>Triển vọng chính sách tiền tệ</h3>
      
      <p>Với lạm phát vẫn còn cao hơn mục tiêu 2%, BoE có thể:</p>
      
      <ul>
        <li>Duy trì lãi suất ở mức 5.25% trong thời gian dài hơn</li>
        <li>Không giảm lãi suất cho đến cuối năm 2024</li>
        <li>Tiếp tục theo dõi chặt chẽ các chỉ số lạm phát</li>
      </ul>
      
      <h3>Phân tích kỹ thuật</h3>
      
      <p>Từ góc độ kỹ thuật, GBP/USD đã phá vỡ ngưỡng kháng cự quan trọng tại 1.2700 và hiện đang hướng tới mục tiêu tiếp theo tại 1.2800. Các chỉ báo kỹ thuật cho thấy:</p>
      
      <ul>
        <li>RSI đang ở mức 60, cho thấy momentum tăng giá</li>
        <li>MACD đã tạo ra tín hiệu mua mới</li>
        <li>Giá đang giao dịch trên đường trung bình động 50 ngày</li>
      </ul>
      
      <h3>Khuyến nghị giao dịch</h3>
      
      <p>Với những tín hiệu tích cực từ dữ liệu lạm phát và phân tích kỹ thuật, chúng tôi khuyến nghị:</p>
      
      <ul>
        <li>Mua GBP/USD tại mức hiện tại với mục tiêu 1.2800</li>
        <li>Đặt stop loss tại 1.2650</li>
        <li>Theo dõi cuộc họp BoE sắp tới</li>
      </ul>
    `,
    relatedArticles: [1, 2, 4]
  },
  {
    id: 4,
    title: "AUD/USD tăng mạnh nhờ dữ liệu việc làm tích cực",
    excerpt: "Đồng đô la Úc tăng giá mạnh so với đô la Mỹ sau khi dữ liệu việc làm Úc cho thấy tỷ lệ thất nghiệp giảm xuống mức thấp nhất trong 50 năm.",
    content: "Dữ liệu việc làm Úc cho thấy tỷ lệ thất nghiệp đã giảm xuống 3.4% trong tháng 12, thấp nhất trong 50 năm qua. Điều này đã làm tăng kỳ vọng về việc Ngân hàng Dự trữ Úc (RBA) sẽ tiếp tục tăng lãi suất trong các cuộc họp tới.",
    author: "Phạm Thị D",
    date: "2024-01-12",
    category: "Tin tức thị trường",
    image: "https://gldt.mql5.vn/2025/02/shutterstock_1018406737-640x420.jpg",
    readTime: "3 phút",
    tags: ["AUD/USD", "RBA", "Việc làm", "Thất nghiệp"],
    fullContent: `
      <h2>Phân tích dữ liệu việc làm Úc và tác động lên AUD/USD</h2>
      
      <p>Dữ liệu việc làm Úc mới nhất đã gây ấn tượng mạnh khi tỷ lệ thất nghiệp giảm xuống 3.4% trong tháng 12, thấp nhất trong 50 năm qua. Đồng thời, số lượng việc làm mới được tạo ra cũng tăng 64.800, cao hơn mức kỳ vọng 25.000.</p>
      
      <h3>Tác động lên thị trường forex</h3>
      
      <p>Cặp tiền AUD/USD đã tăng mạnh hơn 60 pips sau khi dữ liệu được công bố, từ mức 0.6650 lên 0.6710. Động thái này phản ánh:</p>
      
      <ul>
        <li>Kỳ vọng RBA sẽ tăng lãi suất thêm</li>
        <li>Thị trường lao động Úc đang rất mạnh</li>
        <li>Đồng đô la Úc được hỗ trợ bởi dữ liệu kinh tế tích cực</li>
      </ul>
      
      <h3>Phân tích thị trường lao động</h3>
      
      <p>Các chỉ số tích cực của thị trường lao động Úc:</p>
      
      <ul>
        <li>Tỷ lệ thất nghiệp thấp nhất trong 50 năm</li>
        <li>Tỷ lệ tham gia lực lượng lao động tăng</li>
        <li>Lương tăng trung bình 4.2% so với năm trước</li>
        <li>Số giờ làm việc tăng</li>
      </ul>
      
      <h3>Triển vọng chính sách tiền tệ</h3>
      
      <p>Với thị trường lao động mạnh và lạm phát vẫn còn cao, RBA có thể:</p>
      
      <ul>
        <li>Tăng lãi suất thêm 25 điểm cơ bản trong tháng 2</li>
        <li>Duy trì lãi suất cao trong thời gian dài hơn</li>
        <li>Tiếp tục theo dõi chặt chẽ các chỉ số kinh tế</li>
      </ul>
      
      <h3>Khuyến nghị giao dịch</h3>
      
      <p>Với những tín hiệu tích cực từ dữ liệu việc làm, chúng tôi khuyến nghị:</p>
      
      <ul>
        <li>Mua AUD/USD tại mức hiện tại với mục tiêu 0.6750</li>
        <li>Đặt stop loss tại 0.6650</li>
        <li>Theo dõi cuộc họp RBA sắp tới</li>
      </ul>
    `,
    relatedArticles: [1, 3, 6]
  },
  {
    id: 5,
    title: "USD/CAD giảm do giá dầu tăng mạnh",
    excerpt: "Đồng đô la Canada tăng giá so với đô la Mỹ sau khi giá dầu thô tăng mạnh do căng thẳng địa chính trị ở Trung Đông.",
    content: "Giá dầu thô Brent đã tăng hơn 3% trong phiên giao dịch hôm nay do căng thẳng địa chính trị gia tăng ở Trung Đông. Điều này đã hỗ trợ đồng đô la Canada, một loại tiền tệ hàng hóa, tăng giá so với đô la Mỹ.",
    author: "Hoàng Văn E",
    date: "2024-01-11",
    category: "Phân tích kỹ thuật",
    image: "https://gldt.mql5.vn/2025/06/USDCAD-ph-c-h-i-l-n-g-n-1-3600-khi-gi--d-u--i-u-ch-nh-gi-m--H-i-ngh--th--ng---nh-G7----c-ch---.jpg",
    readTime: "4 phút",
    tags: ["USD/CAD", "Dầu thô", "Địa chính trị", "Hàng hóa"],
    fullContent: `
      <h2>Phân tích mối quan hệ giữa giá dầu và USD/CAD</h2>
      
      <p>Giá dầu thô Brent đã tăng mạnh hơn 3% trong phiên giao dịch hôm nay, từ mức 78 USD/thùng lên 80.5 USD/thùng. Động thái này chủ yếu do căng thẳng địa chính trị gia tăng ở Trung Đông, đặc biệt là các cuộc tấn công vào tàu chở dầu ở Biển Đỏ.</p>
      
      <h3>Tác động lên USD/CAD</h3>
      
      <p>Cặp tiền USD/CAD đã giảm hơn 50 pips sau khi giá dầu tăng, từ mức 1.3450 xuống 1.3400. Động thái này phản ánh:</p>
      
      <ul>
        <li>Đồng đô la Canada được hỗ trợ bởi giá dầu tăng</li>
        <li>Canada là nước xuất khẩu dầu lớn</li>
        <li>Mối tương quan tích cực giữa CAD và giá dầu</li>
      </ul>
      
      <h3>Phân tích địa chính trị</h3>
      
      <p>Các yếu tố địa chính trị đang ảnh hưởng đến giá dầu:</p>
      
      <ul>
        <li>Căng thẳng ở Biển Đỏ và eo biển Hormuz</li>
        <li>Xung đột ở Ukraine ảnh hưởng đến nguồn cung</li>
        <li>OPEC+ duy trì chính sách cắt giảm sản lượng</li>
        <li>Nhu cầu dầu từ Trung Quốc tăng</li>
      </ul>
      
      <h3>Phân tích kỹ thuật</h3>
      
      <p>Từ góc độ kỹ thuật, USD/CAD đã phá vỡ ngưỡng hỗ trợ quan trọng tại 1.3420 và hiện đang hướng tới mục tiêu tiếp theo tại 1.3350. Các chỉ báo kỹ thuật cho thấy:</p>
      
      <ul>
        <li>RSI đang ở mức 40, cho thấy momentum giảm giá</li>
        <li>MACD đã tạo ra tín hiệu bán mới</li>
        <li>Giá đang giao dịch dưới đường trung bình động 50 ngày</li>
      </ul>
      
      <h3>Triển vọng giá dầu</h3>
      
      <p>Các yếu tố có thể ảnh hưởng đến giá dầu trong thời gian tới:</p>
      
      <ul>
        <li>Tình hình địa chính trị ở Trung Đông</li>
        <li>Quyết định của OPEC+ về sản lượng</li>
        <li>Nhu cầu dầu toàn cầu</li>
        <li>Chính sách tiền tệ của các ngân hàng trung ương</li>
      </ul>
      
      <h3>Khuyến nghị giao dịch</h3>
      
      <p>Với những tín hiệu tiêu cực từ phân tích kỹ thuật và giá dầu tăng, chúng tôi khuyến nghị:</p>
      
      <ul>
        <li>Bán USD/CAD tại mức hiện tại với mục tiêu 1.3350</li>
        <li>Đặt stop loss tại 1.3450</li>
        <li>Theo dõi tình hình địa chính trị và giá dầu</li>
      </ul>
    `,
    relatedArticles: [2, 4, 6]
  },
  {
    id: 6,
    title: "NZD/USD tăng nhờ dữ liệu bán lẻ tích cực",
    excerpt: "Đồng đô la New Zealand tăng giá so với đô la Mỹ sau khi dữ liệu bán lẻ cho thấy chi tiêu tiêu dùng tăng mạnh hơn dự kiến.",
    content: "Dữ liệu bán lẻ New Zealand cho thấy chi tiêu tiêu dùng đã tăng 1.2% trong tháng 12, cao hơn mức kỳ vọng 0.8%. Điều này đã làm tăng kỳ vọng về việc Ngân hàng Dự trữ New Zealand (RBNZ) sẽ duy trì lãi suất ở mức cao.",
    author: "Vũ Thị F",
    date: "2024-01-10",
    category: "Phân tích cơ bản",
    image: "https://gldt.mql5.vn/2025/05/NZDUSD-t-ng-m-nh-l-n-g-n-0-5900-tr--c-d--li-u-Doanh-s--b-n-l--v--PPI-c-a-Hoa-K-.jpg",
    readTime: "5 phút",
    tags: ["NZD/USD", "RBNZ", "Bán lẻ", "Tiêu dùng"],
    fullContent: `
      <h2>Phân tích dữ liệu bán lẻ New Zealand và tác động lên NZD/USD</h2>
      
      <p>Dữ liệu bán lẻ New Zealand mới nhất đã gây bất ngờ cho thị trường khi chi tiêu tiêu dùng tăng 1.2% trong tháng 12, cao hơn mức kỳ vọng 0.8% và mức 0.5% của tháng trước. Đây là mức tăng cao nhất trong 6 tháng qua.</p>
      
      <h3>Tác động lên thị trường forex</h3>
      
      <p>Cặp tiền NZD/USD đã tăng hơn 40 pips sau khi dữ liệu được công bố, từ mức 0.6150 lên 0.6190. Động thái này phản ánh:</p>
      
      <ul>
        <li>Kỳ vọng RBNZ sẽ duy trì lãi suất cao</li>
        <li>Nền kinh tế New Zealand đang phục hồi</li>
        <li>Đồng đô la New Zealand được hỗ trợ bởi dữ liệu tích cực</li>
      </ul>
      
      <h3>Phân tích chi tiêu tiêu dùng</h3>
      
      <p>Các yếu tố đang hỗ trợ chi tiêu tiêu dùng:</p>
      
      <ul>
        <li>Thị trường lao động ổn định</li>
        <li>Lương tăng trung bình</li>
        <li>Giá cả ổn định</li>
        <li>Lòng tin người tiêu dùng tăng</li>
      </ul>
      
      <h3>Triển vọng chính sách tiền tệ</h3>
      
      <p>Với chi tiêu tiêu dùng tăng và lạm phát vẫn còn cao, RBNZ có thể:</p>
      
      <ul>
        <li>Duy trì lãi suất ở mức 5.5% trong thời gian dài hơn</li>
        <li>Không giảm lãi suất cho đến cuối năm 2024</li>
        <li>Tiếp tục theo dõi chặt chẽ các chỉ số kinh tế</li>
      </ul>
      
      <h3>Phân tích kỹ thuật</h3>
      
      <p>Từ góc độ kỹ thuật, NZD/USD đã phá vỡ ngưỡng kháng cự quan trọng tại 0.6180 và hiện đang hướng tới mục tiêu tiếp theo tại 0.6220. Các chỉ báo kỹ thuật cho thấy:</p>
      
      <ul>
        <li>RSI đang ở mức 55, cho thấy momentum tăng giá</li>
        <li>MACD đã tạo ra tín hiệu mua mới</li>
        <li>Giá đang giao dịch trên đường trung bình động 20 ngày</li>
      </ul>
      
      <h3>Khuyến nghị giao dịch</h3>
      
      <p>Với những tín hiệu tích cực từ dữ liệu bán lẻ và phân tích kỹ thuật, chúng tôi khuyến nghị:</p>
      
      <ul>
        <li>Mua NZD/USD tại mức hiện tại với mục tiêu 0.6220</li>
        <li>Đặt stop loss tại 0.6150</li>
        <li>Theo dõi cuộc họp RBNZ sắp tới</li>
      </ul>
    `,
    relatedArticles: [3, 4, 5]
  }
]

export default function NewsDetailPage({ params }: { params: { id: string } }) {
  const { t, language } = useLanguage()
  const all = getNews(language)
  const article = all.find(a => a.id === parseInt(params.id)) as any

  if (!article) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Không tìm thấy bài viết</h1>
          <Link href="/news" className="text-blue-600 hover:text-blue-700">
            {t('common.back')}
          </Link>
        </div>
      </div>
    )
  }

  const relatedArticles = all.filter(a => (article?.relatedArticles || []).includes(a.id)) as any[]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <Header activePage="news" />

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Article Header */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 mb-8 border border-gray-200 dark:border-gray-700">
          <div className="mb-6">
            <span className="inline-block bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-sm font-medium mb-4">
              {article.category}
            </span>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">{article.title}</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">{article.excerpt}</p>

            {/* Article Meta */}
            <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-6">
              <div className="flex items-center space-x-6">
                <div className="flex items-center">
                  <User className="h-4 w-4 mr-2" />
                  {article.author}
                </div>
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2" />
                  {new Date(article.publishedAt || article.date).toLocaleDateString(language === 'en' ? 'en-US' : 'vi-VN')}
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-2" />
                  {article.readTime} {t('common.readTime')}
                </div>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {article.tags.map((tag: string, index: number) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full flex items-center"
                >
                  <Tag className="h-3 w-3 mr-1" />
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Featured Image */}
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-64 object-cover rounded-lg mb-6"
          />
        </div>

        {/* Article Content */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <div
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: article.fullContent }}
          />
        </div>

        {/* Related Articles */}
        {relatedArticles.length > 0 && (
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Bài viết liên quan</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedArticles.map((relatedArticle) => (
                <Link
                  key={relatedArticle.id}
                  href={`/news/${relatedArticle.id}`}
                  className="block bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors"
                >
                  <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                    {relatedArticle.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                    {relatedArticle.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>{relatedArticle.author}</span>
                    <span>{relatedArticle.readTime}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-xl font-bold mb-4">Action Now</h3>
            <p className="text-gray-400 mb-6">
              Cung cấp thông tin chính xác và cập nhật về thị trường forex
            </p>
            <div className="flex justify-center space-x-6">
              <Link href="/" className="text-gray-400 hover:text-white">
                Sàn Forex
              </Link>
              <Link href="/news" className="text-gray-400 hover:text-white">
                Tin Tức
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
} 