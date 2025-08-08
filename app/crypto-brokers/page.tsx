'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ExternalLink, TrendingUp, Shield, DollarSign, Bitcoin, Search, Filter } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'

interface CryptoBroker {
    id: number
    name: string
    logo: string
    url: string
    description: string
    rating: number
    features: string[]
    regulation: string
    minDeposit: string
    tradingFees: string
    supportedCoins: string[]
}

const cryptoBrokers: CryptoBroker[] = [
    {
        id: 1,
        name: "Binance",
        logo: "https://cryptologos.cc/logos/binance-coin-bnb-logo.png",
        url: "https://www.binance.com",
        description: "Sàn giao dịch cryptocurrency lớn nhất thế giới với hơn 350+ coin",
        rating: 4.9,
        features: ["Giao dịch spot", "Futures", "Staking", "Launchpad"],
        regulation: "Đa quốc gia",
        minDeposit: "$10",
        tradingFees: "0.1%",
        supportedCoins: ["Bitcoin", "Ethereum", "BNB", "Cardano", "Solana", "XRP"]
    },
    {
        id: 2,
        name: "Coinbase",
        logo: "https://cryptologos.cc/logos/coinbase-coin-logo.png",
        url: "https://www.coinbase.com",
        description: "Sàn giao dịch cryptocurrency uy tín và dễ sử dụng cho người mới",
        rating: 4.7,
        features: ["Giao dịch đơn giản", "Ví tích hợp", "Earn rewards", "Pro trading"],
        regulation: "SEC, FINRA",
        minDeposit: "$2",
        tradingFees: "0.5% - 3.99%",
        supportedCoins: ["Bitcoin", "Ethereum", "Litecoin", "Bitcoin Cash", "Ethereum Classic"]
    },
    {
        id: 3,
        name: "Kraken",
        logo: "https://cryptologos.cc/logos/kraken-logo.png",
        url: "https://www.kraken.com",
        description: "Sàn giao dịch cryptocurrency lâu đời với bảo mật cao",
        rating: 4.8,
        features: ["Bảo mật cao", "Staking", "Margin trading", "Futures"],
        regulation: "FCA, FinCEN",
        minDeposit: "$10",
        tradingFees: "0.16% - 0.26%",
        supportedCoins: ["Bitcoin", "Ethereum", "Litecoin", "Ripple", "Cardano", "Polkadot"]
    },
    {
        id: 4,
        name: "KuCoin",
        logo: "https://cryptologos.cc/logos/kucoin-token-kcs-logo.png",
        url: "https://www.kucoin.com",
        description: "Sàn giao dịch cryptocurrency với nhiều altcoin và token mới",
        rating: 4.6,
        features: ["Altcoin trading", "KuCoin Earn", "Trading bots", "P2P trading"],
        regulation: "Seychelles",
        minDeposit: "$1",
        tradingFees: "0.1%",
        supportedCoins: ["Bitcoin", "Ethereum", "KuCoin Token", "Tether", "Chainlink", "Uniswap"]
    },
    {
        id: 5,
        name: "OKX",
        logo: "https://cryptologos.cc/logos/okb-okb-logo.png",
        url: "https://www.okx.com",
        description: "Sàn giao dịch cryptocurrency toàn cầu với nhiều sản phẩm tài chính",
        rating: 4.5,
        features: ["Spot trading", "Futures", "Options", "DeFi", "NFT"],
        regulation: "Đa quốc gia",
        minDeposit: "$10",
        tradingFees: "0.1%",
        supportedCoins: ["Bitcoin", "Ethereum", "OKB", "Tether", "Cardano", "Solana"]
    },
    {
        id: 6,
        name: "Bybit",
        logo: "https://cryptologos.cc/logos/bybit-logo.png",
        url: "https://www.bybit.com",
        description: "Sàn giao dịch cryptocurrency chuyên về futures và derivatives",
        rating: 4.4,
        features: ["Futures trading", "Options", "Copy trading", "Staking"],
        regulation: "Đa quốc gia",
        minDeposit: "$1",
        tradingFees: "0.1%",
        supportedCoins: ["Bitcoin", "Ethereum", "Tether", "Cardano", "Solana", "Polygon"]
    },
    {
        id: 7,
        name: "Gate.io",
        logo: "https://cryptologos.cc/logos/gate-logo.png",
        url: "https://www.gate.io",
        description: "Sàn giao dịch cryptocurrency với hơn 1400+ coin và token",
        rating: 4.3,
        features: ["Đa dạng coin", "HODL & Earn", "Startup", "Liquidity mining"],
        regulation: "Cayman Islands",
        minDeposit: "$1",
        tradingFees: "0.2%",
        supportedCoins: ["Bitcoin", "Ethereum", "Gate Token", "Tether", "Chainlink", "Uniswap"]
    },
    {
        id: 8,
        name: "Huobi",
        logo: "https://cryptologos.cc/logos/huobi-token-ht-logo.png",
        url: "https://www.huobi.com",
        description: "Sàn giao dịch cryptocurrency lớn với nhiều sản phẩm tài chính",
        rating: 4.2,
        features: ["Spot trading", "Futures", "Options", "Staking", "Liquidity mining"],
        regulation: "Đa quốc gia",
        minDeposit: "$10",
        tradingFees: "0.2%",
        supportedCoins: ["Bitcoin", "Ethereum", "Huobi Token", "Tether", "Cardano", "Polkadot"]
    }
]

