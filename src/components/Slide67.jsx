import { motion } from 'framer-motion';

const questions = [
    'Coding?',
    'Data Science?',
    'AI?',
    'Digital Marketing?',
];

const Slide67 = () => (
    <section className="slide-section min-h-screen w-full flex items-center justify-center px-8 md:px-16 lg:px-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-premium-black via-premium-black to-subtle-gray" />
        <div className="relative z-10 max-w-6xl w-full space-y-8"><motion.h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-tight"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
                B.Com / BA / Arts / non-tech background wale log puchte hain
            </motion.h2>
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="space-y-4 text-xl text-text-muted leading-relaxed"
            >
                <p>“👉 ‘Corporate job ke liye pehli skill kaunsi sikhu?’”</p>
                <ul className="space-y-2 text-lg">
                    {questions.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                            <span className="text-premium-gold">•</span>
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
            </motion.div>
        </div>
    </section>
);

export default Slide67;
