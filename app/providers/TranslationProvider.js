// app/providers/TranslationProvider.js
'use client';

import { I18nextProvider } from 'react-i18next';
import i18n from '../../i18n';
import { useState, useEffect } from 'react';

import Navigation from '../../components/Navigation.js';
import Footer from '../../components/Footer.js';

export default function TranslationProvider({ children }) {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // 如果 i18n 已經初始化，就直接 setIsReady(true)
    if (i18n.isInitialized) {
      setIsReady(true);
    } else {
      // 如果還沒初始化，監聽事件，等 i18n 初始化後 setIsReady
      i18n.on('initialized', () => {
        setIsReady(true);
      });
    }
  }, []);

  if (!isReady) {
    // 這裡可以放一個簡單的 Loading、Skeleton 或直接 return null
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
