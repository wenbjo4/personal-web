// app/providers/TranslationProvider.js
'use client';
import { I18nextProvider } from 'react-i18next';
import i18n from '../../i18n';

import Navigation from '../../components/Navigation.js';

export default function TranslationProvider({ children }) {
  return (
    <I18nextProvider i18n={i18n}>
      <Navigation />
      {children}
    </I18nextProvider>
  );

}
