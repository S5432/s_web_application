import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import SEO from '../components/common/SEO';
import PageHero from '../components/sections/services/PageHero';
import DetailedServices from '../components/sections/services/DetailedServices';
import ProcessSection from '../components/sections/services/ProcessSection';
import WhyChooseServices from '../components/sections/services/WhyChooseServices';
import ServicesCTA from '../components/sections/services/ServicesCTA';

const Services = () => {
    const { hash } = useLocation();

    useEffect(() => {
        if (hash) {
            // Small delay to ensure the content is rendered
            const timer = setTimeout(() => {
                const element = document.getElementById(hash.replace('#', ''));
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }, 100);

            return () => clearTimeout(timer);
        }
    }, [hash]);

    return (
        <>
            <SEO
                title="Our Services"
                description="Comprehensive IT services including Custom Software, AI & Machine Learning, Cloud Solutions, and SaaS Development."
            />
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div className="flex flex-col min-h-screen">
                    <PageHero />
                    <DetailedServices />
                    <ProcessSection />
                    <WhyChooseServices />
                    <ServicesCTA />
                </div>
            </motion.div>
        </>
    );
};

export default Services;
