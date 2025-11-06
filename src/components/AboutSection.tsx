'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { MapPin, Languages, Calendar, Camera, Heart, Star, Users, Award } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from '@/i18n/routing';

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

  const values = [
    {
      icon: Camera,
      title: t('values.professional.title'),
      description: t('values.professional.description'),
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
    },
    {
      icon: Heart,
      title: t('values.passion.title'),
      description: t('values.passion.description'),
      color: 'text-red-600',
      bgColor: 'bg-red-50',
    },
    {
      icon: Users,
      title: t('values.personal.title'),
      description: t('values.personal.description'),
      color: 'text-green-600',
      bgColor: 'bg-green-50',
    },
    {
      icon: Star,
      title: t('values.quality.title'),
      description: t('values.quality.description'),
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50',
    },
  ];

  const achievements = [
    { number: t('achievements.clients.number'), label: t('achievements.clients.label') },
    { number: t('achievements.locations.number'), label: t('achievements.locations.label') },
    { number: t('achievements.years.number'), label: t('achievements.years.label') },
    { number: t('achievements.photos.number'), label: t('achievements.photos.label') },
  ];

  return (
    <>
      {/* Story Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                {t('story.title')}
              </h2>
              <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
                <p>{t('story.paragraph1')}</p>
                <p>{t('story.paragraph2')}</p>
                <p>{t('story.paragraph3')}</p>
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
              <div className="space-y-4">
                <div 
                  className="h-48 bg-cover bg-center rounded-lg shadow-lg"
                  style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=800&auto=format&fit=crop')"
                  }}
                />
                <div 
                  className="h-32 bg-cover bg-center rounded-lg shadow-lg"
                  style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=800&auto=format&fit=crop')"
                  }}
                />
              </div>
              <div className="space-y-4 mt-8">
                <div 
                  className="h-32 bg-cover bg-center rounded-lg shadow-lg"
                  style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1507272931001-fc06c17e4f43?q=80&w=800&auto=format&fit=crop')"
                  }}
                />
                <div 
                  className="h-48 bg-cover bg-center rounded-lg shadow-lg"
                  style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1483921020237-2ff51e8e4b22?q=80&w=800&auto=format&fit=crop')"
                  }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
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

      {/* Values Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('values.title')}</h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              {t('values.subtitle')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                >
                  <Card className="h-full hover:shadow-lg transition-all duration-300 border-0 shadow-md text-center">
                    <CardContent className="p-6">
                      <div className={`w-16 h-16 mx-auto mb-4 rounded-full ${value.bgColor} flex items-center justify-center`}>
                        <Icon className={`h-8 w-8 ${value.color}`} />
                      </div>
                      <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                      <p className="text-muted-foreground leading-relaxed text-sm">
                        {value.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('achievements.title')}</h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              {t('achievements.subtitle')}
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  {achievement.number}
                </div>
                <div className="text-muted-foreground font-medium">
                  {achievement.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto"
          >
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-2xl md:text-3xl font-bold mb-6">{t('cta.title')}</h3>
                <p className="text-lg text-muted-foreground mb-6">
                  {t('cta.description')}
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/booking">
                    <Button size="lg" className="text-lg px-8 py-6 h-auto">
                      {t('cta.button')}
                    </Button>
                  </Link>
                  <Link href="/gallery">
                    <Button size="lg" variant="outline" className="text-lg px-8 py-6 h-auto">
                      {t('cta.gallery')}
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default AboutSection;
