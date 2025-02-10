// app/providers/TranslationProvider.js
'use client';

import { I18nextProvider } from 'react-i18next';
import i18n from '../../lib/i18n';
import { useState, useEffect } from 'react';

import Navigation from '../../components/Navigation.js';
import Footer from '../../components/Footer.js';

export default function TranslationProvider({ children }) {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (i18n.isInitialized) {
      setIsReady(true);
    } else {
      i18n.on('initialized', () => {
        setIsReady(true);
      });
    }
  }, []);

  if (!isReady) {
    return null;
  }

  return (
    <I18nextProvider i18n={i18n}>
      <Navigation />
      <div style={{ marginTop: '64px' }}>
        {children}
      </div>
      <Footer />
    </I18nextProvider>
  );
}
