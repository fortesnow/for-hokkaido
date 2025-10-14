'use client';

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from '@/i18n/routing';
import { motion } from 'framer-motion';
import { MapPin, Camera, Heart, Sparkles } from 'lucide-react';

export default function FuranoBieiTomamuPage() {
  const heroImage = '/images/furano_summer.webp';
  const galleryImages = [
    '/images/furano_summer.webp',
    '/images/biei_early_summer.webp',
    '/images/tomamu_spring.webp',
    '/images/0025.webp',
    '/images/ryo_0078.webp',
    '/images/ryo_0049.webp',
  ];

  const features = [
    'Lavender fields and rolling hills in summer',
    'Beautiful lavender fields and rolling hills create stunning landscapes perfect for summer photography'
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
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
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
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Furano, Biei, Tomamu</h1>
            <div className="flex items-center justify-center gap-2 text-lg">
              <MapPin className="h-5 w-5" />
              <span>Click on the map icon to view Furano, Biei &amp; Tomamu&apos;s location in Hokkaido</span>
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
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Furano, Biei & Tomamu Features</h2>
            <div className="max-w-4xl mx-auto space-y-4">
              {features.map((feature, index) => (
                <motion.p
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`text-lg leading-relaxed ${index === 0 ? 'text-muted-foreground' : 'text-foreground'}`}
                >
                  {feature}
                </motion.p>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Gallery</h2>
            <p className="text-lg text-muted-foreground">Photo gallery showcasing locations in this city with location names displayed as captions</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
          >
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="relative group"
              >
                <Card className="overflow-hidden border-0 shadow-lg">
                  <div className="relative h-48">
                    <div
                      className="w-full h-full bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
                      style={{ backgroundImage: `url('${image}')` }}
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-2 left-2 bg-white/90 px-2 py-1 rounded text-xs font-medium">
                      {index === 0 && 'Furano Summer'}
                      {index === 1 && 'Biei Early Summer'}
                      {index === 2 && 'Tomamu Spring'}
                      {index === 3 && 'Scenic Photo'}
                      {index === 4 && 'Historic Photo'}
                      {index === 5 && 'Photo'}
                    </div>
                  </div>
                </Card>
              </motion.div>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Photography Categories</h2>
            <p className="text-lg text-muted-foreground">Click on categories to navigate to their respective pages (pricing not displayed here)</p>
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
                  <Link href={category.href as '/'}>
                    <Card className="h-full hover:shadow-lg transition-all duration-300 border-0 shadow-md text-center">
                      <CardContent className="p-8">
                        <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                          <Icon className="h-8 w-8 text-primary" />
                        </div>
                        <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                          {category.name}
                        </h3>
                        <p className="text-muted-foreground text-sm">
                          Learn more about our {category.name.toLowerCase()} services
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

      {/* Book Now Section */}
      <section className="py-16 md:py-24 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Book Now</h2>
            <p className="text-xl text-white/90 mb-8">Available on all pages</p>
            <Link href="/booking">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-6 h-auto">
                Book Now
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
