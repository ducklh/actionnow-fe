// API Configuration
export const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:8080'

// API Endpoints
export const API_ENDPOINTS = {
    FOREX_BROKERS: `${API_BASE_URL}/api/forex-brokers`,
    CRYPTO_BROKERS: `${API_BASE_URL}/api/crypto-brokers`,
    NEWS: `${API_BASE_URL}/api/news`,
    KNOWLEDGE: `${API_BASE_URL}/api/knowledge`,
} as const

// API Response Types
export interface ApiResponse<T> {
    data: T[]
    total: number
    page: number
    limit: number
}

// API Functions
export async function fetchApi<T>(endpoint: string): Promise<T[]> {
    try {
        const response = await fetch(endpoint)
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`)
        }
        const data: ApiResponse<T> = await response.json()
        return data.data || data
    } catch (error) {
        console.error('API fetch error:', error)
        throw error
    }
}

// Function để lấy dữ liệu đơn lẻ (không phải array)
export async function fetchApiSingle<T>(endpoint: string): Promise<T> {
    try {
        const response = await fetch(endpoint)
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`)
        }
        const data = await response.json()
        return data
    } catch (error) {
        console.error('API fetch error:', error)
        throw error
    }
}

// Specific API functions
export const forexBrokersApi = {
    getAll: () => fetchApi(API_ENDPOINTS.FOREX_BROKERS),
    getById: (id: string) => fetchApiSingle(`${API_ENDPOINTS.FOREX_BROKERS}/${id}`),
}

export const cryptoBrokersApi = {
    getAll: () => fetchApi(API_ENDPOINTS.CRYPTO_BROKERS),
    getById: (id: string) => fetchApiSingle(`${API_ENDPOINTS.CRYPTO_BROKERS}/${id}`),
}

export const newsApi = {
    getAll: () => fetchApi(API_ENDPOINTS.NEWS),
}

export const knowledgeApi = {
    getAll: () => fetchApi(API_ENDPOINTS.KNOWLEDGE),
}
