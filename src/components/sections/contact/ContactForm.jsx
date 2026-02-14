import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Container from '../../layout/Container';

const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbz6SHxtJI35F8NFkExC3BOD8vgaUuB9naRe_KzotnAbsZR55KywEXAjjt17HC_1oeSC/exec";

const ContactForm = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        company: '',
        message: ''
    });

    const [status, setStatus] = useState(null); // null, 'submitting', 'success'

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('submitting');

        try {
            const response = await fetch(SCRIPT_URL, {
                method: "POST",
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (data.status === "success") {
                setStatus('success');
                setFormData({
                    fullName: '',
                    email: '',
                    company: '',
                    message: ''
                });

                setTimeout(() => setStatus(null), 5000);
            } else {
                alert("Error submitting form");
                setStatus(null);
            }
        } catch (error) {
            alert("Network error. Check script deployment.");
            setStatus(null);
        }
    };

    // bg-gradient-to-br from-[#0B1E3A] via-[#0F2A52] to-[#0B1E3A] // #b8287c
    return (
        <section className="py-20 bg-gray-100">
            <Container>
                <div className="max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bg-gradient-to-br from-[#132A4D] via-[#183766] to-[#132A4D] rounded-[2.5rem] shadow-[0_32px_64px_-16px_rgba(0,107,255,0.1)] border border-gray-100 p-8 md:p-12"
                    >
                        <div className="mb-10">
                            <h2 className="text-3xl font-extrabold text-gray-50 mb-3 tracking-tight text-center">
                                Send us a message
                            </h2>
                            <p className="text-gray-50 text-center">We'll get back to you within 24 hours.</p>
                        </div>

                        {status === 'success' && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="mb-10 p-5 bg-green-50 text-green-700 rounded-2xl border border-green-100 flex items-center shadow-sm"
                            >
                                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white mr-4 flex-shrink-0">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                </div>
                                <span className="font-semibold text-lg">Message sent successfully!</span>
                            </motion.div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <label htmlFor="fullName" className="text-sm font-bold text-gray-50 ml-1">
                                        Full Name <span className="text-primary-600">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="fullName"
                                        name="fullName"
                                        required
                                        value={formData.fullName}
                                        onChange={handleChange}
                                        className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 focus:ring-4 focus:ring-primary-100 focus:border-primary-600 transition-all outline-none text-lg font-medium placeholder:text-gray-400"
                                        placeholder="John Doe"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-bold text-gray-50 ml-1">
                                        Email Address <span className="text-primary-600">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 focus:ring-4 focus:ring-primary-100 focus:border-primary-600 transition-all outline-none text-lg font-medium placeholder:text-gray-400"
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="company" className="text-sm font-bold text-gray-50 ml-1">
                                    Company Name <span className="text-gray-50 text-xs font-normal ml-1">(Optional)</span>
                                </label>
                                <input
                                    type="text"
                                    id="company"
                                    name="company"
                                    value={formData.company}
                                    onChange={handleChange}
                                    className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 focus:ring-4 focus:ring-primary-100 focus:border-primary-600 transition-all outline-none text-lg font-medium placeholder:text-gray-400"
                                    placeholder="Your Company Ltd."
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-bold text-gray-50 ml-1">
                                    Message <span className="text-primary-600">*</span>
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    rows="5"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 focus:ring-4 focus:ring-primary-100 focus:border-primary-600 transition-all outline-none text-lg font-medium placeholder:text-gray-400 resize-none"
                                    placeholder="Tell us about your project..."
                                ></textarea>
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                type="submit"
                                disabled={status === 'submitting'}
                                className={`w-full py-5 px-8 rounded-2xl text-white font-bold text-lg shadow-xl transition-all duration-300 relative overflow-hidden group
                                    ${status === 'submitting'
                                        ? 'bg-gray-400 cursor-not-allowed'
                                        : 'bg-cyan-600 hover:bg-cyan-500 shadow-primary-500/25 active:bg-cyan-800'
                                    }`}
                            >
                                <span className="relative z-10 flex items-center justify-center">
                                    {status === 'submitting' ? (
                                        <>
                                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            Sending...
                                        </>
                                    ) : (
                                        'Send Message'
                                    )}
                                </span>
                            </motion.button>
                        </form>
                    </motion.div>
                </div>
            </Container>
        </section>
    );
};

export default ContactForm;
