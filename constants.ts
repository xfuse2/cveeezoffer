import { PricingPackage, FAQItem, Testimonial } from './types';

export const WHATSAPP_NUMBER = "201550363738"; // Egypt code +20 added
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

export const PACKAGES: PricingPackage[] = [
  {
    id: 'silver',
    name: 'Silver Package (فضية)',
    price: 199,
    originalPrice: 450,
    description: 'حل اقتصادي وبسيط للبداية.',
    features: [
      'CV ATS (Arabic أو English)',
      'CV Standard (تنسيق تقليدي)',
      'Cover Letter جاهز',
      'تسليم بصيغة PDF و Word'
    ],
    buttonText: 'احجز الباكدج الفضية',
    colorTheme: 'silver'
  },
  {
    id: 'student',
    name: 'Student Starter Pack',
    price: 180,
    description: 'مخصصة للطلاب، التدريب الصيفي، والأنشطة الطلابية.',
    features: [
      'CV ATS مناسب للطلاب',
      'Skills جاهزة حسب التخصص',
      'نسخة PDF + Word قابلة للتعديل',
      'نصائح للتقديم على التدريب'
    ],
    buttonText: 'أنا طالب - عايز دي',
    colorTheme: 'green'
  },
  {
    id: 'professional',
    name: 'Professional Package',
    price: 299,
    originalPrice: 450,
    description: 'مناسب للتقديم في الشركات المحلية والخارجية.',
    features: [
      'CV ATS English',
      'CV ATS Arabic',
      'Cover Letter احترافي',
      'تنسيق حديث وجذاب'
    ],
    buttonText: 'احجز الباكدج الاحترافية',
    colorTheme: 'blue'
  },
  {
    id: 'combo',
    name: 'CV + LinkedIn Combo',
    price: 450,
    originalPrice: 750,
    description: 'الأكثر مبيعاً! ابني تواجدك المهني بالكامل.',
    features: [
      'CV ATS احترافي',
      'LinkedIn Profile احترافي',
      'Score عالي + Keywords',
      'هدية: Online ID Card'
    ],
    isPopular: true,
    buttonText: 'احجز عرض CV + LinkedIn',
    colorTheme: 'purple'
  },
  {
    id: 'diamond',
    name: 'Diamond Package',
    price: 550,
    description: 'أفضل قيمة مقابل سعر لتجهيز قوي.',
    features: [
      'CV ATS English & Arabic',
      'Cover Letter',
      'LinkedIn Optimization',
      'ATS Score Report',
      'Keywords Optimization'
    ],
    buttonText: 'اختار باكدج دياموند',
    colorTheme: 'blue'
  },
  {
    id: 'golden',
    name: 'Golden Premium',
    price: 850,
    originalPrice: 1500,
    description: 'Full Personal Branding - الحل المتكامل.',
    features: [
      'CV ATS English & Arabic',
      'CV Standard English',
      'Cover Letter',
      'LinkedIn Profile احترافي',
      'Online ID Card',
      'ATS Score & Ranking Boost'
    ],
    isPremium: true,
    buttonText: 'احجز الجولدن باكدج',
    colorTheme: 'gold'
  },
  {
    id: 'linkedin',
    name: 'LinkedIn Services',
    price: 250,
    originalPrice: 500,
    description: 'خدمة مخصصة لتحسين حسابك فقط.',
    features: [
      'إنشاء/تحسين LinkedIn Profile',
      'تحسين الـ Ranking والظهور',
      'كتابة Headline و About احترافية',
      'إضافة Skills مناسبة للمجال'
    ],
    buttonText: 'رتبلي حساب LinkedIn',
    colorTheme: 'blue'
  }
];

export const FAQS: FAQItem[] = [
  {
    question: "هل الـ CV جاهز للتقديم في الشركات الكبيرة والمالتي ناشيونال؟",
    answer: "طبعاً، بنراعي معايير الـ ATS العالمية اللي بتستخدمها كبرى الشركات لفلترة السير الذاتية، وبنكتب محتوى يبرز نقاط قوتك بوضوح."
  },
  {
    question: "إزاي بتضمنوا توافق الـ CV مع ATS؟",
    answer: "بنستخدم تنسيقات (Templates) خالية من الجداول والرسومات المعقدة اللي بتلخبط السيستم، وبنركز على الـ Keywords المناسبة لمجالك الوظيفي."
  },
  {
    question: "أقدر أطلب تعديلات بعد التسليم؟",
    answer: "أكيد! ليك حق المراجعة وطلب تعديلات لحد ما تكون راضي تماماً عن النتيجة النهائية قبل ما نعتمد النسخة الأخيرة."
  },
  {
    question: "إيه طريقة الدفع المتاحة؟",
    answer: "نسهل عليك الدفع من خلال فودافون كاش، إنستا باي (InstaPay)، أو تحويل بنكي."
  },
  {
    question: "بستلم الـ CV خلال قد إيه؟",
    answer: "مدة العمل بتختلف حسب الباكدج، لكن في الغالب بنسلمك المسودة الأولى خلال 24 لـ 48 ساعة من استلام البيانات."
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "أحمد م.",
    role: "مهندس مدني",
    content: "الصراحة الشغل احترافي جداً، والسرعة في الرد أبهرتني. الـ CV الجديد فرق معايا جداً في المقابلات."
  },
  {
    name: "سارة ع.",
    role: "HR Specialist",
    content: "كنت فاكرة إني بعرف أكتب CV، بس لما شوفت شغل CVEEEZ عرفت الفرق. الـ LinkedIn بتاعي بقى يظهر في البحث أكتر بكتير."
  },
  {
    name: "محمود ك.",
    role: "محاسب حديث التخرج",
    content: "باكدج الطلاب كانت ممتازة وسعرها مناسب جداً، ساعدتني أقدم في تدريب صيفي واتقبلت الحمد لله."
  }
];

export const COMPARISON_HEADERS = [
  "الميزة", "Silver", "Professional", "Diamond", "Golden", "Combo", "Student"
];

// Simplified comparison logic for the table component
export const COMPARISON_ROWS = [
  { label: "CV ATS English", values: [false, true, true, true, true, false] },
  { label: "CV ATS Arabic", values: [true, true, true, true, false, false] },
  { label: "Cover Letter", values: [true, true, true, true, false, false] },
  { label: "LinkedIn Opt.", values: [false, false, true, true, true, false] },
  { label: "Online ID", values: [false, false, false, true, true, false] },
  { label: "ATS Report", values: [false, false, true, true, true, false] },
];
