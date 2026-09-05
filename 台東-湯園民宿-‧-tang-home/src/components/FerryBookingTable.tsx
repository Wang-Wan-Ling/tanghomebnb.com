import React, { useState } from 'react';
import {
  Ship,
  ExternalLink,
  MessageCircle,
  Copy,
  Check,
  Building2,
  Calendar,
  Users,
  ShieldCheck,
  ArrowRight,
  Info,
} from 'lucide-react';
import { Language } from '../types';

interface FerryBookingTableProps {
  currentLang?: Language;
}

export const FerryBookingTable: React.FC<FerryBookingTableProps> = ({ currentLang = 'zh-TW' }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyAccount = () => {
    navigator.clipboard.writeText('0716-968-016666');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const routes = [
    {
      route: '台東 (富岡) ↔ 綠島 (南寮)',
      duration: '約 50 分鐘',
      roundTripAdult: '$1,100',
      roundTripChild: '$560',
      oneWayAdult: '$560',
      infant: '$200',
    },
    {
      route: '台東 (富岡) ↔ 蘭嶼 (開元)',
      duration: '約 120-150 分鐘',
      roundTripAdult: '$2,400',
      roundTripChild: '$1,250',
      oneWayAdult: '$1,300',
      infant: '$200',
    },
    {
      route: '後壁湖 ↔ 蘭嶼 (開元)',
      duration: '約 120-150 分鐘',
      roundTripAdult: '$2,400',
      roundTripChild: '$1,250',
      oneWayAdult: '$1,300',
      infant: '$200',
    },
    {
      route: '三角航線 (台東 ➔ 綠島 ➔ 蘭嶼 ➔ 台東)',
      duration: '環島串聯',
      roundTripAdult: '$2,800',
      roundTripChild: '$1,400',
      oneWayAdult: '-',
      infant: '$300',
    },
    {
      route: '蘭嶼 ➔ 綠島 (單程跳島)',
      duration: '約 90 分鐘',
      roundTripAdult: '-',
      roundTripChild: '-',
      oneWayAdult: '$1,100 (半票 $550)',
      infant: '$100',
    },
  ];

  return (
    <div className="space-y-6 text-stone-800">
      {/* 頂部快捷動作條 */}
      <div className="bg-stone-900 text-white p-4 sm:p-5 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-3 shadow-md">
        <div className="text-center sm:text-left">
          <span className="text-[10px] tracking-widest text-[#d1b07c] uppercase font-semibold block">
            TRIUMPH FERRY TIMETABLE & BOOKING
          </span>
          <h4 className="font-serif text-base sm:text-lg text-stone-100 font-medium">
            凱旋客輪 ‧ 即時船班查詢與代訂
          </h4>
        </div>

        <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
          <a
            href="https://www.farnlin.com.tw/calendar_main.html?routestand=25&date=2026-09-05"
            target="_blank"
            rel="noreferrer"
            className="flex-1 sm:flex-initial px-4 py-2 rounded-lg bg-[#8c6d3f] hover:bg-[#775a30] text-white text-xs font-semibold flex items-center justify-center space-x-1.5 transition-colors shadow-xs"
          >
            <span>即時查詢船班時刻表</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
          <a
            href="https://line.me/ti/p/~@tang225"
            target="_blank"
            rel="noreferrer"
            className="flex-1 sm:flex-initial px-4 py-2 rounded-lg bg-[#06c755] hover:bg-[#05b34c] text-white text-xs font-semibold flex items-center justify-center space-x-1.5 transition-colors shadow-xs"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>加 LINE 傳名冊代訂</span>
          </a>
        </div>
      </div>

      {/* 票價一覽表格 */}
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <h4 className="text-xs font-bold text-stone-900 uppercase tracking-wider flex items-center space-x-1.5">
            <Ship className="w-4 h-4 text-[#8c6d3f]" />
            <span>凱旋客輪航線官方票價參考表 (新台幣 NTD)</span>
          </h4>
          <span className="text-[11px] text-stone-500 font-light">全票 12歲以上 / 半票 3~未滿12歲 / 嬰兒未滿3歲</span>
        </div>

        <div className="overflow-x-auto rounded-xl border border-stone-200 bg-white shadow-2xs">
          <table className="w-full text-left text-xs text-stone-700">
            <thead className="bg-stone-100 text-stone-900 uppercase font-semibold border-b border-stone-200">
              <tr>
                <th scope="col" className="px-3.5 py-3">航線</th>
                <th scope="col" className="px-3 py-3 text-center">單程航程</th>
                <th scope="col" className="px-3 py-3 text-right">來回全票</th>
                <th scope="col" className="px-3 py-3 text-right">來回半票</th>
                <th scope="col" className="px-3 py-3 text-right">單程全票</th>
                <th scope="col" className="px-3 py-3 text-right">嬰兒保險票</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-100">
              {routes.map((r, idx) => (
                <tr key={idx} className="hover:bg-stone-50 transition-colors">
                  <td className="px-3.5 py-3 font-medium text-stone-900">{r.route}</td>
                  <td className="px-3 py-3 text-center text-stone-500 font-light">{r.duration}</td>
                  <td className="px-3 py-3 text-right font-semibold text-stone-900">{r.roundTripAdult}</td>
                  <td className="px-3 py-3 text-right text-stone-600">{r.roundTripChild}</td>
                  <td className="px-3 py-3 text-right text-stone-600">{r.oneWayAdult}</td>
                  <td className="px-3 py-3 text-right text-[#8c6d3f] font-medium">{r.infant}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* 清楚的三步驟指引 */}
      <div className="space-y-3">
        <h4 className="text-xs font-bold text-stone-900 uppercase tracking-wider flex items-center space-x-1.5">
          <Calendar className="w-4 h-4 text-[#8c6d3f]" />
          <span>船票代訂標準作業流程</span>
        </h4>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {/* Step 1 */}
          <div className="p-4 rounded-xl bg-white border border-stone-200 shadow-2xs space-y-2">
            <div className="flex items-center justify-between">
              <span className="w-6 h-6 rounded-full bg-[#181614] text-[#d1b07c] text-xs font-bold flex items-center justify-center">
                1
              </span>
              <span className="text-[10px] uppercase tracking-wider text-[#8c6d3f] font-semibold">
                確認班次
              </span>
            </div>
            <h5 className="text-xs font-semibold text-stone-900">查詢欲搭乘船班時刻</h5>
            <p className="text-[11px] text-stone-500 font-light leading-relaxed">
              點擊上方連結至凱旋客輪官網，確認出發與回程的日期與班次時間。
            </p>
          </div>

          {/* Step 2 */}
          <div className="p-4 rounded-xl bg-white border border-stone-200 shadow-2xs space-y-2">
            <div className="flex items-center justify-between">
              <span className="w-6 h-6 rounded-full bg-[#181614] text-[#d1b07c] text-xs font-bold flex items-center justify-center">
                2
              </span>
              <span className="text-[10px] uppercase tracking-wider text-[#8c6d3f] font-semibold">
                名冊與匯款
              </span>
            </div>
            <h5 className="text-xs font-semibold text-stone-900">加 LINE 提供資料並全額匯款</h5>
            <p className="text-[11px] text-stone-500 font-light leading-relaxed">
              提供全員姓名、身分證字號、出生年月日與手機，並匯款 100% 全額船票費用。
            </p>
          </div>

          {/* Step 3 */}
          <div className="p-4 rounded-xl bg-white border border-stone-200 shadow-2xs space-y-2">
            <div className="flex items-center justify-between">
              <span className="w-6 h-6 rounded-full bg-[#181614] text-[#d1b07c] text-xs font-bold flex items-center justify-center">
                3
              </span>
              <span className="text-[10px] uppercase tracking-wider text-[#8c6d3f] font-semibold">
                報到領票
              </span>
            </div>
            <h5 className="text-xs font-semibold text-stone-900">富岡漁港出示證件劃位</h5>
            <p className="text-[11px] text-stone-500 font-light leading-relaxed">
              搭乘當天請提早 50 分鐘至富岡漁港候船室凱旋櫃檯憑證劃位取票登船。
            </p>
          </div>
        </div>
      </div>

      {/* 匯款帳號簡潔條 */}
      <div className="p-4 rounded-xl bg-[#201d1a] text-white flex flex-col sm:flex-row items-center justify-between gap-3 border border-[#8c6d3f]/40">
        <div className="flex items-center space-x-3">
          <Building2 className="w-5 h-5 text-[#d1b07c] shrink-0" />
          <div className="text-xs">
            <span className="text-[#d1b07c] font-medium block">
              船票代訂匯款帳戶：玉山銀行 - 台東分行（代碼 808）戶名：邱美惠
            </span>
            <span className="font-mono text-sm tracking-wider font-bold text-white">
              0716-968-016666
            </span>
          </div>
        </div>
        <button
          onClick={handleCopyAccount}
          className="w-full sm:w-auto px-3.5 py-1.5 rounded bg-[#8c6d3f] hover:bg-[#775a30] text-white text-xs font-medium flex items-center justify-center space-x-1 transition-colors"
        >
          {copied ? <Check className="w-3.5 h-3.5 text-emerald-300" /> : <Copy className="w-3.5 h-3.5" />}
          <span>{copied ? '已複製帳號' : '複製帳號'}</span>
        </button>
      </div>
    </div>
  );
};
