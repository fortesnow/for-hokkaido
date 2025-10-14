'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from '@/i18n/routing';
import { motion } from 'framer-motion';
import { Camera, Heart, Sparkles } from 'lucide-react';

const ServicesSection = () => {
  const t = useTranslations('home.services');
  const common = useTranslations('common');

  const services = [
    {
      key: 'vacation',
      href: '/vacation',
      icon: Camera,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
    },
    {
      key: 'couple',
      href: '/couple',
      icon: Heart,
      color: 'text-pink-600',
      bgColor: 'bg-pink-50',
    },
    {
      key: 'prewedding',
      href: '/prewedding',
      icon: Sparkles,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
    },
  ];

  return (
    <section className="py-16 md:py-24">
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
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.key}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 border-0 shadow-md">
                  <CardHeader className="text-center pb-3">
                    <div className={`w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 rounded-full ${service.bgColor} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className={`h-6 w-6 sm:h-8 sm:w-8 ${service.color}`} />
                    </div>
                    <CardTitle className="text-lg sm:text-xl md:text-2xl">
                      {t(`${service.key}.title`)}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center px-3 sm:px-6">
                    <p className="text-sm sm:text-base text-muted-foreground mb-4 leading-relaxed">
                      {t(`${service.key}.description`)}
                    </p>

                    <div className="space-y-1 mb-4">
                      {(t.raw(`${service.key}.features`) as string[]).map((feature, idx) => (
                        <div key={idx} className="flex items-center justify-center gap-2 text-xs sm:text-sm">
                          <div className={`w-1 h-1 rounded-full ${service.color.replace('text-', 'bg-')}`} />
                          {feature}
                        </div>
                      ))}
                    </div>

                    <Link href={service.href as '/'}>
                      <Button className="w-full text-sm sm:text-base py-2 sm:py-3 group-hover:scale-105 transition-transform duration-300">
                        {common('learnMore')}
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
