"use client"

import * as React from "react"
import { Frame17_LeftColumn } from "@/components/ui/calculator-components"
import { formatCurrency, calculateVATRefund } from "@/lib/utils"

interface Country {
    code: string
    name: string
    vatRate: number
    flag: string
}

const countries: Country[] = [
    { code: 'FR', name: 'France', vatRate: 0.20, flag: '🇫🇷' },
    { code: 'DE', name: 'Germany', vatRate: 0.19, flag: '🇩🇪' },
    { code: 'IT', name: 'Italy', vatRate: 0.22, flag: '🇮🇹' },
    { code: 'ES', name: 'Spain', vatRate: 0.21, flag: '🇪🇸' },
    { code: 'GB', name: 'United Kingdom', vatRate: 0.20, flag: '🇬🇧' },
]

const Frame20_TravelMoneyResult = ({ refund }: { refund: number }) => (
    <div className="bg-gray-900 text-white rounded-lg relative" style={{ padding: '24px' }} data-frame="Frame 20">
        <div className="flex flex-col justify-center text-center">
            <p className="text-[14px] text-gray-300 font-light leading-[1.43] mb-2">
                Your refund with TravelMoney
            </p>
            <p className="text-[48px] font-medium text-primary-500 leading-[1] mb-2">
                {formatCurrency(refund)}
            </p>
            <p className="text-[14px] text-gray-400 font-light leading-[1.43]">
                Instant refunds
            </p>

            {/* TravelMoney Logo */}
            <div className="absolute top-3 right-6 w-6 h-6">
                <TravelMoneyLogo />
            </div>
        </div>
    </div>
)

const Frame21_CompetitorResult = ({ refund }: { refund: number }) => (
    <div className="bg-white border border-gray-100 rounded-lg" style={{ padding: '24px' }} data-frame="Frame 21">
        <div className="flex flex-col justify-center text-center">
            <p className="text-[14px] text-gray-700 font-light leading-[1.43] mb-2 w-[285px]">
                Your refund with other apps
            </p>
            <p className="text-[18px] font-medium text-gray-500 leading-[1.56] mb-2 w-[285px]">
                {formatCurrency(refund)}
            </p>
            <p className="text-[14px] text-gray-500 font-light leading-[1.43] w-[285px]">
                ~Weeks, often months
            </p>
        </div>
    </div>
)

const Frame22_VSBadge = () => (
    <div
        className="absolute bg-gray-900 text-white rounded-full flex items-center justify-center"
        style={{
            left: '155px',
            top: '186px',
            width: '24px',
            height: '24px',
        }}
        data-frame="Frame 22"
    >
        <span className="text-[12px] font-light leading-[1.33]">vs</span>
    </div>
)

const Frame16_RightColumn = ({ travelMoneyRefund, competitorRefund }: {
    travelMoneyRefund: number
    competitorRefund: number
}) => (
    <div className="relative w-[333px]" data-frame="Frame 16">
        <Frame20_TravelMoneyResult refund={travelMoneyRefund} />
        <div className="flex justify-center py-3">
            <div className="bg-gray-900 text-white rounded-full flex items-center justify-center w-6 h-6">
                <span className="text-[12px] font-light">vs</span>
            </div>
        </div>
        <Frame21_CompetitorResult refund={competitorRefund} />
        <Frame22_VSBadge />
    </div>
)

const Calculator = () => {
    const [selectedCountry, setSelectedCountry] = React.useState<Country>(countries[0])
    const [spendAmount, setSpendAmount] = React.useState<number>(3600)
    const [sliderValue, setSliderValue] = React.useState<number[]>([60])

    const travelMoneyRefund = calculateVATRefund(spendAmount, selectedCountry.vatRate, 1.0)
    const competitorRefund = calculateVATRefund(spendAmount, selectedCountry.vatRate, 0.67)

    const handleSpendAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseFloat(e.target.value.replace(/[^\d.]/g, '')) || 0
        setSpendAmount(value)
    }

    const handleSliderChange = (value: number[]) => {
        setSliderValue(value)
        setSpendAmount(value[0] * 100)
    }

    const handleCountryChange = (code: string) => {
        const country = countries.find(c => c.code === code)
        if (country) setSelectedCountry(country)
    }

    return (
        <div className="w-[805px] bg-white border border-gray-50 rounded-lg card-shadow">
            <div className="flex gap-6 p-6">
                <Frame17_LeftColumn
                    selectedCountry={selectedCountry}
                    spendAmount={spendAmount}
                    sliderValue={sliderValue}
                    onCountryChange={handleCountryChange}
                    onAmountChange={handleSpendAmountChange}
                    onSliderChange={handleSliderChange}
                />

                <Frame16_RightColumn
                    travelMoneyRefund={travelMoneyRefund}
                    competitorRefund={competitorRefund}
                />
            </div>
        </div>
    )
}

const TravelMoneyLogo = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 5L13 5L17 7L13 9L9 7V5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M13 7L17 9L13 11L9 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M5 5L9 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M5 9L9 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
)

export { Calculator }