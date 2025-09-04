import { Navigation } from "@/components/sections/navigation"
import { Hero } from "@/components/sections/hero"
import { Features } from "@/components/sections/features"
import { Steps } from "@/components/sections/steps"
import { FAQ } from "@/components/sections/faq"
import { Footer } from "@/components/sections/footer"
import { Calculator } from "@/components/sections/calculator"
import { notFound } from "next/navigation"

interface PageProps {
    params: {
        lang: string
    }
}

export default async function Home({ params }: PageProps) {
    const { lang } = await params

    // Validate language parameter
    if (!['en', 'fr', 'es'].includes(lang)) {
        notFound()
    }

    return (
        <main className="min-h-screen">
            {/* Navigation */}
            <Navigation />

            {/* Hero Section with Calculator Overlay */}
            <div className="relative">
                <Hero />

                {/* Calculator positioned as overlay */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 z-40">
                    <Calculator />
                </div>
            </div>

            {/* Content Sections with proper spacing */}
            <div className="">
                <Features />
                <Steps />
                <FAQ />
                <Footer />
            </div>
        </main>
    );
}
