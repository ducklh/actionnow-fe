'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { ArrowLeft, Calendar, User, Clock, Share2, Bookmark, TrendingUp, Bitcoin } from 'lucide-react'
import { useLanguage } from '../../contexts/LanguageContext'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

// Import dữ liệu theo ngôn ngữ
import cryptoNewsVi from '../../../data/crypto-news.json'
import cryptoNewsEn from '../../../data/crypto-news-en.json'

interface CryptoArticle {
    id: number
    title: string
    excerpt: string
    content: string
    author: string
    date?: string
    publishedAt?: string
    category: string
    image: string
    readTime: string | number
    tags: string[]
}

export default function CryptoArticlePage() {
    const { t, language } = useLanguage()
    const params = useParams()
    const [article, setArticle] = useState<CryptoArticle | null>(null)
    const [isBookmarked, setIsBookmarked] = useState(false)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    // Chọn dữ liệu theo ngôn ngữ
    const getCryptoData = () => {
        return language === 'en' ? cryptoNewsEn : cryptoNewsVi
    }

    // Chuyển đổi dữ liệu để phù hợp với interface
    const transformArticle = (rawArticle: any): CryptoArticle => {
        return {
            id: rawArticle.id,
            title: rawArticle.title,
            excerpt: rawArticle.excerpt,
            content: rawArticle.content,
            author: rawArticle.author,
            date: rawArticle.date || rawArticle.publishedAt?.split('T')[0] || '',
            category: rawArticle.category,
            image: rawArticle.image,
            readTime: typeof rawArticle.readTime === 'number' ? `${rawArticle.readTime} phút` : rawArticle.readTime,
            tags: rawArticle.tags
        }
    }

    useEffect(() => {
        try {
            setLoading(true)
            setError(null)

            const id = parseInt(params.id as string)
            const cryptoData = getCryptoData()
            const foundArticle = cryptoData.find((a: any) => a.id === id)

            if (foundArticle) {
                const transformedArticle = transformArticle(foundArticle)
                setArticle(transformedArticle)
            } else {
                setError(language === 'en' ? 'Article not found' : 'Không tìm thấy bài viết')
            }
        } catch (err) {
            setError(language === 'en' ? 'Error loading data' : 'Có lỗi xảy ra khi tải dữ liệu')
            console.error('Error loading article:', err)
        } finally {
            setLoading(false)
        }
    }, [params.id, language])

    if (loading) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-600 mx-auto mb-4"></div>
                    <p className="text-gray-600 dark:text-gray-400">
                        {language === 'en' ? 'Loading...' : 'Đang tải...'}
                    </p>
                </div>
            </div>
        )
    }

    if (error || !article) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                        {error || (language === 'en' ? 'Article not found' : 'Không tìm thấy bài viết')}
                    </h2>
                    <Link href="/crypto" className="text-orange-600 hover:text-orange-700 font-medium">
                        {language === 'en' ? 'Back to Crypto page' : 'Quay lại trang Crypto'}
                    </Link>
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
            <Header activePage="crypto" theme="orange" />

            {/* Main Content */}
            <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Back Button */}
                <Link
                    href="/crypto"
                    className="inline-flex items-center text-orange-600 hover:text-orange-700 font-medium mb-8"
                >
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    {language === 'en' ? 'Back to Crypto page' : 'Quay lại trang Crypto'}
                </Link>

                {/* Article */}
                <article className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                    {/* Article Image */}
                    <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-64 md:h-96 object-cover"
                    />

                    {/* Article Content */}
                    <div className="p-8">
                        {/* Article Meta */}
                        <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-6">
                            <div className="flex items-center space-x-6">
                                <div className="flex items-center">
                                    <User className="h-4 w-4 mr-2" />
                                    {article.author}
                                </div>
                                <div className="flex items-center">
                                    <Calendar className="h-4 w-4 mr-2" />
                                    {article.date ? new Date(article.date).toLocaleDateString(language === 'en' ? 'en-US' : 'vi-VN') : ''}
                                </div>
                                <div className="flex items-center">
                                    <Clock className="h-4 w-4 mr-2" />
                                    {article.readTime}
                                </div>
                            </div>
                            <div className="flex items-center space-x-4">
                                <button
                                    onClick={() => setIsBookmarked(!isBookmarked)}
                                    className={`p-2 rounded-full transition-colors ${isBookmarked
                                        ? 'bg-orange-100 text-orange-600 dark:bg-orange-900 dark:text-orange-200'
                                        : 'bg-gray-100 text-gray-500 dark:bg-gray-700 dark:text-gray-400 hover:bg-orange-100 hover:text-orange-600'
                                        }`}
                                >
                                    <Bookmark className="h-4 w-4" />
                                </button>
                                <button className="p-2 bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 rounded-full hover:bg-orange-100 hover:text-orange-600 transition-colors">
                                    <Share2 className="h-4 w-4" />
                                </button>
                            </div>
                        </div>

                        {/* Category */}
                        <span className="inline-block bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-3 py-1 rounded-full text-sm font-medium mb-6">
                            {article.category}
                        </span>

                        {/* Title */}
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                            {article.title}
                        </h1>

                        {/* Excerpt */}
                        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                            {article.excerpt}
                        </p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mb-8">
                            {article.tags.map((tag, index) => (
                                <span
                                    key={index}
                                    className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-full"
                                >
                                    #{tag}
                                </span>
                            ))}
                        </div>

                        {/* Content */}
                        <div className="prose prose-lg max-w-none dark:prose-invert">
                            <div className="whitespace-pre-line text-gray-700 dark:text-gray-300 leading-relaxed">
                                {article.content}
                            </div>
                        </div>
                    </div>
                </article>

                {/* Related Articles */}
                <div className="mt-12">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                        {language === 'en' ? 'Related Articles' : 'Bài viết liên quan'}
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {getCryptoData()
                            .filter((a: any) => a.id !== article.id)
                            .slice(0, 4)
                            .map((relatedArticle: any) => {
                                const transformedRelated = transformArticle(relatedArticle)
                                return (
                                    <Link
                                        key={relatedArticle.id}
                                        href={`/crypto/${relatedArticle.id}`}
                                        className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden border border-gray-100 dark:border-gray-700"
                                    >
                                        <img
                                            src={transformedRelated.image}
                                            alt={transformedRelated.title}
                                            className="w-full h-32 object-cover"
                                        />
                                        <div className="p-4">
                                            <span className="inline-block bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-2 py-1 rounded-full text-xs font-medium mb-2">
                                                {transformedRelated.category}
                                            </span>
                                            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 line-clamp-2">
                                                {transformedRelated.title}
                                            </h4>
                                            <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                                                {transformedRelated.excerpt}
                                            </p>
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