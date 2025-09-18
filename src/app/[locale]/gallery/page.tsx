'use client';

import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Filter } from 'lucide-react';

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'All Photos' },
    { id: 'vacation', label: 'Vacation' },
    { id: 'couple', label: 'Couple' },
    { id: 'prewedding', label: 'Pre-wedding' },
    { id: 'spring', label: 'Spring' },
    { id: 'summer', label: 'Summer' },
    { id: 'autumn', label: 'Autumn' },
    { id: 'winter', label: 'Winter' },
  ];

  const galleryImages = [
    {
      src: 'https://images.unsplash.com/photo-1539650116574-75c0c6d73051?q=80&w=800&auto=format&fit=crop',
      alt: 'Family photo in winter Hokkaido',
      category: 'vacation',
      season: 'winter',
      location: 'Sapporo'
    },
    {
      src: 'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?q=80&w=800&auto=format&fit=crop',
      alt: 'Couple in romantic setting',
      category: 'couple',
      season: 'autumn',
      location: 'Otaru'
    },
    {
      src: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=800&auto=format&fit=crop',
      alt: 'Pre-wedding in lavender field',
      category: 'prewedding',
      season: 'summer',
      location: 'Furano'
    },
    {
      src: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=800&auto=format&fit=crop',
      alt: 'Winter family portrait',
      category: 'vacation',
      season: 'winter',
      location: 'Niseko'
    },
    {
      src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=800&auto=format&fit=crop',
      alt: 'Spring couple session',
      category: 'couple',
      season: 'spring',
      location: 'Biei'
    },
    {
      src: 'https://images.unsplash.com/photo-1507272931001-fc06c17e4f43?q=80&w=800&auto=format&fit=crop',
      alt: 'Autumn pre-wedding',
      category: 'prewedding',
      season: 'autumn',
      location: 'Lake Shikotsu'
    },
    {
      src: 'https://images.unsplash.com/photo-1551524164-6cf2ac8c3b10?q=80&w=800&auto=format&fit=crop',
      alt: 'Solo traveler portrait',
      category: 'vacation',
      season: 'summer',
      location: 'Sapporo'
    },
    {
      src: 'https://images.unsplash.com/photo-1483921020237-2ff51e8e4b22?q=80&w=800&auto=format&fit=crop',
      alt: 'Winter landscape couple',
      category: 'couple',
      season: 'winter',
      location: 'Niseko'
    },
    {
      src: 'https://images.unsplash.com/photo-1543807535-eceef0bc6599?q=80&w=800&auto=format&fit=crop',
      alt: 'Group vacation photo',
      category: 'vacation',
      season: 'summer',
      location: 'Furano'
    },
  ];

  const filteredImages = galleryImages.filter(image => {
    if (activeFilter === 'all') return true;
    return image.category === activeFilter || image.season === activeFilter;
  });

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 bg-gradient-to-br from-purple-50 to-pink-100">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
              Photography Gallery
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
              Explore our portfolio of stunning photography across Hokkaido&apos;s four seasons
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 mb-4">
            <Filter className="h-5 w-5 text-gray-600" />
            <span className="font-medium text-gray-600">Filter by:</span>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {filters.map((filter) => (
              <Button
                key={filter.id}
                variant={activeFilter === filter.id ? 'default' : 'outline'}
                size="sm"
                onClick={() => setActiveFilter(filter.id)}
                className="transition-all duration-200"
              >
                {filter.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {filteredImages.map((image, index) => (
              <motion.div
                key={`${image.src}-${activeFilter}`}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ 
                  duration: 0.4,
                  delay: index * 0.05,
                  layout: { duration: 0.3 }
                }}
                whileHover={{ scale: 1.05 }}
                className="group cursor-pointer"
              >
                <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="relative aspect-square">
                    <div 
                      className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                      style={{ backgroundImage: `url('${image.src}')` }}
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
                    
                    {/* Overlay Info */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <div className="text-white">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-xs px-2 py-1 bg-white/20 rounded-full">
                            {image.category}
                          </span>
                          <span className="text-xs px-2 py-1 bg-white/20 rounded-full">
                            {image.season}
                          </span>
                        </div>
                        <p className="text-sm font-medium">{image.location}</p>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {filteredImages.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <p className="text-gray-500 text-lg">No images found for the selected filter.</p>
            </motion.div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
