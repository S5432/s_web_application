// import React from 'react';
// import { Link } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import Container from '../../layout/Container';

// const ServicesCTA = () => {
//     return (
//         <section className="py-20 bg-gray-50">
//             <Container>
//                 <div className="bg-white rounded-3xl p-10 md:p-20 text-center shadow-xl border border-gray-100 relative overflow-hidden">
//                     {/* Decorative Background Glows */}
//                     <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary-50 rounded-full blur-3xl"></div>
//                     <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-blue-50 rounded-full blur-3xl"></div>

//                     <div className="relative z-10 max-w-2xl mx-auto">
//                         <motion.div
//                             initial={{ opacity: 0, y: 20 }}
//                             whileInView={{ opacity: 1, y: 0 }}
//                             viewport={{ once: true }}
//                             transition={{ duration: 0.5 }}
//                         >
//                             <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
//                                 Need a Custom Software or AI Solution?
//                             </h2>
//                             <p className="text-lg text-gray-600 mb-10 leading-relaxed">
//                                 Let’s discuss your project and build a scalable solution tailored to your business needs, on time and within budget.
//                             </p>
//                             <Link
//                                 to="/contact"
//                                 className="inline-flex items-center justify-center px-10 py-4 text-base font-bold text-white transition-all duration-200 bg-primary-600 rounded-full hover:bg-primary-700 shadow-lg shadow-primary-500/30 hover:shadow-primary-500/40 hover:-translate-y-1"
//                             >
//                                 Get Started Today
//                             </Link>
//                         </motion.div>
//                     </div>
//                 </div>
//             </Container>
//         </section>
//     );
// };

// export default ServicesCTA;



// import React from 'react';
// import { Link } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import Container from '../../layout/Container';

// const ServicesCTA = () => {
//     return (
//         <section className="py-20 bg-gray-50">
//             <Container>
//                 {/* Animated Gradient Card */}
//                 <div className="relative overflow-hidden rounded-3xl p-[1px] animated-gradient shadow-2xl">

//                     {/* Inner Content Card */}
//                     <div className="relative bg-white rounded-3xl p-10 md:p-20 text-center border border-white/20">

//                         {/* ===== Moving Light Effect ===== */}
//                         <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-3xl">
//                             <div className="absolute -top-40 -left-40 w-80 h-80 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
//                             <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-indigo-400/20 rounded-full blur-3xl animate-pulse"></div>

//                             {/* Moving Shine */}
//                             <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 hover:opacity-100 transition duration-700 transform -skew-x-12 translate-x-[-150%] hover:translate-x-[150%]"></div>
//                         </div>

//                         {/* ===== Content ===== */}
//                         <div className="relative z-10 max-w-2xl mx-auto">
//                             <motion.div
//                                 initial={{ opacity: 0, y: 30 }}
//                                 whileInView={{ opacity: 1, y: 0 }}
//                                 viewport={{ once: true }}
//                                 transition={{ duration: 0.6, ease: 'easeOut' }}
//                             >
//                                 <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
//                                     Need a Custom Software or AI Solution?
//                                 </h2>

//                                 <p className="text-lg text-gray-600 mb-10 leading-relaxed">
//                                     Let’s discuss your project and build a scalable solution tailored to your business needs, on time and within budget.
//                                 </p>

//                                 <Link
//                                     to="/contact"
//                                     className="inline-flex items-center justify-center px-10 py-4 text-base font-bold text-white bg-primary-600 rounded-full shadow-lg shadow-primary-500/30 hover:bg-primary-700 hover:shadow-primary-500/40 hover:-translate-y-1 transition-all duration-300"
//                                 >
//                                     Get Started Today
//                                 </Link>
//                             </motion.div>
//                         </div>

//                     </div>
//                 </div>
//             </Container>
//         </section>
//     );
// };

// export default ServicesCTA;



import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Container from '../../layout/Container';

const ServicesCTA = () => {
    return (
        <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
            <Container>
                {/* ===== Animated Gradient Border Card ===== */}
                <div className="relative overflow-hidden rounded-3xl p-[1px] animated-gradient shadow-[0_20px_60px_rgba(0,0,0,0.15)]">

                    {/* ===== Inner Card ===== */}
                    <div className="relative bg-white rounded-3xl 
                        px-6 py-10 
                        sm:px-10 sm:py-14 
                        md:px-16 md:py-20 
                        text-center border border-white/30">

                        {/* ===== Strong Inner Glow / Color Shadow ===== */}
                        <div className="pointer-events-none absolute inset-0 rounded-3xl overflow-hidden">

                            {/* Top Glow */}
                            <div className="absolute -top-32 -left-32 w-72 h-72 bg-blue-500/25 rounded-full blur-[90px]"></div>

                            {/* Bottom Glow */}
                            <div className="absolute -bottom-32 -right-32 w-72 h-72 bg-indigo-500/25 rounded-full blur-[90px]"></div>

                            {/* Center Soft Glow */}
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-100/40 via-transparent to-indigo-100/40"></div>

                            {/* Shine Sweep */}
                            <div className="absolute inset-0 opacity-0 hover:opacity-100 transition duration-700">
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent transform -skew-x-12 translate-x-[-150%] hover:translate-x-[150%] transition duration-1000"></div>
                            </div>
                        </div>

                        {/* ===== Content ===== */}
                        <div className="relative z-10 max-w-2xl mx-auto">
                            <motion.div
                                initial={{ opacity: 0, y: 35 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, ease: 'easeOut' }}
                            >
                                {/* Heading */}
                                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl 
                                    font-extrabold text-gray-900 mb-5 sm:mb-6 tracking-tight leading-tight">
                                    Need a Custom Software or AI Solution?
                                </h2>

                                {/* Description */}
                                <p className="text-base sm:text-lg text-gray-600 mb-8 sm:mb-10 leading-relaxed">
                                    Let’s discuss your project and build a scalable solution tailored to your business needs, delivered on time and within budget.
                                </p>

                                {/* Button */}
                                <Link
                                    to="/contact"
                                    className="inline-flex w-full sm:w-auto items-center justify-center 
                                        px-8 py-3.5 sm:px-10 sm:py-4 
                                        text-sm sm:text-base font-bold text-white 
                                        bg-primary-600 rounded-full 
                                        shadow-lg shadow-primary-500/40 
                                        hover:bg-primary-700 hover:shadow-primary-500/60 
                                        hover:-translate-y-1 active:translate-y-0
                                        transition-all duration-300"
                                >
                                    Get Started Today
                                </Link>
                            </motion.div>
                        </div>

                    </div>
                </div>
            </Container>
        </section>
    );
};

export default ServicesCTA;
