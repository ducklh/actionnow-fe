/** @type {import('next').NextConfig} */
const nextConfig = {
    // App Router đã được kích hoạt mặc định trong Next.js 13+

    // Cấu hình cho Docker
    output: 'standalone',

    // Tắt warning về extra attributes
    experimental: {
        // Các experimental features khác có thể thêm ở đây
    },

    // Cấu hình images để cho phép placeholder.com
    images: {
        domains: ['via.placeholder.com'],
    },
}

module.exports = nextConfig 