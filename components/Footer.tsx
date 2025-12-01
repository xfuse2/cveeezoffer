import React from 'react';
import { WHATSAPP_URL } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl font-bold text-white mb-6 tracking-wider">CVEEEZ</h2>
        <div className="flex justify-center gap-6 mb-8">
           <a href="#packages" className="hover:text-white transition-colors">الباكدجات</a>
           <a href={WHATSAPP_URL} className="hover:text-white transition-colors">تواصل معنا</a>
        </div>
        <p className="text-sm">
          جميع الحقوق محفوظة © {new Date().getFullYear()} CVEEEZ.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
