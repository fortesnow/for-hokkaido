// 画像ファイルのリネームスクリプト
const fs = require('fs');
const path = require('path');

// ユーザーが提供したファイルリストから英語名へのマッピング
const imageMappings = {
  // 英語名: 日本語名
  'otaru-wedding.webp': '小樽ウェディング.webp',
  'tomamu-spring.webp': 'トマム春.webp',
  'sapporo-wedding-summer.webp': '札幌ウェディング夏.webp',
  'sapporo-wedding-summer-1.webp': '札幌ウェディング夏(1).webp',
  'otaru-autumn.webp': '小樽秋.webp',
  'ryo-0078.webp': 'ryo_0078.webp',
  'niseko-snow-couple.webp': 'ニセコ雪景色カップル.webp',
  'niseko-wedding-winter.webp': 'ニセコウェディング冬.webp',
  'hakodate-couple-2.webp': 'カップル函館２.webp',
  'hakodate-wedding-kimono.webp': '函館ウェディング和装.webp',
  'sapporo-night-winter.webp': '札幌夜景冬.webp',
  'niseko-snow-landscape.webp': 'ニセコ雪景色.webp',
  'sapporo-night-winter-2.webp': '札幌夜景冬２.webp',
  'hakodate-proposal.webp': '函館プロポーズ.webp',
  'furano-summer.webp': '富良野夏.webp',
  'hakodate-couple-3.webp': 'カップル函館３.webp',
  'couple-spring-cherry.webp': 'カップル春桜.webp',
  'winter-couple.webp': '冬カップル.webp',
  'niseko-couple.webp': 'ニセコカップル行き.webp',
  'hakodate-family.webp': '家族函館.webp',
  'niseko-family-winter.webp': 'ニセコ家族冬.webp',
  'ryo-0049.webp': 'ryo_0049.webp',
  'hakodate-couple.webp': 'カップル函館.webp',
  '0025.webp': '0025.webp',
  'shikotsu-lake-winter.webp': '支笏湖冬.webp',
  'niseko-snow-couple-1.webp': 'ニセコ雪景色カップル(1).webp',
  'biei-early-summer.webp': '美瑛初夏.webp',
  'sapporo-snow-wedding.webp': '札幌雪ウェディング.webp'
};

// 実際のファイルが存在するパス（ユーザーが提供したファイルリストに基づく）
const sourceDir = 'c:/Users/forte/Downloads/28件のWebP/28件のWebP/';
const targetDir = 'public/images/';

// リネーム処理
function renameImages() {
  Object.entries(imageMappings).forEach(([englishName, japaneseName]) => {
    const sourcePath = path.join(sourceDir, japaneseName);
    const targetPath = path.join(targetDir, englishName);

    // 適切なサブフォルダに配置
    let subfolder = 'gallery/';
    if (englishName.includes('hero') || englishName.includes('otaru') || englishName.includes('sapporo') ||
        englishName.includes('niseko') || englishName.includes('furano') || englishName.includes('hakodate')) {
      if (englishName.includes('-hero')) {
        subfolder = 'hero/';
      } else if (englishName.includes('otaru') || englishName.includes('sapporo') ||
                 englishName.includes('niseko') || englishName.includes('furano') || englishName.includes('hakodate')) {
        subfolder = 'cities/';
      }
    }

    const finalTargetPath = path.join(targetDir, subfolder, englishName);

    console.log(`Copying: ${sourcePath} -> ${finalTargetPath}`);
  });
}

// 実行
renameImages();
