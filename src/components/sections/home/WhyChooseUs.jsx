// import React from 'react';
// import { motion } from 'framer-motion';
// import Container from '../../layout/Container';
// import { CheckCircleIcon } from '@heroicons/react/24/solid';

// const reasons = [
//     {
//         title: 'AI-First Modern Architecture',
//         description: 'We leverage the latest AI and cloud-native technologies to build future-proof solutions.'
//     },
//     {
//         title: 'Scalable & Secure Systems',
//         description: 'Built for growth with enterprise-grade security and scalability best practices.'
//     },
//     {
//         title: 'Business-Focused Solutions',
//         description: 'Our development process is aligned with your business goals and ROI.'
//     },
//     {
//         title: 'Transparent Communication',
//         description: 'Stay consistently updated with our agile workflow and open collaboration channels.'
//     },
//     {
//         title: 'Dedicated Long-Term Support',
//         description: 'We partner with you beyond launch to ensure continuous improvement and stability.'
//     }
// ];

// const WhyChooseUs = () => {
//     return (
//         <section className="py-20 bg-white">
//             <Container>
//                 <div className="flex flex-col lg:flex-row items-center gap-20">
//                     {/* Left: Text Content */}
//                     <motion.div
//                         initial={{ opacity: 0, x: -20 }}
//                         whileInView={{ opacity: 1, x: 0 }}
//                         viewport={{ once: true }}
//                         className="lg:w-1/2"
//                     >
//                         <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-8 leading-tight">
//                             Why Top Companies Trust ShvetVarni
//                         </h2>
//                         <p className="text-lg text-gray-600 mb-10 leading-relaxed max-w-xl">
//                             We don't just write code; we build digital assets that drive value. Our engineering-focused approach ensures your software is robust, maintainable, and ready to scale.
//                         </p>

//                         <div className="space-y-8">
//                             {reasons.map((reason, index) => (
//                                 <motion.div
//                                     key={index}
//                                     initial={{ opacity: 0, y: 10 }}
//                                     whileInView={{ opacity: 1, y: 0 }}
//                                     viewport={{ once: true }}
//                                     transition={{ delay: index * 0.1 }}
//                                     className="flex items-start group"
//                                 >
//                                     <div className="flex-shrink-0 mt-1">
//                                         <div className="w-8 h-8 rounded-full bg-primary-50 flex items-center justify-center group-hover:bg-primary-600 transition-colors duration-300">
//                                             <CheckCircleIcon className="w-5 h-5 text-primary-600 group-hover:text-white transition-colors duration-300" />
//                                         </div>
//                                     </div>
//                                     <div className="ml-5">
//                                         <h4 className="text-xl font-bold text-gray-900 mb-1">
//                                             {reason.title}
//                                         </h4>
//                                         <p className="text-gray-600 text-base leading-relaxed">
//                                             {reason.description}
//                                         </p>
//                                     </div>
//                                 </motion.div>
//                             ))}
//                         </div>
//                     </motion.div>

//                     {/* Right: Visual/Trust Stats */}
//                     <motion.div
//                         initial={{ opacity: 0, x: 20 }}
//                         whileInView={{ opacity: 1, x: 0 }}
//                         viewport={{ once: true }}
//                         transition={{ delay: 0.2 }}
//                         className="lg:w-1/2 w-full"
//                     >
//                         <div className="grid grid-cols-1 mt-32 sm:grid-cols-2 gap-6">
//                             {[
//                                 { label: 'Projects Delivered', value: '50+' },
//                                 { label: 'Client Retention', value: '98%' },
//                                 { label: 'Support Available', value: '24/7' },
//                                 { label: 'Code Ownership', value: '100%' }
//                             ].map((stat, idx) => (
//                                 <div
//                                     key={idx}
//                                     className="
//         bg-gray-50 p-8 sm:p-10 rounded-3xl sm:rounded-[2.5rem]
//         border border-gray-200 text-center
//         hover:bg-blue-900 active:bg-blue-900
//         hover:shadow-2xl active:shadow-2xl
//         hover:-translate-y-2 active:-translate-y-1
//         transition-all duration-300 ease-out
//         cursor-pointer touch-manipulation group
//     "
//                                 >
//                                     <div
//                                         className="
//             text-4xl sm:text-5xl font-extrabold text-blue-700 mb-3 sm:mb-4 tracking-tight
//             group-hover:text-white group-active:text-white
//             transition-colors duration-300
//         "
//                                     >
//                                         {stat.value}
//                                     </div>

