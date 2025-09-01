"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { Globe, ChevronDown, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <nav className="w-full py-4 px-4 sm:py-6 sm:px-6 lg:py-8 lg:px-16">
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
            Shoppers
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
            Merchants
          </Link>
          <Link
            href="/blog"
            className="flex items-center gap-2 text-gray-500 hover:text-gray-700 transition-colors text-base font-normal"
          >
            Blog
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
            FAQ
          </Link>
          <Link
            href="/about"
            className="text-gray-500 hover:text-gray-700 transition-colors text-base font-normal"
          >
            About
          </Link>
          <Link
            href="/extension"
            className="text-gray-500 hover:text-gray-700 transition-colors text-base font-normal"
          >
            Extension
          </Link>
        </div>

        {/* Right Side - Language Selector & Mobile Menu Button */}
        <div className="flex items-center gap-4">
          {/* Language Selector - Hidden on mobile */}
          <div className="hidden sm:flex items-center flex-shrink-0">
            <Button
              variant="outline"
              className="h-9 sm:h-10 px-3 sm:px-4 py-2 rounded-lg border-gray-300 bg-white hover:bg-gray-50 text-black font-normal flex items-center gap-2 sm:gap-3 lan-btn"
            >
              <Globe className="w-4 h-4 text-black" />
              <span>EN</span>
              <div className="w-px h-4 bg-gray-300"></div>
              <ChevronDown className="w-4 h-4 text-black" />
            </Button>
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
                <span>Shoppers</span>
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
                Merchants
              </Link>
              <Link
                href="/blog"
                className="flex items-center justify-between text-gray-700 hover:text-black transition-colors text-base font-medium py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span>Blog</span>
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
                FAQ
              </Link>
              <Link
                href="/about"
                className="block text-gray-700 hover:text-black transition-colors text-base font-medium py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/extension"
                className="block text-gray-700 hover:text-black transition-colors text-base font-medium py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Extension
              </Link>
            </div>

            {/* Mobile Language Selector */}
            <div className="pt-4 border-t border-gray-200">
              <Button
                variant="outline"
                className="w-full h-10 px-4 py-2 rounded-lg border-gray-300 bg-white hover:bg-gray-50 text-black font-normal flex items-center justify-center gap-3"
              >
                <Globe className="w-4 h-4 text-black" />
                <span>EN</span>
                <div className="w-px h-4 bg-gray-300"></div>
                <ChevronDown className="w-4 h-4 text-black" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

export { Navigation }