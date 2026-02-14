import React from 'react';
import {
    PlusCircleIcon,
    MinusCircleIcon,
    LightBulbIcon,
    ExclamationTriangleIcon
} from '@heroicons/react/24/outline';

const SWOTCard = ({ title, content, type }) => {
    const configs = {
        strength: {
            bg: 'bg-emerald-50',
            border: 'border-emerald-100',
            text: 'text-emerald-900',
            iconColor: 'text-emerald-600',
            icon: PlusCircleIcon,
            accent: 'bg-emerald-600'
        },
        weakness: {
            bg: 'bg-amber-50',
            border: 'border-amber-100',
            text: 'text-amber-900',
            iconColor: 'text-amber-600',
            icon: MinusCircleIcon,
            accent: 'bg-amber-600'
        },
        opportunity: {
            bg: 'bg-blue-50',
            border: 'border-blue-100',
            text: 'text-blue-900',
            iconColor: 'text-blue-600',
            icon: LightBulbIcon,
            accent: 'bg-blue-600'
        },
        threat: {
            bg: 'bg-rose-50',
            border: 'border-rose-100',
            text: 'text-rose-900',
            iconColor: 'text-rose-600',
            icon: ExclamationTriangleIcon,
            accent: 'bg-rose-600'
        }
    };

    const config = configs[type];
    const Icon = config.icon;

    return (
        <div className={`p-6 rounded-2xl border ${config.bg} ${config.border} relative overflow-hidden h-full`}>
            <div className={`absolute top-0 right-0 w-24 h-24 ${config.accent} opacity-[0.03] rounded-bl-full`}></div>
            <div className="flex items-start gap-4 mb-4 relative z-10">
                <div className={`p-2 rounded-xl bg-white shadow-sm`}>
                    <Icon className={`w-6 h-6 ${config.iconColor}`} />
                </div>
                <h4 className={`text-lg font-bold ${config.text} mt-1`}>{title}</h4>
            </div>
            <p className={`text-sm leading-relaxed opacity-80 ${config.text} relative z-10`}>
                {content}
            </p>
        </div>
    );
};

const SWOTSection = ({ swot }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-12">
            <SWOTCard
                type="strength"
                title="Strengths"
                content={swot.strengths}
            />
            <SWOTCard
                type="weakness"
                title="Weaknesses"
                content={swot.weaknesses}
            />
            <SWOTCard
                type="opportunity"
                title="Opportunities"
                content={swot.opportunities}
            />
            <SWOTCard
                type="threat"
                title="Threats"
                content={swot.threats}
            />
        </div>
    );
};

export default SWOTSection;
