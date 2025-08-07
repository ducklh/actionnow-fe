'use client'

import { useEffect, useState } from 'react'
import { useTheme } from '../contexts/ThemeContext'

export default function ThemeWrapper({ children }: { children: React.ReactNode }) {
    const { mounted } = useTheme()
    const [isClient, setIsClient] = useState(false)

    useEffect(() => {
        setIsClient(true)
    }, [])

    // Prevent hydration mismatch by not rendering until client-side
    if (!isClient || !mounted) {
        return (
            <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
                {children}
            </div>
        )
    }

    return <>{children}</>
} 