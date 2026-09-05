import React, { useState } from 'react';
import { X, Phone, MessageSquare, Mail, Send, CheckCircle2, ShieldCheck } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface ConciergeContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentLang: Language;
}

export const ConciergeContactModal: React.FC<ConciergeContactModalProps> = ({
  isOpen,
  onClose,
  currentLang,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const t = translations[currentLang];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2500);
  };

  return (
    <div
      id="concierge-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-in fade-in duration-300"
    >
      <div className="relative w-full max-w-lg bg-white border border-stone-200 rounded-2xl overflow-hidden shadow-2xl p-6 sm:p-8 text-[#1c1c1c]">
        <div className="flex items-center justify-between border-b border-stone-200 pb-4 mb-6">
          <div>
            <span className="text-[10px] uppercase tracking-widest text-[#b89366] font-semibold">
              BESPOKE BUTLER & CONCIERGE
            </span>
            <h3 className="font-serif text-xl sm:text-2xl text-[#1c1c1c]">
              {t.conciergeTitle}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full border border-stone-200 text-stone-500 hover:text-stone-900 hover:border-stone-400 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="py-10 text-center space-y-3">
            <div className="w-12 h-12 rounded-full bg-[#c4a67d]/15 border border-[#c4a67d] flex items-center justify-center mx-auto text-[#8c6d3f]">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h4 className="font-serif text-xl text-[#1c1c1c]">需求已傳達專屬管家</h4>
            <p className="text-xs text-[#78716c]">管家將於 15 分鐘內透過電話或通訊軟體與您聯繫。</p>
          </div>
        ) : (
          <div className="space-y-6">
            <p className="text-xs text-[#57534e] leading-relaxed font-light">
              {t.conciergeDesc}
            </p>

            {/* Instant Contact Channels */}
            <div className="grid grid-cols-2 gap-3">
              <a
                href="https://line.me/ti/p/~@tang225"
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 hover:bg-emerald-100/70 flex items-center space-x-2.5 transition-colors"
              >
                <div className="w-7 h-7 rounded-full bg-[#06C755] flex items-center justify-center text-white shrink-0 font-bold text-xs">
                  L
                </div>
                <div className="text-left">
                  <span className="text-xs font-semibold text-stone-800 block">LINE 官方客服</span>
                  <span className="text-[10px] text-emerald-700 font-mono">@tang225</span>
                </div>
              </a>

              <a
                href="tel:0966733338"
                className="p-3 rounded-xl bg-[#fbf9f5] border border-stone-200 hover:border-[#c4a67d] flex items-center space-x-2.5 transition-colors"
              >
                <Phone className="w-5 h-5 text-[#8c6d3f] shrink-0" />
                <div className="text-left">
                  <span className="text-xs font-semibold text-[#1c1c1c] block">致電民宿專線</span>
                  <span className="text-[10px] text-[#8c6d3f]">0966-733-338</span>
                </div>
              </a>

              <a
                href="mailto:TANGBNB225@gmail.com"
                className="p-3 rounded-xl bg-[#fbf9f5] border border-stone-200 hover:border-[#c4a67d] flex items-center space-x-2.5 transition-colors"
              >
                <Mail className="w-5 h-5 text-[#78716c] shrink-0" />
                <div className="text-left">
                  <span className="text-xs font-semibold text-[#1c1c1c] block">電子信箱</span>
                  <span className="text-[10px] text-[#78716c] truncate max-w-[120px]">TANGBNB225@gmail.com</span>
                </div>
              </a>

              <div className="p-3 rounded-xl bg-[#fbf9f5] border border-stone-200 flex items-center space-x-2.5">
                <ShieldCheck className="w-5 h-5 text-[#8c6d3f] shrink-0" />
                <div className="text-left">
                  <span className="text-xs font-semibold text-[#1c1c1c] block">合法民宿</span>
                  <span className="text-[10px] text-[#78716c]">台東縣第 1639 號</span>
                </div>
              </div>
            </div>

            {/* Quick Inquiry Form */}
            <form onSubmit={handleSubmit} className="space-y-3 pt-2 border-t border-stone-200">
              <span className="text-[11px] uppercase tracking-wider text-[#78716c] block font-medium">
                留言預約管家回電 / 諮詢
              </span>
              <div className="grid grid-cols-2 gap-2">
                <input
                  type="text"
                  required
                  placeholder="旅客姓名"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-[#fbf9f5] text-xs text-[#1c1c1c] p-2.5 rounded-lg border border-stone-200 focus:border-[#c4a67d] focus:outline-none"
                />
                <input
                  type="tel"
                  required
                  placeholder="聯絡電話"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="bg-[#fbf9f5] text-xs text-[#1c1c1c] p-2.5 rounded-lg border border-stone-200 focus:border-[#c4a67d] focus:outline-none"
                />
              </div>
              <textarea
                rows={2}
                placeholder="請簡述您的需求（如包棟詢問、加人加床、跳島船票、特殊抵達時間等）"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-[#fbf9f5] text-xs text-[#1c1c1c] p-2.5 rounded-lg border border-stone-200 focus:border-[#c4a67d] focus:outline-none"
              />
              <button
                type="submit"
                className="w-full py-2.5 bg-[#c4a67d] hover:bg-[#b5956c] text-white font-semibold text-xs tracking-wider rounded-lg shadow-sm transition-colors flex items-center justify-center space-x-1.5"
              >
                <Send className="w-3.5 h-3.5" />
                <span>{t.sendInquiry}</span>
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
