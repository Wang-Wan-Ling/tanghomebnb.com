# CLAUDE.md - 台東 湯園民宿 (TANG HOME) 專案交接與開發指引

此文件專為 **Claude Code** 及接續維護之工程師設計，彙整專案背景、架構設計、品牌規範、資料模型、元件職責與常見開發任務指引。

---

## 1. 專案基本資訊 (Project Overview)

- **業主品牌**：台東 湯園民宿 ‧ TANG HOME（合法民宿登記編號：台東縣民宿第 1639 號）
- **核心定位**：結合「東方美學」、「自耕生態農園」、「常設藝廊」與「尊榮到府私廚」的台東市精品渡假旅宿。
- **主要客群**：包棟家庭、質感旅人、商務自駕遊客、蜜月/紀念日度假者。
- **線上訂房串接**：奧丁丁 OwlNest 官方即時訂房系統 (`https://www.booking-owlnest.com/tangy`)
- **聯絡資訊**：
  - 地址：台東市漢中街 185 巷 79 號（鄰近知本溫泉、鐵花村、台東火車站）
  - 訂房專線：`0966-733-338`
  - 官方 LINE：`@tanghome`

---

## 2. 技術棧與開發環境 (Tech Stack & Tooling)

- **前端框架**：React 19 (`react`, `react-dom`) + TypeScript 5.8
- **建置工具**：Vite 6 (`@vitejs/plugin-react`)
- **樣式系統**：Tailwind CSS v4 (`@tailwindcss/vite`, `@import "tailwindcss";`)
- **動畫庫**：Motion (`motion/react` v12)
- **圖示庫**：Lucide React (`lucide-react`)
- **特效工具**：Canvas Confetti (`canvas-confetti`)
- **字型配置**：Google Fonts（Cinzel, Cormorant Garamond, Noto Serif TC, Plus Jakarta Sans, Noto Sans TC）

### 常用指令 (CLI Scripts)
```bash
# 安裝依賴
npm install

# 啟動開發伺服器 (預設 3000 port, host 0.0.0.0)
npm run dev

# 靜態檔案打包編譯 (輸出至 /dist)
npm run build

# 型別檢查與 Lint 驗證
npm run lint

# 本地預覽生產打包結果
npm run preview
```

---

## 3. 專案目錄結構 (Directory Structure)

```text
.
├── index.html                    # HTML 進入點（字型載入、SEO Meta Tags、Favicon）
├── metadata.json                 # 專案中繼資料與權限宣告
├── package.json                  # 套件定義與 Build Scripts
├── vite.config.ts                # Vite 6 + Tailwind CSS v4 設定
├── src/
│   ├── main.tsx                  # React 應用程式掛載點
│   ├── App.tsx                   # 主頁面結構與全域彈窗狀態樞紐
│   ├── index.css                 # 全域樣式與 Tailwind CSS 引入
│   ├── types.ts                  # 全域型別定義（語言、幣別、房型、藝品、加價購等）
│   ├── data/
│   │   ├── tangHomeData.ts       # 官方房型資料 (ROOM_TYPES)、特色設施、在地景點等
│   │   ├── specialServicesData.ts# 尊榮加價購服務（私廚預約、有機農場、旅遊包車、迎娶禮遇）
│   │   ├── artGalleryData.ts     # 常設藝廊館藏清單、藝術家生平與創作靈感
│   │   └── translations.ts       # 四國語系翻譯字典 (繁中 zh-TW, 簡中 zh-CN, 英 en, 日 ja)
│   ├── utils/
│   │   ├── owlnest.ts            # 奧丁丁 (OwlNest) 訂房參數封裝與跳轉 URL 產生器
│   │   ├── currency.ts           # 多幣別換算與格式化工具 (TWD, USD, JPY, CNY, HKD, EUR)
│   │   └── audio.ts              # 典雅背景氛圍音效處理模組
│   └── components/
│       ├── Navbar.tsx            # 頂部導覽列（含多語切換、多幣別切換、手機側邊抽屜）
│       ├── Hero.tsx              # 首頁主視覺（品牌標題、即時訂房日曆、核心特色指標）
│       ├── TangHomeLogo.tsx      # 官方專屬向量 Logo（山型雙峰、四格窗景、水波漣漪）
│       ├── StickyTopBookingBar.tsx # 頂部黏性快速預訂條
│       ├── MobileStickyBar.tsx   # 手機版底部常駐即時預訂按鈕與導航
│       ├── SuitesSection.tsx     # 房型介紹區塊（相片輪播、設施列表、360度導覽與奧丁丁直連）
│       ├── TangHomeExploreSlider.tsx # 首頁精選橫向滑動選單（居所、私廚、農場、藝廊、台東漫遊）
│       ├── DiscoverTaitungSlider.tsx # 台東在地私房景點橫向輪播卡片
│       ├── FarmAndServicesSection.tsx# 加價購與尊榮訂製服務區塊（含分類標籤切換）
│       ├── CourtyardHeritageSection.tsx # 庭園景觀、綠意環境與建築特色介紹
│       ├── LiveBookingSection.tsx # 即時空房查詢與促銷優惠展示
│       ├── LocationGuideSection.tsx # 交通指引、停車場資訊與景點車程
│       ├── FaqSection.tsx        # 常見入住與退房問題解答 (Accordion)
│       ├── Footer.tsx            # 頁尾合法民宿標章、聯絡方式、LINE QR Code
│       ├── SuiteDetailModal.tsx  # 單一房型深入介紹彈窗（完整圖輯、床型尺寸、備品）
│       ├── BespokeServicesModal.tsx # 加價購服務專屬彈窗（含私廚晚宴、迎娶專案等）
│       ├── SpecialServicesModal.tsx # 特殊專案與個別服務詳細資訊彈窗
│       ├── ArtGalleryModal.tsx   # 常設藝廊線上巡禮與語音/圖文賞析彈窗
│       ├── ExploreAllViewModal.tsx# 湯園全景探索整合彈窗（整合房型、私廚、農場、藝廊）
│       └── ConciergeContactModal.tsx # 線上管家諮詢與即時通訊聯繫彈窗
```

