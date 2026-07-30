import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Doctors from '@/components/Doctors';
import Technology from '@/components/Technology';
import Testimonials from '@/components/Testimonials';
import Gallery from '@/components/Gallery';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import MapSection from '@/components/MapSection';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import CallButton from '@/components/CallButton';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar /><Hero /><About /><Services /><Doctors /><Technology />
      <Testimonials /><Gallery /><FAQ /><Contact /><MapSection />
      <Footer /><WhatsAppButton /><CallButton />
    </main>
  );
}
