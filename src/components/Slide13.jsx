import { motion } from 'framer-motion';
import FocusBadge from './FocusBadge';

const Slide13 = () => {
    const bucketLabel = 'Ek high-value skill ki mastery Karna';
    const bulletPoints = [
        'Jiski market mein strong demand ho',
        'Jo multiple business problems solve kare',
        'jo market down hone pe bhi kaam aaye',
        'jo aapko sirf employee nahi, problem-solver banaye',
    ];

    return (
        <section className="slide-section min-h-screen w-full flex items-center justify-center px-8 md:px-16 lg:px-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-bl from-premium-black via-subtle-gray to-premium-black" />

            <div className="relative z-10 max-w-5xl w-full">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                >
                    <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-16">
                        <div className="flex-1 space-y-8">
                            <motion.h3
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, delay: 0.2 }}
                                className="font-display text-4xl md:text-5xl lg:text-6xl leading-tight text-balance"
                            >
                                High-Value Skill Kya Hoti Hai?
                            </motion.h3>

                            <motion.ul
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, delay: 0.35 }}
                                className="space-y-4 text-xl md:text-2xl text-text-muted leading-relaxed"
                            >
                                {bulletPoints.map((item, index) => (
                                    <li key={index} className="flex items-start gap-4">
                                        <div className="flex-shrink-0 mt-2">
                                            <div className="w-2 h-2 rounded-full bg-premium-gold" />
                                        </div>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </motion.ul>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, delay: 0.5 }}
                                className="text-xl md:text-2xl text-text-muted leading-relaxed"
                            >
                                Simple definition: High demand. Real business impact.
                            </motion.p>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.9, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                            className="lg:w-64 xl:w-72 w-full"
                        >
                            <FocusBadge label={bucketLabel} />
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Slide13;
