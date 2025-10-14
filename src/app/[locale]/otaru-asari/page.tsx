'use client';

import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from '@/i18n/routing';
import { motion } from 'framer-motion';
import { MapPin, Camera, Heart, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';

export default function OtaruAsariPage() {
  // ヒーロー画像
  const heroImage = '/images/otaru_wedding.webp';

  // ギャラリー画像とロケーション情報
  const galleryData = [
    { image: '/images/otaru_wedding.webp', location: 'Otaru Canal', caption: '小樽運河の歴史的な街並み' },
    { image: '/images/otaru_autumn.webp', location: 'Asari Area', caption: '朝里エリアの紅葉風景' },
    { image: '/images/ryo_0078.webp', location: 'Herring Mansion', caption: 'にしん御殿の伝統建築' },
    { image: '/images/0025.webp', location: 'Sakaimachi Street', caption: '堺町通りのレトロな街並み' },
    { image: '/images/shikotsuko_winter.webp', location: 'Shikotsu Lake', caption: '支笏湖の冬景色' },
    { image: '/images/biei_early_summer.webp', location: 'Otaru Port', caption: '小樽港のマリーナ風景' },
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % galleryData.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + galleryData.length) % galleryData.length);
  };

  // 都市の特徴
  const features = [
    'Historic port city with scenic coastal views',
    'Beautiful canals and historic stone warehouses create a romantic atmosphere perfect for photography'
  ];

  const categories = [
    { name: 'Vacation Photography', href: '/vacation', icon: Camera },
    { name: 'Couple & Proposal', href: '/couple', icon: Heart },
    { name: 'Pre-wedding', href: '/prewedding', icon: Sparkles },
  ];

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url('${heroImage}')` }}
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative z-10 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">Otaru, Asari</h1>
            <div className="flex items-center justify-center gap-2 text-lg mb-8">
              <MapPin className="h-5 w-5" />
              <span>札幌から車で約30分の港町エリア</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8">小樽・朝里の魅力</h2>
            <div className="max-w-4xl mx-auto space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-6 rounded-lg shadow-md"
                >
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {feature}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">撮影スポットギャラリー</h2>
            <p className="text-lg text-muted-foreground">小樽・朝里で撮影できる様々なロケーションをご紹介</p>
          </motion.div>

          {/* Main Gallery Image with Navigation */}
          <div className="relative max-w-4xl mx-auto mb-8">
            <motion.div
              key={currentImageIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <Card className="overflow-hidden border-0 shadow-xl">
                <div className="relative h-96 md:h-[500px]">
                  <div
                    className="w-full h-full bg-cover bg-center"
                    style={{ backgroundImage: `url('${galleryData[currentImageIndex].image}')` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  {/* Location Info Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-2xl font-bold mb-2">{galleryData[currentImageIndex].location}</h3>
                    <p className="text-lg opacity-90">{galleryData[currentImageIndex].caption}</p>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Navigation Arrows */}
            <Button
              variant="outline"
              size="icon"
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white border-gray-300"
              onClick={prevImage}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white border-gray-300"
              onClick={nextImage}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>

            {/* Dots Indicator */}
            <div className="flex justify-center space-x-2 mt-4">
              {galleryData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentImageIndex ? 'bg-primary' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Thumbnail Grid */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="grid grid-cols-3 md:grid-cols-6 gap-3"
          >
            {galleryData.map((item, index) => (
              <motion.button
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                onClick={() => setCurrentImageIndex(index)}
                className={`relative group ${index === currentImageIndex ? 'ring-2 ring-primary' : ''}`}
              >
                <Card className="overflow-hidden border-0 shadow-md">
                  <div className="relative h-20">
                    <div
                      className="w-full h-full bg-cover bg-center"
                      style={{ backgroundImage: `url('${item.image}')` }}
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </Card>
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">撮影サービス</h2>
            <p className="text-lg text-muted-foreground">各カテゴリの詳細ページをご覧ください</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((category, index) => {
              const Icon = category.icon;
              return (
                <motion.div
                  key={category.name}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                  className="group"
                >
                  <Link href={category.href as "/vacation" | "/couple" | "/prewedding"}>
                    <Card className="h-full hover:shadow-lg transition-all duration-300 border-0 shadow-md text-center">
                      <CardContent className="p-8">
                        <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                          <Icon className="h-8 w-8 text-primary" />
                        </div>
                        <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                          {category.name}
                        </h3>
                        <p className="text-muted-foreground text-sm">
                          {category.name === 'Vacation Photography' && '北海道の美しい景色を記録'}
                          {category.name === 'Couple & Proposal' && 'カップル・プロポーズの記念撮影'}
                          {category.name === 'Pre-wedding' && 'ウェディング前の記念撮影'}
                        </p>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
