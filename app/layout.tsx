import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from './contexts/ThemeContext'
import { LanguageProvider } from './contexts/LanguageContext'
import Settings from './components/Settings'
import ThemeWrapper from './components/ThemeWrapper'
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
        <html lang="vi" suppressHydrationWarning>
            <head>
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
                            (function() {
                                try {
                                    var theme = localStorage.getItem('theme');
                                    var systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                                    var initialTheme = theme || systemTheme;
                                    document.documentElement.classList.add(initialTheme);
                                } catch (e) {}
                            })();
                        `,
                    }}
                />
            </head>
            <body className={inter.className}>
                <ThemeProvider>
                    <LanguageProvider>
                        <ThemeWrapper>
                            <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
                                {children}
                                <Settings />
                            </div>
                        </ThemeWrapper>
                    </LanguageProvider>
                </ThemeProvider>
            </body>
        </html>
    )
} 