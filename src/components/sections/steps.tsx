"use client"

import * as React from "react"
import { Frame35_StepsLayout } from "@/components/ui/steps-components"

const Steps = () => {
    return (
        <section className="w-full h-full bg-white flex flex-col justify-center items-center" style={{ padding: '44px' }}>
            <div className="h-[1117px] flex flex-col justify-center items-center gap-11">
                {/* Section Title */}
                <div className="text-center">
                    <h2 className="text-[96px] font-serif text-primary-600 leading-[1] tracking-[-0.03em] w-[886px] font-normal">
                        Essential steps for<br />
                        tax-free shopping success
                    </h2>
                </div>

                {/* Steps Layout - Using exact Figma layer structure */}
                <Frame35_StepsLayout />
            </div>
        </section>
    )
}

export { Steps }