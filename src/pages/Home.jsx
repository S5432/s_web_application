import React from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/common/SEO';
import Hero from '../components/sections/home/Hero';
import ServicesOverview from '../components/sections/home/ServicesOverview';
import WhyChooseUs from '../components/sections/home/WhyChooseUs';
import TechStack from '../components/sections/home/TechStack';
import Testimonials from '../components/sections/testimonials/Testimonials';
import CTASection from '../components/sections/home/CTASection';

const Home = () => {
    return (
        <>
            <SEO
                title="Home"
                description="Shavet Varni Technologies - Building scalable software, AI solutions, and digital products for modern businesses."
            />
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div className="flex flex-col min-h-screen">
                    <Hero />
                    <ServicesOverview />
                    <WhyChooseUs />
                    <TechStack />
                    <Testimonials />
                    <CTASection />
                </div>
            </motion.div>
        </>
    );
};

export default Home;