---

## 4. 核心業務邏輯與功能模組 (Key Features & Architecture)

### 4.1 奧丁丁 (OwlNest) 訂房串接 (`/src/utils/owlnest.ts`)
- **機制**：所有預訂操作均以使用者所選日期、人數、語言直接帶入 `https://www.booking-owlnest.com/tangy`。
- **方法**：
  - `buildOwlNestUrl(params)`: 組合出符合奧丁丁規格的 Query String（`lang`, `start`, `end`, `adult`, `child`, `infant`）。
  - `openOwlNestBooking(params)`: 使用 `window.open(url, '_blank')` 另開新視窗開啟，確保使用者體驗流暢。

### 4.2 加價購 ‧ 私廚晚宴預約 (`/src/data/specialServicesData.ts`)
- **服務 ID**：`private-chef-dining`
- **服務特色**：在地資深名廚到府、富岡漁港當日海味、湯園有機自耕農場現摘蔬菜、無菜單料理、桌邊侍餐、餐後復原。
- **UI 入口**：
  - 首頁橫向輪播 `TangHomeExploreSlider`（「加價私廚」分類）
  - 特色服務區 `FarmAndServicesSection`（「加價購 ‧ 私廚預約」標籤）
  - 全景探索彈窗 `ExploreAllViewModal`
  - 訂製服務彈窗 `BespokeServicesModal`

### 4.3 品牌向量 Logo (`/src/components/TangHomeLogo.tsx`)
- **幾何構成**：
  1. 雙峰坡頂山形外輪廓（象徵中央山脈與台東溫暖家屋）。
  2. 右側坡頂內嵌 $2\times2$ 共 4 格細緻窗景。
  3. 底部 3 條流線型水波漣漪線條（象徵溫泉、自流純水與太平洋）。
  4. 色彩以香檳暖金漸層（`#bfa15f` 至 `#8c6d3f`）與高對比深灰基底搭配。

### 4.4 多語系與多幣別支援 (`/src/data/translations.ts`, `/src/utils/currency.ts`)
- **語系支援**：繁體中文 (`zh-TW`)、簡體中文 (`zh-CN`)、英文 (`en`)、日文 (`ja`)。
- **幣別換算**：TWD (新台幣), USD (美金), JPY (日圓), CNY (人民幣), HKD (港幣), EUR (歐元)。

---

## 5. 設計規範與重要維護規則 (Design Guidelines & Rules)

1. **嚴禁無中生有之主題**：
   - 本宿**沒有任何布農主題**，請勿自行添加布農文化、八部合音或非業主提供的部落介紹。
2. **文字排版與按鈕防斷字 (nowrap)**：
   - 訂房按鈕文字統一使用俐落的 **「即時預訂住宿」** 或 **「了解私廚預約方案」**。
   - 所有重要按鈕標籤必須加上 `whitespace-nowrap` 或 `shrink-0`，避免單一中文字落入第二行。
3. **品牌用字校正**：
   - 訂房平台名稱一律使用 **「奧丁丁」**（勿寫作「奧丁地」或「Owl Nest」未翻譯）。
4. **色調美學 (Neutral & Champagne Gold)**：
   - 背景色主要為典雅暖灰白 `#fbf9f5` / `#f5f2eb`。
   - 金色點綴色主要使用 `#8c6d3f`、`#bfa15f`、`#d1b07c`。
   - 內文字色主要使用 `#1c1917` (Stone 900) 與 `#44403c` (Stone 700)。

---

## 6. 接續開發與部署指引 (Deployment & Next Steps for Claude Code)

### 6.1 部署至 Cloudflare Pages / Vercel / Netlify
本專案為標準 Vite SPA，可直接透過下列設定部署：
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Node.js Version**: `>= 18.0.0` (建議 Node 20 / 22)

### 6.2 預留擴充功能建議 (Suggested Enhancements)
1. **PWA 支援**：可透過 `vite-plugin-pwa` 增加手機離線快取與安裝至主畫面功能。
2. **LINE Notify / Webhook 整合**：若需增加專屬後台即時收到私廚預約或包棟迎娶通知，可串接 LINE Messaging API。
3. **動態房價 API**：若未來奧丁丁開放即時庫存 API，可於 `LiveBookingSection` 進行即時房況快取展示。

---
*文件產生時間：2026-09-02*  
*適用維護者：Claude Code / AI Coding Assistant*
