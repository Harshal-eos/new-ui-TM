"use client"

import * as React from "react"
import { useLanguage } from "@/contexts/LanguageContext"
import Image from "next/image"

const Hero = () => {
    const { t, language } = useLanguage()

    return (
        <div
            className="relative h-[150vh] w-full overflow-hidden"
            style={{
                backgroundImage: 'url(/images/hero-image.png)',
                backgroundSize: '40%',
                backgroundPosition: 'center top',
                backgroundRepeat: 'no-repeat'
            }}
        >
            {/* Color gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/80 via-purple-700/70 to-purple-900/80"></div>

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
                {/* Text content wrapper */}
                <div className="flex flex-col items-center text-center" style={{ position: 'relative', bottom: '144px' }}>
                    {/* Main heading div */}
                    <div>
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