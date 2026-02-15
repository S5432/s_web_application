// import React from 'react';
// import { motion } from 'framer-motion';
// import Container from '../../layout/Container';

// const CompanyStory = () => {
//     return (
//         <section className="py-20 bg-white">
//             <Container>
//                 <div className="flex flex-col lg:flex-row gap-16 items-center">
//                     <motion.div
//                         initial={{ opacity: 0, x: -30 }}
//                         whileInView={{ opacity: 1, x: 0 }}
//                         viewport={{ once: true }}
//                         transition={{ duration: 0.6 }}
//                         className="lg:w-1/2"
//                     >
//                         <div className="relative rounded-[2rem] overflow-hidden shadow-2xl bg-gray-50 aspect-[4/3] flex items-center justify-center group">
//                             <div className="absolute inset-0 bg-[radial-gradient(#006BFF_1px,transparent_1px)] [background-size:24px_24px] opacity-10"></div>
//                             <div className="relative z-10 w-24 h-24 rounded-2xl bg-white shadow-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
//                                 <div className="w-12 h-12 border-4 border-primary-600 border-t-transparent rounded-full animate-spin"></div>
//                             </div>
//                             <div className="absolute bottom-10 left-10 right-10 p-6 bg-white/80 backdrop-blur-md rounded-2xl shadow-lg">
//                                 <p className="text-sm font-bold text-gray-900">Engineering Excellence Since Day One</p>
//                             </div>
//                         </div>
//                     </motion.div>

//                     <motion.div
//                         initial={{ opacity: 0, x: 30 }}
//                         whileInView={{ opacity: 1, x: 0 }}
//                         viewport={{ once: true }}
//                         transition={{ duration: 0.6, delay: 0.2 }}
//                         className="lg:w-1/2"
//                     >
//                         <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-8 tracking-tight">
//                             Building Tools for the <span className="text-primary-600">Future of Business</span>
//                         </h2>
//                         <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
//                             <p>
//                                 Founded with a passion for innovation, we started as a small team of engineers dedicated to solving complex business problems through code. We recognized early on that the future of business belongs to those who embrace automation and intelligence.
//                             </p>
//                             <p>
//                                 Today, we are a full-service technology partner helping startups and enterprises around the globe. Our focus remains unchanged: building scalable, secure, and intelligent software that provides a competitive edge.
//                             </p>
//                             <p className="font-medium text-gray-900">
//                                 We believe in long-term partnerships, transparent collaboration, and delivering engineering excellence in every line of code we write.
//                             </p>
//                         </div>
//                     </motion.div>
//                 </div>
//             </Container>
//         </section>
//     );
// };

// export default CompanyStory;


import React from 'react';
import { motion } from 'framer-motion';
import Container from '../../layout/Container';
import techVideo from "../../../assets/tech_v6.mp4";

const CompanyStory = () => {
    return (
        <section className="py-16 sm:py-20 bg-white">
            <Container>
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">

                    {/* ===== Left: Video Section ===== */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="lg:w-5/6 w-full"
                    >
                        <div className="relative rounded-[2rem] overflow-hidden shadow-2xl bg-black aspect-[4/3] group">

                            {/* Video */}
                            <video
                                className="w-full h-full object-cover"
                                autoPlay
                                muted
                                loop
                                playsInline
                            >
                                <source
                                    src={techVideo}
                                    type="video/mp4"
                                />
                                Your browser does not support the video tag.
                            </video>

                            {/* Dark Overlay for Professional Look */}
                            <div className="absolute inset-0 bg-black/30"></div>

                            {/* Bottom Caption */}
                            {/* <div className="absolute bottom-6 left-6 right-6 p-5 bg-white/90 backdrop-blur-md rounded-xl shadow-lg">
                                <p className="text-sm font-bold text-gray-900">
                                    Engineering Excellence Since Day One
                                </p>
                            </div> */}

                        </div>
                    </motion.div>

                    {/* ===== Right: Content ===== */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="lg:w-1/2"
                    >
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 mb-6 tracking-tight">
                            Building Tools for the <span className="text-primary-600">Future of Business</span>
                        </h2>

                        <div className="space-y-5 text-gray-950 text-base sm:text-lg leading-relaxed">
                            <p>
                                Founded with a passion for innovation, we started as a small team of engineers dedicated
                                to solving complex business problems through code. We recognized early on that the future
                                of business belongs to those who embrace automation and intelligence.
                            </p>

                            <p>
                                Today, we are a full-service technology partner helping startups and enterprises around
                                the globe. Our focus remains unchanged: building scalable, secure, and intelligent software
                                that provides a competitive edge.
                            </p>

                            <p className="font-semibold text-gray-900">
                                We believe in long-term partnerships, transparent collaboration, and delivering engineering
                                excellence in every line of code we write.
                            </p>
                        </div>
                    </motion.div>

                </div>
            </Container>
        </section>
    );
};

export default CompanyStory;


