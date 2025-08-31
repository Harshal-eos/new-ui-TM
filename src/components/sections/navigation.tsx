"use client"

import * as React from "react"
import Link from "next/link"
import { Globe, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

const TravelMoneyLogo = () => (
    <div className="w-8 h-8 flex items-center justify-center">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.51 1.42L27.83 28.13" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M20.17 3.71L30.11 31.22" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M2.04 0.58L24.69 20.82" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    </div>
)

const Navigation = () => {
    return (
        <nav className="w-[1640px] flex items-center justify-between gap-8">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
                <TravelMoneyLogo />
            </Link>

            {/* Navigation Links */}
            <div className="flex items-center gap-11">
                <Link
                    href="/shoppers"
                    className="flex items-center gap-1.5 px-1.5 py-1 text-gray-500 hover:text-gray-700 transition-colors text-[16px] h-9"
                >
                    Shoppers
                    <ChevronDown className="w-4 h-4 text-gray-400" />
                </Link>
                <Link
                    href="/merchants"
                    className="px-1.5 py-1 text-gray-500 hover:text-gray-700 transition-colors text-[16px] h-9 flex items-center"
                >
                    Merchants
                </Link>
                <Link
                    href="/blog"
                    className="flex items-center gap-1.5 px-1.5 py-1 text-gray-500 hover:text-gray-700 transition-colors text-[16px] h-9"
                >
                    Blog
                    <ChevronDown className="w-4 h-4 text-gray-400" />
                </Link>
                <Link
                    href="/faq"
                    className="px-1.5 py-1 text-gray-500 hover:text-gray-700 transition-colors text-[16px] h-9 flex items-center"
                >
                    FAQ
                </Link>
                <Link
                    href="/about"
                    className="px-1.5 py-1 text-gray-500 hover:text-gray-700 transition-colors text-[16px] h-9 flex items-center"
                >
                    About
                </Link>
                <Link
                    href="/extension"
                    className="px-1.5 py-1 text-gray-500 hover:text-gray-700 transition-colors text-[16px] h-9 flex items-center"
                >
                    Extension
                </Link>
            </div>

            {/* Language Selector - Button Split Dropdown */}
            <div className="flex items-center">
                <Button
                    variant="outline"
                    className="rounded-r-none border-r-0 px-3 py-2 h-9 text-[14px] font-medium border-gray-200"
                >
                    <Globe className="w-4 h-4 mr-2" />
                    EN
                </Button>
                <Button
                    variant="outline"
                    size="icon"
                    className="rounded-l-none w-9 h-9 border-gray-200"
                >
                    <ChevronDown className="w-4 h-4" />
                </Button>
            </div>
        </nav>
    )
}

export { Navigation }