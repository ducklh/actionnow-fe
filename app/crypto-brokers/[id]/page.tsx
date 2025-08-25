'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { ArrowLeft, ExternalLink, TrendingUp, Shield, DollarSign, Bitcoin, Star, CheckCircle, AlertTriangle, Users, Globe, Loader2 } from 'lucide-react'
import { useLanguage } from '../../contexts/LanguageContext'
import { cryptoBrokersApi } from '../../../lib/api'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

// Interface cho dữ liệu từ API
interface ApiCryptoBroker {
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
    tradingFees: string
    founded: string
    headquarters: string
    headquartersEn: string
    tradingVolume: string
    mobileApp: boolean
    apiSupport: boolean
    detailedDescription: string
    detailedDescriptionEn: string
    cryptoFeatures: Array<{ id: string, value: string, valueEn: string }>
    supportedCoins: Array<{ id: string, value: string, valueEn: string }>
    cryptoPros: Array<{ id: string, value: string, valueEn: string }>
    cryptoCons: Array<{ id: string, value: string, valueEn: string }>
    securityFeatures: Array<{ id: string, value: string, valueEn: string }>
    paymentMethods: Array<{ id: string, value: string, valueEn: string }>
    customerSupports: Array<{ id: string, value: string, valueEn: string }>
}

