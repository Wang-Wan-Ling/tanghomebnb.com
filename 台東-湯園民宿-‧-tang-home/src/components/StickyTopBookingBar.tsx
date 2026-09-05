import React, { useState, useEffect } from 'react';
import { Calendar, Phone, MessageCircle, ExternalLink, ArrowRight } from 'lucide-react';
import { Language, Currency } from '../types';
import { translations } from '../data/translations';
import { openOwlNestBooking } from '../utils/owlnest';
import { TangHomeMountainIcon } from './TangHomeLogo';

interface StickyTopBookingBarProps {
  currentLang: Language;
  currentCurrency: Currency;
  onOpenBooking?: (params?: {
    checkIn?: string;
    checkOut?: string;
    adults?: number;
    roomId?: string;
  }) => void;
  onOpenConcierge?: () => void;
}

export const StickyTopBookingBar: React.FC<StickyTopBookingBarProps> = ({
  currentLang,
  onOpenConcierge,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show when scrolled down past hero
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDirectOwlNest = () => {
    openOwlNestBooking({
      lang: currentLang,
    });
  };

  if (!isVisible) return null;

  return (
    <div
      id="sticky-top-booking-bar"
      className="fixed top-0 left-0 right-0 z-40 bg-[#1c1917]/95 text-[#f5f2eb] backdrop-blur-md border-b border-stone-800 shadow-lg py-2.5 px-4 sm:px-8 transition-all duration-300 animate-in slide-in-from-top-2"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        {/* Brand Micro Emblem & Title */}
        <div className="flex items-center space-x-3 shrink-0">
          <TangHomeMountainIcon size={22} color="#d1b07c" />
          <div className="flex flex-col">
            <span className="font-serif text-sm sm:text-base tracking-[0.2em] font-normal text-stone-100 leading-tight">
              湯園民宿
            </span>
            <span className="text-[9px] tracking-widest text-[#d1b07c]">
              台東縣合法民宿第 1639 號
            </span>
          </div>
        </div>

        {/* Center Tagline / Address */}
        <div className="hidden md:flex items-center space-x-4 text-xs text-stone-300 font-light">
          <span>台東市中興路一段225號</span>
          <span className="text-stone-600">|</span>
          <span>全棟室內電梯直達 ‧ 免治馬桶 ‧ 自助洗衣與單車借用</span>
        </div>

        {/* Right Actions: Direct OwlNest Booking */}
        <div className="flex items-center space-x-3">
          {onOpenConcierge && (
            <button
              onClick={onOpenConcierge}
              className="hidden sm:flex items-center space-x-1.5 px-3 py-1.5 rounded-full border border-stone-700 text-stone-300 hover:text-white hover:border-stone-500 text-xs font-light transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#d1b07c]" />
              <span>官方 LINE: @tang225</span>
            </button>
          )}

          <button
            onClick={handleDirectOwlNest}
            className="px-5 py-1.5 rounded-full bg-[#8c6d3f] hover:bg-[#a17e4a] text-white text-xs font-medium tracking-wider flex items-center space-x-1.5 shadow-xs transition-all duration-200 whitespace-nowrap cursor-pointer"
          >
            <Calendar className="w-3.5 h-3.5 shrink-0" />
            <span className="whitespace-nowrap">即時預訂住宿</span>
          </button>
        </div>
      </div>
    </div>
  );
};
