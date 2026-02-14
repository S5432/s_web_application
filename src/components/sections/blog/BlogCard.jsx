import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CalendarIcon, ClockIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import SmartImage from '../../common/SmartImage';

const BlogCard = ({ blog }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
            transition={{ duration: 0.4 }}
            className="group flex flex-col bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden h-full"
        >
            {/* Image Container */}
            <div className="relative overflow-hidden">
                <SmartImage
                    src={blog.coverImage}
                    alt={blog.title}
                    aspectRatio={16 / 9}
                    imgClass="transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 z-20">
                    <span className="px-3 py-1 text-xs font-bold text-white bg-primary-600/90 backdrop-blur-md rounded-full">
                        {blog.category}
                    </span>
                </div>
            </div>

            {/* Content Container */}
            <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-4 mb-4 text-xs text-gray-500 font-medium">
                    <div className="flex items-center gap-1.5">
                        <CalendarIcon className="w-4 h-4" />
                        {blog.publishDate}
                    </div>
                    <div className="flex items-center gap-1.5">
                        <ClockIcon className="w-4 h-4" />
                        {blog.readTime}
                    </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors line-clamp-2">
                    {blog.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3">
                    {blog.excerpt}
                </p>

                <div className="mt-auto">
                    <Link
                        to={`/blog/${blog.slug}`}
                        className="inline-flex items-center gap-2 text-sm font-bold text-primary-600 group-hover:gap-3 transition-all"
                    >
                        Read More
                        <ArrowRightIcon className="w-4 h-4" />
                    </Link>
                </div>
            </div>
        </motion.div>
    );
};

export default BlogCard;
