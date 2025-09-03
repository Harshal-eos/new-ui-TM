"use client"

import * as React from "react"

const Features = () => {
    return (
        <section className="w-full bg-white py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 2xl:py-28 mt-16 sm:mt-20 md:mt-24 lg:mt-28 xl:mt-32">
            <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12 2xl:px-16 mt-[15rem]">
                {/* Section Title */}
                <div className="text-center mb-12 sm:mb-16 md:mb-20 lg:mb-24" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
                    <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-serif text-primary-600 leading-tight font-normal max-w-5xl mx-auto px-2 sm:px-4 text-center">
                        Coupled with<br />
                        intelligent tools
                    </h2>
                </div>

                {/* Features Grid */}
                <div className="max-w-6xl sm:max-w-7xl lg:max-w-8xl xl:max-w-9xl mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12">
                        {/* AI Shopping Assistant - Large Card */}
                        <div className="lg:col-span-1">
                            <div className="bg-gray-100 rounded-xl sm:rounded-2xl md:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 flex flex-col justify-end h-full min-h-[180px] xs:min-h-[200px] sm:min-h-[220px] md:min-h-[240px] lg:min-h-[260px] xl:min-h-[280px]">
                                <div className="space-y-2 sm:space-y-3 md:space-y-4 lg:space-y-5">
                                    <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-serif text-primary-600 font-normal leading-tight">
                                        AI Shopping Assitant
                                    </h3>
                                    <p className="text-gray-700 font-light leading-relaxed text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">
                                        Get personalized brand recommendations, real-time savings calculations, and insider tips tailored to your destination and preferences.
                                    </p>
                                </div>
                            </div>
                        </div>


                        {/* Right Column - Stacked Features */}
                        <div className="lg:col-span-1 flex flex-col gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12">
                            {/* Wallet Card */}
                            <div className="flex-1">
                                <div className="bg-gray-100 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 flex flex-col justify-end h-full min-h-[200px] sm:min-h-[220px] md:min-h-[240px] lg:min-h-[260px]">
                                    <div className="space-y-3 sm:space-y-4 md:space-y-5">
                                        <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-serif text-primary-600 font-normal leading-tight">
                                            Wallet
                                        </h3>
                                        <p className="text-gray-700 font-light leading-relaxed text-sm sm:text-base md:text-lg">
                                            Store payment methods securely, track refund status, and manage your VAT returns all in one centralized dashboard.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Referral System Card */}
                            <div className="flex-1">
                                <div className="bg-gray-100 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 flex flex-col justify-end h-full min-h-[200px] sm:min-h-[220px] md:min-h-[240px] lg:min-h-[260px]">
                                    <div className="space-y-3 sm:space-y-4 md:space-y-5">
                                        <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-serif text-primary-600 font-normal leading-tight">
                                            Referral System
                                        </h3>
                                        <p className="text-gray-700 font-light leading-relaxed text-sm sm:text-base md:text-lg">
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