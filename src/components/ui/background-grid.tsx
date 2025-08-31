"use client"

import * as React from "react"

const GridFrame = ({ name, className = "" }: { name: string; className?: string }) => (
    <div
        className={`w-[200px] h-[120px] border border-gray-300 bg-white ${className}`}
        data-frame={name}
        title={name}
    />
)

const BackgroundGrid = () => {
    return (
        <div className="absolute inset-0">
            <div className="w-full h-full flex flex-col items-center" style={{ gap: '-1px' }}>
                {/* Frame 4 - Row 1 with 9 frames */}
                <div className="flex items-center" style={{ gap: '-1px' }} data-container="Frame 4">
                    <GridFrame name="Frame 1" />
                    <GridFrame name="Frame 2" />
                    <GridFrame name="Frame 3" />
                    <GridFrame name="Frame 5" />
                    <GridFrame name="Frame 6" />
                    <GridFrame name="Frame 7" />
                    <GridFrame name="Frame 8" />
                    <GridFrame name="Frame 9" />
                    <GridFrame name="Frame 10" />
                </div>

                {/* Frame 3 - Row 2 with 7 frames */}
                <div className="flex items-center" style={{ gap: '-1px' }} data-container="Frame 3">
                    <GridFrame name="Frame 1" />
                    <GridFrame name="Frame 2" />
                    <GridFrame name="Frame 3" />
                    <GridFrame name="Frame 4" />
                    <GridFrame name="Frame 5" />
                    <GridFrame name="Frame 6" />
                    <GridFrame name="Frame 7" />
                </div>

                {/* Frame 5 - Row 3 with 5 frames */}
                <div className="flex items-center" style={{ gap: '-1px' }} data-container="Frame 5">
                    <GridFrame name="Frame 3" />
                    <GridFrame name="Frame 4" />
                    <GridFrame name="Frame 5" />
                    <GridFrame name="Frame 6" />
                    <GridFrame name="Frame 7" />
                </div>

                {/* Frame 6 - Row 4 with 3 frames */}
                <div className="flex items-center" style={{ gap: '-1px' }} data-container="Frame 6">
                    <GridFrame name="Frame 3" />
                    <GridFrame name="Frame 6" />
                    <GridFrame name="Frame 7" />
                </div>

                {/* Frame 7 - Row 5 with 1 frame */}
                <div className="flex items-center" style={{ gap: '-1px' }} data-container="Frame 7">
                    <GridFrame name="Frame 6" />
                </div>

                {/* Frame 8 - Row 6 with 1 frame */}
                <div className="flex items-center" style={{ gap: '-1px' }} data-container="Frame 8">
                    <GridFrame name="Frame 6" />
                </div>
            </div>
        </div>
    )
}

export { BackgroundGrid }
