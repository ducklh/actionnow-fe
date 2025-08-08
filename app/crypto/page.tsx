'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { TrendingUp, Calendar, User, ArrowRight, Search, Filter, Bitcoin } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'
import { getCryptoNews, searchCryptoNews, NewsArticle } from '../../lib/data'

export default function CryptoPage() {
    const { t, language } = useLanguage()
    const [searchTerm, setSearchTerm] = useState('')
    const [selectedCategory, setSelectedCategory] = useState(t('crypto.categories.all'))

    const categories = [
        t('crypto.categories.all'),
        t('crypto.categories.market'),
        t('crypto.categories.technology'),
        t('crypto.categories.defi'),
        t('crypto.categories.nft'),
        t('crypto.categories.regulation'),
        t('crypto.categories.layer2'),
        t('crypto.categories.memecoin')
    ]

    // Reset selectedCategory when language changes
    useEffect(() => {
        setSelectedCategory(t('crypto.categories.all'))
    }, [language, t])

    // Function to map category names to translation keys
    const getCategoryTranslation = (categoryName: string) => {
        const categoryMap: { [key: string]: string } = {
            'Tin tức thị trường': t('crypto.categories.market'),
            'Market News': t('crypto.categories.market'),
            'Phân tích kỹ thuật': t('crypto.categories.technology'),
            'Technical Analysis': t('crypto.categories.technology'),
            'DeFi': t('crypto.categories.defi'),
            'NFT': t('crypto.categories.nft'),
            'Regulation': t('crypto.categories.regulation'),
            'Layer 2': t('crypto.categories.layer2'),
            'Meme Coin': t('crypto.categories.memecoin')
        }
        return categoryMap[categoryName] || categoryName
    }

    const cryptoArticles = getCryptoNews(language)

    const filteredArticles = cryptoArticles.filter(article => {
        const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            article.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
            article.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))

        const matchesCategory = selectedCategory === t('crypto.categories.all') || getCategoryTranslation(article.category) === selectedCategory

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
                        {t('crypto.news.title')}
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                        {t('crypto.news.subtitle')}
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
                                    placeholder={t('crypto.news.searchPlaceholder')}
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                                />
                            </div>
                        </div>
                        <div className="flex items-center space-x-4">
                            <Filter className="h-5 w-5 text-gray-400" />
                            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">{t('common.category')}:</label>
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
                                            {new Date(article.publishedAt).toLocaleDateString('vi-VN')}
                                        </div>
                                    </div>
                                    <span className="bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 px-2 py-1 rounded-full text-xs">
                                        {article.readTime} phút
                                    </span>
                                </div>

                                {/* Category */}
                                <span className="inline-block bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-3 py-1 rounded-full text-sm font-medium mb-3">
                                    {getCategoryTranslation(article.category)}
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
                                    {t('common.readMore')}
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
                        <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">{t('crypto.news.noNewsFound')}</h3>
                        <p className="text-gray-600 dark:text-gray-400">{t('crypto.news.tryDifferentKeywords')}</p>
                    </div>
                )}

                {/* Newsletter Signup */}
                <div className="bg-gradient-to-r from-orange-600 to-purple-600 rounded-lg p-8 mt-12 text-white">
                    <div className="text-center">
                        <h3 className="text-2xl font-bold mb-4">{t('crypto.newsletter.news.title')}</h3>
                        <p className="text-orange-100 mb-6">
                            {t('crypto.newsletter.news.subtitle')}
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
                            {t('footer.description')}
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