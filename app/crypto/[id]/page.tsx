'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { ArrowLeft, Calendar, User, Clock, Share2, Bookmark, TrendingUp, Bitcoin } from 'lucide-react'
import { useLanguage } from '../../contexts/LanguageContext'

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
        content: `Ủy ban Chứng khoán và Giao dịch Hoa Kỳ (SEC) đã phê duyệt 11 ETF Bitcoin đầu tiên, đánh dấu một bước ngoặt quan trọng trong việc chấp nhận cryptocurrency trong hệ thống tài chính truyền thống. Quyết định này đã thúc đẩy Bitcoin tăng mạnh vượt mốc 50,000 USD, tăng hơn 20% trong tuần này.

Các ETF Bitcoin được phê duyệt bao gồm:
- BlackRock iShares Bitcoin Trust
- Fidelity Wise Origin Bitcoin Fund
- Grayscale Bitcoin Trust
- VanEck Bitcoin Trust
- Và 7 ETF khác

Tác động của quyết định này:
1. Tăng tính thanh khoản cho Bitcoin
2. Mở rộng cơ hội đầu tư cho các nhà đầu tư tổ chức
3. Tăng cường tính hợp pháp của cryptocurrency
4. Thúc đẩy sự phát triển của thị trường crypto

Các chuyên gia dự đoán rằng việc phê duyệt ETF sẽ thu hút hàng tỷ USD vào thị trường Bitcoin trong năm 2024, có thể đẩy giá lên mức 100,000 USD hoặc cao hơn.`,
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
        content: `Cập nhật Shanghai của Ethereum đã được triển khai thành công, cho phép các validator rút staked ETH của họ. Đây là một bước quan trọng trong quá trình chuyển đổi sang Proof-of-Stake và có thể tác động đáng kể đến giá ETH trong thời gian tới.

Những thay đổi chính trong cập nhật Shanghai:
- Cho phép rút staked ETH
- Cải thiện hiệu suất mạng lưới
- Giảm phí gas
- Tăng cường bảo mật

Tác động đến thị trường:
1. Tăng tính thanh khoản cho staked ETH
2. Thu hút thêm validator mới
3. Cải thiện hiệu suất tổng thể của mạng lưới
4. Tăng cường vị thế cạnh tranh với các blockchain khác

Các chuyên gia dự đoán rằng cập nhật này sẽ thúc đẩy giá ETH tăng mạnh trong thời gian tới, có thể đạt mức 5,000 USD vào cuối năm 2024.`,
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
        content: `Tổng giá trị bị khóa (TVL) trong các giao thức DeFi đã tăng lên hơn 50 tỷ USD, mức cao nhất trong 6 tháng qua. Sự tăng trưởng này được thúc đẩy bởi việc tăng cường hoạt động trong các giao thức lending và yield farming.

Các giao thức DeFi hàng đầu:
- Uniswap: 3.2 tỷ USD TVL
- Aave: 2.8 tỷ USD TVL
- MakerDAO: 2.5 tỷ USD TVL
- Curve Finance: 2.1 tỷ USD TVL

Xu hướng phát triển:
1. Tăng cường tích hợp cross-chain
2. Cải thiện trải nghiệm người dùng
3. Tăng cường bảo mật
4. Mở rộng các sản phẩm tài chính

Tương lai của DeFi:
- Tích hợp với thị trường tài chính truyền thống
- Phát triển các sản phẩm phái sinh phức tạp
- Tăng cường quản trị phi tập trung
- Mở rộng sang các thị trường mới nổi`,
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
        content: `Sau sự cố mạng nghiêm trọng kéo dài 20 giờ, Solana đã phục hồi hoàn toàn và hoạt động bình thường. Đội ngũ phát triển đã triển khai các bản vá bảo mật và cải thiện tính ổn định của mạng lưới.

Nguyên nhân sự cố:
- Lỗi trong quá trình xử lý giao dịch
- Tắc nghẽn mạng lưới
- Thiếu tài nguyên xử lý

Các biện pháp khắc phục:
1. Triển khai bản vá bảo mật
2. Cải thiện cơ chế xử lý giao dịch
3. Tăng cường giám sát mạng lưới
4. Cải thiện giao tiếp với cộng đồng

Tác động đến thị trường:
- Giá SOL đã phục hồi và tăng trở lại
- Tăng cường niềm tin của nhà đầu tư
- Cải thiện uy tín của dự án
- Thúc đẩy phát triển các giải pháp bảo mật mới`,
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
        content: `Thị trường NFT đang trải qua một giai đoạn phục hồi mạnh mẽ với doanh số bán hàng tăng hơn 40% so với tháng trước. Các dự án mới đang thu hút sự quan tâm lớn từ cộng đồng và các nghệ sĩ nổi tiếng.

Các dự án NFT nổi bật:
- Bored Ape Yacht Club: 2.1 tỷ USD doanh số
- CryptoPunks: 1.8 tỷ USD doanh số
- Doodles: 500 triệu USD doanh số
- Azuki: 400 triệu USD doanh số

Xu hướng mới:
1. NFT gaming phát triển mạnh
2. NFT âm nhạc và nghệ thuật
3. NFT bất động sản
4. NFT thể thao và giải trí

Tương lai của NFT:
- Tích hợp với metaverse
- Phát triển các ứng dụng thực tế
- Tăng cường tính tương tác
- Mở rộng sang các lĩnh vực mới`,
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
        content: `Cardano đã triển khai thành công Hydra, một giải pháp layer 2 mới giúp tăng tốc độ giao dịch lên đến 1 triệu TPS và giảm đáng kể phí gas. Đây là một bước tiến quan trọng trong việc cải thiện khả năng mở rộng của blockchain.

Tính năng của Hydra:
- Tăng tốc độ giao dịch lên 1 triệu TPS
- Giảm phí gas đáng kể
- Tăng cường bảo mật
- Hỗ trợ smart contracts phức tạp

Lợi ích cho người dùng:
1. Giao dịch nhanh hơn
2. Phí thấp hơn
3. Trải nghiệm tốt hơn
4. Khả năng mở rộng cao

Tác động đến thị trường:
- Tăng cường vị thế cạnh tranh của Cardano
- Thu hút thêm developer và dự án mới
- Thúc đẩy giá ADA tăng
- Mở rộng hệ sinh thái Cardano`,
        author: "Vũ Thị F",
        date: "2024-01-10",
        category: "Công nghệ",
        image: "https://cryptonews.com/news/images/740x370/202401/cardano-hydra.jpg",
        readTime: "6 phút",
        tags: ["Cardano", "ADA", "Hydra", "Layer 2"]
    }
]

