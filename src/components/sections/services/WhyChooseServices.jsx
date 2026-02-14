// import React from 'react';
// import { motion } from 'framer-motion';
// import Container from '../../layout/Container';
// import {
//     ShieldCheckIcon,
//     RocketLaunchIcon,
//     UserGroupIcon,
//     WrenchScrewdriverIcon
// } from '@heroicons/react/24/outline';

// const reasons = [
//     {
//         title: 'Scalable Architecture',
//         description: 'Systems designed to grow with your business, handling increased loads without performance degradation.',
//         icon: RocketLaunchIcon,
//     },
//     {
//         title: 'Security-First Approach',
//         description: 'We integrate security best practices at every stage of development to protect your data and users.',
//         icon: ShieldCheckIcon,
//     },
//     {
//         title: 'Agile & Transparent',
//         description: 'Complete visibility into the development process with regular sprints, demos, and updates.',
//         icon: UserGroupIcon,
//     },
//     {
//         title: 'Long-Term Partnership',
//         description: 'We don’t just build and leave. We provide ongoing maintenance, support, and evolution.',
//         icon: WrenchScrewdriverIcon,
//     }
// ];

// const WhyChooseServices = () => {
//     return (
//         <section className="py-20 bg-white">
//             <Container>
//                 <div className="flex flex-col lg:flex-row gap-16 items-center">
//                     {/* Left: Content */}
//                     <div className="lg:w-1/2">
//                         <motion.div
//                             initial={{ opacity: 0, x: -20 }}
//                             whileInView={{ opacity: 1, x: 0 }}
//                             viewport={{ once: true }}
//                             transition={{ duration: 0.5 }}
//                         >
//                             <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
//                                 Why Clients Choose Us
//                             </h2>
//                             <p className="text-lg text-gray-600 mb-10 leading-relaxed">
//                                 Our commitment to engineering excellence and business understanding sets us apart. We deliver software that not only works but drives real value.
//                             </p>
//                         </motion.div>

//                         <div className="grid sm:grid-cols-2 gap-8">
//                             {reasons.map((reason, index) => (
//                                 <motion.div
//                                     key={index}
//                                     initial={{ opacity: 0, y: 10 }}
//                                     whileInView={{ opacity: 1, y: 0 }}
//                                     viewport={{ once: true }}
//                                     transition={{ duration: 0.5, delay: index * 0.1 }}
//                                 >
//                                     <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center mb-4">
//                                         <reason.icon className="w-6 h-6 text-primary-600" />
//                                     </div>
//                                     <h3 className="text-xl font-bold text-gray-900 mb-2">
//                                         {reason.title}
//                                     </h3>
//                                     <p className="text-gray-600 text-sm leading-relaxed">
//                                         {reason.description}
//                                     </p>
//                                 </motion.div>
//                             ))}
//                         </div>
//                     </div>

//                     {/* Right: Abstract Visual */}
//                     <motion.div
//                         className="lg:w-1/2 w-full"
//                         initial={{ opacity: 0, x: 20 }}
//                         whileInView={{ opacity: 1, x: 0 }}
//                         viewport={{ once: true }}
//                         transition={{ duration: 0.6 }}
//                     >
//                         <div className="relative aspect-square rounded-2xl bg-gray-50 overflow-hidden border border-gray-100">
//                             {/* Abstract Decorative Elements */}
//                             <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-primary-500/10 rounded-full blur-3xl animate-pulse"></div>
//                             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-blue-500/5 rounded-full blur-3xl"></div>

//                             <div className="relative z-10 h-full flex items-center justify-center">
//                                 <motion.div
//                                     whileHover={{ y: -5 }}
//                                     className="text-center p-8 bg-white/90 backdrop-blur-md rounded-2xl shadow-xl border border-white max-w-xs transform rotate-2"
//                                 >
//                                     <div className="text-5xl font-bold text-primary-600 mb-2">100%</div>
//                                     <div className="font-semibold text-gray-900">Client Satisfaction</div>
//                                     <p className="text-sm text-gray-500 mt-2">Based on post-launch reviews and successful long-term partnerships.</p>
//                                 </motion.div>
//                             </div>
//                         </div>
//                     </motion.div>
//                 </div>
//             </Container>
//         </section>
//     );
// };

