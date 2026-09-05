import { Language } from '../types';

export interface OwlNestBookingParams {
  lang?: Language;
  start?: string; // YYYY-MM-DD
  end?: string;   // YYYY-MM-DD
  adult?: number;
  child?: number;
  infant?: number;
  roomId?: string;
}

/**
 * Maps app language codes to OwlNest format
 */
export function getOwlNestLang(lang: Language): string {
  switch (lang) {
    case 'zh-TW':
      return 'zh_TW';
    case 'zh-CN':
      return 'zh_CN';
    case 'ja':
      return 'ja';
    case 'en':
    default:
      return 'en';
  }
}

/**
 * Builds the official OwlNest reservation URL for Tang Home (tangy)
 */
export function buildOwlNestUrl(params: OwlNestBookingParams = {}): string {
  const baseUrl = 'https://www.booking-owlnest.com/tangy';
  const searchParams = new URLSearchParams();

  const langCode = params.lang ? getOwlNestLang(params.lang) : 'zh_TW';
  searchParams.set('lang', langCode);

  // Default dates if not specified
  if (params.start) {
    searchParams.set('start', params.start);
  }
  if (params.end) {
    searchParams.set('end', params.end);
  }

  // Guests
  const adultCount = params.adult !== undefined ? params.adult : 2;
  searchParams.set('adult', adultCount.toString());

  const childCount = params.child !== undefined ? params.child : 0;
  searchParams.set('child', childCount.toString());

  const infantCount = params.infant !== undefined ? params.infant : 0;
  searchParams.set('infant', infantCount.toString());

  return `${baseUrl}?${searchParams.toString()}`;
}

/**
 * Opens the OwlNest booking portal in a new tab
 */
export function openOwlNestBooking(params: OwlNestBookingParams = {}): void {
  const url = buildOwlNestUrl(params);
  window.open(url, '_blank', 'noopener,noreferrer');
}
