// import React from 'react';
// import { Link } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import Container from '../../layout/Container';

// const AboutCTA = () => {
//     return (
//         <section className="py-20 bg-white relative overflow-hidden">
//             {/* Soft decorative background element */}
//             <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary-50/50 rounded-t-full blur-[100px] pointer-events-none"></div>

//             <Container className="relative z-10">
//                 <div className="text-center max-w-3xl mx-auto">
//                     <motion.div
//                         initial={{ opacity: 0, scale: 0.95 }}
//                         whileInView={{ opacity: 1, scale: 1 }}
//                         viewport={{ once: true }}
//                         transition={{ duration: 0.6 }}
//                     >
//                         <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-8 tracking-tight">
//                             Interested in Working <br /> <span className="text-primary-600">With Us?</span>
//                         </h2>
//                         <p className="text-xl text-gray-600 mb-12 leading-relaxed">
//                             We partner with businesses to design and develop scalable software and AI-powered solutions that drive real competitive advantage.
//                         </p>
//                         <div className="flex flex-col sm:flex-row justify-center gap-6">
//                             <Link
//                                 to="/contact"
//                                 className="inline-flex items-center justify-center px-10 py-4 text-base font-bold text-white transition-all duration-200 bg-primary-600 rounded-full hover:bg-primary-700 shadow-xl shadow-primary-500/20 transform hover:-translate-y-1"
//                             >
//                                 Start Your Project
//                             </Link>
//                             <Link
//                                 to="/services"
//                                 className="inline-flex items-center justify-center px-10 py-4 text-base font-bold text-gray-700 transition-all duration-200 bg-gray-50 border border-gray-200 rounded-full hover:bg-gray-100"
//                             >
//                                 Explore Services
//                             </Link>
//                         </div>
//                     </motion.div>
//                 </div>
//             </Container>
//         </section>
//     );
// };

// export default AboutCTA;



///////////////////////////// Dark Blue theme //////////////////////////
// import React from 'react';
// import { Link } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import Container from '../../layout/Container';

// const AboutCTA = () => {
//     return (
//         <section className="relative py-20 sm:py-24 bg-[#0B1E3A] overflow-hidden">

//             {/* ===== Background Glow ===== */}
//             <div className="absolute top-[-150px] left-[-150px] w-[500px] h-[500px] bg-blue-600/20 blur-[140px] rounded-full animate-pulse" />
//             <div className="absolute bottom-[-150px] right-[-150px] w-[500px] h-[500px] bg-indigo-600/20 blur-[140px] rounded-full animate-pulse" />

//             <Container className="relative z-10">

//                 <motion.div
//                     initial={{ opacity: 0, y: 30 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     viewport={{ once: true }}
//                     transition={{ duration: 0.6 }}
//                     className="text-center max-w-3xl mx-auto"
//                 >

//                     {/* ===== Heading ===== */}
//                     <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
//                         Interested in Working <br />
//                         <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
//                             With Us?
//                         </span>
//                     </h2>

//                     {/* ===== Description ===== */}
//                     <p className="text-gray-300 text-base sm:text-lg md:text-xl mb-10 leading-relaxed">
//                         We partner with businesses to design and develop scalable software and AI-powered
//                         solutions that drive real competitive advantage.
//                     </p>

//                     {/* ===== Buttons ===== */}
//                     <div className="flex flex-col sm:flex-row justify-center gap-5">

//                         {/* Primary Button */}
//                         <Link to="/contact">
//                             <motion.div
//                                 whileHover={{ y: -3, scale: 1.02 }}
//                                 whileTap={{ scale: 0.97 }}
//                                 className="relative px-10 py-4 rounded-full font-bold text-white
//                                 bg-gradient-to-r from-blue-500 to-indigo-600
//                                 shadow-lg shadow-blue-500/30
//                                 hover:shadow-blue-500/50
//                                 transition-all duration-300 overflow-hidden group"
//                             >
//                                 {/* Glow Layer */}
//                                 <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition duration-300 rounded-full" />
//                                 <span className="relative z-10">Start Your Project</span>
//                             </motion.div>
//                         </Link>

//                         {/* Secondary Button */}
//                         <Link to="/services">
//                             <motion.div
//                                 whileHover={{ y: -3, scale: 1.02 }}
//                                 whileTap={{ scale: 0.97 }}
//                                 className="px-10 py-4 rounded-full font-semibold
//                                 bg-white/5 backdrop-blur-md border border-white/10
//                                 text-gray-200 hover:text-white
//                                 hover:bg-white/10 hover:border-white/20
//                                 transition-all duration-300"
//                             >
//                                 Explore Services
//                             </motion.div>
//                         </Link>

//                     </div>
//                 </motion.div>
//             </Container>
//         </section>
//     );
// };

// export default AboutCTA;


import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Container from "../../layout/Container";

const AboutCTA = () => {
    return (
        <section className="relative py-20 sm:py-24 bg-white overflow-hidden">

            {/* ===== Soft Light Glow (Premium) ===== */}
            <div className="absolute top-[-120px] left-[-120px] w-[420px] h-[420px] bg-blue-100 blur-[120px] rounded-full opacity-60" />
            <div className="absolute bottom-[-120px] right-[-120px] w-[420px] h-[420px] bg-indigo-100 blur-[120px] rounded-full opacity-60" />

            <Container className="relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 35 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-3xl mx-auto"
                >

                    {/* ===== Heading ===== */}
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight tracking-tight">
                        Interested in Working <br />
                        <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                            With Us?
                        </span>
                    </h2>

                    {/* ===== Description ===== */}
                    <p className="text-gray-600 text-base sm:text-lg md:text-xl mb-10 leading-relaxed">
                        We partner with businesses to design and build scalable software and
                        AI-powered platforms that create long-term competitive advantage and
                        measurable growth.
                    </p>

                    {/* ===== Buttons ===== */}
                    <div className="flex flex-col sm:flex-row justify-center gap-5">

                        {/* Primary Button */}
                        <Link to="/contact">
                            <motion.div
                                whileHover={{ y: -4, scale: 1.03 }}
                                whileTap={{ scale: 0.97 }}
                                className="relative px-10 py-4 rounded-full font-semibold text-white
                bg-gradient-to-r from-blue-600 to-indigo-600
                shadow-lg shadow-blue-600/20
                hover:shadow-xl hover:shadow-blue-600/30
                transition-all duration-300 overflow-hidden group"
                            >
                                {/* Premium Shine */}
                                <span className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 blur-md transition duration-300" />
                                <span className="relative z-10">Start Your Project</span>
                            </motion.div>
                        </Link>

                        {/* Secondary Button */}
                        <Link to="/services">
                            <motion.div
                                whileHover={{ y: -4, scale: 1.03 }}
                                whileTap={{ scale: 0.97 }}
                                className="px-10 py-4 rounded-full font-semibold
                bg-white border border-gray-200
                text-gray-700
                hover:text-blue-600
                hover:border-blue-300
                hover:bg-blue-50
                shadow-sm hover:shadow-md
                transition-all duration-300"
                            >
                                Explore Services
                            </motion.div>
                        </Link>

                    </div>
                </motion.div>
            </Container>
        </section>
    );
};

export default AboutCTA;
