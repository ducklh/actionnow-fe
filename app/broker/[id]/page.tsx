'use client'

import Link from 'next/link'
import { ArrowLeft, ExternalLink, Shield, DollarSign, TrendingUp, Globe, Star, CheckCircle, AlertTriangle, Info } from 'lucide-react'
import { useLanguage } from '../../contexts/LanguageContext'
import { getForexBrokerById } from '../../../lib/data'
export default function BrokerDetailPage({ params }: { params: { id: string } }) {
    const { t, language } = useLanguage()
    const broker = getForexBrokerById(parseInt(params.id), language)

    if (!broker) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Không tìm thấy sàn forex</h1>
                    <Link href="/" className="text-blue-600 hover:text-blue-700">
                        {t('common.back')}
                    </Link>
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
            {/* Header */}
            <header className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center py-6">
                        <div className="flex items-center">
                            <Link href="/" className="flex items-center text-gray-600 hover:text-blue-600 mr-6 dark:text-gray-400 dark:hover:text-blue-400">
                                <ArrowLeft className="h-5 w-5 mr-2" />
                                {t('common.back')}
                            </Link>
                            <img src={broker.logo} alt={broker.name} className="h-8 object-contain mr-3" />
                            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">{broker.name}</h1>
                        </div>
                        <div className="flex items-center space-x-4">
                            <div className="flex items-center">
                                <Star className="h-5 w-5 text-yellow-500 mr-1" />
                                <span className="font-semibold text-gray-900 dark:text-white">{broker.rating}/5.0</span>
                            </div>
                            <a
                                href={broker.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg flex items-center transition-colors"
                            >
                                <Globe className="h-4 w-4 mr-2" />
                                {t('home.visit')}
                                <ExternalLink className="h-4 w-4 ml-2" />
                            </a>
                        </div>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
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
                        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
                            <h2 className="text-xl font-bold text-gray-800 mb-4">Thông tin giao dịch</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <h3 className="font-semibold text-gray-800 mb-3">Nền tảng giao dịch</h3>
                                    <div className="space-y-2">
                                        {broker.platforms.map((platform, index) => (
                                            <div key={index} className="flex items-center">
                                                <CheckCircle className="h-4 w-4 text-blue-500 mr-2" />
                                                <span className="text-gray-800">{platform}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <h3 className="font-semibold text-gray-800 mb-3">Sản phẩm giao dịch</h3>
                                    <div className="space-y-2">
                                        {broker.instruments.map((instrument, index) => (
                                            <div key={index} className="flex items-center">
                                                <CheckCircle className="h-4 w-4 text-blue-500 mr-2" />
                                                <span className="text-gray-800">{instrument}</span>
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
                        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
                            <h3 className="text-lg font-bold text-gray-800 mb-4">Thông tin nhanh</h3>
                            <div className="space-y-4">
                                <div className="flex items-center min-w-0">
                                    <Shield className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                                    <div className="min-w-0 flex-1">
                                        <p className="text-sm text-gray-600">Quy định</p>
                                        <p className="font-medium text-gray-800 truncate">{broker.regulation}</p>
                                    </div>
                                </div>
                                <div className="flex items-center min-w-0">
                                    <DollarSign className="h-5 w-5 text-blue-600 mr-3 flex-shrink-0" />
                                    <div className="min-w-0 flex-1">
                                        <p className="text-sm text-gray-600">Nạp tối thiểu</p>
                                        <p className="font-medium text-gray-800 truncate">{broker.minDeposit}</p>
                                    </div>
                                </div>
                                <div className="flex items-center min-w-0">
                                    <TrendingUp className="h-5 w-5 text-purple-600 mr-3 flex-shrink-0" />
                                    <div className="min-w-0 flex-1">
                                        <p className="text-sm text-gray-600">Spread</p>
                                        <p className="font-medium text-gray-800 truncate">{broker.spreads}</p>
                                    </div>
                                </div>
                                <div className="flex items-center min-w-0">
                                    <Info className="h-5 w-5 text-orange-600 mr-3 flex-shrink-0" />
                                    <div className="min-w-0 flex-1">
                                        <p className="text-sm text-gray-600">Leverage</p>
                                        <p className="font-medium text-gray-800 truncate">{broker.leverage}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Company Info */}
                        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
                            <h3 className="text-lg font-bold text-gray-800 mb-4">Thông tin công ty</h3>
                            <div className="space-y-3">
                                <div className="min-w-0">
                                    <p className="text-sm text-gray-600">Thành lập</p>
                                    <p className="font-medium text-gray-800 truncate">{broker.founded}</p>
                                </div>
                                <div className="min-w-0">
                                    <p className="text-sm text-gray-600">Trụ sở</p>
                                    <p className="font-medium text-gray-800 truncate">{broker.headquarters}</p>
                                </div>
                                <div className="min-w-0">
                                    <p className="text-sm text-gray-600">Ngôn ngữ hỗ trợ</p>
                                    <p className="font-medium text-gray-800 truncate">{broker.languages.join(', ')}</p>
                                </div>
                            </div>
                        </div>

                        {/* Support & Payment */}
                        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
                            <h3 className="text-lg font-bold text-gray-800 mb-4">Hỗ trợ & Thanh toán</h3>
                            <div className="space-y-4">
                                <div>
                                    <p className="text-sm text-gray-600 mb-2">Hỗ trợ khách hàng</p>
                                    <div className="space-y-1">
                                        {broker.support.map((method, index) => (
                                            <div key={index} className="flex items-center min-w-0">
                                                <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                                                <span className="text-sm text-gray-800 truncate">{method}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-600 mb-2">Phương thức thanh toán</p>
                                    <div className="space-y-1">
                                        {broker.paymentMethods.map((method, index) => (
                                            <div key={index} className="flex items-center min-w-0">
                                                <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                                                <span className="text-sm text-gray-800 truncate">{method}</span>
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