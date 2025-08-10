'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, BookOpen, Clock, Tag, Share2, Bookmark, TrendingUp, DollarSign, Shield, BarChart3, Users, AlertTriangle, CheckCircle, Info, Zap, Settings, Brain, Target } from 'lucide-react'
import { useLanguage } from '../../contexts/LanguageContext'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { getKnowledgeDetail, getKnowledgeDetailById } from '../../../lib/data'

interface KnowledgeItem {
    id: number
    title: string
    category: string
    level: string
    readTime: string
    description: string
    icon: any
    tags: string[]
    content: string
    fullContent: string
}

export default function KnowledgeDetailPage({ params }: { params: { id: string } }) {
    const { t, language } = useLanguage()

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

    const items = getKnowledgeDetail(language).map(item => ({
        id: item.id,
        title: item.title,
        category: item.category,
        level: item.level,
        readTime: `${item.readTime} ${t('common.readTime')}`,
        description: (item as any).excerpt || '',
        icon: getIconByCategory(item.category),
        tags: item.tags || [],
        content: item.content || '',
        fullContent: (item as any).fullContent || ''
    }))

    const article = items.find(item => item.id === parseInt(params.id))

    if (!article) {
        return (
            <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <div className="text-center">
                        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Không tìm thấy bài viết</h1>
                        <p className="text-gray-600 dark:text-gray-400 mb-8">Bài viết bạn đang tìm kiếm không tồn tại.</p>
                        <Link href="/knowledge" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                            {t('common.back')}
                        </Link>
                    </div>
                </div>
            </div>
        )
    }

    const IconComponent = article.icon
    const getLevelColor = (level: string) => {
        switch (level) {
            case 'Cơ bản': return 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200'
            case 'Trung cấp': return 'bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200'
            case 'Nâng cao': return 'bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200'
            default: return 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300'
        }
    }

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
            {/* Header */}
            <Header activePage="knowledge" />

            {/* Main Content */}
            <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Article Header */}
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8 border border-gray-100 dark:border-gray-700 text-gray-900 dark:text-gray-100">
                    <div className="mb-6">
                        <div className="flex items-center mb-4">
                            <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg mr-3">
                                <IconComponent className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                            </div>
                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getLevelColor(article.level)}`}>
                                {article.level}
                            </span>
                        </div>

                        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">{article.title}</h1>
                        <p className="text-xl text-gray-700 dark:text-gray-300 mb-6">{article.description}</p>

                        {/* Article Meta */}
                        <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-6">
                            <div className="flex items-center space-x-6">
                                <div className="flex items-center">
                                    <Clock className="h-4 w-4 mr-2 text-gray-500 dark:text-gray-400" />
                                    <span className="text-gray-600 dark:text-gray-300">{article.readTime}</span>
                                </div>
                                <div className="flex items-center">
                                    <span className="text-blue-600 dark:text-blue-400 font-medium">
                                        {article.category}
                                    </span>
                                </div>
                            </div>
                            <div className="flex items-center space-x-4">
                                <button className="text-gray-500 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
                                    <Bookmark className="h-5 w-5" />
                                </button>
                                <button className="text-gray-500 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
                                    <Share2 className="h-5 w-5" />
                                </button>
                            </div>
                        </div>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2">
                            {article.tags.map((tag, index) => (
                                <span
                                    key={index}
                                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full flex items-center"
                                >
                                    <Tag className="h-3 w-3 mr-1 text-blue-700 dark:text-blue-300" />
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Article Content */}
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 mb-8 border border-gray-100 dark:border-gray-700">
                    <div
                        className="prose prose-lg max-w-none dark:prose-invert text-gray-900 dark:text-gray-100 dark:prose-headings:text-white dark:prose-p:text-gray-200 dark:prose-li:text-gray-200 dark:prose-strong:text-white"
                        dangerouslySetInnerHTML={{ __html: article.fullContent }}
                    />
                </div>

                {/* Related Articles */}
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-gray-100 dark:border-gray-700 text-gray-900 dark:text-gray-100">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">{t('knowledge.related')}</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {items
                            .filter(item => item.id !== article.id)
                            .slice(0, 4)
                            .map((relatedArticle) => {
                                const RelatedIconComponent = relatedArticle.icon
                                return (
                                    <Link
                                        key={relatedArticle.id}
                                        href={`/knowledge/${relatedArticle.id}`}
                                        className="block bg-gray-50 dark:bg-gray-700 rounded-lg p-4 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors border border-gray-200 dark:border-gray-600"
                                    >
                                        <div className="flex items-center mb-3">
                                            <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg mr-3">
                                                <RelatedIconComponent className="h-4 w-4 text-blue-600" />
                                            </div>
                                            <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${getLevelColor(relatedArticle.level)}`}>
                                                {relatedArticle.level}
                                            </span>
                                        </div>
                                        <h3 className="font-semibold text-gray-900 dark:text-white mb-2 line-clamp-2">
                                            {relatedArticle.title}
                                        </h3>
                                        <p className="text-gray-700 dark:text-gray-300 text-sm mb-3 line-clamp-2">
                                            {relatedArticle.description}
                                        </p>
                                        <div className="flex items-center justify-between text-xs text-gray-600 dark:text-gray-300">
                                            <span className="flex items-center">
                                                <Clock className="h-3 w-3 mr-1 text-gray-500 dark:text-gray-400" />
                                                {relatedArticle.readTime}
                                            </span>
                                            <span className="text-blue-600 dark:text-blue-400 font-medium">
                                                {relatedArticle.category}
                                            </span>
                                        </div>
                                    </Link>
                                )
                            })}
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    )
} 