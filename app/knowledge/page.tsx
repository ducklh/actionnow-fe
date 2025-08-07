'use client'

import { useState } from 'react'
import Link from 'next/link'
import { BookOpen, Search, Filter, TrendingUp, DollarSign, Shield, BarChart3, Users, Clock, AlertTriangle, CheckCircle, Info, Zap, Settings, Brain, Target } from 'lucide-react'

export default function KnowledgePage() {
    const [searchTerm, setSearchTerm] = useState('')
    const [selectedCategory, setSelectedCategory] = useState('Tất cả')

    const categories = [
        'Tất cả',
        'Kiến thức cơ bản',
        'Phân tích kỹ thuật',
        'Phân tích cơ bản',
        'Quản lý rủi ro',
        'Tâm lý giao dịch',
        'Chiến lược giao dịch',
        'Công cụ giao dịch'
    ]

    const knowledgeItems = [
        {
            id: 1,
            title: "Forex là gì? Hướng dẫn cơ bản cho người mới",
            category: "Kiến thức cơ bản",
            level: "Cơ bản",
            readTime: "10 phút",
            description: "Tìm hiểu về thị trường forex, cách hoạt động và các khái niệm cơ bản",
            icon: Info,
            tags: ["Forex", "Cơ bản", "Thị trường", "Tiền tệ"],
            content: "Forex (Foreign Exchange) là thị trường trao đổi tiền tệ quốc tế. Đây là thị trường tài chính lớn nhất thế giới với khối lượng giao dịch hàng ngày lên tới 6.6 nghìn tỷ USD..."
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
            content: "Các cặp tiền tệ chính (Major pairs) bao gồm EUR/USD, GBP/USD, USD/JPY, USD/CHF, AUD/USD, USD/CAD, NZD/USD..."
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
            content: "Pip (Percentage in Point) là đơn vị nhỏ nhất để đo lường sự thay đổi tỷ giá. Một pip thường bằng 0.0001 cho hầu hết các cặp tiền..."
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
            content: "Các mô hình biểu đồ như Head and Shoulders, Double Top/Bottom, Triangle, Flag và Pennant là công cụ quan trọng..."
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
            content: "RSI (Relative Strength Index) là chỉ báo đo lường tốc độ và mức độ thay đổi giá. Giá trị từ 0-100..."
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
            content: "Các yếu tố cơ bản ảnh hưởng đến tỷ giá bao gồm lãi suất, GDP, tỷ lệ thất nghiệp, lạm phát..."
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
            content: "Quy tắc 2%: Không bao giờ rủi ro quá 2% tài khoản cho một giao dịch. Điều này giúp bảo vệ vốn..."
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
            content: "Tâm lý giao dịch chiếm 80% thành công trong forex. Fear và Greed là hai cảm xúc nguy hiểm nhất..."
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
            content: "Scalping là chiến lược giao dịch trong thời gian rất ngắn, thường từ vài giây đến vài phút..."
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
            content: "Swing Trading là chiến lược nắm giữ vị thế từ vài ngày đến vài tuần, tận dụng các xu hướng..."
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
            content: "MetaTrader là nền tảng giao dịch phổ biến nhất thế giới. MT4 và MT5 có giao diện thân thiện..."
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
            content: "Giao dịch quá nhiều, không có kế hoạch, bỏ qua quản lý rủi ro là những lỗi phổ biến nhất..."
        }
    ]

    const filteredItems = knowledgeItems.filter(item => {
        const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
        const matchesCategory = selectedCategory === 'Tất cả' || item.category === selectedCategory
        return matchesSearch && matchesCategory
    })

    const getLevelColor = (level: string) => {
        switch (level) {
            case 'Cơ bản': return 'bg-green-100 text-green-800'
            case 'Trung cấp': return 'bg-yellow-100 text-yellow-800'
            case 'Nâng cao': return 'bg-red-100 text-red-800'
            default: return 'bg-gray-100 text-gray-800'
        }
    }

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <header className="bg-white shadow-sm border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center py-6">
                        <div className="flex items-center">
                            <BookOpen className="h-8 w-8 text-blue-600 mr-3" />
                            <h1 className="text-2xl font-bold text-gray-900">Action Now</h1>
                        </div>
                        <nav className="flex space-x-8">
                            <Link href="/" className="text-gray-500 hover:text-gray-900 transition-colors">
                                Sàn Forex
                            </Link>
                            <Link href="/news" className="text-gray-500 hover:text-gray-900 transition-colors">
                                Tin Tức
                            </Link>
                            <Link href="/knowledge" className="text-blue-600 font-medium">
                                Kiến Thức
                            </Link>
                        </nav>
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold mb-4">Kiến Thức Forex</h1>
                        <p className="text-xl mb-8 max-w-3xl mx-auto">
                            Học hỏi từ cơ bản đến nâng cao về thị trường forex.
                            Xây dựng nền tảng kiến thức vững chắc để giao dịch thành công.
                        </p>
                        <div className="flex justify-center space-x-4">
                            <div className="bg-white bg-opacity-20 rounded-lg px-6 py-3">
                                <span className="text-2xl font-bold">{knowledgeItems.length}</span>
                                <p className="text-sm">Bài viết</p>
                            </div>
                            <div className="bg-white bg-opacity-20 rounded-lg px-6 py-3">
                                <span className="text-2xl font-bold">{categories.length - 1}</span>
                                <p className="text-sm">Chuyên mục</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Search and Filter */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="flex flex-col lg:flex-row gap-6 mb-8">
                    <div className="flex-1">
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                            <input
                                type="text"
                                placeholder="Tìm kiếm kiến thức..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-gray-900 placeholder-gray-500"
                            />
                        </div>
                    </div>
                    <div className="flex items-center space-x-4">
                        <Filter className="h-5 w-5 text-gray-400" />
                        <label className="text-sm font-medium text-gray-700">Chuyên mục:</label>
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

                {/* Knowledge Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredItems.map((item) => {
                        const IconComponent = item.icon
                        return (
                            <div key={item.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden border border-gray-100 flex flex-col h-full">
                                <div className="p-6 flex flex-col flex-grow">
                                    <div className="flex items-center mb-4">
                                        <div className="p-2 bg-blue-100 rounded-lg">
                                            <IconComponent className="h-6 w-6 text-blue-600" />
                                        </div>
                                        <div className="ml-3">
                                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getLevelColor(item.level)}`}>
                                                {item.level}
                                            </span>
                                        </div>
                                    </div>

                                    <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
                                        {item.title}
                                    </h3>

                                    <p className="text-gray-600 mb-4 flex-grow">
                                        {item.description}
                                    </p>

                                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                                        <span className="flex items-center">
                                            <Clock className="h-4 w-4 mr-1" />
                                            {item.readTime}
                                        </span>
                                        <span className="text-blue-600 font-medium">
                                            {item.category}
                                        </span>
                                    </div>

                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {item.tags.slice(0, 3).map((tag, index) => (
                                            <span key={index} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <Link 
                                        href={`/knowledge/${item.id}`}
                                        className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors font-medium text-center block"
                                    >
                                        Đọc chi tiết
                                    </Link>
                                </div>
                            </div>
                        )
                    })}
                </div>

                {filteredItems.length === 0 && (
                    <div className="text-center py-12">
                        <BookOpen className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                        <h3 className="text-lg font-medium text-gray-900 mb-2">Không tìm thấy kiến thức</h3>
                        <p className="text-gray-500">Thử thay đổi từ khóa tìm kiếm hoặc chọn chuyên mục khác</p>
                    </div>
                )}
            </div>

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