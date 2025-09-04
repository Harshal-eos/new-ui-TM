"use client"

import * as React from "react"
import Image from "next/image"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
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

    const handleCountryChange = (code: string) => {
        const country = countries.find(c => c.code === code)
        if (country) setSelectedCountry(country)
    }

    return (
        <div className="calculator w-[805px] p-10 bg-white rounded-lg shadow-[0px_1px_2px_-1px_rgba(0,0,0,0.10)] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.10)] outline outline-1 outline-offset-[-1px] outline-slate-100 inline-flex justify-start items-start gap-10 overflow-hidden" style={{ padding: '20px 40px' }}>
            {/* Left Side - Form Controls */}
            <div className="inline-flex flex-col justify-start items-start gap-8">


                {/* Header */}
                <div className="flex flex-col justify-start items-start gap-2">
                    <div className="justify-start text-2xl font-normal font-['Instrument_Serif'] leading-tight" style={{ color: '#7826F2' }}>
                        Maximize your travel budget
                    </div>
                    <div className="justify-start text-slate-500 text-sm font-light font-['Geist'] leading-tight">
                        Compare TravelMoney refunds with the competition
                    </div>
                </div>

                {/* Country Selection */}
                <div className="self-stretch flex flex-col justify-start items-start gap-3">
                    <div className="self-stretch justify-start text-black text-sm font-medium font-['Geist'] leading-none">
                        Where will you be shopping?
                    </div>
                    <div className="self-stretch h-10 px-4 py-2 bg-white rounded-lg shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] outline outline-1 outline-offset-[-1px] outline-gray-200 inline-flex justify-start items-center gap-3 overflow-hidden" style={{ padding: '10px' }}>
                        <div className="w-4 h-4 relative overflow-hidden">
                            <div className="w-3 h-3 left-[1.50px] top-[1.50px] absolute rounded-full overflow-hidden">
                                <div className="w-3 h-3 left-0 top-0 absolute bg-white"></div>
                                <div className="w-1 h-3 left-0 top-0 absolute bg-sky-950"></div>
                                <div className="w-1 h-3 left-[8.67px] top-0 absolute bg-red-600"></div>
                            </div>
                        </div>
                        <Select value={selectedCountry.code} onValueChange={handleCountryChange}>
                            <SelectTrigger className="w-full h-full border-0 bg-transparent p-0 focus:ring-0">
                                <SelectValue placeholder={selectedCountry.name} />
                            </SelectTrigger>
                            <SelectContent>
                                {countries.map((country) => (
                                    <SelectItem key={country.code} value={country.code}>
                                        <div className="flex items-center gap-3">
                                            <span className="text-base">{country.flag}</span>
                                            <span>{country.name}</span>
                                        </div>
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>
                </div>

                {/* Amount Input */}
                <div className="self-stretch flex flex-col justify-start items-start gap-3">
                    <div className="self-stretch justify-start text-black text-sm font-medium font-['Geist'] leading-none">
                        How much are you planning to spend?
                    </div>
                    <div className="self-stretch flex gap-3 items-end">
                        <input
                            type="text"
                            value={formatCurrency(spendAmount)}
                            onChange={handleSpendAmountChange}
                            className="flex-1 h-10 px-4 py-2 border border-gray-200 rounded-lg bg-white text-gray-900 focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                            placeholder="€3,600"
                            style={{ padding: '10px' }}
                        />
                        <Button
                            style={{ padding: '10px' }}
                            variant="secondary" className="h-10 px-5 py-2 text-sm bg-gray-100 hover:bg-gray-200 whitespace-nowrap">
                            A VAT of {formatCurrency(spendAmount * selectedCountry.vatRate)}
                        </Button>
                    </div>
                </div>

                {/* Slider */}
                <div className="self-stretch flex flex-col justify-start items-start gap-4">
                    <div data-range="No" className="w-96 bg-gray-100 rounded-full inline-flex flex-col justify-start items-start gap-3">
                        <div className="self-stretch h-2 pr-36 flex flex-col justify-start items-start gap-3">
                            <div className="self-stretch flex-1 relative flex flex-col justify-start items-start">
                                <div className="self-stretch h-2 relative bg-gray-800 rounded-full"></div>
                                <div data-state="Default" className="w-5 h-5 left-[242px] top-[-6px] absolute bg-white rounded-full shadow-[0px_1px_2px_-1px_rgba(0,0,0,0.10)] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.10)] border border-gray-800"></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Progressive Refund Info */}
                <div className="self-stretch flex flex-col justify-start items-start gap-3">
                    <div className="flex items-start gap-3">
                        <div className="w-12 h-12 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Image
                                src="/images/PiggyBank.webp"
                                alt="Piggy Bank"
                                width={24}
                                height={24}
                                className="w-7 h-7"
                            />
                        </div>
                        <div className="justify-start text-slate-500 text-sm font-light font-['Geist'] leading-tight">
                            Our refund rates are progressive; the more you spend,<br />the higher the refund.
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Side - Comparison Results */}
            <div className="w-80 self-stretch relative bg-slate-100 rounded-lg outline outline-1 outline-offset-[-1px] outline-slate-100 inline-flex flex-col justify-start items-start overflow-hidden">
                {/* TravelMoney Result */}
                <div className="self-stretch flex-1 px-10 py-10 relative bg-cyan-50 flex flex-col justify-center items-start">
                    <div className="self-stretch text-center justify-start text-slate-900 text-sm font-light font-['Geist'] leading-tight">
                        Your refund with TravelMoney
                    </div>
                    <div className="self-stretch text-center justify-start text-blue-700 text-5xl font-medium font-['Geist'] leading-[48px]">
                        {formatCurrency(travelMoneyRefund)}
                    </div>
                    <div className="self-stretch text-center justify-start text-slate-500 text-sm font-light font-['Geist'] leading-tight">
                        Instant refunds
                    </div>

                    {/* Branding Logo - Top Right Corner */}
                    <div className="absolute top-5 right-5">
                        <Image
                            src="/images/cal-branding.webp"
                            alt="TravelMoney Calculator Branding"
                            width={80}
                            height={30}
                            className="h-8 w-auto"
                            style={{
                                backgroundColor: 'transparent',
                                background: 'transparent',
                                mixBlendMode: 'multiply'
                            }}
                        />
                    </div>
                </div>

                {/* Competitor Result */}
                <div className="self-stretch px-10 py-10 bg-white flex flex-col justify-center items-center overflow-hidden">
                    <div className="w-72 text-center justify-center text-slate-900 text-sm font-light font-['Geist'] leading-tight">
                        Your refund with other apps
                    </div>
                    <div className="w-72 text-center justify-center text-black text-lg font-medium font-['Geist'] leading-7">
                        {formatCurrency(competitorRefund)}
                    </div>
                    <div className="w-72 text-center justify-center text-slate-500 text-sm font-light font-['Geist'] leading-tight">
                        ~Weeks, often months
                    </div>
                </div>

                {/* VS Divider */}
                <div className="w-6 h-6 left-[155px] top-[220px] absolute bg-white rounded-full flex flex-col justify-center items-center overflow-hidden">
                    <div className="self-stretch text-center justify-start text-black text-xs font-light font-['Geist'] leading-none">
                        vs
                    </div>
                </div>
            </div>
        </div>
    )
}

const TravelMoneyLogo = () => (
    <div className="w-5 h-5 text-white">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" stroke="currentColor" strokeWidth="2" />
            <polyline points="3.27,6.96 12,12.01 20.73,6.96" stroke="currentColor" strokeWidth="2" />
            <line x1="12" y1="22.08" x2="12" y2="12" stroke="currentColor" strokeWidth="2" />
        </svg>
    </div>
)

export { Calculator }
