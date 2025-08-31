"use client"

import * as React from "react"
import Image from "next/image"
import { BackgroundGrid } from "@/components/ui/background-grid"
import { FloatingIcons } from "@/components/ui/floating-icons"

const Hero = () => {
    return (
        <>
            {/* Group 1 - Background Pattern and Image */}
            <div
                className="absolute"
                style={{
                    left: '0px',
                    top: '0px',
                    height: '715px',
                }}
            >
                {/* Background Pattern Grid - Frame 9 with exact Figma layer names */}
                <BackgroundGrid />

                {/* Second Gradient */}
                <div
                    className="absolute opacity-60 pointer-events-none"
                    style={{
                        left: '434.5px',
                        top: '70px',
                        width: '800px',
                        height: '458.58px',
                        background: 'radial-gradient(ellipse at center, #40A9FF 0%, #40F2FF 100%)',
                        filter: 'blur(200px)',
                    }}
                />

                {/* Hero Image */}
                <div
                    className="absolute z-10"
                    style={{
                        left: '531px',
                        top: '102px',
                        width: '666px',
                        height: '416px',
                    }}
                >
                    <Image
                        src="/images/hero-image.png"
                        alt="Travel shopping with Eiffel Tower"
                        fill
                        className="object-cover"
                        priority
                        sizes="666px"
                    />
                </div>
            </div>

            {/* First Gradient */}
            <div
                className="absolute opacity-20 pointer-events-none"
                style={{
                    left: '541px',
                    top: '490px',
                    width: '954.5px',
                    height: '547.15px',
                    background: 'radial-gradient(ellipse at center, #40A9FF 0%, #40F2FF 100%)',
                    filter: 'blur(200px)',
                }}
            />

            {/* Frame 12 - Main Content */}
            <div
                className="absolute z-20"
                style={{
                    left: '298px',
                    top: '518px',
                    width: '1132px',
                }}
            >
                <div className="flex flex-col gap-6">
                    {/* Main Headline */}
                    <h1 className="text-[128px] font-serif text-primary-600 leading-[0.9] text-center font-normal">
                        Welcome to the future of travel shopping
                    </h1>

                    {/* Subtitle */}
                    <p className="text-[20px] font-light text-gray-700 leading-[1.4] text-center">
                        Shop abroad in three easy steps.<br />
                        Check the country rules for tax-free shopping and get your refund.
                    </p>

                    {/* Floating Icons - Frame 28, Frame 30, Frame 29 */}
                    <FloatingIcons />
                </div>
            </div>
        </>
    )
}

export { Hero }
