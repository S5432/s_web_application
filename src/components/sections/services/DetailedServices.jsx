import React from 'react';
import { motion } from 'framer-motion';
import Container from '../../layout/Container';
import {
    CodeBracketSquareIcon,
    CloudIcon,
    DevicePhoneMobileIcon,
    CpuChipIcon,
    ArrowPathIcon,
    LightBulbIcon,
    CheckIcon
} from '@heroicons/react/24/outline';

const servicesList = [
    {
        id: 'cloud-engineering',
        title: 'Custom Software Development',
        description: 'Tailored software solutions that address your specific business challenges from concept to deployment.',
        offerings: [
            'Enterprise Solutions',
            'Legacy Modernization',
            'API Integration',
            'Workflow Automation'
        ],
        icon: CodeBracketSquareIcon
    },
    {
        id: 'saas-platforms',
        title: 'SaaS Product Development',
        description: 'Scalable, multi-tenant SaaS platforms with robust architecture and cloud-native deployment.',
        offerings: [
            'MVP Development',
            'Multi-tenant Architecture',
            'Subscription Engines',
            'Secure Cloud Deployment'
        ],
        icon: CloudIcon
    },
    {
        id: 'web-development',
        title: 'Web App Development',
        description: 'High-performance, responsive web applications focused on superior user experience.',
        offerings: [
            'PWA & SPA',
            'E-commerce Solutions',
            'Customer Portals',
            'Interactive Dashboards'
        ],
        icon: DevicePhoneMobileIcon
    },
    {
        id: 'ai-automation',
        title: 'AI & Machine Learning',
        description: 'Leverage AI to gain insights, automate complex tasks, and enhance user engagement.',
        offerings: [
            'Predictive Analytics',
            'NLP Solutions',
            'Computer Vision',
            'LLM & OpenAI Integration'
        ],
        icon: CpuChipIcon
    },
    {
        id: 'process-automation',
        title: 'Process Automation',
        description: 'Eliminate manual tasks with custom automation bots and intelligent workflow integrations.',
        offerings: [
            'RPA Solutions',
            'Workflow Orchestration',
            'Data Entry Automation',
            'Intelligent Chatbots'
        ],
        icon: ArrowPathIcon
    },
    {
        id: 'digital-strategy',
        title: 'IT Consulting',
        description: 'Strategic guidance to help you navigate technology landscapes and make informed decisions.',
        offerings: [
            'Digital Strategy',
            'Cloud Migration',
            'Architecture Reviews',
            'Security Audits'
        ],
        icon: LightBulbIcon
    }
];

const DetailedServices = () => {
    return (
        <section className="py-20 bg-white">
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {servicesList.map((service, index) => (
                        <motion.div
                            key={index}
                            id={service.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col hover:bg-blue-950 active:bg-blue-950 scroll-mt-24"
                        >
                            <div className="w-14 h-14 bg-primary-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-950 group-active:bg-blue-950 group-hover:scale-110 transition-all duration-300">
                                <service.icon className="w-8 h-8 text-primary-600" />
                            </div>

                            <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-white group-active:text-white">
                                {service.title}
                            </h3>

                            <p className="text-gray-600 mb-8 leading-relaxed flex-grow group-hover:text-white group-active:text-white">
                                {service.description}
                            </p>

                            <div className="space-y-3 pt-6 border-t border-gray-50">
                                {service.offerings.map((offering, idx) => (
                                    <div key={idx} className="flex items-center text-sm text-gray-700 group-hover:text-gray-200 group-active:text-gray-200">
                                        <CheckIcon className="w-4 h-4 text-primary-500 mr-2 flex-shrink-0" />
                                        <span>{offering}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default DetailedServices;
