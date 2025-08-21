'use client'

import Link from 'next/link'
import { TrendingUp, Bitcoin, Globe, BookOpen, Newspaper, ArrowRight, Star, Shield, Users, Zap, Settings } from 'lucide-react'
import { useLanguage } from './contexts/LanguageContext'
import Header from './components/Header'
import Footer from './components/Footer'

export default function HomePage() {
    const { t } = useLanguage()

    const features = [
        {
            icon: <TrendingUp className="h-8 w-8 text-blue-600" />,
            title: t('home.features.forexTitle'),
            description: t('home.features.forexDesc'),
            href: '/broker',
            color: 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800'
        },
        {
            icon: <Bitcoin className="h-8 w-8 text-orange-600" />,
            title: t('home.features.cryptoTitle'),
            description: t('home.features.cryptoDesc'),
            href: '/crypto-brokers',
            color: 'bg-orange-50 dark:bg-orange-900/20 border-orange-200 dark:border-orange-800'
        },
        {
            icon: <Newspaper className="h-8 w-8 text-green-600" />,
            title: t('home.features.newsTitle'),
            description: t('home.features.newsDesc'),
            href: '/news',
            color: 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800'
        },
        {
            icon: <BookOpen className="h-8 w-8 text-purple-600" />,
            title: t('home.features.knowledgeTitle'),
            description: t('home.features.knowledgeDesc'),
            href: '/knowledge',
            color: 'bg-purple-50 dark:bg-purple-900/20 border-purple-200 dark:border-purple-800'
        }
    ]

    const stats = [
        { label: t('home.stats.forexBrokers'), value: '50+', icon: <TrendingUp className="h-5 w-5 text-blue-600" /> },
        { label: t('home.stats.cryptoBrokers'), value: '30+', icon: <Bitcoin className="h-5 w-5 text-orange-600" /> },
        { label: t('home.stats.articles'), value: '200+', icon: <BookOpen className="h-5 w-5 text-purple-600" /> },
        { label: t('home.stats.users'), value: '10K+', icon: <Users className="h-5 w-5 text-green-600" /> }
    ]

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
            <Header activePage="home" />

            {/* Hero Section */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium mb-6">
                        <Star className="h-4 w-4 mr-2" />
                        {t('home.welcome')}
                    </div>
                    <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                        {t('home.heroTitle')}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
                            {' '}{t('home.heroTitleHighlight')}
                        </span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
                        {t('home.heroSubtitle')}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/broker"
                            className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200 text-lg"
                        >
                            {t('home.exploreForex')}
                            <ArrowRight className="h-5 w-5 ml-2" />
                        </Link>
                        <Link
                            href="/crypto-brokers"
                            className="inline-flex items-center px-8 py-4 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-lg transition-colors duration-200 text-lg"
                        >
                            {t('home.exploreCrypto')}
                            <ArrowRight className="h-5 w-5 ml-2" />
                        </Link>
                    </div>
                </div>

                {/* Stats Section */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
                    {stats.map((stat, index) => (
                        <div key={index} className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                            <div className="flex justify-center mb-3">
                                {stat.icon}
                            </div>
                            <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">{stat.value}</div>
                            <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
                        </div>
                    ))}
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                    {features.map((feature, index) => (
                        <Link
                            key={index}
                            href={feature.href}
                            className={`group p-8 rounded-2xl border-2 transition-all duration-300 hover:scale-105 ${feature.color}`}
                        >
                            <div className="flex items-start space-x-4">
                                <div className="flex-shrink-0">
                                    {feature.icon}
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                        {feature.title}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                                        {feature.description}
                                    </p>
                                    <div className="inline-flex items-center text-blue-600 dark:text-blue-400 font-medium group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors">
                                        {t('home.features.exploreNow')}
                                        <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Why Choose Us Section */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-12">
                        {t('home.whyChoose.title')}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="text-center">
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-4">
                                <Shield className="h-8 w-8 text-blue-600" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{t('home.whyChoose.reliable.title')}</h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                {t('home.whyChoose.reliable.desc')}
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 dark:bg-orange-900/30 rounded-full mb-4">
                                <Zap className="h-8 w-8 text-orange-600" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{t('home.whyChoose.fast.title')}</h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                {t('home.whyChoose.fast.desc')}
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full mb-4">
                                <Users className="h-8 w-8 text-green-600" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{t('home.whyChoose.community.title')}</h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                {t('home.whyChoose.community.desc')}
                            </p>
                        </div>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="text-center">
                    <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-12 text-white">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            {t('home.cta.title')}
                        </h2>
                        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                            {t('home.cta.subtitle')}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/broker"
                                className="inline-flex items-center px-8 py-4 bg-white text-blue-600 hover:bg-gray-100 font-semibold rounded-lg transition-colors duration-200 text-lg"
                            >
                                {t('home.cta.startForex')}
                                <ArrowRight className="h-5 w-5 ml-2" />
                            </Link>
                            <Link
                                href="/crypto-brokers"
                                className="inline-flex items-center px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition-colors duration-200 text-lg"
                            >
                                {t('home.cta.exploreCrypto')}
                                <ArrowRight className="h-5 w-5 ml-2" />
                            </Link>
                        </div>
                    </div>
                </div>

                {/* About Section */}
                <div className="text-center mb-16 mt-10">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        {t('home.about.title')}
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
                        {t('home.about.subtitle')}
                    </p>
                    <p className="text-lg text-gray-600 dark:text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
                        {t('home.about.description')}
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                                {t('home.about.mission')}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                {t('home.about.missionDesc')}
                            </p>
                        </div>
                        <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                                {t('home.about.vision')}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                {t('home.about.visionDesc')}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Services Section */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        {t('home.services.title')}
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto">
                        {t('home.services.subtitle')}
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-4">
                                <Shield className="h-8 w-8 text-blue-600" />
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                                {t('home.services.brokerReview.title')}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300 text-sm">
                                {t('home.services.brokerReview.desc')}
                            </p>
                        </div>
                        <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full mb-4">
                                <BookOpen className="h-8 w-8 text-green-600" />
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                                {t('home.services.education.title')}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300 text-sm">
                                {t('home.services.education.desc')}
                            </p>
                        </div>
                        <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full mb-4">
                                <TrendingUp className="h-8 w-8 text-purple-600" />
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                                {t('home.services.analysis.title')}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300 text-sm">
                                {t('home.services.analysis.desc')}
                            </p>
                        </div>
                        <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 dark:bg-orange-900/30 rounded-full mb-4">
                                <Settings className="h-8 w-8 text-orange-600" />
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                                {t('home.services.tools.title')}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300 text-sm">
                                {t('home.services.tools.desc')}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Testimonials Section */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        {t('home.testimonials.title')}
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto">
                        {t('home.testimonials.subtitle')}
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                            <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full mx-auto mb-4 flex items-center justify-center">
                                <span className="text-2xl font-bold text-blue-600">A</span>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                                {t('home.testimonials.user1.name')}
                            </h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                                {t('home.testimonials.user1.role')}
                            </p>
                            <p className="text-gray-600 dark:text-gray-300 text-sm italic">
                                "{t('home.testimonials.user1.comment')}"
                            </p>
                        </div>
                        <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                            <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full mx-auto mb-4 flex items-center justify-center">
                                <span className="text-2xl font-bold text-green-600">B</span>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                                {t('home.testimonials.user2.name')}
                            </h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                                {t('home.testimonials.user2.role')}
                            </p>
                            <p className="text-gray-600 dark:text-gray-300 text-sm italic">
                                "{t('home.testimonials.user2.comment')}"
                            </p>
                        </div>
                        <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                            <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full mx-auto mb-4 flex items-center justify-center">
                                <span className="text-2xl font-bold text-purple-600">C</span>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                                {t('home.testimonials.user3.name')}
                            </h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                                {t('home.testimonials.user3.role')}
                            </p>
                            <p className="text-gray-600 dark:text-gray-300 text-sm italic">
                                "{t('home.testimonials.user3.comment')}"
                            </p>
                        </div>
                    </div>
                </div>

                {/* FAQ Section */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        {t('home.faq.title')}
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto">
                        {t('home.faq.subtitle')}
                    </p>
                    <div className="max-w-4xl mx-auto space-y-6">
                        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 text-left">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                                {t('home.faq.q1')}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                {t('home.faq.a1')}
                            </p>
                        </div>
                        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 text-left">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                                {t('home.faq.q2')}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                {t('home.faq.a2')}
                            </p>
                        </div>
                        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 text-left">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                                {t('home.faq.q3')}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                {t('home.faq.a3')}
                            </p>
                        </div>
                        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 text-left">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                                {t('home.faq.q4')}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                {t('home.faq.a4')}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Contact Section */}
                {/* Removed Contact component */}
            </main>

            <Footer />
        </div>
    )
}
