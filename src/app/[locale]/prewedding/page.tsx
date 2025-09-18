'use client';

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from '@/i18n/routing';
import { motion } from 'framer-motion';
import { Heart, Sparkles, Camera, MapPin, Star } from 'lucide-react';

export default function PreweddingPage() {
  const services = [
    {
      icon: Heart,
      title: 'Traditional Kimono',
      description: 'Beautiful traditional Japanese kimono rental and styling for authentic pre-wedding photos',
      features: ['Professional kimono fitting', 'Hair and makeup included', 'Traditional accessories', 'Multiple kimono options'],
      color: 'text-red-600',
      bgColor: 'bg-red-50',
    },
    {
      icon: Sparkles,
      title: 'Modern Western Style',
      description: 'Contemporary wedding dress and suit photography in stunning Hokkaido locations',
      features: ['Wedding dress consultation', 'Professional styling', 'Modern posing guidance', 'Elegant compositions'],
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
    },
    {
      icon: Camera,
      title: 'Mixed Style Session',
      description: 'Combine both traditional and modern elements for a comprehensive pre-wedding experience',
      features: ['Multiple outfit changes', 'Various location setups', 'Cultural fusion themes', 'Extended session time'],
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
    },
  ];

  const locations = [
    {
      name: 'Hokkaido Shrine',
      description: 'Sacred traditional setting with beautiful torii gates and seasonal foliage',
      season: 'All Seasons',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=800&auto=format&fit=crop',
    },
    {
      name: 'Otaru Canal',
      description: 'Romantic historic canal with stone warehouses and vintage streetlights',
      season: 'Spring, Summer, Autumn',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=800&auto=format&fit=crop',
    },
    {
      name: 'Lavender Fields',
      description: 'Dreamy purple lavender fields creating a fairytale atmosphere',
      season: 'Summer',
      image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=800&auto=format&fit=crop',
    },
    {
      name: 'Winter Wonderland',
      description: 'Magical snow-covered landscapes perfect for dramatic photos',
      season: 'Winter',
      image: 'https://images.unsplash.com/photo-1483921020237-2ff51e8e4b22?q=80&w=800&auto=format&fit=crop',
    },
  ];

  const packages = [
    {
      name: 'Essential Package',
      price: '¥65,000',
      priceUsd: '$470',
      duration: '3 hours',
      features: [
        '80+ edited photos',
        '1-2 locations',
        'One outfit style',
        'Basic makeup consultation',
        'Online gallery',
        '48-hour delivery',
      ],
    },
    {
      name: 'Premium Package',
      price: '¥95,000',
      priceUsd: '$690',
      duration: '5 hours',
      popular: true,
      features: [
        '150+ edited photos',
        '2-3 locations',
        'Two outfit styles',
        'Professional makeup & hair',
        'Kimono rental included',
        'Same-day preview',
        '24-hour delivery',
        'Print package',
      ],
    },
    {
      name: 'Luxury Package',
      price: '¥140,000',
      priceUsd: '$1,020',
      duration: '8 hours',
      features: [
        '250+ edited photos',
        '3-4 locations',
        'Multiple outfit changes',
        'Full-day styling team',
        'Premium kimono selection',
        'Transportation included',
        'Same-day preview',
        '12-hour delivery',
        'Premium print album',
        'USB with high-res images',
      ],
    },
  ];

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=2070&auto=format&fit=crop')"
            }}
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Pre-wedding Photography
            </h1>
            
            <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
              Celebrate your love story with beautiful pre-wedding photography in Hokkaido&apos;s most romantic locations
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/booking">
                <Button size="lg" className="text-lg px-8 py-6 h-auto">
                  Book Your Session
                </Button>
              </Link>
              <Link href="/gallery">
                <Button size="lg" variant="outline" className="text-lg px-8 py-6 h-auto bg-white/10 border-white/30 text-white hover:bg-white/20">
                  View Gallery
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
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
              Pre-wedding Photography Styles
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose from traditional, modern, or mixed style photography sessions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                >
                  <Card className="h-full hover:shadow-lg transition-all duration-300 border-0 shadow-md">
                    <CardHeader className="text-center">
                      <div className={`w-16 h-16 mx-auto mb-4 rounded-full ${service.bgColor} flex items-center justify-center`}>
                        <Icon className={`h-8 w-8 ${service.color}`} />
                      </div>
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {service.description}
                      </p>
                      
                      <div className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-sm">
                            <div className={`w-1.5 h-1.5 rounded-full ${service.color.replace('text-', 'bg-')}`} />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Locations Section */}
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
              Romantic Locations
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Hokkaido&apos;s most beautiful and romantic spots for your pre-wedding photos
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {locations.map((location, index) => (
              <motion.div
                key={location.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="relative h-64">
                    <div 
                      className="w-full h-full bg-cover bg-center"
                      style={{ backgroundImage: `url('${location.image}')` }}
                    />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                      <span className="text-sm font-medium">{location.season}</span>
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <MapPin className="h-4 w-4 text-primary" />
                      <h3 className="text-xl font-bold">{location.name}</h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {location.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
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
              Pre-wedding Packages
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose the perfect package for your pre-wedding photography needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="relative"
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <Card className={`h-full hover:shadow-xl transition-all duration-300 ${
                  pkg.popular ? 'border-primary shadow-lg' : 'border-0 shadow-md'
                }`}>
                  <CardHeader className="text-center">
                    <CardTitle className="text-xl md:text-2xl">{pkg.name}</CardTitle>
                    <div className="text-sm text-muted-foreground">{pkg.duration}</div>
                  </CardHeader>
                  
                  <CardContent className="text-center">
                    <div className="mb-6">
                      <div className="text-3xl font-bold text-primary mb-1">{pkg.price}</div>
                      <div className="text-lg text-muted-foreground">{pkg.priceUsd}</div>
                    </div>

                    <div className="space-y-3 mb-6 text-left">
                      {pkg.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <Star className="h-4 w-4 text-yellow-500 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <Link href="/booking">
                      <Button 
                        className={`w-full ${
                          pkg.popular 
                            ? 'bg-primary hover:bg-primary/90' 
                            : ''
                        }`}
                        variant={pkg.popular ? 'default' : 'outline'}
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

      <Footer />
    </main>
  );
}
