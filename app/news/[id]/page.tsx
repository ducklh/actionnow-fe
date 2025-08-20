'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ArrowLeft, Calendar, User, Clock, Share2, Bookmark, TrendingUp, Tag, Loader2 } from 'lucide-react'
import { useLanguage } from '../../contexts/LanguageContext'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

// Interface cho dữ liệu từ API
interface ApiSiteNewsArticle {
  id: string
  title: string
  excerpt: string
  content: string
  category: string
  author: string
  publishedAt: string
  readTime: string
  image: string
  fullContent: string
  tags: Array<{ id: string, value: string }>
}

export default function NewsDetailPage({ params }: { params: { id: string } }) {
  const { t, language } = useLanguage()
  const [article, setArticle] = useState<ApiSiteNewsArticle | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        setLoading(true)
        setError(null)
        const response = await fetch(`http://localhost:8080/api/site-news-articles/${params.id}`)

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }

        const data = await response.json()
        setArticle(data)
      } catch (err) {
        console.error('Error fetching news article:', err)
        setError(err instanceof Error ? err.message : 'Có lỗi xảy ra khi tải dữ liệu')
      } finally {
        setLoading(false)
      }
    }

    if (params.id) {
      fetchArticle()
    }
  }, [params.id])

  // Loading state
  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
        <Header activePage="news" />
        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center py-20">
            <Loader2 className="h-12 w-12 text-blue-600 mx-auto mb-4 animate-spin" />
            <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-2">
              {t('common.loading') || 'Đang tải dữ liệu...'}
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Vui lòng chờ trong giây lát
            </p>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  // Error state
  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
        <Header activePage="news" />
        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center py-20">
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
        </main>
        <Footer />
      </div>
    )
  }

  if (!article) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Không tìm thấy bài viết</h1>
          <Link href="/news" className="text-blue-600 hover:text-blue-700">
            {t('common.back')}
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <Header activePage="news" />

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <Link
          href="/news"
          className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium mb-8"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          {t('common.back')}
        </Link>

        {/* Article Header */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 mb-8 border border-gray-200 dark:border-gray-700">
          <div className="mb-6">
            <span className="inline-block bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-sm font-medium mb-4">
              {article.category}
            </span>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">{article.title}</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">{article.excerpt}</p>

            {/* Article Meta */}
            <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-6">
              <div className="flex items-center space-x-6">
                <div className="flex items-center">
                  <User className="h-4 w-4 mr-2" />
                  {article.author}
                </div>
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2" />
                  {new Date(article.publishedAt).toLocaleDateString(language === 'en' ? 'en-US' : 'vi-VN')}
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-2" />
                  {article.readTime} {t('common.readTime')}
                </div>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {article.tags.map((tag) => (
                <span
                  key={tag.id}
                  className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full flex items-center"
                >
                  <Tag className="h-3 w-3 mr-1" />
                  {tag.value}
                </span>
              ))}
            </div>
          </div>

          {/* Featured Image */}
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-64 object-cover rounded-lg mb-6"
          />
        </div>

        {/* Article Content */}
        {/* <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-8 mb-8 border border-gray-200 dark:border-gray-700">
          <div
            className="prose prose-lg max-w-none dark:prose-invert"
            dangerouslySetInnerHTML={{ __html: article.fullContent }}
          />
        </div> */}
      </main>

      <Footer />
    </div>
  )
} 