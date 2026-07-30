'use client';
import { useState, useEffect } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import { clinicData } from '@/lib/data';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', h);
    return () => window.removeEventListener('scroll', h);
  }, []);
  const links = [
    { label: 'Home', href: '#home' }, { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' }, { label: 'Doctors', href: '#doctors' },
    { label: 'Testimonials', href: '#testimonials' }, { label: 'Contact', href: '#contact' },
  ];
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300" style={{background: scrolled ? 'rgba(250,247,242,0.95)' : 'transparent', backdropFilter: 'blur(20px)', boxShadow: scrolled ? '0 4px 30px rgba(0,0,0,0.1)' : 'none'}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="#home" className="font-heading font-bold text-xl" style={{color: scrolled ? '#fff' : '#1a1a1a'}}>Partha Dental</a>
          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => (<a key={l.href} href={l.href} className="text-sm font-medium transition-colors hover:opacity-100" style={{color: 'rgba(255,255,255,0.8)'}}>{l.label}</a>))}
            <a href={`tel:${clinicData.phone}`} className="flex items-center gap-2 px-5 py-2.5 rounded-full text-white text-sm font-semibold transition-all hover:scale-105" style={{background: '#15803d'}}>
              <Phone size={16} /> Call Now
            </a>
          </div>
          <button onClick={() => setOpen(!open)} className="md:hidden" style={{color: scrolled ? '#fff' : '#1a1a1a'}}>
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden bg-white shadow-2xl p-6">
          {links.map((l) => (<a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block py-3 text-gray-700 font-medium border-b border-gray-100 last:border-0">{l.label}</a>))}
          <a href={`tel:${clinicData.phone}`} className="mt-4 flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-white font-semibold" style={{background: '#22c55e'}}>
            <Phone size={16} /> Call Now
          </a>
        </div>
      )}
    </nav>
  );
}
