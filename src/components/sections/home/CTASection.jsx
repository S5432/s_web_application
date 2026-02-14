import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Container from '../../layout/Container';

const CTASection = () => {
    return (
        <section className="py-20 bg-white">
            <Container>
                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="relative rounded-[3rem] overflow-hidden bg-gradient-to-br from-[#0B1E3A] via-[#0F2A52] to-[#0B1E3A] px-8 py-20 sm:px-16 sm:py-28 text-center shadow-xl"
                >
                    {/* Minimalist Pattern */}
                    <div className="absolute top-0 left-0 w-full h-full opacity-10">
                        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                            <defs>
                                <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                                    <path d="M 20 0 L 0 0 0 20" fill="none" stroke="white" strokeWidth="0.5" />
                                </pattern>
                            </defs>
                            <rect width="100%" height="100%" fill="url(#grid)" />
                        </svg>
                    </div>

                    <div className="relative z-10 max-w-3xl mx-auto">
                        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-8 leading-[1.1]">
                            Ready to accelerate your engineering?
                        </h2>
                        <p className="text-xl text-primary-50 mb-12 leading-relaxed opacity-90">
                            Let's discuss your project and see how ShvetVarni can help you build, scale, and innovate faster.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-5 justify-center">
                            <Link
                                to="/contact"
                                className="inline-flex items-center justify-center px-10 py-5 text-lg font-bold text-primary-600 bg-white rounded-2xl hover:bg-primary-50 shadow-xl transition-all duration-200 hover:-translate-y-1"
                            >
                                Get Started Now
                            </Link>
                            <Link
                                to="/services"
                                className="inline-flex items-center justify-center px-10 py-5 text-lg font-bold text-white border-2 border-white/20 rounded-2xl hover:bg-white/10 transition-colors"
                            >
                                Explore Solutions
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </Container>
        </section>
    );
};

export default CTASection;
