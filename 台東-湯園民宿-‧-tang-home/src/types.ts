export type Language = 'zh-TW' | 'en' | 'ja' | 'zh-CN';
export type Currency = 'TWD' | 'USD' | 'JPY' | 'EUR' | 'CNY';

export interface RoomAmenity {
  id: string;
  name: string;
  category: 'bedding' | 'bath' | 'tech' | 'dining' | 'wellness';
  icon: string;
}

export interface RoomType {
  id: string;
  slug: string;
  name: Record<Language, string>;
  category: 'villa' | 'suite' | 'penthouse' | 'family';
  tagline: Record<Language, string>;
  description: Record<Language, string>;
  basePriceTWD: number;
  weekendPriceTWD: number;
  sizeSqm: number;
  maxGuests: number;
  bedType: Record<Language, string>;
  floor: Record<Language, string>;
  view: Record<Language, string>;
  featured: boolean;
  images: string[];
  features: Record<Language, string[]>;
  amenities: string[];
  floorPlanUrl?: string;
  virtualTourNote?: Record<Language, string>;
}

export interface ExperienceItem {
  id: string;
  title: Record<Language, string>;
  category: Record<Language, string>;
  priceTWD: number;
  priceType: 'per_person' | 'per_stay' | 'complimentary';
  description: Record<Language, string>;
  duration: Record<Language, string>;
  image: string;
  highlight: Record<Language, string>;
}

export interface BookingState {
  checkInDate: string;
  checkOutDate: string;
  nights: number;
  adults: number;
  children: number;
  selectedRoomId: string | null;
  selectedAddOns: string[];
  guestName: string;
  guestEmail: string;
  guestPhone: string;
  specialRequests: string;
  estimatedArrival: string;
  promoCode: string;
  discountPercentage: number;
}

export interface AttractionItem {
  id: string;
  name: Record<Language, string>;
  category: Record<Language, string>;
  distance: Record<Language, string>;
  description: Record<Language, string>;
  image: string;
}

export interface FaqItem {
  id: string;
  question: Record<Language, string>;
  answer: Record<Language, string>;
  category: 'booking' | 'stay' | 'dining' | 'transport';
}

export interface ReviewItem {
  id: string;
  guestName: string;
  origin: string;
  rating: number;
  date: string;
  roomName: Record<Language, string>;
  comment: Record<Language, string>;
  avatar?: string;
}
