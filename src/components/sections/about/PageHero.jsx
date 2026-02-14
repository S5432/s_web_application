// import React from 'react';
// import { motion } from 'framer-motion';
// import Container from '../../layout/Container';

// const PageHero = () => {
//     return (
//         <section className="bg-white pt-32 pb-20 relative overflow-hidden">
//             {/* Design elements */}
//             <div className="absolute top-0 right-0 w-96 h-96 bg-primary-50 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 opacity-60"></div>

//             <Container className="relative z-10">
//                 <div className="text-center max-w-3xl mx-auto">
//                     <motion.div
//                         initial={{ opacity: 0, y: 20 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.6 }}
//                     >
//                         <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 tracking-tight">
//                             Our Story & <span className="text-primary-600">Vision</span>
//                         </h1>
//                         <p className="text-xl text-gray-600 leading-relaxed">
//                             We are a technology-driven company focused on building innovative software, AI-powered solutions, and scalable SaaS platforms that help businesses grow and transform digitally.
//                         </p>
//                     </motion.div>
//                 </div>
//             </Container>
//         </section>
//     );
// };

// export default PageHero;


import React from 'react';
import { motion } from 'framer-motion';
import Container from '../../layout/Container';

const PageHero = () => {
    return (
        <section className="relative overflow-hidden 
            bg-gradient-to-br from-[#0B1E3A] via-[#0F2A52] to-[#0B1E3A]
            pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-36 lg:pb-24">

            {/* ===== Soft Glow for Depth ===== */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute -top-40 -right-40 w-[500px] h-[500px] 
                    bg-blue-500/10 rounded-full blur-[120px]"></div>
                <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] 
                    bg-indigo-500/10 rounded-full blur-[120px]"></div>
            </div>

            <Container className="relative z-10">
                <div className="text-center max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 25 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: 'easeOut' }}
                    >
                        {/* ===== Heading ===== */}
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl 
                            font-extrabold text-white mb-5 sm:mb-6 tracking-tight leading-tight">
                            Our Story & <span className="text-gray-100">Vision</span>
                        </h1>

                        {/* ===== Description ===== */}
                        <p className="text-base sm:text-lg md:text-xl 
                            font-semibold text-gray-300 leading-relaxed">
                            We are a technology-driven company focused on building innovative software,
                            AI-powered solutions, and scalable SaaS platforms that help businesses grow
                            and transform digitally.
                        </p>
                    </motion.div>
                </div>
            </Container>
        </section>
    );
};

export default PageHero;
