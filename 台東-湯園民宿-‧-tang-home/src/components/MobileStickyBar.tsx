import React from 'react';
import { Calendar, Sparkles } from 'lucide-react';
import { Language, Currency } from '../types';
import { translations } from '../data/translations';
import { formatPrice } from '../utils/currency';
import { openOwlNestBooking } from '../utils/owlnest';

interface MobileStickyBarProps {
  currentLang: Language;
  currentCurrency: Currency;
  onOpenBooking?: () => void;
}

export const MobileStickyBar: React.FC<MobileStickyBarProps> = ({
  currentLang,
  currentCurrency,
}) => {
  const t = translations[currentLang];

  const handleBook = () => {
    openOwlNestBooking({ lang: currentLang });
  };

  return (
    <div
      id="mobile-sticky-bar"
      className="fixed bottom-0 left-0 right-0 z-30 p-3 bg-white/95 backdrop-blur-xl border-t border-stone-200 shadow-xl sm:hidden flex items-center justify-between animate-in slide-in-from-bottom duration-300"
    >
      <div>
        <div className="flex items-center space-x-1.5">
          <span className="text-[10px] uppercase tracking-wider text-stone-500 font-semibold">湯園民宿</span>
          <span className="text-[9px] bg-[#8c6d3f]/15 text-[#8c6d3f] px-1.5 py-0.5 rounded font-semibold">
            2026 禮遇
          </span>
        </div>
        <div className="flex items-baseline space-x-1">
          <span className="text-xs text-stone-500">{t.fromPrice}</span>
          <span className="font-serif text-base font-bold text-[#1c1c1c]">
            {formatPrice(1800, currentCurrency)}
          </span>
        </div>
      </div>

      <button
        onClick={handleBook}
        className="px-5 py-2.5 bg-[#8c6d3f] hover:bg-[#775a30] text-white font-semibold text-xs tracking-wider rounded-lg shadow-sm flex items-center space-x-1.5 active:scale-95 transition-all"
      >
        <Calendar className="w-3.5 h-3.5" />
        <span>{t.btnBookStay}</span>
      </button>
    </div>
  );
};
