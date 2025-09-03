"use client"

import * as React from "react"
import { Frame35_StepsLayout } from "@/components/ui/steps-components"

const Steps = () => {
    return (
        <section className="w-full bg-white py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28">
            <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 mt-[4rem]">
                {/* Section Title */}
                <div className="flex items-center justify-center text-center mb-12 sm:mb-16 md:mb-20 lg:mb-24">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif text-primary-600 leading-tight font-normal max-w-4xl mx-auto px-4 text-center">
                        Essential steps for<br />
                        tax-free shopping success
                    </h2>
                </div>

                {/* Steps Layout - Responsive container */}
                <div className="max-w-6xl mx-auto">
                    <Frame35_StepsLayout />
                </div>
            </div>
        </section>
    )
}

export { Steps }