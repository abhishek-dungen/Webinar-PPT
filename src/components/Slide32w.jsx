import { motion } from 'framer-motion';

const questions = [
  'What is the total revenue generated in the selected period?',
  'What is the average order value (AOV)?',
  'Which are the top 5 products by total revenue contribution?',
  'What are the Top 5 Products?',
  'Which are the top 3 categories?',
  'Which are the top 5 suppliers?',
  'Which are the top 3 cities by revenue contribution?',
  'What is the revenue contribution split between Corporate, Retail, and SME segments?',
];

const Slide32w = () => (
  <section className="slide-section min-h-screen w-full flex items-center justify-center px-8 md:px-16 lg:px-24 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-premium-black via-premium-black to-subtle-gray" />
    <div className="relative z-10 max-w-5xl w-full space-y-8">
      <motion.h2
        className="font-display text-4xl md:text-5xl lg:text-6xl leading-tight text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
      >
        Business Questions
      </motion.h2>
      <motion.ol
        className="space-y-4 text-xl md:text-2xl text-white/90"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      >
        {questions.map((question, idx) => (
          <li key={question} className="flex gap-3 leading-snug">
            <span className="text-premium-gold font-display">{idx + 1}.</span>
            <span>{question}</span>
          </li>
        ))}
      </motion.ol>
    </div>
  </section>
);

export default Slide32w;
