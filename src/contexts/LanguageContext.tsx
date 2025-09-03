"use client"

import React, { createContext, useContext, useState, useEffect } from 'react'

interface LanguageContextType {
    language: string
    setLanguage: (lang: string) => void
    t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

// Translation data
const translations = {
    en: {
        'hero.title': 'Welcome to the',
        'hero.subtitle': 'future of travel shopping',
        'hero.description': 'Shop abroad in three easy steps.',
        'hero.subdescription': 'Check the country rules for tax-free shopping and get your refund.',
        'nav.shoppers': 'Shoppers',
        'nav.merchants': 'Merchants',
        'nav.blog': 'Blog',
        'nav.faq': 'FAQ',
        'nav.about': 'About',
        'nav.extension': 'Extension'
    },
    fr: {
        'hero.title': 'Bienvenue dans',
        'hero.subtitle': 'l\'avenir du shopping voyage',
        'hero.description': 'Achetez à l\'étranger en trois étapes simples.',
        'hero.subdescription': 'Vérifiez les règles du pays pour les achats hors taxes et obtenez votre remboursement.',
        'nav.shoppers': 'Acheteurs',
        'nav.merchants': 'Commerçants',
        'nav.blog': 'Blog',
        'nav.faq': 'FAQ',
        'nav.about': 'À propos',
        'nav.extension': 'Extension'
    },
    es: {
        'hero.title': 'Bienvenido al',
        'hero.subtitle': 'futuro de las compras de viaje',
        'hero.description': 'Compra en el extranjero en tres pasos fáciles.',
        'hero.subdescription': 'Verifica las reglas del país para compras libres de impuestos y obtén tu reembolso.',
        'nav.shoppers': 'Compradores',
        'nav.merchants': 'Comerciantes',
        'nav.blog': 'Blog',
        'nav.faq': 'FAQ',
        'nav.about': 'Acerca de',
        'nav.extension': 'Extensión'
    }
}

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [language, setLanguage] = useState('en')

    useEffect(() => {
        // Load language from URL or localStorage
        const currentPath = window.location.pathname
        const pathLanguage = currentPath.split('/')[1] // Get language from URL path

        if (pathLanguage && ['en', 'fr', 'es'].includes(pathLanguage)) {
            // Language from URL
            setLanguage(pathLanguage)
            localStorage.setItem('selectedLanguage', pathLanguage)
        } else {
            // Default to English
            const savedLanguage = localStorage.getItem('selectedLanguage') || 'en'
            setLanguage(savedLanguage)
        }
    }, [])

    useEffect(() => {
        // Listen for language change events
        const handleLanguageChange = (event: CustomEvent) => {
            setLanguage(event.detail.code)
        }

        window.addEventListener('languageChanged', handleLanguageChange as EventListener)
        return () => {
            window.removeEventListener('languageChanged', handleLanguageChange as EventListener)
        }
    }, [])

    const t = (key: string): string => {
        return translations[language as keyof typeof translations]?.[key as keyof typeof translations.en] || key
    }

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    )
}

export const useLanguage = () => {
    const context = useContext(LanguageContext)
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider')
    }
    return context
}
