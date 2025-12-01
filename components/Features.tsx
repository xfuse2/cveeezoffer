import React from 'react';
import { Award, UserCheck, FileText, Settings } from 'lucide-react';

const features = [
  {
    icon: <Settings className="w-10 h-10 text-brand-600" />,
    title: "خبرة ATS و HR",
    desc: "مش مجرد كتابة، إحنا فاهمين الـ Recruiting Software بيشتغل إزاي وبنكتب الـ Keywords اللي تظهره."
  },
  {
    icon: <UserCheck className="w-10 h-10 text-brand-600" />,
    title: "شغل يدوي 100%",
    desc: "مش بنستخدم قوالب جاهزة (Copy Paste). كل عميل بنكتب له محتوى مخصص لخبراته ومجاله."
  },
  {
    icon: <FileText className="w-10 h-10 text-brand-600" />,
    title: "فرق واضح في الجودة",
    desc: "هتشوف بنفسك الفرق بين الـ CV التقليدي وبين التنسيق الاحترافي اللي بيبرز نقاط قوتك."
  },
  {
    icon: <Award className="w-10 h-10 text-brand-600" />,
    title: "مراجعات لا نهائية",
    desc: "هدفنا رضاك. مش بنقفل الشغل غير لما تكون راضي عن كل كلمة وتنسيق في الملف."
  }
];

const Features: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">ليه آلاف المرشحين اختاروا CVEEEZ؟</h2>
          <div className="h-1 w-24 bg-accent mx-auto rounded"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feat, idx) => (
            <div key={idx} className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:shadow-lg transition-shadow text-center group">
              <div className="bg-white w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                {feat.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feat.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
