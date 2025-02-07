'use client'; // 若在 Next.js App Directory 下，有使用 client side 功能需加
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

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
import enProject from './public/locales/en/project.json';
import zhProject from './public/locales/zh/project.json';
import jaProject from './public/locales/ja/project.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      zh: {
        home: zhHome,
        nav: zhNav,
        projectCard: zhProjectCard,
        project: zhProject,
      },
      ja: {
        home: jaHome,
        nav: jaNav,
        projectCard: jaProjectCard,
        project: jaProject,
      },
      en: {
        home: enHome,
        nav: enNav,
        projectCard: enProjectCard,
        project: enProject,
      },
    },
    // 預設語系
    lng: 'zh',
    fallbackLng: {
      'ja-JP': ['ja'],
      'en-US': ['en'],
      'zh-TW': ['zh'],
      'default': ['zh']
    },
    // 預設 namespace
    ns: ['home', 'nav', 'project', 'projectCard'],
    defaultNS: 'home',
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
  });

export default i18n;
