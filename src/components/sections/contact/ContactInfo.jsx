// import React from 'react';
// import { motion } from 'framer-motion';
// import Container from '../../layout/Container';
// import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline';

// const contactDetails = [
//     {
//         icon: EnvelopeIcon,
//         title: 'Email Us',
//         info: 'contact@shvetvarni.com',
//         link: 'mailto:contact@shvetvarni.com',
//         color: 'text-blue-600',
//         bgColor: 'bg-blue-50'
//     },
//     {
//         icon: PhoneIcon,
//         title: 'WhatsApp / Call',
//         info: '+91 89660 36443',
//         link: 'https://wa.me/918966036443',
//         color: 'text-green-600',
//         bgColor: 'bg-green-50'
//     },
//     {
//         icon: MapPinIcon,
//         title: 'Location',
//         info: 'Global / Remote-First',
//         link: '#',
//         color: 'text-purple-600',
//         bgColor: 'bg-purple-50'
//     }
// ];

// const ContactInfo = () => {
//     return (
//         <section className="py-20 bg-gray-50">
//             <Container>
//                 <div className="grid md:grid-cols-3 gap-8">
//                     {contactDetails.map((item, index) => (
//                         <motion.div
//                             key={index}
//                             initial={{ opacity: 0, y: 20 }}
//                             whileInView={{ opacity: 1, y: 0 }}
//                             viewport={{ once: true }}
//                             transition={{ duration: 0.5, delay: index * 0.1 }}
//                             className="flex flex-col items-center text-center p-10 bg-white rounded-[2rem] shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
//                         >
//                             <div className={`w-16 h-16 ${item.bgColor} rounded-2xl flex items-center justify-center mb-6 ${item.color} group-hover:scale-110 transition-transform shadow-sm`}>
//                                 <item.icon className="w-8 h-8" />
//                             </div>
//                             <h3 className="text-xl font-bold text-gray-900 mb-3 tracking-tight">
//                                 {item.title}
//                             </h3>
//                             <a href={item.link} className="text-gray-600 font-medium hover:text-primary-600 transition-colors text-lg">
//                                 {item.info}
//                             </a>
//                         </motion.div>
//                     ))}
//                 </div>
//             </Container>
//         </section>
//     );
// };

// export default ContactInfo;

//////////////////////////////////////////////////////////////////


// import React from 'react';
// import { motion } from 'framer-motion';
// import Container from '../../layout/Container';
// import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline';

// const contactDetails = [
//     {
//         icon: EnvelopeIcon,
//         title: 'Email Us',
//         info: 'contact@shvetvarni.com',
//         link: 'mailto:contact@shvetvarni.com',
//         color: 'text-blue-600',
//         bg: 'from-blue-50 to-blue-100'
//     },
//     {
//         icon: PhoneIcon,
//         title: 'WhatsApp / Call',
//         info: '+91 89660 36443',
//         link: 'https://wa.me/918966036443',
//         color: 'text-green-600',
//         bg: 'from-green-50 to-green-100'
//     },
//     {
//         icon: MapPinIcon,
//         title: 'Location',
//         info: 'Global / Remote-First',
//         link: '#',
//         color: 'text-purple-600',
//         bg: 'from-purple-50 to-purple-100'
//     }
// ];

// const ContactInfo = () => {
//     return (
//         <section className="relative py-24 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">

//             {/* Soft Premium Glow */}
//             <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[600px] h-[600px] bg-primary-100 blur-[140px] rounded-full opacity-40"></div>

//             <Container className="relative z-10">
//                 <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">

//                     {contactDetails.map((item, index) => (
//                         <motion.div
//                             key={index}
//                             initial={{ opacity: 0, y: 25 }}
//                             whileInView={{ opacity: 1, y: 0 }}
//                             viewport={{ once: true }}
//                             transition={{ duration: 0.5, delay: index * 0.1 }}
//                             className="group relative flex flex-col items-center text-center p-10 bg-white/80 backdrop-blur-xl rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-[0_15px_40px_rgba(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-300"
//                         >

//                             {/* Icon */}
//                             <div className={`w-16 h-16 bg-gradient-to-br ${item.bg} rounded-2xl flex items-center justify-center mb-6 ${item.color} shadow-sm group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
//                                 <item.icon className="w-7 h-7" />
//                             </div>

//                             {/* Title */}
//                             <h3 className="text-xl font-bold text-gray-900 mb-2 tracking-tight">
//                                 {item.title}
//                             </h3>

//                             {/* Info */}
//                             <a
//                                 href={item.link}
//                                 className="text-gray-600 font-medium text-lg hover:text-primary-600 transition-colors duration-300 break-words"
//                             >
//                                 {item.info}
//                             </a>

