import React from 'react';
import PackageCard from './PackageCard';
import { PACKAGES } from '../constants';

const Packages: React.FC = () => {
  return (
    <section id="packages" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">اختار الباكدج المناسبة ليك</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            أسعار تنافسية وخصومات لفترة محدودة. استثمر في مستقبلك المهني بأقل تكلفة.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 items-start">
            {/* Render specifically ordered or filtered if needed, currently rendering all from constants */}
            {PACKAGES.map((pkg) => (
                <div key={pkg.id} className={pkg.id === 'combo' ? 'lg:col-span-1 md:row-span-2' : ''}>
                    <PackageCard pkg={pkg} />
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Packages;
