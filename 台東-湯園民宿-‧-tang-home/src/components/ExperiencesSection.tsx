import React from 'react';
import { Sparkles, Clock, ArrowRight, Check } from 'lucide-react';
import { Language, Currency } from '../types';
import { translations } from '../data/translations';
import { CURATED_EXPERIENCES } from '../data/tangHomeData';
import { formatPrice } from '../utils/currency';

interface ExperiencesSectionProps {
  currentLang: Language;
  currentCurrency: Currency;
  onOpenBooking: () => void;
}

export const ExperiencesSection: React.FC<ExperiencesSectionProps> = ({
  currentLang,
  currentCurrency,
  onOpenBooking,
}) => {
  const t = translations[currentLang];

  return (
    <section id="experiences" className="py-24 bg-[#f9f7f2] relative overflow-hidden border-t border-stone-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-ultra-wide text-[#b89366] font-medium block mb-3">
            {t.expTitle}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#1c1c1c] font-normal mb-5 leading-tight">
            {t.expHeading}
          </h2>
          <div className="w-12 h-[1px] bg-[#c4a67d]/60 mx-auto mb-5" />
          <p className="text-sm sm:text-base text-[#78716c] font-light leading-relaxed">
            {t.expSubtitle}
          </p>
        </div>

        {/* 2x2 Grid of Experiences */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {CURATED_EXPERIENCES.map((exp) => (
            <div
              key={exp.id}
              className="group bg-white border border-stone-200/80 hover:border-[#c4a67d]/60 rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-lg flex flex-col justify-between"
            >
              {/* Experience Photo */}
              <div className="relative aspect-[16/9] overflow-hidden bg-stone-100">
                <img
                  src={exp.image}
                  alt={exp.title[currentLang]}
                  className="w-full h-full object-cover img-luxury-zoom"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-md text-[#8c6d3f] text-[10px] uppercase tracking-widest font-semibold px-3 py-1 rounded-full border border-stone-200/80 shadow-sm">
                    {exp.category[currentLang]}
                  </span>
                </div>

                {exp.priceType === 'complimentary' && (
                  <div className="absolute top-4 right-4">
                    <span className="bg-emerald-900/90 backdrop-blur-md text-emerald-100 text-[10px] tracking-wider font-semibold px-3 py-1 rounded-full border border-emerald-500/30">
                      {t.complimentaryBadge}
                    </span>
                  </div>
                )}
              </div>

              {/* Experience Content */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-xl sm:text-2xl text-[#1c1c1c] mb-2 group-hover:text-[#b89366] transition-colors">
                    {exp.title[currentLang]}
                  </h3>
                  <div className="flex items-center space-x-2 text-xs text-[#b89366] mb-3 font-medium">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{exp.duration[currentLang]}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#78716c] font-light leading-relaxed mb-4">
                    {exp.description[currentLang]}
                  </p>
                  <div className="p-3 bg-[#fbf9f5] rounded-xl border border-stone-200/60 text-[11px] text-[#8c6d3f] flex items-center space-x-2 mb-6">
                    <Sparkles className="w-3.5 h-3.5 text-[#b89366] shrink-0" />
                    <span>{exp.highlight[currentLang]}</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <span className="font-serif text-xl font-bold text-[#1c1c1c]">
                      {exp.priceType === 'complimentary'
                        ? '貴賓尊榮免費'
                        : exp.priceType === 'per_person'
                        ? `${formatPrice(exp.priceTWD, currentCurrency)} / 每位`
                        : `${formatPrice(exp.priceTWD, currentCurrency)} / 每次`}
                    </span>
                  </div>

                  <button
                    onClick={onOpenBooking}
                    className="px-4 py-2 text-xs font-semibold text-white bg-[#c4a67d] hover:bg-[#b5956c] rounded-lg transition-colors flex items-center space-x-1 shadow-sm"
                  >
                    <span>{t.btnReserveExp}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
