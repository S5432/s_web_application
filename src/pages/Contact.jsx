import React from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/common/SEO';
import PageHero from '../components/sections/contact/PageHero';
import ContactForm from '../components/sections/contact/ContactForm';
import ContactInfo from '../components/sections/contact/ContactInfo';
import ContactCTA from '../components/sections/contact/ContactCTA';

const Contact = () => {
    return (
        <>
            <SEO
                title="Contact Us"
                description="Get in touch with us for your next project. We are ready to help you build scalable digital solutions."
            />
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div className="flex flex-col min-h-screen">
                    <PageHero />
                    <ContactForm />
                    <ContactInfo />
                    <ContactCTA />
                </div>
            </motion.div>
        </>
    );
};

export default Contact;
