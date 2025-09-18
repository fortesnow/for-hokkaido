'use client';

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from '@/i18n/routing';
import { motion } from 'framer-motion';
import { Check, Star, Clock, Camera, Users, MapPin } from 'lucide-react';

export default function PricingPage() {
  const plans = [
    {
      name: '1 Hour Essential',
      price: '¥25,000',
      priceUsd: '$180',
      duration: '1 hour',
      popular: false,
      features: [
        '30+ edited photos',
        '1 location',
        'Online gallery',
        '48-hour delivery',
        'Personal use license',
        'Basic editing',
      ],
    },
    {
      name: '2 Hour Premium',
      price: '¥40,000',
      priceUsd: '$290',
      duration: '2 hours',
      popular: true,
      features: [
        '60+ edited photos',
        'Up to 2 locations',
        'Online gallery',
        'Same-day preview',
        '48-hour delivery',
        'Advanced editing',
        'Personal use license',
      ],
    },
    {
      name: '3 Hour Deluxe',
      price: '¥55,000',
      priceUsd: '$400',
      duration: '3 hours',
      popular: false,
      features: [
        '100+ edited photos',
        'Up to 3 locations',
        'Outfit changes',
        'Online gallery',
        'Same-day preview',
        '24-hour delivery',
        'Premium editing',
        'Personal & commercial license',
      ],
    },
    {
      name: 'Full Day Experience',
      price: '¥95,000',
      priceUsd: '$690',
      duration: '6+ hours',
      popular: false,
      features: [
        '200+ edited photos',
        'Multiple locations',
        'Multiple outfit changes',
        'Lunch break included',
        'Online gallery',
        'Same-day preview',
        '24-hour delivery',
        'Premium editing',
        'Full commercial license',
        'Personal consultation',
      ],
    },
  ];

  const addOns = [
    {
      name: 'Extra Hour',
      price: '¥15,000',
      description: 'Add additional time to any session',
      icon: Clock,
    },
    {
      name: 'Additional Location',
      price: '¥8,000',
      description: 'Visit one more location during your session',
      icon: MapPin,
    },
    {
      name: 'Professional Makeup',
      price: '¥12,000',
      description: 'Professional makeup artist service',
      icon: Star,
    },
    {
      name: 'Kimono Rental',
      price: '¥18,000',
      description: 'Traditional Japanese kimono rental',
      icon: Users,
    },
    {
      name: 'Rush Delivery',
      price: '¥10,000',
      description: 'Same-day photo delivery',
      icon: Camera,
    },
  ];

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 bg-gradient-to-br from-green-50 to-teal-100">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
              Photography Pricing
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
              Transparent pricing for professional photography services in Hokkaido
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Pricing Plans */}
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
              Photography Packages
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose the perfect package for your photography needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
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
                    <CardTitle className="text-xl md:text-2xl">{plan.name}</CardTitle>
                    <div className="text-sm text-muted-foreground">{plan.duration}</div>
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

      {/* Add-ons Section */}
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
              Add-on Services
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Enhance your photography experience with our additional services
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {addOns.map((addon, index) => {
              const Icon = addon.icon;
              return (
                <motion.div
                  key={addon.name}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <Card className="h-full hover:shadow-lg transition-all duration-300 border-0 shadow-md text-center">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="text-lg font-semibold mb-2">{addon.name}</h3>
                      <div className="text-2xl font-bold text-primary mb-3">{addon.price}</div>
                      <p className="text-muted-foreground text-sm">{addon.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Important Notes */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">Important Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Travel Fees</h4>
                  <p className="text-muted-foreground">Additional travel fees may apply for locations outside Sapporo city center. Fees range from ¥5,000-¥15,000 depending on distance.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Weather Policy</h4>
                  <p className="text-muted-foreground">Sessions can be rescheduled due to severe weather at no additional cost. Alternative indoor locations available.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Payment Terms</h4>
                  <p className="text-muted-foreground">50% deposit required to secure booking. Balance due on the day of the session. We accept cash, credit cards, and bank transfers.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Cancellation Policy</h4>
                  <p className="text-muted-foreground">Cancellations made 48+ hours in advance receive full refund. Within 48 hours: 50% fee applies.</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/booking">
                <Button size="lg" className="text-lg px-8 py-6 h-auto">
                  Book a Session
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="text-lg px-8 py-6 h-auto">
                  Get Custom Quote
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
