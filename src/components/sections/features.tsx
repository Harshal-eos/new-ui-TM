"use client"

import * as React from "react"

const Features = () => {
    return (
        <section className="w-full h-full bg-white flex flex-col justify-center items-center" style={{ padding: '44px' }}>
            <div className="h-[1117px] flex flex-col justify-center items-center gap-11">
                {/* Section Title */}
                <div className="text-center">
                    <h2 className="text-[96px] font-serif text-primary-600 leading-[1] tracking-[-0.03em] w-[600px] font-normal">
                        Coupled with intelligent tools
                    </h2>
                </div>

                {/* Features Grid - Frame 27 */}
                <div className="flex gap-4 w-[1260px] h-[558px]">
                    {/* Left Column - AI Shopping Assistant (Frame 23) */}
                    <div className="bg-gray-100 rounded-lg flex flex-col justify-end flex-1 p-6">
                        <div className="flex flex-col gap-1">
                            <h3 className="text-[24px] font-serif text-primary-600 leading-[1] tracking-[-0.03em] font-normal">
                                AI Shopping Assistant
                            </h3>
                            <p className="text-[16px] font-light text-gray-700 leading-[1.5]">
                                Get personalized brand recommendations, real-time savings calculations, and insider tips tailored to your destination and preferences.
                            </p>
                        </div>
                    </div>

                    {/* Right Column - Two stacked features (Frame 26) */}
                    <div className="flex flex-col gap-4 w-[622px]">
                        {/* Wallet Feature (Frame 25) */}
                        <div className="bg-gray-100 rounded-lg flex-1 flex flex-col justify-end p-6">
                            <div className="flex flex-col gap-1">
                                <h3 className="text-[24px] font-serif text-primary-600 leading-[1] tracking-[-0.03em] font-normal">
                                    Wallet
                                </h3>
                                <p className="text-[16px] font-light text-gray-700 leading-[1.5]">
                                    Store payment methods securely, track refund status, and manage your VAT returns all in one centralized dashboard.
                                </p>
                            </div>
                        </div>

                        {/* Referral System Feature (Frame 26) */}
                        <div className="bg-gray-100 rounded-lg flex-1 flex flex-col justify-end p-6">
                            <div className="flex flex-col gap-1">
                                <h3 className="text-[24px] font-serif text-primary-600 leading-[1] tracking-[-0.03em] font-normal">
                                    Referral System
                                </h3>
                                <p className="text-[16px] font-light text-gray-700 leading-[1.5]">
                                    Earn higher VAT refund percentages by inviting friends. Unlock tier benefits from 90% to 100% VAT back as your network grows.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export { Features }