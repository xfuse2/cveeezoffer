import React from 'react';
import { ShieldCheck, Users } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

const Trust: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {TESTIMONIALS.map((t, i) => (
            <div key={i} className="bg-slate-50 p-6 rounded-2xl border border-slate-100 relative">
              <div className="text-4xl text-brand-200 absolute top-4 right-4 font-serif">"</div>
              <p className="text-gray-700 italic mb-6 relative z-10 leading-relaxed pt-2">
                {t.content}
              </p>
              <div className="flex items-center">
                 <div className="w-10 h-10 bg-brand-100 rounded-full flex items-center justify-center text-brand-600 font-bold ml-3">
                   {t.name.charAt(0)}
                 </div>
                 <div>
                   <h4 className="font-bold text-gray-900 text-sm">{t.name}</h4>
                   <p className="text-gray-500 text-xs">{t.role}</p>
                 </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats & Trust Badges */}
        <div className="bg-brand-50 rounded-3xl p-8 md:p-12 text-center">
            <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16">
                <div className="flex flex-col items-center">
                    <div className="bg-white p-4 rounded-full shadow-sm mb-3">
                        <Users className="w-8 h-8 text-brand-600" />
                    </div>
                    <span className="text-3xl font-extrabold text-gray-900 mb-1">+500</span>
                    <span className="text-gray-600 text-sm">عميل سعيد</span>
                </div>
                
                <div className="h-px w-full md:w-px md:h-16 bg-brand-200"></div>

                <div className="flex flex-col items-center">
                    <div className="bg-white p-4 rounded-full shadow-sm mb-3">
                        <ShieldCheck className="w-8 h-8 text-brand-600" />
                    </div>
                    <span className="text-xl font-bold text-gray-900 mb-1">بياناتك في أمان 100%</span>
                    <span className="text-gray-600 text-sm">سرية تامة لبيانات العملاء</span>
                </div>
            </div>
            
            <p className="mt-8 text-gray-500 text-sm">
                عملاؤنا قدموا في شركات زي: Vodafone, CIB, Etisalat, Amazon, وغيرهم كتير.
            </p>
        </div>
      </div>
    </section>
  );
};

export default Trust;