// import React from 'react';
// import { motion } from 'framer-motion';
// import Container from '../../layout/Container';
// import {
//     LightBulbIcon,
//     UserGroupIcon,
//     ScaleIcon,
//     HeartIcon,
//     ArrowTrendingUpIcon
// } from '@heroicons/react/24/outline';

// const values = [
//     {
//         name: 'Innovation First',
//         description: 'We constantly explore new technologies to solve problems in better ways.',
//         icon: LightBulbIcon
//     },
//     {
//         name: 'Client-Centric',
//         description: 'Your success is our success. We build solutions that truly help you grow.',
//         icon: UserGroupIcon
//     },
//     {
//         name: 'Quality & Scalability',
//         description: 'We write clean, maintainable code designed to scale with your business.',
//         icon: ScaleIcon
//     },
//     {
//         name: 'Transparency',
//         description: 'No hidden costs or confusing jargon. Just honest, open communication.',
//         icon: HeartIcon
//     },
//     {
//         name: 'Continuous Improvement',
//         description: 'We never stop learning and refining our processes and skills.',
//         icon: ArrowTrendingUpIcon
//     }
// ];

// const CoreValues = () => {
//     return (
//         <section className="py-20 bg-blue-950">
//             <Container>
//                 <div className="text-center max-w-3xl mx-auto mb-16">
//                     <motion.div
//                         initial={{ opacity: 0, y: 20 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         viewport={{ once: true }}
//                         transition={{ duration: 0.5 }}
//                     >
//                         <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
//                             Our Core <span className="text-primary-600">Values</span>
//                         </h2>
//                         <p className="text-lg text-gray-600 max-w-xl mx-auto">
//                             These principles guide every decision we make and every line of code we write.
//                         </p>
//                     </motion.div>
//                 </div>

//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//                     {values.map((value, index) => (
//                         <motion.div
//                             key={index}
//                             initial={{ opacity: 0, y: 20 }}
//                             whileInView={{ opacity: 1, y: 0 }}
//                             viewport={{ once: true }}
//                             transition={{ duration: 0.5, delay: index * 0.1 }}
//                             className="bg-gray-50 p-10 rounded-[2rem] border border-gray-100 hover:border-primary-200 hover:bg-white hover:shadow-xl transition-all duration-300 group"
//                         >
//                             <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-sm border border-gray-100 group-hover:scale-110 transition-transform duration-300 text-primary-600">
//                                 <value.icon className="w-7 h-7" />
//                             </div>
//                             <h3 className="text-xl font-bold text-gray-900 mb-4 tracking-tight">
//                                 {value.name}
//                             </h3>
//                             <p className="text-gray-600 leading-relaxed">
//                                 {value.description}
//                             </p>
//                         </motion.div>
//                     ))}
//                 </div>
//             </Container>
//         </section>
//     );
// };

// export default CoreValues;

// Working but i test the new premiume hove effect card so i comments this code .

// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import Container from '../../layout/Container';
// import {
//     LightBulbIcon,
//     UserGroupIcon,
//     ScaleIcon,
//     HeartIcon,
//     ArrowTrendingUpIcon
// } from '@heroicons/react/24/outline';

// const values = [
//     {
//         name: 'Innovation First',
//         description: 'We constantly explore new technologies to solve problems in better ways.',
//         icon: LightBulbIcon,
//         color: 'from-blue-500 to-blue-600',
//         border: 'border-blue-400/30'
//     },
//     {
//         name: 'Client-Centric',
//         description: 'Your success is our success. We build solutions that truly help you grow.',
//         icon: UserGroupIcon,
//         color: 'from-indigo-500 to-indigo-600',
//         border: 'border-indigo-400/30'
//     },
//     {
//         name: 'Quality & Scalability',
//         description: 'We write clean, maintainable code designed to scale with your business.',
//         icon: ScaleIcon,
//         color: 'from-emerald-500 to-emerald-600',
//         border: 'border-emerald-400/30'
//     },
//     {
//         name: 'Transparency',
//         description: 'No hidden costs or confusing jargon. Just honest, open communication.',
//         icon: HeartIcon,
//         color: 'from-pink-500 to-pink-600',
//         border: 'border-pink-400/30'
//     },
//     {
//         name: 'Continuous Improvement',
//         description: 'We never stop learning and refining our processes and skills.',
//         icon: ArrowTrendingUpIcon,
//         color: 'from-orange-500 to-orange-600',
//         border: 'border-orange-400/30'
//     }
// ];

// const CoreValues = () => {
//     const [active, setActive] = useState(null); // mobile tap state

//     return (
//         <section className="py-14 sm:py-20 bg-[#0B1E3A]">
//             <Container>

//                 {/* Header */}
//                 <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
//                     <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-4">
//                         Our Core <span className="text-gray-300">Values</span>
//                     </h2>
//                     <p className="text-gray-400 text-sm sm:text-base md:text-lg">
//                         These principles guide every decision we make and every line of code we write.
//                     </p>
//                 </div>

//                 {/* Cards */}
//                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-7">

//                     {values.map((value, index) => {
//                         const isActive = active === index;

//                         return (
//                             <motion.div
//                                 key={index}
//                                 initial={{ opacity: 0, y: 20 }}
//                                 whileInView={{ opacity: 1, y: 0 }}
//                                 viewport={{ once: true }}
//                                 transition={{ duration: 0.4, delay: index * 0.07 }}
//                                 onClick={() => setActive(isActive ? null : index)}
//                                 className={`relative overflow-hidden rounded-3xl p-6 sm:p-8
//                                     bg-white/5 backdrop-blur-md border ${value.border}
//                                     shadow-md hover:shadow-2xl transition-all duration-500
//                                     group cursor-pointer`}
//                             >