export default function CryptoBrokersPage() {
    const { t } = useLanguage()
    const [searchTerm, setSearchTerm] = useState('')
    const [sortBy, setSortBy] = useState<'rating' | 'name'>('rating')

    const filteredBrokers = cryptoBrokers
        .filter(broker =>
            broker.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            broker.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
            broker.supportedCoins.some(coin => coin.toLowerCase().includes(searchTerm.toLowerCase()))
        )
        .sort((a, b) => {
            if (sortBy === 'rating') {
                return b.rating - a.rating
            }
            return a.name.localeCompare(b.name)
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
                            <Link href="/crypto-brokers" className="text-orange-600 font-medium">
                                Crypto Brokers
                            </Link>
                            <Link href="/crypto" className="text-gray-500 hover:text-orange-600 font-medium dark:text-gray-400 dark:hover:text-orange-400">
                                Crypto News
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
                        {t('crypto.title')}
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                        {t('crypto.subtitle')}
                    </p>
                </div>

                {/* Search and Filter */}
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 mb-8 border border-gray-200 dark:border-gray-700">
                    <div className="flex flex-col sm:flex-row gap-4">
                        <div className="flex-1">
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                                <input
                                    type="text"
                                    placeholder={t('crypto.searchPlaceholder')}
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                                />
                            </div>
                        </div>
                        <div className="flex items-center space-x-4">
                            <Filter className="h-5 w-5 text-gray-400" />
                            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">{t('common.sort')}:</label>
                            <select
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value as 'rating' | 'name')}
                                className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                            >
                                <option value="rating">{t('crypto.sortByRating')}</option>
                                <option value="name">{t('crypto.sortByName')}</option>
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
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                                    {broker.name}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                                    {broker.description}
                                </p>
                            </div>

                            {/* Broker Details */}
                            <div className="p-6 flex-grow">
                                {/* Features */}
                                <div className="mb-6">
                                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                                        <TrendingUp className="h-4 w-4 mr-2 text-orange-600" />
                                        {t('crypto.features')}
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                        {broker.features.map((feature, index) => (
                                            <span
                                                key={index}
                                                className="px-2 py-1 bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 text-xs rounded-full"
                                            >
                                                {feature}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Trading Info */}
                                <div className="space-y-3 mb-6">
                                    <div className="flex justify-between items-center">
                                        <span className="text-gray-600 dark:text-gray-400 text-sm">{t('crypto.tradingFees')}:</span>
                                        <span className="font-semibold text-gray-900 dark:text-white">{broker.tradingFees}</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-gray-600 dark:text-gray-400 text-sm">{t('crypto.minDeposit')}:</span>
                                        <span className="font-semibold text-gray-900 dark:text-white">{broker.minDeposit}</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-gray-600 dark:text-gray-400 text-sm">{t('crypto.regulation')}:</span>
                                        <span className="font-semibold text-gray-900 dark:text-white">{broker.regulation}</span>
                                    </div>
                                </div>

                                {/* Supported Coins */}
                                <div className="mb-6">
                                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                                        <DollarSign className="h-4 w-4 mr-2 text-green-600" />
                                        {t('crypto.supportedCoins')}
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                        {broker.supportedCoins.slice(0, 4).map((coin, index) => (
                                            <span
                                                key={index}
                                                className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-xs rounded-full"
                                            >
                                                {coin}
                                            </span>
                                        ))}
                                        {broker.supportedCoins.length > 4 && (
                                            <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 text-xs rounded-full">
                                                +{broker.supportedCoins.length - 4} {t('crypto.others')}
                                            </span>
                                        )}
                                    </div>
                                </div>

                                {/* Action Buttons */}
                                <div className="flex space-x-3">
                                    <Link
                                        href={broker.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 bg-orange-600 text-white py-2 px-4 rounded-lg hover:bg-orange-700 transition-colors font-medium text-center flex items-center justify-center"
                                    >
                                        <ExternalLink className="h-4 w-4 mr-2" />
                                        {t('crypto.visit')}
                                    </Link>
                                    <Link
                                        href={`/crypto-brokers/${broker.id}`}
                                        className="flex-1 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white py-2 px-4 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors font-medium text-center"
                                    >
                                        {t('crypto.viewDetails')}
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Empty State */}
                {filteredBrokers.length === 0 && (
                    <div className="text-center py-12">
                        <Search className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                        <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">{t('crypto.notFound.title')}</h3>
                        <p className="text-gray-600 dark:text-gray-400">{t('crypto.notFound.subtitle')}</p>
                    </div>
                )}

                {/* Newsletter Signup */}
                <div className="bg-gradient-to-r from-orange-600 to-purple-600 rounded-lg p-8 mt-12 text-white">
                    <div className="text-center">
                        <h3 className="text-2xl font-bold mb-4">{t('crypto.newsletter.title')}</h3>
                        <p className="text-orange-100 mb-6">
                            {t('crypto.newsletter.subtitle')}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                            <input
                                type="email"
                                placeholder={t('crypto.newsletter.placeholder')}
                                className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-white focus:outline-none bg-white"
                            />
                            <button className="bg-white text-orange-600 font-medium px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors">
                                {t('crypto.newsletter.button')}
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
                            <Link href="/crypto-brokers" className="text-gray-400 hover:text-white">
                                Crypto Brokers
                            </Link>
                            <Link href="/crypto" className="text-gray-400 hover:text-white">
                                Crypto News
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