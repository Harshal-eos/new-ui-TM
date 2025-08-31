"use client"

import * as React from "react"
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
        <div className="w-full max-w-5xl bg-white/95 backdrop-blur-sm border border-white/20 rounded-2xl shadow-2xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                {/* Left Column - Form Controls */}
                <div className="lg:col-span-2 p-8 space-y-6">
                    {/* Header */}
                    <div className="space-y-2">
                        <h3 className="text-2xl font-serif text-gray-900 font-normal">
                            Maximize your travel budget
                        </h3>
                        <p className="text-sm text-gray-600 font-light">
                            Compare TravelMoney refunds with the competition
                        </p>
                    </div>

                    {/* Country Selection */}
                    <div className="space-y-3">
                        <label className="text-sm font-medium text-gray-900">
                            Where will you be shopping?
                        </label>
                        <Select value={selectedCountry.code} onValueChange={handleCountryChange}>
                            <SelectTrigger className="w-full h-11 px-4 border border-gray-200 rounded-lg bg-white">
                                <div className="flex items-center gap-3">
                                    <span className="text-base">{selectedCountry.flag}</span>
                                    <SelectValue placeholder={selectedCountry.name} />
                                </div>
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

                    {/* Amount Input */}
                    <div className="space-y-3">
                        <label className="text-sm font-medium text-gray-900">
                            How much are you planning to spend?
                        </label>
                        <div className="flex gap-3 items-end">
                            <input
                                type="text"
                                value={formatCurrency(spendAmount)}
                                onChange={handleSpendAmountChange}
                                className="flex-1 h-11 px-4 border border-gray-200 rounded-lg bg-white text-gray-900 focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                                placeholder="€3,600"
                            />
                            <Button variant="secondary" className="h-11 px-4 text-sm bg-gray-100 hover:bg-gray-200 whitespace-nowrap">
                                A VAT of {formatCurrency(spendAmount * selectedCountry.vatRate)}
                            </Button>
                        </div>
                    </div>

                    {/* Slider */}
                    <div className="space-y-4">
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
                    <div className="flex items-start gap-3">
                        <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="#64748B" strokeWidth="1.5" />
                                <path d="M2 17L12 22L22 17" stroke="#64748B" strokeWidth="1.5" />
                                <path d="M2 12L12 17L22 12" stroke="#64748B" strokeWidth="1.5" />
                            </svg>
                        </div>
                        <p className="text-sm text-gray-600 font-light leading-relaxed">
                            Our refund rates are progressive; the more you spend, the higher the refund.
                        </p>
                    </div>
                </div>

                {/* Right Column - Results */}
                <div className="bg-gray-50/80 p-6 space-y-3">
                    {/* TravelMoney Result */}
                    <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-xl p-6 relative overflow-hidden">
                        <div className="text-center space-y-2">
                            <p className="text-xs text-gray-300">Your refund with TravelMoney</p>
                            <p className="text-4xl font-bold text-primary-400">
                                {formatCurrency(travelMoneyRefund)}
                            </p>
                            <p className="text-xs text-gray-400">Instant refunds</p>
                        </div>

                        {/* Logo */}
                        <div className="absolute top-3 right-3">
                            <TravelMoneyLogo />
                        </div>

                        {/* Decorative element */}
                        <div className="absolute -top-2 -right-2 w-16 h-16 bg-primary-500/20 rounded-full blur-xl" />
                    </div>

                    {/* VS Divider */}
                    <div className="flex justify-center py-2">
                        <div className="bg-gray-900 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-medium">
                            vs
                        </div>
                    </div>

                    {/* Competitor Result */}
                    <div className="bg-white border border-gray-200 rounded-xl p-6 text-center space-y-2">
                        <p className="text-xs text-gray-600">Your refund with other apps</p>
                        <p className="text-3xl font-bold text-gray-500">
                            {formatCurrency(competitorRefund)}
                        </p>
                        <p className="text-xs text-gray-500">~Weeks, often months</p>
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
