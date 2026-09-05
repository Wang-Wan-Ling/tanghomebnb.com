import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Globe, Menu, X, Phone, Calendar, Sparkles, MapPin, MessageCircle, ShieldCheck, Search, ChevronDown, ArrowRight } from 'lucide-react';
import { Language, Currency } from '../types';
import { translations } from '../data/translations';
import { ambientAudio } from '../utils/audio';
import { openOwlNestBooking } from '../utils/owlnest';
import { TangHomeLogo } from './TangHomeLogo';

interface NavbarProps {
  currentLang: Language;
  onSelectLang: (lang: Language) => void;
  currentCurrency: Currency;
  onSelectCurrency: (curr: Currency) => void;
  onOpenBooking?: (roomId?: string) => void;
  onOpenConcierge: () => void;
  onOpenBespoke?: () => void;
  onOpenArtGallery?: () => void;
  onOpenExploreAll?: () => void;
  onOpenPhotoGallery?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentLang,
  onSelectLang,
  currentCurrency,
  onSelectCurrency,
  onOpenBooking,
  onOpenConcierge,
  onOpenBespoke,
  onOpenArtGallery,
  onOpenExploreAll,
  onOpenPhotoGallery,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuDrawerOpen, setMenuDrawerOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleSound = () => {
    const active = ambientAudio.toggle();
    setIsAudioPlaying(active);
  };

  const handleScrollTo = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const navLinks = [
    { href: '#suites', label: '住宿' },
    { href: '#explore-slider', label: '漫遊探索' },
    { action: onOpenBespoke, label: '禮遇' },
    { href: '#location', label: '交通指引' },
    { href: '#faq', label: '常見問題' },
    { action: onOpenPhotoGallery, label: '圖片庫' },
  ];

  const languages: { code: Language; label: string }[] = [
    { code: 'zh-TW', label: '繁體中文' },
    { code: 'en', label: 'English' },
    { code: 'ja', label: '日本語' },
    { code: 'zh-CN', label: '简体中文' },
  ];

  const currencies: Currency[] = ['TWD', 'USD', 'JPY', 'EUR', 'CNY'];

