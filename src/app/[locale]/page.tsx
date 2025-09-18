'use client';

import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import SeasonCards from '@/components/SeasonCards';
import ServicesSection from '@/components/ServicesSection';
import AboutSection from '@/components/AboutSection';
import Footer from '@/components/Footer';
import StructuredData from '@/components/SEO/StructuredData';
import { organizationSchema, localBusinessSchema, serviceSchema } from '@/lib/seo';

export default function HomePage() {
  return (
    <>
      <StructuredData type="Organization" data={organizationSchema} />
      <StructuredData type="LocalBusiness" data={localBusinessSchema} />
      <StructuredData type="Service" data={serviceSchema} />
      
      <main className="min-h-screen">
        <Header />
        <Hero />
        <SeasonCards />
        <ServicesSection />
        <AboutSection />
        <Footer />
      </main>
    </>
  );
}
