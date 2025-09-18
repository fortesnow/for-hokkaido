'use client';

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from '@/i18n/routing';
import { motion } from 'framer-motion';

export default function CouplePage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1469371670807-013ccf25f16a?q=80&w=2070&auto=format&fit=crop')"
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
              Couple & Proposal Photography
            </h1>
            
            <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
              Romantic photography sessions and surprise proposal planning in Hokkaido&apos;s most beautiful locations
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/booking">
                <Button size="lg" className="text-lg px-8 py-6 h-auto">
                  Book Now
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

      {/* Features Section */}
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
              Romantic Photography Services
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Creating intimate and romantic memories in Hokkaido&apos;s stunning landscapes
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl">Couple Photography</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Intimate and romantic photo sessions capturing your love story against Hokkaido&apos;s beautiful backdrops.
                </p>
                <ul className="space-y-2 text-sm">
                  <li>• 1-3 hour sessions</li>
                  <li>• Multiple outfit changes</li>
                  <li>• Scenic location guidance</li>
                  <li>• Professional editing</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg border-primary">
              <CardHeader>
                <CardTitle className="text-xl">Proposal Planning</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Complete proposal photography and planning service to make your moment perfect and memorable.
                </p>
                <ul className="space-y-2 text-sm">
                  <li>• Secret coordination</li>
                  <li>• Location scouting</li>
                  <li>• Surprise photography</li>
                  <li>• Celebration shots</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl">Engagement Photos</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Beautiful engagement photography to announce your happy news and preserve this special time.
                </p>
                <ul className="space-y-2 text-sm">
                  <li>• Save-the-date photos</li>
                  <li>• Multiple locations</li>
                  <li>• Social media ready</li>
                  <li>• Print packages available</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