//                             {/* Hover Glow Border */}
//                             <div className="absolute inset-0 rounded-[2rem] opacity-0 group-hover:opacity-100 transition duration-300 bg-gradient-to-r from-primary-100 via-transparent to-primary-100 blur-xl"></div>

//                         </motion.div>
//                     ))}

//                 </div>
//             </Container>
//         </section>
//     );
// };

// export default ContactInfo;


//////////////////////////////////////////////////////////////////
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Container from '../../layout/Container';
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline';

const contactDetails = [
    {
        icon: EnvelopeIcon,
        title: 'Email Us',
        info: 'shvetvarnitechnologies@gmail.com',
        link: 'mailto:shvetvarnitechnologies@gmail.com',
        color: 'text-blue-600',
        gradient: 'from-blue-50 to-blue-100'
    },
    {
        icon: PhoneIcon,
        title: 'WhatsApp / Call',
        info: '+91 89660 36443',
        link: 'https://wa.me/918966036443',
        color: 'text-green-600',
        gradient: 'from-green-50 to-green-100'
    },
    {
        icon: MapPinIcon,
        title: 'Location',
        info: 'Indore, Madhya Pradesh, India',
        link: '#',
        color: 'text-purple-600',
        gradient: 'from-purple-50 to-purple-100'
    }
];

const ContactInfo = () => {
    const [active, setActive] = useState(null); // mobile tap state

    return (
        <section className="relative py-20 sm:py-24 md:py-28 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">

            {/* Optimized Background Blobs (smaller on mobile) */}
            <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[400px] sm:w-[600px] md:w-[700px] h-[400px] sm:h-[600px] md:h-[700px] bg-primary-100 rounded-full blur-[120px] sm:blur-[140px] md:blur-[160px] opacity-40"></div>
            <div className="absolute bottom-0 right-0 w-[250px] sm:w-[350px] md:w-[400px] h-[250px] sm:h-[350px] md:h-[400px] bg-blue-100 rounded-full blur-[100px] sm:blur-[120px] md:blur-[140px] opacity-30"></div>

            <Container className="relative z-10">
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">

                    {contactDetails.map((item, index) => {
                        const isActive = active === index;

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                onClick={() => setActive(isActive ? null : index)}
                                className="group relative p-[1px] rounded-[2rem] bg-gradient-to-br from-transparent via-primary-200/40 to-transparent transition duration-500"
                            >

                                {/* Card */}
                                <div
                                    className={`relative flex flex-col items-center text-center 
                                    p-6 sm:p-8 md:p-10 
                                    bg-white/90 backdrop-blur-xl rounded-[2rem] border border-gray-100 
                                    shadow-sm transition-all duration-300 overflow-hidden cursor-pointer
                                    ${isActive ? 'shadow-[0_20px_60px_rgba(0,0,0,0.12)] -translate-y-1' : ''}
                                    hover:shadow-[0_20px_60px_rgba(0,0,0,0.12)] hover:-translate-y-1`}
                                >

                                    {/* Glow Overlay (hover + tap) */}
                                    <div
                                        className={`absolute inset-0 transition duration-500 blur-2xl
                                        bg-gradient-to-r from-primary-100/40 via-transparent to-primary-100/40
                                        ${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}
                                    ></div>

                                    {/* Icon */}
                                    <div
                                        className={`relative z-10 
                                        w-14 h-14 sm:w-16 sm:h-16 
                                        bg-gradient-to-br ${item.gradient} 
                                        rounded-2xl flex items-center justify-center mb-5 sm:mb-6 
                                        ${item.color} shadow-sm transition-all duration-300
                                        ${isActive ? 'scale-110 rotate-6' : ''}
                                        group-hover:scale-110 group-hover:rotate-6`}
                                    >
                                        <item.icon className="w-6 h-6 sm:w-7 sm:h-7" />
                                    </div>

                                    {/* Title */}
                                    <h3 className="relative z-10 text-lg sm:text-xl font-bold text-gray-900 mb-2 tracking-tight">
                                        {item.title}
                                    </h3>

                                    {/* Info */}
                                    <a
                                        href={item.link}
                                        className="relative z-10 text-gray-600 font-medium text-base sm:text-lg hover:text-primary-600 transition-colors duration-300 break-words"
                                    >
                                        {item.info}
                                    </a>

                                    {/* Bottom Shine (hover + tap) */}
                                    <div
                                        className={`absolute bottom-0 left-0 w-full h-16 sm:h-20 bg-gradient-to-t from-white/60 to-transparent transition duration-500
                                        ${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}
                                    ></div>
                                </div>
                            </motion.div>
                        );
                    })}

                </div>
            </Container>
        </section>
    );
};

export default ContactInfo;
