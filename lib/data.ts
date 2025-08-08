import forexBrokersDataVi from '../data/forex-brokers.json'
import forexBrokersDataEn from '../data/forex-brokers-en.json'
import cryptoBrokersDataVi from '../data/crypto-brokers.json'
import cryptoBrokersDataEn from '../data/crypto-brokers-en.json'
import forexNewsDataVi from '../data/forex-news.json'
import forexNewsDataEn from '../data/forex-news-en.json'
import cryptoNewsDataVi from '../data/crypto-news.json'
import cryptoNewsDataEn from '../data/crypto-news-en.json'
import knowledgeDataVi from '../data/knowledge.json'
import knowledgeDataEn from '../data/knowledge-en.json'

// Types
export interface ForexBroker {
    id: number
    name: string
    logo: string
    url: string
    description: string
    rating: number
    features: string[]
    regulation: string
    minDeposit: string
    spreads: string
    leverage: string
    platforms: string[]
    instruments: string[]
    pros: string[]
    cons: string[]
    founded: string
    headquarters: string
    languages: string[]
    support: string[]
    paymentMethods: string[]
}

export interface CryptoBroker {
    id: number
    name: string
    logo: string
    url: string
    description: string
    rating: number
    features: string[]
    regulation: string
    minDeposit: string
    tradingFees: string
    supportedCoins: string[]
    pros: string[]
    cons: string[]
    founded: string
    headquarters: string
    tradingVolume: string
    securityFeatures: string[]
    paymentMethods: string[]
    customerSupport: string[]
    mobileApp: boolean
    apiSupport: boolean
    detailedDescription: string
}

export interface NewsArticle {
    id: number
    title: string
    excerpt: string
    content: string
    category: string
    author: string
    publishedAt: string
    readTime: number
    image: string
    tags: string[]
}

export interface KnowledgeItem {
    id: number
    title: string
    excerpt: string
    content: string
    category: string
    level: string
    author: string
    publishedAt: string
    readTime: number
    image: string
    tags: string[]
}

// Language-aware data functions
export function getForexBrokers(language: 'vi' | 'en' = 'vi'): ForexBroker[] {
    return language === 'en' ? forexBrokersDataEn as ForexBroker[] : forexBrokersDataVi as ForexBroker[]
}

export function getCryptoBrokers(language: 'vi' | 'en' = 'vi'): CryptoBroker[] {
    return language === 'en' ? cryptoBrokersDataEn as CryptoBroker[] : cryptoBrokersDataVi as CryptoBroker[]
}

export function getForexNews(language: 'vi' | 'en' = 'vi'): NewsArticle[] {
    return language === 'en' ? forexNewsDataEn as NewsArticle[] : forexNewsDataVi as NewsArticle[]
}

export function getCryptoNews(language: 'vi' | 'en' = 'vi'): NewsArticle[] {
    return language === 'en' ? cryptoNewsDataEn as NewsArticle[] : cryptoNewsDataVi as NewsArticle[]
}

export function getKnowledge(language: 'vi' | 'en' = 'vi'): KnowledgeItem[] {
    return language === 'en' ? knowledgeDataEn as KnowledgeItem[] : knowledgeDataVi as KnowledgeItem[]
}

// Backward compatibility - default to Vietnamese
export const forexBrokers: ForexBroker[] = forexBrokersDataVi as ForexBroker[]
export const cryptoBrokers: CryptoBroker[] = cryptoBrokersDataVi as CryptoBroker[]
export const forexNews: NewsArticle[] = forexNewsDataVi as NewsArticle[]
export const cryptoNews: NewsArticle[] = cryptoNewsDataVi as NewsArticle[]
export const knowledge: KnowledgeItem[] = knowledgeDataVi as KnowledgeItem[]

// Utility functions with language support
export function getForexBrokerById(id: number, language: 'vi' | 'en' = 'vi'): ForexBroker | undefined {
    const brokers = getForexBrokers(language)
    return brokers.find(broker => broker.id === id)
}

