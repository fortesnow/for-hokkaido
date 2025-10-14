'use client';

import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from '@/i18n/routing';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, MapPin, Star } from 'lucide-react';

export default function CouplePage() {
  // カテゴリ別の画像データ
  const categoryImages = {
    couple: [
      '/images/couple_hakodate.webp',
      '/images/couple_spring_cherry_blossom.webp',
      '/images/niseko_snow_landscape_couple.webp',
      '/images/winter_couple.webp',
      '/images/couple_hakodate_2.webp',
      '/images/couple_hakodate_3.webp',
    ],
    proposal: [
      '/images/hakodate_proposal.webp',
      '/images/otaru_autumn.webp',
      '/images/sapporo_night_view_winter.webp',
      '/images/niseko_snow_landscape.webp',
      '/images/furano_summer.webp',
      '/images/biei_early_summer.webp',
    ],
    engagement: [
      '/images/sapporo_wedding_summer.webp',
      '/images/otaru_wedding.webp',
      '/images/hakodate_wedding_kimono.webp',
      '/images/niseko_wedding_winter.webp',
      '/images/sapporo_snow_wedding.webp',
      '/images/tomamu_spring.webp',
    ],
  };

  const [activeCategory, setActiveCategory] = useState('couple');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // 自動カルーセル
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        (prevIndex + 1) % categoryImages[activeCategory].length
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [activeCategory]);

  // ギャラリー画像データ
  const galleryImages = [
    '/images/couple_hakodate.webp',
    '/images/hakodate_proposal.webp',
    '/images/sapporo_wedding_summer.webp',
    '/images/niseko_snow_landscape_couple.webp',
    '/images/couple_spring_cherry_blossom.webp',
    '/images/otaru_wedding.webp',
    '/images/winter_couple.webp',
    '/images/niseko_wedding_winter.webp',
    '/images/couple_hakodate_2.webp',
    '/images/sapporo_snow_wedding.webp',
    '/images/couple_hakodate_3.webp',
    '/images/hakodate_wedding_kimono.webp',
  ];

  const packages = [
    {
      category: 'couple',
      name: 'カップル撮影',
      price: '¥35,000',
      priceUsd: '$250',
      duration: '2 hours',
      features: [
        '50+ edited photos',
        '1-2 locations',
        'Natural posing guidance',
        'Online gallery',
        '48-hour delivery',
      ],
    },
    {
      category: 'proposal',
      name: 'プロポーズ撮影',
      price: '¥55,000',
      priceUsd: '$400',
      duration: '3 hours',
      popular: true,
      features: [
        '80+ edited photos',
        'Secret planning assistance',
        '2-3 locations',
        'Surprise moment capture',
        'Online gallery',
        'Same-day preview',
        '24-hour delivery',
      ],
    },
    {
      category: 'engagement',
      name: 'エンゲージメント撮影',
      price: '¥45,000',
      priceUsd: '$330',
      duration: '2.5 hours',
      features: [
        '70+ edited photos',
        '2 locations',
        'Save-the-date photos',
        'Social media ready',
        'Online gallery',
        '72-hour delivery',
      ],
    },
  ];

  const optionalServices = [
    {
      name: '追加ロケーション',
      price: '¥10,000',
      priceUsd: '$75',
      description: '1箇所追加あたり',
    },
    {
      name: '追加撮影時間',
      price: '¥8,000',
      priceUsd: '$60',
      description: '30分あたり',
    },
    {
      name: '札幌・小樽圏外出張費',
      price: '¥3,000',
      priceUsd: '$25',
      description: '片道あたり',
    },
    {
      name: '函館・ニセコ圏外出張費',
      price: '¥8,000',
      priceUsd: '$60',
      description: '片道あたり',
    },
    {
      name: 'サンセット/サンライズ撮影',
      price: '¥15,000',
      priceUsd: '$110',
      description: '特別な時間帯の撮影',
    },
    {
      name: 'プロポーズプランニング',
      price: '¥20,000',
      priceUsd: '$150',
      description: '詳細なプロポーズ企画',
    },
  ];

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section with Category Carousel */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Background Carousel */}
        <div className="absolute inset-0 z-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${activeCategory}-${currentImageIndex}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url('${categoryImages[activeCategory][currentImageIndex]}')`
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
                Couple & Proposal Photography
              </h1>

              <p className="text-lg md:text-xl mb-8 max-w-2xl leading-relaxed">
                Romantic photography sessions and surprise proposal planning in Hokkaido&apos;s most beautiful locations
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/booking">
                  <Button size="lg" className="text-lg px-8 py-6 h-auto">
                    Book Now
                  </Button>
                </Link>
                <Link href="/gallery">
                  <Button size="lg" variant="outline" className="text-lg px-8 py-6 h-auto bg-white/10 border-white/30 text-white hover:bg-white/20">
                    View Gallery
                  </Button>
                </Link>
              </div>
            </motion.div>

            {/* Category Selection & Caption */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-center lg:text-left"
            >
              {/* Category Tabs */}
              <div className="flex justify-center lg:justify-start mb-6">
                {Object.keys(categoryImages).map((category) => (
                  <button
                    key={category}
                    onClick={() => {
                      setActiveCategory(category);
                      setCurrentImageIndex(0);
                    }}
                    className={`px-4 py-2 mx-1 rounded-lg text-sm font-medium transition-all duration-300 ${
                      activeCategory === category
                        ? 'bg-white text-gray-900'
                        : 'bg-white/20 text-white hover:bg-white/30'
                    }`}
                  >
                    {category === 'couple' ? 'カップル' :
                     category === 'proposal' ? 'プロポーズ' : 'エンゲージメント'}
                  </button>
                ))}
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
                <h3 className="text-xl md:text-2xl font-semibold text-white mb-4">
                  Romantic Photography Services
                </h3>
                <p className="text-white/90 leading-relaxed mb-4">
                  Creating intimate and romantic memories in Hokkaido&apos;s stunning landscapes
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm">カップル</span>
                  <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm">プロポーズ</span>
                  <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm">エンゲージメント</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Image indicators */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {categoryImages[activeCategory].map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              ギャラリー
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              私たちのカップル・プロポーズフォトグラフィーの作品をご覧ください
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="aspect-square bg-cover bg-center"
                     style={{ backgroundImage: `url('${image}')` }}>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link href="/gallery">
              <Button size="lg" className="text-lg px-8 py-6 h-auto">
                すべてのギャラリーを見る
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              撮影パッケージ
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              カップル・プロポーズ撮影に最適なパッケージをご用意しています
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="relative"
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                      人気
                    </span>
                  </div>
                )}

                <Card className={`h-full hover:shadow-xl transition-all duration-300 ${
                  pkg.popular ? 'border-primary shadow-lg' : 'border-0 shadow-md'
                }`}>
                  <CardHeader className="text-center">
                    <CardTitle className="text-xl md:text-2xl">{pkg.name}</CardTitle>
                    <div className="text-sm text-muted-foreground">{pkg.duration}</div>
                  </CardHeader>

                  <CardContent className="text-center">
                    <div className="mb-6">
                      <div className="text-3xl font-bold text-primary mb-1">{pkg.price}</div>
                      <div className="text-lg text-muted-foreground">{pkg.priceUsd}</div>
                    </div>

                    <div className="space-y-3 mb-6 text-left">
                      {pkg.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <Heart className="h-4 w-4 text-red-500 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <Link href="/booking">
                      <Button
                        className={`w-full ${
                          pkg.popular
                            ? 'bg-primary hover:bg-primary/90'
                            : ''
                        }`}
                        variant={pkg.popular ? 'default' : 'outline'}
                      >
                        Book Now
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Optional Services Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              オプションサービス
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              必要に応じて追加できるオプションサービス
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {optionalServices.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 border-0 shadow-md">
                  <CardContent className="p-6 text-center">
                    <div className="mb-4">
                      <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                        {service.name}
                      </h3>
                      <div className="text-2xl font-bold text-primary mb-1">
                        {service.price}
                      </div>
                      <div className="text-sm text-muted-foreground mb-3">
                        {service.priceUsd}
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link href="/booking">
              <Button size="lg" className="text-lg px-8 py-6 h-auto">
                今すぐ予約する
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
