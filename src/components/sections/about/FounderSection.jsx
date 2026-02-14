// import React from 'react';
// import { motion } from 'framer-motion';
// import Container from '../../layout/Container';

// const FounderSection = () => {
//     return (
//         <section className="py-20 bg-gray-50 relative overflow-hidden">
//             <Container>
//                 <motion.div
//                     initial={{ opacity: 0, scale: 0.95 }}
//                     whileInView={{ opacity: 1, scale: 1 }}
//                     viewport={{ once: true }}
//                     transition={{ duration: 0.6 }}
//                     className="max-w-5xl mx-auto bg-white rounded-[3rem] p-8 md:p-16 shadow-2xl relative overflow-hidden"
//                 >
//                     {/* Decorative background element */}
//                     <div className="absolute top-0 left-0 w-32 h-32 bg-primary-100 rounded-br-full opacity-30"></div>

//                     <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20 relative z-10">
//                         {/* Avatar / Profile Image */}
//                         <div className="flex-shrink-0 group">
//                             <div className="w-48 h-48 md:w-64 md:h-64 rounded-[2.5rem] bg-gradient-to-br from-primary-50 to-blue-50 flex items-center justify-center border-8 border-white shadow-xl overflow-hidden transform group-hover:rotate-3 transition-transform duration-500">
//                                 <svg className="w-32 h-32 text-primary-200" fill="currentColor" viewBox="0 0 24 24">
//                                     <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
//                                 </svg>
//                             </div>
//                         </div>

//                         <div className="text-center md:text-left flex-grow">
//                             <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-2 tracking-tight">
//                                 Shvet Patel
//                             </h2>
//                             <p className="text-primary-600 font-bold text-lg mb-8 uppercase tracking-widest">
//                                 Founder & Principal Architect
//                             </p>
//                             <div className="relative">
//                                 <svg className="absolute -top-6 -left-6 w-12 h-12 text-gray-100 transform -rotate-12" fill="currentColor" viewBox="0 0 32 32">
//                                     <path d="M10 8v8H6c0 4.418 3.582 8 8 8V24c-6.627 0-12-5.373-12-12s5.373-12 12-12v8H10zM26 8v8h-4c0 4.418 3.582 8 8 8V24c-6.627 0-12-5.373-12-12s5.373-12 12-12v8H26z" />
//                                 </svg>
//                                 <p className="text-gray-600 text-xl italic leading-relaxed relative z-10">
//                                     "I founded this company with a simple vision: to bridge the gap between complex engineering and real-world business growth. We build software that doesn't just work—it inspires and scales."
//                                 </p>
//                             </div>
//                         </div>
//                     </div>
//                 </motion.div>
//             </Container>
//         </section>
//     );
// };

// export default FounderSection;


import React from 'react';
import { motion } from 'framer-motion';
import Container from '../../layout/Container';
import HarshitImg from '../../../assets/Harshit_profile_2.png';
import SubhashImg from '../../../assets/Subhash_Professional_new_1.jpeg';

const founders = [
    {
        name: "Subhash Prajapati",
        role: "Founder & Principal Architect",
        image: SubhashImg,
        quote:
            "I founded this company with a simple vision: to bridge the gap between complex engineering and real-world business growth. We build software that doesn't just work—it inspires and scales."
    },
    {
        name: "Harshit Patel",
        role: "Co-Founder & Technology Strategist",
        image: HarshitImg,
        quote:
            "Our mission is to empower businesses with intelligent automation and scalable technology. We focus on building future-ready digital solutions that create real impact."
    }
];

const FounderSection = () => {
    return (
        <section className="py-20 bg-gray-50 relative overflow-hidden">
            <Container>

                {/* Heading */}
                <div className="text-center max-w-2xl mx-auto mb-14">
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-3">
                        Leadership Team
                    </h2>
                    <p className="text-gray-500 text-lg">
                        Meet the minds behind our vision, innovation, and growth.
                    </p>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">

                    {founders.map((person, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="bg-white rounded-[2.5rem] p-8 md:p-10 shadow-xl hover:shadow-2xl transition-all duration-500 group relative overflow-hidden"
                        >
                            {/* Glow */}
                            <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-blue-50 opacity-0 group-hover:opacity-100 transition duration-500"></div>

                            <div className="relative z-10 flex flex-col items-center text-center">

                                {/* Avatar Image */}
                                <div className="w-40 h-40 md:w-48 md:h-48 rounded-[2rem] border-8 border-white shadow-lg mb-6 overflow-hidden transform group-hover:scale-105 transition duration-500">
                                    <img
                                        src={person.image}
                                        alt={person.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                {/* Name */}
                                <h3 className="text-2xl font-bold text-gray-900 mb-1">
                                    {person.name}
                                </h3>

                                {/* Role */}
                                <p className="text-primary-600 font-semibold uppercase tracking-wider text-sm mb-5">
                                    {person.role}
                                </p>

                                {/* Quote */}
                                <p className="text-gray-600 italic leading-relaxed">
                                    "{person.quote}"
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default FounderSection;
