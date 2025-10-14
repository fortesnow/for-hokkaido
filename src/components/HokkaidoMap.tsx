'use client';

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from '@/i18n/routing';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

const HokkaidoMap = () => {

  const cities = [
    { name: 'Sapporo', position: 'top-4 left-1/2 transform -translate-x-1/2', href: '/sapporo' },
    { name: 'Otaru, Asari', position: 'top-8 left-1/4', href: '/otaru-asari' },
    { name: 'Niseko, Toya', position: 'top-1/2 left-1/3', href: '/niseko-toya' },
    { name: 'Furano, Biei, Tomamu', position: 'top-1/3 right-8', href: '/furano-biei-tomamu' },
    { name: 'Hakodate', position: 'bottom-8 left-8', href: '/hakodate' },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Featured Destinations
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            地名をタップ→各都市のページへ遷移
          </p>
        </motion.div>

        {/* Hokkaido Map Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Simple Hokkaido Shape */}
          <Card className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-green-50 border-2 border-blue-200">
            <CardContent className="p-8 md:p-12">
              {/* Hokkaido Island Shape (simplified) */}
              <div className="relative w-full h-96 bg-gradient-to-br from-green-100 to-blue-100 rounded-lg border border-blue-200">
                {/* Map Background Pattern */}
                <div className="absolute inset-0 opacity-30">
                  <div className="w-full h-full bg-gradient-to-br from-green-200 via-blue-200 to-green-300"></div>
                </div>

                {/* City Markers */}
                {cities.map((city, index) => (
                  <motion.div
                    key={city.name}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`absolute ${city.position}`}
                  >
                    <Link href={city.href as '/'}>
                      <Button
                        variant="outline"
                        size="sm"
                        className="bg-white/90 hover:bg-white border-blue-300 hover:border-blue-400 text-blue-700 hover:text-blue-800 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
                      >
                        <MapPin className="w-4 h-4 mr-1" />
                        {city.name}
                      </Button>
                    </Link>
                  </motion.div>
                ))}

                {/* Hokkaido Label */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-white/80 px-4 py-2 rounded-lg border border-blue-200 shadow-md">
                    <span className="text-blue-800 font-semibold">HOKKAIDO</span>
                  </div>
                </div>
              </div>

              {/* Legend */}
              <div className="absolute bottom-4 right-4 bg-white/90 p-3 rounded-lg border border-gray-200 shadow-md">
                <p className="text-sm text-gray-600">Click on destinations to explore</p>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* City Cards Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {cities.map((city, index) => (
              <motion.div
                key={city.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <Link href={city.href as '/'}>
                  <Card className="h-full hover:shadow-lg transition-all duration-300 border-0 shadow-md group-hover:shadow-xl">
                    <CardContent className="p-4 text-center">
                      <h3 className="text-lg font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                        {city.name}
                      </h3>
                      <p className="text-sm text-gray-600 mt-2">
                        {index === 0 && "Urban photography with modern architecture and city landscapes"}
                        {index === 1 && "Historic port city with scenic coastal views"}
                        {index === 2 && "World-class ski resorts and natural hot springs"}
                        {index === 3 && "Lavender fields and rolling hills in summer"}
                        {index === 4 && "Historic harbor city with stunning night views"}
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HokkaidoMap;
