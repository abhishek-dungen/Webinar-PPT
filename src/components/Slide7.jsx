import { motion } from 'framer-motion';

const Slide7 = () => {
    const futureQuestions = [
        '1 saal baad kya hoga?',
        '3 saal baad kya growth hogi?',
        'Promotion kaise milti hai?',
        'Salary kaise badhti hai?',
    ];

    const trajectoryInsight = {
        label: 'Early career mein jo skill aap choose karte ho na… wahi decide karti hai:',
        bullets: [
            'Aap kaunsa kaam karoge',
            'Growth slow hogi ya fast',
            '5 saal baad aap valuable hoge ya replaceable',
        ],
    };

    return (
        <section className="slide-section min-h-screen w-full flex items-center justify-center px-8 md:px-16 lg:px-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-subtle-gray via-premium-black to-premium-black" />

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
                        “Theek hai. Maan lo job mil gayi.”
                        <br />
                        “Par phir kya?”
                    </motion.h2>

                    <motion.ul
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.4 }}
                        className="space-y-5 text-xl md:text-2xl lg:text-3xl text-text-muted leading-relaxed"
                    >
                        {futureQuestions.map((item, index) => (
                            <li key={index} className="flex items-start gap-4">
                                <div className="flex-shrink-0 mt-2">
                                    <div className="w-2 h-2 rounded-full bg-premium-gold" />
                                </div>
                                <span>{item}</span>
                            </li>
                        ))}
                        <li className="flex flex-col gap-4">
                            <div className="flex items-start gap-4">
                                <div className="flex-shrink-0 mt-2">
                                    <div className="w-2 h-2 rounded-full bg-premium-gold" />
                                </div>
                                <span>{trajectoryInsight.label}</span>
                            </div>
                            <ul className="ml-8 space-y-2 text-lg md:text-xl text-text-muted/90">
                                {trajectoryInsight.bullets.map((point, idx) => (
                                    <li key={idx} className="flex items-start gap-2">
                                        <span className="text-premium-gold">–</span>
                                        <span>{point}</span>
                                    </li>
                                ))}
                            </ul>
                        </li>
                    </motion.ul>
                </motion.div>
            </div>
        </section>
    );
};

export default Slide7;
