'use client'

import Link from 'next/link'
import { ArrowLeft, ExternalLink, Shield, DollarSign, TrendingUp, Globe, Star, CheckCircle, AlertTriangle, Info } from 'lucide-react'
import { useLanguage } from '../../contexts/LanguageContext'
import { getForexBrokerById } from '../../../lib/data'
import Header from '../../components/Header'

export default function BrokerDetailPage({ params }: { params: { id: string } }) {
    const { t, language } = useLanguage()
    const broker = getForexBrokerById(parseInt(params.id), language)

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
                                alt={broker.name}
                                className="h-16 w-16 object-contain mr-6"
                            />
                            <div>
                                <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                                    {broker.name}
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
                        {broker.description}
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        {/* Description */}
                        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6 border border-gray-100 dark:border-gray-700">
                            <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-4">{t('broker.description')}</h2>
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{broker.description}</p>
                        </div>

                        {/* Key Features */}
                        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6 border border-gray-100 dark:border-gray-700">
                            <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-4">{t('broker.features')}</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {broker.features.map((feature, index) => (
                                    <div key={index} className="flex items-center">
                                        <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                                        <span className="text-gray-800 dark:text-white">{feature}</span>
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
                                    {broker.pros.map((pro, index) => (
                                        <li key={index} className="flex items-start">
                                            <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                            <span className="text-gray-800 dark:text-white text-sm">{pro}</span>
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
                                    {broker.cons.map((con, index) => (
                                        <li key={index} className="flex items-start">
                                            <AlertTriangle className="h-4 w-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                                            <span className="text-gray-800 dark:text-white text-sm">{con}</span>
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
                                        {broker.platforms.map((platform, index) => (
                                            <div key={index} className="flex items-center">
                                                <CheckCircle className="h-4 w-4 text-blue-500 mr-2" />
                                                <span className="text-gray-800 dark:text-gray-200">{platform}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <h3 className="font-semibold text-gray-800 dark:text-white mb-3">{t('broker.instruments')}</h3>
                                    <div className="space-y-2">
                                        {broker.instruments.map((instrument, index) => (
                                            <div key={index} className="flex items-center">
                                                <CheckCircle className="h-4 w-4 text-blue-500 mr-2" />
                                                <span className="text-gray-800 dark:text-gray-200">{instrument}</span>
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
                                    <p className="font-medium text-gray-800 dark:text-gray-200 truncate">{broker.headquarters}</p>
                                </div>
                                <div className="min-w-0">
                                    <p className="text-sm text-gray-600 dark:text-gray-300">{t('broker.languages')}</p>
                                    <p className="font-medium text-gray-800 dark:text-gray-200 truncate">{broker.languages.join(', ')}</p>
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
                                        {broker.support.map((method, index) => (
                                            <div key={index} className="flex items-center min-w-0">
                                                <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                                                <span className="text-sm text-gray-800 dark:text-gray-200 truncate">{method}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">{t('broker.paymentMethods')}</p>
                                    <div className="space-y-1">
                                        {broker.paymentMethods.map((method, index) => (
                                            <div key={index} className="flex items-center min-w-0">
                                                <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                                                <span className="text-sm text-gray-800 dark:text-gray-200 truncate">{method}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
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
                            Cung cấp thông tin chính xác và cập nhật về thị trường forex
                        </p>
                        <div className="flex justify-center space-x-6">
                            <Link href="/" className="text-gray-400 hover:text-white">
                                Sàn Forex
                            </Link>
                            <Link href="/news" className="text-gray-400 hover:text-white">
                                Tin Tức
                            </Link>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
} 