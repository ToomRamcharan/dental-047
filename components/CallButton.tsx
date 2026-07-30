'use client';
import { Phone } from 'lucide-react';
import { clinicData } from '@/lib/data';

export default function CallButton() {
  return (
    <a href={`tel:${clinicData.phone}`}
      className="fixed bottom-6 left-6 z-50 w-14 h-14 rounded-full text-white flex items-center justify-center shadow-2xl transition-all hover:scale-110"
      style={{background: '#22c55e'}} aria-label="Call Now">
      <Phone size={28} />
    </a>
  );
}
