import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  let validLocale: 'en' | 'ja' = 'en';
  if (routing.locales.includes(locale as 'en' | 'ja')) {
    validLocale = locale as 'en' | 'ja';
  }

  let messages;
  try {
    if (validLocale === 'ja') {
      messages = (await import('../../messages/ja.json')).default;
    } else {
      messages = (await import('../../messages/en.json')).default;
    }
  } catch {
    console.error('Failed to load messages for locale:', validLocale);
    messages = (await import('../../messages/en.json')).default;
  }

  return { 
    locale: validLocale,
    messages 
  };
});
