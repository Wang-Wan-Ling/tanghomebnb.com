import React, { useState } from 'react';
import { Calendar, Users, RefreshCw, Maximize2, ShieldCheck, Sparkles, CreditCard, CheckCircle2, ChevronRight, BedDouble, Info } from 'lucide-react';
import { Language, Currency } from '../types';
import { translations } from '../data/translations';
import { ROOM_TYPES } from '../data/tangHomeData';
import { formatPrice } from '../utils/currency';
import { buildOwlNestUrl } from '../utils/owlnest';

interface LiveBookingSectionProps {
  currentLang: Language;
  currentCurrency: Currency;
  onOpenFullscreenBooking?: (params?: { checkIn?: string; checkOut?: string; adults?: number; roomId?: string }) => void;
}

export const LiveBookingSection: React.FC<LiveBookingSectionProps> = ({
  currentLang,
  currentCurrency,
  onOpenFullscreenBooking,
}) => {
  const t = translations[currentLang];

  // Helper date generators
  const today = new Date();
  const defaultCheckIn = new Date(today);
  defaultCheckIn.setDate(today.getDate() + 1);
  const defaultCheckOut = new Date(today);
  defaultCheckOut.setDate(today.getDate() + 3);

  const formatDate = (d: Date) => d.toISOString().split('T')[0];

  const [checkInDate, setCheckInDate] = useState(formatDate(defaultCheckIn));
  const [checkOutDate, setCheckOutDate] = useState(formatDate(defaultCheckOut));
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [selectedRoomId, setSelectedRoomId] = useState<string>('all');
  const [iframeKey, setIframeKey] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  // Compute live URL
  const currentOwlNestUrl = buildOwlNestUrl({
    lang: currentLang,
    start: checkInDate,
    end: checkOutDate,
    adult: adults,
    child: children,
    infant: 0,
    roomId: selectedRoomId !== 'all' ? selectedRoomId : undefined,
  });

  const handleRefresh = () => {
    setIsLoading(true);
    setIframeKey((prev) => prev + 1);
  };

  return (
    <section id="live-booking" className="py-16 sm:py-24 bg-[#f4f0e8] text-[#1c1c1c] relative overflow-hidden border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-emerald-100/80 border border-emerald-300/80 text-emerald-800 text-xs font-semibold mb-3">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>奧丁丁 OwlNest 官方訂房系統 ‧ 全館即時房況連線</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-4xl text-[#1c1c1c] tracking-tight font-normal">
            線上即時預約訂房
          </h2>
          <p className="text-sm text-stone-600 mt-2.5 font-light leading-relaxed">
            直接與湯園民宿官方訂房引擎完全同步，即時查詢空房狀態、平假日獨家專案優惠與立即線上信用卡擔保預訂。
          </p>
        </div>

        {/* Live Controller Toolbar */}
        <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-md border border-stone-200/90 mb-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Check-In Date */}
            <div>
              <label className="text-[11px] font-semibold text-stone-600 flex items-center space-x-1.5 mb-1.5">
                <Calendar className="w-3.5 h-3.5 text-[#b89366]" />
                <span>入住日期 (Check-in)</span>
              </label>
              <input
                type="date"
                value={checkInDate}
                onChange={(e) => {
                  setCheckInDate(e.target.value);
                  setIsLoading(true);
                }}
                className="w-full bg-stone-50 hover:bg-white text-xs font-semibold text-stone-900 p-2.5 rounded-xl border border-stone-300 focus:border-[#c4a67d] focus:outline-none transition-colors"
              />
            </div>

            {/* Check-Out Date */}
            <div>
              <label className="text-[11px] font-semibold text-stone-600 flex items-center space-x-1.5 mb-1.5">
                <Calendar className="w-3.5 h-3.5 text-[#b89366]" />
                <span>退房日期 (Check-out)</span>
              </label>
              <input
                type="date"
                value={checkOutDate}
                min={checkInDate}
                onChange={(e) => {
                  setCheckOutDate(e.target.value);
                  setIsLoading(true);
                }}
                className="w-full bg-stone-50 hover:bg-white text-xs font-semibold text-stone-900 p-2.5 rounded-xl border border-stone-300 focus:border-[#c4a67d] focus:outline-none transition-colors"
              />
            </div>

            {/* Guests Selection */}
            <div>
              <label className="text-[11px] font-semibold text-stone-600 flex items-center space-x-1.5 mb-1.5">
                <Users className="w-3.5 h-3.5 text-[#b89366]" />
                <span>入住人數 ({adults} 成人 + {children} 孩童)</span>
              </label>
              <div className="grid grid-cols-2 gap-2">
                <select
                  value={adults}
                  onChange={(e) => {
                    setAdults(Number(e.target.value));
                    setIsLoading(true);
                  }}
                  className="w-full bg-stone-50 hover:bg-white text-xs font-semibold text-stone-900 p-2.5 rounded-xl border border-stone-300 focus:border-[#c4a67d] focus:outline-none transition-colors"
                >
                  <option value={1}>1 位成人</option>
                  <option value={2}>2 位成人</option>
                  <option value={3}>3 位成人</option>
                  <option value={4}>4 位成人</option>
                  <option value={5}>5 位成人</option>
                  <option value={6}>6 位成人</option>
                </select>

                <select
                  value={children}
                  onChange={(e) => {
                    setChildren(Number(e.target.value));
                    setIsLoading(true);
                  }}
                  className="w-full bg-stone-50 hover:bg-white text-xs font-semibold text-stone-900 p-2.5 rounded-xl border border-stone-300 focus:border-[#c4a67d] focus:outline-none transition-colors"
                >
                  <option value={0}>0 位孩童</option>
                  <option value={1}>1 位孩童</option>
                  <option value={2}>2 位孩童</option>
                  <option value={3}>3 位孩童</option>
                </select>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-end space-x-2">
              <button
                type="button"
                onClick={handleRefresh}
                title="重新整理連線"
                className="p-2.5 bg-stone-100 hover:bg-stone-200 text-stone-700 rounded-xl border border-stone-300 transition-colors flex items-center justify-center shrink-0"
              >
                <RefreshCw className={`w-4 h-4 ${isLoading ? 'animate-spin text-[#8c6d3f]' : ''}`} />
              </button>

              {onOpenFullscreenBooking && (
                <button
                  type="button"
                  onClick={() => onOpenFullscreenBooking({ checkIn: checkInDate, checkOut: checkOutDate, adults })}
                  className="flex-1 p-2.5 bg-[#8c6d3f] hover:bg-[#72572f] text-white font-semibold text-xs rounded-xl shadow-xs flex items-center justify-center space-x-1.5 transition-all"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span>全螢幕專注訂房</span>
                </button>
              )}
            </div>
          </div>

          {/* Quick Room Jump Tabs */}
          <div className="mt-4 pt-3.5 border-t border-stone-200 flex flex-wrap items-center gap-2">
            <span className="text-[11px] font-semibold text-stone-500 mr-1 flex items-center space-x-1">
              <BedDouble className="w-3.5 h-3.5" />
              <span>房型快速定位：</span>
            </span>

            <button
              type="button"
              onClick={() => {
                setSelectedRoomId('all');
                setIsLoading(true);
              }}
              className={`px-3 py-1 rounded-lg text-xs font-medium transition-all ${
                selectedRoomId === 'all'
                  ? 'bg-stone-900 text-white shadow-xs'
                  : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
              }`}
            >
              全部房型
            </button>

            {ROOM_TYPES.map((room) => (
              <button
                key={room.id}
                type="button"
                onClick={() => {
                  setSelectedRoomId(room.id);
                  setIsLoading(true);
                }}
                className={`px-3 py-1 rounded-lg text-xs font-medium transition-all ${
                  selectedRoomId === room.id
                    ? 'bg-[#8c6d3f] text-white shadow-xs'
                    : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                }`}
              >
                {room.name[currentLang].split(' ')[0]} ({formatPrice(room.basePriceTWD, currentCurrency)})
              </button>
            ))}
          </div>
        </div>

        {/* Embedded Full OwlNest Frame Container */}
        <div className="relative w-full bg-white rounded-3xl overflow-hidden shadow-xl border border-stone-300">
          {/* Frame Header Bar */}
          <div className="px-4 py-3 bg-[#1e1e1e] text-stone-200 flex flex-wrap items-center justify-between text-xs">
            <div className="flex items-center space-x-2.5">
              <div className="flex space-x-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
              </div>
              <span className="text-[11px] text-stone-400 font-mono hidden sm:inline">
                https://www.booking-owlnest.com/tangy
              </span>
            </div>

            <div className="flex items-center space-x-3 text-[11px] text-stone-300">
              <span className="flex items-center space-x-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>SSL 256-bit 安全加密直連</span>
              </span>
            </div>
          </div>

          {/* Loading Overlay */}
          {isLoading && (
            <div className="absolute inset-0 top-10 bg-stone-50/90 backdrop-blur-xs flex flex-col items-center justify-center z-10">
              <div className="w-10 h-10 border-3 border-[#c4a67d] border-t-transparent rounded-full animate-spin mb-3" />
              <p className="text-xs font-semibold text-stone-800">正在即時連線奧丁丁 OwlNest 官方訂房系統...</p>
              <p className="text-[11px] text-stone-500 mt-1">同步湯園民宿最新空房、平假日優惠房價中</p>
            </div>
          )}

          {/* The Live Interactive Frame */}
          <div className="w-full h-[680px] sm:h-[750px] md:h-[820px] bg-white">
            <iframe
              key={iframeKey}
              src={currentOwlNestUrl}
              title="湯園民宿 OwlNest 官方即時訂房系統"
              onLoad={() => setIsLoading(false)}
              className="w-full h-full border-0"
              allow="payment; camera; microphone; geolocation"
            />
          </div>
        </div>

        {/* Bottom Booking Assurance Badges */}
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="p-4 rounded-2xl bg-white/80 border border-stone-200/80 text-center">
            <ShieldCheck className="w-5 h-5 text-emerald-600 mx-auto mb-1.5" />
            <span className="text-xs font-bold text-stone-800 block">合法民宿直營保證</span>
            <span className="text-[11px] text-stone-500">台東縣第 1639 號</span>
          </div>

          <div className="p-4 rounded-2xl bg-white/80 border border-stone-200/80 text-center">
            <CreditCard className="w-5 h-5 text-emerald-600 mx-auto mb-1.5" />
            <span className="text-xs font-bold text-stone-800 block">線上信用卡擔保</span>
            <span className="text-[11px] text-stone-500">即時訂房即時確認</span>
          </div>

          <div className="p-4 rounded-2xl bg-white/80 border border-stone-200/80 text-center">
            <Sparkles className="w-5 h-5 text-emerald-600 mx-auto mb-1.5" />
            <span className="text-xs font-bold text-stone-800 block">活力元氣早餐</span>
            <span className="text-[11px] text-stone-500">免費單車與專屬停車場</span>
          </div>

          <div className="p-4 rounded-2xl bg-white/80 border border-stone-200/80 text-center">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 mx-auto mb-1.5" />
            <span className="text-xs font-bold text-stone-800 block">無障礙電梯設施</span>
            <span className="text-[11px] text-stone-500">免治馬桶全館配備</span>
          </div>
        </div>
      </div>
    </section>
  );
};
