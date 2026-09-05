import React from 'react';
import { Utensils, Coffee, Wine, Sparkles, Clock, Compass } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface DiningSectionProps {
  currentLang: Language;
  onOpenBooking: () => void;
}

export const DiningSection: React.FC<DiningSectionProps> = ({ currentLang, onOpenBooking }) => {
  const t = translations[currentLang];

  const diningFeatures = [
    {
      title: '元氣活力精緻早餐',
      time: '07:30 - 09:30',
      desc: '每日清晨為每位入住房客現做營養均衡的美味早餐，搭配時令新鮮水果、特調飲品與熱咖啡，為您注入滿滿活力。',
      image: 'https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&w=800&q=85',
    },
    {
      title: '研磨咖啡與精選茶飲吧',
      time: '全天候 24 小時開放',
      desc: '一樓大廳設有茶水沖泡區，備有冷熱純淨飲水機、新鮮研磨咖啡機與精選高山茶包，隨時品味悠閒香醇。',
      image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=800&q=85',
    },
    {
      title: '公共廚房與微波烤箱設備',
      time: '08:00 - 22:00',
      desc: '公共休閒空間提供微波爐、烤箱、電熱水壺與用餐器具，買回台東正氣路夜市、小吃美食也能輕鬆溫熱享用。',
      image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=85',
    },
  ];

  return (
    <section id="dining" className="py-24 bg-[#f4f0e8] relative overflow-hidden border-t border-stone-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-ultra-wide text-[#b89366] font-medium block mb-3">
            {t.diningTitle}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#1c1c1c] font-normal mb-5 leading-tight">
            {t.diningHeading}
          </h2>
          <div className="w-12 h-[1px] bg-[#c4a67d]/60 mx-auto mb-5" />
          <p className="text-sm sm:text-base text-[#78716c] font-light leading-relaxed">
            {t.diningSubtitle}
          </p>
        </div>

        {/* 3 Editorial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {diningFeatures.map((item, idx) => (
            <div
              key={idx}
              className="bg-white border border-stone-200/80 hover:border-[#c4a67d]/60 rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-lg flex flex-col justify-between group"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-stone-100">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover img-luxury-zoom"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-md text-[10px] text-[#8c6d3f] flex items-center space-x-1 border border-stone-200/60 shadow-sm font-medium">
                  <Clock className="w-3 h-3 text-[#b89366]" />
                  <span>{item.time}</span>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-xl text-[#1c1c1c] mb-2 group-hover:text-[#b89366] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#78716c] leading-relaxed font-light">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
