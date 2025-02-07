'use client'; // 若在 Next.js App Directory 下，有使用 client side 功能需加
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// 這裡可以把多個 namespace (page) 拆分，
// 例如 common.json, projects.json, header.json ...
import enHome from './public/locales/en/home.json';
import zhHome from './public/locales/zh/home.json';
import jaHome from './public/locales/ja/home.json';
import enNav from './public/locales/en/nav.json';
import zhNav from './public/locales/zh/nav.json';
import jaNav from './public/locales/ja/nav.json';
import enProjectCard from './public/locales/en/project_card.json';
import zhProjectCard from './public/locales/zh/project_card.json';
import jaProjectCard from './public/locales/ja/project_card.json';
import enProjectPage from './public/locales/en/project_page.json';
import zhProjectPage from './public/locales/zh/project_page.json';
import jaProjectPage from './public/locales/ja/project_page.json';

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources: {
      zh: {
        home: zhHome,
        nav: zhNav,
        project_card: zhProjectCard,
        project_page: zhProjectPage,
      },
      ja: {
        home: jaHome,
        nav: jaNav,
        project_card: jaProjectCard,
        project_page: jaProjectPage,
      },
      en: {
        home: enHome,
        nav: enNav,
        project_card: enProjectCard,
        project_page: enProjectPage,
      },
    },
    // 預設語系
    fallbackLng: 'zh',
    ns: ['home', 'nav', 'project_card', 'project_page'],
    defaultNS: 'home',
    interpolation: {
      escapeValue: false,
    },

    detection: {
      order: ['localStorage', 'navigator'],
    },
  });

export default i18n;
