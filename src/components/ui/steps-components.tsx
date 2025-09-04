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

const Frame36_Step1 = ({ isActive, onClick }: { isActive: boolean, onClick: () => void }) => (
    <div className="flex flex-col gap-1.5 w-full sm:flex-1 cursor-pointer" data-frame="Frame 36" onClick={onClick}>
        <Step number="1." title="Request Custom Invoice" isActive={isActive} />
        <div className="w-full h-2 bg-gray-100 rounded-full relative" data-frame="Frame 34">
            <div className="absolute inset-0 bg-gray-100 rounded-full" data-frame="Frame 30" />
            <div
                className="absolute bg-primary-500 rounded-full h-1.5"
                style={{ right: '0px', top: '1px', width: isActive ? '60%' : '0%' }}
                data-frame="Frame 33"
            />
        </div>
    </div>
)

const Frame37_Step2 = ({ isActive, onClick }: { isActive: boolean, onClick: () => void }) => (
    <div className="flex flex-col gap-2 w-full sm:flex-1 cursor-pointer" data-frame="Frame 37" onClick={onClick}>
        <Step number="2." title="Upload the invoice & receipt" isActive={isActive} />
        <div className="w-full h-2 bg-gray-100 rounded-full relative" data-frame="Frame 31">
            <div className="absolute inset-0 bg-gray-100 rounded-full" />
            <div
                className="absolute bg-primary-500 rounded-full h-1.5"
                style={{ right: '0px', top: '1px', width: isActive ? '30%' : '0%' }}
            />
        </div>
    </div>
)

const Frame38_Step3 = ({ isActive, onClick }: { isActive: boolean, onClick: () => void }) => (
    <div className="flex flex-col gap-2 w-full sm:flex-1 cursor-pointer" data-frame="Frame 38" onClick={onClick}>
        <Step number="3." title="Scan barcode at the airport" isActive={isActive} />
        <div className="w-full h-2 bg-gray-100 rounded-full relative" data-frame="Frame 31">
            <div className="absolute inset-0 bg-gray-100 rounded-full" />
            <div
                className="absolute bg-primary-500 rounded-full h-1.5"
                style={{ right: '0px', top: '1px', width: isActive ? '15%' : '0%' }}
            />
        </div>
    </div>
)

const Frame32_StepsContainer = ({ activeStep, setActiveStep }: { activeStep: number, setActiveStep: (step: number) => void }) => (
    <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 lg:gap-12 w-full justify-between" data-frame="Frame 32">
        <Frame36_Step1 isActive={activeStep === 0} onClick={() => setActiveStep(0)} />
        <Frame37_Step2 isActive={activeStep === 1} onClick={() => setActiveStep(1)} />
        <Frame38_Step3 isActive={activeStep === 2} onClick={() => setActiveStep(2)} />
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

const Frame35_StepsLayout = () => {
    const [activeStep, setActiveStep] = React.useState(0) // Start with step 1 active

    return (
        <div className="flex flex-col gap-6 sm:gap-8 md:gap-10" data-frame="Frame 35">
            <Frame32_StepsContainer activeStep={activeStep} setActiveStep={setActiveStep} />
            <Frame23_Illustration />
        </div>
    )
}

export { Frame35_StepsLayout, Frame32_StepsContainer, Frame23_Illustration }
