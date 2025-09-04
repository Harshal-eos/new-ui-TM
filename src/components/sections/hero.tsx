"use client"

import * as React from "react"
import { useLanguage } from "@/contexts/LanguageContext"
import Image from "next/image"

const Hero = () => {
    const { t, language } = useLanguage()

    return (
        <div className="relative h-[150vh] w-full overflow-hidden bg-gradient-to-br from-purple-600 via-purple-700 to-purple-900">
            {/* Background gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-purple-500/30 to-purple-900/60"></div>

            <div className="absolute top-8 left-1/2 transform -translate-x-1/2">
                <Image src="/images/hero-image.png" alt="Eiffel Tower" width={500} height={280} />
            </div>

            {/* Trees silhouettes */}
            <div className="absolute bottom-32 left-20">
                <svg width="60" height="40" viewBox="0 0 60 40" fill="none">
                    <path d="M10 40 Q15 25 20 30 Q25 20 30 25 Q35 15 40 20 Q45 25 50 40"
                        fill="rgba(139, 69, 196, 0.6)" />
                </svg>
            </div>

            <div className="absolute bottom-32 right-20">
                <svg width="80" height="50" viewBox="0 0 80 50" fill="none">
                    <path d="M10 50 Q20 30 30 35 Q40 25 50 30 Q60 20 70 50"
                        fill="rgba(139, 69, 196, 0.6)" />
                </svg>
            </div>

            {/* Main content */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-8 mt-20">
                {/* Welcome text with emojis */}
                <div className="relative mb-8">
                    {/* Cool emoji */}
                    <div className="absolute -top-4 left-20 text-4xl animate-bounce">
                        😎
                    </div>

                    {/* Gift emoji */}
                    <div className="absolute -top-2 right-4 text-3xl animate-pulse">
                        🎁
                    </div>

                    {/* Heart emoji */}
                    <div className="absolute top-16 -left-8 text-2xl animate-ping">
                        ❤️
                    </div>

                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
                        Welcome to the <span className="font-light italic">future</span> of travel shopping
                    </h1>
                </div>

                {/* Subtitle */}
                <div className="text-white text-lg md:text-xl max-w-3xl">
                    <p className="text-white/90">
                        Shop abroad in three easy steps. Check the country rules for tax-free shopping and get your refund.
                    </p>
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