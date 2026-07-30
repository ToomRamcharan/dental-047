'use client';
import { Phone, MapPin, Heart } from 'lucide-react';
import { clinicData } from '@/lib/data';

export default function Footer() {
  return (
    <footer className="py-12" style={{background: '#1a1a1a'}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-heading font-bold text-xl mb-4 text-white">Partha Dental</h3>
            <p className="text-sm text-gray-400">Premium dental care in Warangal.</p>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <div className="space-y-2">
              {['Home','About','Services','Doctors','Testimonials','Contact'].map((l) => (
                <a key={l} href={'#' + l.toLowerCase()} className="block text-sm text-gray-400 hover:text-white transition-colors">{l}</a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Contact</h4>
            <div className="space-y-3">
              <a href={`tel:${clinicData.phone}`} className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors">
                <Phone size={14} /> {clinicData.phone}
              </a>
              <div className="flex items-start gap-2 text-sm text-gray-400">
                <MapPin size={14} className="mt-0.5 flex-shrink-0" />
                <span>{clinicData.address}, {clinicData.city}</span>
              </div>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Hours</h4>
            <div className="space-y-2 text-sm text-gray-400">
              <p>Mon-Sat: 9AM-9PM</p>
              <p>Sunday: 10AM-2PM</p>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-sm text-gray-500 flex items-center justify-center gap-1">
            &copy; {new Date().getFullYear()} {clinicData.name}. Made with <Heart size={12} fill="red" stroke="red" /> in {clinicData.city}
          </p>
        </div>
      </div>
    </footer>
  );
}
