import forexBrokersData from '../data/forex-brokers.json'
import cryptoBrokersData from '../data/crypto-brokers.json'
import forexNewsData from '../data/forex-news.json'
import cryptoNewsData from '../data/crypto-news.json'
import knowledgeData from '../data/knowledge.json'

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

// Data exports
export const forexBrokers: ForexBroker[] = forexBrokersData as ForexBroker[]
export const cryptoBrokers: CryptoBroker[] = cryptoBrokersData as CryptoBroker[]
export const forexNews: NewsArticle[] = forexNewsData as NewsArticle[]
export const cryptoNews: NewsArticle[] = cryptoNewsData as NewsArticle[]
export const knowledge: KnowledgeItem[] = knowledgeData as KnowledgeItem[]

// Utility functions
export function getForexBrokerById(id: number): ForexBroker | undefined {
    return forexBrokers.find(broker => broker.id === id)
}

export function getCryptoBrokerById(id: number): CryptoBroker | undefined {
    return cryptoBrokers.find(broker => broker.id === id)
}

export function getForexNewsById(id: number): NewsArticle | undefined {
    return forexNews.find(article => article.id === id)
}

export function getCryptoNewsById(id: number): NewsArticle | undefined {
    return cryptoNews.find(article => article.id === id)
}

export function getKnowledgeById(id: number): KnowledgeItem | undefined {
    return knowledge.find(item => item.id === id)
}

export function getForexNewsByCategory(category: string): NewsArticle[] {
    return forexNews.filter(article => article.category === category)
}

export function getCryptoNewsByCategory(category: string): NewsArticle[] {
    return cryptoNews.filter(article => article.category === category)
}

export function getKnowledgeByCategory(category: string): KnowledgeItem[] {
    return knowledge.filter(item => item.category === category)
}

export function getKnowledgeByLevel(level: string): KnowledgeItem[] {
    return knowledge.filter(item => item.level === level)
}

export function searchForexBrokers(query: string): ForexBroker[] {
    const lowercaseQuery = query.toLowerCase()
    return forexBrokers.filter(broker => 
        broker.name.toLowerCase().includes(lowercaseQuery) ||
        broker.description.toLowerCase().includes(lowercaseQuery) ||
        broker.features.some(feature => feature.toLowerCase().includes(lowercaseQuery))
    )
}

export function searchCryptoBrokers(query: string): CryptoBroker[] {
    const lowercaseQuery = query.toLowerCase()
    return cryptoBrokers.filter(broker => 
        broker.name.toLowerCase().includes(lowercaseQuery) ||
        broker.description.toLowerCase().includes(lowercaseQuery) ||
        broker.features.some(feature => feature.toLowerCase().includes(lowercaseQuery)) ||
        broker.supportedCoins.some(coin => coin.toLowerCase().includes(lowercaseQuery))
    )
}

export function searchForexNews(query: string): NewsArticle[] {
    const lowercaseQuery = query.toLowerCase()
    return forexNews.filter(article => 
        article.title.toLowerCase().includes(lowercaseQuery) ||
        article.excerpt.toLowerCase().includes(lowercaseQuery) ||
        article.content.toLowerCase().includes(lowercaseQuery) ||
        article.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
    )
}

export function searchCryptoNews(query: string): NewsArticle[] {
    const lowercaseQuery = query.toLowerCase()
    return cryptoNews.filter(article => 
        article.title.toLowerCase().includes(lowercaseQuery) ||
        article.excerpt.toLowerCase().includes(lowercaseQuery) ||
        article.content.toLowerCase().includes(lowercaseQuery) ||
        article.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
    )
}

export function searchKnowledge(query: string): KnowledgeItem[] {
    const lowercaseQuery = query.toLowerCase()
    return knowledge.filter(item => 
        item.title.toLowerCase().includes(lowercaseQuery) ||
        item.excerpt.toLowerCase().includes(lowercaseQuery) ||
        item.content.toLowerCase().includes(lowercaseQuery) ||
        item.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
    )
} 