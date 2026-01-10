import { motion } from 'framer-motion';

const videos = [
  {
    label: 'Video 1',
    url: 'https://www.youtube.com/watch?v=hNzpEeU3a4I&t=22s&pp=ygUjb3B0aW1pemUgeW91ciBsaW5rZWRpbiBwcm9maWxlIGJlc3Q%3D',
    embed: 'https://www.youtube.com/embed/hNzpEeU3a4I',
  },
  {
    label: 'Video 2',
    url: 'https://www.youtube.com/watch?v=pA3KodCLP2o&pp=ygUjb3B0aW1pemUgeW91ciBsaW5rZWRpbiBwcm9maWxlIGJlc3Q%3D',
    embed: 'https://www.youtube.com/embed/pA3KodCLP2o',
  },
];

const Slide52LinkedInGuides = () => (
  <section className="slide-section min-h-screen w-full flex items-center justify-center px-8 md:px-16 lg:px-24 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-premium-black via-premium-black to-subtle-gray" />
    <motion.div
      className="relative z-10 max-w-5xl w/full space-y-8 text-center"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
    >
      <h2 className="font-display text-4xl md:text-5xl">Best & Long-Term LinkedIn</h2>
      <p className="text-xl text-text-muted">How to best use LinkedIn</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {videos.map(video => (
          <div
            key={video.label}
            className="rounded-[2rem] border border-white/10 bg-white/5 px-6 py-8 shadow-[0_25px_60px_rgba(0,0,0,0.4)] backdrop-blur flex flex-col gap-4"
          >
            <span className="text-premium-gold text-sm uppercase tracking-[0.4em]">
              {video.label}
            </span>
            <div className="aspect-video w-full overflow-hidden rounded-xl border border-white/10 bg-black/40">
              <iframe
                src={video.embed}
                title={video.label}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
            <a
              href={video.url}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-premium-gold/40 bg-premium-gold/10 px-4 py-2 text-sm font-semibold text-premium-gold hover:bg-premium-gold/20 transition"
            >
              Watch on YouTube
            </a>
          </div>
        ))}
      </div>
    </motion.div>
  </section>
);

export default Slide52LinkedInGuides;