//                                     <div
//                                         className="
//             text-gray-600 font-semibold text-base sm:text-lg
//             group-hover:text-gray-50 group-active:text-gray-50
//             transition-all duration-300
//         "
//                                     >
//                                         {stat.label}
//                                     </div>
//                                 </div>

//                             ))}
//                         </div>
//                     </motion.div>
//                 </div>
//             </Container>
//         </section>
//     );
// };

// export default WhyChooseUs;


import React from "react";
import { motion } from "framer-motion";
import Container from "../../layout/Container";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

const reasons = [
    {
        title: "AI-First Modern Architecture",
        description:
            "We leverage the latest AI and cloud-native technologies to build future-proof solutions.",
    },
    {
        title: "Scalable & Secure Systems",
        description:
            "Built for growth with enterprise-grade security and scalability best practices.",
    },
    {
        title: "Business-Focused Solutions",
        description:
            "Our development process is aligned with your business goals and ROI.",
    },
    {
        title: "Transparent Communication",
        description:
            "Stay consistently updated with our agile workflow and open collaboration channels.",
    },
    {
        title: "Dedicated Long-Term Support",
        description:
            "We partner with you beyond launch to ensure continuous improvement and stability.",
    },
];

const stats = [
    { label: "Projects Delivered", value: "50+" },
    { label: "Client Retention", value: "98%" },
    { label: "Support Available", value: "24/7" },
    { label: "Code Ownership", value: "100%" },
];

const WhyChooseUs = () => {
    return (
        <section className="relative py-20 overflow-hidden bg-gradient-to-br from-[#0B1E3A] via-[#0F2A52] to-[#0B1E3A]">

            {/* Soft Glow Lights */}
            <div className="absolute -top-40 -left-40 w-[420px] h-[420px] bg-blue-500/20 blur-[140px] rounded-full"></div>
            <div className="absolute -bottom-40 -right-40 w-[420px] h-[420px] bg-indigo-500/20 blur-[140px] rounded-full"></div>

            <Container className="relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16">

                    {/* LEFT CONTENT */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:w-1/2"
                    >
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight">
                            Why Top Companies Trust{" "}
                            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                                ShvetVarni
                            </span>
                        </h2>

                        <p className="text-gray-300 text-base sm:text-lg mb-10 max-w-xl leading-relaxed">
                            We don't just write code — we engineer digital products that create
                            long-term business value. Our architecture-first approach ensures
                            scalability, reliability, and measurable ROI.
                        </p>

                        <div className="space-y-7">
                            {reasons.map((reason, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 15 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.08 }}
                                    className="flex items-start group"
                                >
                                    {/* Icon */}
                                    <div className="flex-shrink-0 mt-1">
                                        <div className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-blue-500 transition-all duration-300">
                                            <CheckCircleIcon className="w-5 h-5 text-blue-400 group-hover:text-white" />
                                        </div>
                                    </div>

                                    {/* Text */}
                                    <div className="ml-4">
                                        <h4 className="text-lg sm:text-xl font-semibold text-white group-hover:text-blue-300 transition">
                                            {reason.title}
                                        </h4>
                                        <p className="text-gray-400 text-sm sm:text-base mt-1 leading-relaxed">
                                            {reason.description}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* RIGHT STATS */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="lg:w-1/2 w-full"
                    >
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">


                            {stats.map((stat, idx) => (
                                <motion.div
                                    key={idx}
                                    whileTap={{ scale: 0.97 }}
                                    className="
                                    relative
                                    bg-white/5
                                    backdrop-blur-lg
                                    border border-white/10
                                    p-8
                                    rounded-2xl
                                    text-center
                                    transition-all duration-300
                                    hover:scale-[1.04]
                                    active:scale-[0.98]
                                    hover:border-blue-400/40
                                    active:border-blue-400/40
                                    hover:bg-white/10
                                    active:bg-white/10
                                    hover:shadow-[0_10px_40px_rgba(0,0,0,0.5)]
                                    active:shadow-[0_10px_40px_rgba(0,0,0,0.5)]
                                    group
                                    cursor-pointer
                                    select-none
                                    ">
                                    {/* Glow overlay */}
                                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 group-active:opacity-100 transition bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-2xl"></div>

                                    <div className="relative z-10">
                                        <div className="text-4xl sm:text-5xl font-extrabold text-blue-400 mb-2 group-hover:text-cyan-300 group-active:text-cyan-300 transition">
                                            {stat.value}
                                        </div>

                                        <div className="text-gray-300 font-medium text-sm sm:text-base">
                                            {stat.label}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}


                        </div>
                    </motion.div>
                </div>
            </Container>
        </section>
    );
};

export default WhyChooseUs;
