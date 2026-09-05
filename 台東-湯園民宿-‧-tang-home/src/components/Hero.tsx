import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Sparkles, ExternalLink, Play, Pause, Film, Image as ImageIcon, Calendar } from 'lucide-react';
import { Language } from '../types';
import { openOwlNestBooking } from '../utils/owlnest';
import { TangHomeMountainIcon, TangHomeLogo } from './TangHomeLogo';

interface HeroProps {
  currentLang: Language;
}

export const Hero: React.FC<HeroProps> = ({ currentLang }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  // Media Mode: Video vs High-Res Photo Gallery
  const [mediaMode, setMediaMode] = useState<'video' | 'photo'>('video');
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);

  // High-Res Ambient Images for Background
  const heroImages = [
    'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=2000&q=88',
    'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=2000&q=88',
    'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=2000&q=88',
  ];
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    if (mediaMode === 'photo') {
      const timer = setInterval(() => {
        setActiveSlide((prev) => (prev + 1) % heroImages.length);
      }, 6000);
      return () => clearInterval(timer);
    }
  }, [mediaMode, heroImages.length]);

  const toggleVideoPlayback = () => {
    if (videoRef.current) {
      if (isVideoPlaying) {
        videoRef.current.pause();
        setIsVideoPlaying(false);
      } else {
        videoRef.current.play();
        setIsVideoPlaying(true);
      }
    }
  };

  const handleDirectBooking = () => {
    openOwlNestBooking({ lang: currentLang });
  };

  return (
    <div id="hero-section" className="relative min-h-[85vh] lg:min-h-[90vh] flex items-center justify-center overflow-hidden pb-16 lg:pb-20">
      {/* Background Media: Cinematic Atmospheric Video Loop or Photo Gallery */}
      {mediaMode === 'video' ? (
        <div className="absolute inset-0 overflow-hidden">
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            poster="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=2000&q=88"
            className="w-full h-full object-cover scale-105 transition-transform duration-[10000ms]"
          >
            <source
              src="https://assets.mixkit.co/videos/preview/mixkit-sun-rays-through-the-trees-in-a-forest-41544-large.mp4"
              type="video/mp4"
            />
          </video>
          {/* Subtle Luxury Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#121110]/85 via-black/40 to-[#fbf9f5]" />
          <div className="absolute inset-0 bg-black/30" />
        </div>
      ) : (
        heroImages.map((img, idx) => (
          <div
            key={img}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              idx === activeSlide ? 'opacity-100 scale-105' : 'opacity-0 scale-100'
            } transform transition-transform duration-[8000ms]`}
          >
            <img
              src={img}
              alt="湯園民宿"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#121110]/85 via-black/40 to-[#fbf9f5]" />
            <div className="absolute inset-0 bg-black/30" />
          </div>
        ))
      )}

      {/* Video / Photo Switcher Floating Control */}
      <div className="absolute bottom-6 right-6 z-25 hidden sm:flex items-center space-x-2 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-stone-700 shadow-md text-xs text-stone-300">
        {mediaMode === 'video' && (
          <button
            onClick={toggleVideoPlayback}
            className="p-1 hover:text-[#d1b07c] flex items-center space-x-1 transition-colors"
            title={isVideoPlaying ? '暫停背景影片' : '播放背景影片'}
          >
            {isVideoPlaying ? <Pause className="w-3.5 h-3.5 text-[#d1b07c]" /> : <Play className="w-3.5 h-3.5 text-[#d1b07c]" />}
            <span className="text-[11px] font-medium">{isVideoPlaying ? '暫停' : '播放'}</span>
          </button>
        )}
        <div className="h-3 w-[1px] bg-stone-700" />
        <button
          onClick={() => setMediaMode(mediaMode === 'video' ? 'photo' : 'video')}
          className="text-[11px] font-semibold hover:text-[#d1b07c] flex items-center space-x-1 transition-colors"
        >
          {mediaMode === 'video' ? (
            <>
              <ImageIcon className="w-3.5 h-3.5 text-[#d1b07c]" />
              <span>切換靜態圖</span>
            </>
          ) : (
            <>
              <Film className="w-3.5 h-3.5 text-[#d1b07c]" />
              <span>切換動態影片</span>
            </>
          )}
        </button>
      </div>

      {/* Hero Content Container */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8 sm:pt-14">
        {/* Genuine Tang Home Mountain Icon & Badge */}
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-black/50 border border-white/25 backdrop-blur-md mb-6 shadow-lg animate-in fade-in duration-700">
          <TangHomeMountainIcon size={18} color="#e3d6c3" />
          <span className="text-[11px] tracking-[0.2em] text-[#f5f2eb] font-medium">
            湯園民宿 ‧ 台東合法民宿 1639 號
          </span>
        </div>

        {/* Dignified Headline with Generous Spacing */}
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-wide text-white font-normal leading-[1.2] mb-5 max-w-4xl mx-auto drop-shadow-md whitespace-nowrap">
          台東 湯園民宿
        </h1>

        {/* Breathable Subtitle */}
        <p className="text-sm sm:text-base md:text-lg text-stone-200 font-light max-w-2xl mx-auto leading-relaxed mb-8 sm:mb-10 tracking-wide drop-shadow-sm">
          感受東方庭園的沉靜時光，在溫潤日光中享受舒適自在的假期
        </p>

        {/* Direct Booking Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 max-w-lg mx-auto">
          <button
            onClick={handleDirectBooking}
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#b8c9ba] hover:bg-[#a6bbaa] text-[#1c1917] font-serif font-bold text-sm tracking-widest shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center space-x-2.5 transform hover:-translate-y-0.5 whitespace-nowrap cursor-pointer"
          >
            <Calendar className="w-4 h-4 text-[#1c1917] shrink-0" />
            <span className="whitespace-nowrap">即時預訂住宿</span>
          </button>

          <a
            href="#suites"
            className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-white/15 hover:bg-white/25 text-white border border-white/40 backdrop-blur-md text-sm font-medium tracking-wider transition-all duration-300 flex items-center justify-center space-x-2 whitespace-nowrap cursor-pointer"
          >
            <span className="whitespace-nowrap">探索典藏居所</span>
            <ArrowRight className="w-4 h-4 shrink-0" />
          </a>
        </div>

        {/* 4-Privilege Luxury Assurance Ribbon */}
        <div className="mt-14 sm:mt-18 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto text-center border-t border-stone-300/30 pt-8">
          <div className="flex flex-col items-center">
            <span className="text-stone-900 font-serif text-lg font-normal">室內電梯</span>
            <span className="text-xs text-stone-500 tracking-wider mt-1 font-light">全棟無障礙直達</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-stone-900 font-serif text-lg font-normal">專屬停車</span>
            <span className="text-xs text-stone-500 tracking-wider mt-1 font-light">私有平面停車位</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-stone-900 font-serif text-lg font-normal">免治馬桶</span>
            <span className="text-xs text-stone-500 tracking-wider mt-1 font-light">全房型溫水洗淨便座</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-stone-900 font-serif text-lg font-normal">洗衣與單車</span>
            <span className="text-xs text-stone-500 tracking-wider mt-1 font-light">自助洗衣與單車借用</span>
          </div>
        </div>
      </div>
    </div>
  );
};

