
<!-- HERO SECTION -->
# 🌿 Trail Walker

<p align="center">
  <b>一個結合台灣步道資料與即時天氣資訊的決策輔助工具</b><br/>
  幫助使用者快速判斷「今天適不適合去爬哪一條步道」
</p>

<p align="center">
  <a href="https://trail-walker.vercel.app/">
    🔗 Live Demo
  </a>
</p>

---

<!-- BADGES -->
<p align="center">
  <img src="https://img.shields.io/badge/React-18+-61DAFB?logo=react&logoColor=white" />
  <img src="https://img.shields.io/badge/Vite-Build-646CFF?logo=vite&logoColor=white" />
  <img src="https://img.shields.io/badge/Redux-Toolkit-764ABC?logo=redux&logoColor=white" />
  <img src="https://img.shields.io/badge/Tailwind-CSS-38B2AC?logo=tailwindcss&logoColor=white" />
  <img src="https://img.shields.io/badge/API-Weather%20%26%20Trail-blue" />
</p>

---

## 🎯 專案目標

在規劃登山或步道行程時，使用者需要同時查詢：

- 🏞 步道資訊（難度、位置、路線）
- 🌦 即時天氣（是否下雨、溫度）
- 📍 是否適合出發

👉 這些資訊通常分散在不同網站

### ✨ 本專案解決的問題
將「步道 + 天氣」整合在同一個畫面，降低決策成本。

---

## 🧠 我的負責內容

- React 前端架構設計與開發
- Redux Toolkit 狀態管理設計
- REST API 串接與資料整合
- UI / UX 流程設計
- RWD 響應式切版

---

## ⚙️ 主要功能

### 🏞 步道探索
- 串接台灣步道資料 API
- 支援篩選與列表瀏覽
- 卡片式資訊呈現

### 🌦 即時天氣整合
- OpenWeatherMap API 串接
- 每條步道顯示對應天氣資訊

### 🎯 決策輔助 UI
- 步道 + 天氣整合顯示
- 降低查詢切換成本

### 📱 響應式設計
- 支援 平板 / 桌機

---

## 🧩 技術棧

**Frontend**
- React (Vite)
- Redux Toolkit
- Axios
- Tailwind CSS

**API**
- Taiwan Trail Data API
- OpenWeatherMap API

---

## 🚧 技術挑戰與解法

### 🔹 多 API 整合問題
**問題：** 資料來源不同

**解法：**
- Redux 分離 trail / weather state
- UI 層做資料整合

---

### 🔹 狀態管理複雜
**問題：** API + UI state 容易混亂

**解法：**
- Redux Toolkit slice 拆分
- 清楚分層管理

---

### 🔹 UX 決策負擔
**問題：** 使用者需自己判斷天氣

**解法：**
- 將天氣資訊直接嵌入步道卡片
- 減少額外查詢
## 🖥 專案預覽

<p align="center">
  <img src="./screenshots/preview.gif" width="80%" />
</p>

---

## 🌍 線上展示

<p align="center">
  <a href="https://trail-walker.vercel.app/">
    👉 前往 Live Demo
  </a>
</p>

---

## 🔮 未來優化方向

- 🗺 地圖整合（Mapbox / Google Maps）
- ❤️ 收藏步道功能
- 🧠 天氣導向推薦系統
- 📡 PWA 離線支援
- ⚡ 後端快取 API

---
