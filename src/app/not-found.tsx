import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function NotFound() {
    return (
        <div className="min-h-screen bg-primary-50 flex items-center justify-center px-6">
            <div className="text-center space-y-6 max-w-md">
                <div className="w-16 h-16 bg-primary-600 rounded-lg flex items-center justify-center mx-auto">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21.5 14.5L16.5 19.5L12.5 15.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M21.5 4.5L16.5 9.5L12.5 5.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M2.5 4.5H16.5" stroke="white" strokeWidth="2" strokeLinecap="round" />
                        <path d="M2.5 14.5H16.5" stroke="white" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                </div>
                <div className="space-y-2">
                    <h2 className="text-4xl font-serif text-gray-900">404</h2>
                    <h3 className="text-xl font-medium text-gray-700">Page Not Found</h3>
                    <p className="text-gray-600">The page you&apos;re looking for doesn&apos;t exist.</p>
                </div>
                <Link href="/">
                    <Button>
                        Return Home
                    </Button>
                </Link>
            </div>
        </div>
    )
}
