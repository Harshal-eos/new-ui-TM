"use client"

import * as React from "react"

const Features = () => {
    return (
        <section className="w-full bg-white py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 2xl:py-28" style={{
            marginTop
                : '15rem'
        }}  >
            <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12 2xl:px-16">
                {/* Section Title */}
                <div className="flex items-center justify-center text-center mb-12 sm:mb-16 md:mb-20 lg:mb-24">
                    <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-serif leading-tight font-normal max-w-5xl mx-auto px-2 sm:px-4 text-center" style={{ color: '#7826F2' }}>
                        Coupled with<br />
                        intelligent tools
                    </h2>
                </div>

                {/* Features Grid */}
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12">
                        {/* AI Shopping Assistant - Large Card */}
                        <div className="lg:col-span-1">
                            <div className="bg-gray-100 rounded-lg p-6 sm:p-8 md:p-10 flex flex-col justify-end h-full min-h-[300px] sm:min-h-[350px] md:min-h-[400px]">
                                <div className="space-y-2 sm:space-y-3 md:space-y-4">
                                    <h3 className="text-xl sm:text-2xl md:text-3xl font-serif font-normal leading-tight" style={{ color: '#7826F2' }}>
                                        AI Shopping Assistant
                                    </h3>
                                    <p className="text-gray-700 font-light leading-relaxed text-sm sm:text-base md:text-lg">
                                        Get personalized brand recommendations, real-time savings calculations, and insider tips tailored to your destination and preferences.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Right Column - Stacked Features */}
                        <div className="lg:col-span-1 flex flex-col gap-4 sm:gap-6 md:gap-8">
                            {/* Wallet Card */}
                            <div className="flex-1">
                                <div className="bg-gray-100 rounded-lg p-6 sm:p-8 flex flex-col justify-end h-full min-h-[200px] sm:min-h-[220px]">
                                    <div className="space-y-2 sm:space-y-3">
                                        <h3 className="text-xl sm:text-2xl font-serif font-normal leading-tight" style={{ color: '#7826F2' }}>
                                            Wallet
                                        </h3>
                                        <p className="text-gray-700 font-light leading-relaxed text-sm sm:text-base">
                                            Store payment methods securely, track refund status, and manage your VAT returns all in one centralized dashboard.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Referral System Card */}
                            <div className="flex-1">
                                <div className="bg-gray-100 rounded-lg p-6 sm:p-8 flex flex-col justify-end h-full min-h-[200px] sm:min-h-[220px]">
                                    <div className="space-y-2 sm:space-y-3">
                                        <h3 className="text-xl sm:text-2xl font-serif font-normal leading-tight" style={{ color: '#7826F2' }}>
                                            Referral System
                                        </h3>
                                        <p className="text-gray-700 font-light leading-relaxed text-sm sm:text-base">
                                            Earn higher VAT refund percentages by inviting friends. Unlock tier benefits from 90% to 100% VAT back as your network grows.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export { Features }