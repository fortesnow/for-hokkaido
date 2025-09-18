'use client';

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from '@/i18n/routing';
import { motion } from 'framer-motion';
import { MapPin, Camera } from 'lucide-react';

export default function DestinationsPage() {
  const destinations = [
    {
      name: 'Sapporo',
      nameJa: '札幌',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=800&auto=format&fit=crop',
      description: 'Urban photography with modern architecture and city landscapes',
      seasons: ['Spring', 'Summer', 'Autumn', 'Winter'],
      highlights: ['Snow Festival', 'Susukino District', 'Odori Park'],
    },
    {
      name: 'Otaru',
      nameJa: '小樽',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=800&auto=format&fit=crop',
      description: 'Historic canal district with romantic cobblestone streets',
      seasons: ['Spring', 'Summer', 'Autumn', 'Winter'],
      highlights: ['Historic Canal', 'Glass Studios', 'Steam Clock'],
    },
    {
      name: 'Furano',
      nameJa: '富良野',
      image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=800&auto=format&fit=crop',
      description: 'Famous lavender fields and flower gardens',
      seasons: ['Summer'],
      highlights: ['Lavender Fields', 'Farm Tomita', 'Colorful Flowers'],
    },
    {
      name: 'Biei',
      nameJa: '美瑛',
      image: 'https://images.unsplash.com/photo-1507272931001-fc06c17e4f43?q=80&w=800&auto=format&fit=crop',
      description: 'Rolling hills and patchwork fields with stunning views',
      seasons: ['Spring', 'Summer', 'Autumn'],
      highlights: ['Blue Pond', 'Patchwork Road', 'Tree of Ken & Mary'],
    },
    {
      name: 'Niseko',
      nameJa: 'ニセコ',
      image: 'https://images.unsplash.com/photo-1483921020237-2ff51e8e4b22?q=80&w=800&auto=format&fit=crop',
      description: 'World-class ski resort with pristine powder snow',
      seasons: ['Winter'],
      highlights: ['Powder Snow', 'Mount Yotei', 'Hot Springs'],
    },
    {
      name: 'Lake Shikotsu',
      nameJa: '支笏湖',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=800&auto=format&fit=crop',
      description: 'Crystal clear caldera lake surrounded by mountains',
      seasons: ['Spring', 'Summer', 'Autumn', 'Winter'],
      highlights: ['Ice Festival', 'Crystal Clear Water', 'Mountain Views'],
    },
  ];

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
              Photography Destinations
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
              Discover the most beautiful photography locations across Hokkaido
            </p>
          </motion.div>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.map((destination, index) => (
              <motion.div
                key={destination.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="relative h-64">
                    <div 
                      className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                      style={{ backgroundImage: `url('${destination.image}')` }}
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300" />
                    <div className="absolute top-4 right-4">
                      <div className="flex gap-1">
                        {destination.seasons.map((season) => (
                          <span
                            key={season}
                            className="px-2 py-1 text-xs bg-white/90 backdrop-blur-sm rounded-full"
                          >
                            {season}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <MapPin className="h-4 w-4 text-primary" />
                      <h3 className="text-xl font-bold">{destination.name}</h3>
                      <span className="text-sm text-muted-foreground">({destination.nameJa})</span>
                    </div>
                    
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {destination.description}
                    </p>

                    <div className="space-y-2 mb-4">
                      <h4 className="font-semibold text-sm">Highlights:</h4>
                      <div className="flex flex-wrap gap-1">
                        {destination.highlights.map((highlight) => (
                          <span
                            key={highlight}
                            className="text-xs px-2 py-1 bg-gray-100 rounded-full"
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>

                    <Link href="/booking">
                      <Button className="w-full group-hover:scale-105 transition-transform duration-300">
                        <Camera className="mr-2 h-4 w-4" />
                        Book Session Here
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
