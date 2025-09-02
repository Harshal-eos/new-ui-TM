"use client"

import * as React from "react"
import Link from "next/link"

const TravelMoneyLogo = () => (
    <div className="w-[186.75px] h-[70.26px] flex items-center">
        {/* Text Logo */}
        <div className="flex flex-col">
            <span className="text-black font-medium text-[28px] leading-tight">travelmoney</span>
        </div>
    </div>
)

const Footer = () => {
    return (
        <footer className="w-full bg-primary-50 flex flex-col justify-center items-center" style={{ padding: '44px' }}>
            <div className="w-[1260px] flex flex-col gap-6">
                {/* Logo */}
                <TravelMoneyLogo />

                {/* Footer Content */}
                <div className="flex justify-between gap-6 w-full">
                    {/* Left Column - Description */}
                    <div className="w-[400px] flex flex-col gap-3">
                        <p className="text-[16px] font-light text-gray-500 leading-[1.5]">
                            Changing the game of tax-free shopping. Maximum VAT refunds, minimum wait times, zero paperwork. Shop smarter, travel richer with TravelMoney.
                        </p>
                        <p className="text-[16px] font-light text-gray-500 leading-[1.5] text-center">
                            2025 TravelMoney. All Rights Reserved
                        </p>
                    </div>

                    {/* Right Columns - Navigation */}
                    <div className="flex gap-16">
                        {/* Discover Column */}
                        <div className="flex flex-col gap-4">
                            <h4 className="text-[20px] font-serif text-gray-900 leading-[1] tracking-[-0.03em] text-center font-normal">
                                Discover
                            </h4>
                            <div className="flex flex-col gap-4">
                                <Link href="/" className="text-[16px] font-light text-gray-500 leading-[1.5] text-center hover:text-gray-700 transition-colors">
                                    Home
                                </Link>
                                <Link href="/shoppers" className="text-[16px] font-light text-gray-500 leading-[1.5] text-center hover:text-gray-700 transition-colors">
                                    Shoppers
                                </Link>
                                <Link href="/merchants" className="text-[16px] font-light text-gray-500 leading-[1.5] text-center hover:text-gray-700 transition-colors">
                                    Merchants
                                </Link>
                                <Link href="/blog" className="text-[16px] font-light text-gray-500 leading-[1.5] text-center hover:text-gray-700 transition-colors">
                                    Blog
                                </Link>
                                <Link href="/faq" className="text-[16px] font-light text-gray-500 leading-[1.5] text-center hover:text-gray-700 transition-colors">
                                    FAQ
                                </Link>
                                <Link href="/about" className="text-[16px] font-light text-gray-500 leading-[1.5] text-center hover:text-gray-700 transition-colors">
                                    About
                                </Link>
                            </div>
                        </div>

                        {/* Resources Column */}
                        <div className="flex flex-col gap-4">
                            <h4 className="text-[20px] font-serif text-gray-900 leading-[1] tracking-[-0.03em] text-center font-normal">
                                Resources
                            </h4>
                            <div className="flex flex-col gap-4">
                                <Link href="/cookie-policy" className="text-[16px] font-light text-gray-500 leading-[1.5] text-center hover:text-gray-700 transition-colors">
                                    Cookie Policy
                                </Link>
                                <Link href="/privacy-policy" className="text-[16px] font-light text-gray-500 leading-[1.5] text-center hover:text-gray-700 transition-colors">
                                    Privacy Policy
                                </Link>
                                <Link href="/terms" className="text-[16px] font-light text-gray-500 leading-[1.5] text-center hover:text-gray-700 transition-colors">
                                    Terms & Conditions
                                </Link>
                            </div>
                        </div>

                        {/* Connect Column */}
                        <div className="flex flex-col gap-4">
                            <h4 className="text-[20px] font-serif text-gray-900 leading-[1] tracking-[-0.03em] text-center font-normal">
                                Connect with us
                            </h4>
                            <div className="flex flex-col gap-4">
                                <Link href="https://twitter.com/travelmoney" className="text-[16px] font-light text-gray-500 leading-[1.5] text-center hover:text-gray-700 transition-colors">
                                    X (Twitter)
                                </Link>
                                <Link href="https://linkedin.com/company/travelmoney" className="text-[16px] font-light text-gray-500 leading-[1.5] text-center hover:text-gray-700 transition-colors">
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