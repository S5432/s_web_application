import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRightIcon, CpuChipIcon } from '@heroicons/react/24/outline';

const CaseStudyCard = ({ study }) => {
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
            <div className="relative aspect-[100/95] overflow-hidden">
                <img
                    src={study.coverImage}
                    alt={study.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 mt-70">
                    <span className="px-3 py-1 text-[11px] font-bold tracking-wider text-white bg-gray-900/80 backdrop-blur-md rounded-full uppercase">
                        {study.industry}
                    </span>
                </div>
            </div>

            {/* Content Container */}
            <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                    {study.title}
                </h3>
                <p className="text-primary-600 text-sm font-semibold mb-3">
                    {study.subtitle}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3">
                    {study.problem}
                </p>

                {/* Tech Stack Preview */}
                <div className="flex flex-wrap gap-2 mb-6">
                    {study.technologyStack.slice(0, 3).map((tech) => (
                        <div key={tech} className="flex items-center gap-1.5 px-2.5 py-1 bg-gray-50 text-gray-600 rounded-md text-[10px] font-bold border border-gray-100">
                            <CpuChipIcon className="w-3 h-3 text-primary-500" />
                            {tech}
                        </div>
                    ))}
                    {study.technologyStack.length > 3 && (
                        <span className="text-[10px] font-bold text-gray-400 self-center">
                            +{study.technologyStack.length - 3} more
                        </span>
                    )}
                </div>

                <div className="mt-auto pt-6 border-t border-gray-50 flex items-center justify-between">
                    <span className="text-sm font-bold text-gray-900">
                        {study.timeline}
                    </span>
                    <Link
                        to={`/case-studies/${study.slug}`}
                        className="inline-flex items-center gap-2 text-sm font-bold text-primary-600 group-hover:gap-3 transition-all"
                    >
                        View Case Study
                        <ArrowRightIcon className="w-4 h-4" />
                    </Link>
                </div>
            </div>
        </motion.div>
    );
};

export default CaseStudyCard;
