// import React from 'react';
// import { motion } from 'framer-motion';
// import Container from '../../layout/Container';
// import { CheckBadgeIcon } from '@heroicons/react/24/solid';

// const reasons = [
//     'Modern Technology Stack (React, Node, Python)',
//     'Scalable & Secure Enterprise Architecture',
//     'Transparent Agile Delivery Workflow',
//     'Long-Term Strategic Technical Support',
//     'Global Delivery Excellence & Proven Track Record'
// ];

// const WhyTrustUs = () => {
//     return (
//         <section className="py-20 bg-white">
//             <Container>
//                 <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
//                     <motion.div
//                         initial={{ opacity: 0, x: -30 }}
//                         whileInView={{ opacity: 1, x: 0 }}
//                         viewport={{ once: true }}
//                         transition={{ duration: 0.6 }}
//                         className="lg:w-1/2"
//                     >
//                         <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-8 tracking-tight">
//                             Why Global Clients <span className="text-primary-600">Trust Us</span>
//                         </h2>
//                         <p className="text-lg text-gray-600 mb-10 leading-relaxed">
//                             Trust is earned through consistent delivery and transparent communication. We pride ourselves on being a reliable technical partner for your digital journey.
//                         </p>
//                         <ul className="space-y-5">
//                             {reasons.map((reason, index) => (
//                                 <motion.li
//                                     key={index}
//                                     initial={{ opacity: 0, x: -10 }}
//                                     whileInView={{ opacity: 1, x: 0 }}
//                                     viewport={{ once: true }}
//                                     transition={{ delay: index * 0.1 }}
//                                     className="flex items-center text-lg font-medium text-gray-700"
//                                 >
//                                     <CheckBadgeIcon className="w-6 h-6 text-primary-600 mr-4 flex-shrink-0" />
//                                     {reason}
//                                 </motion.li>
//                             ))}
//                         </ul>
//                     </motion.div>

//                     <motion.div
//                         initial={{ opacity: 0, scale: 0.9 }}
//                         whileInView={{ opacity: 1, scale: 1 }}
//                         viewport={{ once: true }}
//                         transition={{ duration: 0.6 }}
//                         className="lg:w-1/2 flex justify-center"
//                     >
//                         <div className="relative w-full max-w-md aspect-square rounded-full flex items-center justify-center p-4">
//                             {/* Decorative Animated Rings */}
//                             <div className="absolute inset-0 border border-dashed border-primary-200 rounded-full animate-spin-slow opacity-50"></div>
//                             <div className="absolute inset-8 border border-primary-100 rounded-full animate-reverse-spin opacity-40"></div>

//                             <div className="relative z-10 w-64 h-64 bg-white rounded-full shadow-[0_32px_64px_-16px_rgba(0,107,255,0.2)] flex flex-col items-center justify-center text-center p-8 border border-primary-50">
//                                 <div className="text-6xl font-black text-primary-600 mb-2 font-display">100%</div>
//                                 <div className="text-gray-900 font-bold uppercase tracking-tighter text-sm">Commitment to <br />Quality & Innovation</div>
//                             </div>
//                         </div>
//                     </motion.div>
//                 </div>
//             </Container>
//         </section>
//     );
// };

// export default WhyTrustUs;


import React from 'react';
import { motion } from 'framer-motion';
import Container from '../../layout/Container';
import { CheckBadgeIcon } from '@heroicons/react/24/solid';

const reasons = [
    'Modern Technology Stack (React, Node, Python)',
    'Scalable & Secure Enterprise Architecture',
    'Transparent Agile Delivery Workflow',
    'Long-Term Strategic Technical Support',
    'Global Delivery Excellence & Proven Track Record'
];

const WhyTrustUs = () => {
    return (
        <section className="relative py-16 sm:py-20 bg-[#0B1E3A] overflow-hidden">

            {/* ===== Background Glow ===== */}
            <div className="absolute -top-32 -left-32 w-[400px] h-[400px] bg-blue-600/20 blur-[140px] rounded-full animate-pulse" />
            <div className="absolute -bottom-32 -right-32 w-[400px] h-[400px] bg-indigo-600/20 blur-[140px] rounded-full animate-pulse" />

            <Container className="relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-14 lg:gap-20">

                    {/* ===== Left Content ===== */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="lg:w-1/2"
                    >
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-6">
                            Why Global Clients{" "}
                            <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                                Trust Us
                            </span>
                        </h2>

                        <p className="text-gray-300 text-sm sm:text-base md:text-lg mb-8 leading-relaxed">
                            Trust is earned through consistent delivery and transparent communication.
                            We pride ourselves on being a reliable technical partner for your digital journey.
                        </p>

                        {/* ===== Checklist ===== */}
                        <ul className="space-y-4">
                            {reasons.map((reason, index) => (
                                <motion.li
                                    key={index}
                                    initial={{ opacity: 0, x: -15 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.08 }}
                                    className="group flex items-center gap-4 p-3 rounded-xl 
                                    bg-white/5 border border-white/10 backdrop-blur-sm
                                    hover:bg-white/10 hover:border-white/20 
                                    transition-all duration-300"
                                >
                                    <CheckBadgeIcon className="w-6 h-6 text-blue-400 group-hover:scale-110 transition" />
                                    <span className="text-gray-200 text-sm sm:text-base font-medium">
                                        {reason}
                                    </span>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* ===== Right Circular Premium Stats ===== */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.85 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="lg:w-1/2 flex justify-center"
                    >
                        <div className="relative w-[260px] sm:w-[320px] aspect-square flex items-center justify-center">

                            {/* Outer Animated Ring */}
                            <div className="absolute inset-0 rounded-full border border-dashed border-blue-400/30 animate-spin-slow" />

                            {/* Middle Ring */}
                            <div className="absolute inset-6 rounded-full border border-indigo-400/20 animate-reverse-spin" />

                            {/* Glow Circle */}
                            <div className="absolute inset-10 rounded-full bg-gradient-to-br from-blue-500/20 to-indigo-600/20 blur-2xl" />

                            {/* Center Glass Card */}
                            <div className="relative z-10 w-52 h-52 sm:w-60 sm:h-60 rounded-full 
                                bg-white/10 backdrop-blur-xl border border-white/10
                                shadow-[0_20px_50px_rgba(0,0,0,0.4)]
                                flex flex-col items-center justify-center text-center p-6">

                                <div className="text-5xl sm:text-6xl font-black 
                                    bg-gradient-to-r from-blue-400 to-indigo-400 
                                    bg-clip-text text-transparent mb-2">
                                    100%
                                </div>

                                <div className="text-gray-200 font-semibold text-xs sm:text-sm uppercase tracking-wide">
                                    Commitment to <br /> Quality & Innovation
                                </div>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </Container>
        </section>
    );
};

export default WhyTrustUs;
