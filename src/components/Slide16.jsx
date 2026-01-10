import { motion } from 'framer-motion';
import FocusBadge from './FocusBadge';

const Slide16 = () => {
    const bucketLabel = 'Us job mein grow karna';
    const bullets = [
        'Growth kaise hoti hai',
        'Kuch log fast kyun grow karte hain',
        'Kuch log same role mein 5 saal kyun atakte hain',
    ];

    return (
        <section className="slide-section min-h-screen w-full flex items-center justify-center px-8 md:px-16 lg:px-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-premium-black via-premium-black to-subtle-gray" />

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
                                👉 “Job Ke Baad Real Game Start Hota Hai”
                            </motion.h3>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, delay: 0.35 }}
                                className="text-xl md:text-2xl text-text-muted leading-relaxed"
                            >
                                “College aur YouTube yeh part kabhi nahi sikhate.”
                            </motion.p>

                            <motion.ul
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, delay: 0.45 }}
                                className="space-y-4 text-xl md:text-2xl text-text-muted leading-relaxed"
                            >
                                {bullets.map((item, index) => (
                                    <li key={index} className="flex items-start gap-4">
                                        <div className="flex-shrink-0 mt-2">
                                            <div className="w-2 h-2 rounded-full bg-premium-gold" />
                                        </div>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </motion.ul>
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

export default Slide16;
