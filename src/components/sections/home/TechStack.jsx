// import React from 'react';
// import { motion } from 'framer-motion';
// import Container from '../../layout/Container';

// const techCategories = [
//     {
//         category: 'Frontend',
//         techs: ['React', 'Next.js', 'Tailwind', 'TypeScript', 'Redux', 'Vite']
//     },
//     {
//         category: 'Backend',
//         techs: ['Python', 'FastAPI', 'Flask', 'Django', 'Node.js', 'Express.js']
//     },
//     {
//         category: 'AI & ML',
//         techs: ['OpenAI', 'TensorFlow', 'PyTorch', 'LangChain', 'HuggingFace', 'Pinecone', 'RAG', 'AI Agents']
//     },
//     {
//         category: 'Cloud & DevOps',
//         techs: ['AWS', 'Google Cloud', 'Vercel', 'Docker', 'Kubernetes', 'CI/CD']
//     },
//     {
//         category: 'Database',
//         techs: ['PostgreSQL', 'MongoDB', 'Redis', 'Supabase', 'Firebase', 'Neo4j', 'Cassandra']
//     },
//     {
//         category: 'Automation',
//         techs: ['Zapier', 'Custom Bots', 'Make.com', 'n8n', 'ElevenLabs', 'VoiceFlow']
//     }
// ];


// const TechStack = () => {
//     return (
//         <section className="py-20 bg-gray-50">
//             <Container>
//                 <div className="text-center mb-16 px-4">
//                     <motion.h2
//                         initial={{ opacity: 0, y: 10 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         viewport={{ once: true }}
//                         className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6"
//                     >
//                         Modern Tech for Modern Problems
//                     </motion.h2>
//                     <motion.p
//                         initial={{ opacity: 0, y: 10 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         viewport={{ once: true }}
//                         transition={{ delay: 0.1 }}
//                         className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed"
//                     >
//                         We select the best tools for the job, ensuring your product is fast, secure, and ready for the future.
//                     </motion.p>
//                 </div>

//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
//                     {techCategories.map((category, index) => (
//                         <motion.div
//                             key={index}
//                             initial={{ opacity: 0, y: 20 }}
//                             whileInView={{ opacity: 1, y: 0 }}
//                             viewport={{ once: true }}
//                             transition={{ delay: index * 0.05 }}
//                             // ────────────────────────────────────────────────
//                             className="group bg-white rounded-3xl p-8 shadow-sm border border-gray-100
//                          hover:bg-blue-900 hover:shadow-xl transition-all duration-300"
//                         // ────────────────────────────────────────────────
//                         >
//                             <h3 className="text-xl font-bold text-gray-900 mb-6 border-b border-gray-50 pb-4 group-hover:text-white group-hover:border-gray-200/30 transition-colors text-center">
//                                 {category.category}
//                             </h3>

//                             <div className="flex flex-wrap gap-2.5">
//                                 {category.techs.map((tech, idx) => (
//                                     <span
//                                         key={idx}
//                                         className="px-4 py-1.5 text-sm font-semibold rounded-full
//                                bg-gray-50 text-gray-700 border border-gray-100
//                                group-hover:bg-gray-500/30 group-hover:text-white group-hover:border-gray-400/40
//                                transition-all duration-300 cursor-default"
//                                     >
//                                         {tech}
//                                     </span>
//                                 ))}
//                             </div>
//                         </motion.div>
//                     ))}
//                 </div>
//             </Container>
//         </section>
//     );
// };



// export default TechStack;


import React from 'react';
import { motion } from 'framer-motion';
import Container from '../../layout/Container';

const techCategories = [
    {
        category: 'Frontend',
        techs: ['React', 'Next.js', 'Tailwind', 'TypeScript', 'Redux', 'Vite'],
    },
    {
        category: 'Backend',
        techs: ['Python', 'FastAPI', 'Flask', 'Django', 'Node.js', 'Express.js'],
    },
    {
        category: 'AI & ML',
        techs: ['OpenAI', 'TensorFlow', 'PyTorch', 'LangChain', 'HuggingFace', 'Pinecone', 'RAG', 'AI Agents'],
    },
    {
        category: 'Cloud & DevOps',
        techs: ['AWS', 'Google Cloud', 'Vercel', 'Docker', 'Kubernetes', 'CI/CD'],
    },
    {
        category: 'Database',
        techs: ['PostgreSQL', 'MongoDB', 'Redis', 'Supabase', 'Firebase', 'Neo4j', 'Cassandra'],
    },
    {
        category: 'Automation',
        techs: ['Zapier', 'Custom Bots', 'Make.com', 'n8n', 'ElevenLabs', 'VoiceFlow'],
    },
];

const TechStack = () => {
    return (
        <section className="py-20 bg-gray-50">
            <Container>
                <div className="text-center mb-16 px-4">
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6"
                    >
                        Modern Tech for Modern Problems
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed"
                    >
                        We select the best tools for the job, ensuring your product is fast, secure, and ready for the future.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 px-4">
                    {techCategories.map((category, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className="
                group bg-white rounded-3xl p-6 sm:p-8 
                shadow-sm border border-gray-100 
                hover:bg-gradient-to-br from-[#0B1E3A] via-[#0F2A52] to-[#0B1E3A] active:bg-gradient-to-br from-[#0B1E3A] via-[#0F2A52] to-[#0B1E3A]
                hover:shadow-xl active:shadow-xl
                hover:-translate-y-1 active:-translate-y-0.5
                transition-all duration-300 ease-out
                cursor-pointer touch-manipulation
              "
                        >
                            <h3
                                className="
                  text-xl sm:text-2xl font-bold text-gray-900 mb-6 
                  border-b border-gray-100 pb-4 text-center
                  group-hover:text-white group-active:text-white
                  group-hover:border-gray-300/40 group-active:border-gray-300/40
                  transition-colors duration-300
                "
                            >
                                {category.category}
                            </h3>

                            <div className="flex flex-wrap gap-2.5 justify-center sm:justify-start">
                                {category.techs.map((tech, idx) => (
                                    <span
                                        key={idx}
                                        className="
                      px-3.5 py-1.5 sm:px-4 sm:py-1.5 text-xs sm:text-sm 
                      font-semibold rounded-full 
                      bg-gray-50 text-gray-700 border border-gray-200
                      group-hover:bg-blue-800/40 group-active:bg-blue-800/40
                      group-hover:text-white group-active:text-white
                      group-hover:border-blue-600/50 group-active:border-blue-600/50
                      transition-all duration-300 cursor-default
                    "
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default TechStack;
