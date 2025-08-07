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
        'settings.theme.auto': 'Tự động'
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
        'settings.theme.auto': 'Auto'
    }
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
    const [language, setLanguageState] = useState<Language>('vi')
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
        // Lấy language từ localStorage
        const savedLanguage = localStorage.getItem('language') as Language
        if (savedLanguage) {
            setLanguageState(savedLanguage)
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