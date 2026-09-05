import React, { useState } from 'react';
import {
  X,
  CreditCard,
  Building2,
  Copy,
  Check,
  ShieldCheck,
  MessageCircle,
  Phone,
  Sparkles,
  Info,
  CalendarCheck,
} from 'lucide-react';
import { Language } from '../types';

interface PaymentGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentLang: Language;
}

export const PaymentGuideModal: React.FC<PaymentGuideModalProps> = ({
  isOpen,
  onClose,
  currentLang,
}) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText('0716-968-016666');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const paymentMethods = [
    { name: 'LINE Pay', type: '行動支付' },
    { name: 'Apple Pay', type: '行動支付' },
    { name: '台灣 Pay', type: '行動支付' },
    { name: '全支付', type: '行動支付' },
    { name: '悠遊付', type: '行動支付' },
    { name: '全盈+PAY', type: '行動支付' },
    { name: '國民旅遊卡特約', type: '國旅卡' },
    { name: 'VISA / MasterCard / JCB', type: '信用卡' },
    { name: '台北富邦', type: '信用卡' },
    { name: '微信支付 / 支付寶', type: '跨境支付' },
    { name: '現金支付', type: '現付' },
  ];

  return (
    <div
      id="payment-guide-modal"
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
              <CreditCard className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[10px] tracking-[0.2em] text-[#d1b07c] uppercase font-medium block">
                多元付款與匯款指引
              </span>
              <h3 className="font-serif text-lg sm:text-xl font-normal text-stone-100">
                訂房付款方式與匯款帳號
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

        {/* Modal Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-sm">
          {/* Bank Transfer Card - Luxury Gold Aesthetic */}
          <div className="bg-gradient-to-br from-[#24211e] to-[#151312] text-white p-5 rounded-xl border border-[#8c6d3f]/40 shadow-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#8c6d3f]/10 rounded-full blur-2xl pointer-events-none" />
            
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2">
                <Building2 className="w-4 h-4 text-[#d1b07c]" />
                <span className="text-xs text-[#d1b07c] font-medium tracking-wide">玉山銀行 ‧ 匯款帳戶</span>
              </div>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#8c6d3f]/30 border border-[#8c6d3f]/50 text-[#e6cca8]">
                代碼 808
              </span>
            </div>

            <div className="space-y-3">
              <div className="flex justify-between items-baseline text-xs text-stone-300">
                <span>分行機構</span>
                <span className="text-white font-medium">台東簡易分行</span>
              </div>
              <div className="flex justify-between items-baseline text-xs text-stone-300">
                <span>戶名</span>
                <span className="text-white font-medium">邱美惠</span>
              </div>
              
              <div className="pt-2">
                <span className="text-[11px] text-stone-400 block mb-1">銀行帳號</span>
                <div className="flex items-center justify-between bg-black/40 border border-stone-700/80 rounded-lg px-3.5 py-2">
                  <span className="font-mono text-base sm:text-lg font-bold tracking-widest text-[#d1b07c]">
                    0716-968-016666
                  </span>
                  <button
                    onClick={handleCopy}
                    className="flex items-center space-x-1.5 px-3 py-1 rounded bg-[#8c6d3f] hover:bg-[#775a30] text-white text-xs font-medium transition-all shadow-xs"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-emerald-300" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copied ? '已複製' : '複製帳號'}</span>
                  </button>
                </div>
              </div>
            </div>

            <p className="mt-3 text-[11px] text-stone-400 leading-tight">
              ※ 請於訂房確認後 3 日內完成全額 100% 匯款，並通知末 5 碼以利為您保留房型。
            </p>
          </div>

          {/* Accepted Payment Badges */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-stone-700 uppercase tracking-wider flex items-center space-x-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#8c6d3f]" />
              <span>現場多元支付支援</span>
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {paymentMethods.map((pm, idx) => (
                <div
                  key={idx}
                  className="p-2.5 rounded-lg bg-stone-50 border border-stone-200/80 flex flex-col justify-center"
                >
                  <span className="text-[10px] text-[#8c6d3f] font-medium">{pm.type}</span>
                  <span className="text-xs font-semibold text-stone-800">{pm.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Cancellation Policy Brief */}
          <div className="p-4 rounded-xl bg-amber-50/60 border border-amber-200/70 text-xs space-y-2 text-stone-700 font-light">
            <div className="flex items-center space-x-1.5 text-amber-900 font-medium">
              <ShieldCheck className="w-4 h-4 text-amber-700" />
              <span>退訂與改期保障政策</span>
            </div>
            <p className="leading-relaxed">
              ‧ <strong>入住前 3 日（含）</strong>：全額退還訂金，或全額保留一年內改期一次。<br />
              ‧ <strong>入住前 1~2 日</strong>：退還 50% 訂金。<br />
              ‧ <strong>入住當天</strong>：恕不退還訂金。<br />
              ‧ <strong>天災保障</strong>：遇颱風等不可抗力依台東縣政府停班停課公告享 100% 退款或保留。
            </p>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="bg-stone-50 border-t border-stone-200 px-6 py-3.5 flex flex-col sm:flex-row items-center justify-between gap-2.5 shrink-0">
          <span className="text-xs text-stone-500 font-light hidden sm:inline">
            匯款後請透過以下管道告知末 5 碼
          </span>
          <div className="flex items-center space-x-2 w-full sm:w-auto">
            <a
              href="https://line.me/ti/p/~@tang225"
              target="_blank"
              rel="noreferrer"
              className="flex-1 sm:flex-initial px-4 py-2 rounded-lg bg-[#06c755] hover:bg-[#05b34c] text-white text-xs font-semibold flex items-center justify-center space-x-1.5 transition-colors shadow-xs"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>LINE 對帳通知 (@tang225)</span>
            </a>
            <a
              href="tel:0966733338"
              className="px-3.5 py-2 rounded-lg border border-stone-300 hover:bg-white text-stone-800 text-xs font-medium flex items-center justify-center space-x-1 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#8c6d3f]" />
              <span>致電告知</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
