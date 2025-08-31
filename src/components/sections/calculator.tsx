"use client"

import * as React from "react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
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

    return (
        <div className="w-full xl:w-[805px] bg-white border border-gray-50 rounded-lg card-shadow">
            <div className="flex flex-col xl:flex-row gap-6 p-6">
                {/* Left Column - Form Controls */}
                <div className="flex flex-col gap-6 flex-1">
                    {/* Header */}
                    <div className="flex flex-col gap-1">
                        <h3 className="text-[32px] font-serif text-gray-900 leading-[1] font-normal">
                            Maximize your travel budget
                        </h3>
                        <p className="text-[14px] font-light text-gray-500 leading-[1.43]">
                            Compare TravelMoney refunds with the competition
                        </p>
                    </div>

                    {/* Country Selection */}
                    <div className="flex flex-col gap-2 w-full">
                        <label className="text-[14px] font-medium text-gray-900 leading-[1]">
                            Where will you be shopping?
                        </label>
                        <Select
                            value={selectedCountry.code}
                            onValueChange={(code) => {
                                const country = countries.find(c => c.code === code)
                                if (country) setSelectedCountry(country)
                            }}
                        >
                            <SelectTrigger className="w-full h-10 px-3 py-2 border border-gray-200 rounded-lg bg-white input-shadow">
                                <div className="flex items-center gap-2">
                                    <div className="w-4 h-4 rounded-full overflow-hidden border border-gray-200 bg-white flex items-center justify-center">
                                        <span className="text-xs">{selectedCountry.flag}</span>
                                    </div>
                                    <SelectValue placeholder={selectedCountry.name} />
                                </div>
                            </SelectTrigger>
                            <SelectContent>
                                {countries.map((country) => (
                                    <SelectItem key={country.code} value={country.code}>
                                        <div className="flex items-center gap-2">
                                            <span className="text-base">{country.flag}</span>
                                            <span>{country.name}</span>
                                        </div>
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>

                    {/* Amount Input with Button */}
                    <div className="flex gap-2 items-end w-full">
                        <div className="flex-1">
                            <Input
                                label="How much are you planning to spend?"
                                placeholder="€3,600"
                                value={formatCurrency(spendAmount)}
                                onChange={handleSpendAmountChange}
                                className="w-full h-9"
                            />
                        </div>
                        <Button variant="secondary" className="h-9 px-4 text-[14px] font-normal bg-gray-100 text-gray-900 hover:bg-gray-200">
                            A VAT of {formatCurrency(spendAmount * selectedCountry.vatRate)}
                        </Button>
                    </div>

                    {/* Slider */}
                    <div className="w-full">
                        <Slider
                            value={sliderValue}
                            onValueChange={handleSliderChange}
                            max={100}
                            min={5}
                            step={5}
                            className="w-full"
                        />
                    </div>

                    {/* Info Text */}
                    <div className="flex gap-2 items-center">
                        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center flex-shrink-0 p-2 border border-gray-100">
                            <svg width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 0L2 5L12 10L22 5L12 0Z" stroke="#64748B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M2 15L12 20L22 15" stroke="#64748B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M2 10L12 15L22 10" stroke="#64748B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <p className="text-[14px] text-gray-600 font-light leading-[1.43]">
                            Our refund rates are progressive; the more you spend, the higher the refund.
                        </p>
                    </div>
                </div>

                {/* Right Column - Results Comparison */}
                <div className="relative flex flex-col w-full xl:w-[333px]">
                    {/* TravelMoney Result */}
                    <div className="bg-gray-900 text-white rounded-lg relative" style={{ padding: '24px' }}>
                        <div className="flex flex-col justify-center text-center">
                            <p className="text-[14px] text-gray-300 font-light leading-[1.43] mb-2">
                                Your refund with TravelMoney
                            </p>
                            <p className="text-[48px] font-medium text-primary-500 leading-[1] mb-2">
                                {formatCurrency(travelMoneyRefund)}
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

                    {/* VS Badge */}
                    <div className="flex justify-center py-3">
                        <div className="bg-gray-900 text-white rounded-full flex items-center justify-center w-6 h-6">
                            <span className="text-[12px] font-light">vs</span>
                        </div>
                    </div>

                    {/* Competitor Result */}
                    <div className="bg-white border border-gray-100 rounded-lg" style={{ padding: '24px' }}>
                        <div className="flex flex-col justify-center text-center">
                            <p className="text-[14px] text-gray-700 font-light leading-[1.43] mb-2">
                                Your refund with other apps
                            </p>
                            <p className="text-[18px] font-medium text-gray-500 leading-[1.56] mb-2">
                                {formatCurrency(competitorRefund)}
                            </p>
                            <p className="text-[14px] text-gray-500 font-light leading-[1.43]">
                                ~Weeks, often months
                            </p>
                        </div>
                    </div>
                </div>
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