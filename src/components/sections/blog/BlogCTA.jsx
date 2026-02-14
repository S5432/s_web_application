import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Container from '../../layout/Container';

const BlogCTA = () => {
    return (
        <section className="py-20 lg:py-24 bg-white relative overflow-hidden">
            {/* Glassmorphism Decorative Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#0B1E3A] via-[#0F2A52] to-[#0B1E3A] pointer-events-none">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] translate-x-1/4 -translate-y-1/4"></div>
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary-600/20 rounded-full blur-[120px] -translate-x-1/4 translate-y-1/4"></div>
            </div>

            <Container className="relative z-10">
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-16 text-center max-w-5xl mx-auto shadow-2xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
                            Ready to Transform Your <span className="text-primary-400">Digital Presence?</span>
                        </h2>
                        <p className="text-primary-100 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
                            Let's discuss how our expertise in AI and modern web technologies can help accelerate your business growth.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link
                                to="/contact"
                                className="w-full sm:w-auto px-8 py-4 bg-primary-500 hover:bg-primary-400 text-white font-bold rounded-xl transition-all hover:-translate-y-1 shadow-lg shadow-primary-500/25 text-lg"
                            >
                                Start a Conversation
                            </Link>
                            <Link
                                to="/services"
                                className="w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-white/20 hover:border-white/40 text-white font-bold rounded-xl transition-all hover:bg-white/5 text-lg"
                            >
                                Our Services
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </Container>
        </section>
    );
};

export default BlogCTA;
