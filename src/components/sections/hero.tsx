"use client"

import * as React from "react"
import Image from "next/image"

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
                {/* Background Pattern Grid - Frame 9 */}
                <div className="absolute inset-0">
                    <div className="w-full h-full flex flex-col">
                        {/* Row 1 - 9 frames */}
                        <div className="flex">
                            {Array.from({ length: 9 }).map((_, i) => (
                                <div key={`row1-${i}`} className="w-[200px] h-[120px] border border-gray-300 bg-white" style={{ marginLeft: '-1px', marginTop: '-1px' }} />
                            ))}
                        </div>
                        {/* Row 2 - 7 frames */}
                        <div className="flex" style={{ marginTop: '-1px' }}>
                            {Array.from({ length: 7 }).map((_, i) => (
                                <div key={`row2-${i}`} className="w-[200px] h-[120px] border border-gray-300 bg-white" style={{ marginLeft: '-1px' }} />
                            ))}
                        </div>
                        {/* Row 3 - 5 frames */}
                        <div className="flex" style={{ marginTop: '-1px' }}>
                            {Array.from({ length: 5 }).map((_, i) => (
                                <div key={`row3-${i}`} className="w-[200px] h-[120px] border border-gray-300 bg-white" style={{ marginLeft: '-1px' }} />
                            ))}
                        </div>
                        {/* Row 4 - 3 frames */}
                        <div className="flex" style={{ marginTop: '-1px' }}>
                            {Array.from({ length: 3 }).map((_, i) => (
                                <div key={`row4-${i}`} className="w-[200px] h-[120px] border border-gray-300 bg-white" style={{ marginLeft: '-1px' }} />
                            ))}
                        </div>
                        {/* Row 5 - 1 frame */}
                        <div className="flex" style={{ marginTop: '-1px' }}>
                            <div className="w-[200px] h-[120px] border border-gray-300 bg-white" style={{ marginLeft: '-1px' }} />
                        </div>
                        {/* Row 6 - 1 frame */}
                        <div className="flex" style={{ marginTop: '-1px' }}>
                            <div className="w-[200px] h-[120px] border border-gray-300 bg-white" style={{ marginLeft: '-1px' }} />
                        </div>
                    </div>
                </div>

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

                    {/* Floating Icons - positioned relative to Frame 12 */}
                    <div className="relative">
                        {/* Gift Icon - Frame 28 */}
                        <div
                            className="absolute bg-white/10 backdrop-blur-sm rounded-md"
                            style={{
                                left: '763px',
                                top: '-444px',
                                width: '118.85px',
                                height: '118.85px',
                            }}
                        >
                            <Image
                                src="/images/gift-icon.png"
                                alt="Gift icon"
                                width={119}
                                height={119}
                                className="object-contain p-1"
                            />
                        </div>

                        {/* Glasses Icon - Frame 30 */}
                        <div
                            className="absolute bg-white/10 backdrop-blur-sm rounded-md"
                            style={{
                                left: '66.83px',
                                top: '-568.17px',
                                width: '111.65px',
                                height: '111.65px',
                            }}
                        >
                            <Image
                                src="/images/glasses-icon.png"
                                alt="Glasses icon"
                                width={112}
                                height={112}
                                className="object-contain"
                            />
                        </div>

                        {/* Heart Icon - Frame 29 */}
                        <div
                            className="absolute bg-white/10 backdrop-blur-sm rounded-md"
                            style={{
                                left: '-123px',
                                top: '-349px',
                                width: '122.47px',
                                height: '122.47px',
                            }}
                        >
                            <Image
                                src="/images/heart-icon.png"
                                alt="Heart icon"
                                width={122}
                                height={122}
                                className="object-contain"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export { Hero }
