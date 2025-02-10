'use client'; // 若在 Next.js App Directory 下，有使用 client side 功能需加
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// 這裡可以把多個 namespace (page) 拆分，
// 例如 common.json, projects.json, header.json ...
import enHome from '../public/locales/en/home.json';
import zhHome from '../public/locales/zh/home.json';
import jaHome from '../public/locales/ja/home.json';
import enNav from '../public/locales/en/nav.json';
import zhNav from '../public/locales/zh/nav.json';
import jaNav from '../public/locales/ja/nav.json';
import enProjectCard from '../public/locales/en/project_card.json';
import zhProjectCard from '../public/locales/zh/project_card.json';
import jaProjectCard from '../public/locales/ja/project_card.json';
import enProjects from '../public/locales/en/projects.json';
import zhProjects from '../public/locales/zh/projects.json';
import jaProjects from '../public/locales/ja/projects.json';
import enSchedule from '../public/locales/en/schedule.json';
import zhSchedule from '../public/locales/zh/schedule.json';
import jaSchedule from '../public/locales/ja/schedule.json';
import enFooter from '../public/locales/en/footer.json';
import zhFooter from '../public/locales/zh/footer.json';
import jaFooter from '../public/locales/ja/footer.json';

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources: {
      zh: {
        home: zhHome,
        nav: zhNav,
        project_card: zhProjectCard,
        projects: zhProjects,
        schedule: zhSchedule,
        footer: zhFooter
      },
      ja: {
        home: jaHome,
        nav: jaNav,
        project_card: jaProjectCard,
        projects: jaProjects,
        schedule: jaSchedule,
        footer: jaFooter
      },
      en: {
        home: enHome,
        nav: enNav,
        project_card: enProjectCard,
        projects: enProjects,
        schedule: enSchedule,
        footer: enFooter
      },
    },
    ns: ['home', 'nav', 'project_card', 'projects', 'schedule', 'footer'],
    interpolation: {
      escapeValue: false,
    },

    detection: {
      order: ['localStorage', 'navigator'],
    },
  });

export default i18n;
