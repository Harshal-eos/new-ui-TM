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
        <section className="w-full h-full bg-white flex flex-col justify-center items-center" style={{ padding: '44px' }}>
            <div className="h-[880px] flex flex-col justify-center items-center gap-11">
                {/* Section Title */}
                <div className="text-center">
                    <h2 className="text-[96px] font-serif leading-[1] tracking-[-0.03em] w-[1114px] font-normal" style={{ color: '#7826F2' }}>
                        Frequently Asked Questions
                    </h2>
                </div>

                {/* FAQ Container */}
                <div className="w-[780px]">
                    <Accordion type="single" collapsible defaultValue="item-0" className="flex flex-col gap-8">
                        {faqs.map((faq, index) => (
                            <AccordionItem key={index} value={`item-${index}`} className="border-b-0 py-0.5">
                                <AccordionTrigger className="flex justify-between items-center w-full py-4 text-left hover:no-underline border-b border-gray-200">
                                    <span className="text-[20px] text-gray-700 font-normal leading-[1] pr-4">
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