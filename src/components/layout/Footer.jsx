// import React from 'react';
// import { Link } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import Container from './Container';

// const SocialIcon = ({ path, href, label }) => (
//     <motion.a
//         whileHover={{ scale: 1.1, translateY: -2 }}
//         whileTap={{ scale: 0.9 }}
//         href={href}
//         target="_blank"
//         rel="noopener noreferrer"
//         aria-label={label}
//         className="w-10 h-10 flex items-center justify-center rounded-xl bg-gray-50 text-gray-400 hover:bg-primary-50 hover:text-primary-600 transition-all duration-300 border border-gray-100 shadow-sm"
//     >
//         <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//             <path d={path} />
//         </svg>
//     </motion.a>
// );

// const Footer = () => {
//     return (
//         <footer className="bg-white border-t border-gray-100 relative overflow-hidden">
//             {/* Subtle background glow */}
//             <div className="absolute top-0 right-0 w-96 h-96 bg-primary-50/30 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

//             <Container className="relative z-10">
//                 <div className="py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
//                     {/* Brand Column */}
//                     <div className="space-y-6">
//                         <Link to="/" className="inline-block">
//                             <span className="text-2xl font-black text-gray-900 tracking-tight">
//                                 SHVETVARNI
//                             </span>
//                         </Link>
//                         <p className="text-gray-600 leading-relaxed font-medium">
//                             Empowering businesses through cutting-edge software engineering, AI-driven automation, and premium digital experiences.
//                         </p>
//                         <div className="flex gap-3">
//                             <SocialIcon
//                                 label="LinkedIn"
//                                 href="https://linkedin.com"
//                                 path="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
//                             />
//                             <SocialIcon
//                                 label="Twitter"
//                                 href="https://twitter.com"
//                                 path="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"
//                             />
//                             <SocialIcon
//                                 label="Instagram"
//                                 href="https://instagram.com"
//                                 path="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
//                             />
//                         </div>
//                     </div>

//                     {/* Quick Links */}
//                     <div className="lg:pl-8">
//                         <h4 className="text-sm font-bold text-gray-900 uppercase tracking-widest mb-8">Navigation</h4>
//                         <ul className="space-y-4">
//                             <li><Link to="/" className="text-gray-600 font-medium hover:text-primary-600 transition-colors flex items-center group"><span className="w-0 group-hover:w-2 h-0.5 bg-primary-600 mr-0 group-hover:mr-2 transition-all"></span>Home</Link></li>
//                             <li><Link to="/services" className="text-gray-600 font-medium hover:text-primary-600 transition-colors flex items-center group"><span className="w-0 group-hover:w-2 h-0.5 bg-primary-600 mr-0 group-hover:mr-2 transition-all"></span>Services</Link></li>
//                             <li><Link to="/products" className="text-gray-600 font-medium hover:text-primary-600 transition-colors flex items-center group"><span className="w-0 group-hover:w-2 h-0.5 bg-primary-600 mr-0 group-hover:mr-2 transition-all"></span>Projects</Link></li>
//                             <li><Link to="/about" className="text-gray-600 font-medium hover:text-primary-600 transition-colors flex items-center group"><span className="w-0 group-hover:w-2 h-0.5 bg-primary-600 mr-0 group-hover:mr-2 transition-all"></span>About</Link></li>
//                             <li><Link to="/contact" className="text-gray-600 font-medium hover:text-primary-600 transition-colors flex items-center group"><span className="w-0 group-hover:w-2 h-0.5 bg-primary-600 mr-0 group-hover:mr-2 transition-all"></span>Contact</Link></li>
//                         </ul>
//                     </div>

//                     {/* Services */}
//                     <div>
//                         <h4 className="text-sm font-bold text-gray-900 uppercase tracking-widest mb-8">Solutions</h4>
//                         <ul className="space-y-4">
//                             <li className="text-gray-600 font-medium hover:text-primary-600 transition-colors cursor-pointer">Web Development</li>
//                             <li className="text-gray-600 font-medium hover:text-primary-600 transition-colors cursor-pointer">AI & Automation</li>
//                             <li className="text-gray-600 font-medium hover:text-primary-600 transition-colors cursor-pointer">SaaS Solutions</li>
//                             <li className="text-gray-600 font-medium hover:text-primary-600 transition-colors cursor-pointer">Cloud Engineering</li>
//                             <li className="text-gray-600 font-medium hover:text-primary-600 transition-colors cursor-pointer">Digital Strategy</li>
//                         </ul>
//                     </div>

//                     {/* Contact */}
//                     <div>
//                         <h4 className="text-sm font-bold text-gray-900 uppercase tracking-widest mb-8">Get in Touch</h4>
//                         <ul className="space-y-6">
//                             <li className="flex items-start gap-3">
//                                 <span className="w-5 h-5 text-primary-600 mt-1 flex-shrink-0">
//                                     <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
//                                 </span>
//                                 <a href="mailto:contact@shvetvarni.com" className="text-gray-600 font-medium hover:text-primary-600 transition-colors break-all">contact@shvetvarni.com</a>
//                             </li>
//                             <li className="flex items-start gap-3">
//                                 <span className="w-5 h-5 text-primary-600 mt-1 flex-shrink-0">
//                                     <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
//                                 </span>
//                                 <p className="text-gray-600 font-medium">+91 89660 36443</p>
//                             </li>
//                         </ul>
//                     </div>
//                 </div>

