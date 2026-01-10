import { motion } from 'framer-motion';

const Slide64 = () => (
    <section className="slide-section min-h-screen w-full flex items-center justify-center px-8 md:px-16 lg:px-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-bl from-premium-black via-premium-black to-subtle-gray" />
        <div className="relative z-10 max-w-6xl w-full space-y-8"><motion.h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-tight"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
                👉 “Excel = Formula Nahi, Thinking Hai”
            </motion.h2>
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="space-y-6 text-xl text-text-muted leading-relaxed"
            >
                <p>
                    Excel ka matlab sirf formulas yaad karna, VLOOKUP lagana, ya Pivot Table banana nahi hai.
                </p>
                <p>
                    Excel ka asal game tab shuru hota hai jab aap uska use karke real{' '}
                    <span className="text-white font-semibold text-4xl md:text-5xl tracking-wide">
                        BUSINESS PROBLEMS
                    </span>{' '}
                    solve karte ho —
                </p>
                <p>Wahi Excel ka sahi aur valuable use hai.</p>
            </motion.div>
        </div>
    </section>
);

export default Slide64;
