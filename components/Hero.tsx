import React from 'react';
import { Check, ArrowLeft } from 'lucide-react';
import { WHATSAPP_URL } from '../constants';
import ThreeDCVVisual from './ThreeDCVVisual';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-brand-700 text-white overflow-hidden pt-24 pb-20 lg:pt-32 lg:pb-28">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
          
          {/* Text Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-right">
            <span className="inline-block py-1 px-3 rounded-full bg-brand-600 border border-brand-500 text-brand-100 text-sm font-semibold mb-6 animate-pulse">
              🚀 طريقك للوظيفة يبدأ من هنا
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              سيرة ذاتية و LinkedIn جاهزين للتقديم... <br className="hidden md:block" />
              <span className="text-accent">بدون صداع أو تعقيد</span>
            </h1>
            
            <p className="text-lg md:text-xl text-brand-100 mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              في CVEEEZ بنساعدك تبني CV قوي وحساب LinkedIn احترافي، يعدي من أنظمة الـ ATS ويشدّ انتباه الـ HR من أول نظرة.
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-10 text-sm md:text-base">
              {['CV مخصص لمجالك', 'مطابق لأنظمة ATS', 'محتوى احترافي', 'دعم عبر واتساب'].map((item, idx) => (
                <div key={idx} className="flex items-center bg-brand-800/50 px-3 py-2 rounded-lg border border-brand-600 backdrop-blur-sm">
                  <Check className="w-5 h-5 text-accent ml-2" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a 
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center bg-accent hover:bg-accent-hover text-white text-lg font-bold py-4 px-8 rounded-xl transition-all transform hover:scale-105 shadow-lg hover:shadow-xl group"
              >
                <span>ابدأ دلوقتي على واتساب</span>
                <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" className="w-6 h-6 mr-3 brightness-0 invert group-hover:rotate-12 transition-transform" />
                <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
              </a>
              <div className="text-brand-200 text-sm">
                * رد فوري وتجهيز سريع
              </div>
            </div>
          </div>

          {/* 3D Visual Content */}
          <div className="w-full lg:w-1/2 flex justify-center perspective-1000">
             <ThreeDCVVisual />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;