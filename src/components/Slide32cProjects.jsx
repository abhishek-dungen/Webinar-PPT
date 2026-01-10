import { motion } from 'framer-motion';

const projects = [
  {
    industry: 'Healthcare',
    title: 'Apollo Hospitals',
    role: 'Operations Analyst (Hospital Materials/Inventory)',
  },
  {
    industry: 'Banking/Financial Services',
    title: 'Axis',
    role: 'Investment Analyst (Mutual Fund Performance)',
  },
  {
    industry: 'Customer Analytics/CRM',
    title: 'Customer Engagement & Retention',
    role: 'Customer Insights Analyst',
  },
  {
    industry: 'Telecom',
    title: 'Excitel',
    role: 'Sales Operations Analyst',
  },
  {
    industry: 'Pharmaceuticals',
    title: 'Jagsonpal Pharmaceuticals',
    role: 'Financial Analyst (Corporate Finance)',
  },
  {
    industry: 'Energy',
    title: 'Oil and Gas Industry',
    role: 'Equity Research Analyst (Industry Comps)',
  },
  {
    industry: 'Capital Markets',
    title: 'Ola Electric IPO',
    role: 'Valuation Analyst (Pre-IPO)',
  },
  {
    industry: 'Operations',
    title: 'Production Business Plan',
    role: 'Business Planning Analyst',
  },
  {
    industry: 'Electronics',
    title: 'Sales Analysis',
    role: 'Sales Analytics Specialist',
  },
  {
    industry: 'Software Development',
    title: 'Project Management',
    role: 'Project Management Analyst (PMO)',
  },
  {
    industry: 'Automotive',
    title: 'Tata Motors',
    role: 'Equity Research Analyst (Automotive)',
  },
  {
    industry: 'Consumer Goods',
    title: 'Titan',
    role: 'Financial Reporting Analyst',
  },
];

const Slide32cProjects = () => (
  <section className="slide-section min-h-screen w-full flex items-center justify-center px-6 md:px-12 lg:px-20 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-premium-black via-premium-black to-subtle-gray" />
    <div className="relative z-10 w-full max-w-6xl space-y-10">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        className="text-center"
      >
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-tight">
          Projects
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="rounded-3xl border border-white/10 bg-white/5 overflow-hidden"
      >
        <div className="grid grid-cols-1 md:grid-cols-[1.1fr_1.2fr_1.7fr] text-xs uppercase tracking-[0.35em] text-premium-gold/80 bg-white/5 px-6 py-4">
          <span>Industry</span>
          <span>Project</span>
          <span>Role</span>
        </div>
        {projects.map((project) => (
          <div
            key={`${project.industry}-${project.title}`}
            className="grid grid-cols-1 md:grid-cols-[1.1fr_1.2fr_1.7fr] gap-2 border-t border-white/10 px-6 py-4"
          >
            <p className="text-white/70 text-sm md:text-base">{project.industry}</p>
            <p className="text-white text-base md:text-lg font-display">{project.title}</p>
            <p className="text-white/60 text-sm md:text-base">{project.role}</p>
          </div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default Slide32cProjects;
