import React from 'react';
import Container from '../../layout/Container';
import CaseStudyCard from './CaseStudyCard';

const CaseStudyGrid = ({ studies }) => {
    return (
        <section className="py-20 bg-gray-50/50">
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {studies.map((study) => (
                        <CaseStudyCard key={study.id} study={study} />
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default CaseStudyGrid;
