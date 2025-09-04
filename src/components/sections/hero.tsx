"use client"

import * as React from "react"
import Image from "next/image"
import { useLanguage } from "@/contexts/LanguageContext"


const Hero = () => {
    const { t, language } = useLanguage()

    return (
        <section key={language} className="relative flex flex-col items-center min-h-[100vh] sm:min-h-[110vh] lg:min-h-[115vh] text-center overflow-hidden bg-white">
            {/* Background Gradient Elements */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Purple gradient circles */}
                <div className="absolute top-20 right-20 w-96 h-96 bg-purple-200 rounded-full opacity-20 blur-3xl"></div>
                <div className="absolute top-40 left-20 w-80 h-80 bg-purple-300 rounded-full opacity-30 blur-3xl"></div>
            </div>

            {/* Eiffel Tower Image at Top */}
            <div className="w-full flex justify-center pt-0 pb-8 sm:pb-12 md:pb-16 !mb-2 relative z-10">
                <Image
                    src="/images/hero-image.png"
                    alt="Eiffel Tower"
                    width={400}
                    height={400}
                    className="object-contain opacity-60 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[400px] lg:h-[400px]"
                    priority
                />
            </div>

            {/* Content Below Image */}
            <div className="flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 w-full max-w-xs sm:max-w-sm md:max-w-2xl lg:max-w-3xl xl:max-w-4xl relative z-10">
                {/* Heading */}
                <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-center max-w-4xl" style={{ color: '#7826F2' }}>
                    {t('hero.title')}{" "}
                    <span className="italic font-serif">{t('hero.subtitle')}</span>
                </h1>

                {/* Floating Icon Cards */}
                <div className="relative mt-4 sm:mt-6 md:mt-8 flex justify-center">
                    {/* Glasses Icon */}
                    <div className="absolute -top-8 sm:-top-12 md:-top-16 -left-8 sm:-left-12 md:-left-16 bg-white/10 backdrop-blur-sm shadow-lg rounded-xl p-2 sm:p-3 rotate-[-15deg]">
                        <Image
                            src="/images/glasses-icon.png"
                            alt="Cool Glasses"
                            width={32}
                            height={32}
                            className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8"
                        />
                    </div>

                    {/* Heart Icon */}
                    <div className="absolute top-6 sm:top-8 md:top-12 -left-12 sm:-left-16 md:-left-20">
                        <Image
                            src="/images/heart-icon.png"
                            alt="Love Heart"
                            width={32}
                            height={32}
                            className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8"
                        />
                    </div>

                    {/* Gift Icon */}
                    <div className="absolute top-4 sm:top-6 md:top-8 -right-12 sm:-right-16 md:-right-20 bg-white/10 backdrop-blur-sm shadow-lg rounded-xl p-2 sm:p-3 rotate-[10deg]">
                        <Image
                            src="/images/gift-icon.png"
                            alt="Gift Box"
                            width={32}
                            height={32}
                            className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8"
                        />
                    </div>
                </div>

                {/* Subtext */}
                <p className="mt-12 sm:mt-16 md:mt-20 lg:mt-24 text-gray-600 text-sm sm:text-base md:text-lg lg:text-xl text-center max-w-4xl mx-auto">
                    {t('hero.description')} <span className="font-semibold">three easy steps.</span>{" "}
                    <br />
                    {t('hero.subdescription')}
                </p>
            </div>
        </section>
    )
}

export { Hero }