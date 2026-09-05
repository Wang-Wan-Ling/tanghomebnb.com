import React, { useState } from 'react';
import { Sparkles, Sprout, Compass, Heart, Cake, ArrowRight, CheckCircle2, ArrowUpRight, Phone, MessageCircle } from 'lucide-react';
import { Language, Currency } from '../types';
import { SPECIAL_SERVICES, SpecialServiceItem } from '../data/specialServicesData';
import { TangHomeMountainIcon } from './TangHomeLogo';

interface FarmAndServicesSectionProps {
  currentLang: Language;
  currentCurrency: Currency;
  onSelectService: (service: SpecialServiceItem) => void;
  onOpenBooking: () => void;
  onOpenConcierge?: () => void;
  onOpenCorporateModal?: () => void;
}

export const FarmAndServicesSection: React.FC<FarmAndServicesSectionProps> = ({
  currentLang,
  currentCurrency,
  onSelectService,
  onOpenBooking,
  onOpenConcierge,
  onOpenCorporateModal,
}) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'dining' | 'farm' | 'travel' | 'wedding' | 'celebration' | 'business'>('all');

  const filteredServices = activeCategory === 'all'
    ? SPECIAL_SERVICES
    : SPECIAL_SERVICES.filter((s) => s.category === activeCategory);

  const categoryTabs = [
    { id: 'all', label: currentLang === 'en' ? 'All' : '全部服務' },
    { id: 'dining', label: currentLang === 'en' ? 'Private Chef' : '私廚預約' },
    { id: 'travel', label: currentLang === 'en' ? 'Travel & Ferry' : '船票與旅遊' },
    { id: 'wedding', label: currentLang === 'en' ? 'Bridal' : '喜慶迎娶' },
    { id: 'celebration', label: currentLang === 'en' ? 'Celebration' : '驚喜布置' },
    { id: 'business', label: currentLang === 'en' ? 'Corporate' : '商務出差' },
    { id: 'farm', label: currentLang === 'en' ? 'Organic Farm' : '自有農場' },
  ];

  return (
    <section id="special-services" className="py-20 sm:py-28 bg-[#f5f2eb] border-t border-b border-stone-200/90 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header with Mandarin Oriental Aesthetic */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
          <div className="flex justify-center mb-4">
            <TangHomeMountainIcon size={30} color="#8c6d3f" />
          </div>
          <span className="text-[11px] uppercase tracking-[0.3em] text-[#8c6d3f] font-medium block mb-2">
            尊榮服務與客製體驗
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#1c1917] font-normal tracking-tight leading-tight mb-4">
            加價私廚 ‧ 自有農場與慢活訂製
          </h2>
          <div className="w-12 h-[1px] bg-[#8c6d3f] mx-auto mb-4" />
          <p className="text-sm sm:text-base text-stone-600 font-light leading-relaxed max-w-2xl mx-auto">
            在地風土私廚到府晚宴、自耕純淨作物、客製套裝旅遊、浪漫客房布置與喜慶迎娶空間，為您的台東假期增添溫度。
          </p>

          {/* Clean Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categoryTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id as any)}
                className={`px-4 py-2 rounded-full text-xs font-medium tracking-wider transition-all duration-300 ${
                  activeCategory === tab.id
                    ? 'bg-[#1c1917] text-[#d1b07c] shadow-sm'
                    : 'bg-white/80 text-stone-600 hover:bg-white hover:text-stone-900 border border-stone-200/80'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Editorial Feature Cards Grid - Breathable & Clickable */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {filteredServices.map((service, idx) => (
            <div
              key={service.id}
              onClick={() => onSelectService(service)}
              className="group bg-white rounded-2xl overflow-hidden border border-stone-200/90 hover:border-stone-400 shadow-xs hover:shadow-xl transition-all duration-500 cursor-pointer flex flex-col justify-between"
            >
              {/* Image Frame */}
              <div className="relative aspect-[16/10] overflow-hidden bg-stone-100">
                <img
                  src={service.image}
                  alt={service.title[currentLang]}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-stone-950/20 to-transparent" />

                {/* Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-[#8c6d3f] text-[10px] font-bold tracking-widest uppercase border border-stone-200/80 shadow-xs">
                    {service.badge[currentLang]}
                  </span>
                </div>

                {/* Bottom Tag */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs">
                  <span className="text-[11px] font-medium bg-black/40 backdrop-blur-xs px-2.5 py-1 rounded-md border border-white/20">
                    點擊查看完整方案介紹
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white/90 group-hover:bg-[#8c6d3f] text-stone-900 group-hover:text-white flex items-center justify-center transition-colors shadow-sm">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between bg-white space-y-4">
                <div>
                  <h3 className="font-serif text-xl sm:text-2xl text-stone-900 group-hover:text-[#8c6d3f] transition-colors leading-snug mb-2 font-normal">
                    {service.title[currentLang]}
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 font-light leading-relaxed">
                    {service.summary[currentLang]}
                  </p>
                </div>

                {/* Card Action Link */}
                <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
                  <span className="text-xs font-semibold text-stone-900 group-hover:text-[#8c6d3f] transition-colors inline-flex items-center space-x-1">
                    <span>{service.ctaLabel[currentLang]}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <span className="text-[10px] font-mono text-stone-400">0{idx + 1} / 0{filteredServices.length}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Concierge Callout Banner */}
        <div className="mt-14 bg-white/90 border border-stone-300/80 rounded-2xl p-6 sm:p-8 backdrop-blur-md shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <span className="text-[10px] tracking-[0.25em] text-[#8c6d3f] uppercase font-bold">
              24/7 CONCIERGE ASSISTANCE
            </span>
            <h4 className="font-serif text-lg sm:text-xl text-stone-900 font-normal">
              有特定的旅遊規劃或特殊布置需求？
            </h4>
            <p className="text-xs text-stone-500 font-light">
              歡迎隨時致電管家或透過 LINE 官方諮詢，我們將竭誠為您客製專屬方案。
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
            <a
              href="tel:0966733338"
              className="px-5 py-2.5 rounded-lg border border-stone-300 hover:border-stone-900 text-stone-900 text-xs font-semibold tracking-wider flex items-center space-x-2 transition-colors bg-white"
            >
              <Phone className="w-3.5 h-3.5 text-[#8c6d3f]" />
              <span>0966-733-338</span>
            </a>

            <a
              href="https://line.me/ti/p/~@tanghome"
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2.5 rounded-lg bg-[#06c755] hover:bg-[#05b34c] text-white text-xs font-bold tracking-wider flex items-center space-x-2 shadow-xs transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>LINE 官方線上諮詢</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
