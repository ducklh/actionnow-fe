'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ArrowLeft, ExternalLink, Shield, DollarSign, TrendingUp, Globe, Star, CheckCircle, AlertTriangle, Info, Loader2 } from 'lucide-react'
import { useLanguage } from '../../contexts/LanguageContext'
import { forexBrokersApi } from '../../../lib/api'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

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

export default function BrokerDetailPage({ params }: { params: { id: string } }) {
    const { t, language } = useLanguage()
    const [broker, setBroker] = useState<ApiForexBroker | null>(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    // Helper functions để lấy giá trị theo ngôn ngữ
    const getLocalizedValue = (value: string, valueEn: string) => {
        return language === 'en' ? valueEn : value
    }

    const getLocalizedName = (broker: ApiForexBroker) => {
        return getLocalizedValue(broker.name, broker.nameEn)
    }

    const getLocalizedDescription = (broker: ApiForexBroker) => {
        return getLocalizedValue(broker.description, broker.descriptionEn)
    }

    const getLocalizedHeadquarters = (broker: ApiForexBroker) => {
        return getLocalizedValue(broker.headquarters, broker.headquartersEn)
    }

    useEffect(() => {
        const fetchBroker = async () => {
            try {
                setLoading(true)
                setError(null)
                const data = await forexBrokersApi.getById(params.id) as ApiForexBroker
                setBroker(data)
            } catch (err) {
                console.error('Error fetching forex broker:', err)
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
            <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
                <Header activePage="forex" />
                <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <div className="text-center py-20">
                        <Loader2 className="h-12 w-12 text-blue-600 mx-auto mb-4 animate-spin" />
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

    if (!broker) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{t('home.noBrokersFound')}</h1>
                    <Link href="/" className="text-blue-600 hover:text-blue-700">
                        {t('common.back')}
                    </Link>
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
            <Header activePage="forex" />

            {/* Main Content */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Back Button */}
                <Link
                    href="/"
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium mb-8"
                >
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    {t('common.back')}
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
                                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors font-medium flex items-center"
                            >
                                <Globe className="h-4 w-4 mr-2" />
                                {t('home.visit')}
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
                        {/* Description */}
                        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6 border border-gray-100 dark:border-gray-700">
                            <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-4">{t('broker.description')}</h2>
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{getLocalizedDescription(broker)}</p>
                        </div>

                        {/* Key Features */}
                        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6 border border-gray-100 dark:border-gray-700">
                            <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-4">{t('broker.features')}</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {broker.forexFeatures.map((feature) => (
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
                                    {t('broker.pros')}
                                </h3>
                                <ul className="space-y-2">
                                    {broker.forexPros.map((pro) => (
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
                                    {t('broker.cons')}
                                </h3>
                                <ul className="space-y-2">
                                    {broker.forexCons.map((con) => (
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
                            <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-4">{t('broker.tradingInfo')}</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <h3 className="font-semibold text-gray-800 dark:text-white mb-3">{t('broker.platforms')}</h3>
                                    <div className="space-y-2">
                                        {broker.forexPlatforms.map((platform) => (
                                            <div key={platform.id} className="flex items-center">
                                                <CheckCircle className="h-4 w-4 text-blue-500 mr-2" />
                                                <span className="text-gray-800 dark:text-gray-200">{getLocalizedValue(platform.value, platform.valueEn)}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <h3 className="font-semibold text-gray-800 dark:text-white mb-3">{t('broker.instruments')}</h3>
                                    <div className="space-y-2">
                                        {broker.forexInstruments.map((instrument) => (
                                            <div key={instrument.id} className="flex items-center">
                                                <CheckCircle className="h-4 w-4 text-blue-500 mr-2" />
                                                <span className="text-gray-800 dark:text-gray-200">{getLocalizedValue(instrument.value, instrument.valueEn)}</span>
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
                            <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-4">{t('broker.quickInfo')}</h3>
                            <div className="space-y-4">
                                <div className="flex items-center min-w-0">
                                    <Shield className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                                    <div className="min-w-0 flex-1">
                                        <p className="text-sm text-gray-600 dark:text-gray-300">{t('home.regulation')}</p>
                                        <p className="font-medium text-gray-800 dark:text-gray-200 truncate">{broker.regulation}</p>
                                    </div>
                                </div>
                                <div className="flex items-center min-w-0">
                                    <DollarSign className="h-5 w-5 text-blue-600 mr-3 flex-shrink-0" />
                                    <div className="min-w-0 flex-1">
                                        <p className="text-sm text-gray-600 dark:text-gray-300">{t('home.minDeposit')}</p>
                                        <p className="font-medium text-gray-800 dark:text-gray-200 truncate">{broker.minDeposit}</p>
                                    </div>
                                </div>
                                <div className="flex items-center min-w-0">
                                    <TrendingUp className="h-5 w-5 text-purple-600 mr-3 flex-shrink-0" />
                                    <div className="min-w-0 flex-1">
                                        <p className="text-sm text-gray-600 dark:text-gray-300">{t('home.spread')}</p>
                                        <p className="font-medium text-gray-800 dark:text-gray-200 truncate">{broker.spreads}</p>
                                    </div>
                                </div>
                                <div className="flex items-center min-w-0">
                                    <Info className="h-5 w-5 text-orange-600 mr-3 flex-shrink-0" />
                                    <div className="min-w-0 flex-1">
                                        <p className="text-sm text-gray-600 dark:text-gray-300">{t('broker.leverage')}</p>
                                        <p className="font-medium text-gray-800 dark:text-gray-200 truncate">{broker.leverage}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Company Info */}
                        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-gray-100 dark:border-gray-700">
                            <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-4">{t('broker.companyInfo')}</h3>
                            <div className="space-y-3">
                                <div className="min-w-0">
                                    <p className="text-sm text-gray-600 dark:text-gray-300">{t('broker.founded')}</p>
                                    <p className="font-medium text-gray-800 dark:text-gray-200 truncate">{broker.founded}</p>
                                </div>
                                <div className="min-w-0">
                                    <p className="text-sm text-gray-600 dark:text-gray-300">{t('broker.headquarters')}</p>
                                    <p className="font-medium text-gray-800 dark:text-gray-200 truncate">{getLocalizedHeadquarters(broker)}</p>
                                </div>
                                <div className="min-w-0">
                                    <p className="text-sm text-gray-600 dark:text-gray-300">{t('broker.languages')}</p>
                                    <p className="font-medium text-gray-800 dark:text-gray-200 truncate">
                                        {broker.forexLanguages.map(lang => getLocalizedValue(lang.value, lang.valueEn)).join(', ')}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Support & Payment */}
                        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-gray-100 dark:border-gray-700">
                            <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-4">{t('broker.support')} & {t('broker.paymentMethods')}</h3>
                            <div className="space-y-4">
                                <div>
                                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">{t('broker.support')}</p>
                                    <div className="space-y-1">
                                        {broker.forexSupports.map((support) => (
                                            <div key={support.id} className="flex items-center min-w-0">
                                                <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                                                <span className="text-sm text-gray-800 dark:text-gray-200 truncate">{getLocalizedValue(support.value, support.valueEn)}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">{t('broker.paymentMethods')}</p>
                                    <div className="space-y-1">
                                        {broker.forexPaymentMethods.map((method) => (
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