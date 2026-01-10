import { motion } from 'framer-motion';

const Slide2 = () => {
    const statements = [
        '‘Software job le lo’',
        '‘IT job le lo’',
        '‘Data job le lo’',
        '‘AI seekh lo’',
        '‘Excel seekh lo’',
        '‘Python seekh lo’',
        '‘Digital Marketing seekh lo’',
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.12,
                delayChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -30 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
            },
        },
    };

    return (
        <section className="slide-section min-h-screen w-full flex items-center justify-center px-8 md:px-16 lg:px-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-bl from-subtle-gray via-premium-black to-premium-black" />

            <div className="relative z-10 max-w-6xl w-full">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                    className="space-y-16"
                >
                    <div className="space-y-6">
                        <motion.div
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                            className="h-[2px] w-24 bg-premium-gold origin-left"
                        />
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                            className="font-display font-bold text-5xl md:text-6xl lg:text-7xl leading-tight"
                        >
                            Log bol dete hain —
                        </motion.h2>
                    </div>

                    <motion.ul
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        className="space-y-6"
                    >
                        {statements.map((item, index) => (
                            <motion.li
                                key={index}
                                variants={itemVariants}
                                className="flex items-start gap-6 group"
                            >
                                <div className="flex-shrink-0 mt-2">
                                    <div className="w-2 h-2 rounded-full bg-premium-gold group-hover:scale-150 transition-transform duration-500" />
                                </div>
                                <p className="text-xl md:text-2xl lg:text-3xl font-light text-text-muted group-hover:text-white transition-colors duration-500 leading-relaxed">
                                    {item}
                                </p>
                            </motion.li>
                        ))}
                    </motion.ul>
                </motion.div>
            </div>
        </section>
    );
};

export default Slide2;
