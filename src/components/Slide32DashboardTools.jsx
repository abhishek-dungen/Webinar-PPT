import { motion } from 'framer-motion';

import bricksLogo from '../../DB logos/Bricks AI.jpeg';
import vsCodexLogo from '../../DB logos/Visual Studio Code + Codex Extension.svg.png';

const tools = [
  { name: 'Bricks AI', logo: bricksLogo },
  { name: 'Visual Studio + Codex', logo: vsCodexLogo },
];

const Slide32DashboardTools = () => (
  <section className="slide-section min-h-screen w/full flex items-center justify-center px-8 md:px-16 lg:px-24 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-premium-black via-premium-black to-subtle-gray" />
    <div className="relative z-10 max-w-5xl w/full space-y-8 text-center">
      <motion.h2
        className="font-display text-4xl md:text-5xl"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
      >
        Use these tools for making Dashboards
      </motion.h2>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      >
        {tools.map(tool => (
          <div
            key={tool.name}
            className="rounded-[2rem] border border-white/10 bg-white/5 px-6 py-8 shadow-[0_25px_60px_rgba(0,0,0,0.4)] backdrop-blur flex flex-col gap-4 items-center"
          >
            <div className="w-32 h-32 rounded-2xl overflow-hidden flex items-center justify-center bg-black/30">
              <img src={tool.logo} alt={tool.name} className="w-full h-full object-contain" />
            </div>
            <p className="text-2xl font-semibold text-white">{tool.name}</p>
          </div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default Slide32DashboardTools;
