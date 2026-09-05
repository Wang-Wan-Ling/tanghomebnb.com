import React, { useState } from 'react';
import { X, Check, Phone, MessageCircle, Sparkles, Calendar, Heart, ShieldCheck, ChevronRight, Briefcase } from 'lucide-react';
import { Language } from '../types';
import { SpecialServiceItem } from '../data/specialServicesData';
import { TangHomeMountainIcon } from './TangHomeLogo';
import { FerryBookingTable } from './FerryBookingTable';
import { CorporateTravelTable } from './CorporateTravelTable';

interface SpecialServicesModalProps {
  service: SpecialServiceItem | null;
  currentLang: Language;
  onClose: () => void;
  onOpenBooking: () => void;
}

export const SpecialServicesModal: React.FC<SpecialServicesModalProps> = ({
  service,
  currentLang,
  onClose,
  onOpenBooking,
}) => {
  const [activePhotoIdx, setActivePhotoIdx] = useState(0);

  if (!service) return null;

  const photos = service.gallery && service.gallery.length > 0 ? service.gallery : [service.image];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto animate-in fade-in duration-300">
      {/* Dark backdrop blur */}
      <div
        className="fixed inset-0 bg-black/75 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-4xl bg-[#fbf9f5] rounded-2xl shadow-2xl overflow-hidden z-10 border border-stone-300 flex flex-col max-h-[92vh]">
        {/* Top Header Bar */}
        <div className="bg-[#181614] text-[#e8e4dc] px-6 py-4 flex items-center justify-between border-b border-stone-800 shrink-0">
          <div className="flex items-center space-x-3">
            <TangHomeMountainIcon size={20} color="#d1b07c" />
            <div className="flex flex-col">
              <span className="text-[10px] tracking-[0.25em] text-[#d1b07c] uppercase font-medium">
                {service.badge[currentLang]}
              </span>
              <span className="font-serif text-base sm:text-lg text-white font-normal truncate max-w-md sm:max-w-xl">
                {service.title[currentLang]}
              </span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-stone-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content Body */}
        <div className="overflow-y-auto flex-1 p-6 sm:p-8 space-y-8 text-stone-800">
          {/* Main Photo Gallery */}
          <div className="space-y-3">
            <div className="relative aspect-[16/9] sm:aspect-[21/9] rounded-xl overflow-hidden shadow-md bg-stone-200 border border-stone-300">
              <img
                src={photos[activePhotoIdx]}
                alt={service.title[currentLang]}
                className="w-full h-full object-cover transition-all duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <p className="text-sm sm:text-base font-light drop-shadow-md">
                  {service.subtitle[currentLang]}
                </p>
              </div>
            </div>

            {/* Thumbnail Selectors */}
            {photos.length > 1 && (
              <div className="flex space-x-2.5 overflow-x-auto pb-1">
                {photos.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActivePhotoIdx(idx)}
                    className={`relative w-20 h-14 rounded-lg overflow-hidden shrink-0 border-2 transition-all ${
                      activePhotoIdx === idx
                        ? 'border-[#8c6d3f] scale-105 shadow-sm'
                        : 'border-transparent opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img
                      src={img}
                      alt="thumbnail"
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Main Service Content */}
          {service.id === 'ferry-ticket-booking' ? (
            <FerryBookingTable currentLang={currentLang} />
          ) : service.id === 'business-travel-package' ? (
            /* Corporate Special Banner & Table (Single Non-duplicate Instance) */
            <CorporateTravelTable
              currentLang={currentLang}
              showActionButtons={false}
            />
          ) : (
            /* Standard Bespoke Service View */
            <>
              <div className="space-y-3">
                <div className="flex items-center space-x-2 text-[#8c6d3f]">
                  <Sparkles className="w-4 h-4" />
                  <span className="text-xs uppercase tracking-widest font-semibold">服務理念與特色介紹</span>
                </div>
                <p className="text-stone-700 font-light leading-relaxed text-sm sm:text-base whitespace-pre-line bg-white p-5 rounded-xl border border-stone-200 shadow-2xs">
                  {service.details.overview[currentLang]}
                </p>
              </div>

              {/* Highlights & Inclusions Grid for standard services */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Highlights */}
                <div className="bg-white p-5 rounded-xl border border-stone-200 shadow-2xs space-y-3">
                  <h4 className="font-serif text-base text-stone-900 font-medium flex items-center space-x-2 border-b border-stone-100 pb-2">
                    <Check className="w-4 h-4 text-[#8c6d3f]" />
                    <span>方案亮點與尊榮禮遇</span>
                  </h4>
                  <ul className="space-y-2.5 text-xs sm:text-sm text-stone-600 font-light">
                    {service.details.highlights[currentLang]?.map((item, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#8c6d3f] mt-1.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Inclusions / Practical Guide */}
                <div className="bg-white p-5 rounded-xl border border-stone-200 shadow-2xs space-y-3">
                  <h4 className="font-serif text-base text-stone-900 font-medium flex items-center space-x-2 border-b border-stone-100 pb-2">
                    <Calendar className="w-4 h-4 text-[#8c6d3f]" />
                    <span>服務說明與預約方式</span>
                  </h4>
                  <ul className="space-y-2.5 text-xs sm:text-sm text-stone-600 font-light">
                    {service.details.inclusions[currentLang]?.map((item, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#8c6d3f] mt-1.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {service.details.priceHint && (
                    <div className="mt-3 pt-3 border-t border-stone-100 text-xs text-[#8c6d3f] font-medium flex items-center space-x-1.5">
                      <ShieldCheck className="w-4 h-4" />
                      <span>{service.details.priceHint[currentLang]}</span>
                    </div>
                  )}
                </div>
              </div>
            </>
          )}
        </div>

        {/* Modal Bottom Sticky Actions */}
        <div className="bg-white border-t border-stone-200 px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          <div className="flex items-center space-x-3 text-xs text-stone-600">
            <Phone className="w-4 h-4 text-[#8c6d3f]" />
            <span>管家諮詢專線：<a href="tel:0966733338" className="font-semibold text-stone-900 hover:text-[#8c6d3f]">0966-733-338</a></span>
          </div>

          <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
            {service.id === 'ferry-ticket-booking' && (
              <a
                href="https://www.farnlin.com.tw/calendar_main.html?routestand=25&date=2026-09-05"
                target="_blank"
                rel="noreferrer"
                className="flex-1 sm:flex-initial px-4 py-2.5 rounded-lg bg-[#181614] text-[#d1b07c] hover:bg-stone-800 font-semibold text-xs tracking-wider flex items-center justify-center space-x-1.5 transition-colors shadow-2xs"
              >
                <span>即時查詢凱旋船班次</span>
              </a>
            )}

            <a
              href="https://line.me/ti/p/~@tang225"
              target="_blank"
              rel="noreferrer"
              className="flex-1 sm:flex-initial px-4 py-2.5 rounded-lg bg-[#06c755] hover:bg-[#05b34c] text-white font-medium text-xs tracking-wider flex items-center justify-center space-x-1.5 transition-colors shadow-2xs"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>{service.id === 'business-travel-package' ? '出差合約配合請加 LINE 洽詢 (@tang225)' : 'LINE 管家諮詢 (@tang225)'}</span>
            </a>

            <button
              onClick={() => {
                onClose();
                onOpenBooking();
              }}
              className="flex-1 sm:flex-initial px-4 py-2.5 rounded-lg bg-[#8c6d3f] hover:bg-[#775a30] text-white font-semibold text-xs tracking-wider flex items-center justify-center space-x-1.5 shadow-sm hover:shadow transition-all"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>即時預約訂房</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

