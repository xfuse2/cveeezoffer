import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { WHATSAPP_URL } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'الرئيسية', href: '#' },
    { name: 'لماذا CVEEEZ؟', href: '#features' },
    { name: 'الباكدجات', href: '#packages' },
    { name: 'آراء العملاء', href: '#testimonials' },
    { name: 'الأسئلة الشائعة', href: '#faq' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
        scrolled ? 'bg-brand-900/95 backdrop-blur-md shadow-lg py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-black text-white tracking-wider relative z-50">
          <a href="#">CVEEEZ</a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-brand-100 hover:text-white font-medium transition-colors text-sm lg:text-base relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 right-0 w-0 h-0.5 bg-accent transition-all group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* CTA & Mobile Toggle */}
        <div className="flex items-center gap-4">
           <a 
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex bg-white/10 hover:bg-white/20 backdrop-blur-md text-white px-5 py-2.5 rounded-xl font-bold transition-all border border-white/20 hover:scale-105 active:scale-95 text-sm"
          >
            تواصل معنا
          </a>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2 relative z-50 focus:outline-none hover:bg-white/10 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>

        {/* Mobile Off-canvas Menu */}
        <div 
          className={`fixed inset-0 bg-brand-900 z-40 flex flex-col items-center justify-center transition-all duration-500 cubic-bezier(0.4, 0, 0.2, 1) md:hidden ${
            isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'
          }`}
        >
          {/* Background Elements */}
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
          
          <div className="flex flex-col items-center gap-8 text-xl font-bold relative z-10 w-full px-8">
            {navLinks.map((link, idx) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsOpen(false)}
                className={`text-white hover:text-accent transition-all duration-500 transform w-full text-center py-2 border-b border-brand-800 ${
                  isOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
                style={{ transitionDelay: `${100 + idx * 100}ms` }}
              >
                {link.name}
              </a>
            ))}
            <a 
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`bg-accent hover:bg-accent-hover text-white px-8 py-3 rounded-xl shadow-lg mt-8 w-full text-center transition-all duration-500 transform hover:scale-105 ${
                isOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
              style={{ transitionDelay: `${100 + navLinks.length * 100}ms` }}
            >
              تواصل معنا
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;