'use client'

import { useState } from 'react'
import Link from 'next/link'
import { BookOpen, Search, Filter, TrendingUp, DollarSign, Shield, BarChart3, Users, Clock, AlertTriangle, CheckCircle, Info, Zap, Settings, Brain, Target } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'
import { getKnowledge, KnowledgeItem as DataKnowledgeItem } from '../../lib/data'

export default function KnowledgePage() {
    const { t, language } = useLanguage()
    const [searchTerm, setSearchTerm] = useState('')
    const [selectedCategory, setSelectedCategory] = useState(language === 'en' ? 'All' : 'Tất cả')

    const categories = [
        language === 'en' ? 'All' : 'Tất cả',
        t('knowledge.basic'),
        t('knowledge.technical'),
        t('knowledge.fundamental'),
        t('knowledge.risk'),
        t('knowledge.psychology'),
        t('knowledge.strategy'),
        t('knowledge.tools')
    ]

    const rawItems = getKnowledge(language)

    const getIconByCategory = (category: string) => {
        const cat = category.toLowerCase()
        if (cat.includes('basic') || cat.includes('cơ bản')) return Info
        if (cat.includes('technical') || cat.includes('kỹ thuật')) return BarChart3
        if (cat.includes('fundamental') || cat.includes('cơ bản') || cat.includes('phân tích cơ bản')) return Users
        if (cat.includes('risk') || cat.includes('rủi ro')) return Shield
        if (cat.includes('psychology') || cat.includes('tâm lý')) return CheckCircle
        if (cat.includes('strategy') || cat.includes('chiến lược')) return TrendingUp
        if (cat.includes('tool') || cat.includes('công cụ')) return Settings
        return BookOpen
    }

    const knowledgeItems = rawItems.map(item => ({
        id: item.id,
        title: item.title,
        category: item.category,
        level: item.level,
        readTime: `${typeof (item as any).readTime === 'number' ? (item as any).readTime : String((item as any).readTime)} ${t('common.readTime')}`,
        description: (item as any).excerpt || '',
        icon: getIconByCategory(item.category),
        tags: item.tags,
        content: item.content,
    }))

    const filteredItems = knowledgeItems.filter(item => {
        const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
        const matchesCategory = (selectedCategory === 'Tất cả' || selectedCategory === 'All') || item.category === selectedCategory
        return matchesSearch && matchesCategory
    })

    const getLevelColor = (level: string) => {
        switch (level) {
            case 'Cơ bản':
            case 'Beginner':
                return 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200'
            case 'Trung cấp':
            case 'Intermediate':
                return 'bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200'
            case 'Nâng cao':
            case 'Advanced':
                return 'bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200'
            default: return 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300'
        }
    }

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
            {/* Header */}
            <header className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center py-6">
                        <div className="flex items-center">
                            <BookOpen className="h-8 w-8 text-blue-600 mr-3" />
                            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Action Now</h1>
                        </div>
                        <nav className="flex space-x-8">
                            <Link href="/" className="text-gray-500 hover:text-gray-900 transition-colors dark:text-gray-400 dark:hover:text-white">
                                {t('nav.forex')}
                            </Link>
                            <Link href="/crypto-brokers" className="text-gray-500 hover:text-orange-600 transition-colors dark:text-gray-400 dark:hover:text-orange-400">
                                Crypto Brokers
                            </Link>
                            <Link href="/crypto" className="text-gray-500 hover:text-orange-600 transition-colors dark:text-gray-400 dark:hover:text-orange-400">
                                Crypto News
                            </Link>
                            <Link href="/news" className="text-gray-500 hover:text-gray-900 transition-colors dark:text-gray-400 dark:hover:text-white">
                                {t('nav.news')}
                            </Link>
                            <Link href="/knowledge" className="text-blue-600 font-medium">
                                {t('nav.knowledge')}
                            </Link>
                        </nav>
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold mb-4">{t('knowledge.title')}</h1>
                        <p className="text-xl mb-8 max-w-3xl mx-auto">
                            {t('knowledge.subtitle')}
                        </p>
                        <div className="flex justify-center space-x-4">
                            <div className="bg-white bg-opacity-20 rounded-lg px-6 py-3">
                                <span className="text-2xl font-bold">{knowledgeItems.length}</span>
                                <p className="text-sm">{t('knowledge.articles')}</p>
                            </div>
                            <div className="bg-white bg-opacity-20 rounded-lg px-6 py-3">
                                <span className="text-2xl font-bold">{categories.length - 1}</span>
                                <p className="text-sm">{t('knowledge.categories')}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Search and Filter */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="flex flex-col lg:flex-row gap-6 mb-8">
                    <div className="flex-1">
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                            <input
                                type="text"
                                placeholder={t('knowledge.searchPlaceholder')}
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                            />
                        </div>
                    </div>
                    <div className="flex items-center space-x-4">
                        <Filter className="h-5 w-5 text-gray-400" />
                        <label className="text-sm font-medium text-gray-700 dark:text-gray-300">{t('common.category')}:</label>
                        <select
                            value={selectedCategory}
                            onChange={(e) => setSelectedCategory(e.target.value)}
                            className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                        >
                            {categories.map(category => (
                                <option key={category} value={category}>{category}</option>
                            ))}
                        </select>
                    </div>
                </div>

                {/* Knowledge Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredItems.map((item) => {
                        const IconComponent = item.icon
                        return (
                            <div key={item.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden border border-gray-100 dark:border-gray-700 flex flex-col h-full">
                                <div className="p-6 flex flex-col flex-grow">
                                    <div className="flex items-center mb-4">
                                        <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
                                            <IconComponent className="h-6 w-6 text-blue-600" />
                                        </div>
                                        <div className="ml-3">
                                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getLevelColor(item.level)}`}>
                                                {item.level}
                                            </span>
                                        </div>
                                    </div>

                                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2 line-clamp-2">
                                        {item.title}
                                    </h3>

                                    <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">
                                        {item.description}
                                    </p>

                                    <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
                                        <span className="flex items-center">
                                            <Clock className="h-4 w-4 mr-1" />
                                            {item.readTime}
                                        </span>
                                        <span className="text-blue-600 font-medium">
                                            {item.category}
                                        </span>
                                    </div>

                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {item.tags.slice(0, 3).map((tag, index) => (
                                            <span key={index} className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <Link
                                        href={`/knowledge/${item.id}`}
                                        className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors font-medium text-center block"
                                    >
                                        {t('common.readMore')}
                                    </Link>
                                </div>
                            </div>
                        )
                    })}
                </div>

                {filteredItems.length === 0 && (
                    <div className="text-center py-12">
                        <BookOpen className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                        <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">{t('knowledge.notFound.title')}</h3>
                        <p className="text-gray-500 dark:text-gray-400">{t('knowledge.notFound.subtitle')}</p>
                    </div>
                )}
            </div>

            {/* Footer */}
            <footer className="bg-gray-900 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="text-center">
                        <h3 className="text-xl font-bold mb-4">Action Now</h3>
                        <p className="text-gray-400 mb-6">
                            {t('footer.description')}
                        </p>
                        <div className="flex justify-center space-x-6">
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                {t('footer.about')}
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                {t('footer.contact')}
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                {t('footer.policy')}
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
} 