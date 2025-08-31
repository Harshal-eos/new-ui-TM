import Script from 'next/script'

const StructuredData = () => {
    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "TravelMoney",
        "url": "https://travelmoney.com",
        "logo": "https://travelmoney.com/images/logo.png",
        "description": "Maximum VAT refunds for international shoppers. Get up to 100% VAT refunds when shopping abroad with instant refunds and AI shopping assistant.",
        "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "customer service",
            "availableLanguage": ["English"]
        },
        "sameAs": [
            "https://twitter.com/travelmoney",
            "https://linkedin.com/company/travelmoney"
        ]
    }

    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "VAT Refund Service",
        "provider": {
            "@type": "Organization",
            "name": "TravelMoney"
        },
        "description": "Get instant VAT refunds when shopping abroad. Up to 100% VAT back with zero paperwork and AI shopping assistance.",
        "serviceType": "VAT Refund Service",
        "areaServed": {
            "@type": "Place",
            "name": "Europe"
        },
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "VAT Refund Plans",
            "itemListElement": [
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Instant VAT Refunds"
                    },
                    "description": "Get up to 100% VAT refunds instantly at the airport"
                }
            ]
        }
    }

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "How much can I save with VAT refunds?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "You can get back up to 16% of your purchase price, depending on the country's VAT rate and your TravelMoney tier level. For example, on a €1,000 purchase in France (20% VAT), you could receive up to €160 back."
                }
            },
            {
                "@type": "Question",
                "name": "What's the minimum purchase amount to qualify?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The minimum purchase amount varies by country, typically ranging from €50 to €175. Most European countries require a minimum of €75 per store per day to qualify for VAT refunds."
                }
            },
            {
                "@type": "Question",
                "name": "How long does it take to receive my refund?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "With TravelMoney, you receive instant refunds at the airport after scanning your barcode. Traditional methods can take weeks or even months to process."
                }
            }
        ]
    }

    return (
        <>
            <Script
                id="organization-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(organizationSchema),
                }}
            />
            <Script
                id="service-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(serviceSchema),
                }}
            />
            <Script
                id="faq-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(faqSchema),
                }}
            />
        </>
    )
}

export { StructuredData }
