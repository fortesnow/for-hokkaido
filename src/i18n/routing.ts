import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ['en', 'ja'],

  // Used when no locale matches
  defaultLocale: 'en',

  // The prefix for the locale in the URL
  localePrefix: 'as-needed',

  // Always show the locale prefix for non-default locales
  pathnames: {
    '/': '/',
    '/vacation': '/vacation',
    '/couple': '/couple', 
    '/prewedding': '/prewedding',
    '/destinations': '/destinations',
    '/gallery': '/gallery',
    '/pricing': '/pricing',
    '/booking': '/booking',
    '/about': '/about',
    '/contact': '/contact',
    '/faq': '/faq'
  }
});

// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export const { Link, redirect, usePathname, useRouter } =
  createNavigation(routing);
