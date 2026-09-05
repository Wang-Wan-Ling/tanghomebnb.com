import React, { useState } from 'react';
import { Plus, Minus, CreditCard, Receipt } from 'lucide-react';
import { Language } from '../types';
import { PROPERTY_FAQS } from '../data/tangHomeData';
import { PaymentGuideModal } from './PaymentGuideModal';
import { StayRulesModal } from './StayRulesModal';

interface FaqSectionProps {
  currentLang: Language;
  onOpenConcierge?: () => void;
  onOpenPhotoGallery?: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ currentLang }) => {
  const [openFaqId, setOpenFaqId] = useState<string | null>(null);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [isStayRulesModalOpen, setIsStayRulesModalOpen] = useState(false);

  const toggleFaq = (id: string) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  return (
    <section id="faq" className="scroll-mt-24 py-16 sm:py-24 bg-white border-t border-stone-200 text-[#1c1917]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Clean Bold Left-Aligned Header matching the Reference Screenshot */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-stone-900 tracking-tight mb-8 sm:mb-12 text-left">
          常見問題
        </h2>

        {/* Minimalist Accordion List with Thin Horizontal Dividers */}
        <div className="border-t border-stone-200 divide-y divide-stone-200">
          {PROPERTY_FAQS.map((faq) => {
            const isOpen = openFaqId === faq.id;
            const questionText = faq.question[currentLang] || faq.question['zh-TW'];
            const answerText = faq.answer[currentLang] || faq.answer['zh-TW'];

            return (
              <div key={faq.id} className="py-2">
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full py-5 sm:py-6 flex items-center justify-between text-left group cursor-pointer transition-colors"
                >
                  <span className="text-base sm:text-lg text-stone-900 font-normal pr-6 group-hover:text-stone-600 transition-colors">
                    {questionText}
                  </span>
                  <span className="text-stone-500 group-hover:text-stone-900 shrink-0 transition-transform duration-200">
                    {isOpen ? (
                      <Minus className="w-5 h-5 sm:w-6 sm:h-6 stroke-[1.25]" />
                    ) : (
                      <Plus className="w-5 h-5 sm:w-6 sm:h-6 stroke-[1.25]" />
                    )}
                  </span>
                </button>

                {isOpen && (
                  <div className="pb-6 pt-1 text-sm sm:text-base text-stone-600 font-light leading-relaxed whitespace-pre-line animate-in fade-in duration-200">
                    {answerText}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Subtle Quick Access Links at Bottom */}
        <div className="mt-12 pt-8 border-t border-stone-200 flex flex-wrap items-center justify-start gap-4 text-xs sm:text-sm text-stone-500">
          <span>詳細規範手冊：</span>
          <button
            onClick={() => setIsPaymentModalOpen(true)}
            className="inline-flex items-center space-x-1.5 text-stone-700 hover:text-[#8c6d3f] font-medium underline underline-offset-4 cursor-pointer"
          >
            <CreditCard className="w-3.5 h-3.5 text-[#8c6d3f]" />
            <span>付款與匯款帳號說明</span>
          </button>
          <span className="text-stone-300">|</span>
          <button
            onClick={() => setIsStayRulesModalOpen(true)}
            className="inline-flex items-center space-x-1.5 text-stone-700 hover:text-[#8c6d3f] font-medium underline underline-offset-4 cursor-pointer"
          >
            <Receipt className="w-3.5 h-3.5 text-[#8c6d3f]" />
            <span>入住須知與收費標準細則</span>
          </button>
        </div>
      </div>

      {/* Modals for detailed guides */}
      <PaymentGuideModal
        isOpen={isPaymentModalOpen}
        onClose={() => setIsPaymentModalOpen(false)}
        currentLang={currentLang}
      />
      <StayRulesModal
        isOpen={isStayRulesModalOpen}
        onClose={() => setIsStayRulesModalOpen(false)}
        currentLang={currentLang}
      />
    </section>
  );
};
