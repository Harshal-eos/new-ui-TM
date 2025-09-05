"use client"

import * as React from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const FAQ = () => {
    const faqs = [
        {
            question: "How much can I save with VAT refunds?",
            answer: "You can get back up to 16% of your purchase price, depending on the country's VAT rate and your TravelMoney tier level. For example, on a €1,000 purchase in France (20% VAT), you could receive up to €160 back.",
            defaultOpen: true,
        },
        {
            question: "What's the minimum purchase amount to qualify?",
            answer: "The minimum purchase amount varies by country, typically ranging from €50 to €175. Most European countries require a minimum of €75 per store per day to qualify for VAT refunds.",
            defaultOpen: false,
        },
        {
            question: "How long does it take to receive my refund?",
            answer: "With TravelMoney, you receive instant refunds at the airport after scanning your barcode. Traditional methods can take weeks or even months to process.",
            defaultOpen: false,
        },
    ]

    return (
        <section className="w-full bg-white flex flex-col justify-center items-center py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24">
            <div className="min-h-[400px] sm:min-h-[600px] md:min-h-[700px] lg:min-h-[800px] xl:min-h-[880px] flex flex-col justify-center items-center gap-6 sm:gap-8 md:gap-10 lg:gap-11 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 ">
                {/* Section Title */}
                <div className="text-center w-full max-w-6xl mx-auto">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-serif leading-tight tracking-[-0.03em] font-normal" style={{ color: '#7826F2' }}>
                        Frequently Asked Questions
                    </h2>
                </div>

                {/* FAQ Container */}
                <div className="w-full max-w-4xl mx-auto ">
                    <Accordion type="single" collapsible defaultValue="item-0" className="flex flex-col gap-4 sm:gap-6 md:gap-8">
                        {faqs.map((faq, index) => (
                            <AccordionItem key={index} value={`item-${index}`} className="border-b-0 py-0.5">
                                <AccordionTrigger className="flex justify-between items-center w-full py-3 sm:py-4 text-left hover:no-underline border-b border-gray-200">
                                    <span className="text-base sm:text-lg md:text-xl text-gray-700 font-normal leading-tight pr-2 sm:pr-4">
                                        {faq.question}
                                    </span>
                                </AccordionTrigger>
                                <AccordionContent className="pb-4 pt-4">
                                    <div className="w-[700px]">
                                        <p className="text-[18px] text-gray-800 font-light leading-[1.56]">
                                            {faq.answer}
                                        </p>
                                    </div>
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </section>
    )
}

export { FAQ }