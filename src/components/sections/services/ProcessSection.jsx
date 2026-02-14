import React from 'react';
import { motion } from 'framer-motion';
import Container from '../../layout/Container';

const steps = [
    {
        id: '01',
        title: 'Requirement Analysis',
        description: 'We dive deep into your business goals, user needs, and technical requirements to create a solid roadmap.'
    },
    {
        id: '02',
        title: 'Planning & Architecture',
        description: 'Our architects design scalable systems, selecting the right tech stack and defining the project structure.'
    },
    {
        id: '03',
        title: 'Design & Development',
        description: 'We craft intuitive UI/UX and write clean, efficient code, delivering features in agile sprints.'
    },
    {
        id: '04',
        title: 'Testing & Optimization',
        description: 'Rigorous testing ensures bug-free performance. We optimize for speed, security, and reliability.'
    },
    {
        id: '05',
        title: 'Deployment & Support',
        description: 'We manage the launch and provide ongoing support to ensure your solution evolves with your business.'
    }
];

const ProcessSection = () => {
    return (
        <section className="py-20 bg-gray-50">
            <Container>
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                            How We Work
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            A transparent, agile workflow designed to deliver quality results on time and within budget.
                        </p>
                    </motion.div>
                </div>

                <div className="relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden lg:block absolute top-[60px] left-0 w-full h-0.5 bg-gray-200 z-0"></div>

                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="group relative z-10 bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center hover:bg-blue-950 active:bg-blue-950"
                            >
                                <div className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-lg mb-6 shadow-lg shadow-primary-500/30 group-hover:bg-white group-hover:text-blue-900 group-active:bg-white group-active:text-blue-900">
                                    {step.id}
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-white group-active:text-white">
                                    {step.title}
                                </h3>
                                <p className="text-sm text-gray-600 leading-relaxed group-hover:text-gray-200 group-active:text-gray-200">
                                    {step.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default ProcessSection;
