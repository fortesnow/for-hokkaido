'use client';

import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from '@/i18n/routing';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Sparkles, Camera, MapPin, Star, Check } from 'lucide-react';

export default function PreweddingPage() {
  // ヒーロー画像のカルーセル
  const heroImages = [
    '/images/hakodate_wedding_kimono.webp',
    '/images/otaru_wedding.webp',
    '/images/sapporo_wedding_summer.webp',
    '/images/niseko_wedding_winter.webp',
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // 自動カルーセル
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [heroImages.length]);

  const services = [
    {
      title: 'ローカルの強み',
      description: '素敵なロケーションをご案内します',
    },
    {
      title: 'The best wedding photographers',
      description: 'が撮ります',
    },
    {
      title: 'top ブライダル make up artist',
      description: 'が担当します',
    },
    {
      title: 'ローカルのドレスショップ',
      description: 'の衣装を選べます',
    },
    {
      title: '着物スタイル',
      description: 'もできます',
    },
  ];

  const locations = [
    {
      name: 'Hokkaido Shrine',
      description: 'Sacred traditional setting with beautiful torii gates and seasonal foliage',
      season: 'All Seasons',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=800&auto=format&fit=crop',
    },
    {
      name: 'Otaru Canal',
      description: 'Romantic historic canal with stone warehouses and vintage streetlights',
      season: 'Spring, Summer, Autumn',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=800&auto=format&fit=crop',
    },
    {
      name: 'Lavender Fields',
      description: 'Dreamy purple lavender fields creating a fairytale atmosphere',
      season: 'Summer',
      image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=800&auto=format&fit=crop',
    },
    {
      name: 'Winter Wonderland',
      description: 'Magical snow-covered landscapes perfect for dramatic photos',
      season: 'Winter',
      image: 'https://images.unsplash.com/photo-1483921020237-2ff51e8e4b22?q=80&w=800&auto=format&fit=crop',
    },
  ];

  // ギャラリー画像データ
  const galleryImages = [
    '/images/hakodate_wedding_kimono.webp',
    '/images/otaru_wedding.webp',
    '/images/sapporo_wedding_summer.webp',
    '/images/niseko_wedding_winter.webp',
    '/images/hakodate_proposal.webp',
    '/images/sapporo_snow_wedding.webp',
    '/images/couple_hakodate.webp',
    '/images/niseko_snow_landscape_couple.webp',
    '/images/couple_spring_cherry_blossom.webp',
    '/images/winter_couple.webp',
    '/images/couple_hakodate_2.webp',
    '/images/couple_hakodate_3.webp',
  ];

  const packages = [
    {
      name: 'Photography package',
      price: '¥45,000',
      priceUsd: '$330',
      duration: '2 hours',
      features: [
        '50+ edited photos',
        '1 location',
        'Basic editing',
        'Online gallery',
        '72-hour delivery',
      ],
    },
    {
      name: 'Photo+Hair&Make-up package',
      price: '¥75,000',
      priceUsd: '$550',
      duration: '3 hours',
      features: [
        '80+ edited photos',
        '1-2 locations',
        'Professional hair & makeup',
        'Basic editing',
        'Online gallery',
        '48-hour delivery',
      ],
    },
    {
      name: 'Photo+Hair&Make-up+Rental Dress or Kimono package',
      price: '¥95,000',
      priceUsd: '$690',
      duration: '4 hours',
      popular: true,
      features: [
        '100+ edited photos',
        '2-3 locations',
        'Professional hair & makeup',
        'Dress or kimono rental',
        'Premium editing',
        'Online gallery',
        'Same-day preview',
        '24-hour delivery',
      ],
    },
  ];

  const optionalServices = [
    {
      name: '追加ロケーション',
      price: '¥15,000',
      priceUsd: '$110',
      description: '1箇所追加あたり',
    },
    {
      name: '追加撮影時間',
      price: '¥10,000',
      priceUsd: '$75',
      description: '1時間あたり',
    },
    {
      name: '札幌・小樽圏外出張費',
      price: '¥5,000',
      priceUsd: '$40',
      description: '片道あたり',
    },
    {
      name: '函館・ニセコ圏外出張費',
      price: '¥10,000',
      priceUsd: '$75',
      description: '片道あたり',
    },
    {
      name: '追加衣装レンタル',
      price: '¥20,000',
      priceUsd: '$150',
      description: 'ドレスまたは着物1着あたり',
    },
    {
      name: 'ヘアメイクアーティスト指名料',
      price: '¥15,000',
      priceUsd: '$110',
      description: 'トップスタイリスト指名時',
    },
    {
      name: 'プレミアムレタッチ',
      price: '¥5,000',
      priceUsd: '$40',
      description: '1カットあたり',
    },
    {
      name: '当日スナップ写真',
      price: '¥10,000',
      priceUsd: '$75',
      description: '挙式・披露宴の撮影',
    },
  ];

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section - Carousel */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Background Carousel */}
        <div className="absolute inset-0 z-0">
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
                Pre-wedding Photography
              </h1>

              <p className="text-lg md:text-xl mb-8 max-w-2xl leading-relaxed">
                美しい自然の景色の中でドレスや着物を着て撮影できます。
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

            {/* Image Caption */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-center lg:text-left"
            >
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
                <h3 className="text-xl md:text-2xl font-semibold text-white mb-4">
                  Pre-wedding Photography Styles
                </h3>
                <p className="text-white/90 leading-relaxed">
                  美しい自然の景色の中でドレスや着物を着て撮影できます。
                </p>
              </div>
            </motion.div>
          </div>

          {/* Image indicators */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {heroImages.map((_, index) => (
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

      {/* Services Section */}
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
              Why choose our wedding photography sessions
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              ローカルの強みで素敵なロケーションをご案内します
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 border-0 shadow-md text-center">
                  <CardContent className="p-6">
                    <div className="mb-4">
                      <Check className="h-8 w-8 mx-auto text-green-600 mb-2" />
                      <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Locations Section */}
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
              Romantic Locations
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Hokkaido&apos;s most beautiful and romantic spots for your pre-wedding photos
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {locations.map((location, index) => (
              <motion.div
                key={location.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="relative h-64">
                    <div 
                      className="w-full h-full bg-cover bg-center"
                      style={{ backgroundImage: `url('${location.image}')` }}
                    />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                      <span className="text-sm font-medium">{location.season}</span>
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <MapPin className="h-4 w-4 text-primary" />
                      <h3 className="text-xl font-bold">{location.name}</h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {location.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
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
              私たちのプレウェディングフォトグラフィーの作品をご覧ください
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
              Pre-wedding Packages
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose the perfect package for your pre-wedding photography needs
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
                      Most Popular
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
                          <Star className="h-4 w-4 text-yellow-500 flex-shrink-0" />
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
              オプション料金
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              必要に応じて追加できるオプションサービス
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
