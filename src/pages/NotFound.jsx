import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Container from '../components/layout/Container';

const NotFound = () => {
    return (
        <>
            <Helmet>
                <title>404 - Page Not Found | Shavet Varni Technologies</title>
                <meta name="description" content="The page you are looking for does not exist." />
            </Helmet>
            <section className="min-h-[70vh] flex items-center justify-center bg-white">
                <Container>
                    <div className="text-center max-w-lg mx-auto">
                        <h1 className="text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-purple-600 mb-8">
                            404
                        </h1>
                        <h2 className="text-3xl font-extrabold text-gray-900 mb-4 tracking-tight">
                            Page Not Found
                        </h2>
                        <p className="text-lg text-gray-600 mb-8 font-medium">
                            Oops! The page you are looking for might have been removed or temporarily unavailable.
                        </p>
                        <Link
                            to="/"
                            className="inline-flex items-center justify-center px-8 py-3.5 text-base font-bold text-white transition-all duration-200 bg-primary-600 rounded-full hover:bg-primary-700 shadow-lg shadow-primary-500/30"
                        >
                            Go Back Home
                        </Link>
                    </div>
                </Container>
            </section>
        </>
    );
};

export default NotFound;
