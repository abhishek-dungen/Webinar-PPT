import { motion } from 'framer-motion';
import PillarHighlight from './PillarHighlight';

const Slide9 = ({ activeIndex = null }) => {
    const pillars = [
        'Ek high-value skill ki mastery Karna',
        'Us skill se job crack karna',
        'Us job mein grow karna',
        'AI ke saath adapt karna',
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
                    className="space-y-12"
                >
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="font-display font-bold text-5xl md:text-6xl lg:text-7xl text-balance leading-tight"
                    >
                        Career in 4 Cheezon Ka Game Ha
                    </motion.h2>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 1, delay: 0.4 }}
                        className="grid grid-cols-1 md:grid-cols-2 gap-6"
                    >
                        {pillars.map((item, index) => {
                            const isActive = activeIndex === index || activeIndex === null;
                            const isDimmed = activeIndex !== null && activeIndex !== index;

                            return (
                                <PillarHighlight
                                    key={index}
                                    index={index}
                                    label={item}
                                    isActive={isActive}
                                    isDimmed={isDimmed}
                                    motionProps={{
                                        initial: { opacity: 0, y: 20 },
                                        whileInView: { opacity: 1, y: 0 },
                                        viewport: { once: true },
                                        transition: { duration: 0.8, delay: 0.2 + index * 0.1 },
                                    }}
                                />
                            );
                        })}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Slide9;
