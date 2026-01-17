import { motion } from 'framer-motion';

import peoplePerHourLogo from '../../Freelancer logos/People per hour.webp';
import peoplePerHourShotOne from '../../Freelancer logos/Screenshot 2026-01-17 at 2.58.52 PM.png';
import peoplePerHourShotTwo from '../../Freelancer logos/Screenshot 2026-01-17 at 2.59.02 PM.png';

const SlidePeoplePerHourPlatform = () => (
  <section className="slide-section min-h-screen w-full flex items-center justify-center relative overflow-hidden">
    <div className="absolute inset-0 bg-premium-black" />
    <motion.div
      className="relative z-10 w-full flex flex-col items-center justify-center gap-6"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="flex items-center justify-center gap-3">
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-premium-gold">
          PeoplePerHour
        </h2>
        <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl overflow-hidden bg-white/10 flex items-center justify-center">
          <img src={peoplePerHourLogo} alt="PeoplePerHour logo" className="w-full h-full object-contain" />
        </div>
      </div>
      <div className="grid w-full max-w-6xl gap-6 md:grid-cols-2">
        <div className="flex flex-col items-center gap-2">
          <img
            src={peoplePerHourShotOne}
            alt="PeoplePerHour projects screenshot"
            className="block max-h-[48vh] w-auto max-w-full object-contain bg-white"
          />
          <p className="text-base md:text-lg text-white/80">Bid for Projects</p>
        </div>
        <div className="flex flex-col items-center gap-2">
          <img
            src={peoplePerHourShotTwo}
            alt="PeoplePerHour gigs screenshot"
            className="block max-h-[48vh] w-auto max-w-full object-contain bg-white"
          />
          <p className="text-base md:text-lg text-white/80">Create Gigs/Offers</p>
        </div>
      </div>
    </motion.div>
  </section>
);

export default SlidePeoplePerHourPlatform;
