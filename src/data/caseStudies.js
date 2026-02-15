import aiResearchImg from '../assets/ai_research_case_study1.png';
//import callCenterImg from '../assets/Call_Center1.png';
//import privateEquityImg from '../assets/Private_Equity1.png';
import medicalCustomerSupportImg from '../assets/medical_customer_support_case_study_2.png';
import privateEquityCaseStudyImg from '../assets/Private_Equity_case_study_3.png';
import homeCareServiceImg from '../assets/Home_care_case_study_42.png';

export const caseStudies = [
    {
        id: 1,
        slug: 'ai-research-analyst-rag-pipeline',
        title: 'AI Research Analyst',
        subtitle: 'Enterprise-Grade Multi-Source RAG Pipeline for Professional Services',
        industry: 'Medical Research',
        problem: 'Research teams were overwhelmed by the volume of PDF documents from diverse sources. Manual data extraction and synthesis were time-consuming, error-prone, and struggled with consistency across thousands of pages.',
        solution: 'Portfoliyo designed and delivered a production-grade, Retrieval-Augmented Generation (RAG) pipeline that transformed the firm’s research workflow from manual to intelligent and semi-automated.The system ingests documents from multiple internal repositories, shared drives, secure client portals, and approved external sources; processes them with context-aware chunking and hybrid indexing; retrieves the most relevant passages with sub-second latency; and uses a chain-of-thought LLM agent to synthesize structured, citation-backed research summaries, executive briefs, competitive landscapes, and trend reports.',
        architectureOverview: 'The architecture follows modern enterprise RAG best practices with strong emphasis on accuracy, auditability, cost control, and data governance:• Asynchronous, fault-tolerant ingestion pipeline (Celery + Redis)• Multi-format document parsing with layout-aware OCR fallback (Unstructured.io + LlamaParse)• Intelligent, semantic-aware chunking with metadata enrichment• Dual-embedding strategy: dense (OpenAI text-embedding-3-large) + sparse (BM25)• Hybrid retrieval engine (Pinecone + custom re-ranking layer)• Multi-stage LLM orchestration using LangGraph: retrieval → context compression → chain-of-thought reasoning → structured output generation• React-based research cockpit with real-time streaming, inline citations, regeneration controls, and export to Word/PowerPoint• SOC 2 Type II compliant infrastructure with client-specific encryption keys and audit logging.',
        keyFeatures: [
            'Automated Multi-Source PDF Ingestion',
            'Layout-preserving PDF parsing with table, figure extraction',
            'Context-aware semantic chunking preserving document hierarchy',
            'Hybrid semantic + keyword + metadata filtering retrieval',
            'Advanced re-ranking with cross-encoder models for precision',
            'Agentic synthesis with chain-of-thought, self-critique, and citation grounding',
            'Structured output formats (executive summary, SWOT, competitive matrix, timeline, key quotes)',
            'Full traceability: every insight links back to source document + page + section',
            'User feedback loop for continuous improvement of embeddings and prompts',
            'Cost & rate-limit aware routing across multiple LLM providers'
        ],
        technologyStack: ['Python', 'LangChain', 'OpenAI API', 'Celery', 'Redis', 'Pinecone', 'React', 'FastAPI'],
        results: 'Research delivery time dropped from 5–10 days to 4–12 hours (75–90% faster). Manual data work reduced around 78%, letting analysts focus on strategic tasks. Research accuracy improved to 90-95%, verified by blind audits. The system scaled to 500–1000 documents/hour, increasing research capacity and, increase annual productivity gain, with less critical data leaks since deployment.',
        swot: {
            strengths: 'Highly accurate extraction, seamless multi-source handling, scalable architecture,Strong governance, auditability, and citation grounding.',
            weaknesses: 'Initial setup complexity for custom document formats,Cost-aware routing adds complexity, Dependency on quality of upstream OCR for heavily scanned legacy PDFs.',
            opportunities: 'Integration with real-time web search, expanding to video transcripts,Expanding to video and audio content, Offer as white-label research intelligence platform to clients.',
            threats: 'Rapidly evolving LLM costs, dependency on API uptime,Emergence of significantly more capable closed models reducing open competition, Increasing regulatory scrutiny of AI-generated client deliverables.'
        },
        timeline: '3 Months',
        role: 'Full-Cycle AI Development',
        coverImage: aiResearchImg,
        tags: ['RAG', 'Retrieval-Augmented Generation', 'Enterprise AI', 'Document Intelligence', 'LangChain', 'AI Research', 'Professional Services', 'Knowledge Management']
    },
    {
        id: 2,
        slug: 'medical-clinic-support-agent',
        title: 'Multilingual AI Medical Support Agent',
        subtitle: '24/7 Text-Based Conversational Assistant for Patient Engagement & Clinic Efficiency',
        industry: 'Healthcare',
        problem: 'The client served a highly diverse urban population where more than 40% of patients primarily spoke languages other than English. The clinics struggled with high volumes of patient messages arriving via WhatsApp, SMS, web chat, patient portal, and email, resulting in:• Significant delays in responding to non-urgent queries (often 24–72 hours or longer) • Staff burnout from handling repetitive administrative requests (appointment booking/rescheduling, directions, office hours, basic FAQs, refill requests) • Communication barriers leading to misunderstandings with non-English speakers • Rising no-show rates (18–22%) due to inadequate follow-up reminders and scheduling friction • Growing patient dissatisfaction with slow or inconsistent digital communication • Pressure to improve digital patient experience scores while keeping administrative overhead under control.',
        solution: 'Portfoliyo designed and implemented a fully text-based, HIPAA-compliant multilingual AI chatbot that acts as the primary digital front door for patients. Deployed across WhatsApp, SMS, web chat widget, and the patient portal, the agent handles routine inquiries, intelligent appointment scheduling, prescription refill coordination, basic symptom guidance with escalation rules, insurance and billing FAQs, and personalized post-visit follow-ups — all in the patient’s preferred language with natural, empathetic tone.Clinically sensitive or complex matters are automatically escalated to human staff with full conversation context, while every interaction maintains strict PHI protection and auditability.',
        architectureOverview: 'The architecture is purpose-built for secure, scalable, text-only conversational healthcare:• Omnichannel text ingestion layer (WhatsApp Business API, Twilio Messaging, custom web socket + patient portal SDK) • Multilingual NLU powered by Google Dialogflow CX + custom medical-domain fine-tuned models (Vertex AI) • Intent & entity recognition using healthcare-specific ontologies and medical terminology mappings • Stateful, multi-turn conversation engine with long-term context retention and session recovery • Bidirectional, real-time integration with the clinic’s EHR / Practice Management system via HL7 FHIR APIs and secure webhooks • End-to-end HIPAA-compliant pipeline: encryption at rest/transit, tokenization of PHI, granular consent tracking, full audit logs • Escalation logic with context-preserving handoff to live agents (via integrated CRM or helpdesk) • Next.js-powered embeddable chat widget + responsive patient portal integration • Serverless-first deployment on Google Cloud Run + Cloud SQL for high availability and cost efficiency.',
        keyFeatures: [
            '15+ Language Support',
            'Intelligent Appointment Scheduling',
            'HIPPA-Compliant Data Handling',
            'Patient Query Categorization',
            'Clinic Workflow Integration'
        ],
        technologyStack: ['Python', 'FastAPI', 'Langchain', 'LangGraph', 'Tailwind', 'React', 'Google Cloud', 'PostgreSQL', 'Docker'],
        results: 'After the system was introduced, many incoming messages were handled automatically by AI and response time became almost instant. The system provided 24/7 digital support without extra staff, improved patient satisfaction, reduced missed appointments, and lowered administrative workload. It also increased patient engagement, delivered cost savings, and helped clinics manage more appointment requests without extending hours, Very strong ROI from message deflection and reduced administrative burden.',
        swot: {
            strengths: 'Broad language support, high compliance standards, immediate response time, real-time EHR integration for accurate scheduling and data consistency.',
            weaknesses: 'Complex medical terminology occasionally requires human hand-off, Higher initial data collection effort needed for rare dialects and regional medical terms.',
            opportunities: 'Expansion into triage assistance and follow-up care automation, Extend capabilities to guided pre-visit questionnaires and intake forms.',
            threats: 'Strict healthcare regulatory changes, data privacy concerns, Potential for AI hallucinations in sensitive medical contexts.'
        },
        timeline: '5 Months',
        role: 'Lead Implementation Partner',
        coverImage: medicalCustomerSupportImg,
        tags: ['Healthcare', 'NLP', 'Scheduling', 'Healthcare AI', 'Conversational AI', 'Multilingual Chatbot', 'Appointment Automation', 'HIPAA Compliance', 'Patient Engagement', 'EHR Integration', 'Google Cloud AI']
    },
    {
        id: 3,
        slug: 'private-equity-automation-system',
        title: 'AI-Powered Acquisition Intelligence Platform',
        subtitle: 'Strategic Buyer & Acquisition Analysis',
        industry: 'Finance / Private Equity',
        problem: 'The firm’s deal sourcing and initial due diligence process was heavily manual and spreadsheet-driven, creating multiple bottlenecks: • Deal team analysts spent 60–75% of their time on repetitive data collection and basic financial screening • Coverage was limited to ~150–200 companies per quarter due to time constraints • Reliance on third-party banker teasers and network referrals meant missing off-market and emerging opportunities • Inconsistent screening criteria across partners and analysts led to subjective bias and overlooked high-potential targets • Delayed analysis (often 3–7 days per target) caused the firm to lose competitive auctions or pass on fast-moving deals • Lack of centralized visibility into pipeline health, scoring rationale, and historical performance metrics.',
        solution: 'Portfoliyo built and deployed a custom AI-powered Acquisition Intelligence Platform that continuously monitors thousands of public and private companies, automates financial health screening, applies proprietary scoring models, surfaces high-potential targets in real time, and provides decision-ready insights to accelerate early-stage evaluation.The platform ingests structured financials, news, filings, job postings, and alternative data; runs multi-factor scoring (financial, strategic fit, growth signals, risk flags); ranks opportunities against the firm’s investment thesis; and delivers prioritized daily briefings with one-click export to Excel/CRM and deep-dive analytics.',
        architectureOverview: 'Designed for scale, speed, data quality, and auditability: • Event-driven ingestion pipeline ingesting 20+ financial/market data APIs (PitchBook, S&P Capital IQ, Crunchbase, FactSet, AlphaSense, EDGAR/SEDAR filings, Glassdoor/LinkedIn signals) • Real-time ETL layer with schema-on-read and data quality validation • Hybrid rule-based + ML filtering engine (initial thesis alignment, size/sector filters, red-flag detection) • Transformer-based models for growth trajectory projection, sentiment analysis from news/earnings calls, and proprietary “acquisition attractiveness” scoring • Vector embeddings for semantic similarity matching against historical portfolio companies and lost deals • Centralized PostgreSQL + TimescaleDB warehouse with materialized views for performance • FastAPI backend serving real-time APIs and WebSocket updates • React-based executive dashboard with interactive filtering, heat maps, watchlists, and drill-down views • Secure, role-based access with full audit trail and data lineage tracking • Containerized deployment (Docker + Kubernetes) on Google Cloud with auto-scaling and disaster recovery',
        keyFeatures: [
            'Real-time Market Monitoring',
            'Automated Financial Health Assessment',
            'AI-Driven Target Scoring',
            'Centralized Acquisition Dashboard',
            'Growth Projection Modeling',
            'Thesis-aligned ranking with customizable weighting and scenario modeling',
            'Semantic similarity search against historical deals and lost opportunities',
            'Automated daily briefings with prioritized target lists and one-click export',
            'Role-based access control with full audit trail and data lineage tracking'
        ],
        technologyStack: ['React', 'Python', 'FastAPI', 'LangChain', 'OpenAI', 'Crunchbase API data source', 'Google Cloud', 'PostgreSQL', 'Docker', 'BrowserUse Automation'],
        results: 'After implementation, company coverage expanded dramatically, allowing thousands of entities to be monitored in real time. The time required to move from target identification to initial review dropped from days to minutes, while manual screening effort for the deal team was significantly reduced. Within the first few months, several high-quality targets were identified, leading to successful acquisitions and strong investment returns, partly due to earlier opportunity detection. Overall pipeline quality improved, team productivity increased, and there were no data integrity or compliance issues after launch.',
        swot: {
            strengths: 'Massive data processing speed, unbiased scoring, Strong integration and workflow embedding within existing tools, Objective, consistent, and transparent scoring methodology.',
            weaknesses: 'Heavy reliance on third-party financial data accuracy, Limited visibility into fully private companies without public signals.',
            opportunities: 'Integration with CRM for deal flow tracking, Extend to full deal pipeline management and post-acquisition value creation tracking.',
            threats: 'Market volatility affecting projection models, Data privacy regulations and compliance requirements, Potential changes in data provider pricing or API access policies.'
        },
        timeline: '6 Months',
        role: 'Strategic Technology Consultant',
        coverImage: privateEquityCaseStudyImg,
        tags: ['Private Equity', 'Acquisition Intelligence', 'AI Decision Support', 'Financial Data Automation', 'Deal Sourcing', 'Growth Modeling', 'Alternative Data', 'Investment Tech']
    },
    {
        id: 4,
        slug: 'home-care-automation-agent',
        title: 'Home Care Service Automation',
        subtitle: 'Lead Management & Interview Booking',
        industry: 'Home Care Services',
        problem: 'The client was experiencing rapid growth but was constrained by manual, high-friction processes in the caregiver recruitment and client onboarding funnel:• 65–75% of incoming service inquiries went cold due to response times exceeding 4–12 hours • Caregiver applicants faced 3–7 day delays before receiving interview slots, causing 40–50% drop-off before onboarding • Coordinators spent 4–6 hours daily manually qualifying leads, checking availability, sending calendar links, and updating CRM • Inconsistent qualification led to mismatched client-caregiver pairings and increased cancellations • No centralized visibility into lead quality, drop-off points, or conversion funnel performance • High operational cost per acquired caregiver and per booked service, limiting scalability',
        solution: 'Portfoliyo designed and launched a conversational AI agent that serves as the 24/7 digital front door for both client service requests and caregiver applications. The agent qualifies leads in real time, assesses service needs and urgency, matches requirements to available caregiver profiles, books interviews instantly via integrated calendar sync, routes high-potential leads to coordinators with full context, and maintains two-way communication across web chat. After successful interview completion (handled offline or via Zoom), the system automatically triggers CRM updates, background check workflows, and onboarding document collection — creating a near-zero-touch pipeline from lead capture to active caregiver status.',
        architectureOverview: 'Built for reliability, low latency, and seamless multi-channel operation: Event-driven architecture triggered by lead capture, using a conversational LLM for prospect qualification and automated calendar sync,Conversational intelligence powered by OpenAI GPT-4o-mini (fine-tuned prompts) + structured output parsing for intent classification and entity extraction.',
        keyFeatures: [
            'Instant Lead Qualification',
            'Automated Interview Scheduling',
            'Service Lead Routing',
            'Multi-Platform Availability (Web/WhatsApp)',
            'Automatic CRM Sync',
            'Caregiver applicant screening (experience, certifications, availability, preferred zones, transport)',
            'Natural, empathetic multi-turn conversations with branching logic and clarification questions',
            'Real-time availability checks and instant booking confirmation'
        ],
        technologyStack: ['React', 'Python', 'FastAPI', 'Google Cloud', 'LangChain', 'OpenAI', 'Google Calendar API', 'Tailwind CSS'],
        results: 'After implementation, the time required to move from lead to interview booking dropped from days to just minutes for qualified applicants. Caregiver onboarding improved significantly with far fewer drop-offs, while service inquiry conversions increased notably. Manual coordination work was greatly reduced, allowing the team to handle more caregiver acquisitions without increasing staff. The average cost per onboarded caregiver decreased, communication became more effective through the primary messaging channel, and client satisfaction improved due to faster, personalized responses. No data privacy or compliance issues were reported after launch.',
        swot: {
            strengths: 'Fast implementation, high engagement rate, low maintenance, Near-instant response and booking experience driving high engagement, Very strong ROI through automation of high-volume, repetitive tasks, Seamless multi-channel presence with consistent conversation quality.',
            weaknesses: 'Edge-case questions still require manual chat intervention, Initial prompt tuning required for industry-specific terminology and local nuances.',
            opportunities: 'Adding automated background check integration, Extend to automated post-placement check-ins and caregiver performance feedback loops.',
            threats: 'Increasing regulatory scrutiny of AI in personal care services, Potential for AI hallucinations in sensitive care-related queries.'
        },
        timeline: '2 Months',
        role: 'AI Product Developer',
        coverImage: homeCareServiceImg,
        tags: ['Home Care AI', 'Conversational Agent', 'Lead Qualification', 'Appointment Automation', 'Caregiver Onboarding', 'Workflow Automation']
    }
];
