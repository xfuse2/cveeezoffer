import React from 'react';
import { Check, Star } from 'lucide-react';
import { PricingPackage } from '../types';
import { WHATSAPP_URL } from '../constants';

interface Props {
  pkg: PricingPackage;
}

const PackageCard: React.FC<Props> = ({ pkg }) => {
  const isGold = pkg.colorTheme === 'gold';
  const isPurple = pkg.colorTheme === 'purple';
  const isSilver = pkg.colorTheme === 'silver';
  const isGreen = pkg.colorTheme === 'green';

  let borderColor = 'border-slate-200';
  let headerBg = 'bg-slate-50';
  let buttonColor = 'bg-brand-600 hover:bg-brand-700';

  if (isGold) {
    borderColor = 'border-yellow-400';
    headerBg = 'bg-yellow-50';
    buttonColor = 'bg-yellow-500 hover:bg-yellow-600 text-black';
  } else if (isPurple) {
    borderColor = 'border-purple-400';
    headerBg = 'bg-purple-50';
    buttonColor = 'bg-purple-600 hover:bg-purple-700';
  } else if (isGreen) {
    borderColor = 'border-green-300';
    headerBg = 'bg-green-50';
    buttonColor = 'bg-green-600 hover:bg-green-700';
  } else if (isSilver) {
    borderColor = 'border-slate-300';
    headerBg = 'bg-slate-100';
    buttonColor = 'bg-slate-600 hover:bg-slate-700';
  }

  return (
    <div className={`group relative flex flex-col bg-white rounded-2xl border-2 ${borderColor} shadow-sm hover:shadow-2xl transition-all duration-300 ease-out transform hover:-translate-y-2 hover:scale-[1.02] ${pkg.isPopular ? 'scale-105 md:scale-105 z-10 shadow-lg ring-4 ring-purple-50/50 hover:scale-[1.07]' : ''}`}>
      
      {pkg.isPopular && (
        <div className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2 bg-purple-600 text-white px-4 py-1 rounded-full text-sm font-bold shadow-md whitespace-nowrap flex items-center gap-1 z-20">
          <Star className="w-4 h-4 fill-current animate-pulse" /> الأكثر مبيعاً
        </div>
      )}
      
      {pkg.isPremium && (
        <div className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2 bg-yellow-500 text-black px-4 py-1 rounded-full text-sm font-bold shadow-md whitespace-nowrap flex items-center gap-1 z-20">
          <Star className="w-4 h-4 fill-current" /> الأفضل
        </div>
      )}

      <div className={`p-6 rounded-t-2xl text-center ${headerBg} transition-colors duration-300 group-hover:bg-opacity-80`}>
        <h3 className="text-xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
        <div className="flex justify-center items-baseline gap-2 mb-2">
          <span className="text-3xl font-extrabold text-gray-900">{pkg.price} EGP</span>
          {pkg.originalPrice && (
            <span className="text-lg text-gray-400 line-through decoration-red-500 decoration-2">{pkg.originalPrice}</span>
          )}
        </div>
        <p className="text-sm text-gray-600 h-10">{pkg.description}</p>
      </div>

      <div className="p-6 flex-grow">
        <ul className="space-y-3">
          {pkg.features.map((feature, i) => (
            <li key={i} className="flex items-start text-sm text-gray-700 transition-transform duration-300 hover:-translate-x-2">
              <Check className={`w-5 h-5 ml-2 flex-shrink-0 ${isGold ? 'text-yellow-500' : isPurple ? 'text-purple-500' : 'text-brand-500'}`} />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="p-6 pt-0 mt-auto">
        <a 
          href={`${WHATSAPP_URL}?text=${encodeURIComponent(`مرحباً، أنا مهتم بحجز: ${pkg.name}`)}`}
          target="_blank"
          rel="noopener noreferrer"
          className={`w-full flex items-center justify-center py-3 rounded-xl font-bold text-white transition-all duration-300 shadow-md ${buttonColor} transform group-hover:scale-105 active:scale-95 group-hover:shadow-lg`}
        >
          {pkg.buttonText}
        </a>
      </div>
    </div>
  );
};

export default PackageCard;