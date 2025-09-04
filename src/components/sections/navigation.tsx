"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { Globe, ChevronDown, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/LanguageContext"

const TravelMoneyLogo = () => (
  <Link href="/" className="flex items-center">
    {/* Black Logo - Stylized paper airplane */}
    <div className="w-6 h-6 sm:w-8 sm:h-8 relative">
      <img
        src="/images/Branding.webp"
        alt="TravelMoney Logo"
        width={32}
        height={32}
        className="object-contain w-full h-full"
        style={{
          backgroundColor: 'transparent',
          background: 'transparent',
          mixBlendMode: 'multiply'
        }}
      />
    </div>
  </Link>
)

const Navigation = () => {
  const router = useRouter()
  const { t } = useLanguage()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = React.useState(false)
  const [selectedLanguage, setSelectedLanguage] = React.useState('EN')

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const toggleLanguageDropdown = () => {
    setIsLanguageDropdownOpen(!isLanguageDropdownOpen)
  }

  const handleLanguageChange = (language: string, code: string) => {
    setSelectedLanguage(language)
    setIsLanguageDropdownOpen(false)
    // Store selected language in localStorage for persistence
    localStorage.setItem('selectedLanguage', code)
    // Navigate to language-specific path using Next.js router
    router.push(`/${code}`)
    // Trigger a custom event to notify other components of language change
    window.dispatchEvent(new CustomEvent('languageChanged', { detail: { code, name: language } }))
  }

  // Initialize language from URL or localStorage
  React.useEffect(() => {
    const currentPath = window.location.pathname
    const pathLanguage = currentPath.split('/')[1] // Get language from URL path

    if (pathLanguage && ['en', 'fr', 'es'].includes(pathLanguage)) {
      // Language from URL
      const language = languages.find(lang => lang.code === pathLanguage)
      if (language) {
        setSelectedLanguage(language.name)
        localStorage.setItem('selectedLanguage', pathLanguage)
      }
    } else {
      // Default to English and redirect to /en
      setSelectedLanguage('EN')
      localStorage.setItem('selectedLanguage', 'en')
      router.push('/en')
    }
  }, [router])

  // Listen for URL changes to update language dropdown
  React.useEffect(() => {
    const handleUrlChange = () => {
      const currentPath = window.location.pathname
      const pathLanguage = currentPath.split('/')[1]

      if (pathLanguage && ['en', 'fr', 'es'].includes(pathLanguage)) {
        const language = languages.find(lang => lang.code === pathLanguage)
        if (language) {
          setSelectedLanguage(language.name)
        }
      }
    }

    // Listen for popstate events (back/forward navigation)
    window.addEventListener('popstate', handleUrlChange)

    return () => {
      window.removeEventListener('popstate', handleUrlChange)
    }
  }, [])

  // Close dropdown when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isLanguageDropdownOpen) {
        const target = event.target as Element
        if (!target.closest('.language-dropdown')) {
          setIsLanguageDropdownOpen(false)
        }
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isLanguageDropdownOpen])

  const languages = [
    { code: 'en', name: 'EN', fullName: 'English' },
    { code: 'fr', name: 'FR', fullName: 'Français' },
    { code: 'es', name: 'ES', fullName: 'Español' }
  ]

  return (
    <nav className="w-full py-4 px-4 sm:py-6 sm:px-6 lg:py-8 lg:px-16" style={{ backgroundColor: '#C7FBFF' }}>
      <div className="mx-auto flex items-center justify-between navbar">
        {/* Logo */}
        <div className="flex-shrink-0">
          <TravelMoneyLogo />
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-16">
          <Link
            href="/shoppers"
            className="flex items-center gap-2 text-gray-500 hover:text-gray-700 transition-colors text-base font-normal"
          >
            {t('nav.shoppers')}
            <img
              src="/images/ArrowDownRight.webp"
              alt="Arrow Down Right"
              width={16}
              height={16}
              className="text-gray-400"
              style={{
                backgroundColor: 'transparent',
                background: 'transparent',
                mixBlendMode: 'multiply'
              }}
            />
          </Link>
          <Link
            href="/merchants"
            className="text-gray-500 hover:text-gray-700 transition-colors text-base font-normal"
          >
            {t('nav.merchants')}
          </Link>
          <Link
            href="/blog"
            className="flex items-center gap-2 text-gray-500 hover:text-gray-700 transition-colors text-base font-normal"
          >
            {t('nav.blog')}
            <img
              src="/images/ArrowDownRight.webp"
              alt="Arrow Down Right"
              width={16}
              height={16}
              className="text-gray-400"
              style={{
                backgroundColor: 'transparent',
                background: 'transparent',
                mixBlendMode: 'multiply'
              }}
            />
          </Link>
          <Link
            href="/faq"
            className="text-gray-500 hover:text-gray-700 transition-colors text-base font-normal"
          >
            {t('nav.faq')}
          </Link>
          <Link
            href="/about"
            className="text-gray-500 hover:text-gray-700 transition-colors text-base font-normal"
          >
            {t('nav.about')}
          </Link>
          <Link
            href="/extension"
            className="text-gray-500 hover:text-gray-700 transition-colors text-base font-normal"
          >
            {t('nav.extension')}
          </Link>
        </div>

        {/* Right Side - Language Selector & Mobile Menu Button */}
        <div className="flex items-center gap-4">
          {/* Language Selector - Hidden on mobile */}
          <div className="hidden sm:flex items-center flex-shrink-0 relative language-dropdown">
            <Button
              variant="outline"
              onClick={toggleLanguageDropdown}
              className="h-9 sm:h-10 px-3 sm:px-4 py-2 rounded-lg border-gray-300 bg-white hover:bg-gray-50 text-black font-normal flex items-center gap-2 sm:gap-3 lan-btn"
            >
              <Globe className="w-4 h-4 text-black" />
              <span>{selectedLanguage}</span>
              <div className="w-px h-4 bg-gray-300"></div>
              <ChevronDown className="w-4 h-4 text-black" />
            </Button>

            {/* Language Dropdown */}
            {isLanguageDropdownOpen && (
              <div className="absolute top-full right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                {languages.map((language) => (
                  <button
                    key={language.code}
                    onClick={() => handleLanguageChange(language.name, language.code)}
                    className="w-full px-4 py-3 text-left hover:bg-gray-50 transition-colors flex items-center justify-between"
                  >
                    <span className="text-gray-700">{language.fullName}</span>
                    <span className="text-gray-500 text-sm">{language.name}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden p-2 rounded-lg border border-gray-300 bg-white hover:bg-gray-50 transition-colors"
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5 text-black" />
            ) : (
              <Menu className="w-5 h-5 text-black" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden mt-4 px-4 sm:px-6">
          <div className="bg-white rounded-lg border border-gray-200 shadow-lg p-6 space-y-4">
            {/* Mobile Navigation Links */}
            <div className="space-y-3">
              <Link
                href="/shoppers"
                className="flex items-center justify-between text-gray-700 hover:text-black transition-colors text-base font-medium py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span>{t('nav.shoppers')}</span>
                <img
                  src="/images/ArrowDownRight.webp"
                  alt="Arrow Down Right"
                  width={16}
                  height={16}
                  className="text-gray-400"
                  style={{
                    backgroundColor: 'transparent',
                    background: 'transparent',
                    mixBlendMode: 'multiply'
                  }}
                />
              </Link>
              <Link
                href="/merchants"
                className="block text-gray-700 hover:text-black transition-colors text-base font-medium py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t('nav.merchants')}
              </Link>
              <Link
                href="/blog"
                className="flex items-center justify-between text-gray-700 hover:text-black transition-colors text-base font-medium py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span>{t('nav.blog')}</span>
                <img
                  src="/images/ArrowDownRight.webp"
                  alt="Arrow Down Right"
                  width={16}
                  height={16}
                  className="text-gray-400"
                  style={{
                    backgroundColor: 'transparent',
                    background: 'transparent',
                    mixBlendMode: 'multiply'
                  }}
                />
              </Link>
              <Link
                href="/faq"
                className="block text-gray-700 hover:text-black transition-colors text-base font-medium py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t('nav.faq')}
              </Link>
              <Link
                href="/about"
                className="block text-gray-700 hover:text-black transition-colors text-base font-medium py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t('nav.about')}
              </Link>
              <Link
                href="/extension"
                className="block text-gray-700 hover:text-black transition-colors text-base font-medium py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t('nav.extension')}
              </Link>
            </div>

            {/* Mobile Language Selector */}
            <div className="pt-4 border-t border-gray-200">
              <div className="space-y-2">
                {languages.map((language) => (
                  <button
                    key={language.code}
                    onClick={() => handleLanguageChange(language.name, language.code)}
                    className={`w-full px-4 py-3 rounded-lg border transition-colors flex items-center justify-between ${selectedLanguage === language.name
                      ? 'border-blue-500 bg-blue-50 text-blue-700'
                      : 'border-gray-300 bg-white hover:bg-gray-50 text-gray-700'
                      }`}
                  >
                    <div className="flex items-center gap-3">
                      <Globe className="w-4 h-4" />
                      <span className="font-medium">{language.fullName}</span>
                    </div>
                    <span className="text-sm text-gray-500">{language.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

export { Navigation }