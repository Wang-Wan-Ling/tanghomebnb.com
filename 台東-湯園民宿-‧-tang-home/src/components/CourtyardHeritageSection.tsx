import React from 'react';
import { Sparkles, ShieldCheck, Compass, ArrowRight, Bed, Coffee, Car, ArrowUpCircle, WashingMachine, Bike } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { TangHomeMountainIcon } from './TangHomeLogo';

interface CourtyardHeritageSectionProps {
  currentLang: Language;
  onOpenBooking: () => void;
  onOpenConcierge?: () => void;
}

export const CourtyardHeritageSection: React.FC<CourtyardHeritageSectionProps> = ({
  currentLang,
  onOpenBooking,
  onOpenConcierge,
}) => {
  const t = translations[currentLang];

  return (
    <section id="courtyard-heritage" className="py-20 sm:py-28 bg-[#fbf9f5] border-b border-stone-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Emblem & Title with Generous Breathing Room */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <div className="flex justify-center mb-5">
            <TangHomeMountainIcon size={32} color="#8c6d3f" />
          </div>
          <span className="text-[11px] uppercase tracking-[0.3em] text-[#8c6d3f] font-medium block mb-3">
            SANCTUARY IN TAITUNG
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-stone-900 font-normal tracking-tight leading-tight mb-4">
            東方雅致 ‧ 靜謐居所
          </h2>
          <div className="w-10 h-[1px] bg-[#8c6d3f] mx-auto mb-4" />
          <p className="text-sm text-stone-500 font-light max-w-lg mx-auto leading-relaxed">
            融合自然石材、無障礙室內電梯、溫水洗淨便座與溫潤木質，締造自在從容的慢活假期。
          </p>
        </div>

        {/* 2-Column Editorial Storytelling */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Image with Subtle Stamp */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-stone-200 bg-stone-100">
              <img
                src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1600&q=88"
                alt="Tang Home Courtyard Essence"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/40 via-transparent to-transparent" />
              
              {/* Traditional Seal Stamp */}
              <div className="absolute bottom-5 left-5 bg-[#9e2a2b] text-[#fbf9f5] rounded px-2.5 py-2 shadow flex flex-col items-center">
                <span className="font-serif text-xs font-medium tracking-widest writing-vertical-lr leading-tight">
                  湯園雅居
                </span>
                <span className="text-[8px] font-mono tracking-tighter opacity-80 mt-1">NO.1639</span>
              </div>
            </div>
          </div>

          {/* Right Column: Clean, Uncluttered 4 Pillars */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-3">
              <span className="text-xs text-[#8c6d3f] font-medium tracking-widest uppercase block">
                PEACEFUL RETREAT
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-stone-900 font-normal leading-snug">
                如家般溫潤，如隱世居所般悠然
              </h3>
              <p className="text-sm text-stone-500 font-light leading-relaxed">
                座落於台東市中興路一段225號，環境清幽宜人。為旅人規劃全棟室內電梯直達，貼心照拂每一位貴賓。
              </p>
            </div>

            {/* 4 Feature Pillars with clean, uncluttered layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-white border border-stone-200/80 shadow-2xs">
                <div className="flex items-center space-x-2.5 mb-1.5">
                  <div className="p-1.5 rounded-lg bg-[#8c6d3f]/10 text-[#8c6d3f]">
                    <ArrowUpCircle className="w-4 h-4" />
                  </div>
                  <span className="font-serif text-sm font-medium text-stone-900">室內無障礙電梯</span>
                </div>
                <p className="text-xs text-stone-500 font-light leading-normal">
                  全棟無障礙直達，行李與長輩出入輕鬆從容。
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-stone-200/80 shadow-2xs">
                <div className="flex items-center space-x-2.5 mb-1.5">
                  <div className="p-1.5 rounded-lg bg-[#8c6d3f]/10 text-[#8c6d3f]">
                    <Car className="w-4 h-4" />
                  </div>
                  <span className="font-serif text-sm font-medium text-stone-900">專屬免費停車</span>
                </div>
                <p className="text-xs text-stone-500 font-light leading-normal">
                  私有平面停車位，自駕自遊隨到隨停。
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-stone-200/80 shadow-2xs">
                <div className="flex items-center space-x-2.5 mb-1.5">
                  <div className="p-1.5 rounded-lg bg-[#8c6d3f]/10 text-[#8c6d3f]">
                    <Bed className="w-4 h-4" />
                  </div>
                  <span className="font-serif text-sm font-medium text-stone-900">全房型免治便座</span>
                </div>
                <p className="text-xs text-stone-500 font-light leading-normal">
                  標配恆溫洗淨便座與乾濕分離明亮衛浴。
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-stone-200/80 shadow-2xs">
                <div className="flex items-center space-x-2.5 mb-1.5">
                  <div className="p-1.5 rounded-lg bg-[#8c6d3f]/10 text-[#8c6d3f]">
                    <Bike className="w-4 h-4" />
                  </div>
                  <span className="font-serif text-sm font-medium text-stone-900">洗衣空間與單車借用</span>
                </div>
                <p className="text-xs text-stone-500 font-light leading-normal">
                  館內設自助洗衣空間，提供自行車悠遊市區。
                </p>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenBooking}
                className="bg-[#8c6d3f] hover:bg-[#775a30] text-white font-medium text-xs tracking-[0.16em] px-6 py-3 rounded-lg shadow-2xs hover:shadow-md transition-all duration-300 flex items-center space-x-2 whitespace-nowrap cursor-pointer"
              >
                <span className="whitespace-nowrap">立即預約假期</span>
                <ArrowRight className="w-3.5 h-3.5 shrink-0" />
              </button>

              <button
                onClick={onOpenConcierge}
                className="bg-white hover:bg-stone-50 text-stone-700 font-medium text-xs tracking-wider px-5 py-3 rounded-lg border border-stone-300 transition-colors"
              >
                聯絡專屬管家
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
