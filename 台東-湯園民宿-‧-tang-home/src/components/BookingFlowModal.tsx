import React, { useState, useEffect } from 'react';
import {
  X,
  Calendar,
  Users,
  RefreshCw,
  Maximize2,
  Minimize2,
  BedDouble,
  ShieldCheck,
  Phone,
  MessageSquare,
  Sparkles,
  CheckCircle2,
} from 'lucide-react';
import { Language, Currency, BookingState } from '../types';
import { translations } from '../data/translations';
import { ROOM_TYPES } from '../data/tangHomeData';
import { formatPrice } from '../utils/currency';
import { buildOwlNestUrl } from '../utils/owlnest';

interface BookingFlowModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentLang: Language;
  currentCurrency: Currency;
  initialRoomId?: string;
  initialCheckIn?: string;
  initialCheckOut?: string;
  initialAdults?: number;
}

export const BookingFlowModal: React.FC<BookingFlowModalProps> = ({
  isOpen,
  onClose,
  currentLang,
  currentCurrency,
  initialRoomId,
  initialCheckIn,
  initialCheckOut,
  initialAdults,
}) => {
  const t = translations[currentLang];

  // Helper date generators
  const today = new Date();
  const defaultCheckIn = new Date(today);
  defaultCheckIn.setDate(today.getDate() + 1);
  const defaultCheckOut = new Date(today);
  defaultCheckOut.setDate(today.getDate() + 3);

  const formatDate = (d: Date) => d.toISOString().split('T')[0];

  const [isFullscreen, setIsFullscreen] = useState(false);
  const [iframeLoading, setIframeLoading] = useState(true);
  const [iframeKey, setIframeKey] = useState(0);

  const [bookingState, setBookingState] = useState<BookingState>({
    checkInDate: initialCheckIn || formatDate(defaultCheckIn),
    checkOutDate: initialCheckOut || formatDate(defaultCheckOut),
    nights: 2,
    adults: initialAdults || 2,
    children: 0,
    selectedRoomId: initialRoomId || 'all',
    selectedAddOns: ['exp-tang-breakfast'],
    guestName: '',
    guestEmail: '',
    guestPhone: '',
    specialRequests: '',
    estimatedArrival: '15:00 - 17:00',
    promoCode: '',
    discountPercentage: 0,
  });

  // Update nights whenever dates change
  useEffect(() => {
    const d1 = new Date(bookingState.checkInDate);
    const d2 = new Date(bookingState.checkOutDate);
    const diffTime = d2.getTime() - d1.getTime();
    const diffDays = Math.max(1, Math.ceil(diffTime / (1000 * 60 * 60 * 24)));
    setBookingState((prev) => ({ ...prev, nights: diffDays }));
  }, [bookingState.checkInDate, bookingState.checkOutDate]);

  useEffect(() => {
    if (initialRoomId) {
      setBookingState((prev) => ({ ...prev, selectedRoomId: initialRoomId }));
    }
  }, [initialRoomId]);

  if (!isOpen) return null;

  // Dynamic OwlNest URL for current state
  const currentOwlNestUrl = buildOwlNestUrl({
    lang: currentLang,
    start: bookingState.checkInDate,
    end: bookingState.checkOutDate,
    adult: bookingState.adults,
    child: bookingState.children,
    infant: 0,
    roomId: bookingState.selectedRoomId !== 'all' ? bookingState.selectedRoomId : undefined,
  });

  const handleRefreshIframe = () => {
    setIframeLoading(true);
    setIframeKey((prev) => prev + 1);
  };

  return (
    <div
      id="booking-flow-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/70 backdrop-blur-md animate-in fade-in duration-200"
    >
      <div
        className={`relative w-full bg-white border border-stone-200 rounded-3xl overflow-hidden shadow-2xl flex flex-col text-[#1c1c1c] transition-all duration-300 ${
          isFullscreen ? 'w-full h-full max-w-none max-h-none rounded-none' : 'max-w-6xl max-h-[96vh]'
        }`}
      >
        {/* Top Synchronized Control Header */}
        <div className="px-4 sm:px-6 py-3.5 border-b border-stone-200 bg-[#fbf9f5] flex flex-wrap items-center justify-between gap-3">
          {/* Badge & Title */}
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <div>
                <div className="flex items-center space-x-2">
                  <span className="text-[10px] uppercase tracking-ultra-wide text-[#b89366] font-bold">
                    奧丁丁 OWLNEST 官方即時同步
                  </span>
                  <span className="hidden sm:inline-block px-2 py-0.5 rounded-md bg-emerald-100/90 text-emerald-800 text-[10px] font-semibold">
                    全館即時空房 ‧ 線上刷卡
                  </span>
                </div>
                <h2 className="font-serif text-base sm:text-lg text-[#1c1c1c] font-normal leading-tight">
                  湯園民宿 ‧ 線上預約訂房系統
                </h2>
              </div>
            </div>
          </div>

          {/* Quick Date / Guest Toolbar */}
          <div className="flex flex-wrap items-center gap-2 text-xs">
            {/* Check-in */}
            <div className="flex items-center space-x-1.5 bg-white px-2.5 py-1.5 rounded-xl border border-stone-300">
              <Calendar className="w-3.5 h-3.5 text-[#b89366]" />
              <span className="text-[10px] text-stone-500 font-medium hidden md:inline">入住:</span>
              <input
                type="date"
                value={bookingState.checkInDate}
                onChange={(e) => {
                  setBookingState({ ...bookingState, checkInDate: e.target.value });
                  setIframeLoading(true);
                }}
                className="text-xs font-semibold text-stone-900 bg-transparent focus:outline-none"
              />
            </div>

            {/* Check-out */}
            <div className="flex items-center space-x-1.5 bg-white px-2.5 py-1.5 rounded-xl border border-stone-300">
              <Calendar className="w-3.5 h-3.5 text-[#b89366]" />
              <span className="text-[10px] text-stone-500 font-medium hidden md:inline">退房:</span>
              <input
                type="date"
                value={bookingState.checkOutDate}
                min={bookingState.checkInDate}
                onChange={(e) => {
                  setBookingState({ ...bookingState, checkOutDate: e.target.value });
                  setIframeLoading(true);
                }}
                className="text-xs font-semibold text-stone-900 bg-transparent focus:outline-none"
              />
            </div>

            {/* Guests */}
            <div className="flex items-center space-x-1 bg-white px-2.5 py-1.5 rounded-xl border border-stone-300">
              <Users className="w-3.5 h-3.5 text-[#b89366]" />
              <select
                value={bookingState.adults}
                onChange={(e) => {
                  setBookingState({ ...bookingState, adults: Number(e.target.value) });
                  setIframeLoading(true);
                }}
                className="text-xs font-semibold text-stone-900 bg-transparent focus:outline-none"
              >
                <option value={1}>1 成人</option>
                <option value={2}>2 成人</option>
                <option value={3}>3 成人</option>
                <option value={4}>4 成人</option>
                <option value={5}>5 成人</option>
                <option value={6}>6 成人</option>
              </select>
            </div>

            {/* Refresh / Fullscreen / Close */}
            <div className="flex items-center space-x-1 pl-1">
              <button
                type="button"
                onClick={handleRefreshIframe}
                title="重新整理同步"
                className="p-2 rounded-xl bg-white border border-stone-300 text-stone-600 hover:text-stone-900 hover:bg-stone-100 transition-colors"
              >
                <RefreshCw className={`w-3.5 h-3.5 ${iframeLoading ? 'animate-spin text-[#8c6d3f]' : ''}`} />
              </button>

              <button
                type="button"
                onClick={() => setIsFullscreen(!isFullscreen)}
                title={isFullscreen ? '還原視窗' : '全螢幕放大'}
                className="p-2 rounded-xl bg-white border border-stone-300 text-stone-600 hover:text-stone-900 hover:bg-stone-100 transition-colors hidden sm:inline-flex"
              >
                {isFullscreen ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
              </button>

              <button
                type="button"
                onClick={onClose}
                title="關閉"
                className="p-2 rounded-xl bg-stone-200 text-stone-700 hover:text-stone-950 hover:bg-stone-300 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Room Types Quick Pill Selector */}
        <div className="px-4 sm:px-6 py-2 bg-stone-100/90 border-b border-stone-200 flex items-center space-x-2 overflow-x-auto scrollbar-none text-xs">
          <span className="text-[11px] font-semibold text-stone-500 shrink-0 flex items-center space-x-1">
            <BedDouble className="w-3.5 h-3.5" />
            <span>房型篩選：</span>
          </span>

          <button
            type="button"
            onClick={() => {
              setBookingState({ ...bookingState, selectedRoomId: 'all' });
              setIframeLoading(true);
            }}
            className={`px-3 py-1 rounded-lg text-xs font-medium shrink-0 transition-all ${
              bookingState.selectedRoomId === 'all'
                ? 'bg-stone-900 text-white shadow-xs'
                : 'bg-white text-stone-700 hover:bg-stone-200 border border-stone-300'
            }`}
          >
            全部房型
          </button>

          {ROOM_TYPES.map((room) => {
            const isSelected = bookingState.selectedRoomId === room.id;
            return (
              <button
                key={room.id}
                type="button"
                onClick={() => {
                  setBookingState({ ...bookingState, selectedRoomId: room.id });
                  setIframeLoading(true);
                }}
                className={`px-3 py-1 rounded-lg text-xs font-medium shrink-0 transition-all ${
                  isSelected
                    ? 'bg-[#8c6d3f] text-white shadow-xs'
                    : 'bg-white text-stone-700 hover:bg-stone-200 border border-stone-300'
                }`}
              >
                {room.name[currentLang].split(' ')[0]} ({formatPrice(room.basePriceTWD, currentCurrency)})
              </button>
            );
          })}
        </div>

        {/* Main Embedded OwlNest Engine Area */}
        <div className="relative flex-1 bg-stone-100 flex flex-col min-h-[500px] sm:min-h-[580px] lg:min-h-[640px]">
          {/* Loading state indicator */}
          {iframeLoading && (
            <div className="absolute inset-0 bg-stone-50/95 backdrop-blur-xs flex flex-col items-center justify-center z-10">
              <div className="w-10 h-10 border-3 border-[#c4a67d] border-t-transparent rounded-full animate-spin mb-3" />
              <p className="text-xs font-bold text-stone-900">正在與奧丁丁 OwlNest 系統同步即時房況...</p>
              <p className="text-[11px] text-stone-500 mt-1">您可在本視窗直接選擇房型、輸入資料與完成信用卡安全訂房</p>
            </div>
          )}

          {/* Fully Interactive Embedded Frame */}
          <iframe
            key={iframeKey}
            src={currentOwlNestUrl}
            title="湯園民宿 OwlNest 即時訂房系統"
            onLoad={() => setIframeLoading(false)}
            className="w-full flex-1 border-0 bg-white"
            allow="payment; camera; microphone; geolocation"
          />
        </div>

        {/* Modal Bottom Footer Info Bar */}
        <div className="px-4 sm:px-6 py-2.5 bg-[#fbf9f5] border-t border-stone-200 flex flex-wrap items-center justify-between text-xs text-stone-600 gap-2">
          <div className="flex items-center space-x-3 text-[11px]">
            <span className="flex items-center space-x-1 text-emerald-700 font-medium">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>台東合法民宿第 1639 號直營</span>
            </span>
            <span className="hidden sm:inline text-stone-400">|</span>
            <span className="hidden sm:inline text-stone-500">訂房專線：0966-733-338</span>
            <span className="hidden md:inline text-stone-400">|</span>
            <span className="hidden md:inline text-stone-500">LINE ID: @tanghome</span>
          </div>

          <div className="flex items-center space-x-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-1.5 bg-stone-200 hover:bg-stone-300 text-stone-800 rounded-lg text-xs font-medium transition-colors"
            >
              關閉訂房視窗
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
