"use client"

import * as React from "react"

const Features = () => {
    return (
        <section className="w-full bg-white py-20">
            <div className="container mx-auto px-6">
                {/* Section Title */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl lg:text-6xl font-serif text-primary-600 leading-tight font-normal max-w-3xl mx-auto">
                        Coupled with intelligent tools
                    </h2>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {/* AI Shopping Assistant */}
                    <div className="lg:col-span-2 bg-gray-100 rounded-2xl p-8 flex flex-col justify-end min-h-[300px]">
                        <div className="space-y-3">
                            <h3 className="text-2xl font-serif text-primary-600 font-normal">
                                AI Shopping Assistant
                            </h3>
                            <p className="text-gray-700 font-light leading-relaxed">
                                Get personalized brand recommendations, real-time savings calculations, and insider tips tailored to your destination and preferences.
                            </p>
                        </div>
                    </div>

                    {/* Right Column - Stacked Features */}
                    <div className="space-y-6">
                        {/* Wallet */}
                        <div className="bg-gray-100 rounded-2xl p-8 flex flex-col justify-end min-h-[140px]">
                            <div className="space-y-3">
                                <h3 className="text-xl font-serif text-primary-600 font-normal">
                                    Wallet
                                </h3>
                                <p className="text-gray-700 font-light text-sm leading-relaxed">
                                    Store payment methods securely, track refund status, and manage your VAT returns all in one centralized dashboard.
                                </p>
                            </div>
                        </div>

                        {/* Referral System */}
                        <div className="bg-gray-100 rounded-2xl p-8 flex flex-col justify-end min-h-[140px]">
                            <div className="space-y-3">
                                <h3 className="text-xl font-serif text-primary-600 font-normal">
                                    Referral System
                                </h3>
                                <p className="text-gray-700 font-light text-sm leading-relaxed">
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