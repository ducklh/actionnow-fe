'use client'

import Link from 'next/link'
import { useLanguage } from '../contexts/LanguageContext'

export default function Footer() {
    const { t } = useLanguage()

    return (
        <footer className="bg-gray-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div className="col-span-1 md:col-span-2">
                        <h3 className="text-xl font-bold mb-4">K-Network</h3>
                        <p className="text-gray-300 mb-4">
                            Nền tảng tài chính hàng đầu cung cấp thông tin về sàn forex và cryptocurrency uy tín,
                            đánh giá chi tiết và công cụ hỗ trợ giao dịch hiệu quả.
                        </p>
                        <p className="text-gray-400 text-sm">
                            {t('footer.copyright')}
                        </p>
                    </div>

                    {/* Sitemap */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">{t('footer.sitemap.title')}</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                                    {t('footer.sitemap.home')}
                                </Link>
                            </li>
                            <li>
                                <Link href="/broker" className="text-gray-300 hover:text-white transition-colors">
                                    {t('footer.sitemap.forex')}
                                </Link>
                            </li>
                            <li>
                                <Link href="/crypto-brokers" className="text-gray-300 hover:text-white transition-colors">
                                    {t('footer.sitemap.crypto')}
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                                    {t('footer.sitemap.about')}
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                                    {t('footer.sitemap.contact')}
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Legal & Socials */}
                    <div className="space-y-6">
                        {/* Legal */}
                        <div>
                            <h4 className="text-lg font-semibold mb-4">{t('footer.legal.title')}</h4>
                            <ul className="space-y-2">
                                <li>
                                    <Link href="/legal/affiliate" className="text-gray-300 hover:text-white transition-colors">
                                        {t('footer.legal.affiliate')}
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/legal/risk" className="text-gray-300 hover:text-white transition-colors">
                                        {t('footer.legal.risk')}
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/legal/privacy" className="text-gray-300 hover:text-white transition-colors">
                                        {t('footer.legal.privacy')}
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/legal/terms" className="text-gray-300 hover:text-white transition-colors">
                                        {t('footer.legal.terms')}
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Socials */}
                        <div>
                            <h4 className="text-lg font-semibold mb-4">{t('footer.socials.title')}</h4>
                            <ul className="space-y-2">
                                <li>
                                    <a
                                        href="https://t.me/K_NETWORK_official"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-300 hover:text-white transition-colors"
                                    >
                                        {t('footer.socials.telegram')}
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://www.youtube.com/@knetworkofficial"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-300 hover:text-white transition-colors"
                                    >
                                        {t('footer.socials.youtube')}
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://www.facebook.com/Knetworkchannel"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-300 hover:text-white transition-colors"
                                    >
                                        {t('footer.socials.facebook')}
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Bottom Border */}
                <div className="border-t border-gray-800 mt-8 pt-8 text-center">
                    <p className="text-gray-400 text-sm">
                        {t('footer.copyright')}
                    </p>
                </div>
            </div>
        </footer>
    )
}
