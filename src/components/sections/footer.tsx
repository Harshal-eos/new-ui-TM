"use client"

import * as React from "react"
import Link from "next/link"

const TravelMoneyLogo = () => (
    <div className="w-full sm:w-[186.75px] h-auto sm:h-[70.26px] flex items-center justify-center sm:justify-start">
        {/* Text Logo */}
        <div className="flex flex-col">
            <span className="text-white font-medium text-xl sm:text-2xl md:text-3xl lg:text-[28px] leading-tight">travelmoney</span>
        </div>
    </div>
)

const Footer = () => {
    return (
        <footer className="w-full bg-primary-600 flex flex-col justify-center items-center py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 mb-4 sm:mb-6 md:mb-8 lg:mb-10 xl:mb-12 min-h-[300px] sm:min-h-[350px] md:min-h-[380px] lg:min-h-[400px] xl:min-h-[420px]">
            <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 flex flex-col gap-4 sm:gap-6">
                {/* Logo */}
                <TravelMoneyLogo />

                {/* Footer Content */}
                <div className="flex flex-col lg:flex-row justify-between gap-6 sm:gap-8 w-full">
                    {/* Left Column - Description */}
                    <div className="w-full lg:w-[400px] flex flex-col gap-3 sm:gap-4">
                        <p className="text-sm sm:text-base text-white font-light leading-relaxed text-center lg:text-left">
                            Changing the game of tax-free shopping. Maximum VAT refunds, minimum wait times, zero paperwork. Shop smarter, travel richer with TravelMoney.
                        </p>
                        <p className="text-sm sm:text-base text-white font-light leading-relaxed text-center lg:text-left">
                            2025 TravelMoney. All Rights Reserved
                        </p>
                    </div>

                    {/* Right Columns - Navigation */}
                    <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 lg:gap-12 xl:gap-16">
                        {/* Discover Column */}
                        <div className="flex flex-col gap-3 sm:gap-4">
                            <h4 className="text-lg sm:text-xl font-serif text-white leading-tight tracking-[-0.03em] text-center font-normal">
                                Discover
                            </h4>
                            <div className="flex flex-col gap-2 sm:gap-3">
                                <Link href="/" className="text-sm sm:text-base font-light text-white leading-relaxed text-center hover:text-gray-200 transition-colors">
                                    Home
                                </Link>
                                <Link href="/shoppers" className="text-sm sm:text-base font-light text-white leading-relaxed text-center hover:text-gray-200 transition-colors">
                                    Shoppers
                                </Link>
                                <Link href="/merchants" className="text-sm sm:text-base font-light text-white leading-relaxed text-center hover:text-gray-200 transition-colors">
                                    Merchants
                                </Link>
                                <Link href="/blog" className="text-sm sm:text-base font-light text-white leading-relaxed text-center hover:text-gray-200 transition-colors">
                                    Blog
                                </Link>
                                <Link href="/faq" className="text-sm sm:text-base font-light text-white leading-relaxed text-center hover:text-gray-200 transition-colors">
                                    FAQ
                                </Link>
                                <Link href="/about" className="text-sm sm:text-base font-light text-white leading-relaxed text-center hover:text-gray-200 transition-colors">
                                    About
                                </Link>
                            </div>
                        </div>

                        {/* Resources Column */}
                        <div className="flex flex-col gap-3 sm:gap-4">
                            <h4 className="text-lg sm:text-xl font-serif text-white leading-tight tracking-[-0.03em] text-center font-normal">
                                Resources
                            </h4>
                            <div className="flex flex-col gap-2 sm:gap-3">
                                <Link href="/cookie-policy" className="text-sm sm:text-base font-light text-white leading-relaxed text-center hover:text-gray-200 transition-colors">
                                    Cookie Policy
                                </Link>
                                <Link href="/privacy-policy" className="text-sm sm:text-base font-light text-white leading-relaxed text-center hover:text-gray-200 transition-colors">
                                    Privacy Policy
                                </Link>
                                <Link href="/terms" className="text-sm sm:text-base font-light text-white leading-relaxed text-center hover:text-gray-200 transition-colors">
                                    Terms & Conditions
                                </Link>
                            </div>
                        </div>

                        {/* Connect Column */}
                        <div className="flex flex-col gap-3 sm:gap-4">
                            <h4 className="text-lg sm:text-xl font-serif text-white leading-tight tracking-[-0.03em] text-center font-normal">
                                Connect with us
                            </h4>
                            <div className="flex flex-col gap-2 sm:gap-3">
                                <Link href="https://twitter.com/travelmoney" className="text-sm sm:text-base font-light text-white leading-relaxed text-center hover:text-gray-200 transition-colors">
                                    X (Twitter)
                                </Link>
                                <Link href="https://linkedin.com/company/travelmoney" className="text-sm sm:text-base font-light text-white leading-relaxed text-center hover:text-gray-200 transition-colors">
                                    LinkedIn
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export { Footer }