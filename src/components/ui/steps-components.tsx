"use client"

import * as React from "react"
import Image from "next/image"

interface StepProps {
    number: string
    title: string
    isActive: boolean
}

const Step = ({ number, title, isActive }: StepProps) => (
    <div className="flex gap-2.5" data-component="Step">
        <span className={`text-[14px] font-medium leading-[1.43] text-center ${isActive ? 'text-gray-500' : 'text-gray-900'}`}>
            {number}
        </span>
        <span className={`text-[14px] font-medium leading-[1.43] text-center ${isActive ? 'text-gray-500' : 'text-gray-900'}`}>
            {title}
        </span>
    </div>
)

const Frame36_Step1 = () => (
    <div className="flex flex-col gap-1.5 w-full sm:w-auto" data-frame="Frame 36">
        <Step number="1." title="Request Custom Invoice" isActive={false} />
        <div className="w-full h-2 bg-gray-50 rounded-full relative" data-frame="Frame 34">
            <div className="absolute inset-0 bg-gray-50 rounded-full" data-frame="Frame 30" />
            <div
                className="absolute bg-primary-600/20 rounded-full h-1.5"
                style={{ left: '1px', top: '1px', width: '126px' }}
                data-frame="Frame 33"
            />
        </div>
    </div>
)

const Frame37_Step2 = () => (
    <div className="flex flex-col gap-2 w-full sm:w-auto" data-frame="Frame 37">
        <Step number="2." title="Upload the invoice & receipt" isActive={true} />
        <div className="flex items-stretch gap-2.5 w-full h-2" data-frame="Frame 31">
            <div className="bg-gray-50 rounded-full flex-1" />
        </div>
    </div>
)

const Frame38_Step3 = () => (
    <div className="flex flex-col gap-2 w-full sm:w-auto" data-frame="Frame 38">
        <Step number="3." title="Scan barcode at the airport" isActive={false} />
        <div className="flex items-stretch gap-2.5 w-full h-2" data-frame="Frame 31">
            <div className="bg-gray-50 rounded-full flex-1" />
        </div>
    </div>
)

const Frame32_StepsContainer = () => (
    <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 lg:gap-12 w-full max-w-6xl mx-auto justify-center" data-frame="Frame 32">
        <Frame36_Step1 />
        <Frame37_Step2 />
        <Frame38_Step3 />
    </div>
)

const Frame23_Illustration = () => (
    <div className="w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] bg-primary-100 rounded-lg relative overflow-hidden" data-frame="Frame 23">
        {/* Background Gradient */}
        <div
            className="absolute opacity-60 pointer-events-none inset-0"
            style={{
                background: 'radial-gradient(ellipse at center, #40A9FF 0%, #40F2FF 100%)',
                filter: 'blur(200px)',
            }}
            data-frame="Gradient"
        />

        {/* Frame 39 - Mobile Phone Illustration */}
        <div
            className="absolute z-10 inset-0"
            data-frame="Frame 39"
        >
            <Image
                src="/images/calculator-bg.png"
                alt="Mobile app interface showing invoice upload"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
            />
        </div>

        {/* Frame 40 - Step Details */}
        <div
            className="absolute z-20 bottom-4 left-4 right-4 sm:bottom-8 sm:left-8 sm:right-auto sm:w-80"
            data-frame="Frame 40"
        >
            <div className="flex flex-col gap-1">
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium text-gray-700 leading-tight">
                    Request custom invoice with VAT details
                </h3>
                <p className="text-xs sm:text-sm md:text-base font-light text-gray-500 leading-relaxed">
                    Ask the retailer to prepare a detailed invoice that clearly shows the VAT amount and your personal information.
                </p>
            </div>
        </div>
    </div>
)

const Frame35_StepsLayout = () => (
    <div className="flex flex-col gap-6 sm:gap-8 md:gap-10" data-frame="Frame 35">
        <Frame32_StepsContainer />
        <div className="w-full max-w-4xl mx-auto h-2 bg-gray-50 rounded-full" data-frame="Frame 32" />
        <Frame23_Illustration />
    </div>
)

export { Frame35_StepsLayout, Frame32_StepsContainer, Frame23_Illustration }
