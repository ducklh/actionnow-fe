'use client'

import Link from 'next/link'
import { useLanguage } from '../contexts/LanguageContext'

export default function Footer() {
    const { t, language } = useLanguage()

    return (
        <footer className="bg-gray-900 text-white py-12 mt-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h3 className="text-xl font-bold mb-4">Action Now</h3>
                    <p className="text-gray-400 mb-6">
                        {t('footer.description')}
                    </p>
                    <div className="flex justify-center space-x-6">
                        <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                            {t('footer.forex')}
                        </Link>
                        <Link href="/crypto-brokers" className="text-gray-400 hover:text-white transition-colors">
                            {t('footer.crypto')}
                        </Link>
                        <Link href="/news" className="text-gray-400 hover:text-white transition-colors">
                            {t('footer.news')}
                        </Link>
                        <Link href="/knowledge" className="text-gray-400 hover:text-white transition-colors">
                            {t('footer.knowledge')}
                        </Link>
                    </div>
                    <div className="mt-6 pt-6 border-t border-gray-800">
                        <p className="text-gray-500 text-sm">
                            © 2024 Action Now. {t('footer.rights')}
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
