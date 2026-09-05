import React, { useState } from 'react';
import {
  X,
  Camera,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  ExternalLink,
  BedDouble,
  Sprout,
  UtensilsCrossed,
  Building2,
  Compass,
} from 'lucide-react';
import { Language } from '../types';
import { TANG_HOME_PHOTOS } from '../data/tangHomePhotos';
import { TangHomeMountainIcon } from './TangHomeLogo';

interface PhotoGalleryModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentLang: Language;
  initialPhotoId?: string;
}

export const PhotoGalleryModal: React.FC<PhotoGalleryModalProps> = ({
  isOpen,
  onClose,
  currentLang,
  initialPhotoId,
}) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'rooms' | 'villa' | 'farm' | 'dining' | 'surroundings'>('all');
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(() => {
    if (initialPhotoId) {
      const idx = TANG_HOME_PHOTOS.findIndex((p) => p.id === initialPhotoId);
      return idx >= 0 ? idx : null;
    }
    return null;
  });

  if (!isOpen) return null;

  const categories = [
    { id: 'all', label: '全部', icon: Camera },
    { id: 'rooms', label: '居所客房', icon: BedDouble },
    { id: 'villa', label: '外觀公設', icon: Building2 },
    { id: 'farm', label: '自耕農場', icon: Sprout },
    { id: 'dining', label: '晨食私廚', icon: UtensilsCrossed },
    { id: 'surroundings', label: '台東漫遊', icon: Compass },
  ];

  const filteredPhotos = activeCategory === 'all'
    ? TANG_HOME_PHOTOS
    : TANG_HOME_PHOTOS.filter((p) => p.category === activeCategory);

  const activePhoto = selectedPhotoIndex !== null ? TANG_HOME_PHOTOS[selectedPhotoIndex] : null;

  const handleNextPhoto = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (selectedPhotoIndex === null) return;
    const nextIdx = (selectedPhotoIndex + 1) % TANG_HOME_PHOTOS.length;
    setSelectedPhotoIndex(nextIdx);
  };

  const handlePrevPhoto = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (selectedPhotoIndex === null) return;
    const prevIdx = (selectedPhotoIndex - 1 + TANG_HOME_PHOTOS.length) % TANG_HOME_PHOTOS.length;
    setSelectedPhotoIndex(prevIdx);
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-stone-900/70 backdrop-blur-md flex items-center justify-center p-0 sm:p-4 md:p-6 animate-in fade-in duration-300"
      onClick={onClose}
    >
      <div
        className="w-full h-full sm:max-h-[92vh] sm:max-w-6xl bg-white text-stone-900 border border-stone-200 sm:rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar - Light White & Gray Minimalist Aesthetic */}
        <div className="bg-white px-5 sm:px-8 py-4 border-b border-stone-200 flex items-center justify-between shrink-0">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-full bg-stone-100 border border-stone-200 text-[#8c6d3f] flex items-center justify-center">
              <Camera className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[10px] font-mono tracking-widest text-[#8c6d3f] uppercase block font-medium">
                TANG HOME GALLERY
              </span>
              <h3 className="font-serif text-lg sm:text-xl font-normal text-stone-900 flex items-center space-x-2">
                <span>寫真圖庫</span>
              </h3>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <span className="hidden sm:inline-block text-xs text-stone-500 font-mono mr-2">
              共 {TANG_HOME_PHOTOS.length} 張實景相片
            </span>
            <button
              onClick={onClose}
              className="p-2 rounded-full text-stone-400 hover:text-stone-900 hover:bg-stone-100 transition-colors cursor-pointer"
              title="關閉圖片庫"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Category Navigation Tabs - White & Gray with Solid Underline (No Oval Pills) */}
        <div className="bg-stone-50/80 px-4 sm:px-8 pt-3 pb-0 border-b border-stone-200 flex items-center space-x-6 sm:space-x-8 overflow-x-auto shrink-0 scrollbar-none">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const count = cat.id === 'all'
              ? TANG_HOME_PHOTOS.length
              : TANG_HOME_PHOTOS.filter((p) => p.category === cat.id).length;
            const isActive = activeCategory === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id as any)}
                className={`pb-3 text-xs sm:text-sm font-medium whitespace-nowrap transition-all flex items-center space-x-1.5 cursor-pointer relative ${
                  isActive
                    ? 'text-stone-950 font-semibold'
                    : 'text-stone-500 hover:text-stone-800'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{cat.label}</span>
                <span className="text-[11px] opacity-60 font-mono">
                  ({count})
                </span>
                {isActive && (
                  <span className="absolute bottom-0 inset-x-0 h-[2.5px] bg-stone-900" />
                )}
              </button>
            );
          })}
        </div>

        {/* Photo Grid Content - Pure Photos with No Explanations/Descriptions */}
        <div className="p-4 sm:p-6 md:p-8 overflow-y-auto flex-1 bg-[#faf9f6]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {filteredPhotos.map((photo) => {
              const fullIndex = TANG_HOME_PHOTOS.findIndex((p) => p.id === photo.id);

              return (
                <div
                  key={photo.id}
                  onClick={() => setSelectedPhotoIndex(fullIndex)}
                  className="group relative bg-white border border-stone-200/90 overflow-hidden hover:border-stone-400 transition-all duration-300 cursor-pointer hover:shadow-lg hover:-translate-y-0.5"
                >
                  {/* Pure Photo with Subtle Hover Scale */}
                  <div className="relative aspect-[16/11] overflow-hidden bg-stone-100">
                    <img
                      src={photo.image}
                      alt="湯園民宿實景"
                      className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                    />
                    <div className="absolute top-2.5 right-2.5 w-7 h-7 rounded-full bg-black/50 backdrop-blur-xs text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <Maximize2 className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Modal Footer - Light Gray Minimalist */}
        <div className="bg-stone-50 px-6 py-3.5 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          <div className="text-xs text-stone-500 text-center sm:text-left font-light">
            湯園民宿 ‧ 台東市中興路一段225號 ‧ 合法民宿第 1639 號
          </div>
          <div className="flex items-center space-x-3">
            <a
              href="https://line.me/ti/p/~@tang225"
              target="_blank"
              rel="noreferrer"
              className="text-xs text-[#06c755] hover:underline flex items-center space-x-1 font-medium"
            >
              <span>加入官方 LINE 預訂 (@tang225)</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>

      {/* Lightbox Modal (Click on any photo to view full size) */}
      {activePhoto && (
        <div
          className="fixed inset-0 z-60 bg-black/95 flex flex-col items-center justify-between p-4 sm:p-6 animate-in fade-in duration-200"
          onClick={() => setSelectedPhotoIndex(null)}
        >
          {/* Lightbox Top Control */}
          <div
            className="w-full max-w-6xl flex items-center justify-between text-stone-300 pb-3"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center space-x-3">
              <span className="text-xs font-mono text-stone-300">
                {selectedPhotoIndex! + 1} / {TANG_HOME_PHOTOS.length}
              </span>
            </div>

            <button
              onClick={() => setSelectedPhotoIndex(null)}
              className="p-2 rounded-full text-stone-400 hover:text-white hover:bg-stone-800 transition-colors cursor-pointer"
              title="關閉預覽"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Lightbox Center Image & Nav Buttons */}
          <div
            className="relative w-full max-w-6xl flex-1 flex items-center justify-center my-auto overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={handlePrevPhoto}
              className="absolute left-2 sm:left-4 z-20 p-3 rounded-full bg-black/60 hover:bg-white hover:text-stone-950 text-white backdrop-blur-md transition-all cursor-pointer"
              title="上一張"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <img
              src={activePhoto.image}
              alt="湯園民宿實景"
              className="max-h-[82vh] max-w-full object-contain shadow-2xl animate-in zoom-in-95 duration-200"
              referrerPolicy="no-referrer"
            />

            <button
              onClick={handleNextPhoto}
              className="absolute right-2 sm:right-4 z-20 p-3 rounded-full bg-black/60 hover:bg-white hover:text-stone-950 text-white backdrop-blur-md transition-all cursor-pointer"
              title="下一張"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
