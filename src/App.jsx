import React, { useState, useEffect, Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/common/ScrollToTop';
import WhatsAppButton from './components/common/WhatsAppButton';

// Lazy Load Pages
const Home = lazy(() => import('./pages/Home'));
const Services = lazy(() => import('./pages/Services'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Blog = lazy(() => import('./pages/Blog'));
const BlogDetails = lazy(() => import('./pages/BlogDetails'));
const CaseStudies = lazy(() => import('./pages/CaseStudies'));
const CaseStudyDetails = lazy(() => import('./pages/CaseStudyDetails'));
const NotFound = lazy(() => import('./pages/NotFound'));

function App() {
  // Loading Fallback
  const PageLoader = () => (
    <div className="flex items-center justify-center min-h-screen bg-white transition-all duration-500">
      <div className="relative">
        <div className="w-16 h-16 border-4 border-primary-50 border-t-primary-600 rounded-full animate-spin"></div>
        <div className="absolute inset-0 bg-primary-600/10 blur-xl rounded-full scale-150 animate-pulse"></div>
      </div>
    </div>
  );

  return (
    <HelmetProvider>
      <div className="flex flex-col min-h-screen bg-white text-gray-900 overflow-x-hidden selection:bg-primary-100 selection:text-primary-900">
        <Navbar />
        <ScrollToTop />

        <main className="flex-grow">
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogDetails />} />
              <Route path="/case-studies" element={<CaseStudies />} />
              <Route path="/case-studies/:slug" element={<CaseStudyDetails />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </main>

        <WhatsAppButton />
        <Footer />
      </div>
    </HelmetProvider>
  );
}

export default App;
