# ReactLikeDislikeTypescript - Like/Dislike 按鈕組件

## 📋 項目描述

一個使用 React + TypeScript 實現的 Like/Dislike 按鈕組件。

## ✨ 功能特點

- ✅ Like/Dislike 互斥選擇
- ✅ 即時計數更新
- ✅ TypeScript 類型安全
- ✅ useReducer 狀態管理
- ✅ 組件化設計

## 🛠 技術棧

- **React 18** - 前端框架
- **TypeScript** - 類型安全
- **useReducer** - 狀態管理
- **Webpack** - 模組打包
- **classnames** - CSS 類名管理

## 📦 項目結構

```
src/
├── App.tsx                 # 主應用組件
├── index.tsx              # 應用入口點
└── components/
    ├── LikeDislikeBtn.tsx # 主要業務邏輯組件
    └── Btn.tsx            # 可重用按鈕組件
```

## 🧩 組件設計

### LikeDislikeBtn 組件
- 使用 `useReducer` 管理複雜狀態
- 處理 Like/Dislike 的互斥邏輯
- 管理計數器的增減

### Btn 組件  
- 可重用的按鈕組件
- 支持 Like/Dislike 兩種類型
- TypeScript 接口定義完整的 Props

## 📊 狀態管理

```typescript
interface State {
    likeCount: number;      // 喜歡計數
    dislikeCount: number;   // 不喜歡計數
    isLiked: boolean;       // 是否已點讚
    isDisliked: boolean;    // 是否已點踩
}
```

### Action 類型
- `TOGGLE_LIKE` - 切換喜歡狀態
- `TOGGLE_DISLIKE` - 切換不喜歡狀態

## 🚀 運行項目

### 安裝依賴
```bash
npm install
```

### 開發模式
```bash
npm run dev
```
訪問 http://localhost:3000

### 生產建置
```bash
npm run build
```


