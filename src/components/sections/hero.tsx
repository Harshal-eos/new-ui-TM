"use client"

import * as React from "react"
import Image from "next/image"


const Hero = () => {
    return (
        <section className="relative flex flex-col items-center min-h-[115vh] text-center overflow-hidden bg-gradient-to-b from-sky-50 to-sky-100">
            {/* Eiffel Tower Image at Top */}
            <div className="w-full flex justify-center pt-20 pb-16 !mb-2">
                <Image
                    src="/images/hero-image.png"
                    alt="Eiffel Tower"
                    width={400}
                    height={400}
                    className="object-contain opacity-60"
                    priority
                />
            </div>

            {/* Content Below Image */}
            <div className="flex flex-col items-center justify-center px-4 w-[36rem]">
                {/* Heading */}
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-blue-700">
                    Welcome to the{" "}
                    <span className="italic font-serif">future of travel shopping</span>
                </h1>

                {/* Floating Icon Cards */}
                <div className="relative mt-6 flex justify-center">
                    {/* Glasses Icon */}
                    <div className="absolute -top-16 -left-16 bg-white shadow-lg rounded-xl p-3 rotate-[-15deg]">
                        <Image
                            src="/images/glasses-icon.png"
                            alt="Cool Glasses"
                            width={32}
                            height={32}
                            className="w-8 h-8"
                        />
                    </div>

                    {/* Heart Icon */}
                    <div className="absolute top-12 -left-20">
                        <Image
                            src="/images/heart-icon.png"
                            alt="Love Heart"
                            width={32}
                            height={32}
                            className="w-8 h-8"
                        />
                    </div>

                    {/* Gift Icon */}
                    <div className="absolute top-8 -right-20 bg-white shadow-lg rounded-xl p-3 rotate-[10deg]">
                        <Image
                            src="/images/gift-icon.png"
                            alt="Gift Box"
                            width={32}
                            height={32}
                            className="w-8 h-8"
                        />
                    </div>
                </div>

                {/* Subtext */}
                <p className="mt-24 text-gray-600 text-base sm:text-lg mx-auto">
                    Shop abroad in <span className="font-semibold">three easy steps.</span>{" "}
                    <br />
                    Check the country rules for tax-free shopping and get your refund.
                </p>
            </div>
        </section>
    )
}

export { Hero }