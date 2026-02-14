import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Container from '../../layout/Container';

const CaseStudyCTA = () => {
    return (
        <section className="py-20 lg:py-24 bg-gradient-to-br from-[#0B1E3A] via-[#0F2A52] to-[#0B1E3A] relative overflow-hidden">
            {/* High-end Decorative Background */}
            <div className="absolute inset-0 pointer-events-none opacity-30">
                <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-blue-500 rounded-full blur-[140px] -translate-x-1/3 -translate-y-1/3"></div>
                <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-primary-600 rounded-full blur-[140px] translate-x-1/3 translate-y-1/3"></div>
            </div>

            <Container className="relative z-10">
                <div className="text-center max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
                            Inspired by Our <span className="text-primary-400">Implementation?</span>
                        </h2>
                        <p className="text-primary-100 text-lg md:text-xl mb-12 max-w-2xl mx-auto font-medium opacity-90">
                            Partner with us to build a custom AI solution tailored to your specific business requirements and challenges.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
                            <Link
                                to="/contact"
                                className="w-full sm:w-auto px-10 py-4.5 bg-white text-primary-900 font-bold rounded-xl transition-all hover:bg-primary-50 hover:-translate-y-1 shadow-xl shadow-black/20 text-lg"
                            >
                                Discuss Your Project
                            </Link>
                            <Link
                                to="/services"
                                className="w-full sm:w-auto px-10 py-4.5 bg-transparent border-2 border-white/20 text-white font-bold rounded-xl transition-all hover:bg-white/5 hover:border-white/40 text-lg"
                            >
                                Explore Expertise
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </Container>
        </section>
    );
};

export default CaseStudyCTA;
