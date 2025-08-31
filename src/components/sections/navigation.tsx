"use client"

import * as React from "react"
import Link from "next/link"
import { Globe, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

const TravelMoneyLogo = () => (
    <Link href="/" className="flex items-center gap-2">
        <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" stroke="white" strokeWidth="2" />
                <polyline points="3.27,6.96 12,12.01 20.73,6.96" stroke="white" strokeWidth="2" />
                <line x1="12" y1="22.08" x2="12" y2="12" stroke="white" strokeWidth="2" />
            </svg>
        </div>
    </Link>
)

const Navigation = () => {
    return (
        <nav className="relative z-50 w-full py-6 px-6 lg:px-12">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                {/* Logo */}
                <TravelMoneyLogo />

                {/* Navigation Links */}
                <div className="hidden lg:flex items-center space-x-8">
                    <Link
                        href="/shoppers"
                        className="flex items-center gap-1 text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium"
                    >
                        Shoppers
                        <ChevronDown className="w-4 h-4" />
                    </Link>
                    <Link
                        href="/merchants"
                        className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium"
                    >
                        Merchants
                    </Link>
                    <Link
                        href="/blog"
                        className="flex items-center gap-1 text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium"
                    >
                        Blog
                        <ChevronDown className="w-4 h-4" />
                    </Link>
                    <Link
                        href="/faq"
                        className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium"
                    >
                        FAQ
                    </Link>
                    <Link
                        href="/about"
                        className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium"
                    >
                        About
                    </Link>
                    <Link
                        href="/extension"
                        className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium"
                    >
                        Extension
                    </Link>
                </div>

                {/* Language Selector */}
                <div className="flex items-center">
                    <Button variant="outline" className="h-9 px-3 rounded-r-none border-r-0">
                        <Globe className="w-4 h-4 mr-2" />
                        EN
                    </Button>
                    <Button variant="outline" size="icon" className="h-9 w-9 rounded-l-none">
                        <ChevronDown className="w-4 h-4" />
                    </Button>
                </div>
            </div>
        </nav>
    )
}

export { Navigation }