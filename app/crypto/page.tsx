'use client'

import { useState } from 'react'
import Link from 'next/link'
import { TrendingUp, Calendar, User, ArrowRight, Search, Filter, Bitcoin } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'

interface CryptoArticle {
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

const cryptoArticles: CryptoArticle[] = [
    {
        id: 1,
        title: "Bitcoin tăng vượt 50,000 USD sau khi ETF được phê duyệt",
        excerpt: "Bitcoin đã tăng mạnh vượt mốc 50,000 USD sau khi SEC phê duyệt các ETF Bitcoin đầu tiên, mở ra cơ hội đầu tư mới cho các nhà đầu tư tổ chức.",
        content: "Ủy ban Chứng khoán và Giao dịch Hoa Kỳ (SEC) đã phê duyệt 11 ETF Bitcoin đầu tiên, đánh dấu một bước ngoặt quan trọng trong việc chấp nhận cryptocurrency trong hệ thống tài chính truyền thống. Quyết định này đã thúc đẩy Bitcoin tăng mạnh vượt mốc 50,000 USD, tăng hơn 20% trong tuần này.",
        author: "Nguyễn Văn A",
        date: "2024-01-15",
        category: "Tin tức thị trường",
        image: "https://cryptonews.com/news/images/740x370/202401/bitcoin-price-chart.jpg",
        readTime: "5 phút",
        tags: ["Bitcoin", "ETF", "SEC", "Giá"]
    },
    {
        id: 2,
        title: "Ethereum 2.0: Cập nhật Shanghai mở ra kỷ nguyên mới",
        excerpt: "Ethereum đã hoàn thành cập nhật Shanghai, cho phép người dùng rút staked ETH và mở ra kỷ nguyên mới cho blockchain lớn thứ hai thế giới.",
        content: "Cập nhật Shanghai của Ethereum đã được triển khai thành công, cho phép các validator rút staked ETH của họ. Đây là một bước quan trọng trong quá trình chuyển đổi sang Proof-of-Stake và có thể tác động đáng kể đến giá ETH trong thời gian tới.",
        author: "Trần Thị B",
        date: "2024-01-14",
        category: "Công nghệ",
        image: "https://cryptonews.com/news/images/740x370/202401/ethereum-2-0-update.jpg",
        readTime: "6 phút",
        tags: ["Ethereum", "ETH 2.0", "Shanghai", "Staking"]
    },
    {
        id: 3,
        title: "DeFi TVL đạt mức cao nhất trong 6 tháng",
        excerpt: "Tổng giá trị bị khóa (TVL) trong các giao thức DeFi đã đạt mức cao nhất trong 6 tháng qua, cho thấy sự phục hồi của thị trường DeFi.",
        content: "Tổng giá trị bị khóa (TVL) trong các giao thức DeFi đã tăng lên hơn 50 tỷ USD, mức cao nhất trong 6 tháng qua. Sự tăng trưởng này được thúc đẩy bởi việc tăng cường hoạt động trong các giao thức lending và yield farming.",
        author: "Lê Văn C",
        date: "2024-01-13",
        category: "DeFi",
        image: "https://cryptonews.com/news/images/740x370/202401/defi-tvl-chart.jpg",
        readTime: "4 phút",
        tags: ["DeFi", "TVL", "Lending", "Yield Farming"]
    },
    {
        id: 4,
        title: "Solana phục hồi sau sự cố mạng",
        excerpt: "Solana đã phục hồi hoàn toàn sau sự cố mạng nghiêm trọng và giá SOL đã tăng trở lại, cho thấy sức mạnh của cộng đồng và đội ngũ phát triển.",
        content: "Sau sự cố mạng nghiêm trọng kéo dài 20 giờ, Solana đã phục hồi hoàn toàn và hoạt động bình thường. Đội ngũ phát triển đã triển khai các bản vá bảo mật và cải thiện tính ổn định của mạng lưới.",
        author: "Phạm Thị D",
        date: "2024-01-12",
        category: "Tin tức thị trường",
        image: "https://cryptonews.com/news/images/740x370/202401/solana-recovery.jpg",
        readTime: "3 phút",
        tags: ["Solana", "SOL", "Mạng lưới", "Phục hồi"]
    },
    {
        id: 5,
        title: "NFT thị trường sôi động với các dự án mới",
        excerpt: "Thị trường NFT đang chứng kiến sự sôi động trở lại với các dự án mới và sự quan tâm ngày càng tăng từ các nghệ sĩ và nhà sưu tập.",
        content: "Thị trường NFT đang trải qua một giai đoạn phục hồi mạnh mẽ với doanh số bán hàng tăng hơn 40% so với tháng trước. Các dự án mới đang thu hút sự quan tâm lớn từ cộng đồng và các nghệ sĩ nổi tiếng.",
        author: "Hoàng Văn E",
        date: "2024-01-11",
        category: "NFT",
        image: "https://cryptonews.com/news/images/740x370/202401/nft-marketplace.jpg",
        readTime: "5 phút",
        tags: ["NFT", "Nghệ thuật", "Sưu tập", "Thị trường"]
    },
    {
        id: 6,
        title: "Cardano triển khai Hydra để tăng tốc độ giao dịch",
        excerpt: "Cardano đã triển khai thành công Hydra, một giải pháp layer 2 giúp tăng đáng kể tốc độ giao dịch và giảm phí gas trên mạng lưới.",
        content: "Cardano đã triển khai thành công Hydra, một giải pháp layer 2 mới giúp tăng tốc độ giao dịch lên đến 1 triệu TPS và giảm đáng kể phí gas. Đây là một bước tiến quan trọng trong việc cải thiện khả năng mở rộng của blockchain.",
        author: "Vũ Thị F",
        date: "2024-01-10",
        category: "Công nghệ",
        image: "https://cryptonews.com/news/images/740x370/202401/cardano-hydra.jpg",
        readTime: "6 phút",
        tags: ["Cardano", "ADA", "Hydra", "Layer 2"]
    }
]

const categories = [
    "Tất cả",
    "Tin tức thị trường",
    "Công nghệ",
    "DeFi",
    "NFT"
]

export default function CryptoPage() {
    const { t } = useLanguage()
    const [searchTerm, setSearchTerm] = useState('')
    const [selectedCategory, setSelectedCategory] = useState('Tất cả')

    const filteredArticles = cryptoArticles.filter(article => {
        const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            article.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
            article.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))

        const matchesCategory = selectedCategory === 'Tất cả' || article.category === selectedCategory

        return matchesSearch && matchesCategory
    })

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
            {/* Header */}
            <header className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center py-6">
                        <div className="flex items-center">
                            <Bitcoin className="h-8 w-8 text-orange-600 mr-3" />
                            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Action Now</h1>
                        </div>
                        <nav className="flex space-x-8">
                            <Link href="/" className="text-gray-500 hover:text-blue-600 font-medium dark:text-gray-400 dark:hover:text-blue-400">
                                {t('nav.forex')}
                            </Link>
                            <Link href="/crypto-brokers" className="text-gray-500 hover:text-orange-600 font-medium dark:text-gray-400 dark:hover:text-orange-400">
                                Crypto Brokers
                            </Link>
                            <Link href="/crypto" className="text-orange-600 font-medium">
                                Crypto News
                            </Link>\
                            <Link href="/news" className="text-gray-500 hover:text-blue-600 font-medium dark:text-gray-400 dark:hover:text-blue-400">
                                {t('nav.news')}
                            </Link>
                            <Link href="/knowledge" className="text-gray-500 hover:text-blue-600 font-medium dark:text-gray-400 dark:hover:text-blue-400">
                                {t('nav.knowledge')}
                            </Link>
                        </nav>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Hero Section */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        Tin Tức Cryptocurrency
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                        Cập nhật tin tức mới nhất về Bitcoin, Ethereum và các cryptocurrency khác. Phân tích thị trường và xu hướng công nghệ blockchain.
                    </p>
                </div>

                {/* Search and Filter */}
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 mb-8 border border-gray-200 dark:border-gray-700">
                    <div className="flex flex-col lg:flex-row gap-4">
                        <div className="flex-1">
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                                <input
                                    type="text"
                                    placeholder="Tìm kiếm tin tức cryptocurrency..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                                />
                            </div>
                        </div>
                        <div className="flex items-center space-x-4">
                            <Filter className="h-5 w-5 text-gray-400" />
                            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Danh mục:</label>
                            <select
                                value={selectedCategory}
                                onChange={(e) => setSelectedCategory(e.target.value)}
                                className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
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
                        <article key={article.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden border border-gray-100 dark:border-gray-700 flex flex-col h-full">
                            <img
                                src={article.image}
                                alt={article.title}
                                className="w-full h-48 object-cover flex-shrink-0"
                            />
                            <div className="p-6 flex flex-col flex-grow">
                                {/* Article Meta */}
                                <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-3">
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
                                    <span className="bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 px-2 py-1 rounded-full text-xs">
                                        {article.readTime}
                                    </span>
                                </div>

                                {/* Category */}
                                <span className="inline-block bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-3 py-1 rounded-full text-sm font-medium mb-3">
                                    {article.category}
                                </span>

                                {/* Title */}
                                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3 line-clamp-2">
                                    {article.title}
                                </h3>

                                {/* Excerpt */}
                                <p className="text-gray-700 dark:text-gray-300 mb-4 line-clamp-3 leading-relaxed">
                                    {article.excerpt}
                                </p>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {article.tags.map((tag, index) => (
                                        <span
                                            key={index}
                                            className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-full"
                                        >
                                            #{tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Read More Button */}
                                <Link
                                    href={`/crypto/${article.id}`}
                                    className="inline-flex items-center text-orange-600 hover:text-orange-700 font-medium mt-auto"
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
                        <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Không tìm thấy tin tức</h3>
                        <p className="text-gray-600 dark:text-gray-400">Thử tìm kiếm với từ khóa khác hoặc chọn danh mục khác</p>
                    </div>
                )}

                {/* Newsletter Signup */}
                <div className="bg-gradient-to-r from-orange-600 to-purple-600 rounded-lg p-8 mt-12 text-white">
                    <div className="text-center">
                        <h3 className="text-2xl font-bold mb-4">Đăng ký nhận tin tức Crypto</h3>
                        <p className="text-orange-100 mb-6">
                            Nhận tin tức mới nhất về cryptocurrency và blockchain trực tiếp vào email của bạn
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                            <input
                                type="email"
                                placeholder="Nhập email của bạn"
                                className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-white focus:outline-none bg-white"
                            />
                            <button className="bg-white text-orange-600 font-medium px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors">
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
                            Nền tảng tin tức tài chính hàng đầu về Forex và Cryptocurrency
                        </p>
                        <div className="flex justify-center space-x-6">
                            <Link href="/" className="text-gray-400 hover:text-white">
                                {t('nav.forex')}
                            </Link>
                            <Link href="/crypto" className="text-gray-400 hover:text-white">
                                Crypto
                            </Link>
                            <Link href="/news" className="text-gray-400 hover:text-white">
                                {t('nav.news')}
                            </Link>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
} 