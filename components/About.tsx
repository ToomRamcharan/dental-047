'use client';
import { motion } from 'framer-motion';
import { Shield, Heart, Award, Clock } from 'lucide-react';
import { clinicData } from '@/lib/data';

export default function About() {
  const features = [
    { icon: Shield, title: 'Advanced Technology', desc: 'State-of-the-art equipment' },
    { icon: Heart, title: 'Compassionate Care', desc: 'Patient-first approach' },
    { icon: Award, title: 'Expert Team', desc: 'Qualified dentists with decades of experience' },
    { icon: Clock, title: 'Flexible Hours', desc: 'Evenings and weekends available' },
  ];
  return (
    <section id="about" className="py-20 md:py-28" style={{background: '#faf7f2'}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="font-heading text-3xl md:text-5xl font-bold mb-6" style={{color: '#1a1a1a'}}>
              About <span className="gradient-text">Partha Dental</span>
            </h2>
            <p className="text-lg mb-6" style={{color: '#6b7280'}}>
              With over 15 years of excellence in dental care, we have been transforming smiles across Warangal.
            </p>
            <p className="text-lg mb-8" style={{color: '#6b7280'}}>
              We believe everyone deserves a healthy, beautiful smile.
            </p>
            <a href={`tel:${clinicData.phone}`} className="px-6 py-3 rounded-full text-white font-semibold transition-all hover:scale-105 inline-block" style={{background: '#22c55e'}}>Visit Us Today</a>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
            <div className="grid grid-cols-2 gap-4">
              {features.map((f, i) => (
                <div key={i} className="p-6 rounded-2xl transition-all hover:-translate-y-1" style={{background: '#ffffff', boxShadow: '0 4px 20px rgba(0,0,0,0.05)'}}>
                  <f.icon size={28} style={{color: '#22c55e'}} className="mb-3" />
                  <h3 className="font-heading font-bold mb-2" style={{color: '#1a1a1a'}}>{f.title}</h3>
                  <p className="text-sm" style={{color: '#6b7280'}}>{f.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
