import { motion } from 'framer-motion';

const Slide5 = () => {
    return (
        <section className="slide-section min-h-screen w-full flex items-center justify-center px-8 md:px-16 lg:px-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-premium-black via-subtle-gray to-premium-black" />

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
                        className="text-2xl md:text-3xl text-text-muted leading-relaxed"
                    >
                        Yahan ek aur thought quietly aata hai…
                    </motion.p>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.4 }}
                        className="font-display font-bold text-5xl md:text-6xl lg:text-7xl text-balance leading-tight"
                    >
                        Kya Mera College / Degree Hi Problem Hai?
                    </motion.h2>

                    <motion.ul
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.8 }}
                        className="space-y-4 text-xl md:text-2xl lg:text-3xl text-text-muted leading-relaxed"
                    >
                        {[
                            'BCom, BA, BSc, BCA',
                            'Koi famous college nahhi',
                            'Kya company CV pe degree/college dekh kar reject kar deti hai',
                        ].map((item, index) => (
                            <li key={index} className="flex items-start gap-4">
                                <div className="flex-shrink-0 mt-2">
                                    <div className="w-2 h-2 rounded-full bg-premium-gold" />
                                </div>
                                <span>{item}</span>
                            </li>
                        ))}
                    </motion.ul>
                </motion.div>
            </div>
        </section>
    );
};

export default Slide5;
