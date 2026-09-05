import React from 'react';
import { Star, Quote, Sparkles } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { GUEST_REVIEWS } from '../data/tangHomeData';

interface GuestReviewsProps {
  currentLang: Language;
}

export const GuestReviews: React.FC<GuestReviewsProps> = ({ currentLang }) => {
  const t = translations[currentLang];

  return (
    <section className="py-24 bg-[#f9f7f2] relative overflow-hidden border-t border-stone-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-1.5 px-3.5 py-1 rounded-full bg-[#c4a67d]/15 border border-[#c4a67d]/30 text-[#8c6d3f] text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.ratingScore}</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#1c1c1c] font-normal mb-5 leading-tight">
            {t.reviewsHeading}
          </h2>
          <div className="w-12 h-[1px] bg-[#c4a67d]/60 mx-auto mb-5" />
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {GUEST_REVIEWS.map((rev) => (
            <div
              key={rev.id}
              className="bg-white border border-stone-200/80 hover:border-[#c4a67d]/60 rounded-2xl p-7 flex flex-col justify-between transition-all duration-300 hover:shadow-lg relative"
            >
              <div>
                {/* 5 Stars */}
                <div className="flex items-center space-x-1 mb-4 text-[#c4a67d]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#c4a67d]" />
                  ))}
                </div>

                <p className="text-xs sm:text-sm text-[#57534e] leading-relaxed font-light italic mb-6">
                  {rev.comment[currentLang]}
                </p>
              </div>

              <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
                <div>
                  <h4 className="font-serif text-base text-[#1c1c1c] font-semibold">{rev.guestName}</h4>
                  <span className="text-[11px] text-[#78716c]">{rev.origin} ‧ {rev.date}</span>
                </div>
                <span className="text-[10px] text-[#8c6d3f] bg-[#fbf9f5] px-2.5 py-1 rounded border border-stone-200/60 truncate max-w-[120px] font-medium">
                  {rev.roomName[currentLang]}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
