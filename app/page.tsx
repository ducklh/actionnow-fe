'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ExternalLink, TrendingUp, Shield, DollarSign, Globe } from 'lucide-react'
import { useLanguage } from './contexts/LanguageContext'

interface ForexBroker {
    id: number
    name: string
    logo: string
    url: string
    description: string
    rating: number
    features: string[]
    regulation: string
    minDeposit: string
    spreads: string
}

const forexBrokers: ForexBroker[] = [
    {
        id: 1,
        name: "XM",
        logo: "https://cloud.xm-cdn.com/static/xm/common/logos/revamp/XM-15years-logo.jpg",
        url: "https://www.xm.com",
        description: "Sàn forex hàng đầu với hơn 10 triệu khách hàng toàn cầu",
        rating: 4.8,
        features: ["Spread thấp", "Nạp rút nhanh", "Hỗ trợ 24/7"],
        regulation: "CySEC, ASIC, FCA",
        minDeposit: "$5",
        spreads: "Từ 0.6 pips"
    },
    {
        id: 2,
        name: "FXTM",
        logo: "https://fxscouts.com/wp-content/themes/ls-theme-fxscouts/dist/img/broker/small/fxtm.svg",
        url: "https://www.forextime.com",
        description: "Sàn forex uy tín với công nghệ tiên tiến",
        rating: 4.7,
        features: ["Nền tảng MT4/MT5", "Tài khoản demo", "Giáo dục miễn phí"],
        regulation: "FCA, CySEC, FSCA",
        minDeposit: "$10",
        spreads: "Từ 0.4 pips"
    },
    {
        id: 3,
        name: "IC Markets",
        logo: "https://thebrokers.s3.ap-southeast-1.amazonaws.com/small_ic_markets_logo_0c8b2ba099.png",
        url: "https://www.icmarkets.com",
        description: "Sàn ECN với spread cực thấp và khối lượng giao dịch lớn",
        rating: 4.9,
        features: ["ECN True", "Không requotes", "Tốc độ nhanh"],
        regulation: "ASIC, CySEC, FSA",
        minDeposit: "$200",
        spreads: "Từ 0.0 pips"
    },
    {
        id: 4,
        name: "Pepperstone",
        logo: "https://upload.wikimedia.org/wikipedia/commons/2/27/PepperstoneLogo.jpg",
        url: "https://www.pepperstone.com",
        description: "Sàn forex chuyên nghiệp với công nghệ Razor",
        rating: 4.6,
        features: ["Razor Spreads", "Crypto CFD", "Copy Trading"],
        regulation: "ASIC, FCA, CySEC",
        minDeposit: "$200",
        spreads: "Từ 0.0 pips"
    },
    {
        id: 5,
        name: "OANDA",
        logo: "https://play-lh.googleusercontent.com/2OTNlfvzAsGaXqRfbYwyUU2tVMXgod_9ym35pTNOr2MxGp4AtVsEbMUMgMiaNYVk_sI",
        url: "https://www.oanda.com",
        description: "Sàn forex lâu đời với uy tín cao",
        rating: 4.5,
        features: ["Nền tảng ổn định", "Phân tích kỹ thuật", "API Trading"],
        regulation: "FCA, ASIC, IIROC",
        minDeposit: "$1",
        spreads: "Từ 1.0 pips"
    },
    {
        id: 6,
        name: "AvaTrade",
        logo: "https://play-lh.googleusercontent.com/cC0GGmVpJ2M8-onnuo8RUtMGsq7zLPZbuQZuaiMZI3hf45JQiVbWWz5SYbfF7lKtlQY",
        url: "https://www.avatrade.com",
        description: "Sàn forex đa dạng sản phẩm và nền tảng",
        rating: 4.4,
        features: ["AvaOptions", "AvaSocial", "DupliTrade"],
        regulation: "ASIC, FSCA, CySEC",
        minDeposit: "$100",
        spreads: "Từ 0.9 pips"
    },
    {
        id: 7,
        name: "Exness",
        logo: "https://photo2.tinhte.vn/data/attachment-files/2025/07/8783860_lg-Exness-Logo-d79e0e0521.jpg",
        url: "https://www.exness.com",
        description: "Sàn forex phổ biến với spread thấp và rút tiền siêu nhanh",
        rating: 4.7,
        features: ["Spread thấp", "Rút tiền tức thì", "Đòn bẩy cao"],
        regulation: "FCA, CySEC, FSCA",
        minDeposit: "$1",
        spreads: "Từ 0.3 pips"
    },
    {
        id: 8,
        name: "HotForex",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYMag_lJ-iVr4uqCIRRC0CdZFs6NxUDmAckA&s",
        url: "https://www.hotforex.com",
        description: "Sàn forex với nhiều loại tài khoản linh hoạt",
        rating: 4.6,
        features: ["Tài khoản PAMM", "Quản lý rủi ro", "Copy Trading"],
        regulation: "FCA, DFSA, FSCA",
        minDeposit: "$5",
        spreads: "Từ 0.1 pips"
    },
    {
        id: 9,
        name: "Tickmill",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWraFib5MhT4Tq1oGOKI2Zb-lSdEfUJ-4InA&s",
        url: "https://www.tickmill.com",
        description: "Sàn chuyên về giao dịch ECN với chi phí thấp",
        rating: 4.8,
        features: ["Chi phí thấp", "ECN Pro", "Autochartist"],
        regulation: "FCA, CySEC, FSA",
        minDeposit: "$100",
        spreads: "Từ 0.0 pips"
    },
    {
        id: 10,
        name: "FXCM",
        logo: "https://play-lh.googleusercontent.com/1__TvISYeCChIDXT56pQauWwxBON4A-sQfKGf_VjoNlaozkY6pIxTWfOkJKFNN26nQ",
        url: "https://www.fxcm.com",
        description: "Sàn forex toàn cầu với công cụ phân tích nâng cao",
        rating: 4.5,
        features: ["Trading Station", "API kết nối", "Phân tích chuyên sâu"],
        regulation: "FCA, ASIC",
        minDeposit: "$50",
        spreads: "Từ 1.3 pips"
    },
    {
        id: 11,
        name: "InstaForex",
        logo: "hhttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRj011aQZuebIIn-RBdicvPtEUGSjWJeUdMIg&s",
        url: "https://www.instaforex.com",
        description: "Sàn phù hợp cho người mới bắt đầu với nhiều chương trình bonus",
        rating: 4.3,
        features: ["Bonus hấp dẫn", "Tài khoản Cent", "Copy trading"],
        regulation: "BVI FSC",
        minDeposit: "$1",
        spreads: "Từ 0.8 pips"
    },
    {
        id: 12,
        name: "FBS",
        logo: "https://play-lh.googleusercontent.com/ZaOHh28PaobryBtPT2dDvCmFLnc27TZ6lDO2C-HOEWG_Z_XEmzzP42w_YDtKs12G3Y8W",
        url: "https://www.fbs.com",
        description: "Sàn forex thân thiện với người dùng và bonus hấp dẫn",
        rating: 4.6,
        features: ["Leverage cao", "Nhiều loại tài khoản", "Chương trình thưởng"],
        regulation: "IFSC, CySEC",
        minDeposit: "$1",
        spreads: "Từ 0.7 pips"
    },
    {
        id: 13,
        name: "OctaFX",
        logo: "https://vn.investing.com/brokers/wp-content/uploads/sites/24/2023/10/252x160-transparent.png",
        url: "https://www.octafx.com",
        description: "Sàn có giao diện hiện đại, dễ sử dụng",
        rating: 4.4,
        features: ["Ứng dụng di động", "Copy trading", "Spread thấp"],
        regulation: "CySEC",
        minDeposit: "$25",
        spreads: "Từ 0.4 pips"
    },
    {
        id: 14,
        name: "Admirals",
        logo: "https://play-lh.googleusercontent.com/GCscqgIXpQPpirHNNv94LpNIQ9orDntQ8ROIrKyDrVyvMDrnojpQ2t0s15glfn-mXzI",
        url: "https://admiralmarkets.com",
        description: "Sàn cung cấp phân tích chuyên sâu và nhiều sản phẩm đầu tư",
        rating: 4.5,
        features: ["MetaTrader Supreme", "Phân tích hàng ngày", "ETF, Cổ phiếu"],
        regulation: "FCA, ASIC, CySEC",
        minDeposit: "$100",
        spreads: "Từ 0.5 pips"
    },
    {
        id: 15,
        name: "Libertex",
        logo: "https://workable-application-form.s3.amazonaws.com/advanced/production/64e4853cc06746465a6c87a3/c446f25c-1a93-9fbd-aa0a-f7d2e19ab1c6",
        url: "https://www.libertex.com",
        description: "Sàn không spread, giao dịch với hoa hồng",
        rating: 4.3,
        features: ["Không spread", "Ứng dụng đơn giản", "Nhiều công cụ tài chính"],
        regulation: "CySEC",
        minDeposit: "$100",
        spreads: "0 pips + hoa hồng"
    },

]

