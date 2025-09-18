'use client';

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Link } from '@/i18n/routing';
import { motion } from 'framer-motion';

export default function FAQPage() {
  const faqs = [
    {
      question: 'What is included in a photography session?',
      answer: 'Each session includes professional photography, basic editing of all photos, an online gallery for viewing and downloading, and personal use licensing. Specific inclusions vary by package - please see our pricing page for details.',
    },
    {
      question: 'How far in advance should I book?',
      answer: 'We recommend booking at least 2-4 weeks in advance, especially during peak seasons (winter for snow photography, summer for lavender fields). Popular dates like holidays may require even earlier booking.',
    },
    {
      question: 'What happens if the weather is bad?',
      answer: 'We monitor weather conditions closely and will contact you if conditions are unsafe or unsuitable for photography. We offer flexible rescheduling options and alternative indoor/covered locations when possible.',
    },
    {
      question: 'Do you provide translation services?',
      answer: 'Yes! Our photographers are fluent in both English and Japanese. We provide full bilingual support throughout the booking process and during your photo session.',
    },
    {
      question: 'Can you help with outfit recommendations?',
      answer: 'Absolutely! We provide styling advice based on your chosen location, season, and session type. We can also recommend local rental services for traditional Japanese attire or formal wear.',
    },
    {
      question: 'How long does it take to receive photos?',
      answer: 'Basic edited photos are typically delivered within 24-48 hours via our online gallery. Rush delivery (same-day) is available for an additional fee.',
    },
    {
      question: 'Do you offer makeup and hair styling?',
      answer: 'We partner with professional makeup artists and hair stylists who can be arranged for an additional fee. This is especially popular for pre-wedding and couple sessions.',
    },
    {
      question: 'What are your cancellation policies?',
      answer: 'Cancellations made 48+ hours in advance receive a full refund. Cancellations within 48 hours are subject to a 50% fee. Weather-related cancellations are rescheduled at no charge.',
    },
    {
      question: 'Can you photograph at specific locations I choose?',
      answer: 'Yes! While we have recommended locations, we can photograph at specific venues if they allow photography. Some locations may require permits or fees which would be additional.',
    },
    {
      question: 'Do you offer video services?',
      answer: 'We focus exclusively on still photography to ensure the highest quality. However, we can recommend trusted videography partners if you need video services.',
    },
    {
      question: 'How do payment and pricing work?',
      answer: 'We accept various payment methods including credit cards and bank transfers. A 50% deposit is required to secure your booking, with the balance due on the day of the session.',
    },
    {
      question: 'Can you accommodate large groups?',
      answer: 'Yes! We can photograph groups of any size. For groups larger than 10 people, we may recommend additional photographers or extended session time for the best results.',
    },
  ];

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 bg-gradient-to-br from-green-50 to-blue-100">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
              Frequently Asked Questions
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
              Find answers to common questions about our photography services in Hokkaido
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <AccordionItem 
                    value={`item-${index}`}
                    className="border border-gray-200 rounded-lg px-6 shadow-sm hover:shadow-md transition-shadow duration-200"
                  >
                    <AccordionTrigger className="text-left font-semibold hover:no-underline">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Still Have Questions?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              We&apos;re here to help! Contact us for personalized assistance with your photography needs.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="text-lg px-8 py-6 h-auto">
                  Contact Us
                </Button>
              </Link>
              <Link href="/booking">
                <Button size="lg" variant="outline" className="text-lg px-8 py-6 h-auto">
                  Book Consultation
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
