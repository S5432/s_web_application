import React from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/common/SEO';
import PageHero from '../components/sections/about/PageHero';
import CompanyStory from '../components/sections/about/CompanyStory';
import MissionVision from '../components/sections/about/MissionVision';
import CoreValues from '../components/sections/about/CoreValues';
import FounderSection from '../components/sections/about/FounderSection';
import WhyTrustUs from '../components/sections/about/WhyTrustUs';
import AboutCTA from '../components/sections/about/AboutCTA';

const About = () => {
    return (
        <>
            <SEO
                title="About Us"
                description="Learn about our mission, vision, and the team driving innovation at Shavet Varni Technologies."
            />
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div className="flex flex-col min-h-screen">
                    <PageHero />
                    <CompanyStory />
                    <MissionVision />
                    <CoreValues />
                    <FounderSection />
                    <WhyTrustUs />
                    <AboutCTA />
                </div>
            </motion.div>
        </>
    );
};

export default About;