export function getCryptoBrokerById(id: number, language: 'vi' | 'en' = 'vi'): CryptoBroker | undefined {
    const brokers = getCryptoBrokers(language)
    return brokers.find(broker => broker.id === id)
}

export function getForexNewsById(id: number, language: 'vi' | 'en' = 'vi'): NewsArticle | undefined {
    const news = getForexNews(language)
    return news.find(article => article.id === id)
}

export function getCryptoNewsById(id: number, language: 'vi' | 'en' = 'vi'): NewsArticle | undefined {
    const news = getCryptoNews(language)
    return news.find(article => article.id === id)
}

export function getKnowledgeById(id: number, language: 'vi' | 'en' = 'vi'): KnowledgeItem | undefined {
    const knowledge = getKnowledge(language)
    return knowledge.find(item => item.id === id)
}

export function getForexNewsByCategory(category: string, language: 'vi' | 'en' = 'vi'): NewsArticle[] {
    const news = getForexNews(language)
    return news.filter(article => article.category === category)
}

export function getCryptoNewsByCategory(category: string, language: 'vi' | 'en' = 'vi'): NewsArticle[] {
    const news = getCryptoNews(language)
    return news.filter(article => article.category === category)
}

export function getKnowledgeByCategory(category: string, language: 'vi' | 'en' = 'vi'): KnowledgeItem[] {
    const knowledge = getKnowledge(language)
    return knowledge.filter(item => item.category === category)
}

export function getKnowledgeByLevel(level: string, language: 'vi' | 'en' = 'vi'): KnowledgeItem[] {
    const knowledge = getKnowledge(language)
    return knowledge.filter(item => item.level === level)
}

export function searchForexBrokers(query: string, language: 'vi' | 'en' = 'vi'): ForexBroker[] {
    const brokers = getForexBrokers(language)
    const lowercaseQuery = query.toLowerCase()
    return brokers.filter(broker =>
        broker.name.toLowerCase().includes(lowercaseQuery) ||
        broker.description.toLowerCase().includes(lowercaseQuery) ||
        broker.features.some(feature => feature.toLowerCase().includes(lowercaseQuery))
    )
}

export function searchCryptoBrokers(query: string, language: 'vi' | 'en' = 'vi'): CryptoBroker[] {
    const brokers = getCryptoBrokers(language)
    const lowercaseQuery = query.toLowerCase()
    return brokers.filter(broker =>
        broker.name.toLowerCase().includes(lowercaseQuery) ||
        broker.description.toLowerCase().includes(lowercaseQuery) ||
        broker.features.some(feature => feature.toLowerCase().includes(lowercaseQuery)) ||
        broker.supportedCoins.some(coin => coin.toLowerCase().includes(lowercaseQuery))
    )
}

export function searchForexNews(query: string, language: 'vi' | 'en' = 'vi'): NewsArticle[] {
    const news = getForexNews(language)
    const lowercaseQuery = query.toLowerCase()
    return news.filter(article =>
        article.title.toLowerCase().includes(lowercaseQuery) ||
        article.excerpt.toLowerCase().includes(lowercaseQuery) ||
        article.content.toLowerCase().includes(lowercaseQuery) ||
        article.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
    )
}

export function searchCryptoNews(query: string, language: 'vi' | 'en' = 'vi'): NewsArticle[] {
    const news = getCryptoNews(language)
    const lowercaseQuery = query.toLowerCase()
    return news.filter(article =>
        article.title.toLowerCase().includes(lowercaseQuery) ||
        article.excerpt.toLowerCase().includes(lowercaseQuery) ||
        article.content.toLowerCase().includes(lowercaseQuery) ||
        article.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
    )
}

export function searchKnowledge(query: string, language: 'vi' | 'en' = 'vi'): KnowledgeItem[] {
    const knowledge = getKnowledge(language)
    const lowercaseQuery = query.toLowerCase()
    return knowledge.filter(item =>
        item.title.toLowerCase().includes(lowercaseQuery) ||
        item.excerpt.toLowerCase().includes(lowercaseQuery) ||
        item.content.toLowerCase().includes(lowercaseQuery) ||
        item.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
    )
} 