'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { MapPin, Languages, Calendar } from 'lucide-react';

const AboutSection = () => {
  const t = useTranslations('home.about');

  const features = [
    {
      key: 'local',
      icon: MapPin,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
    },
    {
      key: 'multilingual',
      icon: Languages,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
    },
    {
      key: 'seasonal',
      icon: Calendar,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              {t('title')}
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              {t('description')}
            </p>

            <div>
              <h3 className="text-2xl font-semibold mb-6">{t('whyUs.title')}</h3>
              <div className="space-y-6">
                {features.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <motion.div
                      key={feature.key}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-4"
                    >
                      <div className={`flex-shrink-0 w-12 h-12 rounded-full ${feature.bgColor} flex items-center justify-center mt-1`}>
                        <Icon className={`h-6 w-6 ${feature.color}`} />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold mb-2">
                          {t(`whyUs.${feature.key}.title`)}
                        </h4>
                        <p className="text-muted-foreground leading-relaxed">
                          {t(`whyUs.${feature.key}.description`)}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Image Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="space-y-4"
            >
              <div 
                className="h-48 bg-cover bg-center rounded-lg shadow-lg"
                style={{
                  backgroundImage: "url('https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=2070&auto=format&fit=crop')"
                }}
              />
              <div 
                className="h-32 bg-cover bg-center rounded-lg shadow-lg"
                style={{
                  backgroundImage: "url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070&auto=format&fit=crop')"
                }}
              />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="space-y-4 mt-8"
            >
              <div 
                className="h-32 bg-cover bg-center rounded-lg shadow-lg"
                style={{
                  backgroundImage: "url('https://images.unsplash.com/photo-1507272931001-fc06c17e4f43?q=80&w=2070&auto=format&fit=crop')"
                }}
              />
              <div 
                className="h-48 bg-cover bg-center rounded-lg shadow-lg"
                style={{
                  backgroundImage: "url('https://images.unsplash.com/photo-1483921020237-2ff51e8e4b22?q=80&w=2070&auto=format&fit=crop')"
                }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
