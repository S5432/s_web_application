import React from 'react';
import { motion } from 'framer-motion';
import Container from '../../layout/Container';
import { FlagIcon, EyeIcon } from '@heroicons/react/24/outline';

const MissionVision = () => {
    return (
        <section className="py-20 bg-gray-50 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary-100/50 rounded-full blur-3xl -translate-y-1/2"></div>

            <Container className="relative z-10">
                <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                    {/* Mission Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="bg-cyan-800 p-10 md:p-12 rounded-[2rem] shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                    >
                        <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-8 text-blue-600 shadow-sm">
                            <FlagIcon className="w-7 h-7" />
                        </div>
                        <h3 className="text-4xl font-bold text-gray-50 mb-4 tracking-tight text-center">
                            Our Mission
                        </h3>
                        <p className="text-gray-50 text-lg leading-relaxed">
                            To help businesses scale using modern software, AI, and automation. We empower organizations to work smarter, not harder, through digital transformation.
                        </p>
                    </motion.div>

                    {/* Vision Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="bg-yellow-500 p-10 md:p-12 rounded-[2rem] shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                    >
                        <div className="w-14 h-14 bg-purple-50 rounded-2xl flex items-center justify-center mb-8 text-purple-600 shadow-sm">
                            <EyeIcon className="w-7 h-7" />
                        </div>
                        <h3 className="text-4xl font-bold text-gray-50 mb-4 tracking-tight text-center">
                            Our Vision
                        </h3>
                        <p className="text-gray-50 text-lg leading-relaxed">
                            To become a trusted global technology partner delivering scalable and intelligent digital solutions that shape the future of industries.
                        </p>
                    </motion.div>
                </div>
            </Container>
        </section>
    );
};

export default MissionVision;
