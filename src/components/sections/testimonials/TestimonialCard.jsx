import React from 'react';
import { StarIcon } from '@heroicons/react/24/solid';

const TestimonialCard = ({ testimonial }) => {
    const { name, role, company, message, rating, avatar, projectType } = testimonial;

    return (
        <div className="flex-shrink-0 w-[350px] sm:w-[450px] p-8 m-4 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl group transition-all duration-500 hover:bg-white/10 hover:border-blue-500/30">
            <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-blue-500/20">
                    {avatar}
                </div>
                <div>
                    <h4 className="text-white font-bold text-lg leading-tight group-hover:text-blue-300 transition-colors">
                        {name}
                    </h4>
                    <p className="text-gray-400 text-sm">
                        {role} @ <span className="text-blue-400 font-semibold">{company}</span>
                    </p>
                </div>
            </div>

            <div className="flex gap-1 mb-4">
                {[...Array(rating)].map((_, i) => (
                    <StarIcon key={i} className="w-5 h-5 text-yellow-500" />
                ))}
            </div>

            <p className="text-gray-300 text-base leading-relaxed italic mb-6">
                "{message}"
            </p>

            <div className="pt-6 border-t border-white/5">
                <span className="text-[10px] uppercase tracking-widest font-bold text-blue-500/80 bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
                    {projectType}
                </span>
            </div>
        </div>
    );
};

export default TestimonialCard;
