"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { Globe, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

const TravelMoneyLogo = () => (
  <Link href="/" className="flex items-center">
    {/* Black Logo - Stylized paper airplane */}
    <div className="w-8 h-8 relative">
      <Image
        src="/images/Branding.webp"
        alt="TravelMoney Logo"
        width={32}
        height={32}
        className="object-contain"
        priority
      />
    </div>
  </Link>
)

const Navigation = () => {
  return (
    <nav className="w-full py-8 px-8 lg:px-16">
      <div className="max-w-7xl mx-auto flex items-center justify-between navbar">
        {/* Logo */}
        <TravelMoneyLogo />

        {/* Navigation Links */}
        <div className="hidden lg:flex items-center space-x-10">
          <Link
            href="/shoppers"
            className="flex items-center gap-2 text-gray-500 hover:text-gray-700 transition-colors text-base font-normal"
          >
            Shoppers
            <ChevronDown className="w-4 h-4 text-gray-400" />
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
            <ChevronDown className="w-4 h-4 text-gray-400" />
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

        {/* Language Selector */}
        <div className="flex items-center">
          <Button
            variant="outline"
            className="h-10 px-4 py-2 rounded-lg border-gray-300 bg-white hover:bg-gray-50 text-black font-normal flex items-center gap-3 lan-btn"
          >
            <Globe className="w-4 h-4 text-black" />
            <span>EN</span>
            <div className="w-px h-4 bg-gray-300"></div>
            <ChevronDown className="w-4 h-4 text-black" />
          </Button>
        </div>
      </div>
    </nav>
  )
}

export { Navigation }