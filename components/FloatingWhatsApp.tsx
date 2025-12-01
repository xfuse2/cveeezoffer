import React from 'react';
import { WHATSAPP_URL } from '../constants';

const FloatingWhatsApp: React.FC = () => {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20b857] text-white p-4 rounded-full shadow-2xl transition-all hover:scale-110 flex items-center justify-center animate-bounce-slow group"
      aria-label="Contact on WhatsApp"
    >
      <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" className="w-8 h-8 brightness-0 invert" />
      <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs group-hover:mr-3 transition-all duration-300 font-bold">
        تواصل معنا
      </span>
    </a>
  );
};

export default FloatingWhatsApp;
