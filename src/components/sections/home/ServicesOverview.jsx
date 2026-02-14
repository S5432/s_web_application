// import React from 'react';
// import { motion } from 'framer-motion';
// import Container from '../../layout/Container';
// import {
//     CodeBracketIcon,
//     CloudIcon,
//     GlobeAltIcon,
//     CpuChipIcon,
//     ArrowPathIcon,
//     LightBulbIcon
// } from '@heroicons/react/24/outline';

// const services = [
//     {
//         title: 'Custom Software Development',
//         description: 'Tailored software solutions designed to meet your specific business requirements and challenges.',
//         icon: CodeBracketIcon,
//     },
//     {
//         title: 'SaaS Product Development',
//         description: 'End-to-end development of scalable Software-as-a-Service platforms from concept to launch.',
//         icon: CloudIcon,
//     },
//     {
//         title: 'Web Application Development',
//         description: 'High-performance, responsive web apps built with modern frameworks and robust backends.',
//         icon: GlobeAltIcon,
//     },
//     {
//         title: 'AI & Machine Learning',
//         description: 'Intelligent solutions integrating AI/ML models to automate processes and gain data insights.',
//         icon: CpuChipIcon,
//     },
//     {
//         title: 'Business Automation',
//         description: 'Streamline operations with custom automation tools, bots, and workflow integrations.',
//         icon: ArrowPathIcon,
//     },
//     {
//         title: 'IT Consulting & Solutions',
//         description: 'Expert guidance on technology strategy, architecture, and digital transformation.',
//         icon: LightBulbIcon,
//     },
// ];

// const ServicesOverview = () => {
//     return (
//         <section className="py-20 bg-gray-50">
//             <Container>
//                 <div className="text-center mb-16 px-4">
//                     <motion.h2
//                         initial={{ opacity: 0, y: 10 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         viewport={{ once: true }}
//                         className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
//                     >
//                         Solutions for Your Biggest Challenges
//                     </motion.h2>
//                     <motion.p
//                         initial={{ opacity: 0, y: 10 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         viewport={{ once: true }}
//                         transition={{ delay: 0.1 }}
//                         className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
//                     >
//                         We help companies across industries build high-impact digital products and automation systems that scale.
//                     </motion.p>
//                 </div>

//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-4">
//                     {services.map((service, index) => (
//                         <motion.div
//                             key={index}
//                             initial={{ opacity: 0, y: 20 }}
//                             whileInView={{ opacity: 1, y: 0 }}
//                             viewport={{ once: true }}
//                             transition={{ delay: index * 0.1 }}
//                             className="group p-10 bg-white rounded-3xl shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.04)] border border-gray-100 transition-all duration-900 hover:bg-slate-400 hover:text-black hover:font-bold hover:cursor-pointer hover:-translate-y-2"
//                         >
//                             <div className="w-16 h-16 bg-primary-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-primary-600 group-hover:text-white transition-all duration-900">
//                                 <service.icon className="w-8 h-8 text-primary-600 group-hover:text-white transition-colors duration-900" />
//                             </div>
//                             <h3 className="text-2xl font-bold text-gray-900 mb-4 tracking-tight">
//                                 {service.title}
//                             </h3>
//                             <p className="text-gray-600 leading-relaxed text-lg">
//                                 {service.description}
//                             </p>
//                         </motion.div>
//                     ))}
//                 </div>
//             </Container>
//         </section>
//     );
// };

// export default ServicesOverview;

import React from 'react';
import { motion } from 'framer-motion';
import Container from '../../layout/Container';
import {
    CodeBracketIcon,
    CloudIcon,
    GlobeAltIcon,
    CpuChipIcon,
    ArrowPathIcon,
    LightBulbIcon,
} from '@heroicons/react/24/outline';

const services = [
    {
        title: 'Custom Software Development',
        description: 'Tailored software solutions designed to meet your specific business requirements and challenges.',
        icon: CodeBracketIcon,
    },
    {
        title: 'SaaS Product Development',
        description: 'End-to-end development of scalable Software-as-a-Service platforms from concept to launch.',
        icon: CloudIcon,
    },
    {
        title: 'Web Application Development',
        description: 'High-performance, responsive web apps built with modern frameworks and robust backends.',
        icon: GlobeAltIcon,
    },
    {
        title: 'AI & Machine Learning',
        description: 'Intelligent solutions integrating AI/ML models to automate processes and gain data insights.',
        icon: CpuChipIcon,
    },
    {
        title: 'Business Automation',
        description: 'Streamline operations with custom automation tools, bots, and workflow integrations.',
        icon: ArrowPathIcon,
    },
    {
        title: 'IT Consulting & Solutions',
        description: 'Expert guidance on technology strategy, architecture, and digital transformation.',
        icon: LightBulbIcon,
    },
];

const ServicesOverview = () => {
    return (
        <section className="py-16 sm:py-20 bg-gray-50">
            <Container>
                <div className="text-center mb-12 sm:mb-16 px-4">
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
                    >
                        Solutions for Your Biggest Challenges
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
                    >
                        We help companies across industries build high-impact digital products and automation systems that scale.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 px-4">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="
                group relative p-6 sm:p-8 md:p-10 
                bg-white rounded-3xl 
                shadow-[0_2px_10px_rgba(0,0,0,0.02)] 
                hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] 
                active:shadow-[0_20px_40px_rgba(0,0,0,0.08)]
                border border-gray-100 
                hover:bg-gradient-to-br from-[#0B1E3A] via-[#0F2A52] to-[#0B1E3A] active:bg-gradient-to-br from-[#0B1E3A] via-[#0F2A52] to-[#0B1E3A] 
                hover:text-white active:text-white
                hover:-translate-y-2 active:-translate-y-1
                transition-all duration-300 ease-out
                cursor-pointer touch-manipulation
              "
                        >
                            <div
                                className="
                  w-14 h-14 sm:w-16 sm:h-16 
                  bg-primary-50 rounded-2xl flex items-center justify-center mb-6 sm:mb-8
                  group-hover:bg-primary-600 group-active:bg-primary-600
                  group-hover:text-white group-active:text-white
                  transition-all duration-300
                "
                            >
                                <service.icon
                                    className="
                    w-7 h-7 sm:w-8 sm:h-8 
                    text-primary-600 
                    group-hover:text-white group-active:text-white
                    transition-colors duration-300
                  "
                                />
                            </div>

                            <h3
                                className="
                  text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 tracking-tight
                  group-hover:text-white group-active:text-white
                  transition-colors duration-300
                "
                            >
                                {service.title}
                            </h3>

                            <p
                                className="
                  text-gray-600 text-base sm:text-lg leading-relaxed
                  group-hover:text-gray-200 group-active:text-gray-200
                  transition-colors duration-300
                "
                            >
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default ServicesOverview;

