"use client"

import * as React from "react"
import Image from "next/image"

const Steps = () => {
    const steps = [
        {
            number: "1.",
            title: "Request Custom Invoice",
            isActive: false,
        },
        {
            number: "2.",
            title: "Upload the invoice & receipt",
            isActive: true,
        },
        {
            number: "3.",
            title: "Scan barcode at the airport",
            isActive: false,
        },
    ]

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

                {/* Steps Layout - Frame 35 */}
                <div className="flex flex-col gap-6">
                    {/* Frame 32 - Steps Progress */}
                    <div className="flex gap-6 w-[1260px]">
                        {steps.map((step, index) => (
                            <div key={index} className="w-[404px] flex flex-col gap-1.5">
                                {/* Step Header */}
                                <div className="flex items-center gap-2.5">
                                    <span className={`text-[14px] font-medium leading-[1.43] ${step.isActive ? 'text-gray-500' : 'text-gray-900'}`}>
                                        {step.number}
                                    </span>
                                    <span className={`text-[14px] font-medium leading-[1.43] ${step.isActive ? 'text-gray-500' : 'text-gray-900'}`}>
                                        {step.title}
                                    </span>
                                </div>

                                {/* Progress Bar */}
                                <div className="w-full h-2 bg-gray-50 rounded-full relative">
                                    {step.isActive && (
                                        <>
                                            <div className="absolute inset-0 bg-gray-50 rounded-full" />
                                            <div
                                                className="absolute bg-primary-600/20 rounded-full h-full"
                                                style={{ width: '126px' }}
                                            />
                                            <div
                                                className="absolute w-4 h-4 bg-white border border-gray-800 rounded-full card-shadow"
                                                style={{ left: '242px', top: '-5px' }}
                                            />
                                        </>
                                    )}
                                    {!step.isActive && index === 0 && (
                                        <div className="h-full bg-gray-50 rounded-full" />
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Final Progress Bar */}
                    <div className="w-[404px] h-2 bg-gray-50 rounded-full" />

                    {/* Illustration Section - Frame 23 */}
                    <div className="w-[1260px] h-[733px] bg-primary-100 rounded-lg relative overflow-hidden">
                        {/* Background Gradient */}
                        <div
                            className="absolute opacity-60 pointer-events-none"
                            style={{
                                left: '255px',
                                top: '144px',
                                width: '954.5px',
                                height: '547.15px',
                                background: 'radial-gradient(ellipse at center, #40A9FF 0%, #40F2FF 100%)',
                                filter: 'blur(200px)',
                            }}
                        />

                        {/* Mobile Phone Illustration */}
                        <div
                            className="absolute z-10"
                            style={{
                                left: '220px',
                                top: '0px',
                                width: '1024px',
                                height: '733px',
                            }}
                        >
                            <Image
                                src="/images/calculator-bg.png"
                                alt="Mobile app interface showing invoice upload"
                                fill
                                className="object-cover"
                                sizes="1024px"
                            />
                        </div>

                        {/* Step Details - Frame 40 */}
                        <div
                            className="absolute z-20"
                            style={{
                                left: '100px',
                                top: '419px',
                                width: '367px',
                            }}
                        >
                            <div className="flex flex-col gap-0.5">
                                <h3 className="text-[30px] font-medium text-gray-700 leading-[1.2]">
                                    Request custom invoice with VAT details
                                </h3>
                                <p className="text-[14px] font-light text-gray-500 leading-[1.43]">
                                    Ask the retailer to prepare a detailed invoice that clearly shows the VAT amount and your personal information.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export { Steps }