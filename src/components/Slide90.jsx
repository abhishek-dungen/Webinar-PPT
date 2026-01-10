import { motion } from 'framer-motion';

const Slide90 = () => (
  <section className="slide-section min-h-screen w-full flex items-center justify-center px-8 md:px-16 lg:px-24 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-bl from-premium-black via-premium-black to-subtle-gray" />
    <div className="relative z-10 max-w-4xl w-full space-y-6 text-center"><motion.h2
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        className="font-display text-4xl md:text-5xl lg:text-6xl leading-tight"
      >
        👉 “System Har Jagah Same Hai”
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="space-y-4 text-xl text-text-muted leading-relaxed"
      >
        <p>“Industry badal jaati hai Company badal jaati hai Product badal jaata hai”</p>
        <p>“Par jo skill same rehti hai:</p>
        <p>✅ Data ko samajhna</p>
        <p>✅ Pattern nikaalna</p>
        <p>✅ Decision banana”</p>
        <p>“Isiliye data wale log industry-agnostic hote hain.”</p>
      </motion.div>
    </div>
  </section>
);

export default Slide90;