//                 {/* Bottom Bar */}
//                 <div className="py-10 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6">
//                     <p className="text-gray-500 text-sm font-medium order-2 md:order-1">
//                         &copy; {new Date().getFullYear()} ShvetVarni Technologies. All rights reserved.
//                     </p>
//                     <div className="flex gap-8 text-sm font-semibold order-1 md:order-2">
//                         <Link to="#" className="text-gray-500 hover:text-primary-600 transition-colors">Privacy Policy</Link>
//                         <Link to="#" className="text-gray-500 hover:text-primary-600 transition-colors">Terms of Service</Link>
//                         <Link to="#" className="text-gray-500 hover:text-primary-600 transition-colors">Cookies</Link>
//                     </div>
//                 </div>
//             </Container>
//         </footer>
//     );
// };

// export default Footer;
//////////////////////////////////////////////////////////////////

// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import Container from './Container';

// const SocialIcon = ({ path, href, label }) => {
//     const [active, setActive] = useState(false);

//     return (
//         <motion.a
//             whileHover={{ scale: 1.08, y: -2 }}
//             whileTap={{ scale: 0.92 }}
//             onClick={() => setActive(!active)}
//             href={href}
//             target="_blank"
//             rel="noopener noreferrer"
//             aria-label={label}
//             className={`w-10 h-10 flex items-center justify-center rounded-xl border transition-all duration-300
//             bg-white/5 border-white/10 text-gray-400
//             hover:text-white hover:bg-primary-600/20 hover:border-primary-400/40
//             ${active ? 'bg-primary-600/20 text-white border-primary-400/40' : ''}`}
//         >
//             <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//                 <path d={path} />
//             </svg>
//         </motion.a>
//     );
// };

// const Footer = () => {
//     return (
//         <footer className="relative bg-[#0b0f19] text-gray-300 overflow-hidden">

//             {/* Premium Glow Background */}
//             <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-primary-600/10 rounded-full blur-[160px]"></div>
//             <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[140px]"></div>

//             <Container className="relative z-10">

//                 {/* Top Grid */}
//                 <div className="py-16 sm:py-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

//                     {/* Brand */}
//                     <div className="space-y-5">
//                         <Link to="/" className="inline-block">
//                             <h2 className="text-2xl font-extrabold text-white tracking-tight">
//                                 SHVETVARNI
//                             </h2>
//                         </Link>

//                         <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
//                             Empowering businesses through advanced software engineering, AI-driven automation, and world-class digital experiences.
//                         </p>

//                         <div className="flex gap-3 pt-2">
//                             <SocialIcon label="LinkedIn" href="https://linkedin.com" path="M19 0h-14c-2.761..." />
//                             <SocialIcon label="Twitter" href="https://twitter.com" path="M24 4.557c-.883..." />
//                             <SocialIcon label="Instagram" href="https://instagram.com" path="M12 2.163c3.204..." />
//                         </div>
//                     </div>

//                     {/* Navigation */}
//                     <div>
//                         <h4 className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-6">
//                             Navigation
//                         </h4>
//                         <ul className="space-y-3">
//                             {['Home', 'Services', 'Projects', 'About', 'Contact'].map((item, i) => (
//                                 <li key={i}>
//                                     <Link
//                                         to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
//                                         className="group flex items-center text-gray-400 hover:text-white transition"
//                                     >
//                                         <span className="w-0 group-hover:w-2 h-0.5 bg-primary-500 mr-0 group-hover:mr-2 transition-all"></span>
//                                         {item}
//                                     </Link>
//                                 </li>
//                             ))}
//                         </ul>
//                     </div>

//                     {/* Services */}
//                     <div>
//                         <h4 className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-6">
//                             Solutions
//                         </h4>
//                         <ul className="space-y-3 text-gray-400">
//                             {['Web Development', 'AI & Automation', 'SaaS Platforms', 'Cloud Engineering', 'Digital Strategy'].map((s, i) => (
//                                 <li key={i} className="hover:text-white transition cursor-pointer">{s}</li>
//                             ))}
//                         </ul>
//                     </div>

//                     {/* Contact */}
//                     <div>
//                         <h4 className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-6">
//                             Contact
//                         </h4>

//                         <div className="space-y-4 text-gray-400 text-sm sm:text-base">
//                             <a href="mailto:contact@shvetvarni.com" className="block hover:text-white transition break-all">
//                                 contact@shvetvarni.com
//                             </a>
//                             <p className="hover:text-white transition">
//                                 +91 89660 36443
//                             </p>
//                         </div>
//                     </div>

//                 </div>

//                 {/* Bottom Bar */}
//                 <div className="border-t border-white/10 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">

//                     <p>
//                         © {new Date().getFullYear()} ShvetVarni Technologies. All rights reserved.
//                     </p>