//                                 {/* Color Fill Layer (Desktop hover + Mobile tap) */}
//                                 <div
//                                     className={`absolute inset-0 bg-gradient-to-br ${value.color}
//                                     transition-transform duration-500 ease-out
//                                     ${isActive ? 'translate-y-0' : 'translate-y-full'}
//                                     group-hover:translate-y-0`}
//                                 />

//                                 {/* Content */}
//                                 <div className="relative z-10">

//                                     {/* Icon */}
//                                     <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl
//                                         flex items-center justify-center mb-5
//                                         bg-white/10 border border-white/10 backdrop-blur-sm
//                                         group-hover:bg-white/20 transition">
//                                         <value.icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
//                                     </div>

//                                     {/* Title */}
//                                     <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-2 sm:mb-3">
//                                         {value.name}
//                                     </h3>

//                                     {/* Description */}
//                                     <p className="text-gray-300 text-xs sm:text-sm md:text-base leading-relaxed">
//                                         {value.description}
//                                     </p>
//                                 </div>
//                             </motion.div>
//                         );
//                     })}
//                 </div>
//             </Container>
//         </section>
//     );
// };

// export default CoreValues;



///////////////////////////////////////////////////////////////
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Container from '../../layout/Container';
import {
    LightBulbIcon,
    UserGroupIcon,
    ScaleIcon,
    HeartIcon,
    ArrowTrendingUpIcon
} from '@heroicons/react/24/outline';

const values = [
    {
        name: 'Innovation First',
        description: 'We constantly explore new technologies to solve problems in better ways.',
        icon: LightBulbIcon,
        color: 'from-blue-500 via-blue-500 to-blue-600',
        glow: 'shadow-blue-500/40'
    },
    {
        name: 'Client-Centric',
        description: 'Your success is our success. We build solutions that truly help you grow.',
        icon: UserGroupIcon,
        color: 'from-indigo-500 via-indigo-500 to-indigo-600',
        glow: 'shadow-indigo-500/40'
    },
    {
        name: 'Quality & Scalability',
        description: 'We write clean, maintainable code designed to scale with your business.',
        icon: ScaleIcon,
        color: 'from-emerald-500 via-emerald-500 to-emerald-600',
        glow: 'shadow-emerald-500/40'
    },
    {
        name: 'Transparency',
        description: 'No hidden costs or confusing jargon. Just honest, open communication.',
        icon: HeartIcon,
        color: 'from-pink-500 via-pink-500 to-pink-600',
        glow: 'shadow-pink-500/40'
    },
    {
        name: 'Continuous Improvement',
        description: 'We never stop learning and refining our processes and skills.',
        icon: ArrowTrendingUpIcon,
        color: 'from-orange-500 via-orange-500 to-orange-600',
        glow: 'shadow-orange-500/40'
    }
];

const CoreValues = () => {
    const [active, setActive] = useState(null);

    return (
        <section className="relative py-16 sm:py-24 bg-[#0B1E3A] overflow-hidden">

            {/* ===== Floating Background Glow ===== */}
            <div className="absolute top-[-200px] left-[-200px] w-[500px] h-[500px] bg-blue-600/20 blur-[120px] rounded-full animate-pulse" />
            <div className="absolute bottom-[-200px] right-[-200px] w-[500px] h-[500px] bg-indigo-600/20 blur-[120px] rounded-full animate-pulse" />

            <Container>

                {/* ===== Header ===== */}
                <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-5 tracking-tight">
                        Our Core <span className="text-gray-300">Values</span>
                    </h2>
                    <p className="text-gray-400 text-base sm:text-lg">
                        These principles guide every decision we make and every line of code we write.
                    </p>
                </div>

                {/* ===== Cards ===== */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">

                    {values.map((value, index) => {
                        const isActive = active === index;

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.45, delay: index * 0.07 }}
                                whileHover={{ y: -6, scale: 1.02 }}
                                onClick={() => setActive(isActive ? null : index)}
                                className={`relative overflow-hidden rounded-3xl p-7 sm:p-9
                                    bg-white/5 backdrop-blur-xl border border-white/10
                                    shadow-lg transition-all duration-500 cursor-pointer group`}
                            >

                                {/* ===== Gradient Fill ===== */}
                                <div
                                    className={`absolute inset-0 bg-gradient-to-br ${value.color}
                                    transition-transform duration-500 ease-out
                                    ${isActive ? 'translate-y-0' : 'translate-y-full'}
                                    group-hover:translate-y-0`}
                                />

                                {/* ===== Glow Ring ===== */}
                                <div className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition duration-500 ${value.glow}`} />

                                {/* ===== Content ===== */}
                                <div className="relative z-10">

                                    {/* Icon */}
                                    <motion.div
                                        animate={{ scale: isActive ? 1.1 : 1 }}
                                        className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6
                                        bg-white/10 border border-white/10 backdrop-blur-md"
                                    >
                                        <value.icon className="w-7 h-7 text-white" />
                                    </motion.div>

                                    {/* Title */}
                                    <h3 className="text-lg sm:text-xl font-bold text-white mb-3">
                                        {value.name}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                                        {value.description}
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </Container>
        </section>
    );
};

export default CoreValues;
