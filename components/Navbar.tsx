import React from 'react';
import { WHATSAPP_URL } from '../constants';

const Navbar: React.FC = () => {
  return (
    <nav className="absolute top-0 left-0 w-full z-20 py-6">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="text-2xl font-black text-white tracking-wider">
          CVEEEZ
        </div>
        <a 
          href={WHATSAPP_URL}
          className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white px-4 py-2 rounded-lg font-semibold transition-colors border border-white/20 text-sm md:text-base"
        >
          تواصل معنا
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
