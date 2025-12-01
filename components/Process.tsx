import React from 'react';
import { MessageCircle, FileSearch, PenTool, CheckCircle2 } from 'lucide-react';

const steps = [
  {
    icon: <MessageCircle className="w-8 h-8 text-white" />,
    title: "1. تواصل معنا",
    desc: "ابعتلنا رسالة على واتساب أو املى الفورم، واختار الباكدج اللي تناسبك."
  },
  {
    icon: <FileSearch className="w-8 h-8 text-white" />,
    title: "2. تفاصيل الخبرة",
    desc: "هنسألك شوية أسئلة بسيطة عن خبرتك، دراستك، والوظايف اللي بتقدم عليها."
  },
  {
    icon: <PenTool className="w-8 h-8 text-white" />,
    title: "3. التجهيز والكتابة",
    desc: "فريقنا المتخصص هيبدأ يكتب ويصمم الـ CV والـ LinkedIn خلال المدة المتفق عليها (24-48 ساعة)."
  },
  {
    icon: <CheckCircle2 className="w-8 h-8 text-white" />,
    title: "4. الاستلام والمراجعة",
    desc: "هتستلم النسخة المبدئية، ونعمل أي تعديلات تطلبها لحد ما تكون راضي 100%."
  }
];

const Process: React.FC = () => {
  return (
    <section className="py-20 bg-brand-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-brand-800 opacity-20 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-accent opacity-10 blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">هتستلم CV و LinkedIn في 4 خطوات بس</h2>
          <p className="text-brand-100 opacity-80">عملية بسيطة، سريعة، وبدون مجهود منك.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <div key={idx} className="relative flex flex-col items-center text-center">
              {/* Connector Line */}
              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-0 w-1/2 -ml-[50%] h-0.5 bg-brand-700 z-0"></div>
              )}
              
              <div className="w-16 h-16 bg-gradient-to-br from-brand-500 to-brand-700 rounded-2xl flex items-center justify-center shadow-lg mb-6 relative z-10 border border-brand-400">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-brand-100 text-sm leading-relaxed max-w-xs">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
