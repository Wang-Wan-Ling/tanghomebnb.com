import React, { useState } from 'react';
import { Language, Currency, RoomType } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SuitesSection } from './components/SuitesSection';
import { SuiteDetailModal } from './components/SuiteDetailModal';
import { TangHomeExploreSlider } from './components/TangHomeExploreSlider';
import { ArtGalleryModal } from './components/ArtGalleryModal';
import { BespokeServicesModal } from './components/BespokeServicesModal';
import { ExploreAllViewModal } from './components/ExploreAllViewModal';
import { PhotoGalleryModal } from './components/PhotoGalleryModal';
import { LocationGuideSection } from './components/LocationGuideSection';
import { FaqSection } from './components/FaqSection';
import { ConciergeContactModal } from './components/ConciergeContactModal';
import { MobileStickyBar } from './components/MobileStickyBar';
import { Footer } from './components/Footer';

export default function App() {
  const [currentLang, setCurrentLang] = useState<Language>('zh-TW');
  const [currentCurrency, setCurrentCurrency] = useState<Currency>('TWD');

  // Modals state
  const [selectedSuiteForModal, setSelectedSuiteForModal] = useState<RoomType | null>(null);
  const [artGalleryModalOpen, setArtGalleryModalOpen] = useState(false);
  const [selectedArtworkId, setSelectedArtworkId] = useState<string | undefined>(undefined);
  const [bespokeModalOpen, setBespokeModalOpen] = useState(false);
  const [selectedBespokeId, setSelectedBespokeId] = useState<string | undefined>(undefined);
  const [exploreAllModalOpen, setExploreAllModalOpen] = useState(false);
  const [photoGalleryModalOpen, setPhotoGalleryModalOpen] = useState(false);
  const [conciergeModalOpen, setConciergeModalOpen] = useState(false);

  const handleOpenArtGallery = (artworkId?: string) => {
    setSelectedArtworkId(artworkId);
    setArtGalleryModalOpen(true);
  };

  const handleOpenBespoke = (serviceId?: string) => {
    setSelectedBespokeId(serviceId);
    setBespokeModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#fbf9f5] text-[#1c1917] flex flex-col selection:bg-[#8c6d3f] selection:text-white">
      {/* Mandarin Oriental Beijing Qianmen Style Top Navbar */}
      <Navbar
        currentLang={currentLang}
        onSelectLang={setCurrentLang}
        currentCurrency={currentCurrency}
        onSelectCurrency={setCurrentCurrency}
        onOpenConcierge={() => setConciergeModalOpen(true)}
        onOpenBespoke={() => handleOpenBespoke()}
        onOpenArtGallery={() => handleOpenArtGallery()}
        onOpenExploreAll={() => setExploreAllModalOpen(true)}
        onOpenPhotoGallery={() => setPhotoGalleryModalOpen(true)}
      />

      {/* Main One-Page Content Sections */}
      <main className="flex-1 pt-24 sm:pt-28">
        {/* Atmospheric Video Hero with Direct OwlNest Booking */}
        <Hero
          currentLang={currentLang}
        />

        {/* Minimalist Suites & Rooms Collection - Pure Visuals & Clean Typography */}
        <SuitesSection
          currentLang={currentLang}
          currentCurrency={currentCurrency}
          onSelectSuiteDetails={setSelectedSuiteForModal}
        />

        {/* Curated Horizontal Scroll Menu: Suites, Organic Farm, Art Gallery & Taitung Highlights */}
        <TangHomeExploreSlider
          currentLang={currentLang}
          currentCurrency={currentCurrency}
          onOpenExploreAll={() => setExploreAllModalOpen(true)}
          onSelectSuiteDetails={setSelectedSuiteForModal}
          onOpenArtGallery={handleOpenArtGallery}
          onOpenBespoke={handleOpenBespoke}
          onOpenConcierge={() => setConciergeModalOpen(true)}
        />

        {/* Location & Curated Taitung Travel Guide */}
        <LocationGuideSection
          currentLang={currentLang}
        />

        {/* Policies & FAQ */}
        <FaqSection
          currentLang={currentLang}
          onOpenPhotoGallery={() => setPhotoGalleryModalOpen(true)}
        />
      </main>

      {/* Luxury Mandarin Oriental Qianmen Style Footer */}
      <Footer
        currentLang={currentLang}
        onOpenConcierge={() => setConciergeModalOpen(true)}
        onOpenPhotoGallery={() => setPhotoGalleryModalOpen(true)}
      />

      {/* Mobile Sticky Booking Bar */}
      <MobileStickyBar
        currentLang={currentLang}
        currentCurrency={currentCurrency}
      />

      {/* Dedicated Clean Suite Detail Page Modal (Mandarin Oriental Qianmen Design) */}
      <SuiteDetailModal
        suite={selectedSuiteForModal}
        currentLang={currentLang}
        currentCurrency={currentCurrency}
        onClose={() => setSelectedSuiteForModal(null)}
      />

      {/* Tang Home Art Gallery Modal (Resident Artist & Artwork Collection) */}
      <ArtGalleryModal
        isOpen={artGalleryModalOpen}
        onClose={() => setArtGalleryModalOpen(false)}
        currentLang={currentLang}
        initialArtworkId={selectedArtworkId}
      />

      {/* Bespoke Privileges Modal (Bridal Suites, Room Decor, Cakes, Ferry Tickets, Business Travel) */}
      <BespokeServicesModal
        isOpen={bespokeModalOpen}
        onClose={() => setBespokeModalOpen(false)}
        currentLang={currentLang}
        initialServiceId={selectedBespokeId}
      />

      {/* Comprehensive Explore All View Modal (Triggered by "檢視全部 〉") */}
      <ExploreAllViewModal
        isOpen={exploreAllModalOpen}
        onClose={() => setExploreAllModalOpen(false)}
        currentLang={currentLang}
        currentCurrency={currentCurrency}
        onSelectSuite={(suite) => {
          setExploreAllModalOpen(false);
          setSelectedSuiteForModal(suite);
        }}
        onOpenArtGallery={(artId) => {
          setExploreAllModalOpen(false);
          handleOpenArtGallery(artId);
        }}
        onOpenBespoke={(srvId) => {
          setExploreAllModalOpen(false);
          handleOpenBespoke(srvId);
        }}
      />

      {/* Tang Home Photo Gallery Modal */}
      <PhotoGalleryModal
        isOpen={photoGalleryModalOpen}
        onClose={() => setPhotoGalleryModalOpen(false)}
        currentLang={currentLang}
      />

      {/* 24/7 Butler & Concierge Contact Modal */}
      <ConciergeContactModal
        isOpen={conciergeModalOpen}
        onClose={() => setConciergeModalOpen(false)}
        currentLang={currentLang}
      />
    </div>
  );
}
