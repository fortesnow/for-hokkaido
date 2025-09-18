'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from '@/i18n/routing';
import { motion } from 'framer-motion';
import { Clock, Check } from 'lucide-react';

const VacationPlans = () => {
  const common = useTranslations('common');

  const plans = [
    {
      title: '1 Hour Session',
      duration: '1 hour',
      price: '¥25,000',
      priceUsd: '$180',
      features: [
        '30+ edited photos',
        '1 location',
        'Online gallery',
        '48-hour delivery',
        'Personal use license'
      ],
      popular: false,
    },
    {
      title: '2 Hour Session',
      duration: '2 hours',
      price: '¥40,000',
      priceUsd: '$290',
      features: [
        '60+ edited photos',
        'Up to 2 locations',
        'Online gallery',
        'Same-day preview',
        '48-hour delivery',
        'Personal use license'
      ],
      popular: true,
    },
    {
      title: '3 Hour Session',
      duration: '3 hours',
      price: '¥55,000',
      priceUsd: '$400',
      features: [
        '100+ edited photos',
        'Up to 3 locations',
        'Outfit changes',
        'Online gallery',
        'Same-day preview',
        '24-hour delivery',
        'Personal & commercial license'
      ],
      popular: false,
    },
    {
      title: 'Full Day Session',
      duration: '6+ hours',
      price: '¥95,000',
      priceUsd: '$690',
      features: [
        '200+ edited photos',
        'Multiple locations',
        'Multiple outfit changes',
        'Lunch break included',
        'Online gallery',
        'Same-day preview',
        '24-hour delivery',
        'Full commercial license'
      ],
      popular: false,
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Vacation Photography Plans
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose the perfect photography package for your Hokkaido vacation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="relative"
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}
              
              <Card className={`h-full hover:shadow-xl transition-all duration-300 ${
                plan.popular ? 'border-primary shadow-lg' : 'border-0 shadow-md'
              }`}>
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-xl md:text-2xl">{plan.title}</CardTitle>
                  <div className="flex items-center justify-center gap-2 text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>{plan.duration}</span>
                  </div>
                </CardHeader>
                
                <CardContent className="text-center">
                  <div className="mb-6">
                    <div className="text-3xl font-bold text-primary mb-1">{plan.price}</div>
                    <div className="text-lg text-muted-foreground">{plan.priceUsd}</div>
                  </div>

                  <div className="space-y-3 mb-6 text-left">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <Check className="h-4 w-4 text-green-600 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link href="/booking">
                    <Button 
                      className={`w-full ${
                        plan.popular 
                          ? 'bg-primary hover:bg-primary/90' 
                          : ''
                      }`}
                      variant={plan.popular ? 'default' : 'outline'}
                    >
                      {common('bookNow')}
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-4">
            * Travel fees may apply for locations outside Sapporo city center
          </p>
          <Link href="/contact">
            <Button variant="outline" size="lg">
              {common('getQuote')}
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default VacationPlans;
