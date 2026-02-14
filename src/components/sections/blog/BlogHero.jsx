// import React from 'react';
// import { motion } from 'framer-motion';
// import Container from '../../layout/Container';

// const BlogHero = () => {
//     return (
//         <section className="relative pt-0 pb-20 lg:py-32 overflow-hidden bg-blue-950">
//             {/* Background decorative elements */}
//             <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
//                 <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary-50 rounded-full blur-[120px] opacity-60"></div>
//                 <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-50 rounded-full blur-[120px] opacity-60"></div>
//             </div>

//             <Container className="relative z-10">
//                 <div className="max-w-4xl mx-auto text-center">
//                     <motion.span
//                         initial={{ opacity: 0, y: 20 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.5 }}
//                         className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-wider text-primary-600 uppercase bg-primary-50 rounded-full"
//                     >
//                         Our Insights
//                     </motion.span>
//                     <motion.h1
//                         initial={{ opacity: 0, y: 20 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.5, delay: 0.1 }}
//                         className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 tracking-tight"
//                     >
//                         Insights & <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-blue-500">Technology</span> Blog
//                     </motion.h1>
//                     <motion.p
//                         initial={{ opacity: 0, y: 20 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.5, delay: 0.2 }}
//                         className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto"
//                     >
//                         Explore our latest thoughts on AI, software engineering, and digital transformation strategies to help your business thrive.
//                     </motion.p>
//                 </div>
//             </Container>
//         </section>
//     );
// };

// export default BlogHero;


import React from 'react';
import { motion } from 'framer-motion';
import Container from '../../layout/Container';

const BlogHero = () => {
    return (
        <section className="relative py-24 lg:py-36 overflow-hidden bg-gradient-to-br from-[#0B1E3A] via-[#0F2A52] to-[#0B1E3A] text-white">

            {/* ===== Premium Glow Background ===== */}
            <div className="absolute inset-0 pointer-events-none">

                {/* Center Glow */}
                <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-primary-600/20 rounded-full blur-[160px]" />

                {/* Bottom Right Glow */}
                <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[140px]" />

                {/* Top Left Glow */}
                <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[140px]" />
            </div>

            <Container className="relative z-10">

                <div className="max-w-4xl mx-auto text-center">

                    {/* Badge */}
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-block px-5 py-2 mb-8 text-xs sm:text-sm font-semibold tracking-widest uppercase
                        bg-white/5 backdrop-blur-md border border-white/10 rounded-full text-primary-400 shadow-lg"
                    >
                        Our Insights
                    </motion.span>

                    {/* Heading */}
                    <motion.h1
                        initial={{ opacity: 0, y: 25 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6"
                    >
                        Insights &{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-blue-400 to-purple-400">
                            Technology
                        </span>{" "}
                        Blog
                    </motion.h1>

                    {/* Description */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-base sm:text-lg md:text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto"
                    >
                        Explore our latest insights on AI, software engineering, and digital transformation —
                        designed to help modern businesses innovate, scale, and stay ahead of the future.
                    </motion.p>

                </div>
            </Container>
        </section>
    );
};

export default BlogHero;
