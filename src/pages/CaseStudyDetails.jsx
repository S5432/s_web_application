import { ExclamationTriangleIcon, LightBulbIcon } from '@heroicons/react/24/outline';
import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
    ChevronLeftIcon,
    CalendarIcon,
    RocketLaunchIcon,
    ChartBarIcon,
    PuzzlePieceIcon,
    CpuChipIcon,
    UserCircleIcon
} from '@heroicons/react/24/outline';
import SEO from '../components/common/SEO';
import Container from '../components/layout/Container';
import SWOTSection from '../components/sections/case-study/SWOTSection';
import CaseStudyCTA from '../components/sections/case-study/CaseStudyCTA';
import { caseStudies } from '../data/caseStudies';


const CaseStudyDetails = () => {
    const { slug } = useParams();
    const navigate = useNavigate();
    const study = caseStudies.find(s => s.slug === slug);

    useEffect(() => {
        if (!study) {
            navigate('/case-studies');
        }
        window.scrollTo(0, 0);
    }, [study, navigate]);

    if (!study) return null;

    return (
        <>
            <SEO
                title={`${study.title} | Case Study`}
                description={study.problem}
            />
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="pt-32 pb-20 bg-white"
            >
                <Container>
                    <div className="max-w-5xl mx-auto">
                        {/* Header Navigation */}
                        <div className="flex items-center justify-between mb-12">
                            <Link
                                to="/case-studies"
                                className="inline-flex items-center gap-2 text-primary-600 font-bold hover:gap-3 transition-all group"
                            >
                                <ChevronLeftIcon className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
                                Back to Case Studies
                            </Link>
                            <span className="px-4 py-1.5 text-xs font-bold tracking-widest text-primary-600 bg-primary-50 rounded-full uppercase">
                                {study.industry}
                            </span>
                        </div>

                        {/* Title Section */}
                        <header className="mb-12 text-center md:text-left">
                            <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
                                {study.title}
                            </h1>
                            <p className="text-xl md:text-2xl text-primary-600 font-semibold mb-10">
                                {study.subtitle}
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 py-8 border-y border-gray-100">
                                <div className="flex items-center gap-3">
                                    <CalendarIcon className="w-6 h-6 text-primary-500" />
                                    <div>
                                        <p className="text-[10px] uppercase tracking-wider text-gray-400 font-bold">Timeline</p>
                                        <p className="text-sm font-bold text-gray-900">{study.timeline}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <UserCircleIcon className="w-6 h-6 text-primary-500" />
                                    <div>
                                        <p className="text-[10px] uppercase tracking-wider text-gray-400 font-bold">Role</p>
                                        <p className="text-sm font-bold text-gray-900">{study.role}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <RocketLaunchIcon className="w-6 h-6 text-primary-500" />
                                    <div>
                                        <p className="text-[10px] uppercase tracking-wider text-gray-400 font-bold">Status</p>
                                        <p className="text-sm font-bold text-gray-900">Completed & Live</p>
                                    </div>
                                </div>
                            </div>
                        </header>

                        {/* Content Grid */}
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
                            {/* Main Content */}
                            <div className="lg:col-span-2 space-y-16">
                                {/* Problem Statement */}
                                <section>
                                    <div className="flex items-center gap-3 mb-6">
                                        <ExclamationTriangleIcon className="w-7 h-7 text-rose-500" />
                                        <h2 className="text-2xl font-bold text-gray-900">The Problem</h2>
                                    </div>
                                    <p className="text-lg text-gray-600 leading-relaxed font-medium">
                                        {study.problem}
                                    </p>
                                </section>

                                {/* Solution Overview */}
                                <section>
                                    <div className="flex items-center gap-3 mb-6">
                                        <LightBulbIcon className="w-7 h-7 text-emerald-500" />
                                        <h2 className="text-2xl font-bold text-gray-900">Our Solution</h2>
                                    </div>
                                    <p className="text-lg text-gray-600 leading-relaxed font-medium">
                                        {study.solution}
                                    </p>
                                </section>

                                {/* Architecture */}
                                <section>
                                    <div className="flex items-center gap-3 mb-6">
                                        <PuzzlePieceIcon className="w-7 h-7 text-indigo-500" />
                                        <h2 className="text-2xl font-bold text-gray-900">Architecture & Workflow</h2>
                                    </div>
                                    <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100 font-medium text-gray-700 leading-relaxed">
                                        {study.architectureOverview}
                                    </div>
                                </section>

                                {/* SWOT Analysis */}
                                <section>
                                    <div className="flex items-center gap-3 mb-6">
                                        <ChartBarIcon className="w-7 h-7 text-primary-500" />
                                        <h2 className="text-2xl font-bold text-gray-900">Strategic Analysis (SWOT)</h2>
                                    </div>
                                    <SWOTSection swot={study.swot} />
                                </section>
                            </div>

                            {/* Sidebar Info */}
                            <div className="space-y-10">
                                {/* Featured Image */}
                                <div className="rounded-3xl overflow-hidden shadow-xl border border-gray-100">
                                    <img src={study.coverImage} alt={study.title} className="w-full h-full object-contain" />
                                </div>
                                {/* <div className="rounded-3xl overflow-hidden shadow-xl border border-gray-100 bg-white">
                                    <div className="w-full aspect-[4/3] flex items-center justify-center p-4">
                                        <img
                                            src={study.coverImage}
                                            alt={study.title}
                                            className="w-full h-full object-contain"
                                        />
                                    </div>
                                </div> */}

                                {/* Key Features */}
                                <div className="p-8 bg-white border border-gray-100 rounded-3xl shadow-sm">
                                    <h3 className="text-lg font-bold text-gray-900 mb-6">Key Features</h3>
                                    <ul className="space-y-4">
                                        {study.keyFeatures.map((feature, i) => (
                                            <li key={i} className="flex gap-3 text-sm font-medium text-gray-600">
                                                <span className="w-1.5 h-1.5 rounded-full bg-primary-500 mt-2 flex-shrink-0" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Tech Stack */}
                                <div className="p-8 bg-gray-900 rounded-3xl shadow-xl">
                                    <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                                        <CpuChipIcon className="w-5 h-5 text-primary-400" />
                                        Technology Stack
                                    </h3>
                                    <div className="flex flex-wrap gap-2">
                                        {study.technologyStack.map((tech) => (
                                            <span
                                                key={tech}
                                                className="px-3 py-1.5 bg-white/10 text-primary-100 rounded-lg text-xs font-bold border border-white/10"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Results Card */}
                                <div className="p-8 bg-gradient-to-br from-primary-600 to-blue-700 rounded-3xl shadow-xl text-white">
                                    <h3 className="text-lg font-bold mb-4">The Impact</h3>
                                    <p className="text-sm font-medium leading-relaxed opacity-90">
                                        {study.results}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Tags & Footer Navigation */}
                        <div className="flex flex-wrap items-center justify-between gap-6 pt-12 border-t border-gray-100">
                            <div className="flex flex-wrap gap-2">
                                {study.tags.map(tag => (
                                    <span key={tag} className="px-4 py-1.5 bg-gray-50 text-gray-500 rounded-xl text-xs font-bold uppercase tracking-wider">
                                        #{tag}
                                    </span>
                                ))}
                            </div>
                            <Link
                                to="/case-studies"
                                className="px-8 py-3 bg-gray-900 text-white font-bold rounded-xl hover:bg-gray-800 transition-all shadow-lg"
                            >
                                Back to All Stories
                            </Link>
                        </div>
                    </div>
                </Container>
            </motion.div>
            <CaseStudyCTA />
        </>
    );
};

export default CaseStudyDetails;
