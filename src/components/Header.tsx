'use client';

import React, { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { Link, usePathname } from '@/i18n/routing';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const t = useTranslations('navigation');
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // トップページかどうかを判定
  const isHomePage = pathname === '/' || String(pathname).startsWith('/ja') || String(pathname).startsWith('/en');

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { href: '/', label: t('home') },
    { href: '/vacation', label: t('vacation') },
    { href: '/couple', label: t('couple') },
    { href: '/prewedding', label: t('prewedding') },
    { href: '/gallery', label: t('gallery') },
    { href: '/faq', label: t('faq') },
  ];

  const LanguageSwitcher = () => {
    // パスから現在のロケールを判定（サーバー/クライアント両方で動作）
    const isJaPath = pathname.startsWith('/ja');
    const currentLocale = isJaPath ? 'ja' : 'en';
    const otherLocale = currentLocale === 'ja' ? 'en' : 'ja';

    // パスからロケールプレフィックスを除去
    const currentPath = pathname.replace(/^\/(ja|en)/, '') || '/';

    return (
      <Link href={currentPath as "/vacation" | "/couple" | "/prewedding" | "/about" | "/contact" | "/faq" | "/gallery" | "/pricing" | "/booking" | "/"} locale={otherLocale}>
        <Button variant="ghost" size="sm" className="flex items-center gap-2">
          <Globe className="h-4 w-4" />
          {otherLocale === 'ja' ? '日本語' : 'English'}
        </Button>
      </Link>
    );
  };

  // トップページかつスクロールしていない場合は非表示
  const shouldHide = isHomePage && !scrolled;

  return (
    <AnimatePresence>
      {!shouldHide && (
        <motion.header 
          className={`fixed top-0 z-50 w-full border-b transition-all duration-300 ${
            scrolled 
              ? 'bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60' 
              : 'bg-transparent border-transparent'
          }`}
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          exit={{ y: -100 }}
          transition={{ duration: 0.3 }}
        >
          <div className="container mx-auto px-4">
            <div className="flex h-16 items-center justify-between">
              <Link href="/" className="flex items-center space-x-2">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className={`text-3xl md:text-4xl lg:text-5xl font-bold tracking-wider transition-colors ${
                    scrolled ? 'text-primary' : 'text-white'
                  }`}
                >
                  SHIKI
                </motion.div>
              </Link>

              {/* Desktop Navigation */}
              <nav className="hidden md:flex items-center space-x-6">
                {navigationItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href as '/'}
                    className={`text-sm font-medium transition-colors hover:text-primary ${
                      pathname === item.href
                        ? 'text-primary'
                        : scrolled ? 'text-muted-foreground' : 'text-white/90'
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>

              <div className="flex items-center space-x-4">
                <LanguageSwitcher />
                <Link href="/booking">
                  <Button className={`hidden md:inline-flex ${
                    scrolled ? '' : 'bg-white/10 hover:bg-white/20 text-white border-white/30'
                  }`} variant={scrolled ? 'default' : 'outline'}>
                    {t('booking')}
                  </Button>
                </Link>

                {/* Mobile Navigation */}
                <Sheet open={isOpen} onOpenChange={setIsOpen}>
                  <SheetTrigger asChild className="md:hidden">
                    <Button variant="ghost" size="icon" className={scrolled ? '' : 'text-white'}>
                      <Menu className="h-6 w-6" />
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="right" className="w-80">
                    <div className="flex flex-col space-y-4 mt-8">
                      {navigationItems.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href as '/'}
                          onClick={() => setIsOpen(false)}
                          className={`text-lg font-medium transition-colors hover:text-primary ${
                            pathname === item.href
                              ? 'text-primary'
                              : 'text-muted-foreground'
                          }`}
                        >
                          {item.label}
                        </Link>
                      ))}
                      <Link href="/booking" onClick={() => setIsOpen(false)}>
                        <Button className="w-full mt-4">
                          {t('booking')}
                        </Button>
                      </Link>
                    </div>
                  </SheetContent>
                </Sheet>
              </div>
            </div>
          </div>
        </motion.header>
      )}
    </AnimatePresence>
  );
};

export default Header;
