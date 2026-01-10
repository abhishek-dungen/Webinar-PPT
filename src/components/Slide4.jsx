import { motion } from 'framer-motion';

const Slide4 = () => {
    return (
        <section className="slide-section min-h-screen w-full flex items-center justify-center px-8 md:px-16 lg:px-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-bl from-subtle-gray via-premium-black to-premium-black" />

            <div className="relative z-10 max-w-5xl w-full">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                    className="space-y-10"
                >
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="font-display font-bold text-5xl md:text-6xl lg:text-7xl leading-tight text-balance"
                    >
                        Options itne zyada hain
                        ke log confused rehte hain
                    </motion.p>

                </motion.div>
            </div>
        </section>
    );
};

export default Slide4;
