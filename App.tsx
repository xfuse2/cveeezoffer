import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Packages from './components/Packages';
import ComparisonTable from './components/ComparisonTable';
import Process from './components/Process';
import FAQ from './components/FAQ';
import Trust from './components/Trust';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-right" dir="rtl">
      <Navbar />
      <Hero />
      <Features />
      <Packages />
      <ComparisonTable />
      <Process />
      <Trust />
      <FAQ />
      <FinalCTA />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
