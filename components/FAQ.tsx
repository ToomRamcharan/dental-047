'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { faqs } from '@/lib/data';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <section id="faq" className="py-20 md:py-28" style={{background: '#faf7f2'}}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4" style={{color: '#1a1a1a'}}>Frequently Asked <span className="gradient-text">Questions</span></h2>
        </motion.div>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="rounded-2xl overflow-hidden" style={{background: '#ffffff', boxShadow: '0 2px 10px rgba(0,0,0,0.05)'}}>
              <button onClick={() => setOpenIndex(openIndex === i ? null : i)} className="w-full flex items-center justify-between p-6 text-left">
                <span className="font-semibold" style={{color: '#1a1a1a'}}>{faq.question}</span>
                <ChevronDown size={20} style={{color: '#22c55e', transform: openIndex === i ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.2s'}} />
              </button>
              {openIndex === i && (<div className="px-6 pb-6"><p className="leading-relaxed" style={{color: '#6b7280'}}>{faq.answer}</p></div>)}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
