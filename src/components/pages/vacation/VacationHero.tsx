'use client';

import React, { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import { Link } from '@/i18n/routing';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';

const VacationHero = () => {
  const t = useTranslations('vacation');
  const common = useTranslations('common');

  // サブカテゴリのカルーセル画像
  const categoryImages = [
    {
      category: 'family',
      image: 'https://images.unsplash.com/photo-1609220136736-443140cffec6?q=80&w=2070&auto=format&fit=crop',
      title: 'Family Photos'
    },
    {
      category: 'solo',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070&auto=format&fit=crop',
      title: 'Solo Travel'
    },
    {
      category: 'group',
      image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=2070&auto=format&fit=crop',
      title: 'Group Photos'
    },
    {
      category: 'birthday',
      image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=2070&auto=format&fit=crop',
      title: 'Birthday'
    },
    {
      category: 'anniversary',
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop',
      title: 'Anniversary'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // 自動カルーセル
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % categoryImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [categoryImages.length]);

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Carousel */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('${categoryImages[currentIndex].image}')`
            }}
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[70vh]">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              Vacation Photography
            </h1>

            <p className="text-lg md:text-xl mb-8 max-w-2xl leading-relaxed">
              {t('hero.description')}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/booking">
                <Button size="lg" className="text-lg px-8 py-6 h-auto">
                  {common('bookNow')}
                </Button>
              </Link>
              <Link href="/gallery">
                <Button size="lg" variant="outline" className="text-lg px-8 py-6 h-auto bg-white/10 border-white/30 text-white hover:bg-white/20">
                  {common('viewGallery')}
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Category Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4"
          >
            {categoryImages.slice(0, 3).map((item, index) => (
              <motion.div
                key={item.category}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                className="relative group cursor-pointer"
              >
                <Card className="overflow-hidden border-0 shadow-lg bg-white/10 backdrop-blur-sm">
                  <CardContent className="p-4 text-center">
                    <div className="text-white">
                      <h3 className="text-lg font-semibold mb-2">{t(`categories.${item.category}`)}</h3>
                      <p className="text-sm text-white/80">サブカテゴリ説明</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Category Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {categoryImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default VacationHero;
