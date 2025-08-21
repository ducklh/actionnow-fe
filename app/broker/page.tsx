'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Search, Star, TrendingUp, ArrowUpDown, Shield, DollarSign, Globe, ExternalLink } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Pagination from '../components/Pagination'
import ImageWithFallback from '../components/ImageWithFallback'
import { forexBrokersApi } from '../../lib/api'

// Interface cho dữ liệu từ API
interface ApiForexBroker {
    id: string
    name: string
    nameEn: string
    logo: string
    url: string
    description: string
    descriptionEn: string
    rating: number
    regulation: string
    minDeposit: string
    spreads: string
    leverage: string
    founded: string
    headquarters: string
    headquartersEn: string
    forexFeatures: Array<{ id: string, value: string, valueEn: string }>
    forexPlatforms: Array<{ id: string, value: string, valueEn: string }>
    forexInstruments: Array<{ id: string, value: string, valueEn: string }>
    forexPros: Array<{ id: string, value: string, valueEn: string }>
    forexCons: Array<{ id: string, value: string, valueEn: string }>
    forexLanguages: Array<{ id: string, value: string, valueEn: string }>
    forexSupports: Array<{ id: string, value: string, valueEn: string }>
    forexPaymentMethods: Array<{ id: string, value: string, valueEn: string }>
}

