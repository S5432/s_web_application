import React from 'react';
import { motion } from 'framer-motion';
import Container from '../../layout/Container';

const TestimonialsHeader = () => {
    return (
        <Container className="mb-16">
            <div className="max-w-3xl mx-auto text-center">
                <motion.span
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="inline-block px-5 py-2 mb-6 text-xs sm:text-sm font-semibold tracking-widest uppercase
                    bg-white/5 backdrop-blur-md border border-white/10 rounded-full text-blue-400 shadow-lg"
                >
                    ✦ Client Testimonials
                </motion.span>
                <motion.h2
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight"
                >
                    What Our{" "}
                    <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                        Clients Say
                    </span>
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-gray-400 text-base sm:text-lg leading-relaxed"
                >
                    We’ve partnered with visionary companies to build groundbreaking AI solutions and scalable
                    software platforms that drive real-world impact.
                </motion.p>
            </div>
        </Container>
    );
};

export default TestimonialsHeader;
