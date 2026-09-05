import React, { useState, useMemo } from 'react';
import {
  ChevronDown,
  Plus,
  Minus,
  Search,
  HelpCircle,
  ShieldCheck,
  Sparkles,
  MessageCircle,
  Phone,
  CreditCard,
  Building2,
  Copy,
  Check,
  Clock,
  DollarSign,
  PackageCheck,
  CalendarCheck,
  Info,
  Car,
  ArrowRight,
  Receipt,
  FileText,
} from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { PROPERTY_FAQS } from '../data/tangHomeData';
import { TangHomeMountainIcon } from './TangHomeLogo';
import { PaymentGuideModal } from './PaymentGuideModal';
import { StayRulesModal } from './StayRulesModal';
import { Camera } from 'lucide-react';

interface FaqSectionProps {
  currentLang: Language;
  onOpenConcierge?: () => void;
  onOpenPhotoGallery?: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ currentLang, onOpenConcierge, onOpenPhotoGallery }) => {
  const [openFaqId, setOpenFaqId] = useState<string | null>(PROPERTY_FAQS[0]?.id || null);
  const [activeCategory, setActiveCategory] = useState<'all' | 'stay' | 'transport' | 'booking' | 'dining'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedAccount, setCopiedAccount] = useState(false);
  
  // Modals state for clean, popup-based information
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [isStayRulesModalOpen, setIsStayRulesModalOpen] = useState(false);

  const t = translations[currentLang];

  const handleCopyAccount = () => {
    navigator.clipboard.writeText('0716-968-016666');
    setCopiedAccount(true);
    setTimeout(() => setCopiedAccount(false), 2000);
  };

  const categories = [
    { id: 'all', label: currentLang === 'en' ? 'All' : currentLang === 'ja' ? 'すべて' : '全部須知' },
    { id: 'booking', label: currentLang === 'en' ? 'Rates' : currentLang === 'ja' ? '料金・支払' : '付款與定價' },
    { id: 'stay', label: currentLang === 'en' ? 'Stay' : currentLang === 'ja' ? '滞在規範' : '入住規範' },
    { id: 'transport', label: currentLang === 'en' ? 'Transport' : currentLang === 'ja' ? '交通・駐車' : '交通與停車' },
    { id: 'dining', label: currentLang === 'en' ? 'Breakfast' : currentLang === 'ja' ? '朝食・農園' : '早餐與農園' },
  ];

  const filteredFaqs = useMemo(() => {
    return PROPERTY_FAQS.filter((faq) => {
      const matchCat = activeCategory === 'all' || faq.category === activeCategory;
      if (!matchCat) return false;
      if (!searchQuery.trim()) return true;

      const q = (faq.question[currentLang] || '').toLowerCase();
      const a = (faq.answer[currentLang] || '').toLowerCase();
      const query = searchQuery.toLowerCase().trim();
      return q.includes(query) || a.includes(query);
    });
  }, [activeCategory, searchQuery, currentLang]);

  const toggleFaq = (id: string) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  return (
    <section id="faq" className="py-20 sm:py-28 bg-[#faf8f5] relative overflow-hidden border-t border-stone-200/90 text-[#1c1917]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white border border-stone-200 text-[#8c6d3f] text-[11px] font-medium tracking-[0.25em] uppercase mb-3 shadow-2xs">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>{t.faqTitle}</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-stone-900 font-normal mb-3 tracking-tight">
            入住須知 ‧ 旅宿規範與指南
          </h2>
          <p className="text-sm sm:text-base text-stone-600 font-light leading-relaxed">
            為您整理清晰透明的入住規範、多元付款方式與各項收費標準。
          </p>
        </div>

        {/* 輕奢極簡 ‧ 核心專題入口 (Clean & Elegant Quick Access) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {/* Action Card 1: 訂房付款與匯款 */}
          <button
            onClick={() => setIsPaymentModalOpen(true)}
            className="group relative bg-white border border-stone-200/90 hover:border-[#8c6d3f]/60 p-5 sm:p-6 rounded-xl shadow-2xs hover:shadow-md transition-all duration-300 text-left flex items-center justify-between"
          >
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-xl bg-[#faf8f5] border border-stone-200 group-hover:border-[#8c6d3f] group-hover:bg-[#8c6d3f]/10 flex items-center justify-center text-[#8c6d3f] transition-colors shrink-0">
                <CreditCard className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] tracking-widest uppercase font-semibold text-[#8c6d3f] block">
                  付款與匯款指引
                </span>
                <h3 className="font-serif text-base sm:text-lg font-medium text-stone-900 group-hover:text-[#8c6d3f] transition-colors">
                  付款方式與匯款帳號
                </h3>
                <p className="text-xs text-stone-500 font-light mt-0.5">
                  玉山銀行帳號、LINE Pay、國旅卡及多元支付
                </p>
              </div>
            </div>
            <div className="w-8 h-8 rounded-full bg-stone-100 group-hover:bg-[#181614] text-stone-600 group-hover:text-[#d1b07c] flex items-center justify-center shrink-0 transition-colors ml-2">
              <ArrowRight className="w-4 h-4" />
            </div>
          </button>

          {/* Action Card 2: 入住須知與收費標準 */}
          <button
            onClick={() => setIsStayRulesModalOpen(true)}
            className="group relative bg-white border border-stone-200/90 hover:border-[#8c6d3f]/60 p-5 sm:p-6 rounded-xl shadow-2xs hover:shadow-md transition-all duration-300 text-left flex items-center justify-between"
          >
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-xl bg-[#faf8f5] border border-stone-200 group-hover:border-[#8c6d3f] group-hover:bg-[#8c6d3f]/10 flex items-center justify-center text-[#8c6d3f] transition-colors shrink-0">
                <Receipt className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] tracking-widest uppercase font-semibold text-[#8c6d3f] block">
                  住宿規範與收費標準
                </span>
                <h3 className="font-serif text-base sm:text-lg font-medium text-stone-900 group-hover:text-[#8c6d3f] transition-colors">
                  入住須知與收費標準
                </h3>
                <p className="text-xs text-stone-500 font-light mt-0.5">
                  加床加被、延退規範、遺忘物品代寄等收費說明
                </p>
              </div>
            </div>
            <div className="w-8 h-8 rounded-full bg-stone-100 group-hover:bg-[#181614] text-stone-600 group-hover:text-[#d1b07c] flex items-center justify-center shrink-0 transition-colors ml-2">
              <ArrowRight className="w-4 h-4" />
            </div>
          </button>

          {/* Action Card 3: 湯園實景圖片庫 */}
          <button
            onClick={() => onOpenPhotoGallery && onOpenPhotoGallery()}
            className="group relative bg-white border border-stone-200/90 hover:border-[#8c6d3f]/60 p-5 sm:p-6 rounded-xl shadow-2xs hover:shadow-md transition-all duration-300 text-left flex items-center justify-between sm:col-span-2 lg:col-span-1"
          >
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-xl bg-[#faf8f5] border border-stone-200 group-hover:border-[#8c6d3f] group-hover:bg-[#8c6d3f]/10 flex items-center justify-center text-[#8c6d3f] transition-colors shrink-0">
                <Camera className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] tracking-widest uppercase font-semibold text-[#8c6d3f] block">
                  生活寫真與實景
                </span>
                <h3 className="font-serif text-base sm:text-lg font-medium text-stone-900 group-hover:text-[#8c6d3f] transition-colors">
                  湯園圖片庫
                </h3>
                <p className="text-xs text-stone-500 font-light mt-0.5">
                  客房、自耕農場、公設電梯與晨光朝食寫真
                </p>
              </div>
            </div>
            <div className="w-8 h-8 rounded-full bg-stone-100 group-hover:bg-[#181614] text-stone-600 group-hover:text-[#d1b07c] flex items-center justify-center shrink-0 transition-colors ml-2">
              <ArrowRight className="w-4 h-4" />
            </div>
          </button>
        </div>

        {/* Square Outer Container Frame for Accordion */}
        <div id="faq-accordion-list" className="bg-white border border-stone-300/90 rounded-none shadow-xs overflow-hidden">
          {/* Top Controls Bar: Category Pills & Search */}
          <div className="p-4 sm:p-6 bg-stone-50 border-b border-stone-200 flex flex-col md:flex-row md:items-center justify-between gap-4">
            {/* Category Pills */}
            <div className="flex flex-wrap items-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id as any)}
                  className={`px-4 py-1.5 text-xs rounded-full font-medium tracking-wide transition-all ${
                    activeCategory === cat.id
                      ? 'bg-[#181614] text-[#d1b07c] shadow-2xs font-semibold'
                      : 'bg-white text-stone-600 border border-stone-200 hover:text-stone-900 hover:border-stone-400'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Keyword Search Input */}
            <div className="relative min-w-[200px] sm:min-w-[240px]">
              <Search className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={currentLang === 'en' ? 'Search questions...' : currentLang === 'ja' ? '質問を検索...' : '搜尋付款、加床、入住規範...'}
                className="w-full pl-9 pr-3 py-1.5 bg-white border border-stone-300 rounded-full text-xs text-stone-900 placeholder:text-stone-400 focus:outline-hidden focus:border-[#8c6d3f] transition-colors"
              />
            </div>
          </div>

          {/* FAQ Accordion List */}
          <div className="divide-y divide-stone-200">
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((faq, index) => {
                const isOpen = openFaqId === faq.id;
                const catLabel = categories.find((c) => c.id === faq.category)?.label || '常見問題';
                const isPaymentFaq = faq.id === 'faq-payment-methods';

                return (
                  <div key={faq.id} className="transition-colors">
                    <button
                      onClick={() => toggleFaq(faq.id)}
                      className="w-full py-5 px-6 sm:px-8 text-left flex items-center justify-between hover:bg-stone-50/80 transition-colors focus:outline-hidden"
                    >
                      <div className="flex items-start space-x-3 sm:space-x-4 pr-4">
                        <span className="font-mono text-xs font-semibold text-[#8c6d3f] pt-0.5">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                        <div>
                          <span className="text-[10px] text-stone-600 font-light block mb-0.5">
                            {catLabel}
                          </span>
                          <span className="font-serif text-base sm:text-lg text-stone-900 font-normal leading-snug">
                            {faq.question[currentLang]}
                          </span>
                        </div>
                      </div>
                      <div className="w-7 h-7 rounded-full border border-stone-200 flex items-center justify-center text-stone-500 shrink-0 bg-white">
                        {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                      </div>
                    </button>

                    {isOpen && (
                      <div className="px-6 sm:px-8 pb-6 pt-1 text-xs sm:text-sm text-stone-700 leading-relaxed bg-stone-50/40 border-t border-stone-100 animate-in fade-in duration-200">
                        <div className="p-4 sm:p-5 bg-white border border-stone-200/80 rounded-none whitespace-pre-line font-light space-y-4">
                          <div>{faq.answer[currentLang]}</div>

                          {/* 針對付款問題特別嵌入快捷彈窗與複製按鈕 */}
                          {isPaymentFaq && (
                            <div className="pt-3 border-t border-stone-100 flex flex-wrap items-center gap-3">
                              <button
                                onClick={() => setIsPaymentModalOpen(true)}
                                className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded bg-[#181614] text-[#d1b07c] hover:bg-stone-800 text-xs font-medium transition-colors"
                              >
                                <CreditCard className="w-3.5 h-3.5" />
                                <span>開啟完整付款與匯款視窗</span>
                              </button>
                              <button
                                onClick={handleCopyAccount}
                                className="inline-flex items-center space-x-1 px-2.5 py-1 rounded bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs transition-colors"
                              >
                                {copiedAccount ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                                <span>{copiedAccount ? '已複製玉山帳號' : '複製玉山帳號 (0716-968-016666)'}</span>
                              </button>
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })
            ) : (
              <div className="py-16 text-center text-stone-500 space-y-2">
                <p className="text-sm">未找到相符的入住說明內容</p>
                <p className="text-xs text-stone-400">請嘗試更換關鍵字或點選其他類別</p>
              </div>
            )}
          </div>

          {/* Bottom Help Bar */}
          <div className="bg-stone-100/90 border-t border-stone-200 p-4 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center space-x-3 text-left">
              <TangHomeMountainIcon size={22} color="#8c6d3f" />
              <div>
                <span className="text-xs font-semibold text-stone-900 block">
                  還有其他住宿或預訂疑問？
                </span>
                <span className="text-[11px] text-stone-500 font-light">
                  湯園專屬管家隨時為您提供即時詳盡解答與行程諮詢。
                </span>
              </div>
            </div>

            <div className="flex items-center space-x-2 w-full sm:w-auto">
              <a
                href="https://line.me/ti/p/~@tang225"
                target="_blank"
                rel="noreferrer"
                className="flex-1 sm:flex-initial px-4 py-2 rounded bg-[#06c755] hover:bg-[#05b34c] text-white text-xs font-semibold flex items-center justify-center space-x-1.5 transition-colors shadow-2xs"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>LINE 專屬管家 (@tang225)</span>
              </a>
              <a
                href="tel:0966733338"
                className="px-3 py-2 rounded bg-white hover:bg-stone-50 text-stone-800 border border-stone-200 text-xs font-medium flex items-center justify-center space-x-1 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#8c6d3f]" />
                <span className="hidden sm:inline">0966-733-338</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Popups / Small Modals - No page hopping */}
      <PaymentGuideModal
        isOpen={isPaymentModalOpen}
        onClose={() => setIsPaymentModalOpen(false)}
        currentLang={currentLang}
      />

      <StayRulesModal
        isOpen={isStayRulesModalOpen}
        onClose={() => setIsStayRulesModalOpen(false)}
        currentLang={currentLang}
      />
    </section>
  );
};

