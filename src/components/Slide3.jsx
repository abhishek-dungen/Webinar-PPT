import { motion } from 'framer-motion';

const Slide3 = () => {
    const actions = [
        'Thoda govt prep',
        'Thoda random upskilling / YouTube courses',
        'Thoda freelancing ka sapna',
        'Thoda AI ke videos',
    ];

    return (
        <section className="slide-section min-h-screen w-full flex items-center justify-center px-8 md:px-16 lg:px-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-premium-black via-premium-black to-subtle-gray" />

            <div className="relative z-10 max-w-6xl w-full">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                    className="space-y-14"
                >
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                        className="font-display font-bold text-5xl md:text-6xl lg:text-7xl text-balance leading-tight"
                    >
                        “Aur jab yeh clarity nahi hoti ki...”
                    </motion.h2>

                    <motion.ul
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 1, delay: 0.4 }}
                        className="space-y-6"
                    >
                        {actions.map((item, index) => (
                            <li key={index} className="flex items-start gap-6">
                                <div className="flex-shrink-0 mt-2">
                                    <div className="w-2 h-2 rounded-full bg-premium-gold" />
                                </div>
                                <p className="text-xl md:text-2xl lg:text-3xl font-light text-text-muted leading-relaxed">
                                    {item}
                                </p>
                            </li>
                        ))}
                    </motion.ul>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.6 }}
                        className="text-2xl md:text-3xl text-text-muted leading-relaxed"
                    >
                        6 mahine, 1 saal baad effort full hota hai, result zero.
                    </motion.p>
                </motion.div>
            </div>
        </section>
    );
};

export default Slide3;
