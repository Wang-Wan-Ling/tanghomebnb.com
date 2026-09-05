import React from 'react';
import { Mail, Instagram, Facebook, MessageSquare, Phone, MapPin, ShieldCheck, MessageCircle } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { openOwlNestBooking } from '../utils/owlnest';
import { TangHomeLogo, TangHomeMountainIcon } from './TangHomeLogo';

interface FooterProps {
  currentLang: Language;
  onOpenBooking?: () => void;
  onOpenConcierge: () => void;
  onOpenPhotoGallery?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ currentLang, onOpenBooking, onOpenConcierge, onOpenPhotoGallery }) => {
  const t = translations[currentLang];

  return (
    <footer className="bg-[#11100f] text-[#e8e4dc] pt-14 pb-24 sm:pb-16 border-t border-[#262320]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-[#262320]">
          {/* Col 1: Brand */}
          <div className="space-y-4 md:col-span-1">
            <div className="flex items-center">
              <TangHomeLogo variant="full" color="#d1b07c" textColor="#f5f2eb" />
            </div>
            <p className="text-xs text-stone-400 leading-relaxed font-light">
              台東市中興路一段225號 ‧ 台東縣合法民宿第 1639 號。融合東方雅致意境與當代奢華，備有室內電梯直達各樓層、專屬免費停車與私廚元氣早餐。
            </p>
            <div className="flex space-x-3 pt-2">
              <a
                href="https://line.me/ti/p/~@tang225"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full border border-stone-700 flex items-center justify-center text-stone-400 hover:text-[#06c755] hover:border-[#06c755] transition-colors"
                title="LINE @tang225"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full border border-stone-700 flex items-center justify-center text-stone-400 hover:text-[#d1b07c] hover:border-[#d1b07c] transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full border border-stone-700 flex items-center justify-center text-stone-400 hover:text-[#d1b07c] hover:border-[#d1b07c] transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <button
                onClick={onOpenConcierge}
                className="w-8 h-8 rounded-full border border-stone-700 flex items-center justify-center text-stone-400 hover:text-[#d1b07c] hover:border-[#d1b07c] transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div className="space-y-3">
            <span className="text-[11px] uppercase tracking-widest text-[#d1b07c] font-semibold block">
              探索居所
            </span>
            <ul className="space-y-2 text-xs text-stone-300">
              <li><a href="#suites" className="hover:text-[#d1b07c] transition-colors">典藏居所</a></li>
              <li><a href="#explore-slider" className="hover:text-[#d1b07c] transition-colors">探索與藝術</a></li>
              <li><a href="#location" className="hover:text-[#d1b07c] transition-colors">交通指引</a></li>
              <li><a href="#faq" className="hover:text-[#d1b07c] transition-colors">入住須知</a></li>
              {onOpenPhotoGallery && (
                <li>
                  <button onClick={onOpenPhotoGallery} className="hover:text-[#d1b07c] transition-colors cursor-pointer text-left">
                    湯園圖片庫
                  </button>
                </li>
              )}
            </ul>
          </div>

          {/* Col 3: Contact & Butler */}
          <div className="space-y-3">
            <span className="text-[11px] uppercase tracking-widest text-[#d1b07c] font-semibold block">
              預約專線與管家
            </span>
            <ul className="space-y-2.5 text-xs text-stone-300">
              <li className="flex items-center space-x-2">
                <Phone className="w-3.5 h-3.5 text-[#d1b07c]" />
                <a href="tel:0966733338" className="hover:text-[#d1b07c] font-mono">0966-733-338</a>
              </li>
              <li className="flex items-center space-x-2">
                <MessageCircle className="w-3.5 h-3.5 text-[#06c755]" />
                <a href="https://line.me/ti/p/~@tang225" target="_blank" rel="noreferrer" className="hover:text-[#06c755] font-mono">LINE: @tang225</a>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-3.5 h-3.5 text-[#d1b07c]" />
                <span>TANGBNB225@gmail.com</span>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="w-3.5 h-3.5 text-[#d1b07c] mt-0.5 shrink-0" />
                <span className="leading-snug">台東市中興路一段225號</span>
              </li>
              <li className="flex items-center space-x-2 pt-1 text-[11px] text-stone-400">
                <ShieldCheck className="w-3.5 h-3.5 text-[#d1b07c]" />
                <span>姐妹館：上弦月民宿 (合法第 1238 號)</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Quick Action */}
          <div className="space-y-3">
            <span className="text-[11px] uppercase tracking-widest text-[#d1b07c] font-semibold block">
              即時預約
            </span>
            <p className="text-xs text-stone-400 leading-relaxed">
              官方直訂保證最優價格，享免費私廚元氣朝食、專屬平面停車位與全棟電梯設施。
            </p>
            <button
              onClick={() => openOwlNestBooking({ lang: currentLang })}
              className="w-full py-2.5 bg-[#b8c9ba] hover:bg-[#a6bbaa] text-[#1c1917] font-semibold text-xs tracking-wider rounded-full shadow-sm transition-colors font-serif"
            >
              預訂住宿
            </button>
          </div>
        </div>

        {/* Bottom Legal & License */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-stone-500 gap-3">
          <div>
            <span>© {new Date().getFullYear()} 湯園民宿 版權所有</span>
          </div>
          <div className="flex items-center space-x-2">
            <span>台東縣政府合法民宿登記第 1639 號</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

