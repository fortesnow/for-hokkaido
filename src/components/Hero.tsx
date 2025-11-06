'use client';

import React, { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import { Link } from '@/i18n/routing';
import { motion, AnimatePresence } from 'framer-motion';

const Hero = () => {
  const t = useTranslations('home.hero');

  // スライドショー用の画像配列（実際のプロジェクト画像を使用）
  const heroImages = [
    "/images/otaru_wedding.webp", // 小樽ウェディング
    "/images/tomamu_spring.webp", // トマム春
    "/images/sapporo_wedding_summer.webp", // 札幌ウェディング夏
    "/images/otaru_autumn.webp", // 小樽秋
    "/images/niseko_snow_landscape.webp", // ニセコ雪景色
    "/images/hakodate_wedding_kimono.webp", // 函館ウェディング和装
    "/images/furano_summer.webp", // 富良野夏
    "/images/couple_spring_cherry_blossom.webp", // カップル春桜
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // 自動スライドショー
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 4000); // 4秒ごとに切り替え

    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <>
      {/* Full Screen Hero Image */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Slideshow */}
        <div className="absolute inset-0 z-0">
          <div className="relative w-full h-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentImageIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1, ease: "easeInOut" }}
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: `url('${heroImages[currentImageIndex]}')`
                }}
              />
            </AnimatePresence>
            <div className="absolute inset-0 bg-black/20" />
          </div>
        </div>

        {/* Title Only - Overlay on Image */}
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {t('title')}
          </motion.h1>
        </div>
      </section>

      {/* Content Section Below Image */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.p 
              className="text-lg md:text-xl lg:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed text-muted-foreground"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {t('subtitle')}
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Link href="/destinations">
                <Button size="lg" className="text-lg px-8 py-6 h-auto">
                  {t('cta')}
                </Button>
              </Link>
              <Link href="/gallery">
                <Button size="lg" variant="outline" className="text-lg px-8 py-6 h-auto">
                  {useTranslations('common')('viewGallery')}
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Hero;
