"use client"

import * as React from "react"
import Image from "next/image"

const Frame28_Gift = () => (
    <div
        className="absolute bg-white/10 backdrop-blur-sm rounded-md"
        style={{
            left: '763px',
            top: '-444px',
            width: '118.85px',
            height: '118.85px',
        }}
        data-frame="Frame 28"
    >
        <Image
            src="/images/gift-icon.png"
            alt="Gift"
            width={119}
            height={119}
            className="object-contain"
            style={{
                transform: 'translate(-1.06px, -1.06px)',
                width: '119.39px',
                height: '119.39px',
            }}
        />
    </div>
)

const Frame30_EyeGlasses = () => (
    <div
        className="absolute bg-white/10 backdrop-blur-sm rounded-md"
        style={{
            left: '66.83px',
            top: '-568.17px',
            width: '111.65px',
            height: '111.65px',
        }}
        data-frame="Frame 30"
    >
        <Image
            src="/images/glasses-icon.png"
            alt="Eye Glasses"
            width={112}
            height={112}
            className="object-contain"
            style={{
                width: '111.65px',
                height: '111.65px',
            }}
        />
    </div>
)

const Frame29_HeartEmoji = () => (
    <div
        className="absolute bg-white/10 backdrop-blur-sm rounded-md"
        style={{
            left: '-123px',
            top: '-349px',
            width: '122.47px',
            height: '122.47px',
        }}
        data-frame="Frame 29"
    >
        <Image
            src="/images/heart-icon.png"
            alt="Social media love or heart emoji"
            width={122}
            height={122}
            className="object-contain"
            style={{
                width: '122.47px',
                height: '122.47px',
            }}
        />
    </div>
)

const FloatingIcons = () => (
    <div className="relative">
        <Frame28_Gift />
        <Frame30_EyeGlasses />
        <Frame29_HeartEmoji />
    </div>
)

export { FloatingIcons, Frame28_Gift, Frame30_EyeGlasses, Frame29_HeartEmoji }
