import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { WHATSAPP_URL } from '../constants';

const FinalCTA: React.FC = () => {
  return (
    <section className="py-20 bg-brand-600 text-white text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          جاهز تخلّي الـ CV بتاعك سبب قبولك مش رفضك؟
        </h2>
        <p className="text-brand-100 text-lg mb-10 max-w-2xl mx-auto">
          الفرص مبتستناش. ابدأ رحلة نجاحك المهني النهاردة مع CV محترف يفتحلك الأبواب.
        </p>
        
        <a 
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center bg-white text-brand-700 text-xl font-bold py-4 px-10 rounded-full shadow-lg hover:bg-gray-100 hover:shadow-2xl transition-all transform hover:-translate-y-1"
        >
          <span>ابدأ دلوقتي على واتساب</span>
          <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" className="w-6 h-6 mr-3" />
        </a>
      </div>
    </section>
  );
};

export default FinalCTA;
