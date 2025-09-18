'use client';

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from '@/i18n/routing';
import { motion } from 'framer-motion';
import { Camera, Heart, Star, Users, Award } from 'lucide-react';

export default function AboutPage() {
  const values = [
    {
      icon: Camera,
      title: 'Professional Excellence',
      description: 'We bring years of professional photography experience and technical expertise to every session.',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
    },
    {
      icon: Heart,
      title: 'Passion for Hokkaido',
      description: 'Born and raised in Hokkaido, we know the hidden gems and perfect timing for every season.',
      color: 'text-red-600',
      bgColor: 'bg-red-50',
    },
    {
      icon: Users,
      title: 'Personal Connection',
      description: 'We take time to understand your vision and create a comfortable, enjoyable experience.',
      color: 'text-green-600',
      bgColor: 'bg-green-50',
    },
    {
      icon: Star,
      title: 'Quality Guarantee',
      description: 'Every photo is carefully edited and delivered to meet our high standards of excellence.',
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50',
    },
  ];

  const achievements = [
    { number: '500+', label: 'Happy Clients' },
    { number: '50+', label: 'Locations Covered' },
    { number: '4', label: 'Years Experience' },
    { number: '15000+', label: 'Photos Delivered' },
  ];

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 bg-gradient-to-br from-purple-50 to-blue-100">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
              About SHIKI Photography
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
              Capturing the beauty of Hokkaido&apos;s four seasons through professional photography
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
                <p>
                  SHIKI Photography was born from a deep love for Hokkaido&apos;s breathtaking natural beauty 
                  and the desire to share it with visitors from around the world. &quot;Shiki&quot; (四季) means 
                  &quot;four seasons&quot; in Japanese, representing our commitment to capturing the unique charm 
                  of each season in Hokkaido.
                </p>
                <p>
                  As local photographers, we have witnessed countless sunrises over the Tokachi Plains, 
                  explored hidden hot springs in the mountains, and experienced the magic of Hokkaido&apos;s 
                  powder snow. This intimate knowledge of our homeland allows us to guide you to the 
                  most stunning locations at the perfect moments.
                </p>
                <p>
                  Our mission is to create not just beautiful photographs, but lasting memories that 
                  tell the story of your time in Hokkaido. Whether you&apos;re celebrating a proposal, 
                  enjoying a family vacation, or preparing for your wedding, we&apos;re here to capture 
                  those precious moments with artistry and care.
                </p>
              </div>
            </motion.div>

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

      {/* Values Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
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
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Journey in Numbers</h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Every photo tells a story, every client becomes part of our family
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
      <section className="py-16 md:py-24 bg-gray-50">
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
                <h3 className="text-2xl md:text-3xl font-bold mb-6">Ready to Create Memories?</h3>
                <p className="text-lg text-muted-foreground mb-6">
                  Let us capture your special moments against the stunning backdrop of Hokkaido&apos;s natural beauty.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/booking">
                    <Button size="lg" className="text-lg px-8 py-6 h-auto">
                      Book Your Session
                    </Button>
                  </Link>
                  <Link href="/gallery">
                    <Button size="lg" variant="outline" className="text-lg px-8 py-6 h-auto">
                      View Our Work
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
