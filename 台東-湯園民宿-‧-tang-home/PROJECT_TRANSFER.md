# 🏨 台東 湯園民宿 (TANG HOME) 官方網站 — 專案移轉與開發指南 (Claude Code)

本文件旨在提供給 **Claude Code** 或其他開發團隊接續進行架構擴充、UI 優化、SEO 調校與上線維運使用。

---

## 📌 專案概述 (Project Overview)

- **專案名稱**：台東 湯園民宿 (TANG HOME) 官方形象與即時訂房網站
- **官方網站**：`https://www.tanghome.com.tw/`
- **合法登記證號**：台東縣合法民宿登記第 1639 號（姐妹館「上弦月民宿」第 1238 號）
- **設計語彙**：**Mandarin Oriental Qianmen (文華東方)** 風格之沉穩雅致、極簡純粹、現代奢華東方美學（暖石白 `#fbf9f5`、摩卡金 `#8c6d3f / #c4a67d`、深炭黑 `#1c1c1c`）
- **核心特色**：
  - **頁面最上方重要聯繫資訊列**：電話 `0966-733-338`、LINE `@tanghome`、火車站 5 分鐘、台東合法登記 1639 號。
  - **首頁動態影片 (Ambient Video Background)**：高畫質慢鏡頭自然光影影片，並支援一鍵切換靜態高畫質輪播圖庫與播放/暫停。
  - **「發現台東 (Discover Taitung)」滑動式圖片選單**：橫向滾動探索卡片，包含私房熱門景點、手作私廚早餐、全棟無障礙電梯、專屬免費停車場等旅客最想了解的亮點。
  - **房型列表 (Suites Collection)**：緊接於選單下方，清晰陳列 5 大房型、格局平方公尺、免治馬桶配備、定價矩陣與一鍵即時預訂。
  - **全域浮動頂部快速訂房列 (`StickyTopBookingBar`)**：無論滑動到頁面多深，上方均會優雅浮現日期選擇、人數篩選與即時訂房按鈕，操作直覺不中斷。
  - **一頁式無縫奧丁丁 (OwlNest) 即時訂房系統**：深度整合 `https://www.booking-owlnest.com/tangy`，直接站內同步空房與線上刷卡結帳，不需跳轉外部網站。
  - **多語系與多幣別引擎**：支援繁體中文 (`zh-TW`)、簡體中文 (`zh-CN`)、英文 (`en`)、日語 (`ja`) 與 5 大幣別 (`TWD`, `USD`, `JPY`, `EUR`, `CNY`) 即時轉換。

---

## 🛠️ 技術棧 (Tech Stack)

- **框架**：React 18+ / TypeScript / Vite
- **樣式庫**：Tailwind CSS (現代 Utility-first CSS)
- **字體搭配**：Cinzel + Cormorant Garamond (英式優雅) + Noto Serif TC (典雅襯線) + Plus Jakarta Sans
- **圖示庫**：`lucide-react`
- **音效引擎**：Web Audio API 自然白噪音合成器 (`src/utils/audio.ts`)
- **地圖與導航**：Google Maps + 景點座標距離計算
- **狀態管理**：React 現代 Hooks (State, Effect, Memo)

---

## 📁 專案檔案結構 (Project Structure)

