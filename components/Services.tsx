'use client';
import { motion } from 'framer-motion';
import { Stethoscope, Sparkles, Smile, Scissors, Zap, Palette, Baby, AlertCircle } from 'lucide-react';
import { services, clinicData } from '@/lib/data';
const icons = [Stethoscope, Sparkles, Smile, Scissors, Zap, Palette, Baby, AlertCircle];

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-28" style={{background: '#f5e6d3'}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4" style={{color: '#1a1a1a'}}>Our <span className="gradient-text">Services</span></h2>
          <p className="text-lg max-w-2xl mx-auto" style={{color: '#6b7280'}}>Comprehensive dental solutions tailored to your needs</p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => {
            const Icon = icons[i];
            return (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="group p-6 rounded-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-xl" style={{background: '#ffffff', boxShadow: '0 4px 20px rgba(0,0,0,0.05)'}}>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all group-hover:scale-110" style={{background: 'rgba(34,197,94, 0.1)'}}>
                  <Icon size={24} style={{color: '#22c55e'}} />
                </div>
                <h3 className="font-heading font-bold text-lg mb-2" style={{color: '#1a1a1a'}}>{s.title}</h3>
                <p className="text-sm leading-relaxed" style={{color: '#6b7280'}}>{s.description}</p>
              </motion.div>
            );
          })}
        </div>
        <div className="text-center mt-12">
          <a href={`tel:${clinicData.phone}`} className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-white font-semibold text-lg transition-all hover:scale-105" style={{background: '#22c55e'}}>Book Your Service</a>
        </div>
      </div>
    </section>
  );
}
