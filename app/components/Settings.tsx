'use client'

import { useState } from 'react'
import { Settings as SettingsIcon, Sun, Moon, Globe, X } from 'lucide-react'
import { useTheme } from '../contexts/ThemeContext'
import { useLanguage } from '../contexts/LanguageContext'

export default function Settings() {
    const [isOpen, setIsOpen] = useState(false)
    const { theme, toggleTheme, mounted: themeMounted } = useTheme()
    const { language, setLanguage, t, mounted: langMounted } = useLanguage()

    // Prevent hydration mismatch
    if (!themeMounted || !langMounted) {
        return null
    }

    return (
        <>
            {/* Settings Button */}
            <button
                onClick={() => setIsOpen(true)}
                className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-colors z-50"
                title={t('settings.theme')}
            >
                <SettingsIcon className="h-6 w-6" />
            </button>

            {/* Settings Modal */}
            {isOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-md w-full p-6">
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                                {t('settings.theme')}
                            </h2>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                            >
                                <X className="h-6 w-6" />
                            </button>
                        </div>

                        {/* Theme Settings */}
                        <div className="mb-6">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                                <Sun className="h-5 w-5 mr-2" />
                                {t('settings.theme')}
                            </h3>
                            <div className="space-y-3">
                                <button
                                    onClick={() => {
                                        if (theme !== 'light') toggleTheme()
                                        setIsOpen(false)
                                    }}
                                    className={`w-full flex items-center justify-between p-3 rounded-lg border transition-colors ${theme === 'light'
                                        ? 'bg-blue-50 border-blue-200 text-blue-700 dark:bg-blue-900 dark:border-blue-700 dark:text-blue-300'
                                        : 'bg-gray-50 border-gray-200 text-gray-700 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600'
                                        }`}
                                >
                                    <div className="flex items-center">
                                        <Sun className="h-5 w-5 mr-3" />
                                        <span>{t('settings.theme.light')}</span>
                                    </div>
                                    {theme === 'light' && (
                                        <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                                    )}
                                </button>

                                <button
                                    onClick={() => {
                                        if (theme !== 'dark') toggleTheme()
                                        setIsOpen(false)
                                    }}
                                    className={`w-full flex items-center justify-between p-3 rounded-lg border transition-colors ${theme === 'dark'
                                        ? 'bg-blue-50 border-blue-200 text-blue-700 dark:bg-blue-900 dark:border-blue-700 dark:text-blue-300'
                                        : 'bg-gray-50 border-gray-200 text-gray-700 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600'
                                        }`}
                                >
                                    <div className="flex items-center">
                                        <Moon className="h-5 w-5 mr-3" />
                                        <span>{t('settings.theme.dark')}</span>
                                    </div>
                                    {theme === 'dark' && (
                                        <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                                    )}
                                </button>
                            </div>
                        </div>

                        {/* Language Settings */}
                        <div className="mb-6">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                                <Globe className="h-5 w-5 mr-2" />
                                {t('settings.language')}
                            </h3>
                            <div className="space-y-3">
                                <button
                                    onClick={() => {
                                        setLanguage('vi')
                                        setIsOpen(false)
                                    }}
                                    className={`w-full flex items-center justify-between p-3 rounded-lg border transition-colors ${language === 'vi'
                                        ? 'bg-blue-50 border-blue-200 text-blue-700 dark:bg-blue-900 dark:border-blue-700 dark:text-blue-300'
                                        : 'bg-gray-50 border-gray-200 text-gray-700 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600'
                                        }`}
                                >
                                    <span>🇻🇳 Tiếng Việt</span>
                                    {language === 'vi' && (
                                        <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                                    )}
                                </button>

                                <button
                                    onClick={() => {
                                        setLanguage('en')
                                        setIsOpen(false)
                                    }}
                                    className={`w-full flex items-center justify-between p-3 rounded-lg border transition-colors ${language === 'en'
                                        ? 'bg-blue-50 border-blue-200 text-blue-700 dark:bg-blue-900 dark:border-blue-700 dark:text-blue-300'
                                        : 'bg-gray-50 border-gray-200 text-gray-700 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600'
                                        }`}
                                >
                                    <span>🇺🇸 English</span>
                                    {language === 'en' && (
                                        <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                                    )}
                                </button>
                            </div>
                        </div>

                        {/* Close Button */}
                        <button
                            onClick={() => setIsOpen(false)}
                            className="w-full bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 py-2 px-4 rounded-lg transition-colors"
                        >
                            {t('common.back')}
                        </button>
                    </div>
                </div>
            )}
        </>
    )
} 