'use client';

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BookingForm from '@/components/pages/booking/BookingForm';
import BookingHero from '@/components/pages/booking/BookingHero';

export default function BookingPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <BookingHero />
      <BookingForm />
      <Footer />
    </main>
  );
}
