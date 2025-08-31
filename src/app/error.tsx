'use client'

import { useEffect } from 'react'
import { Button } from '@/components/ui/button'

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    useEffect(() => {
        console.error(error)
    }, [error])

    return (
        <div className="min-h-screen bg-primary-50 flex items-center justify-center px-6">
            <div className="text-center space-y-6 max-w-md">
                <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center mx-auto">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="12" r="10" stroke="#EF4444" strokeWidth="2" />
                        <line x1="15" y1="9" x2="9" y2="15" stroke="#EF4444" strokeWidth="2" />
                        <line x1="9" y1="9" x2="15" y2="15" stroke="#EF4444" strokeWidth="2" />
                    </svg>
                </div>
                <div className="space-y-2">
                    <h2 className="text-2xl font-serif text-gray-900">Something went wrong!</h2>
                    <p className="text-gray-600">We apologize for the inconvenience. Please try again.</p>
                </div>
                <Button onClick={reset} className="mx-auto">
                    Try again
                </Button>
            </div>
        </div>
    )
}
