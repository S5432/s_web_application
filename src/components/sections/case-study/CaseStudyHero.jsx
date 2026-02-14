// import React from 'react';
// import { motion } from 'framer-motion';
// import Container from '../../layout/Container';

// const CaseStudyHero = () => {
//     return (
//         <section className="relative py-20 lg:py-32 overflow-hidden bg-blue-950">
//             {/* Background decorative elements */}
//             <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
//                 <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-primary-100/50 rounded-full blur-[120px] opacity-40"></div>
//                 <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-100/50 rounded-full blur-[120px] opacity-40"></div>
//             </div>

//             <Container className="relative z-10">
//                 <div className="max-w-4xl mx-auto text-center">
//                     <motion.span
//                         initial={{ opacity: 0, y: 20 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.5 }}
//                         className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-wider text-primary-600 uppercase bg-primary-50 rounded-full"
//                     >
//                         Success Stories
//                     </motion.span>
//                     <motion.h1
//                         initial={{ opacity: 0, y: 20 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.5, delay: 0.1 }}
//                         className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 tracking-tight"
//                     >
//                         Case Studies & <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-blue-500">Real Implementations</span>
//                     </motion.h1>
//                     <motion.p
//                         initial={{ opacity: 0, y: 20 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.5, delay: 0.2 }}
//                         className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto font-medium"
//                     >
//                         Explore how we solve complex business challenges through cutting-edge AI, automation, and world-class software engineering.
//                     </motion.p>
//                 </div>
//             </Container>
//         </section>
//     );
// };

// export default CaseStudyHero;


import React from "react";
import { motion } from "framer-motion";
import Container from "../../layout/Container";

const CaseStudyHero = () => {
    return (
        <section className="relative overflow-hidden py-20 lg:py-32 bg-gradient-to-br from-[#0B1E3A] via-[#0F2A52] to-[#0B1E3A]">

            {/* Premium Grid Overlay */}
            <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:40px_40px]" />

            {/* Glow Orbs */}
            <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-indigo-600/20 blur-[160px] rounded-full"></div>
            <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-cyan-500/20 blur-[160px] rounded-full"></div>

            <Container className="relative z-10">
                <div className="max-w-4xl mx-auto text-center">

                    {/* Premium Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-block mb-6"
                    >
                        <span className="px-5 py-1.5 text-xs md:text-sm font-semibold tracking-wider text-white uppercase rounded-full 
            bg-white/5 backdrop-blur-md border border-white/10 shadow-lg 
            hover:border-indigo-400/40 transition-all duration-300">
                            ✦ Success Stories
                        </span>
                    </motion.div>

                    {/* Heading */}
                    <motion.h1
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-tight"
                    >
                        <span className="text-white">Case Studies &</span>
                        <br />
                        <span className="bg-gradient-to-r from-indigo-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                            Real Implementations
                        </span>
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.p
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-base md:text-lg lg:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed"
                    >
                        Explore how we solve complex business challenges using cutting-edge AI,
                        intelligent automation, and enterprise-grade software engineering.
                    </motion.p>

                    {/* Premium Hover Line */}
                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "120px" }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="h-[2px] mx-auto mt-10 bg-gradient-to-r from-indigo-500 via-cyan-400 to-blue-500 rounded-full"
                    />

                </div>
            </Container>
        </section>
    );
};

export default CaseStudyHero;
