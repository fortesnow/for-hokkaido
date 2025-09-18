'use client';

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import VacationHero from '@/components/pages/vacation/VacationHero';
import VacationPlans from '@/components/pages/vacation/VacationPlans';
import VacationGallery from '@/components/pages/vacation/VacationGallery';
import VacationFeatures from '@/components/pages/vacation/VacationFeatures';

export default function VacationPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <VacationHero />
      <VacationFeatures />
      <VacationPlans />
      <VacationGallery />
      <Footer />
    </main>
  );
}
