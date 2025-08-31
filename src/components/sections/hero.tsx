"use client"

import * as React from "react"
import Image from "next/image"

const Hero = () => {
    return (
        <section className="relative min-h-[90vh] bg-gradient-to-br from-primary-50 via-primary-100 to-accent-blue overflow-hidden">
            {/* Background Grid Pattern */}
            <div className="absolute inset-0 opacity-20">
                <div className="w-full h-full">
                    {/* Create a grid pattern similar to Figma */}
                    <div className="grid grid-cols-9 gap-px h-full">
                        {Array.from({ length: 54 }).map((_, i) => (
                            <div key={i} className="border border-gray-300/30 bg-white/10" />
                        ))}
                    </div>
                </div>
            </div>

            {/* Background Blur Effects */}
            <div className="absolute inset-0 pointer-events-none">
                <div
                    className="absolute w-[800px] h-[600px] bg-gradient-radial from-primary-500/40 to-accent-blue/40 blur-[120px]"
                    style={{
                        left: '30%',
                        top: '10%',
                    }}
                />
                <div
                    className="absolute w-[600px] h-[400px] bg-gradient-radial from-accent-blue/30 to-primary-500/30 blur-[100px]"
                    style={{
                        right: '25%',
                        bottom: '20%',
                    }}
                />
            </div>

            {/* Hero Image - Eiffel Tower */}
            <div className="absolute top-16 right-1/4 w-[500px] h-[400px] z-10">
                <Image
                    src="/images/hero-image.png"
                    alt="Eiffel Tower - Travel shopping destination"
                    fill
                    className="object-contain"
                    priority
                    sizes="500px"
                />
            </div>

            {/* Main Content */}
            <div className="relative z-20 container mx-auto px-6 py-20 min-h-[90vh] flex flex-col justify-center">
                <div className="max-w-6xl mx-auto text-center">
                    {/* Main Headline */}
                    <h1 className="text-5xl lg:text-7xl xl:text-[120px] font-serif text-primary-600 leading-[0.85] mb-8 relative">
                        Welcome to the
                        <br />
                        <span className="italic text-primary-700">future</span> of travel shopping

                        {/* Floating Icons positioned around the text */}
                        <div className="absolute -top-12 -right-20 w-20 h-20 bg-white/15 backdrop-blur-sm rounded-xl p-3 animate-bounce">
                            <Image src="/images/gift-icon.png" alt="Gift" width={56} height={56} className="object-contain" />
                        </div>

                        <div className="absolute top-8 -left-24 w-16 h-16 bg-white/15 backdrop-blur-sm rounded-xl p-2">
                            <Image src="/images/glasses-icon.png" alt="Glasses" width={48} height={48} className="object-contain" />
                        </div>

                        <div className="absolute -bottom-8 right-16 w-18 h-18 bg-white/15 backdrop-blur-sm rounded-xl p-3">
                            <Image src="/images/heart-icon.png" alt="Heart" width={60} height={60} className="object-contain" />
                        </div>
                    </h1>

                    {/* Subtitle */}
                    <p className="text-lg lg:text-xl text-gray-700 font-light max-w-3xl mx-auto leading-relaxed">
                        Shop abroad in <span className="font-medium text-primary-600">three easy steps</span>.<br />
                        Check the country rules for tax-free shopping and get your refund.
                    </p>
                </div>
            </div>
        </section>
    )
}

export { Hero }