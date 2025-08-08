'use client'

import { useState } from 'react'
import Image from 'next/image'

interface ImageWithFallbackProps {
    src: string
    alt: string
    width?: number
    height?: number
    className?: string
    fallbackSrc?: string
}

export default function ImageWithFallback({
    src,
    alt,
    width = 120,
    height = 60,
    className = '',
    fallbackSrc = 'https://via.placeholder.com/120x60/cccccc/666666?text=Logo'
}: ImageWithFallbackProps) {
    const [imgSrc, setImgSrc] = useState(src)
    const [hasError, setHasError] = useState(false)

    const handleError = () => {
        if (!hasError) {
            setImgSrc(fallbackSrc)
            setHasError(true)
        }
    }

    return (
        <Image
            src={imgSrc}
            alt={alt}
            width={width}
            height={height}
            className={className}
            onError={handleError}
            unoptimized={imgSrc.startsWith('https://via.placeholder.com')}
        />
    )
} 