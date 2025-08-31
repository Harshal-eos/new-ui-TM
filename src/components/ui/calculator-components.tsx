"use client"

import * as React from "react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { formatCurrency } from "@/lib/utils"

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

const Frame14_Header = () => (
    <div className="flex flex-col gap-1" data-frame="Frame 14">
        <h3 className="text-[32px] font-serif text-gray-900 leading-[1] font-normal">
            Maximize your travel budget
        </h3>
        <p className="text-[14px] font-light text-gray-500 leading-[1.43]">
            Compare TravelMoney refunds with the competition
        </p>
    </div>
)

const SelectTrigger_Country = ({ selectedCountry, onCountryChange }: {
    selectedCountry: Country
    onCountryChange: (code: string) => void
}) => (
    <div className="flex flex-col gap-2 w-full" data-frame="Select">
        <label className="text-[14px] font-medium text-gray-900 leading-[1]">
            Where will you be shopping?
        </label>
        <Select value={selectedCountry.code} onValueChange={onCountryChange}>
            <SelectTrigger
                className="w-full h-10 px-3 py-2 border border-gray-200 rounded-lg bg-white input-shadow"
                data-frame="_SelectTrigger"
            >
                <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full overflow-hidden border border-gray-200 bg-white flex items-center justify-center" data-frame="Icon / CircleDashed">
                        <span className="text-xs">{selectedCountry.flag}</span>
                    </div>
                    <SelectValue placeholder={selectedCountry.name} data-frame="PlaceholderText" />
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
)

const InputButton_Amount = ({
    spendAmount,
    onAmountChange,
    vatAmount
}: {
    spendAmount: number
    onAmountChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    vatAmount: number
}) => (
    <div className="flex gap-2 items-end w-full" data-frame="Input + Button">
        <div className="flex-1">
            <Input
                label="How much are you planning to spend?"
                placeholder="€3,600"
                value={formatCurrency(spendAmount)}
                onChange={onAmountChange}
                className="w-full h-9"
                data-frame="Input"
            />
        </div>
        <Button
            variant="secondary"
            className="h-9 px-4 text-[14px] font-normal bg-gray-100 text-gray-900 hover:bg-gray-200"
            data-frame="Button"
        >
            A VAT of {formatCurrency(vatAmount)}
        </Button>
    </div>
)

const SliderComponent = ({ value, onChange }: {
    value: number[]
    onChange: (value: number[]) => void
}) => (
    <div className="w-[400px]" data-frame="Slider">
        <Slider
            value={value}
            onValueChange={onChange}
            max={100}
            min={5}
            step={5}
            className="w-full"
        />
    </div>
)

const Frame19_InfoText = () => (
    <div className="flex gap-1 items-center" data-frame="Frame 19">
        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center flex-shrink-0 p-2 border border-gray-100" data-frame="Frame 18">
            <svg width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg" data-frame="PiggyBank">
                <path d="M12 0L2 5L12 10L22 5L12 0Z" stroke="#64748B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M2 15L12 20L22 15" stroke="#64748B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M2 10L12 15L22 10" stroke="#64748B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </div>
        <p className="text-[14px] text-gray-600 font-light leading-[1.43]">
            Our refund rates are progressive; the more you spend, the higher the refund.
        </p>
    </div>
)

const Frame17_LeftColumn = ({
    selectedCountry,
    spendAmount,
    sliderValue,
    onCountryChange,
    onAmountChange,
    onSliderChange
}: {
    selectedCountry: Country
    spendAmount: number
    sliderValue: number[]
    onCountryChange: (code: string) => void
    onAmountChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    onSliderChange: (value: number[]) => void
}) => (
    <div className="flex flex-col gap-6 flex-1" data-frame="Frame 17">
        <Frame14_Header />
        <SelectTrigger_Country selectedCountry={selectedCountry} onCountryChange={onCountryChange} />
        <InputButton_Amount
            spendAmount={spendAmount}
            onAmountChange={onAmountChange}
            vatAmount={spendAmount * selectedCountry.vatRate}
        />
        <SliderComponent value={sliderValue} onChange={onSliderChange} />
        <Frame19_InfoText />
    </div>
)

export { Frame17_LeftColumn, Frame14_Header, SelectTrigger_Country, InputButton_Amount, SliderComponent, Frame19_InfoText }