export default function Home() {
    const { t, language } = useLanguage()
    const [searchTerm, setSearchTerm] = useState('')
    const [sortBy, setSortBy] = useState<'rating' | 'name'>('rating')
    const [currentPage, setCurrentPage] = useState(1)
    const [forexBrokers, setForexBrokers] = useState<ApiForexBroker[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)
    const itemsPerPage = 12

    // Helper functions để lấy giá trị theo ngôn ngữ
    const getLocalizedValue = (value: string, valueEn: string) => {
        console.log('language', language)
        return language === 'en' ? valueEn : value
    }

    const getLocalizedName = (broker: ApiForexBroker) => {
        return getLocalizedValue(broker.name, broker.nameEn)
    }

    const getLocalizedDescription = (broker: ApiForexBroker) => {
        console.log('broker.description', broker.description)
        console.log('broker.descriptionEn', broker.descriptionEn)
        return getLocalizedValue(broker.description, broker.descriptionEn)
    }

    const getLocalizedHeadquarters = (broker: ApiForexBroker) => {
        return getLocalizedValue(broker.headquarters, broker.headquartersEn)
    }

    // Fetch data from API
    useEffect(() => {
        const fetchForexBrokers = async () => {
            try {
                setLoading(true)
                setError(null)
                const data = await forexBrokersApi.getAll()
                setForexBrokers(data as ApiForexBroker[])
            } catch (err) {
                console.error('Error fetching forex brokers:', err)
                setError(err instanceof Error ? err.message : 'Có lỗi xảy ra khi tải dữ liệu')
            } finally {
                setLoading(false)
            }
        }

        fetchForexBrokers()
    }, [])

    const filteredBrokers = searchTerm
        ? forexBrokers.filter(broker => {
            const localizedName = getLocalizedName(broker)
            const localizedDescription = getLocalizedDescription(broker)
            const localizedFeatures = broker.forexFeatures.map(feature =>
                getLocalizedValue(feature.value, feature.valueEn)
            )

            return localizedName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                localizedDescription.toLowerCase().includes(searchTerm.toLowerCase()) ||
                localizedFeatures.some(feature =>
                    feature.toLowerCase().includes(searchTerm.toLowerCase())
                )
        })
        : forexBrokers

    const sortedBrokers = filteredBrokers.sort((a, b) => {
        if (sortBy === 'rating') {
            return b.rating - a.rating
        }
        const nameA = getLocalizedName(a)
        const nameB = getLocalizedName(b)
        return nameA.localeCompare(nameB)
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

    // Loading state
    if (loading) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
                <Header activePage="forex" />
                <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <div className="text-center py-20">
                        <TrendingUp className="h-12 w-12 text-blue-600 mx-auto mb-4 animate-spin" />
                        <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-2">
                            {t('common.loading') || 'Đang tải dữ liệu...'}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400">
                            Vui lòng chờ trong giây lát
                        </p>
                    </div>
                </main>
                <Footer />
            </div>
        )
    }

    // Error state
    if (error) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
                <Header activePage="forex" />
                <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <div className="text-center py-20">
                        <div className="bg-red-100 dark:bg-red-900 border border-red-200 dark:border-red-800 rounded-lg p-6 max-w-md mx-auto">
                            <h3 className="text-xl font-medium text-red-800 dark:text-red-200 mb-2">
                                Lỗi khi tải dữ liệu
                            </h3>
                            <p className="text-red-600 dark:text-red-300 mb-4">
                                {error}
                            </p>
                            <button
                                onClick={() => window.location.reload()}
                                className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
                            >
                                Thử lại
                            </button>
                        </div>
                    </div>
                </main>
                <Footer />
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
            <Header activePage="forex" />

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
                    {currentBrokers.map((broker) => (
                        <div key={broker.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden border border-gray-100 dark:border-gray-700 flex flex-col h-full">
                            {/* Broker Header */}
                            <div className="p-6 border-b border-gray-100 dark:border-gray-700 flex-shrink-0">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="flex items-center min-w-0">
                                        <ImageWithFallback
                                            src={broker.logo}
                                            alt={getLocalizedName(broker)}
                                            className="h-8 w-auto object-contain mr-3"
                                        />
                                        <h3 className="text-xl font-bold text-gray-800 dark:text-white truncate">{getLocalizedName(broker)}</h3>
                                    </div>
                                    <div className="flex items-center">
                                        <span className="text-yellow-500 mr-1">★</span>
                                        <span className="font-semibold text-gray-800 dark:text-white">{broker.rating}</span>
                                    </div>
                                </div>
                                <p className="text-gray-700 dark:text-gray-300 text-sm mb-4 leading-relaxed">{getLocalizedDescription(broker)}</p>

                                {/* Features */}
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {broker.forexFeatures.map((feature) => (
                                        <span
                                            key={feature.id}
                                            className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded-full"
                                        >
                                            {getLocalizedValue(feature.value, feature.valueEn)}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Broker Details */}
                            <div className="p-6 flex flex-col h-full">
                                <div className="space-y-3 mb-6 flex-grow">
                                    <div className="flex items-center text-sm min-w-0">
                                        <Shield className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                                        <span className="text-gray-600 dark:text-gray-400 flex-shrink-0">{t('home.regulation')}: </span>
                                        <span className="font-medium ml-1 text-gray-800 dark:text-white truncate">{broker.regulation}</span>
                                    </div>
                                    <div className="flex items-center text-sm min-w-0">
                                        <DollarSign className="h-4 w-4 text-blue-600 mr-2 flex-shrink-0" />
                                        <span className="text-gray-600 dark:text-gray-400 flex-shrink-0">{t('home.minDeposit')}: </span>
                                        <span className="font-medium ml-1 text-gray-800 dark:text-white truncate">{broker.minDeposit}</span>
                                    </div>
                                    <div className="flex items-center text-sm min-w-0">
                                        <TrendingUp className="h-4 w-4 text-purple-600 mr-2 flex-shrink-0" />
                                        <span className="text-gray-600 dark:text-gray-400 flex-shrink-0">{t('home.spread')}: </span>
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
                {sortedBrokers.length === 0 && (
                    <div className="text-center py-12">
                        <TrendingUp className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                        <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">{t('home.noBrokersFound')}</h3>
                        <p className="text-gray-600 dark:text-gray-400">{t('home.tryDifferentKeywords')}</p>
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
                        theme="blue"
                    />
                )}
            </main>

            <Footer />
        </div>
    )
}
