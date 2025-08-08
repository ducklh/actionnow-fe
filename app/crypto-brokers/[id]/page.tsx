'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { ArrowLeft, ExternalLink, TrendingUp, Shield, DollarSign, Bitcoin, Star, CheckCircle, AlertTriangle, Users, Globe } from 'lucide-react'
import { useLanguage } from '../../contexts/LanguageContext'
import { getCryptoBrokerById, CryptoBroker } from '../../../lib/data'



export default function CryptoBrokerDetailPage() {
    const { t, language } = useLanguage()
    const params = useParams()
    const [broker, setBroker] = useState<CryptoBroker | null>(null)

    useEffect(() => {
        const id = parseInt(params.id as string)
        const foundBroker = getCryptoBrokerById(id, language)
        setBroker(foundBroker || null)
    }, [params.id, language])

    if (!broker) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{t('crypto.notFound.broker')}</h2>
                    <Link href="/crypto-brokers" className="text-orange-600 hover:text-orange-700 font-medium">
                        {t('crypto.backToList')}
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
                            <Link
                                href={broker.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition-colors font-medium flex items-center"
                            >
                                <ExternalLink className="h-4 w-4 mr-2" />
                                {t('crypto.visit')}
                            </Link>
                        </div>
                    </div>

                    <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
                        {broker.description}
                    </p>

                    {/* Quick Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        <div className="text-center">
                            <div className="text-2xl font-bold text-gray-900 dark:text-white">{broker.founded}</div>
                            <div className="text-sm text-gray-600 dark:text-gray-400">{t('crypto.founded')}</div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl font-bold text-gray-900 dark:text-white">{broker.tradingVolume}</div>
                            <div className="text-sm text-gray-600 dark:text-gray-400">{t('crypto.tradingVolume')}</div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl font-bold text-gray-900 dark:text-white">{broker.minDeposit}</div>
                            <div className="text-sm text-gray-600 dark:text-gray-400">{t('crypto.minDeposit')}</div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl font-bold text-gray-900 dark:text-white">{broker.tradingFees}</div>
                            <div className="text-sm text-gray-600 dark:text-gray-400">{t('crypto.tradingFees')}</div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Detailed Description */}
                        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                                {t('crypto.detailedInfo')}
                            </h2>
                            <div className="prose prose-lg max-w-none dark:prose-invert">
                                <div className="whitespace-pre-line text-gray-700 dark:text-gray-300 leading-relaxed">
                                    {broker.detailedDescription}
                                </div>
                            </div>
                        </div>

                        {/* Features */}
                        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                                <TrendingUp className="h-6 w-6 mr-3 text-orange-600" />
                                {t('crypto.features')}
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {broker.features.map((feature, index) => (
                                    <div key={index} className="flex items-center">
                                        <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                                        <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Supported Coins */}
                        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                                <DollarSign className="h-6 w-6 mr-3 text-green-600" />
                                {t('crypto.supportedCoins')}
                            </h2>
                            <div className="flex flex-wrap gap-3">
                                {broker.supportedCoins.map((coin, index) => (
                                    <span
                                        key={index}
                                        className="px-4 py-2 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm font-medium"
                                    >
                                        {coin}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-8">
                        {/* Pros & Cons */}
                        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{t('common.category')}</h3>

                            {/* Pros */}
                            <div className="mb-6">
                                <h4 className="font-semibold text-green-600 mb-3 flex items-center">
                                    <CheckCircle className="h-4 w-4 mr-2" />
                                    {t('crypto.pros')}
                                </h4>
                                <ul className="space-y-2">
                                    {broker.pros.map((pro, index) => (
                                        <li key={index} className="text-sm text-gray-700 dark:text-gray-300 flex items-start">
                                            <CheckCircle className="h-3 w-3 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                            {pro}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Cons */}
                            <div>
                                <h4 className="font-semibold text-red-600 mb-3 flex items-center">
                                    <AlertTriangle className="h-4 w-4 mr-2" />
                                    {t('crypto.cons')}
                                </h4>
                                <ul className="space-y-2">
                                    {broker.cons.map((con, index) => (
                                        <li key={index} className="text-sm text-gray-700 dark:text-gray-300 flex items-start">
                                            <AlertTriangle className="h-3 w-3 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                                            {con}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Security Features */}
                        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                                <Shield className="h-5 w-5 mr-2 text-blue-600" />
                                {t('crypto.security')}
                            </h3>
                            <ul className="space-y-2">
                                {broker.securityFeatures.map((feature, index) => (
                                    <li key={index} className="text-sm text-gray-700 dark:text-gray-300 flex items-start">
                                        <Shield className="h-3 w-3 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Payment Methods */}
                        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                                <DollarSign className="h-5 w-5 mr-2 text-green-600" />
                                {t('crypto.paymentMethods')}
                            </h3>
                            <ul className="space-y-2">
                                {broker.paymentMethods.map((method, index) => (
                                    <li key={index} className="text-sm text-gray-700 dark:text-gray-300 flex items-start">
                                        <DollarSign className="h-3 w-3 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                        {method}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Customer Support */}
                        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                                <Users className="h-5 w-5 mr-2 text-purple-600" />
                                {t('crypto.customerSupport')}
                            </h3>
                            <ul className="space-y-2">
                                {broker.customerSupport.map((support, index) => (
                                    <li key={index} className="text-sm text-gray-700 dark:text-gray-300 flex items-start">
                                        <Users className="h-3 w-3 text-purple-500 mr-2 mt-0.5 flex-shrink-0" />
                                        {support}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Additional Info */}
                        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                                <Globe className="h-5 w-5 mr-2 text-indigo-600" />
                                {t('crypto.additionalInfo')}
                            </h3>
                            <div className="space-y-3">
                                <div className="flex justify-between">
                                    <span className="text-sm text-gray-600 dark:text-gray-400">{t('crypto.headquarters')}:</span>
                                    <span className="text-sm font-medium text-gray-900 dark:text-white">{broker.headquarters}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-sm text-gray-600 dark:text-gray-400">{t('crypto.regulation')}:</span>
                                    <span className="text-sm font-medium text-gray-900 dark:text-white">{broker.regulation}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-sm text-gray-600 dark:text-gray-400">{t('crypto.mobileApp')}:</span>
                                    <span className="text-sm font-medium text-gray-900 dark:text-white">
                                        {broker.mobileApp ? t('crypto.yes') : t('crypto.no')}
                                    </span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-sm text-gray-600 dark:text-gray-400">{t('crypto.apiSupport')}:</span>
                                    <span className="text-sm font-medium text-gray-900 dark:text-white">
                                        {broker.apiSupport ? t('crypto.yes') : t('crypto.no')}
                                    </span>
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