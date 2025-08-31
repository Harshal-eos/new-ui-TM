"use client"

import * as React from "react"
import { Frame27_FeaturesGrid } from "@/components/ui/feature-cards"

const Features = () => {
    return (
        <section className="w-full h-full bg-white flex flex-col justify-center items-center" style={{ padding: '44px' }}>
            <div className="h-[1117px] flex flex-col justify-center items-center gap-11">
                {/* Section Title */}
                <div className="text-center">
                    <h2 className="text-[96px] font-serif text-primary-600 leading-[1] tracking-[-0.03em] w-[600px] font-normal">
                        Coupled with intelligent tools
                    </h2>
                </div>

                {/* Features Grid - Using exact Figma layer structure */}
                <Frame27_FeaturesGrid />
            </div>
        </section>
    )
}

export { Features }