'use client'

import React, { createContext, useContext, useEffect, useState } from 'react'

type Language = 'vi' | 'en'

interface LanguageContextType {
    language: Language
    setLanguage: (lang: Language) => void
    t: (key: string) => string
    mounted: boolean
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

// Translation data
const translations = {
    vi: {
        // Navigation
        'nav.forex': 'Sàn Forex',
        'nav.news': 'Tin Tức',
        'nav.knowledge': 'Kiến Thức',

        // Common
        'common.back': 'Quay lại',
        'common.readMore': 'Đọc chi tiết',
        'common.search': 'Tìm kiếm',
        'common.filter': 'Lọc',
        'common.sort': 'Sắp xếp',
        'common.category': 'Danh mục',
        'common.all': 'Tất cả',
        'common.readTime': 'phút',

        // Home page
        'home.title': 'Danh Sách Sàn Forex Uy Tín',
        'home.subtitle': 'Khám phá các sàn forex hàng đầu với đánh giá chi tiết, so sánh tính năng và link đăng ký trực tiếp',
        'home.searchPlaceholder': 'Tìm kiếm sàn forex...',
        'home.sortByRating': 'Đánh giá cao nhất',
        'home.sortByName': 'Tên A-Z',
        'home.visit': 'Truy cập',
        'home.viewDetails': 'Xem chi tiết',
        'home.regulation': 'Quy định',
        'home.minDeposit': 'Nạp tối thiểu',
        'home.spread': 'Spread',
        'home.noBrokersFound': 'Không tìm thấy sàn forex',
        'home.tryDifferentKeywords': 'Thử tìm kiếm với từ khóa khác',

        // News page
        'news.title': 'Tin Tức Forex Mới Nhất',
        'news.subtitle': 'Cập nhật những tin tức mới nhất về thị trường forex, phân tích kỹ thuật và cơ bản',
        'news.searchPlaceholder': 'Tìm kiếm tin tức...',
        'news.technical': 'Phân tích kỹ thuật',
        'news.fundamental': 'Phân tích cơ bản',
        'news.market': 'Tin tức thị trường',
        'news.newsletter.title': 'Đăng ký nhận tin tức',
        'news.newsletter.subtitle': 'Nhận tin tức forex mới nhất qua email',
        'news.newsletter.placeholder': 'Nhập email của bạn',
        'news.newsletter.button': 'Đăng ký',

        // Knowledge page
        'knowledge.title': 'Kiến Thức Forex',
        'knowledge.subtitle': 'Học hỏi từ cơ bản đến nâng cao về thị trường forex. Xây dựng nền tảng kiến thức vững chắc để giao dịch thành công.',
        'knowledge.articles': 'Bài viết',
        'knowledge.categories': 'Chuyên mục',
        'knowledge.searchPlaceholder': 'Tìm kiếm kiến thức...',
        'knowledge.basic': 'Kiến thức cơ bản',
        'knowledge.technical': 'Phân tích kỹ thuật',
        'knowledge.fundamental': 'Phân tích cơ bản',
        'knowledge.risk': 'Quản lý rủi ro',
        'knowledge.psychology': 'Tâm lý giao dịch',
        'knowledge.strategy': 'Chiến lược giao dịch',
        'knowledge.tools': 'Công cụ giao dịch',
        'knowledge.level.basic': 'Cơ bản',
        'knowledge.level.intermediate': 'Trung cấp',
        'knowledge.level.advanced': 'Nâng cao',
        'knowledge.notFound.title': 'Không tìm thấy kiến thức',
        'knowledge.notFound.subtitle': 'Thử thay đổi từ khóa tìm kiếm hoặc chọn chuyên mục khác',
        'knowledge.related': 'Bài viết liên quan',

        // Footer
        'footer.about': 'Về chúng tôi',
        'footer.contact': 'Liên hệ',
        'footer.policy': 'Chính sách',
        'footer.description': 'Cung cấp thông tin chính xác và cập nhật về thị trường forex',

        // Broker details
        'broker.description': 'Mô tả',
        'broker.features': 'Tính năng chính',
        'broker.pros': 'Ưu điểm',
        'broker.cons': 'Nhược điểm',
        'broker.tradingInfo': 'Thông tin giao dịch',
        'broker.platforms': 'Nền tảng giao dịch',
        'broker.instruments': 'Sản phẩm giao dịch',
        'broker.companyInfo': 'Thông tin công ty',
        'broker.founded': 'Thành lập',
        'broker.headquarters': 'Trụ sở chính',
        'broker.languages': 'Ngôn ngữ hỗ trợ',
        'broker.support': 'Hỗ trợ khách hàng',
        'broker.paymentMethods': 'Phương thức thanh toán',

        // Settings
        'settings.language': 'Ngôn ngữ',
        'settings.theme': 'Giao diện',
        'settings.theme.light': 'Sáng',
        'settings.theme.dark': 'Tối',
        'settings.theme.auto': 'Tự động',

        // Crypto Brokers
        'crypto.title': 'Sàn Giao Dịch Cryptocurrency Tốt Nhất',
        'crypto.subtitle': 'So sánh và chọn sàn giao dịch cryptocurrency phù hợp nhất với nhu cầu của bạn',
        'crypto.searchPlaceholder': 'Tìm kiếm sàn giao dịch hoặc coin...',
        'crypto.sortByRating': 'Đánh giá cao nhất',
        'crypto.sortByName': 'Tên A-Z',
        'crypto.visit': 'Truy cập',
        'crypto.viewDetails': 'Chi tiết',
        'crypto.features': 'Tính năng chính',
        'crypto.tradingFees': 'Phí giao dịch',
        'crypto.minDeposit': 'Nạp tối thiểu',
        'crypto.regulation': 'Giấy phép',
        'crypto.supportedCoins': 'Coin hỗ trợ',
        'crypto.others': 'khác',
        'crypto.notFound.title': 'Không tìm thấy sàn giao dịch',
        'crypto.notFound.subtitle': 'Thử tìm kiếm với từ khóa khác',
        'crypto.newsletter.title': 'Nhận thông tin sàn giao dịch mới nhất',
        'crypto.newsletter.subtitle': 'Đăng ký để nhận thông tin về các sàn giao dịch cryptocurrency mới và cập nhật',
        'crypto.newsletter.placeholder': 'Nhập email của bạn',
        'crypto.newsletter.button': 'Đăng ký',
        'crypto.newsletter.news.title': 'Đăng ký nhận tin tức Crypto',
        'crypto.newsletter.news.subtitle': 'Nhận tin tức mới nhất về cryptocurrency và blockchain trực tiếp vào email của bạn',
        'crypto.backToList': 'Quay lại danh sách sàn',
        'crypto.notFound.broker': 'Không tìm thấy sàn giao dịch',
        'crypto.detailedInfo': 'Thông tin chi tiết',
        'crypto.pros': 'Ưu điểm',
        'crypto.cons': 'Nhược điểm',
        'crypto.security': 'Bảo mật',
        'crypto.paymentMethods': 'Phương thức thanh toán',
        'crypto.customerSupport': 'Hỗ trợ khách hàng',
        'crypto.additionalInfo': 'Thông tin khác',
        'crypto.headquarters': 'Trụ sở',
        'crypto.founded': 'Năm thành lập',
        'crypto.tradingVolume': 'Khối lượng giao dịch',
        'crypto.mobileApp': 'Mobile App',
        'crypto.apiSupport': 'API Support',
        'crypto.yes': 'Có',
        'crypto.no': 'Không',

        // Crypto News
        'crypto.news.title': 'Tin Tức Cryptocurrency',
        'crypto.news.subtitle': 'Cập nhật tin tức mới nhất về Bitcoin, Ethereum và các cryptocurrency khác. Phân tích thị trường và xu hướng công nghệ blockchain.',
        'crypto.news.searchPlaceholder': 'Tìm kiếm tin tức cryptocurrency...',
        'crypto.news.noNewsFound': 'Không tìm thấy tin tức',
        'crypto.news.tryDifferentKeywords': 'Thử tìm kiếm với từ khóa khác hoặc chọn danh mục khác',

        // Crypto Categories
        'crypto.categories.all': 'Tất cả',
        'crypto.categories.market': 'Tin tức thị trường',
        'crypto.categories.technology': 'Phân tích kỹ thuật',
        'crypto.categories.defi': 'DeFi',
        'crypto.categories.nft': 'NFT',
        'crypto.categories.regulation': 'Regulation',
        'crypto.categories.layer2': 'Layer 2',
        'crypto.categories.memecoin': 'Meme Coin'
    },
    en: {
        // Navigation
        'nav.forex': 'Forex Brokers',
        'nav.news': 'News',
        'nav.knowledge': 'Knowledge',

        // Common
        'common.back': 'Back',
        'common.readMore': 'Read More',
        'common.search': 'Search',
        'common.filter': 'Filter',
        'common.sort': 'Sort',
        'common.category': 'Category',
        'common.all': 'All',
        'common.readTime': 'min',

        // Home page
        'home.title': 'Top Forex Brokers',
        'home.subtitle': 'Discover the best forex brokers with detailed reviews, feature comparisons and direct registration links',
        'home.searchPlaceholder': 'Search forex brokers...',
        'home.sortByRating': 'Highest Rating',
        'home.sortByName': 'Name A-Z',
        'home.visit': 'Visit',
        'home.viewDetails': 'View Details',
        'home.regulation': 'Regulation',
        'home.minDeposit': 'Min Deposit',
        'home.spread': 'Spread',
        'home.noBrokersFound': 'No forex brokers found',
        'home.tryDifferentKeywords': 'Try searching with different keywords',

        // News page
        'news.title': 'Latest Forex News',
        'news.subtitle': 'Get the latest forex market news, technical and fundamental analysis',
        'news.searchPlaceholder': 'Search news...',
        'news.technical': 'Technical Analysis',
        'news.fundamental': 'Fundamental Analysis',
        'news.market': 'Market News',
        'news.newsletter.title': 'Subscribe to News',
        'news.newsletter.subtitle': 'Get latest forex news via email',
        'news.newsletter.placeholder': 'Enter your email',
        'news.newsletter.button': 'Subscribe',

        // Knowledge page
        'knowledge.title': 'Forex Knowledge',
        'knowledge.subtitle': 'Learn from basic to advanced about the forex market. Build a solid knowledge foundation for successful trading.',
        'knowledge.articles': 'Articles',
        'knowledge.categories': 'Categories',
        'knowledge.searchPlaceholder': 'Search knowledge...',
        'knowledge.basic': 'Basic Knowledge',
        'knowledge.technical': 'Technical Analysis',
        'knowledge.fundamental': 'Fundamental Analysis',
        'knowledge.risk': 'Risk Management',
        'knowledge.psychology': 'Trading Psychology',
        'knowledge.strategy': 'Trading Strategy',
        'knowledge.tools': 'Trading Tools',
        'knowledge.level.basic': 'Basic',
        'knowledge.level.intermediate': 'Intermediate',
        'knowledge.level.advanced': 'Advanced',
        'knowledge.notFound.title': 'No knowledge found',
        'knowledge.notFound.subtitle': 'Try changing search keywords or select different category',
        'knowledge.related': 'Related Articles',

        // Footer
        'footer.about': 'About Us',
        'footer.contact': 'Contact',
        'footer.policy': 'Policy',
        'footer.description': 'Providing accurate and up-to-date information about the forex market',

        // Broker details
        'broker.description': 'Description',
        'broker.features': 'Key Features',
        'broker.pros': 'Pros',
        'broker.cons': 'Cons',
        'broker.tradingInfo': 'Trading Information',
        'broker.platforms': 'Trading Platforms',
        'broker.instruments': 'Trading Instruments',
        'broker.companyInfo': 'Company Information',
        'broker.founded': 'Founded',
        'broker.headquarters': 'Headquarters',
        'broker.languages': 'Supported Languages',
        'broker.support': 'Customer Support',
        'broker.paymentMethods': 'Payment Methods',

        // Settings
        'settings.language': 'Language',
        'settings.theme': 'Theme',
        'settings.theme.light': 'Light',
        'settings.theme.dark': 'Dark',
        'settings.theme.auto': 'Auto',

        // Crypto Brokers
        'crypto.title': 'Best Cryptocurrency Exchanges',
        'crypto.subtitle': 'Compare and choose the best cryptocurrency exchange that suits your needs',
        'crypto.searchPlaceholder': 'Search exchanges or coins...',
        'crypto.sortByRating': 'Highest Rating',
        'crypto.sortByName': 'Name A-Z',
        'crypto.visit': 'Visit',
        'crypto.viewDetails': 'Details',
        'crypto.features': 'Key Features',
        'crypto.tradingFees': 'Trading Fees',
        'crypto.minDeposit': 'Min Deposit',
        'crypto.regulation': 'Regulation',
        'crypto.supportedCoins': 'Supported Coins',
        'crypto.others': 'others',
        'crypto.notFound.title': 'No exchanges found',
        'crypto.notFound.subtitle': 'Try searching with different keywords',
        'crypto.newsletter.title': 'Get Latest Exchange Updates',
        'crypto.newsletter.subtitle': 'Subscribe to receive information about new cryptocurrency exchanges and updates',
        'crypto.newsletter.placeholder': 'Enter your email',
        'crypto.newsletter.button': 'Subscribe',
        'crypto.newsletter.news.title': 'Subscribe to Crypto News',
        'crypto.newsletter.news.subtitle': 'Get the latest cryptocurrency and blockchain news directly to your email',
        'crypto.backToList': 'Back to Exchange List',
        'crypto.notFound.broker': 'Exchange not found',
        'crypto.detailedInfo': 'Detailed Information',
        'crypto.pros': 'Pros',
        'crypto.cons': 'Cons',
        'crypto.security': 'Security',
        'crypto.paymentMethods': 'Payment Methods',
        'crypto.customerSupport': 'Customer Support',
        'crypto.additionalInfo': 'Additional Info',
        'crypto.headquarters': 'Headquarters',
        'crypto.founded': 'Founded',
        'crypto.tradingVolume': 'Trading Volume',
        'crypto.mobileApp': 'Mobile App',
        'crypto.apiSupport': 'API Support',
        'crypto.yes': 'Yes',
        'crypto.no': 'No',

        // Crypto News
        'crypto.news.title': 'Cryptocurrency News',
        'crypto.news.subtitle': 'Get the latest news about Bitcoin, Ethereum and other cryptocurrencies. Market analysis and blockchain technology trends.',
        'crypto.news.searchPlaceholder': 'Search cryptocurrency news...',
        'crypto.news.noNewsFound': 'No news found',
        'crypto.news.tryDifferentKeywords': 'Try searching with different keywords or select another category',

        // Crypto Categories
        'crypto.categories.all': 'All',
        'crypto.categories.market': 'Market News',
        'crypto.categories.technology': 'Technical Analysis',
        'crypto.categories.defi': 'DeFi',
        'crypto.categories.nft': 'NFT',
        'crypto.categories.regulation': 'Regulation',
        'crypto.categories.layer2': 'Layer 2',
        'crypto.categories.memecoin': 'Meme Coin'
    }
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
    const [language, setLanguageState] = useState<Language>('en')
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
        // Lấy language từ localStorage, mặc định là 'en'
        const savedLanguage = localStorage.getItem('language') as Language
        if (savedLanguage) {
            setLanguageState(savedLanguage)
        } else {
            // Nếu chưa có trong localStorage, set mặc định là 'en'
            localStorage.setItem('language', 'en')
        }
    }, [])

    const setLanguage = (lang: Language) => {
        setLanguageState(lang)
        localStorage.setItem('language', lang)
    }

    const t = (key: string): string => {
        return translations[language][key as keyof typeof translations[typeof language]] || key
    }

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t, mounted }}>
            {children}
        </LanguageContext.Provider>
    )
}

export function useLanguage() {
    const context = useContext(LanguageContext)
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider')
    }
    return context
} 