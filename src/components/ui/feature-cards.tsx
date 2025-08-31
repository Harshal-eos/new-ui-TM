"use client"

import * as React from "react"

const Frame23_AIShoppingAssistant = () => (
    <div
        className="bg-gray-100 rounded-lg flex flex-col justify-end flex-1"
        style={{ padding: '24px', gap: '10px' }}
        data-frame="Frame 23"
    >
        <div className="flex flex-col gap-1" data-component="Feature">
            <h3 className="text-[24px] font-serif text-primary-600 leading-[1] tracking-[-0.03em] font-normal text-left">
                AI Shopping Assistant
            </h3>
            <p className="text-[16px] font-light text-gray-700 leading-[1.5] text-left">
                Get personalized brand recommendations, real-time savings calculations, and insider tips tailored to your destination and preferences.
            </p>
        </div>
    </div>
)

const Frame25_Wallet = () => (
    <div
        className="bg-gray-100 rounded-lg flex-1 flex flex-col justify-end"
        style={{ padding: '24px', gap: '10px' }}
        data-frame="Frame 25"
    >
        <div className="flex flex-col gap-1" data-component="Feature">
            <h3 className="text-[24px] font-serif text-primary-600 leading-[1] tracking-[-0.03em] font-normal text-left">
                Wallet
            </h3>
            <p className="text-[16px] font-light text-gray-700 leading-[1.5] text-left">
                Store payment methods securely, track refund status, and manage your VAT returns all in one centralized dashboard.
            </p>
        </div>
    </div>
)

const Frame26_ReferralSystem = () => (
    <div
        className="bg-gray-100 rounded-lg flex-1 flex flex-col justify-end"
        style={{ padding: '24px', gap: '10px' }}
        data-frame="Frame 26"
    >
        <div className="flex flex-col gap-1" data-component="Feature">
            <h3 className="text-[24px] font-serif text-primary-600 leading-[1] tracking-[-0.03em] font-normal text-left">
                Referral System
            </h3>
            <p className="text-[16px] font-light text-gray-700 leading-[1.5] text-left">
                Earn higher VAT refund percentages by inviting friends. Unlock tier benefits from 90% to 100% VAT back as your network grows.
            </p>
        </div>
    </div>
)

const Frame26_Container = () => (
    <div className="flex flex-col gap-4 w-[622px]" data-frame="Frame 26">
        <Frame25_Wallet />
        <Frame26_ReferralSystem />
    </div>
)

const Frame27_FeaturesGrid = () => (
    <div className="flex gap-4 w-[1260px] h-[558px]" data-frame="Frame 27">
        <Frame23_AIShoppingAssistant />
        <Frame26_Container />
    </div>
)

export { Frame27_FeaturesGrid, Frame23_AIShoppingAssistant, Frame25_Wallet, Frame26_ReferralSystem }
