'use client'

import { useState } from 'react'
import Link from 'next/link'
import { TrendingUp, Calendar, User, ArrowRight, Search, Filter } from 'lucide-react'

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
        tags: ["EUR/USD", "ECB", "Lãi suất", "Phân tích"]
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
        tags: ["USD/JPY", "Kinh tế Mỹ", "PMI", "Suy thoái"]
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
        tags: ["GBP/USD", "BoE", "Lạm phát", "CPI"]
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
        tags: ["AUD/USD", "RBA", "Việc làm", "Thất nghiệp"]
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
        tags: ["USD/CAD", "Dầu thô", "Địa chính trị", "Hàng hóa"]
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
        tags: ["NZD/USD", "RBNZ", "Bán lẻ", "Tiêu dùng"]
    }
]

const categories = [
    "Tất cả",
    "Phân tích kỹ thuật",
    "Phân tích cơ bản",
    "Tin tức thị trường"
]

export default function NewsPage() {
    const [searchTerm, setSearchTerm] = useState('')
    const [selectedCategory, setSelectedCategory] = useState('Tất cả')

    const filteredArticles = newsArticles.filter(article => {
        const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            article.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
            article.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))

        const matchesCategory = selectedCategory === 'Tất cả' || article.category === selectedCategory

        return matchesSearch && matchesCategory
    })

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
            {/* Header */}
            <header className="bg-white shadow-sm border-b">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center py-6">
                        <div className="flex items-center">
                            <TrendingUp className="h-8 w-8 text-blue-600 mr-3" />
                            <h1 className="text-2xl font-bold text-gray-900">Action Now</h1>
                        </div>
                        <nav className="flex space-x-8">
                            <Link href="/" className="text-gray-500 hover:text-blue-600 font-medium">
                                Sàn Forex
                            </Link>
                            <Link href="/news" className="text-blue-600 font-medium">
                                Tin Tức
                            </Link>
                        </nav>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Hero Section */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                        Tin Tức Forex Mới Nhất
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Cập nhật những tin tức mới nhất về thị trường forex, phân tích kỹ thuật và cơ bản
                    </p>
                </div>

                {/* Search and Filter */}
                <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                    <div className="flex flex-col lg:flex-row gap-4">
                        <div className="flex-1">
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                                <input
                                    type="text"
                                    placeholder="Tìm kiếm tin tức..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-gray-900 placeholder-gray-500"
                                />
                            </div>
                        </div>
                        <div className="flex items-center space-x-4">
                            <Filter className="h-5 w-5 text-gray-400" />
                            <label className="text-sm font-medium text-gray-700">Danh mục:</label>
                            <select
                                value={selectedCategory}
                                onChange={(e) => setSelectedCategory(e.target.value)}
                                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-gray-900"
                            >
                                {categories.map(category => (
                                    <option key={category} value={category}>{category}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>

                {/* News Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
                    {filteredArticles.map((article) => (
                        <article key={article.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden border border-gray-100 flex flex-col h-full">
                            <img
                                src={article.image}
                                alt={article.title}
                                className="w-full h-48 object-cover flex-shrink-0"
                            />
                            <div className="p-6 flex flex-col flex-grow">
                                {/* Article Meta */}
                                <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                                    <div className="flex items-center space-x-4">
                                        <div className="flex items-center">
                                            <User className="h-4 w-4 mr-1" />
                                            {article.author}
                                        </div>
                                        <div className="flex items-center">
                                            <Calendar className="h-4 w-4 mr-1" />
                                            {new Date(article.date).toLocaleDateString('vi-VN')}
                                        </div>
                                    </div>
                                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">
                                        {article.readTime}
                                    </span>
                                </div>

                                {/* Category */}
                                <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium mb-3">
                                    {article.category}
                                </span>

                                {/* Title */}
                                <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2">
                                    {article.title}
                                </h3>

                                {/* Excerpt */}
                                <p className="text-gray-700 mb-4 line-clamp-3 leading-relaxed">
                                    {article.excerpt}
                                </p>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {article.tags.map((tag, index) => (
                                        <span
                                            key={index}
                                            className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                                        >
                                            #{tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Read More Button */}
                                <Link
                                    href={`/news/${article.id}`}
                                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium mt-auto"
                                >
                                    Đọc thêm
                                    <ArrowRight className="h-4 w-4 ml-1" />
                                </Link>
                            </div>
                        </article>
                    ))}
                </div>

                {/* Empty State */}
                {filteredArticles.length === 0 && (
                    <div className="text-center py-12">
                        <Search className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                        <h3 className="text-lg font-medium text-gray-900 mb-2">Không tìm thấy tin tức</h3>
                        <p className="text-gray-600">Thử tìm kiếm với từ khóa khác hoặc chọn danh mục khác</p>
                    </div>
                )}

                {/* Newsletter Signup */}
                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg p-8 mt-12 text-white">
                    <div className="text-center">
                        <h3 className="text-2xl font-bold mb-4">Đăng ký nhận tin tức</h3>
                        <p className="text-blue-100 mb-6">
                            Nhận những tin tức forex mới nhất và phân tích thị trường hàng ngày
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                            <input
                                type="email"
                                placeholder="Nhập email của bạn"
                                className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-white focus:outline-none bg-white"
                            />
                            <button className="bg-white text-blue-600 font-medium px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors">
                                Đăng ký
                            </button>
                        </div>
                    </div>
                </div>
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