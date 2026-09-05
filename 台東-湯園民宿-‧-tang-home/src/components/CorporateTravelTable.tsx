import React from 'react';
import { Briefcase, Calendar, UserCheck, Receipt, Car, MessageCircle } from 'lucide-react';
import { Language } from '../types';

interface CorporateTravelTableProps {
  currentLang?: Language;
  showActionButtons?: boolean;
}

export const CorporateTravelTable: React.FC<CorporateTravelTableProps> = ({
  currentLang = 'zh-TW',
  showActionButtons = true,
}) => {
  return (
    <div className="space-y-4">
      {/* Main Statement (No Quotes, Concise) */}
      <div className="font-serif text-sm sm:text-base text-stone-800 leading-relaxed font-normal border-l-4 border-[#8c6d3f] pl-4 py-2 bg-stone-50/80 rounded-r-lg">
        歡迎機關團體與商務人士平日洽公入住，我們提供專屬合約優惠、合法統編收據開立及便利停車，歡迎透過官方 LINE 洽詢配合方案。
      </div>

      {/* Highlight Header */}
      <div className="bg-[#181614] text-[#f5f2eb] px-5 py-3 rounded-xl flex items-center justify-between">
        <div className="flex items-center space-x-2.5">
          <Briefcase className="w-4 h-4 text-[#d1b07c]" />
          <h4 className="font-serif text-sm sm:text-base font-medium text-white tracking-wide">
            【商務差旅平日專案 ‧ 合約配合適用須知】
          </h4>
        </div>
        <span className="text-[11px] font-mono text-[#d1b07c] uppercase tracking-wider bg-[#d1b07c]/10 border border-[#d1b07c]/30 px-2.5 py-0.5 rounded-md">
          企業合約特惠
        </span>
      </div>

      {/* Structured Minimal Table */}
      <div className="border border-stone-200 rounded-xl overflow-hidden shadow-2xs bg-white">
        <table className="w-full text-left text-xs sm:text-sm border-collapse">
          <tbody>
            <tr className="border-b border-stone-200 hover:bg-stone-50/70 transition-colors">
              <th className="py-3.5 px-4 sm:px-5 font-semibold text-stone-900 bg-stone-100/70 w-28 sm:w-36 shrink-0 align-top flex items-center space-x-1.5">
                <Calendar className="w-3.5 h-3.5 text-[#8c6d3f]" />
                <span>適用日期</span>
              </th>
              <td className="py-3.5 px-4 sm:px-5 text-stone-700 leading-relaxed font-light">
                <span className="font-semibold text-stone-900">僅限週日 ～ 週四之平日</span>
                <span className="text-stone-500 block text-xs mt-0.5">
                  ※ 週五、週六、國定假日、連續假期及特定節日恕不適用。
                </span>
              </td>
            </tr>

            <tr className="border-b border-stone-200 hover:bg-stone-50/70 transition-colors">
              <th className="py-3.5 px-4 sm:px-5 font-semibold text-stone-900 bg-stone-100/70 w-28 sm:w-36 shrink-0 align-top flex items-center space-x-1.5">
                <UserCheck className="w-3.5 h-3.5 text-[#8c6d3f]" />
                <span>入住人數</span>
              </th>
              <td className="py-3.5 px-4 sm:px-5 text-stone-700 leading-relaxed font-light">
                <span className="font-medium text-stone-900">限單人出差入住使用</span>
              </td>
            </tr>

            <tr className="border-b border-stone-200 hover:bg-stone-50/70 transition-colors">
              <th className="py-3.5 px-4 sm:px-5 font-semibold text-stone-900 bg-stone-100/70 w-28 sm:w-36 shrink-0 align-top flex items-center space-x-1.5">
                <Briefcase className="w-3.5 h-3.5 text-[#8c6d3f]" />
                <span>身分核驗</span>
              </th>
              <td className="py-3.5 px-4 sm:px-5 text-stone-700 leading-relaxed font-light">
                入住時請出示<span className="font-semibold text-stone-900">本人有效員工識別證 / 工作證</span>或<span className="font-semibold text-stone-900">公務派令</span>
                <span className="text-amber-700 block text-xs mt-0.5 font-normal">
                  （恕不單憑紙本名片核認）
                </span>
              </td>
            </tr>

            <tr className="border-b border-stone-200 hover:bg-stone-50/70 transition-colors">
              <th className="py-3.5 px-4 sm:px-5 font-semibold text-stone-900 bg-stone-100/70 w-28 sm:w-36 shrink-0 align-top flex items-center space-x-1.5">
                <Receipt className="w-3.5 h-3.5 text-[#8c6d3f]" />
                <span>報帳收據</span>
              </th>
              <td className="py-3.5 px-4 sm:px-5 text-stone-700 leading-relaxed font-light">
                開立<span className="font-semibold text-stone-900">合法免用統一發票收據</span>（一律開立該在職公司之統一編號與買受人抬頭以供報帳核銷）。
                <span className="text-stone-500 block text-xs mt-0.5">
                  ※ 現場恕不開立個人無統編單據。
                </span>
              </td>
            </tr>

            <tr className="hover:bg-stone-50/70 transition-colors">
              <th className="py-3.5 px-4 sm:px-5 font-semibold text-stone-900 bg-stone-100/70 w-28 sm:w-36 shrink-0 align-top flex items-center space-x-1.5">
                <Car className="w-3.5 h-3.5 text-[#8c6d3f]" />
                <span>專屬停車</span>
              </th>
              <td className="py-3.5 px-4 sm:px-5 text-stone-700 leading-relaxed font-light">
                提供專屬自用停車位，公務自駕出差停車便利免煩惱。
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Action CTA Button */}
      {showActionButtons && (
        <div className="pt-1">
          <a
            href="https://line.me/ti/p/~@tang225"
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto inline-flex px-6 py-3 rounded-lg bg-[#06c755] hover:bg-[#05b34c] text-white font-medium text-xs sm:text-sm tracking-wider items-center justify-center space-x-2 transition-colors shadow-xs"
          >
            <MessageCircle className="w-4 h-4" />
            <span>加入官方 LINE 洽詢 (@tang225)</span>
          </a>
        </div>
      )}
    </div>
  );
};
