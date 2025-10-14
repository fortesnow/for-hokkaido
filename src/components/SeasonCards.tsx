'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from '@/i18n/routing';
import { motion } from 'framer-motion';

const SeasonCards = () => {
  const t = useTranslations('home.seasons');
  const common = useTranslations('common');

  const seasons = [
    {
      key: 'spring',
      image: '/images/tomamu_spring.webp', // トマム春
      gradient: 'from-pink-500/20 to-green-500/20'
    },
    {
      key: 'summer',
      image: '/images/furano_summer.webp', // 富良野夏
      gradient: 'from-blue-500/20 to-purple-500/20'
    },
    {
      key: 'autumn',
      image: '/images/otaru_autumn.webp', // 小樽秋
      gradient: 'from-orange-500/20 to-red-500/20'
    },
    {
      key: 'winter',
      image: '/images/niseko_snow_landscape.webp', // ニセコ雪景色
      gradient: 'from-blue-400/20 to-cyan-400/20'
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            {t('title')}
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {seasons.map((season, index) => (
            <motion.div
              key={season.key}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <Card className="overflow-hidden h-96 relative cursor-pointer border-0 shadow-lg">
                <div className="absolute inset-0">
                  <div 
                    className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                    style={{ backgroundImage: `url('${season.image}')` }}
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${season.gradient} group-hover:opacity-80 transition-opacity duration-300`} />
                </div>
                
                <CardContent className="relative z-10 h-full flex flex-col justify-end p-6 text-white">
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                    viewport={{ once: true }}
                  >
                    <h3 className="text-2xl md:text-3xl font-bold mb-3">
                      {t(`${season.key}.title`)}
                    </h3>
                    <p className="mb-4 text-white/90 leading-relaxed">
                      {t(`${season.key}.description`)}
                    </p>
                    <Link href="/destinations">
                      <Button 
                        variant="secondary" 
                        className="bg-white/20 border-white/30 text-white hover:bg-white/30 backdrop-blur-sm"
                      >
                        {common('learnMore')}
                      </Button>
                    </Link>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SeasonCards;
