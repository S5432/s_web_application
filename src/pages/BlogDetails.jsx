import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronLeftIcon, CalendarIcon, ClockIcon, UserIcon } from '@heroicons/react/24/outline';
import SEO from '../components/common/SEO';
import Container from '../components/layout/Container';
import BlogCTA from '../components/sections/blog/BlogCTA';
import SmartImage from '../components/common/SmartImage';
import { blogs } from '../data/blogs';

const BlogDetails = () => {
    const { slug } = useParams();
    const navigate = useNavigate();
    const blog = blogs.find(b => b.slug === slug);

    useEffect(() => {
        if (!blog) {
            navigate('/blog');
        }
        window.scrollTo(0, 0);
    }, [blog, navigate]);

    if (!blog) return null;

    return (
        <>
            <SEO
                title={`${blog.title} | Shavet Varni Blog`}
                description={blog.excerpt}
            />
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="pt-32 pb-20 bg-white"
            >
                <Container>
                    <div className="max-w-4xl mx-auto">
                        {/* Back Button */}
                        <Link
                            to="/blog"
                            className="inline-flex items-center gap-2 text-primary-600 font-bold mb-8 hover:gap-3 transition-all group"
                        >
                            <ChevronLeftIcon className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
                            Back to Blog
                        </Link>

                        {/* Article Header */}
                        <header className="mb-12">
                            <span className="inline-block px-3 py-1 text-sm font-bold text-primary-600 bg-primary-50 rounded-full mb-6">
                                {blog.category}
                            </span>
                            <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-8 leading-tight">
                                {blog.title}
                            </h1>

                            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 font-medium pb-8 border-b border-gray-100">
                                <div className="flex items-center gap-2">
                                    <UserIcon className="w-5 h-5 text-primary-500" />
                                    {blog.author}
                                </div>
                                <div className="flex items-center gap-2">
                                    <CalendarIcon className="w-5 h-5 text-primary-500" />
                                    {blog.publishDate}
                                </div>
                                <div className="flex items-center gap-2">
                                    <ClockIcon className="w-5 h-5 text-primary-500" />
                                    {blog.readTime}
                                </div>
                            </div>
                        </header>

                        {/* Featured Image */}
                        <div className="relative rounded-3xl overflow-hidden mb-12 shadow-2xl">
                            <SmartImage
                                src={blog.coverImage}
                                alt={blog.title}
                                priority={true}
                                className="w-full"
                            />
                        </div>

                        {/* Article Content */}
                        <article className="prose prose-lg max-w-none prose-primary prose-headings:text-gray-900 prose-p:text-gray-600 prose-strong:text-gray-900 prose-blockquote:border-primary-500 prose-blockquote:bg-primary-50/50 prose-blockquote:py-4 prose-blockquote:px-8 prose-blockquote:rounded-2xl">
                            <div
                                className="blog-content"
                                dangerouslySetInnerHTML={{ __html: blog.content }}
                            />
                        </article>

                        {/* Tags */}
                        <div className="mt-16 pt-8 border-t border-gray-100">
                            <div className="flex flex-wrap gap-2 text-sm font-medium">
                                <span className="text-gray-500 mr-2 py-1">Tags:</span>
                                {blog.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="px-4 py-1.5 bg-gray-50 text-gray-600 rounded-lg border border-gray-100 hover:bg-primary-50 hover:text-primary-600 hover:border-primary-200 transition-colors cursor-default"
                                    >
                                        #{tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </Container>
            </motion.div>
            <BlogCTA />
        </>
    );
};

export default BlogDetails;
