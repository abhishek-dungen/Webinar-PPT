import { motion } from 'framer-motion';

const Slide6 = () => {
    const questions = [
        'Kya roles exist karte hain?',
        'Kya salary package hota hai?',
        'Kahan apply karna hai?',
        'Resume kaise banana hai?',
        'Interview mein kya puchte hain, kis level ka skill judge karte hain?',
        'English kitni aani chahiye?',
        'Kaun-se projects dikhane hote hain, kis level ke hote hain?',
    ];

    return (
        <section className="slide-section min-h-screen w-full flex items-center justify-center px-8 md:px-16 lg:px-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-bl from-premium-black via-premium-black to-subtle-gray" />

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
                        Maan lo skill thodi-bahut aa bhi gay .....
                    </motion.h2>

                    <motion.ul
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 1, delay: 0.4 }}
                        className="space-y-5"
                    >
                        {['Par us se job kaise leni hai?', ...questions].map((item, index) => (
                            <li key={index} className="flex items-start gap-5">
                                <div className="flex-shrink-0 mt-2">
                                    <div className="w-2 h-2 rounded-full bg-premium-gold" />
                                </div>
                                <p className="text-xl md:text-2xl text-text-muted leading-relaxed">{item}</p>
                            </li>
                        ))}
                    </motion.ul>
                </motion.div>
            </div>
        </section>
    );
};

export default Slide6;