export default function CryptoArticlePage() {
    const { t } = useLanguage()
    const params = useParams()
    const [article, setArticle] = useState<CryptoArticle | null>(null)
    const [isBookmarked, setIsBookmarked] = useState(false)

    useEffect(() => {
        const id = parseInt(params.id as string)
        const foundArticle = cryptoArticles.find(a => a.id === id)
        setArticle(foundArticle || null)
    }, [params.id])

    if (!article) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Không tìm thấy bài viết</h2>
                    <Link href="/crypto" className="text-orange-600 hover:text-orange-700 font-medium">
                        Quay lại trang Crypto
                    </Link>
                </div>
            </div>
        )
    }

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
                            <Link href="/crypto" className="text-orange-600 font-medium">
                                Crypto News
                            </Link>
                            <Link href="/crypto-brokers" className="text-gray-500 hover:text-orange-600 font-medium dark:text-gray-400 dark:hover:text-orange-400">
                                Crypto Brokers
                            </Link>
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
            <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Back Button */}
                <Link
                    href="/crypto"
                    className="inline-flex items-center text-orange-600 hover:text-orange-700 font-medium mb-8"
                >
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Quay lại trang Crypto
                </Link>

                {/* Article */}
                <article className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                    {/* Article Image */}
                    <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-64 md:h-96 object-cover"
                    />

                    {/* Article Content */}
                    <div className="p-8">
                        {/* Article Meta */}
                        <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-6">
                            <div className="flex items-center space-x-6">
                                <div className="flex items-center">
                                    <User className="h-4 w-4 mr-2" />
                                    {article.author}
                                </div>
                                <div className="flex items-center">
                                    <Calendar className="h-4 w-4 mr-2" />
                                    {new Date(article.date).toLocaleDateString('vi-VN')}
                                </div>
                                <div className="flex items-center">
                                    <Clock className="h-4 w-4 mr-2" />
                                    {article.readTime}
                                </div>
                            </div>
                            <div className="flex items-center space-x-4">
                                <button
                                    onClick={() => setIsBookmarked(!isBookmarked)}
                                    className={`p-2 rounded-full transition-colors ${isBookmarked
                                        ? 'bg-orange-100 text-orange-600 dark:bg-orange-900 dark:text-orange-200'
                                        : 'bg-gray-100 text-gray-500 dark:bg-gray-700 dark:text-gray-400 hover:bg-orange-100 hover:text-orange-600'
                                        }`}
                                >
                                    <Bookmark className="h-4 w-4" />
                                </button>
                                <button className="p-2 bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 rounded-full hover:bg-orange-100 hover:text-orange-600 transition-colors">
                                    <Share2 className="h-4 w-4" />
                                </button>
                            </div>
                        </div>

                        {/* Category */}
                        <span className="inline-block bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-3 py-1 rounded-full text-sm font-medium mb-6">
                            {article.category}
                        </span>

                        {/* Title */}
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                            {article.title}
                        </h1>

                        {/* Excerpt */}
                        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                            {article.excerpt}
                        </p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mb-8">
                            {article.tags.map((tag, index) => (
                                <span
                                    key={index}
                                    className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-full"
                                >
                                    #{tag}
                                </span>
                            ))}
                        </div>

                        {/* Content */}
                        <div className="prose prose-lg max-w-none dark:prose-invert">
                            <div className="whitespace-pre-line text-gray-700 dark:text-gray-300 leading-relaxed">
                                {article.content}
                            </div>
                        </div>
                    </div>
                </article>

                {/* Related Articles */}
                <div className="mt-12">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Bài viết liên quan</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {cryptoArticles
                            .filter(a => a.id !== article.id)
                            .slice(0, 4)
                            .map((relatedArticle) => (
                                <Link
                                    key={relatedArticle.id}
                                    href={`/crypto/${relatedArticle.id}`}
                                    className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden border border-gray-100 dark:border-gray-700"
                                >
                                    <img
                                        src={relatedArticle.image}
                                        alt={relatedArticle.title}
                                        className="w-full h-32 object-cover"
                                    />
                                    <div className="p-4">
                                        <span className="inline-block bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-2 py-1 rounded-full text-xs font-medium mb-2">
                                            {relatedArticle.category}
                                        </span>
                                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 line-clamp-2">
                                            {relatedArticle.title}
                                        </h4>
                                        <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                                            {relatedArticle.excerpt}
                                        </p>
                                    </div>
                                </Link>
                            ))}
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