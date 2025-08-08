/** @type {import('next').NextConfig} */
const nextConfig = {
    // App Router đã được kích hoạt mặc định trong Next.js 13+

    // Tắt warning về extra attributes
    experimental: {
        // Tắt warning về data-locator-hook-status-message
        suppressHydrationWarning: true,
    },

    // Cấu hình images để cho phép placeholder.com
    images: {
        domains: ['via.placeholder.com'],
    },
}

module.exports = nextConfig 