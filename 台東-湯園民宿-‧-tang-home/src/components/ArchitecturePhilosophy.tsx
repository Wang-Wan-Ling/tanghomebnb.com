import React from 'react';
import { Sparkles, Shield, Compass, Gem } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface ArchitecturePhilosophyProps {
  currentLang: Language;
}

export const ArchitecturePhilosophy: React.FC<ArchitecturePhilosophyProps> = ({ currentLang }) => {
  const t = translations[currentLang];

  return (
    <section id="philosophy" className="py-24 bg-[#f9f7f2] relative overflow-hidden border-t border-stone-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Visual Gallery Layout */}
          <div className="relative grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="rounded-2xl overflow-hidden aspect-[4/5] border border-stone-200 shadow-md">
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=85"
                  alt="Architecture Stone Detail"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-4 rounded-xl bg-white border border-stone-200 shadow-sm text-center">
                <span className="font-serif text-2xl font-bold text-[#b89366] block">NO. 1639</span>
                <span className="text-[10px] text-[#78716c] uppercase tracking-wider">台東縣政府合法民宿登記</span>
              </div>
            </div>

            <div className="space-y-4 pt-8">
              <div className="p-4 rounded-xl bg-white border border-stone-200 shadow-sm text-center">
                <span className="font-serif text-2xl font-bold text-[#b89366] block">Elevator</span>
                <span className="text-[10px] text-[#78716c] uppercase tracking-wider">全棟室內電梯無障礙</span>
              </div>
              <div className="rounded-2xl overflow-hidden aspect-[4/5] border border-stone-200 shadow-md">
                <img
                  src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=85"
                  alt="Architecture Light and Shade"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="space-y-6">
            <span className="text-xs uppercase tracking-ultra-wide text-[#b89366] font-medium block">
              {t.archTitle}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1c1c1c] font-normal leading-tight">
              {t.archHeading}
            </h2>
            <div className="w-12 h-[1px] bg-[#c4a67d]/60" />
            <p className="text-sm text-[#57534e] leading-relaxed font-light">
              {t.archSubtitle}
            </p>
            <p className="text-xs sm:text-sm text-[#78716c] leading-relaxed font-light">
              在台東湯園民宿，建築以白色與橘色文化石精心砌築，白天在蔚藍晴空下呈現清麗歐美格調，入夜後投射出溫暖浪漫的柔和光暈。推門步入一樓迎賓大廳，白牆與質樸原木相映成趣，大片落地窗迎進台東明媚天光；溫馨黃光灑落在大廳牆面上由民宿老闆娘親手巧思拼貼的馬賽克藝術畫作，為每一位到訪旅人營造賓至如歸的放鬆氛圍。
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-xl bg-white border border-stone-200 shadow-sm flex items-start space-x-3">
                <Gem className="w-5 h-5 text-[#b89366] mt-0.5 shrink-0" />
                <div>
                  <h4 className="font-serif text-sm text-[#1c1c1c] font-semibold">橘白文化石與手工馬賽克</h4>
                  <p className="text-[11px] text-[#78716c] mt-1">現代歐美簡約外觀與女主人的手作馬賽克壁畫藝術。</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-stone-200 shadow-sm flex items-start space-x-3">
                <Compass className="w-5 h-5 text-[#b89366] mt-0.5 shrink-0" />
                <div>
                  <h4 className="font-serif text-sm text-[#1c1c1c] font-semibold">全棟電梯與免治馬桶</h4>
                  <p className="text-[11px] text-[#78716c] mt-1">室內電梯直達各樓層，客房全配乾濕分離與免治馬桶。</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
