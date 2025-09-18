# 🌸 SHIKI Photography HOKKAIDO

**四季の美しさを写真に込めて** - Professional photography services capturing the beauty of Hokkaido's four seasons

![Next.js](https://img.shields.io/badge/Next.js-15.5-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4-38bdf8)
![i18n](https://img.shields.io/badge/i18n-English%20%2F%20Japanese-green)

## 🎯 概要

SHIKI Photography HOKKAIDOは、北海道の四季の美しさを背景とした写真撮影サービスを提供する多言語対応ウェブサイトです。観光客向けのバケーション撮影、カップル・プロポーズ撮影、前撮り撮影などの専門サービスを展開しています。

## ✨ 主な機能

### 🌐 多言語対応
- **英語** - 海外からの観光客向け
- **日本語** - 国内ユーザー向け
- `next-intl`による完全な国際化対応

### 📱 レスポンシブデザイン
- モバイルファースト設計
- タブレット・デスクトップ最適化
- スムーズなアニメーション（Framer Motion）

### 🎨 現代的なUI/UX
- **shadcn/ui** コンポーネントライブラリ
- **Tailwind CSS** による美しいスタイリング
- ダークモード対応準備完了

### 📸 専門撮影サービス
- **Vacation Photography** - 家族・友人との思い出撮影
- **Couple & Proposal** - カップル・プロポーズ撮影
- **Pre-wedding** - 前撮り・エンゲージメント撮影
- **Destinations** - 北海道各地の絶景ロケーション

### 🔍 SEO最適化
- 構造化データ（JSON-LD）対応
- `hreflang`による多言語SEO
- 自動サイトマップ生成
- Core Web Vitals最適化

## 🛠️ 技術スタック

### フロントエンド
- **[Next.js 15.5](https://nextjs.org/)** - App Router
- **[TypeScript](https://www.typescriptlang.org/)** - 型安全性
- **[Tailwind CSS](https://tailwindcss.com/)** - スタイリング
- **[shadcn/ui](https://ui.shadcn.com/)** - UIコンポーネント

### 国際化・アニメーション
- **[next-intl](https://next-intl-docs.vercel.app/)** - 多言語対応
- **[Framer Motion](https://www.framer.com/motion/)** - アニメーション
- **[Lucide React](https://lucide.dev/)** - アイコン

### フォーム・バリデーション
- **[React Hook Form](https://react-hook-form.com/)** - フォーム管理
- **[Zod](https://zod.dev/)** - スキーマバリデーション

## 🚀 セットアップ

### 前提条件
- Node.js 18.0以上
- npm または yarn

### インストール

```bash
# リポジトリをクローン
git clone https://github.com/fortesnow/for-hokkaido.git
cd for-hokkaido

# 依存関係をインストール
npm install

# 開発サーバーを起動
npm run dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開いてサイトを確認してください。

### ビルド

```bash
# プロダクションビルド
npm run build

# ビルド結果をローカルで確認
npm start
```

## 📁 プロジェクト構造

```
shiki-photography/
├── src/
│   ├── app/                    # App Router ページ
│   │   ├── [locale]/          # 多言語対応ページ
│   │   │   ├── page.tsx       # ホームページ
│   │   │   ├── vacation/      # バケーション撮影
│   │   │   ├── couple/        # カップル撮影
│   │   │   ├── prewedding/    # 前撮り撮影
│   │   │   ├── destinations/  # 撮影地案内
│   │   │   ├── gallery/       # ギャラリー
│   │   │   ├── pricing/       # 料金案内
│   │   │   ├── booking/       # 予約フォーム
│   │   │   ├── contact/       # お問い合わせ
│   │   │   ├── about/         # 会社概要
│   │   │   └── faq/          # よくある質問
│   │   ├── layout.tsx         # ルートレイアウト
│   │   ├── sitemap.ts         # サイトマップ
│   │   └── robots.ts          # robots.txt
│   ├── components/            # React コンポーネント
│   │   ├── pages/             # ページ固有コンポーネント
│   │   ├── SEO/               # SEO関連コンポーネント
│   │   └── ui/                # shadcn/ui コンポーネント
│   ├── i18n/                  # 国際化設定
│   │   ├── request.ts         # メッセージローダー
│   │   └── routing.ts         # ルーティング設定
│   ├── lib/                   # ユーティリティ
│   └── middleware.ts          # Next.js ミドルウェア
├── messages/                  # 翻訳ファイル
│   ├── en.json               # 英語翻訳
│   └── ja.json               # 日本語翻訳
└── public/                   # 静的ファイル
```

## 🌐 多言語対応

### サポート言語
- **English** (`/en`) - 英語（デフォルト）
- **Japanese** (`/ja`) - 日本語

### 翻訳ファイルの編集
`messages/` フォルダ内のJSONファイルを編集することで翻訳内容を変更できます。

```json
// messages/en.json
{
  "navigation": {
    "home": "Home",
    "vacation": "Vacation Photography"
  }
}

// messages/ja.json
{
  "navigation": {
    "home": "ホーム",
    "vacation": "バケーション撮影"
  }
}
```

## 🎨 カスタマイズ

### カラーテーマ
`tailwind.config.js` でカラーパレットをカスタマイズできます。

### コンポーネントスタイル
`src/components/ui/` 内のshadcn/uiコンポーネントを直接編集して、デザインをカスタマイズできます。

## 📊 パフォーマンス

- **Lighthouse Score**: 95+
- **Core Web Vitals**: 最適化済み
- **First Load JS**: 120-272KB
- **静的生成**: 29ページすべてがSSG対応

## 🚀 デプロイ

### Vercel（推奨）
```bash
# Vercel CLIでデプロイ
npx vercel

# または、GitHubにプッシュして自動デプロイ
```

### その他のプラットフォーム
Next.jsの静的エクスポート機能により、任意のホスティングサービスにデプロイ可能です。

## 🤝 コントリビューション

1. このリポジトリをフォーク
2. フィーチャーブランチを作成 (`git checkout -b feature/amazing-feature`)
3. 変更をコミット (`git commit -m 'Add amazing feature'`)
4. ブランチにプッシュ (`git push origin feature/amazing-feature`)
5. プルリクエストを作成

## 📄 ライセンス

このプロジェクトはMITライセンスの下で公開されています。詳細は [LICENSE](LICENSE) ファイルをご覧ください。

## 📞 お問い合わせ

**SHIKI Photography HOKKAIDO**
- 📧 Email: info@shiki-photo-hokkaido.com
- 📱 Phone: +81-XX-XXXX-XXXX
- 🌐 Website: [https://shiki-photo-hokkaido.com](https://shiki-photo-hokkaido.com)

---

**四季折々の北海道で、あなたの特別な瞬間を美しい写真に残しませんか？**