'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { TrendingUp, Bitcoin, Menu, X } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'
import Image from 'next/image'

interface HeaderProps {
    activePage: 'home' | 'forex' | 'crypto-brokers' | 'crypto' | 'news' | 'knowledge' | 'contact'
    theme?: 'blue' | 'orange'
}

export default function Header({ activePage, theme = 'blue' }: HeaderProps) {
    const { t } = useLanguage()
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    // Close mobile menu when language changes
    useEffect(() => {
        setIsMobileMenuOpen(false)
    }, [t])

    const getIcon = () => {
        if (activePage === 'crypto' || activePage === 'crypto-brokers') {
            return <Bitcoin className="h-8 w-8 text-orange-600 mr-3" />
        }
        return <TrendingUp className="h-8 w-8 text-blue-600 mr-3" />
    }

    const getActiveColor = () => {
        if (activePage === 'crypto' || activePage === 'crypto-brokers') {
            return 'text-orange-600'
        }
        return 'text-blue-600'
    }

    const getHoverColor = () => {
        if (activePage === 'crypto' || activePage === 'crypto-brokers') {
            return 'hover:text-orange-600 dark:hover:text-orange-400'
        }
        return 'hover:text-blue-600 dark:hover:text-blue-400'
    }

    const getFocusColor = () => {
        if (activePage === 'crypto' || activePage === 'crypto-brokers') {
            return 'focus:ring-orange-500'
        }
        return 'focus:ring-blue-500'
    }

    const getActiveHoverBg = () => {
        if (activePage === 'crypto' || activePage === 'crypto-brokers') {
            return 'hover:bg-orange-50 dark:hover:bg-orange-900/20'
        }
        return 'hover:bg-blue-50 dark:hover:bg-blue-900/20'
    }

    const getCryptoHoverColor = () => {
        return 'hover:text-orange-600 dark:hover:text-orange-400'
    }

    const getCryptoHoverBg = () => {
        return 'hover:bg-orange-50 dark:hover:bg-orange-900/20'
    }

    const getForexHoverColor = () => {
        return 'hover:text-blue-600 dark:hover:text-blue-400'
    }

    const getForexHoverBg = () => {
        return 'hover:bg-blue-50 dark:hover:bg-blue-900/20'
    }

    return (
        <header className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-6">
                    <div className="flex items-center">
                        <Link href="/" className="flex items-center mr-3">
                            <Image
                                src="/logo.png"
                                alt="K-Network Logo"
                                width={42}
                                height={42}
                                className="h-10 w-10 object-contain"
                            />
                        </Link>
                        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">K-Network</h1>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex space-x-8">
                        <Link
                            href="/"
                            className={`font-medium ${activePage === 'home' ? getActiveColor() : `text-gray-500 dark:text-gray-400 ${getForexHoverColor()}`}`}
                        >
                            Home
                        </Link>
                        <Link
                            href="/broker"
                            className={`font-medium ${activePage === 'forex' ? getActiveColor() : `text-gray-500 dark:text-gray-400 ${getForexHoverColor()}`}`}
                        >
                            {t('nav.forex')}
                        </Link>
                        <Link
                            href="/crypto-brokers"
                            className={`font-medium ${activePage === 'crypto-brokers' ? getActiveColor() : `text-gray-500 dark:text-gray-400 ${getCryptoHoverColor()}`}`}
                        >
                            {t('nav.cryptoBrokers')}
                        </Link>

                        <Link
                            href="/news"
                            className={`font-medium ${activePage === 'news' ? getActiveColor() : `text-gray-500 dark:text-gray-400 ${getForexHoverColor()}`}`}
                        >
                            {t('nav.news')}
                        </Link>
                        <Link
                            href="/knowledge"
                            className={`font-medium ${activePage === 'knowledge' ? getActiveColor() : `text-gray-500 dark:text-gray-400 ${getForexHoverColor()}`}`}
                        >
                            {t('nav.knowledge')}
                        </Link>
                        <Link
                            href="/contact"
                            className={`font-medium text-gray-500 dark:text-gray-400 ${getForexHoverColor()}`}
                        >
                            Liên Hệ
                        </Link>
                    </nav>

                    {/* CTA Button */}
                    <div className="hidden md:block">
                        <a
                            href="https://t.me/K_NETWORK_official"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl border border-blue-500/20"
                        >
                            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                            </svg>
                            {t('nav.joinTelegram')}
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className={`md:hidden p-2 rounded-md text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 focus:outline-none focus:ring-2 ${getFocusColor()}`}
                    >
                        {isMobileMenuOpen ? (
                            <X className="h-6 w-6" />
                        ) : (
                            <Menu className="h-6 w-6" />
                        )}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isMobileMenuOpen && (
                    <div className="md:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
                            <Link
                                href="/"
                                className={`block px-3 py-2 rounded-md text-base font-medium ${activePage === 'home' ? getActiveColor() : 'text-gray-500 dark:text-gray-400'} ${getForexHoverBg()}`}
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Home
                            </Link>
                            <Link
                                href="/broker"
                                className={`block px-3 py-2 rounded-md text-base font-medium ${activePage === 'forex' ? getActiveColor() : 'text-gray-500 dark:text-gray-400'} ${getForexHoverBg()}`}
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {t('nav.forex')}
                            </Link>
                            <Link
                                href="/crypto-brokers"
                                className={`block px-3 py-2 rounded-md text-base font-medium ${activePage === 'crypto-brokers' ? getActiveColor() : 'text-gray-500 dark:text-gray-400'} ${getCryptoHoverBg()}`}
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {t('nav.cryptoBrokers')}
                            </Link>

                            <Link
                                href="/news"
                                className={`block px-3 py-2 rounded-md text-base font-medium ${activePage === 'news' ? getActiveColor() : 'text-gray-500 dark:text-gray-400'} ${getForexHoverBg()}`}
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {t('nav.news')}
                            </Link>
                            <Link
                                href="/knowledge"
                                className={`block px-3 py-2 rounded-md text-base font-medium ${activePage === 'knowledge' ? getActiveColor() : 'text-gray-500 dark:text-gray-400'} ${getForexHoverBg()}`}
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {t('nav.knowledge')}
                            </Link>
                            <Link
                                href="/contact"
                                className={`block px-3 py-2 rounded-md text-base font-medium text-gray-500 dark:text-gray-400 ${getForexHoverBg()}`}
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Liên Hệ
                            </Link>

                            {/* Mobile CTA Button */}
                            <div className="pt-2 border-t border-gray-200 dark:border-gray-700">
                                <a
                                    href="https://t.me/K_NETWORK_official"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block w-full text-center px-4 py-3 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 text-white font-semibold rounded-xl transition-all duration-300 border border-blue-500/20"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    <div className="flex items-center justify-center">
                                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                                        </svg>
                                        {t('nav.joinTelegram')}
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </header>
    )
} 