"use client"

import * as React from "react"
import { useLanguage } from "@/contexts/LanguageContext"
import Image from "next/image"

const Hero = () => {
    const { t, language } = useLanguage()

    return (
        <div className="relative h-[150vh] w-full overflow-hidden" style={{ backgroundColor: 'rgb(120, 38, 242)' }}>
            {/* Hero Image with Grid */}
            <div className="absolute left-1/2 transform -translate-x-1/2 -top-20">
                <Image
                    src="/images/hero-image.png"
                    alt="Eiffel Tower"
                    width={5000}
                    height={1500}
                    className="w-screen h-auto max-w-none"
                />
            </div>

            {/* Floating Purple Cards with 3D Images */}
            {/* Top-Right Card - Sunglasses - overlapping "e" in "Welcome" and "t" in "the" */}
            <div className="absolute top-1/4 right-1/4 w-16 h-16 bg-purple-500 rounded-lg transform rotate-12 shadow-lg backdrop-blur-sm">
                <div className="flex items-center justify-center h-full">
                    <Image src="/images/glasses-icon.png" alt="Sunglasses" width={32} height={32} />
                </div>
            </div>

            {/* Bottom-Left Card - Heart - overlapping "u" in "future" and "e" in "of" */}
            <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-purple-500 rounded-lg transform -rotate-12 shadow-lg backdrop-blur-sm">
                <div className="flex items-center justify-center h-full">
                    <Image src="/images/heart-icon.png" alt="Heart" width={32} height={32} />
                </div>
            </div>

            {/* Mid-Right Card - Gift - overlapping "g" in "shopping" */}
            <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-purple-500 rounded-lg transform rotate-6 shadow-lg backdrop-blur-sm">
                <div className="flex items-center justify-center h-full">
                    <Image src="/images/gift-icon.png" alt="Gift" width={32} height={32} />
                </div>
            </div>

            {/* Main content */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-8 mt-20">
                {/* Text content wrapper */}
                <div className="flex flex-col items-center text-center" style={{ position: 'relative', bottom: '144px' }}>
                    {/* Main heading div */}
                    <div className="mb-8">
                        <h1 className="text-white leading-[90%] tracking-[-3%] text-center mb-8" style={{ fontWeight: 600, fontSize: '5rem' }}>
                            <span style={{ fontWeight: 600 }}>Welcome to the</span><br />
                            <span className="font-medium italic" style={{ fontFamily: 'Instrument Serif', letterSpacing: '0%' }}>future</span> of <span className="font-medium italic" style={{ fontFamily: 'Instrument Serif', letterSpacing: '0%' }}>travel shopping</span>
                        </h1>
                    </div>

                    {/* Sub-texts div */}
                    <div>
                        {/* Sub-text 1 */}
                        <p className="text-white text-lg md:text-xl mb-2">
                            Shop abroad in <span className="underline">three easy steps</span>.
                        </p>

                        {/* Sub-text 2 */}
                        <p className="text-white text-base md:text-lg">
                            Check the country rules for tax-free shopping and get your refund.
                        </p>
                    </div>
                </div>
            </div>

            {/* Subtle pattern overlay */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full animate-twinkle"></div>
                <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-white rounded-full animate-twinkle delay-1000"></div>
                <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-white rounded-full animate-twinkle delay-2000"></div>
            </div>

            <style jsx>{`
                @keyframes twinkle {
                    0%, 100% { opacity: 0.3; }
                    50% { opacity: 1; }
                }
                .animate-twinkle {
                    animation: twinkle 3s infinite;
                }
            `}</style>
        </div>
    )
}

export { Hero }