// export default WhyChooseServices;



import React from 'react';
import { motion } from 'framer-motion';
import Container from '../../layout/Container';
import {
    ShieldCheckIcon,
    RocketLaunchIcon,
    UserGroupIcon,
    WrenchScrewdriverIcon
} from '@heroicons/react/24/outline';

const reasons = [
    {
        title: 'Scalable Architecture',
        description: 'Systems designed to grow with your business, handling increased loads without performance degradation.',
        icon: RocketLaunchIcon,
    },
    {
        title: 'Security-First Approach',
        description: 'We integrate security best practices at every stage of development to protect your data and users.',
        icon: ShieldCheckIcon,
    },
    {
        title: 'Agile & Transparent',
        description: 'Complete visibility into the development process with regular sprints, demos, and updates.',
        icon: UserGroupIcon,
    },
    {
        title: 'Long-Term Partnership',
        description: 'We don’t just build and leave. We provide ongoing maintenance, support, and evolution.',
        icon: WrenchScrewdriverIcon,
    }
];

const WhyChooseServices = () => {
    return (
        <section className="relative overflow-hidden py-16 sm:py-20 lg:py-24 
            bg-gradient-to-br from-[#0B1E3A] via-[#0F2A52] to-[#0B1E3A]">

            {/* ===== Soft Professional Glow ===== */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px]"></div>
                <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[120px]"></div>
            </div>

            <Container className="relative z-10">
                <div className="flex flex-col lg:flex-row gap-14 lg:gap-16 items-center">

                    {/* ===== Left Content ===== */}
                    <div className="lg:w-1/2">
                        <motion.div
                            initial={{ opacity: 0, x: -25 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-5 sm:mb-6">
                                Why Clients Choose Us
                            </h2>

                            <p className="text-base sm:text-lg text-gray-300 font-semibold mb-8 sm:mb-10 leading-relaxed">
                                Our commitment to engineering excellence and business understanding sets us apart.
                                We deliver software that not only works but drives real value.
                            </p>
                        </motion.div>

                        {/* ===== Reasons Grid ===== */}
                        <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
                            {reasons.map((reason, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 15 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                >
                                    <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mb-4 backdrop-blur-sm border border-white/10">
                                        <reason.icon className="w-6 h-6 text-blue-400" />
                                    </div>

                                    <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                                        {reason.title}
                                    </h3>

                                    <p className="text-gray-300 text-sm leading-relaxed">
                                        {reason.description}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* ===== Right Visual Card ===== */}
                    <motion.div
                        className="lg:w-1/2 w-full"
                        initial={{ opacity: 0, x: 25 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="relative aspect-square rounded-2xl overflow-hidden 
                            bg-white/90 border border-white/10 backdrop-blur-md">

                            {/* Glow Effects */}
                            <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-indigo-500/10"></div>

                            {/* Card */}
                            <div className="relative z-10 h-full flex items-center justify-center p-6">
                                <motion.div
                                    whileHover={{ y: -6 }}
                                    className="text-center p-6 sm:p-8 
                                        bg-gradient-to-br from-[#132F5A] to-[#0B1E3A]
                                        rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.4)]
                                        border border-white/10 max-w-xs"
                                >
                                    <div className="text-4xl sm:text-5xl font-extrabold text-blue-400 mb-2">
                                        100%
                                    </div>

                                    <div className="font-bold text-white">
                                        Client Satisfaction
                                    </div>

                                    <p className="text-sm text-gray-400 mt-2">
                                        Based on post-launch reviews and successful long-term partnerships.
                                    </p>
                                </motion.div>
                            </div>

                        </div>
                    </motion.div>

                </div>
            </Container>
        </section>
    );
};

export default WhyChooseServices;