  return (
    <>
      <header
        id="main-navbar"
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0f0e0d]/98 backdrop-blur-md border-b border-stone-800 shadow-2xl'
            : 'bg-[#121110]/95 backdrop-blur-sm border-b border-stone-800/80'
        }`}
      >
        {/* Tier 1: Beijing Mandarin Oriental Style Top Sub-Bar (全球首頁 / 北京前門 風格) */}
        <div className="bg-[#0a0908] text-[#c7b299] text-[11px] py-1.5 px-4 sm:px-6 lg:px-8 border-b border-stone-800/60 tracking-wider">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            {/* Left: Breadcrumb / Property Identity */}
            <div className="flex items-center space-x-2 text-xs">
              <a href="#" className="text-[#a89985] hover:text-[#e6d5bc] transition-colors">
                台東首頁
              </a>
              <span className="text-stone-600">/</span>
              <span className="text-[#d8c3a5] font-medium font-serif">湯園民宿</span>
              <span className="hidden md:inline-block text-stone-600">‧</span>
              <span className="hidden md:inline-block text-stone-400 font-light">
                台東市中興路一段225號
              </span>
            </div>

            {/* Right: Utility Links matching Beijing Qianmen Mandarin Oriental */}
            <div className="flex items-center space-x-4 sm:space-x-6 text-xs">
              {/* Explore / Guide Search */}
              <button
                onClick={onOpenExploreAll}
                className="hidden sm:flex items-center space-x-1.5 text-stone-300 hover:text-[#d1b07c] transition-colors cursor-pointer"
              >
                <Search className="w-3.5 h-3.5 text-[#c7b299]" />
                <span className="text-[11px]">探索導覽與景點</span>
              </button>

              {/* Concierge & LINE */}
              <a
                href="https://line.me/ti/p/~@tang225"
                target="_blank"
                rel="noreferrer"
                className="hidden lg:flex items-center space-x-1.5 text-stone-300 hover:text-[#d1b07c] transition-colors font-mono"
              >
                <MessageCircle className="w-3.5 h-3.5 text-[#06c755]" />
                <span>官方 LINE: @tang225</span>
              </a>

              {/* Phone quick call */}
              <a
                href="tel:0966733338"
                className="hidden md:flex items-center space-x-1.5 text-stone-300 hover:text-[#d1b07c] transition-colors font-mono"
              >
                <Phone className="w-3 h-3 text-[#c7b299]" />
                <span>0966-733-338</span>
              </a>

              {/* Ambient Audio */}
              <button
                onClick={toggleSound}
                className="flex items-center space-x-1 text-stone-400 hover:text-[#d1b07c] transition-colors"
                title={isAudioPlaying ? '靜音' : '播放氛圍音樂'}
              >
                {isAudioPlaying ? <Volume2 className="w-3.5 h-3.5 text-[#d1b07c]" /> : <VolumeX className="w-3.5 h-3.5" />}
                <span className="text-[10px] hidden xl:inline">{isAudioPlaying ? '靜音' : '氛圍音樂'}</span>
              </button>

              {/* Currency Selector */}
              <div className="hidden sm:flex items-center space-x-1">
                <select
                  value={currentCurrency}
                  onChange={(e) => onSelectCurrency(e.target.value as Currency)}
                  className="bg-transparent text-stone-300 text-[11px] font-medium focus:outline-none cursor-pointer hover:text-[#d1b07c]"
                >
                  {currencies.map((c) => (
                    <option key={c} value={c} className="bg-[#181614] text-white">
                      {c}
                    </option>
                  ))}
                </select>
              </div>

              {/* Language Selector Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                  className="flex items-center space-x-1 text-stone-300 hover:text-[#d1b07c] text-[11px] font-medium py-0.5"
                >
                  <Globe className="w-3.5 h-3.5 text-[#c7b299]" />
                  <span>{languages.find((l) => l.code === currentLang)?.label}</span>
                  <ChevronDown className="w-3 h-3 text-stone-500" />
                </button>

                {langDropdownOpen && (
                  <div
                    className="absolute right-0 mt-2 w-32 bg-[#141210] border border-stone-700 rounded-lg shadow-2xl py-1.5 z-50 animate-in fade-in"
                    onClick={() => setLangDropdownOpen(false)}
                  >
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => onSelectLang(lang.code)}
                        className={`w-full text-left px-3 py-1.5 text-xs flex items-center justify-between ${
                          currentLang === lang.code
                            ? 'text-[#d1b07c] font-semibold bg-white/10'
                            : 'text-stone-300 hover:text-white hover:bg-white/5'
                        }`}
                      >
                        <span>{lang.label}</span>
                        {currentLang === lang.code && <span className="w-1.5 h-1.5 rounded-full bg-[#d1b07c]" />}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Tier 2: Mandarin Oriental Beijing Qianmen Signature Main Nav Bar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
          {/* Left Section: Hamburger Menu Icon + Genuine Tang Home Logo (No circle frame, No coffee background) */}
          <div className="flex items-center space-x-4 sm:space-x-6">
            <button
              id="mandarin-menu-trigger"
              onClick={() => setMenuDrawerOpen(true)}
              className="text-stone-200 hover:text-[#d1b07c] p-1.5 -ml-1.5 rounded-md hover:bg-stone-800/60 transition-colors flex items-center justify-center focus:outline-none"
              title="開啟導覽選單"
            >
              <Menu className="w-6 h-6" />
            </button>

            {/* Official Tang Home Brand Logo - Crisp Off-White & Warm Gold Vector */}
            <a
              href="#"
              id="brand-logo-link"
              className="flex items-center group focus:outline-none"
              title="湯園民宿"
            >
              <TangHomeLogo
                variant="full"
                color="#d1b07c"
                accentColor="#f3e4c8"
                textColor="#fbf9f5"
                height={40}
                className="transform group-hover:scale-102 transition-transform duration-300"
              />
            </a>
          </div>

          {/* Center Navigation Links - Authentic Mandarin Oriental Item Spacing */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navLinks.map((link, idx) => {
              if (link.action) {
                return (
                  <button
                    key={idx}
                    onClick={link.action}
                    className="text-xs tracking-[0.14em] text-stone-300 hover:text-[#d1b07c] transition-colors relative py-1 font-medium cursor-pointer"
                  >
                    {link.label}
                  </button>
                );
              }
              return (
                <a
                  key={idx}
                  href={link.href}
                  onClick={(e) => handleScrollTo(e, link.href)}
                  className="text-xs tracking-[0.14em] text-stone-300 hover:text-[#d1b07c] transition-colors relative py-1 font-medium cursor-pointer"
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Right Section: Signature Rounded Pill Button "預訂住宿" linking directly to OwlNest */}
          <div className="flex items-center space-x-3">
            <button
              id="book-stay-nav-btn"
              onClick={() => openOwlNestBooking({ lang: currentLang })}
              className="bg-[#b8c9ba] hover:bg-[#a6bbaa] text-[#1c1917] font-serif font-bold text-xs sm:text-sm tracking-wider px-6 sm:px-7 py-2.5 rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform active:scale-98"
            >
              預訂住宿
            </button>
          </div>
        </div>
      </header>

      {/* Full-Height Mandarin Oriental Style Menu Drawer (Opens from Left when clicking ☰) */}
      {menuDrawerOpen && (
        <div
          className="fixed inset-0 z-50 bg-stone-950/80 backdrop-blur-md flex justify-start animate-in fade-in duration-300"
          onClick={() => setMenuDrawerOpen(false)}
        >
          <div
            className="w-full max-w-md bg-[#121110] text-[#f5f2eb] h-full shadow-2xl border-r border-stone-800 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto animate-in slide-in-from-left duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Drawer Top */}
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-stone-800">
                <TangHomeLogo variant="full" color="#d1b07c" textColor="#f5f2eb" />
                <button
                  onClick={() => setMenuDrawerOpen(false)}
                  className="p-2 rounded-full text-stone-400 hover:text-white hover:bg-stone-800 transition-colors"
                  title="關閉選單"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Main Navigation Items matching exact page order */}
              <nav className="mt-8 space-y-4 font-serif text-lg sm:text-xl">
                <a
                  href="#suites"
                  onClick={(e) => {
                    setMenuDrawerOpen(false);
                    handleScrollTo(e, '#suites');
                  }}
                  className="flex items-center justify-between py-2.5 text-stone-200 hover:text-[#d1b07c] border-b border-stone-800/60 transition-colors"
                >
                  <span>住宿</span>
                  <ArrowRight className="w-4 h-4 text-stone-500" />
                </a>

                <a
                  href="#explore-slider"
                  onClick={(e) => {
                    setMenuDrawerOpen(false);
                    handleScrollTo(e, '#explore-slider');
                  }}
                  className="flex items-center justify-between py-2.5 text-stone-200 hover:text-[#d1b07c] border-b border-stone-800/60 transition-colors"
                >
                  <span>漫遊探索</span>
                  <ArrowRight className="w-4 h-4 text-stone-500" />
                </a>

                <button
                  onClick={() => {
                    setMenuDrawerOpen(false);
                    if (onOpenBespoke) onOpenBespoke();
                  }}
                  className="w-full flex items-center justify-between py-2.5 text-[#d1b07c] hover:text-[#e4c99d] border-b border-stone-800/60 transition-colors text-left cursor-pointer"
                >
                  <span>禮遇</span>
                  <Sparkles className="w-4 h-4 text-[#d1b07c]" />
                </button>

                <a
                  href="#location"
                  onClick={(e) => {
                    setMenuDrawerOpen(false);
                    handleScrollTo(e, '#location');
                  }}
                  className="flex items-center justify-between py-2.5 text-stone-200 hover:text-[#d1b07c] border-b border-stone-800/60 transition-colors"
                >
                  <span>交通指引</span>
                  <ArrowRight className="w-4 h-4 text-stone-500" />
                </a>

                <a
                  href="#faq"
                  onClick={(e) => {
                    setMenuDrawerOpen(false);
                    handleScrollTo(e, '#faq');
                  }}
                  className="flex items-center justify-between py-2.5 text-stone-200 hover:text-[#d1b07c] border-b border-stone-800/60 transition-colors"
                >
                  <span>常見問題</span>
                  <ArrowRight className="w-4 h-4 text-stone-500" />
                </a>

                <button
                  onClick={() => {
                    setMenuDrawerOpen(false);
                    if (onOpenPhotoGallery) onOpenPhotoGallery();
                  }}
                  className="w-full flex items-center justify-between py-2.5 text-stone-200 hover:text-[#d1b07c] border-b border-stone-800/60 transition-colors text-left cursor-pointer"
                >
                  <span>圖片庫</span>
                  <ArrowRight className="w-4 h-4 text-stone-500" />
                </button>
              </nav>

              {/* Direct Booking Call to Action inside Drawer */}
              <div className="mt-8">
                <button
                  onClick={() => {
                    setMenuDrawerOpen(false);
                    openOwlNestBooking({ lang: currentLang });
                  }}
                  className="w-full py-3.5 rounded-full bg-[#b8c9ba] hover:bg-[#a6bbaa] text-[#1c1917] font-serif font-bold text-sm tracking-wider shadow-lg transition-colors text-center whitespace-nowrap cursor-pointer"
                >
                  即時預訂住宿
                </button>
              </div>
            </div>

            {/* Drawer Bottom Details */}
            <div className="mt-8 pt-6 border-t border-stone-800 space-y-3 text-xs text-stone-400 font-light">
              <div className="flex items-center space-x-2 text-stone-300">
                <MapPin className="w-3.5 h-3.5 text-[#d1b07c]" />
                <span>台東市中興路一段225號</span>
              </div>
              <div className="flex items-center justify-between">
                <a href="tel:0966733338" className="hover:text-white font-mono flex items-center space-x-1.5">
                  <Phone className="w-3.5 h-3.5 text-[#d1b07c]" />
                  <span>0966-733-338</span>
                </a>
                <a
                  href="https://line.me/ti/p/~@tang225"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white font-mono flex items-center space-x-1.5 text-[#06c755]"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>LINE: @tang225</span>
                </a>
              </div>
              <div className="text-[10px] text-stone-500 pt-1 font-mono">
                台東縣合法民宿第 1639 號
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
