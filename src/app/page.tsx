import Link from "next/link"
import { Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Navigation } from "@/components/sections/navigation"
import { Hero } from "@/components/sections/hero"
import { Features } from "@/components/sections/features"
import { Steps } from "@/components/sections/steps"
import { FAQ } from "@/components/sections/faq"
import { Footer } from "@/components/sections/footer"
import { Calculator } from "@/components/sections/calculator"

const TravelMoneyLogo = () => (
  <div className="w-8 h-8 flex items-center justify-center">
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10.51 1.42L27.83 28.13" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M20.17 3.71L30.11 31.22" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M2.04 0.58L24.69 20.82" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </div>
)

export default function Home() {
  return (
    <div className="relative h-[4738px] bg-primary-50 mx-auto overflow-hidden">
      {/* Navigation - Positioned at (44, 44) */}
      <div
        className="absolute z-50"
        style={{
          left: '44px',
          top: '44px',
          width: '1640px',
        }}
      >
        <Navigation />
      </div>

      {/* Hero Section - Group 1 + Frame 12 */}
      <div className="absolute inset-0">
        <Hero />
      </div>

      {/* Calculator - Positioned at (461, 914) */}
      <div
        className="absolute z-40"
        style={{
          left: '461px',
          top: '914px',
          width: '805px',
        }}
      >
        <Calculator />
      </div>

      {/* Features Section - Frame 15 at y: 1182 */}
      <div
        className="absolute w-full"
        style={{
          top: '1182px',
          height: '1117px',
        }}
      >
        <Features />
      </div>

      {/* Steps Section - Frame 17 at y: 2299 */}
      <div
        className="absolute w-full"
        style={{
          top: '2299px',
          height: '1117px',
        }}
      >
        <Steps />
      </div>

      {/* FAQ Section - Frame 16 at y: 3416 */}
      <div
        className="absolute w-full"
        style={{
          top: '3416px',
          height: '880px',
        }}
      >
        <FAQ />
      </div>

      {/* Footer - Frame 18 at y: 4296 */}
      <div
        className="absolute w-full"
        style={{
          top: '4296px',
        }}
      >
        <Footer />
      </div>

      {/* Mobile Layout - Hidden on desktop */}
      <div className="lg:hidden absolute inset-0 bg-primary-50">
        {/* Mobile Navigation */}
        <nav className="w-full px-6 py-6">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex-shrink-0">
              <TravelMoneyLogo />
            </Link>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm">
                <Globe className="w-4 h-4 mr-1" />
                EN
              </Button>
            </div>
          </div>
        </nav>

        {/* Mobile Content */}
        <div className="px-6 py-20 space-y-20">
          {/* Mobile Hero */}
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-serif text-primary-600 leading-tight mb-6">
              Welcome to the future of travel shopping
            </h1>
            <p className="text-lg text-gray-700 font-light max-w-2xl mx-auto">
              Shop abroad in three easy steps.<br />
              Check the country rules for tax-free shopping and get your refund.
            </p>
          </div>

          {/* Mobile Calculator */}
          <Calculator />

          {/* Mobile Features */}
          <Features />

          {/* Mobile Steps */}
          <Steps />

          {/* Mobile FAQ */}
          <FAQ />

          {/* Mobile Footer */}
          <Footer />
        </div>
      </div>
    </div>
  );
}