export default function Home() {
    const { t } = useLanguage()
    const [searchTerm, setSearchTerm] = useState('')
    const [sortBy, setSortBy] = useState<'rating' | 'name'>('rating')

    const filteredBrokers = forexBrokers
        .filter(broker =>
            broker.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            broker.description.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .sort((a, b) => {
            if (sortBy === 'rating') {
                return b.rating - a.rating
            }
            return a.name.localeCompare(b.name)
        })

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
            {/* Header */}
            <header className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center py-6">
                        <div className="flex items-center">
                            <TrendingUp className="h-8 w-8 text-blue-600 mr-3" />
                            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Action Now</h1>
                        </div>
                        <nav className="flex space-x-8">
                            <Link href="/" className="text-blue-600 font-medium">
                                {t('nav.forex')}
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
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Hero Section */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        {t('home.title')}
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                        {t('home.subtitle')}
                    </p>
                </div>

                {/* Search and Filter */}
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 mb-8 border border-gray-200 dark:border-gray-700">
                    <div className="flex flex-col sm:flex-row gap-4">
                        <div className="flex-1">
                            <input
                                type="text"
                                placeholder={t('home.searchPlaceholder')}
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                            />
                        </div>
                        <div className="flex items-center space-x-4">
                            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">{t('common.sort')}:</label>
                            <select
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value as 'rating' | 'name')}
                                className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                            >
                                <option value="rating">{t('home.sortByRating')}</option>
                                <option value="name">{t('home.sortByName')}</option>
                            </select>
                        </div>
                    </div>
                </div>

                {/* Brokers Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
                    {filteredBrokers.map((broker) => (
                        <div key={broker.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden border border-gray-100 dark:border-gray-700 flex flex-col h-full">
                            {/* Broker Header */}
                            <div className="p-6 border-b border-gray-100 dark:border-gray-700 flex-shrink-0">
                                <div className="flex items-center justify-between mb-4">
                                    <img
                                        src={broker.logo}
                                        alt={broker.name}
                                        className="h-12 object-contain"
                                    />
                                    <div className="flex items-center">
                                        <span className="text-yellow-500 mr-1">★</span>
                                        <span className="font-semibold text-gray-800 dark:text-white">{broker.rating}</span>
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">{broker.name}</h3>
                                <p className="text-gray-700 dark:text-gray-300 text-sm mb-4 leading-relaxed">{broker.description}</p>

                                {/* Features */}
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {broker.features.map((feature, index) => (
                                        <span
                                            key={index}
                                            className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded-full"
                                        >
                                            {feature}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Broker Details */}
                            <div className="p-6 flex flex-col h-full">
                                <div className="space-y-3 mb-6 flex-grow">
                                    <div className="flex items-center text-sm min-w-0">
                                        <Shield className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                                        <span className="text-gray-600 dark:text-gray-400 flex-shrink-0">Quy định: </span>
                                        <span className="font-medium ml-1 text-gray-800 dark:text-white truncate">{broker.regulation}</span>
                                    </div>
                                    <div className="flex items-center text-sm min-w-0">
                                        <DollarSign className="h-4 w-4 text-blue-600 mr-2 flex-shrink-0" />
                                        <span className="text-gray-600 dark:text-gray-400 flex-shrink-0">Nạp tối thiểu: </span>
                                        <span className="font-medium ml-1 text-gray-800 dark:text-white truncate">{broker.minDeposit}</span>
                                    </div>
                                    <div className="flex items-center text-sm min-w-0">
                                        <TrendingUp className="h-4 w-4 text-purple-600 mr-2 flex-shrink-0" />
                                        <span className="text-gray-600 dark:text-gray-400 flex-shrink-0">Spread: </span>
                                        <span className="font-medium ml-1 text-gray-800 dark:text-white truncate">{broker.spreads}</span>
                                    </div>
                                </div>

                                {/* Action Buttons */}
                                <div className="flex gap-3 mt-auto">
                                    <Link
                                        href={`/broker/${broker.id}`}
                                        className="flex-1 bg-gray-600 hover:bg-gray-700 text-white font-medium py-3 px-4 rounded-lg flex items-center justify-center transition-colors duration-200"
                                    >
                                        {t('home.viewDetails')}
                                    </Link>
                                    <a
                                        href={broker.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg flex items-center justify-center transition-colors duration-200"
                                    >
                                        <Globe className="h-4 w-4 mr-2" />
                                        {t('home.visit')}
                                        <ExternalLink className="h-4 w-4 ml-2" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Empty State */}
                {filteredBrokers.length === 0 && (
                    <div className="text-center py-12">
                        <TrendingUp className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                        <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Không tìm thấy sàn forex</h3>
                        <p className="text-gray-600 dark:text-gray-400">Thử tìm kiếm với từ khóa khác</p>
                    </div>
                )}
            </main>

            {/* Footer */}
            <footer className="bg-gray-900 text-white py-12 mt-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h3 className="text-xl font-bold mb-4">Action Now</h3>
                        <p className="text-gray-400 mb-6">
                            {t('footer.description')}
                        </p>
                        <div className="flex justify-center space-x-6">
                            <Link href="/" className="text-gray-400 hover:text-white">
                                {t('nav.forex')}
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