import { Currency } from '../types';

export const CURRENCY_RATES: Record<Currency, { rate: number; symbol: string; decimals: number }> = {
  TWD: { rate: 1, symbol: 'NT$', decimals: 0 },
  USD: { rate: 0.031, symbol: '$', decimals: 0 },
  JPY: { rate: 4.85, symbol: '¥', decimals: 0 },
  EUR: { rate: 0.029, symbol: '€', decimals: 0 },
  CNY: { rate: 0.226, symbol: '¥', decimals: 0 },
};

export function formatPrice(amountTWD: number, currency: Currency): string {
  const config = CURRENCY_RATES[currency] || CURRENCY_RATES.TWD;
  const converted = amountTWD * config.rate;
  const rounded = Math.round(converted);
  return `${config.symbol} ${rounded.toLocaleString()}`;
}
