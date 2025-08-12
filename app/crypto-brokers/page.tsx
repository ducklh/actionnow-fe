'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ExternalLink, TrendingUp, Shield, DollarSign, Bitcoin, Search, Filter } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'
import { getCryptoBrokers, searchCryptoBrokers } from '../../lib/data'
import ImageWithFallback from '../components/ImageWithFallback'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Pagination from '../components/Pagination'


export default function CryptoBrokersPage() {
    const { t, language } = useLanguage()
    const [searchTerm, setSearchTerm] = useState('')
    const [sortBy, setSortBy] = useState<'rating' | 'name'>('rating')
    const [currentPage, setCurrentPage] = useState(1)
    const itemsPerPage = 12

    const cryptoBrokers = getCryptoBrokers(language)

    const filteredBrokers = searchTerm
        ? searchCryptoBrokers(searchTerm, language)
        : cryptoBrokers
    const sortedBrokers = filteredBrokers.sort((a, b) => {
        if (sortBy === 'rating') {
            return b.rating - a.rating
        }
        return a.name.localeCompare(b.name)
    })

    // Reset to first page when search or sort changes
    useEffect(() => {
        setCurrentPage(1)
    }, [searchTerm, sortBy])

    // Calculate pagination
    const totalPages = Math.ceil(sortedBrokers.length / itemsPerPage)
    const startItem = (currentPage - 1) * itemsPerPage
    const endItem = startItem + itemsPerPage
    const currentBrokers = sortedBrokers.slice(startItem, endItem)

    const handlePageChange = (page: number) => {
        setCurrentPage(page)
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
            <Header activePage="crypto-brokers" theme="orange" />

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
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {currentBrokers.map((broker) => (
                        <div key={broker.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden border border-gray-100 dark:border-gray-700 flex flex-col h-full">
                            {/* Broker Header */}
                            <div className="p-6 border-b border-gray-100 dark:border-gray-700 flex-shrink-0">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="flex items-center min-w-0">
                                        <ImageWithFallback
                                            src={broker.logo}
                                            alt={broker.name}
                                            className="h-8 w-auto object-contain mr-3"
                                        />
                                        <h3 className="text-xl font-bold text-gray-900 dark:text-white truncate">{broker.name}</h3>
                                    </div>
                                    <div className="flex items-center">
                                        <span className="text-yellow-500 mr-1">★</span>
                                        <span className="font-semibold text-gray-800 dark:text-white">{broker.rating}</span>
                                    </div>
                                </div>
                                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                                    {broker.description}
                                </p>
                            </div>

                            {/* Broker Details */}
                            <div className="p-6 flex-1 flex flex-col">
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

                                {/* Action Buttons - Đặt ở cuối card */}
                                <div className="mt-auto pt-4 border-t border-gray-100 dark:border-gray-700">
                                    <div className="flex space-x-3">
                                        <Link
                                            href={broker.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1 bg-orange-600 text-white py-2.5 px-4 rounded-lg hover:bg-orange-700 transition-colors font-medium text-center flex items-center justify-center min-h-[44px]"
                                        >
                                            <ExternalLink className="h-4 w-4 mr-2" />
                                            {t('crypto.visit')}
                                        </Link>
                                        <Link
                                            href={`/crypto-brokers/${broker.id}`}
                                            className="flex-1 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white py-2.5 px-4 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors font-medium text-center flex items-center justify-center min-h-[44px]"
                                        >
                                            {t('crypto.viewDetails')}
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Empty State */}
                {sortedBrokers.length === 0 && (
                    <div className="text-center py-12">
                        <Search className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                        <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">{t('crypto.notFound.title')}</h3>
                        <p className="text-gray-600 dark:text-gray-400">{t('crypto.notFound.subtitle')}</p>
                    </div>
                )}

                {/* Pagination */}
                {sortedBrokers.length > 0 && (
                    <Pagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPageChange={handlePageChange}
                        totalItems={sortedBrokers.length}
                        itemsPerPage={itemsPerPage}
                        startItem={startItem}
                        endItem={endItem}
                        theme="orange"
                    />
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

            <Footer />
        </div>
    )
} 