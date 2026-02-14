import React from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/common/SEO';
import CaseStudyHero from '../components/sections/case-study/CaseStudyHero';
import CaseStudyGrid from '../components/sections/case-study/CaseStudyGrid';
import CaseStudyCTA from '../components/sections/case-study/CaseStudyCTA';
import { caseStudies } from '../data/caseStudies';

const CaseStudies = () => {
    return (
        <>
            <SEO
                title="Case Studies | Real Implementations"
                description="Explore our successful AI and software implementation case studies across various industries."
            />
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="pt-0"
            >
                <CaseStudyHero />
                <CaseStudyGrid studies={caseStudies} />
                <CaseStudyCTA />
            </motion.div>
        </>
    );
};

export default CaseStudies;
