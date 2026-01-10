import { motion } from 'framer-motion';

const Slide1 = () => {
    return (
        <section className="slide-section min-h-screen w-full flex items-center justify-center px-8 md:px-16 lg:px-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-premium-black via-subtle-gray to-premium-black opacity-80" />

            <div className="relative z-10 max-w-6xl w-full">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                    className="space-y-12"
                >
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.4, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                        className="font-display font-bold text-6xl md:text-7xl lg:text-8xl text-balance leading-[1.1] tracking-tight"
                    >
                        Main ek simple sawaal se
                        <br />
                        start karta hoon……
                    </motion.h1>

                    <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 1.2, delay: 1, ease: [0.22, 1, 0.36, 1] }}
                        className="h-[1px] w-64 bg-gradient-to-r from-premium-gold to-transparent origin-left"
                    />
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.5 }}
                className="absolute bottom-12 left-1/2 -translate-x-1/2"
            >
                <motion.div
                    animate={{ y: [0, 12, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                    className="w-6 h-10 border-2 border-text-muted rounded-full flex items-start justify-center p-2"
                >
                    <div className="w-1.5 h-1.5 bg-premium-gold rounded-full" />
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Slide1;
