'use client';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { testimonials } from '@/lib/data';

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 md:py-28" style={{background: '#faf7f2'}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4" style={{color: '#1a1a1a'}}>Patient <span className="gradient-text">Testimonials</span></h2>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }}
              className="p-8 rounded-2xl transition-all hover:-translate-y-2" style={{background: '#ffffff', boxShadow: '0 4px 20px rgba(0,0,0,0.05)'}}>
              <Quote size={32} className="mb-4" style={{color: '#22c55e', opacity: 0.3}} />
              <p className="text-sm leading-relaxed mb-6" style={{color: '#6b7280'}}>"{t.text}"</p>
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (<Star key={j} size={14} fill="gold" stroke="gold" />))}
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold" style={{background: '#22c55e'}}>{t.name[0]}</div>
                <div>
                  <div className="font-semibold text-sm" style={{color: '#1a1a1a'}}>{t.name}</div>
                  <div className="text-xs" style={{color: '#6b7280'}}>Verified Patient</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
