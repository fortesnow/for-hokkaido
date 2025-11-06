'use client';

import React from 'react';
import Image from 'next/image';
import { Link } from '@/i18n/routing';
import { motion } from 'framer-motion';
import { MapPin, Building2, Mountain, Flower2, Ship } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const HokkaidoMap = () => {
  const cities = [
    {
      value: 'sapporo',
      name: 'Sapporo',
      icon: <Building2 className="h-auto w-4 shrink-0" />,
      href: '/sapporo',
      badge: 'Urban Photography',
      title: 'Sapporo',
      description: 'Urban photography with modern architecture and city landscapes',
      imageSrc: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=1200&auto=format&fit=crop',
      imageAlt: 'Sapporo cityscape',
    },
    {
      value: 'otaru-asari',
      name: 'Otaru, Asari',
      icon: <Ship className="h-auto w-4 shrink-0" />,
      href: '/otaru-asari',
      badge: 'Historic Port',
      title: 'Otaru, Asari',
      description: 'Historic port city with scenic coastal views',
      imageSrc: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1200&auto=format&fit=crop',
      imageAlt: 'Otaru canal',
    },
    {
      value: 'niseko-toya',
      name: 'Niseko, Toya',
      icon: <Mountain className="h-auto w-4 shrink-0" />,
      href: '/niseko-toya',
      badge: 'Ski Resorts',
      title: 'Niseko, Toya',
      description: 'World-class ski resorts and natural hot springs',
      imageSrc: 'https://images.unsplash.com/photo-1483921020237-2ff51e8e4b22?q=80&w=1200&auto=format&fit=crop',
      imageAlt: 'Niseko ski resort',
    },
    {
      value: 'furano-biei-tomamu',
      name: 'Furano, Biei, Tomamu',
      icon: <Flower2 className="h-auto w-4 shrink-0" />,
      href: '/furano-biei-tomamu',
      badge: 'Natural Beauty',
      title: 'Furano, Biei, Tomamu',
      description: 'Lavender fields and rolling hills in summer',
      imageSrc: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1200&auto=format&fit=crop',
      imageAlt: 'Furano lavender fields',
    },
    {
      value: 'hakodate',
      name: 'Hakodate',
      icon: <MapPin className="h-auto w-4 shrink-0" />,
      href: '/hakodate',
      badge: 'Historic Harbor',
      title: 'Hakodate',
      description: 'Historic harbor city with stunning night views',
      imageSrc: 'https://images.unsplash.com/photo-1507272931001-fc06c17e4f43?q=80&w=1200&auto=format&fit=crop',
      imageAlt: 'Hakodate night view',
    },
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
            Tap on destinations to navigate to each city&apos;s page
          </p>
        </motion.div>

        {/* Desktop View - Tabs */}
        <div className="hidden md:block">
          <Tabs defaultValue={cities[0].value} className="mt-8">
            <TabsList className="flex flex-col items-center justify-center gap-4 sm:flex-row md:gap-10 w-full">
              {cities.map((city) => (
                <TabsTrigger
                  key={city.value}
                  value={city.value}
                  className="flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold text-muted-foreground data-[state=active]:bg-muted data-[state=active]:text-primary"
                >
                  {city.icon} {city.name}
                </TabsTrigger>
              ))}
            </TabsList>

            <div className="mx-auto mt-8 max-w-screen-xl rounded-2xl bg-muted/70 p-6 lg:p-16">
              {cities.map((city) => (
                <TabsContent
                  key={city.value}
                  value={city.value}
                  className="grid place-items-center gap-20 lg:grid-cols-2 lg:gap-10"
                >
                  <div className="flex flex-col gap-5">
                    <Badge variant="outline" className="w-fit bg-background">
                      {city.badge}
                    </Badge>
                    <h3 className="text-3xl font-semibold lg:text-5xl">
                      {city.title}
                    </h3>
                    <p className="text-muted-foreground lg:text-lg">
                      {city.description}
                    </p>
                    <Link href={city.href as '/'}>
                      <Button className="mt-2.5 w-fit gap-2" size="lg">
                        Explore {city.name}
                      </Button>
                    </Link>
                  </div>
                  <Image
                    src={city.imageSrc}
                    alt={city.imageAlt}
                    width={1200}
                    height={800}
                    className="rounded-xl w-full h-auto object-cover"
                  />
                </TabsContent>
              ))}
            </div>
          </Tabs>
        </div>

        {/* Mobile View - Stacked Cards */}
        <div className="block md:hidden">
          <div className="space-y-8">
            {cities.map((city, index) => (
              <motion.div
                key={city.value}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card text-card-foreground rounded-xl p-6 hover:shadow-lg transition-all duration-300 border-0 shadow-md"
              >
                <div className="grid grid-cols-2 gap-4 items-center">
                  {/* Left: Text Content */}
                  <div className="flex flex-col gap-4">
                    <Badge variant="outline" className="w-fit bg-background">
                      {city.badge}
                    </Badge>
                    <h3 className="text-xl font-semibold">
                      {city.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {city.description}
                    </p>
                    <Link href={city.href as '/'}>
                      <Button className="mt-2.5 w-fit gap-2 text-sm px-4 py-2 h-auto" size="sm">
                        Explore {city.name}
                      </Button>
                    </Link>
                  </div>
                  {/* Right: Image */}
                  <div className="relative w-full h-32 rounded-xl overflow-hidden">
                    <Image
                      src={city.imageSrc}
                      alt={city.imageAlt}
                      width={600}
                      height={400}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HokkaidoMap;
