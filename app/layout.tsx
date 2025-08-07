import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
// import './output.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Action Now - Tin tức và Sàn Forex',
    description: 'Website cung cấp thông tin về các sàn forex và tin tức thị trường',
    icons: {
        icon: '/logo.ico',
        shortcut: '/logo.ico',
        apple: '/logo.ico',
    },
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="vi">
            <body className={inter.className}>
                <div className="min-h-screen bg-gray-50">
                    {children}
                </div>
            </body>
        </html>
    )
} 