import React from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/common/SEO';
import BlogHero from '../components/sections/blog/BlogHero';
import BlogGrid from '../components/sections/blog/BlogGrid';
import BlogCTA from '../components/sections/blog/BlogCTA';
import { blogs } from '../data/blogs';

const Blog = () => {
    return (
        <>
            <SEO
                title="Blog | Insights & Technology"
                description="Explore our latest thoughts on AI, software engineering, and digital transformation strategies."
            />
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="pt-0" // Compensate for sticky navbar
            >
                <BlogHero />
                <BlogGrid blogs={blogs} />
                <BlogCTA />
            </motion.div>
        </>
    );
};

export default Blog;
