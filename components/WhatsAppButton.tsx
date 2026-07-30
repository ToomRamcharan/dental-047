'use client';
import { MessageCircle } from 'lucide-react';
import { clinicData } from '@/lib/data';

export default function WhatsAppButton() {
  return (
    <a href={`https://wa.me/${clinicData.whatsapp}`} target="_blank" rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-2xl transition-all hover:scale-110"
      aria-label="Chat on WhatsApp">
      <MessageCircle size={28} />
    </a>
  );
}
