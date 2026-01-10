import { motion } from 'framer-motion';

const Slide20 = () => {
    return (
        <section className="slide-section min-h-screen w-full flex items-center justify-center px-8 md:px-16 lg:px-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-premium-black via-subtle-gray to-premium-black" />

            <div className="relative z-10 max-w-5xl text-center">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                    className="space-y-8"
                >
                    <p className="text-sm uppercase tracking-[0.5em] text-text-muted/70">
                    </p>
                    <h2 className="font-display text-5xl md:text-6xl lg:text-7xl leading-tight">
                        Thoda Sa Mere Baare...
                    </h2>
                </motion.div>
            </div>
        </section>
    );
};

export default Slide20;
