import { motion } from 'framer-motion';

const Slide8 = () => {
    const aiConcerns = [
        {
            text: '“Meri job already weak hai. Repetitive hai. Rule-based hai.”',
        },
        {
            text: '“Har Jagah AI ka hallah sunta hu”',
            bullets: [
                'AI Excel kar raha hai',
                'AI coding kar raha hai',
                'AI content likh raha hai',
            ],
        },
        {
            text: '“Jo main skill ab seekhoon...”',
            bullets: [
                'kya 3–5 saal baad bhi kaam aayegi?',
                'Ya AI use bhi kha jaayega?',
            ],
        },
    ];

    return (
        <section className="slide-section min-h-screen w-full flex items-center justify-center px-8 md:px-16 lg:px-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-bl from-premium-black via-subtle-gray to-premium-black" />

            <div className="relative z-10 max-w-6xl w-full">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                    className="space-y-10"
                >
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="font-display font-bold text-5xl md:text-6xl lg:text-7xl text-balance leading-tight"
                    >
                        “Aur phir last layer aata hai — AI.”
                    </motion.h2>

                    <motion.ul
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.4 }}
                        className="space-y-6 text-xl md:text-2xl lg:text-3xl text-text-muted leading-relaxed"
                    >
                        {aiConcerns.map((item, index) => (
                            <li key={index} className="flex flex-col gap-3">
                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0 mt-2">
                                        <div className="w-2 h-2 rounded-full bg-premium-gold" />
                                    </div>
                                    <span>{item.text}</span>
                                </div>
                                {item.bullets && (
                                    <ul className="ml-8 space-y-2 text-lg md:text-xl text-text-muted/90">
                                        {item.bullets.map((bullet, subIndex) => (
                                            <li key={subIndex} className="flex items-start gap-2">
                                                <span className="text-premium-gold">–</span>
                                                <span>{bullet}</span>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        ))}
                    </motion.ul>
                </motion.div>
            </div>
        </section>
    );
};

export default Slide8;
