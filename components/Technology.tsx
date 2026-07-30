'use client';
import { motion } from 'framer-motion';
import { Cpu, Scan, Zap } from 'lucide-react';
import { technologies } from '@/lib/data';
const icons = [Cpu, Scan, Zap];

export default function Technology() {
  return (
    <section className="py-20 md:py-28" style={{background: '#f5e6d3'}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4" style={{color: '#1a1a1a'}}>Our <span className="gradient-text">Technology</span></h2>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-8">
          {technologies.map((t, i) => {
            const Icon = icons[i];
            return (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }}
                className="text-center p-8 rounded-2xl transition-all hover:-translate-y-2" style={{background: '#ffffff', boxShadow: '0 4px 20px rgba(0,0,0,0.05)'}}>
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6" style={{background: 'linear-gradient(135deg, #22c55e 0%, #15803d 50%, #f5e6d3 100%)'}}>
                  <Icon size={28} className="text-white" />
                </div>
                <h3 className="font-heading font-bold text-xl mb-3" style={{color: '#1a1a1a'}}>{t.name}</h3>
                <p style={{color: '#6b7280'}}>{t.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
