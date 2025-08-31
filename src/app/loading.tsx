export default function Loading() {
    return (
        <div className="min-h-screen bg-primary-50 flex items-center justify-center">
            <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-primary-600 rounded-lg flex items-center justify-center animate-pulse">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21.5 14.5L16.5 19.5L12.5 15.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M21.5 4.5L16.5 9.5L12.5 5.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M2.5 4.5H16.5" stroke="white" strokeWidth="2" strokeLinecap="round" />
                        <path d="M2.5 14.5H16.5" stroke="white" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                </div>
                <p className="text-gray-600 font-medium">Loading TravelMoney...</p>
            </div>
        </div>
    )
}
