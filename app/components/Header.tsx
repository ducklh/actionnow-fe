'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { TrendingUp, Bitcoin, Menu, X } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'

interface HeaderProps {
    activePage: 'forex' | 'crypto-brokers' | 'crypto' | 'news' | 'knowledge'
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
                        {getIcon()}
                        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Action Now</h1>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex space-x-8">
                        <Link
                            href="/"
                            className={`font-medium ${activePage === 'forex' ? getActiveColor() : `text-gray-500 dark:text-gray-400 ${getForexHoverColor()}`}`}
                        >
                            {t('nav.forex')}
                        </Link>
                        <Link
                            href="/crypto-brokers"
                            className={`font-medium ${activePage === 'crypto-brokers' ? getActiveColor() : `text-gray-500 dark:text-gray-400 ${getCryptoHoverColor()}`}`}
                        >
                            Crypto Brokers
                        </Link>
                        <Link
                            href="/crypto"
                            className={`font-medium ${activePage === 'crypto' ? getActiveColor() : `text-gray-500 dark:text-gray-400 ${getCryptoHoverColor()}`}`}
                        >
                            Crypto News
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
                    </nav>

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
                                Crypto Brokers
                            </Link>
                            <Link
                                href="/crypto"
                                className={`block px-3 py-2 rounded-md text-base font-medium ${activePage === 'crypto' ? getActiveColor() : 'text-gray-500 dark:text-gray-400'} ${getCryptoHoverBg()}`}
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Crypto News
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
                        </div>
                    </div>
                )}
            </div>
        </header>
    )
} 