// import React from 'react';
// import { motion } from 'framer-motion';
// import Container from '../../layout/Container';

// const PageHero = () => {
//     return (
//         <section className="bg-gray-50 pt-32 pb-20 overflow-hidden relative">
//             {/* Subtle background element */}
//             <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] bg-primary-50 rounded-full blur-3xl opacity-50 z-0"></div>

//             <Container className="relative z-10">
//                 <div className="text-center max-w-3xl mx-auto">
//                     <motion.div
//                         initial={{ opacity: 0, y: 20 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.6 }}
//                     >
//                         <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 tracking-tight">
//                             Our Services
//                         </h1>
//                         <p className="text-xl text-gray-600 leading-relaxed">
//                             We provide end-to-end software development, AI solutions, and automation services to help businesses scale efficiently.
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

            {/* ===== Soft Professional Glow ===== */}
            <div className="absolute inset-0 pointer-events-none">
                {/* Top Glow */}
                <div className="absolute -top-40 -left-40 w-[500px] h-[500px] 
                    bg-blue-500/10 rounded-full blur-[120px]"></div>

                {/* Bottom Glow */}
                <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] 
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
                            Our Services
                        </h1>

                        {/* ===== Description ===== */}
                        <p className="text-base sm:text-lg md:text-xl 
                            font-semibold text-gray-300 leading-relaxed">
                            We provide end-to-end software development, AI solutions, and automation services
                            to help businesses scale efficiently.
                        </p>
                    </motion.div>

                </div>
            </Container>
        </section>
    );
};

export default PageHero;
