'use client';
import { motion } from 'framer-motion';

export default function Gallery() {
  const items = [
    { title: 'Reception Area' }, { title: 'Treatment Room' }, { title: 'Waiting Lounge' },
    { title: 'Modern Equipment' }, { title: 'Sterilization Room' }, { title: 'Consultation Room' },
  ];
  return (
    <section id="gallery" className="py-20 md:py-28" style={{background: '#f5e6d3'}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4" style={{color: '#1a1a1a'}}>Our <span className="gradient-text">Clinic</span></h2>
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {items.map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="aspect-[4/3] rounded-2xl flex items-center justify-center relative overflow-hidden group cursor-pointer" style={{background: 'linear-gradient(135deg, #22c55e 0%, #15803d 50%, #f5e6d3 100%)', opacity: 0.9}}>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300"></div>
              <span className="relative z-10 text-white font-heading font-semibold text-lg">{item.title}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