```text
├── index.html                   # HTML 進入點、Mandarin Oriental 字體與 SEO Meta 標籤
├── metadata.json                # 應用程式描述與權限定義
├── package.json                 # 專案套件與啟動指令
├── tsconfig.json                # TypeScript 編譯設定
├── vite.config.ts               # Vite 打包配置
├── src/
│   ├── main.tsx                 # React 進入點
│   ├── App.tsx                  # 主應用程式佈局（Navbar ➔ StickyBar ➔ Hero ➔ DiscoverSlider ➔ Suites ➔ LiveBooking）
│   ├── index.css                # 全域樣式與 Tailwind 配置
│   ├── types.ts                 # 全域型別定義 (RoomType, Experience, Language, Currency 等)
│   ├── data/
│   │   ├── tangHomeData.ts      # 民宿官方真實資料（5 大房型、定價矩陣、特色體驗、周邊景點、交通指引）
│   │   └── translations.ts      # 四國語言完整字典檔 (zh-TW, zh-CN, en, ja)
│   ├── utils/
│   │   ├── audio.ts             # 氛圍輕音白噪音產生器
│   │   ├── currency.ts          # 貨幣匯率與格式化工具
│   │   └── owlnest.ts           # 奧丁丁 OwlNest 訂房 URL 建構器與參數轉換器
│   └── components/
│       ├── Navbar.tsx           # 頂部聯繫資訊條 + 主導覽列（電話、LINE、語系、幣別、音效）
│       ├── StickyTopBookingBar.tsx # 核心！滑動時常駐頂部的即時查房與預約列
│       ├── Hero.tsx             # 大氣氛圍影片背景、播放控制、快速查房篩選器、4 大品質保證標章
│       ├── DiscoverTaitungSlider.tsx # 「發現台東」滑動式圖片資訊選單（景點、早餐、電梯、停車）
│       ├── SuitesSection.tsx    # 5 大精選房型編輯式卡片、規格坪數、免治馬桶、平日優惠價起
│       ├── SuiteDetailModal.tsx # 房型細節彈窗（圖集、設備、加人加床政策、直達預約）
│       ├── LiveBookingSection.tsx # 站內免跳轉奧丁丁即時訂房嵌入專區 (OwlNest Direct Engine)
│       ├── BookingFlowModal.tsx # 彈窗式即時訂房與篩選視窗
│       ├── ArchitecturePhilosophy.tsx # 橘白文化石、電梯、迎賓馬賽克壁畫故事
│       ├── ExperiencesSection.tsx # 特色服務（單車漫遊、研磨咖啡吧、跳島船票諮詢）
│       ├── DiningSection.tsx    # 每日手作元氣早餐與台東在地食材介紹
│       ├── LocationGuideSection.tsx # 台東周邊景點導覽與 Google Maps 交通指引
│       ├── GuestReviews.tsx     # 旅客 Google 5 星好評回饋
│       ├── FaqSection.tsx       # 入住須知、取消政策、加人加床規定與常見問答
│       ├── ConciergeContactModal.tsx # LINE 客服 (@tanghome)、電話直撥、管家即時諮詢
│       ├── MobileStickyBar.tsx  # 行動裝置底端快速預訂列
│       └── Footer.tsx           # 頁尾合法證號、版權宣告、交通資訊與社群連結
```

---

## ⚡ 核心功能與設計規範 (Core Features)

### 1. 奧丁丁 (OwlNest) 訂房連動機制 (`src/utils/owlnest.ts`)
- **基底網址**：`https://www.booking-owlnest.com/tangy`
- **參數映射**：
  - 語系：`zh-TW` ➔ `zh_TW`, `zh-CN` ➔ `zh_CN`, `ja` ➔ `ja`, `en` ➔ `en`
  - 日期：`start=YYYY-MM-DD`、`end=YYYY-MM-DD`
  - 人數：`adult=2`、`child=0`、`infant=0`
- **無縫嵌入 (`LiveBookingSection.tsx` & `BookingFlowModal.tsx`)**：
  - 使用安全 `<iframe>` 內嵌，旅客在網頁內直接操作房況查詢、方案選擇與信用卡結帳，完全無需跳出網站。

### 2. 真實官方房型與定價資料 (`src/data/tangHomeData.ts`)
- **合家歡六人房**（1加大床+2標準床 / 45 m² / 平日 $4,200 起）
- **合家歡四人房**（2加大床 / 36 m² / 平日 $3,200 起）
- **湯園四人房**（2標準床 / 33 m² / 平日 $2,800 起）
- **湯園雙人加大床房**（1特大床 / 26 m² / 平日 $2,000 起）
- **湯園雙人雙床房**（2單人床 / 26 m² / 平日 $2,000 起）
- **官方加人規定**：大人加床 +$500/晚（含早餐與備品），國小以下加人不加床 +$300/晚。

---

## 🚀 本地開發與部署指令 (Local Setup & Run)

```bash
# 1. 安裝所有依賴套件
npm install

# 2. 啟動開發伺服器 (綁定 3000 port)
npm run dev

# 3. 執行 TypeScript 與 Lint 檢查
npm run lint

# 4. 正式環境編譯建置
npm run build

# 5. 預覽正式建置檔案
npm run preview
```

---

## 📋 給 Claude Code 的後續優化建議清單 (Next Steps for Claude Code)

1. **SEO 與 Open Graph 優化**：
   - 在 `index.html` 加入結構化資料 (Schema.org `Hotel` / `BedAndBreakfast` JSON-LD)。
   - 增加 Sitemap 與 robots.txt 配置。
2. **PWA 或推播支援**：
   - 增加 Web App Manifest (`manifest.json`)，讓旅客可將網站加入手機主畫面。
3. **跳島行程（綠島 / 蘭嶼）套裝方案模組**：
   - 可在 `ExperiencesSection.tsx` 擴充客製化富岡漁港接駁與船票代訂表單。
