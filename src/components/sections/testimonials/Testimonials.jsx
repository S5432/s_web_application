// import React from 'react';
// import { motion } from 'framer-motion';
// import TestimonialsHeader from './TestimonialsHeader';
// import TestimonialCard from './TestimonialCard';
// import { testimonials } from '../../../data/testimonials';

// const Testimonials = () => {
//     // Duplicate testimonials for seamless loop
//     const doubledTestimonials = [...testimonials, ...testimonials];

//     return (
//         <section className="relative py-24 overflow-hidden bg-gradient-to-br from-[#0B1E3A] via-[#0F2A52] to-[#0B1E3A]">
//             {/* Background elements */}
//             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 blur-[160px] rounded-full pointer-events-none" />

//             <TestimonialsHeader />

//             <div className="relative flex overflow-hidden">
//                 <motion.div
//                     className="flex"
//                     animate={{
//                         x: [0, -100 * testimonials.length + '%'],
//                     }}
//                     transition={{
//                         x: {
//                             repeat: Infinity,
//                             repeatType: "loop",
//                             duration: 40,
//                             ease: "linear",
//                         },
//                     }}
//                     whileHover={{ cursor: 'pointer' }}
//                 // Pause on hover hack using framer motion speed/timescale is tricky,
//                 // simple approach is CSS animation or Framer variants with controls.
//                 // But standard way for simple marquee:
//                 >
//                     <div className="flex animate-marquee group-hover:pause-marquee">
//                         {doubledTestimonials.map((testimonial, index) => (
//                             <TestimonialCard key={`${testimonial.id}-${index}`} testimonial={testimonial} />
//                         ))}
//                     </div>
//                 </motion.div>

//                 {/* Overlay gradients for fade effect */}
//                 <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#0B1E3A] to-transparent z-10 pointer-events-none" />
//                 <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#0B1E3A] to-transparent z-10 pointer-events-none" />
//             </div>

//             <style dangerouslySetInnerHTML={{
//                 __html: `
//                 @keyframes marquee {
//                     0% { transform: translateX(0); }
//                     100% { transform: translateX(-50%); }
//                 }
//                 .animate-marquee {
//                     display: flex;
//                     animation: marquee 50s linear infinite;
//                 }
//                 .animate-marquee:hover {
//                     animation-play-state: paused;
//                 }
//                 @media (max-width: 640px) {
//                     .animate-marquee {
//                         animation-duration: 30s;
//                     }
//                 }
//             `}} />
//         </section>
//     );
// };

// export default Testimonials;


import React from "react";
import { motion, useAnimationFrame } from "framer-motion";
import TestimonialsHeader from "./TestimonialsHeader";
import TestimonialCard from "./TestimonialCard";
import { testimonials } from "../../../data/testimonials";

const Testimonials = () => {
    const doubledTestimonials = [...testimonials, ...testimonials];

    // speed control (smaller = slower)
    const SPEED = 20; // px per second → increase for faster, decrease for slower

    const x = React.useRef(0);
    const containerRef = React.useRef(null);

    useAnimationFrame((t, delta) => {
        if (!containerRef.current) return;

        x.current -= (delta / 1000) * SPEED;

        const width = containerRef.current.scrollWidth / 2;

        if (Math.abs(x.current) >= width) {
            x.current = 0;
        }

        containerRef.current.style.transform = `translateX(${x.current}px)`;
    });

    return (
        <section className="relative py-24 overflow-hidden bg-gradient-to-br from-[#0B1E3A] via-[#0F2A52] to-[#0B1E3A]">

            {/* Glow */}
            <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2 bg-blue-600/10 blur-[160px] rounded-full pointer-events-none" />

            <TestimonialsHeader />

            <div className="relative overflow-hidden group">

                <motion.div
                    ref={containerRef}
                    className="flex gap-8 w-max will-change-transform"
                    whileHover={{ scale: 1 }} // keeps GPU active for smoothness
                >
                    {doubledTestimonials.map((testimonial, index) => (
                        <TestimonialCard
                            key={`${testimonial.id}-${index}`}
                            testimonial={testimonial}
                        />
                    ))}
                </motion.div>

                {/* Fade edges */}
                <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#0B1E3A] to-transparent pointer-events-none" />
                <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#0B1E3A] to-transparent pointer-events-none" />
            </div>
        </section>
    );
};

export default Testimonials;
