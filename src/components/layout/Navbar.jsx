import React, { useState, useEffect } from 'react';
import { Fragment } from 'react';
import { Disclosure, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Link, useLocation } from 'react-router-dom';
import Container from './Container';
import companyLogo from '../../assets/company_logo_1.jpg';


const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'About', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Case Studies', href: '/case-studies' },
];

function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}

const Navbar = () => {
    const location = useLocation();
    const [scrolled, setScrolled] = useState(false);

    // Add scroll shadow effect
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <Disclosure as="nav" className={classNames(
            "sticky top-0 z-50 bg-white/95 backdrop-blur-md transition-all duration-300 border-b",
            scrolled ? "border-gray-200 shadow-sm" : "border-transparent"
        )}>
            {({ open, close }) => (
                <>
                    <Container>
                        <div className="relative flex h-20 items-center justify-between">
                            {/* Logo */}
                            <div className="flex flex-1 items-center justify-start">
                                <Link to="/" className="flex flex-shrink-0 items-center group">
                                    {/* <span className="text-xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors">
                                        ShvetVarni Technologies
                                    </span> */}
                                    <img src={companyLogo} alt="ShvetVarni Technologies" className="h-20 w-auto object-contain transition-transform duration-200  group-hover:scale-105 " />
                                </Link>
                            </div>

                            {/* Desktop Menu */}
                            <div className="hidden md:flex md:items-center md:space-x-8">
                                {navigation.map((item) => {
                                    const isActive = location.pathname === item.href;
                                    return (
                                        <Link
                                            key={item.name}
                                            to={item.href}
                                            className={classNames(
                                                isActive
                                                    ? 'text-primary-600 font-semibold'
                                                    : 'text-gray-600 hover:text-primary-600 font-medium',
                                                'text-lg transition-colors duration-200'
                                            )}
                                        >
                                            {item.name}
                                        </Link>
                                    );
                                })}

                                {/* Primary CTA */}
                                <Link
                                    to="/contact"
                                    className="ml-4 inline-flex items-center justify-center px-5 py-2.5 border border-transparent rounded-lg shadow-sm text-lg font-semibold text-white bg-primary-700 hover:bg-primary-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-all hover:-translate-y-0.5"
                                >
                                    Contact Us
                                </Link>
                            </div>

                            {/* Mobile menu button */}
                            <div className="absolute inset-y-0 right-0 flex items-center md:hidden">
                                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-50 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500">
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>
                        </div>
                    </Container>

                    {/* Mobile Menu Panel */}
                    <Transition
                        as={Fragment}
                        show={open}
                        enter="transition duration-100 ease-out"
                        enterFrom="transform scale-95 opacity-0"
                        enterTo="transform scale-100 opacity-100"
                        leave="transition duration-75 ease-out"
                        leaveFrom="transform scale-100 opacity-100"
                        leaveTo="transform scale-95 opacity-0"
                    >
                        <Disclosure.Panel className="md:hidden bg-white border-b border-gray-100 shadow-lg">
                            <div className="space-y-1 px-4 pt-2 pb-5">
                                {navigation.map((item) => {
                                    const isActive = location.pathname === item.href;
                                    return (
                                        <Link
                                            key={item.name}
                                            to={item.href}
                                            onClick={() => close()}   // 👈 CLOSE MENU SAFELY
                                            className={classNames(
                                                isActive
                                                    ? 'bg-primary-50 text-primary-600 border-l-4 border-primary-600'
                                                    : 'text-gray-600 hover:bg-gray-50 hover:text-primary-600 border-l-4 border-transparent',
                                                'block py-3 pl-3 pr-4 text-base font-medium transition-colors duration-200 rounded-r-md'
                                            )}
                                        >
                                            {item.name}
                                        </Link>
                                    );
                                })}
                                {/* Mobile CTA */}
                                <div className="mt-4 pt-4 border-t border-gray-100">
                                    <Link
                                        to="/contact"
                                        onClick={() => close()}   // 👈 ADD HERE
                                        className="block w-full text-center px-4 py-3 rounded-lg text-white bg-primary-600 hover:bg-primary-700 font-semibold shadow-sm"
                                    >
                                        Contact Us
                                    </Link>
                                </div>
                            </div>
                        </Disclosure.Panel>
                    </Transition>
                </>
            )}
        </Disclosure>
    );
};

export default Navbar;
