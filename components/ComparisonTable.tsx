import React from 'react';
import { Check, Minus } from 'lucide-react';
import { COMPARISON_HEADERS, COMPARISON_ROWS } from '../constants';

const ComparisonTable: React.FC = () => {
  return (
    <section className="py-20 bg-white hidden md:block">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">مقارنة سريعة بين الباكدجات</h2>
        </div>

        <div className="overflow-x-auto shadow-lg rounded-xl border border-gray-100">
          <table className="w-full min-w-[800px] text-sm text-center">
            <thead className="bg-brand-50 text-gray-800 font-bold uppercase">
              <tr>
                {COMPARISON_HEADERS.map((header, index) => (
                  <th key={index} className={`py-4 px-4 ${index === 0 ? 'text-right pr-8 w-1/6' : ''}`}>
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {COMPARISON_ROWS.map((row, rowIndex) => (
                <tr key={rowIndex} className="hover:bg-slate-50 transition-colors">
                  <td className="py-4 px-4 text-right pr-8 font-semibold text-gray-700 bg-white sticky right-0">
                    {row.label}
                  </td>
                  {row.values.map((val, valIndex) => (
                    <td key={valIndex} className="py-4 px-4">
                      <div className="flex justify-center">
                        {val ? (
                          <div className="bg-green-100 p-1 rounded-full">
                             <Check className="w-5 h-5 text-green-600" />
                          </div>
                        ) : (
                          <Minus className="w-5 h-5 text-gray-300" />
                        )}
                      </div>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;
