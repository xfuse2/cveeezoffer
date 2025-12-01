export interface PackageFeature {
  text: string;
  included: boolean;
}

export interface PricingPackage {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  description: string;
  features: string[];
  isPopular?: boolean;
  isPremium?: boolean;
  buttonText: string;
  colorTheme: 'blue' | 'gold' | 'silver' | 'purple' | 'green';
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Testimonial {
  name: string;
  role: string;
  content: string;
}
