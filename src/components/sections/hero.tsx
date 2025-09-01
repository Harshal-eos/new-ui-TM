"use client"

import * as React from "react"
import Image from "next/image"
import { section } from "framer-motion/client"
import { motion } from "framer-motion";

const Hero = () => {
    return (
        <section className="relative flex flex-col items-center justify-center min-h-screen text-center overflow-hidden bg-gradient-to-b from-sky-50 to-sky-100">
            {/* Background Eiffel Tower */}
            <div className="absolute inset-0 flex items-center justify-center opacity-40">
                <Image
                    src="/images/hero-image.png" // <- replace with your Eiffel Tower asset
                    alt="Eiffel Tower"
                    width={500}
                    height={500}
                    className="object-contain"
                    priority
                />
            </div>

            {/* Content */}
            <div className="relative z-10 px-4">
                {/* Heading */}
                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl sm:text-5xl md:text-6xl font-bold text-blue-700"
                >
                    Welcome to the{" "}
                    <span className="italic font-serif">future of travel shopping</span>
                </motion.h1>

                {/* Emojis */}
                <div className="relative mt-6 flex justify-center">
                    {/* 😎 */}
                    <motion.div
                        initial={{ rotate: -15, opacity: 0 }}
                        animate={{ rotate: -15, opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="absolute -top-16 -left-16 bg-white shadow-lg rounded-xl p-2 rotate-[-15deg]"
                    >
                        <span className="text-3xl">😎</span>
                    </motion.div>

                    {/* 💌 */}
                    <motion.div
                        initial={{ rotate: 12, opacity: 0 }}
                        animate={{ rotate: 12, opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="absolute top-12 -left-20 bg-white shadow-lg rounded-xl p-2 rotate-[12deg]"
                    >
                        <span className="text-3xl">💌</span>
                    </motion.div>

                    {/* 🎁 */}
                    <motion.div
                        initial={{ rotate: 10, opacity: 0 }}
                        animate={{ rotate: 10, opacity: 1 }}
                        transition={{ delay: 0.7 }}
                        className="absolute top-8 -right-20 bg-white shadow-lg rounded-xl p-2 rotate-[10deg]"
                    >
                        <span className="text-3xl">🎁</span>
                    </motion.div>
                </div>

                {/* Subtext */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 0.6 }}
                    className="mt-24 text-gray-600 text-base sm:text-lg max-w-xl mx-auto"
                >
                    Shop abroad in <span className="font-semibold">three easy steps.</span>{" "}
                    <br />
                    Check the country rules for tax-free shopping and get your refund.
                </motion.p>
            </div>
        </section>
    )
}

export { Hero }