export default function CryptoBrokerDetailPage() {
    const { t, language } = useLanguage()
    const params = useParams()
    const [broker, setBroker] = useState<ApiCryptoBroker | null>(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    // Helper functions để lấy giá trị theo ngôn ngữ
    const getLocalizedValue = (value: string, valueEn: string) => {
        return language === 'en' ? valueEn : value
    }

    const getLocalizedName = (broker: ApiCryptoBroker) => {
        return getLocalizedValue(broker.name, broker.nameEn)
    }

    const getLocalizedDescription = (broker: ApiCryptoBroker) => {
        return getLocalizedValue(broker.description, broker.descriptionEn)
    }

    const getLocalizedDetailedDescription = (broker: ApiCryptoBroker) => {
        return getLocalizedValue(broker.detailedDescription, broker.detailedDescriptionEn)
    }

    const getLocalizedHeadquarters = (broker: ApiCryptoBroker) => {
        return getLocalizedValue(broker.headquarters, broker.headquartersEn)
    }

    useEffect(() => {
        const fetchBroker = async () => {
            try {
                setLoading(true)
                setError(null)
                const id = params.id as string
                const data = await cryptoBrokersApi.getById(id) as ApiCryptoBroker
                setBroker(data)
            } catch (err) {
                console.error('Error fetching crypto broker:', err)
                setError(err instanceof Error ? err.message : 'Có lỗi xảy ra khi tải dữ liệu')
            } finally {
                setLoading(false)
            }
        }

        if (params.id) {
            fetchBroker()
        }
    }, [params.id])

    // Loading state
    if (loading) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
                <Header activePage="crypto-brokers" theme="orange" />
                <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <div className="text-center py-20">
                        <Loader2 className="h-12 w-12 text-orange-600 mx-auto mb-4 animate-spin" />
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
            <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
                <Header activePage="crypto-brokers" theme="orange" />
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

    if (!broker) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{t('crypto.notFound.broker')}</h1>
                    <Link href="/crypto-brokers" className="text-orange-600 hover:text-orange-700">
                        {t('crypto.backToList')}
                    </Link>
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
            <Header activePage="crypto-brokers" theme="orange" />

            {/* Main Content */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Back Button */}
                <Link
                    href="/crypto-brokers"
                    className="inline-flex items-center text-orange-600 hover:text-orange-700 font-medium mb-8"
                >
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    {t('crypto.backToList')}
                </Link>

                {/* Broker Header */}
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8">
                    <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-6">
                        <div className="flex items-center mb-4 lg:mb-0">
                            <img
                                src={broker.logo}
                                alt={getLocalizedName(broker)}
                                className="h-16 w-16 object-contain mr-6"
                            />
                            <div>
                                <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                                    {getLocalizedName(broker)}
                                </h1>
                                <div className="flex items-center">
                                    <div className="flex items-center mr-4">
                                        {[...Array(5)].map((_, i) => (
                                            <Star
                                                key={i}
                                                className={`h-5 w-5 ${i < Math.floor(broker.rating)
                                                    ? 'text-yellow-400 fill-current'
                                                    : 'text-gray-300'
                                                    }`}
                                            />
                                        ))}
                                    </div>
                                    <span className="text-lg font-semibold text-gray-900 dark:text-white">
                                        {broker.rating}/5.0
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="flex space-x-4">
                            <a
                                href={broker.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg transition-colors font-medium flex items-center"
                            >
                                <Globe className="h-4 w-4 mr-2" />
                                {t('crypto.visit')}
                                <ExternalLink className="h-4 w-4 ml-2" />
                            </a>
                        </div>
                    </div>

                    <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
                        {getLocalizedDescription(broker)}
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        {/* Detailed Description */}
                        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6 border border-gray-100 dark:border-gray-700">
                            <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-4">{t('crypto.detailedInfo')}</h2>
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{getLocalizedDetailedDescription(broker)}</p>
                        </div>

                        {/* Key Features */}
                        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6 border border-gray-100 dark:border-gray-700">
                            <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-4">{t('crypto.features')}</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {broker.cryptoFeatures.map((feature) => (
                                    <div key={feature.id} className="flex items-center">
                                        <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                                        <span className="text-gray-800 dark:text-white">{getLocalizedValue(feature.value, feature.valueEn)}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Pros and Cons */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-gray-100 dark:border-gray-700">
                                <h3 className="text-lg font-bold text-green-600 mb-4 flex items-center">
                                    <CheckCircle className="h-5 w-5 mr-2" />
                                    {t('crypto.pros')}
                                </h3>
                                <ul className="space-y-2">
                                    {broker.cryptoPros.map((pro) => (
                                        <li key={pro.id} className="flex items-start">
                                            <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                            <span className="text-gray-800 dark:text-white text-sm">{getLocalizedValue(pro.value, pro.valueEn)}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-gray-100 dark:border-gray-700">
                                <h3 className="text-lg font-bold text-red-600 mb-4 flex items-center">
                                    <AlertTriangle className="h-5 w-5 mr-2" />
                                    {t('crypto.cons')}
                                </h3>
                                <ul className="space-y-2">
                                    {broker.cryptoCons.map((con) => (
                                        <li key={con.id} className="flex items-start">
                                            <AlertTriangle className="h-4 w-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                                            <span className="text-gray-800 dark:text-gray-200 text-sm">{getLocalizedValue(con.value, con.valueEn)}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Trading Information */}
                        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-gray-100 dark:border-gray-700">
                            <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-4">{t('crypto.tradingInfo')}</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <h3 className="font-semibold text-gray-800 dark:text-white mb-3">{t('crypto.supportedCoins')}</h3>
                                    <div className="space-y-2">
                                        {broker.supportedCoins.map((coin) => (
                                            <div key={coin.id} className="flex items-center">
                                                <CheckCircle className="h-4 w-4 text-blue-500 mr-2" />
                                                <span className="text-gray-800 dark:text-gray-200">{getLocalizedValue(coin.value, coin.valueEn)}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <h3 className="font-semibold text-gray-800 dark:text-white mb-3">{t('crypto.security')}</h3>
                                    <div className="space-y-2">
                                        {broker.securityFeatures.map((security) => (
                                            <div key={security.id} className="flex items-center">
                                                <Shield className="h-4 w-4 text-green-500 mr-2" />
                                                <span className="text-gray-800 dark:text-gray-200">{getLocalizedValue(security.value, security.valueEn)}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-6">
                        {/* Quick Info */}
                        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-gray-100 dark:border-gray-700">
                            <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-4">{t('crypto.quickInfo')}</h3>
                            <div className="space-y-4">
                                <div className="flex items-center min-w-0">
                                    <Shield className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                                    <div className="min-w-0 flex-1">
                                        <p className="text-sm text-gray-600 dark:text-gray-300">{t('crypto.regulation')}</p>
                                        <p className="font-medium text-gray-800 dark:text-gray-200 truncate">{broker.regulation}</p>
                                    </div>
                                </div>
                                <div className="flex items-center min-w-0">
                                    <DollarSign className="h-5 w-5 text-blue-600 mr-3 flex-shrink-0" />
                                    <div className="min-w-0 flex-1">
                                        <p className="text-sm text-gray-600 dark:text-gray-300">{t('crypto.minDeposit')}</p>
                                        <p className="font-medium text-gray-800 dark:text-gray-200 truncate">{broker.minDeposit}</p>
                                    </div>
                                </div>
                                <div className="flex items-center min-w-0">
                                    <TrendingUp className="h-5 w-5 text-purple-600 mr-3 flex-shrink-0" />
                                    <div className="min-w-0 flex-1">
                                        <p className="text-sm text-gray-600 dark:text-gray-300">{t('crypto.tradingFees')}</p>
                                        <p className="font-medium text-gray-800 dark:text-gray-200 truncate">{broker.tradingFees}</p>
                                    </div>
                                </div>
                                <div className="flex items-center min-w-0">
                                    <Users className="h-5 w-5 text-orange-600 mr-3 flex-shrink-0" />
                                    <div className="min-w-0 flex-1">
                                        <p className="text-sm text-gray-600 dark:text-gray-300">{t('crypto.tradingVolume')}</p>
                                        <p className="font-medium text-gray-800 dark:text-gray-200 truncate">{broker.tradingVolume}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Company Info */}
                        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-gray-100 dark:border-gray-700">
                            <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-4">{t('crypto.companyInfo')}</h3>
                            <div className="space-y-3">
                                <div className="min-w-0">
                                    <p className="text-sm text-gray-600 dark:text-gray-300">{t('crypto.founded')}</p>
                                    <p className="font-medium text-gray-800 dark:text-gray-200 truncate">{broker.founded}</p>
                                </div>
                                <div className="min-w-0">
                                    <p className="text-sm text-gray-600 dark:text-gray-300">{t('crypto.headquarters')}</p>
                                    <p className="font-medium text-gray-800 dark:text-gray-200 truncate">{getLocalizedHeadquarters(broker)}</p>
                                </div>
                                <div className="min-w-0">
                                    <p className="text-sm text-gray-600 dark:text-gray-300">{t('crypto.mobileApp')}</p>
                                    <p className="font-medium text-gray-800 dark:text-gray-200 truncate">
                                        {broker.mobileApp ? t('crypto.yes') : t('crypto.no')}
                                    </p>
                                </div>
                                <div className="min-w-0">
                                    <p className="text-sm text-gray-600 dark:text-gray-300">{t('crypto.apiSupport')}</p>
                                    <p className="font-medium text-gray-800 dark:text-gray-200 truncate">
                                        {broker.apiSupport ? t('crypto.yes') : t('crypto.no')}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Support & Payment */}
                        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-gray-100 dark:border-gray-700">
                            <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-4">{t('crypto.customerSupport')} & {t('crypto.paymentMethods')}</h3>
                            <div className="space-y-4">
                                <div>
                                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">{t('crypto.customerSupport')}</p>
                                    <div className="space-y-1">
                                        {broker.customerSupports.map((support) => (
                                            <div key={support.id} className="flex items-center min-w-0">
                                                <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                                                <span className="text-sm text-gray-800 dark:text-gray-200 truncate">{getLocalizedValue(support.value, support.valueEn)}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">{t('crypto.paymentMethods')}</p>
                                    <div className="space-y-1">
                                        {broker.paymentMethods.map((method) => (
                                            <div key={method.id} className="flex items-center min-w-0">
                                                <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                                                <span className="text-sm text-gray-800 dark:text-gray-200 truncate">{getLocalizedValue(method.value, method.valueEn)}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    )
} 