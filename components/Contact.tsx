'use client';
import { motion } from 'framer-motion';
import { Phone, MapPin, Clock, MessageCircle } from 'lucide-react';
import { clinicData } from '@/lib/data';

export default function Contact() {
  return (
    <section id="contact" className="py-20 md:py-28" style={{background: '#f5e6d3'}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4" style={{color: '#1a1a1a'}}>Get In <span className="gradient-text">Touch</span></h2>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-6">
            <div className="p-6 rounded-2xl" style={{background: '#ffffff', boxShadow: '0 4px 20px rgba(0,0,0,0.05)'}}>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{background: 'rgba(34,197,94, 0.1)'}}>
                  <Phone size={20} style={{color: '#22c55e'}} />
                </div>
                <div><h3 className="font-semibold mb-1" style={{color: '#1a1a1a'}}>Phone</h3>
                  <a href={`tel:${clinicData.phone}`} className="text-sm hover:underline" style={{color: '#22c55e'}}>{clinicData.phone}</a>
                </div>
              </div>
            </div>
            <div className="p-6 rounded-2xl" style={{background: '#ffffff', boxShadow: '0 4px 20px rgba(0,0,0,0.05)'}}>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{background: 'rgba(34,197,94, 0.1)'}}>
                  <MapPin size={20} style={{color: '#22c55e'}} />
                </div>
                <div><h3 className="font-semibold mb-1" style={{color: '#1a1a1a'}}>Address</h3>
                  <p className="text-sm" style={{color: '#6b7280'}}>{clinicData.address}, {clinicData.city}</p>
                </div>
              </div>
            </div>
            <div className="p-6 rounded-2xl" style={{background: '#ffffff', boxShadow: '0 4px 20px rgba(0,0,0,0.05)'}}>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{background: 'rgba(34,197,94, 0.1)'}}>
                  <Clock size={20} style={{color: '#22c55e'}} />
                </div>
                <div><h3 className="font-semibold mb-1" style={{color: '#1a1a1a'}}>Hours</h3>
                  <p className="text-sm" style={{color: '#6b7280'}}>Mon-Sat: 9AM-9PM. Sun: 10AM-2PM</p>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex flex-col gap-4">
            <a href={`tel:${clinicData.phone}`} className="flex items-center justify-center gap-3 p-5 rounded-2xl text-white font-semibold text-lg transition-all hover:scale-[1.02] hover:shadow-xl" style={{background: '#22c55e'}}>
              <Phone size={22} /> Call Now
            </a>
            <a href={`https://wa.me/${clinicData.whatsapp}`} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 p-5 rounded-2xl font-semibold text-lg transition-all hover:scale-[1.02] hover:shadow-xl border-2" style={{borderColor: '#25D366', color: '#25D366'}}>
              <MessageCircle size={22} /> WhatsApp Us
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
