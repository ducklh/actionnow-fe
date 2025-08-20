'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ArrowLeft, BookOpen, Clock, Tag, Share2, Bookmark, TrendingUp, DollarSign, Shield, BarChart3, Users, AlertTriangle, CheckCircle, Info, Zap, Settings, Brain, Target, Loader2 } from 'lucide-react'
import { useLanguage } from '../../contexts/LanguageContext'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

// Interface cho dữ liệu từ API
interface ApiKnowledgeItem {
    id: string
    title: string
    excerpt: string
    content: string
    category: string
    level: string
    author: string
    publishedAt: string
    readTime: string
    image: string
    tags: Array<{ id: string, value: string }>
    fullContent: string
}

export default function KnowledgeDetailPage({ params }: { params: { id: string } }) {
    const { t, language } = useLanguage()
    const [article, setArticle] = useState<ApiKnowledgeItem | null>(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const fetchArticle = async () => {
            try {
                setLoading(true)
                setError(null)
                const response = await fetch(`http://localhost:8080/api/knowledge-items/${params.id}`)

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`)
                }

                const data = await response.json()
                setArticle(data)
            } catch (err) {
                console.error('Error fetching knowledge article:', err)
                setError(err instanceof Error ? err.message : 'Có lỗi xảy ra khi tải dữ liệu')
            } finally {
                setLoading(false)
            }
        }

        if (params.id) {
            fetchArticle()
        }
    }, [params.id])

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

    // Loading state
    if (loading) {
        return (
            <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
                <Header activePage="knowledge" />
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                    <div className="text-center">
                        <Loader2 className="h-12 w-12 text-blue-600 mx-auto mb-4 animate-spin" />
                        <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-2">
                            {t('common.loading') || 'Đang tải dữ liệu...'}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400">
                            Vui lòng chờ trong giây lát
                        </p>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }

    // Error state
    if (error) {
        return (
            <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
                <Header activePage="knowledge" />
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                    <div className="text-center">
                        <div className="bg-red-100 dark:bg-red-900 border border-red-200 dark:border-red-800 rounded-lg p-6 max-w-md mx-auto">
                            <h3 className="text-xl font-medium text-red-800 dark:text-red-200 mb-2">
                                Lỗi khi tải dữ liệu
                            </h3>
                            <p className="text-red-600 dark:text-red-300 mb-4">
                                {error}
                            </p>
                            <button
                                onClick={() => window.location.reload()}
                                className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
                            >
                                Thử lại
                            </button>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }

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

    const IconComponent = getIconByCategory(article.category)
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
                {/* Back Button */}
                <Link
                    href="/knowledge"
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium mb-8"
                >
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    {t('common.back')}
                </Link>

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
                        <p className="text-xl text-gray-700 dark:text-gray-300 mb-6">{article.excerpt}</p>

                        {/* Article Meta */}
                        <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-6">
                            <div className="flex items-center space-x-6">
                                <div className="flex items-center">
                                    <Clock className="h-4 w-4 mr-2 text-gray-500 dark:text-gray-400" />
                                    <span className="text-gray-600 dark:text-gray-300">{article.readTime} {t('common.readTime')}</span>
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
                            {article.tags.map((tag) => (
                                <span
                                    key={tag.id}
                                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full flex items-center"
                                >
                                    <Tag className="h-3 w-3 mr-1 text-blue-700 dark:text-blue-300" />
                                    {tag.value}
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
            </main>

            <Footer />
        </div>
    )
} 