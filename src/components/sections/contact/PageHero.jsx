// import React from 'react';
// import { motion } from 'framer-motion';
// import Container from '../../layout/Container';

// const PageHero = () => {
//     return (
//         <section className="bg-white pt-32 pb-12 relative overflow-hidden">
//             {/* Design elements */}
//             <div className="absolute top-0 left-0 w-80 h-80 bg-primary-50 rounded-full blur-[100px] -translate-y-1/2 -translate-x-1/2 opacity-50"></div>

//             <Container className="relative z-10">
//                 <div className="text-center max-w-3xl mx-auto">
//                     <motion.div
//                         initial={{ opacity: 0, y: 20 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.6 }}
//                     >
//                         <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 tracking-tight">
//                             Get in <span className="text-primary-600">Touch</span>
//                         </h1>
//                         <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
//                             Have a project idea or need a software solution? Let’s discuss how we can help you build scalable and intelligent digital products.
//                         </p>
//                     </motion.div>
//                 </div>
//             </Container>
//         </section>
//     );
// };

// export default PageHero;


import React from 'react';
import { motion } from 'framer-motion';
import Container from '../../layout/Container';

const PageHero = () => {
    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-[#0B1E3A] via-[#0F2A52] to-[#0B1E3A] pt-32 pb-20">

            {/* Premium Glow Effects */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary-600/20 blur-[140px] rounded-full"></div>
            <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-indigo-600/10 blur-[120px] rounded-full"></div>

            <Container className="relative z-10">
                <div className="text-center max-w-3xl mx-auto">

                    <motion.div
                        initial={{ opacity: 0, y: 25 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                    >
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight">
                            Get in <span className="bg-gradient-to-r from-primary-400 to-indigo-400 bg-clip-text text-transparent">Touch</span>
                        </h1>

                        <p className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
                            Have a project idea or need a powerful software solution? Let’s build scalable,
                            intelligent and future-ready digital products together.
                        </p>
                    </motion.div>

                </div>
            </Container>
        </section>
    );
};

export default PageHero;
