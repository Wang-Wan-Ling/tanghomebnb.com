import React from 'react';
import {
  X,
  Clock,
  DollarSign,
  PackageCheck,
  ShieldCheck,
  Sparkles,
  Info,
  CalendarCheck,
  Bed,
  Moon,
  Ban,
  Phone,
  MessageCircle,
} from 'lucide-react';
import { Language } from '../types';

interface StayRulesModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentLang: Language;
}

export const StayRulesModal: React.FC<StayRulesModalProps> = ({
  isOpen,
  onClose,
  currentLang,
}) => {
  if (!isOpen) return null;

  const feeItems = [
    {
      title: '加床 / 加人服務',
      price: '$600 / 人',
      note: '春節 $1,000 / 人',
      desc: '含精緻手作早餐與全套寢具備品；未滿 5 歲兒童不加床免費（每房限 1 位）。',
      icon: Bed,
    },
    {
      title: '房間加被 / 枕頭',
      price: '$100 / 件',
      note: '單件單次清潔費',
      desc: '額外加羽絨被或健康枕，請提早於入住時告知管家安排。',
      icon: Moon,
    },
    {
      title: '延後退房服務',
      price: '$100 / 小時',
      note: '最多可延後 2 小時',
      desc: '標準退房時間為 11:00，如需延退請於前一晚或當日早晨洽詢管家（視當日房況而定）。',
      icon: Clock,
    },
    {
      title: '退房遺忘物品代寄',
      price: '$100 / 件',
      note: '郵寄/宅配手續服務費',
      desc: '退房後如有遺落物品委託郵寄，每件酌收代寄處理費 $100（運費另計或採貨到付款）。費用須匯款。',
      icon: PackageCheck,
      paymentNote: '費用須匯款',
    },
    {
      title: '感應房卡遺失補發',
      price: '$200 / 張',
      note: '晶片房卡工本費',
      desc: '為維護門禁安全，晶片房卡若遺失或損壞，每張酌收工本重製費 $200 元。',
      icon: ShieldCheck,
    },
  ];

  return (
    <div
      id="stay-rules-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden border border-stone-200 text-stone-900 animate-in zoom-in-95 duration-200 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#1c1917] text-white px-6 py-5 flex items-center justify-between shrink-0">
          <div className="flex items-center space-x-2.5">
            <div className="w-8 h-8 rounded-full bg-[#8c6d3f]/20 border border-[#8c6d3f] flex items-center justify-center text-[#d1b07c]">
              <DollarSign className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[10px] tracking-[0.2em] text-[#d1b07c] uppercase font-medium block">
                入住規範與服務須知
              </span>
              <h3 className="font-serif text-lg sm:text-xl font-normal text-stone-100">
                入住須知與各項收費標準
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-stone-400 hover:text-white hover:bg-stone-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-sm">
          {/* Check-in / Check-out Key Timeline */}
          <div className="grid grid-cols-2 gap-3">
            <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200/80">
              <span className="text-[10px] uppercase tracking-wider text-[#8c6d3f] font-semibold block mb-1">
                入住時間
              </span>
              <div className="font-serif text-base font-semibold text-stone-900">15:00 - 17:00</div>
              <span className="text-[11px] text-stone-500 font-light block mt-0.5">
                17:00 後抵達提供專人引導自助入住
              </span>
            </div>

            <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200/80">
              <span className="text-[10px] uppercase tracking-wider text-[#8c6d3f] font-semibold block mb-1">
                退房時間
              </span>
              <div className="font-serif text-base font-semibold text-stone-900">上午 11:00 前</div>
              <span className="text-[11px] text-stone-500 font-light block mt-0.5">
                如需延後退房請提早告知管家
              </span>
            </div>
          </div>

          {/* Fee Schedule Cards */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-stone-700 uppercase tracking-wider flex items-center space-x-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#8c6d3f]" />
              <span>透明加值與服務收費項目</span>
            </h4>

            <div className="space-y-2.5">
              {feeItems.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-stone-50/80 border border-stone-200/80 hover:border-stone-300 transition-colors flex items-start space-x-3"
                  >
                    <div className="w-8 h-8 rounded-lg bg-white border border-stone-200 flex items-center justify-center text-[#8c6d3f] shrink-0 mt-0.5 shadow-2xs">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-baseline justify-between gap-2">
                        <div className="flex items-center flex-wrap gap-1.5">
                          <span className="text-xs font-semibold text-stone-900">{item.title}</span>
                          {item.paymentNote && (
                            <span className="inline-block bg-amber-100 text-amber-900 border border-amber-300 text-[10px] font-semibold px-1.5 py-0.5 rounded">
                              {item.paymentNote}
                            </span>
                          )}
                        </div>
                        <div className="text-right">
                          <span className="text-sm font-bold text-stone-900">{item.price}</span>
                          <span className="text-[10px] text-[#8c6d3f] ml-1 font-medium">({item.note})</span>
                        </div>
                      </div>
                      <p className="text-[11px] text-stone-500 font-light mt-0.5 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Important House Rules */}
          <div className="p-4 rounded-xl bg-amber-50/60 border border-amber-200/70 text-xs space-y-2 text-stone-700 font-light">
            <div className="flex items-center space-x-1.5 text-amber-900 font-medium">
              <Info className="w-4 h-4 text-amber-700" />
              <span>旅宿守則與環保倡議</span>
            </div>
            <ul className="space-y-1 text-[11px] leading-relaxed">
              <li>‧ <strong>全館禁菸</strong>：本館全面禁菸（包含客房、衛浴及陽台）。</li>
              <li>‧ <strong>寵物規範</strong>：為維持全體住客衛生與安寧，恕不接受寵物同行入住。</li>
              <li>‧ <strong>環保政策</strong>：自 2025/1/1 起配合環保政策，客房不主動提供一次性備品（請自備牙刷、牙膏、刮鬍刀等）。</li>
              <li>‧ <strong>寧靜時段</strong>：夜間 22:00 後請降低音量，共同維護住宿安寧品質。</li>
            </ul>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="bg-stone-50 border-t border-stone-200 px-6 py-3.5 flex items-center justify-between shrink-0">
          <span className="text-xs text-stone-500 font-light">
            如有特殊入住需求，歡迎隨時聯繫管家
          </span>
          <div className="flex items-center space-x-2">
            <a
              href="https://line.me/ti/p/~@tang225"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 rounded-lg bg-[#06c755] hover:bg-[#05b34c] text-white text-xs font-semibold flex items-center space-x-1.5 transition-colors shadow-xs"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>LINE 專屬管家 (@tang225)</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
