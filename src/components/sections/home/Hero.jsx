// import React from 'react';
// import { Link } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import Container from '../../layout/Container';
// import heroImage from '../../../assets/hero-image.jpg';


// const Hero = () => {
//     return (
//         // <section className="relative overflow-hidden bg-white pt-20 pb-24 lg:pt-32 lg:pb-40">
//         <section className="relative overflow-hidden bg-blue-950 pt-20 pb-24 lg:pt-32 lg:pb-40 will-change-transform">

//             <Container>
//                 {/* <div className="grid lg:grid-cols-[1fr_1.2fr] gap-16 items-stretch min-h-[520px] lg:min-h-[640px] xl:min-h-[720px]"> */}
//                 <div className="flex flex-col gap-16 items-center">

//                     {/* Left Content */}
//                     <motion.div
//                         initial={{ opacity: 0, y: 20 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.6 }}
//                         className="text-center"
//                     >
//                         <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 mb-8 leading-[1.1]">
//                             Build <span className="text-primary-600">Scalable</span> AI-Powered <br />
//                             <span className="text-primary-600 text-center">Software</span>
//                         </h1>
//                         <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
//                             ShvetVarni Technologies designs and develops SaaS platforms, web applications, AI solutions, and automation systems that help businesses grow faster and smarter.
//                         </p>
//                         <div className="flex flex-col sm:flex-row gap-5 justify-center">
//                             <Link
//                                 to="/contact"
//                                 className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white transition-all duration-200 bg-primary-600 rounded-xl hover:bg-primary-700 shadow-md transform hover:-translate-y-0.5"
//                             >
//                                 Get Free Consultation
//                             </Link>
//                             <Link
//                                 to="/services"
//                                 className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-gray-700 transition-all duration-200 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 hover:border-gray-300 transform hover:-translate-y-0.5"
//                             >
//                                 View Services
//                             </Link>
//                         </div>
//                     </motion.div>
//                     {/* Right Visual (Hero Illustration) */}
//                     <div className="relative flex items-center justify-center lg:justify-end h-full">

//                         <motion.img
//                             src={heroImage}
//                             alt="AI Powered Software Development"
//                             initial={{ opacity: 0, scale: 0.96, y: 20 }}
//                             animate={{ opacity: 1, scale: 1, y: 0 }}
//                             transition={{ duration: 0.7, ease: "easeOut" }}
//                             className="
//                     w-full
//                     max-w-[1100px]
//                     h-auto
//                     object-contain
//                     select-none
//                     pointer-events-none
//                     drop-shadow-[0_20px_40px_rgba(0,0,0,0.08)]"
//                             draggable="false"
//                         />

//                     </div>
//                 </div>
//             </Container>
//         </section >
//     );
// };

// export default Hero;


import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Container from "../../layout/Container";
// import heroImage from "../../../assets/hero_v7.mp4";
import heroVideo from "../../../assets/hero_v7.mp4";

const Hero = () => {// 
    // bg-gradient-to-b from-[#020617] via-[#020617] to-[#020617]
    return (
        <section className="relative overflow-hidden pt-20 pb-24 lg:pt-32 lg:pb-40 bg-gradient-to-br from-[#0B1E3A] via-[#0F2A52] to-[#0B1E3A] ">

            {/* Premium Grid Overlay */}
            <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:40px_40px]" />

            {/* Glow Lights */}
            <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-indigo-600/20 blur-[160px] rounded-full"></div>
            <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-cyan-500/20 blur-[160px] rounded-full"></div>

            <Container className="relative z-10">
                <div className="grid lg:grid-cols-2 gap-14 items-center">

                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center lg:text-left"
                    >
                        {/* Heading */}
                        <h1 className="text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight leading-[1.05] mb-8">
                            <span className="text-white">Build</span>{" "}
                            <span className="bg-gradient-to-r from-indigo-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                                Scalable AI
                            </span>
                            <br />
                            <span className="text-white">Powered Software</span>
                        </h1>

                        {/* Subtext */}
                        <p className="text-base sm:text-lg lg:text-xl text-gray-400 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                            ShvetVarni Technologies builds SaaS platforms, web applications,
                            AI solutions, and automation systems that help businesses scale
                            faster, smarter, and more efficiently.
                        </p>

                        {/* Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">

                            {/* Primary Button */}
                            <Link
                                to="/contact"
                                className="relative inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white rounded-xl bg-gradient-to-r from-indigo-500 to-cyan-500 shadow-lg transition-all duration-300 hover:scale-[1.03] hover:shadow-indigo-500/30"
                            >
                                Get Free Consultation
                            </Link>

                            {/* Secondary Button */}
                            <Link
                                to="/services"
                                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white rounded-xl border border-white/10 bg-white/5 backdrop-blur-md transition-all duration-300 hover:border-indigo-400/40 hover:bg-white/10 hover:scale-[1.03]"
                            >
                                View Services
                            </Link>
                        </div>
                    </motion.div>

                    {/* Right Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 30 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        className="relative flex justify-center lg:justify-end"
                    >
                        {/* Glow behind image */}
                        {/* <div className="absolute w-[420px] h-[420px] bg-cyan-500/20 blur-[120px] rounded-full"></div> */}

                        {/* <img
                            src={heroImage}
                            alt="AI Powered Software Development"
                            draggable="false"
                            className="
                relative
                w-full
                max-w-[620px]
                lg:max-w-[700px]
                xl:max-w-[820px]
                h-auto
                object-contain
                select-none
                drop-shadow-[0_40px_80px_rgba(0,0,0,0.6)]
                transition-transform duration-500
                hover:scale-[1.02]
              "
                        /> */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-black/30 via-transparent to-black/20 rounded-2xl pointer-events-none"></div>

                        <video
                            src={heroVideo}
                            autoPlay
                            loop
                            muted
                            playsInline
                            preload="auto"
                            className="
                            relative
                            w-full
                            max-w-[720px]
                            lg:max-w-[760px]
                            xl:max-w-[880px]
                            rounded-2xl
                            object-cover
                            shadow-2xl
                            drop-shadow-[0_40px_80px_rgba(0,0,0,0.6)]
                            transition-transform duration-500
                            hover:scale-[1.01]
                        "
                        />
                    </motion.div>

                </div>
            </Container>
        </section>
    );
};

export default Hero;
