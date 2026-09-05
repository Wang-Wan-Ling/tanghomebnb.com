import React, { useState } from 'react';
import { X, Sparkles, Heart, Cake, Ship, Compass, Car, Phone, MessageCircle, CheckCircle2, ChevronRight, ArrowUpRight, Briefcase } from 'lucide-react';
import { Language } from '../types';
import { SPECIAL_SERVICES, SpecialServiceItem } from '../data/specialServicesData';
import { TangHomeMountainIcon } from './TangHomeLogo';
import { FerryBookingTable } from './FerryBookingTable';
import { CorporateTravelTable } from './CorporateTravelTable';

interface BespokeServicesModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentLang: Language;
  initialServiceId?: string;
}

export const BespokeServicesModal: React.FC<BespokeServicesModalProps> = ({
  isOpen,
  onClose,
  currentLang,
  initialServiceId,
}) => {
  // Filter out pure farm intro from add-on services list, focusing strictly on bespoke arrangements & add-ons
  const bespokeServices = SPECIAL_SERVICES.filter((s) => s.category !== 'farm');

  const [selectedService, setSelectedService] = useState<SpecialServiceItem>(
    bespokeServices.find((s) => s.id === initialServiceId) || bespokeServices[0]
  );

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-stone-950/80 backdrop-blur-md flex items-center justify-center p-2 sm:p-4 lg:p-6 animate-in fade-in duration-300"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl bg-[#fdfcf9] text-[#1c1917] rounded-2xl shadow-2xl border border-stone-300/80 overflow-hidden flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="bg-[#181614] text-[#f5f2eb] px-6 py-4 flex items-center justify-between border-b border-stone-800 shrink-0">
          <div className="flex items-center space-x-3">
            <TangHomeMountainIcon size={24} color="#d1b07c" />
            <div>
              <span className="text-[10px] tracking-[0.25em] text-[#d1b07c] uppercase font-mono block">
                專屬訂製服務與體驗
              </span>
              <h3 className="font-serif text-lg sm:text-xl font-normal text-stone-100">
                風雅訂製禮遇 ‧ 私廚預約、迎娶布置與旅遊代訂
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full text-stone-400 hover:text-white hover:bg-stone-800 transition-colors"
            title="關閉"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Top Select Tabs */}
        <div className="bg-stone-100/90 px-6 py-2.5 border-b border-stone-200 flex items-center space-x-2 overflow-x-auto shrink-0 scrollbar-none">
          {bespokeServices.map((service) => (
            <button
              key={service.id}
              onClick={() => setSelectedService(service)}
              className={`px-4 py-1.5 rounded-full text-xs font-medium tracking-wider transition-all whitespace-nowrap ${
                selectedService.id === service.id
                  ? 'bg-[#181614] text-[#d1b07c] shadow-xs font-semibold'
                  : 'text-stone-600 hover:text-stone-900 bg-white/80 border border-stone-200/80'
              }`}
            >
              {service.badge[currentLang]}
            </button>
          ))}
        </div>

        {/* Modal Body Content */}
        <div className="p-5 sm:p-8 overflow-y-auto space-y-8 flex-1">
          {/* Main Selected Service Showcase */}
          {selectedService.id === 'business-travel-package' ? (
            <div className="bg-white p-6 sm:p-8 rounded-xl border border-stone-200 shadow-xs">
              <CorporateTravelTable
                currentLang={currentLang}
                showActionButtons={true}
              />
            </div>
          ) : selectedService.id === 'ferry-ticket-booking' ? (
            <div className="bg-white p-6 sm:p-8 rounded-xl border border-stone-200 shadow-xs">
              <FerryBookingTable currentLang={currentLang} />
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start bg-white p-6 sm:p-8 rounded-xl border border-stone-200 shadow-xs">
              {/* Visual Media Showcase */}
              <div className="lg:col-span-6 space-y-4">
                <div className="relative aspect-[16/11] rounded-xl overflow-hidden bg-stone-900 border border-stone-300 shadow-md">
                  <img
                    src={selectedService.image}
                    alt={selectedService.title[currentLang]}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-xs text-[#8c6d3f] text-[10px] font-bold px-3 py-1 rounded-full uppercase border border-stone-200 shadow-xs">
                    {selectedService.badge[currentLang]}
                  </div>
                </div>

                {/* Inclusions & Highlights Box */}
                <div className="p-4 bg-[#faf8f5] rounded-xl border border-stone-200 space-y-2">
                  <span className="text-xs font-semibold text-[#8c6d3f] tracking-wider block">
                    服務特色包含：
                  </span>
                  <ul className="space-y-1.5">
                    {selectedService.details.highlights[currentLang]?.map((item, i) => (
                      <li key={i} className="text-xs text-stone-700 flex items-start space-x-2 font-light">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#8c6d3f] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Description, Requirements & Pricing Notes */}
              <div className="lg:col-span-6 flex flex-col justify-between space-y-5">
                <div>
                  <h4 className="font-serif text-2xl sm:text-3xl text-stone-900 font-normal leading-snug mb-3">
                    {selectedService.title[currentLang]}
                  </h4>

                  <p className="text-xs sm:text-sm text-[#8c6d3f] font-medium leading-relaxed mb-4">
                    {selectedService.subtitle[currentLang]}
                  </p>

                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-light mb-5">
                    {selectedService.details.overview[currentLang]}
                  </p>

                  {/* Logistics & Inclusions Details */}
                  <div className="space-y-2 pt-4 border-t border-stone-200 text-xs text-stone-600">
                    <span className="font-semibold text-stone-800 block mb-1">預訂與作業須知：</span>
                    {selectedService.details.inclusions[currentLang]?.map((inc, idx) => (
                      <div key={idx} className="flex items-center space-x-2 text-stone-600">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#8c6d3f]" />
                        <span>{inc}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Direct Booking/Consultation Action */}
                <div className="pt-4 border-t border-stone-200 flex justify-end">
                  <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
                    <a
                      href="https://line.me/ti/p/~@tang225"
                      target="_blank"
                      rel="noreferrer"
                      className="w-full sm:w-auto px-5 py-2.5 rounded-lg bg-[#06c755] hover:bg-[#05b34c] text-white text-xs font-bold tracking-wider flex items-center justify-center space-x-1.5 shadow-xs transition-colors cursor-pointer"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>加入官方 LINE 預訂 (@tang225)</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Quick List of All Bespoke Options */}
          <div>
            <h5 className="font-serif text-base text-stone-900 mb-3 flex items-center space-x-2">
              <span>其他風雅訂製禮遇選粹</span>
            </h5>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {bespokeServices.map((srv) => (
                <div
                  key={srv.id}
                  onClick={() => setSelectedService(srv)}
                  className={`p-4 rounded-xl border transition-all cursor-pointer ${
                    selectedService.id === srv.id
                      ? 'border-[#8c6d3f] bg-stone-50 shadow-xs'
                      : 'border-stone-200 bg-white hover:border-stone-400'
                  }`}
                >
                  <span className="text-[10px] font-bold text-[#8c6d3f] uppercase block mb-1">
                    {srv.badge[currentLang]}
                  </span>
                  <h6 className="font-serif text-sm text-stone-900 font-medium mb-1 truncate">
                    {srv.title[currentLang]}
                  </h6>
                  <p className="text-xs text-stone-500 line-clamp-2 font-light">
                    {srv.summary[currentLang]}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="bg-stone-100 px-6 py-4 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-4 shrink-0">
          <div className="text-xs text-stone-600 text-center sm:text-left">
            <span>諮詢專線：0966-733-338 ｜ LINE: @tang225 ｜ 台東合法民宿第 1639 號</span>
          </div>

          <button
            onClick={onClose}
            className="px-5 py-2 rounded-lg bg-stone-900 hover:bg-stone-800 text-white text-xs font-semibold tracking-wider transition-colors"
          >
            關閉視窗
          </button>
        </div>
      </div>
    </div>
  );
};

