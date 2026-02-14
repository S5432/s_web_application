import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * SmartImage Component
 * Features:
 * - Dynamic aspect ratio detection or fixed ratio
 * - Smooth fade-in and scale animations
 * - Shimmer/Skeleton loading state
 * - Prevents layout shift
 * - Smart cropping (object-cover)
 */
const SmartImage = ({
    src,
    alt,
    className = "",
    imgClass = "",
    aspectRatio = null, // e.g., 16/9 (as a number 1.77)
    priority = false
}) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState(false);
    const [naturalRatio, setNaturalRatio] = useState(aspectRatio || 1.777); // Default 16:9

    const handleLoad = (e) => {
        const { naturalWidth, naturalHeight } = e.target;
        if (naturalWidth && naturalHeight && !aspectRatio) {
            setNaturalRatio(naturalWidth / naturalHeight);
        }
        setIsLoaded(true);
    };

    // Calculate padding-bottom based on ratio (ratio = width/height)
    // padding-bottom = (height/width) * 100
    const paddingBottom = (1 / (aspectRatio || naturalRatio)) * 100;

    return (
        <div
            className={`relative w-full overflow-hidden bg-gray-50 ${className}`}
            style={{
                paddingBottom: `${paddingBottom}%`,
                transition: "padding-bottom 0.5s cubic-bezier(0.4, 0, 0.2, 1)"
            }}
        >
            {/* Shimmer/Skeleton Overlay */}
            <AnimatePresence>
                {!isLoaded && !error && (
                    <motion.div
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 z-10"
                    >
                        <div className="w-full h-full bg-linear-to-r from-gray-100 via-gray-50 to-gray-100 bg-[length:200%_100%] animate-[shimmer_1.5s_infinite] flex items-center justify-center">
                            <svg className="w-12 h-12 text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Error State */}
            {error && (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-50 text-gray-400 p-4 text-center">
                    <svg className="w-8 h-8 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 17c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    <span className="text-xs font-medium uppercase tracking-wider">Image Load Failed</span>
                </div>
            )}

            {/* Main Image */}
            <motion.img
                src={src}
                alt={alt}
                onLoad={handleLoad}
                onError={() => setError(true)}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{
                    opacity: isLoaded ? 1 : 0,
                    scale: isLoaded ? 1 : 1.05,
                    filter: isLoaded ? "blur(0px)" : "blur(10px)"
                }}
                transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
                className={`absolute inset-0 w-full h-full object-cover object-center ${imgClass}`}
                loading={priority ? "eager" : "lazy"}
                decoding="async"
            />
        </div>
    );
};

// Add shimmer animation to Global CSS or handle here if possible
// For simplicity in this component, we can use a standard Tailwind animation
// if we have 'animate-pulse' or similar. I'll add a style tag for the custom shimmer.

export default SmartImage;