//                     <div className="flex gap-6">
//                         <Link to="#" className="hover:text-white transition">Privacy</Link>
//                         <Link to="#" className="hover:text-white transition">Terms</Link>
//                         <Link to="#" className="hover:text-white transition">Cookies</Link>
//                     </div>

//                 </div>

//             </Container>
//         </footer>
//     );
// };

// export default Footer;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Container from './Container';

/* -------------------- Social Icon -------------------- */
const SocialIcon = ({ path, href, label }) => {
    const [active, setActive] = useState(false);

    return (
        <motion.a
            whileHover={{ scale: 1.1, y: -3 }}
            whileTap={{ scale: 0.92 }}
            onClick={() => setActive(!active)}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className={`w-11 h-11 flex items-center justify-center rounded-xl border backdrop-blur-md
            transition-all duration-300 shadow-lg
            bg-white/10 border-white/20 text-gray-300
            hover:text-white hover:bg-primary-500 hover:border-primary-400 hover:shadow-primary-500/30 hover:shadow-xl
            ${active ? 'bg-primary-500 text-white border-primary-400 shadow-lg shadow-primary-500/30' : ''}`}
        >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d={path} />
            </svg>
        </motion.a>
    );
};

/* -------------------- Footer -------------------- */
const Footer = () => {
    return (
        <footer className="relative bg-[#0b0f19] text-gray-300 overflow-hidden">

            {/* Glow Background */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-primary-600/10 rounded-full blur-[160px]" />
            <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[140px]" />

            <Container className="relative z-10">

                {/* Top Grid */}
                <div className="py-16 sm:py-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

                    {/* Brand */}
                    <div className="space-y-5">
                        <Link to="/" className="inline-block">
                            <h2 className="text-2xl font-extrabold text-white tracking-tight">
                                SHVETVARNI
                            </h2>
                        </Link>

                        <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
                            Empowering businesses through advanced software engineering, AI-driven automation, and world-class digital experiences.
                        </p>

                        {/* Social Icons */}
                        <div className="flex gap-3 pt-2">

                            {/* LinkedIn */}
                            <SocialIcon
                                label="LinkedIn"
                                href="https://www.linkedin.com/company/shvetvarni-technologies-private-limited"
                                path="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                            />

                            {/* Twitter */}
                            <SocialIcon
                                label="Twitter"
                                href="https://x.com/ShvetVarniTech"
                                path="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"
                            />

                            {/* Instagram */}
                            <SocialIcon
                                label="Youtube"
                                href="https://youtube.com/@shvetvarnitechnologies?si=JZ7VX04FJw71LhcS"
                                path="M23.498 6.186a2.997 2.997 0 0 0-2.11-2.12C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.388.566a2.997 2.997 0 0 0-2.11 2.12C0 8.074 0 12 0 12s0 3.926.502 5.814a2.997 2.997 0 0 0 2.11 2.12C4.5 20.5 12 20.5 12 20.5s7.5 0 9.388-.566a2.997 2.997 0 0 0 2.11-2.12C24 15.926 24 12 24 12s0-3.926-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"
                            />
                        </div>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h4 className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-6">
                            Navigation
                        </h4>
                        <ul className="space-y-3">
                            {['Home', 'Services', 'About', 'Blog', 'Case Studies', 'Contact'].map((item, i) => (
                                <li key={i}>
                                    <Link
                                        to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                                        className="group flex items-center text-gray-400 hover:text-white transition"
                                    >
                                        <span className="w-0 group-hover:w-2 h-0.5 bg-primary-500 mr-0 group-hover:mr-2 transition-all"></span>
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-6">
                            Solutions
                        </h4>
                        <ul className="space-y-3">
                            {[
                                { name: 'Web Development', path: '/services#web-development' },
                                { name: 'AI & Automation', path: '/services#ai-automation' },
                                { name: 'SaaS Platforms', path: '/services#saas-platforms' },
                                { name: 'Cloud Engineering', path: '/services#cloud-engineering' },
                                { name: 'Digital Strategy', path: '/services#digital-strategy' }
                            ].map((solution, i) => (
                                <li key={i}>
                                    <Link
                                        to={solution.path}
                                        className="text-gray-400 hover:text-white transition cursor-pointer"
                                    >
                                        {solution.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-6">
                            Contact
                        </h4>

                        <div className="space-y-4 text-gray-400 text-sm sm:text-base">
                            <a href="mailto:contact@shvetvarni.com" className="block hover:text-white transition break-all">
                                shvetvarnitechnologies@gmail.com
                            </a>
                            <p className="hover:text-white transition">
                                +91 89660 36443
                            </p>
                        </div>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/10 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500 text-center">

                    <p>
                        © {new Date().getFullYear()} ShvetVarni Technologies. All rights reserved.
                    </p>

                    <div className="flex gap-6">
                        <Link to="#" className="hover:text-white transition">Privacy</Link>
                        <Link to="#" className="hover:text-white transition">Terms</Link>
                        <Link to="#" className="hover:text-white transition">Cookies</Link>
                    </div>

                </div>

            </Container>
        </footer>
    );
};

export default Footer;
