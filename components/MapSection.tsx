'use client';
import { motion } from 'framer-motion';

export default function MapSection() {
  return (
    <section className="py-20 md:py-28" style={{background: '#faf7f2'}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4" style={{color: '#1a1a1a'}}>Find <span className="gradient-text">Us</span></h2>
        </motion.div>
        <div className="rounded-2xl overflow-hidden shadow-2xl" style={{ height: "400px" }}>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.2!2d78.4!3d17.4!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDI0JzAwLjAiTiA3OMKwMjQnMDAuMCJF!5e0!3m2!1sen!2sin!4v1"
            width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" />
        </div>
      </div>
    </section>
  );
}
