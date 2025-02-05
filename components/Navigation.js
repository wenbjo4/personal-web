'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Initialize i18next
i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources: {
      en: {
        translation: {
          nav: {
            home: "Home",
            projects: "Projects",
            contact: "Contact",
            todos: "Todos",
            chat: "Chat"
          },
          logo: "Profilo"
        }
      },
      zh: {
        translation: {
          nav: {
            home: "首頁",
            projects: "專案",
            contact: "聯絡我",
            todos: "待辦事項",
            chat: "聊天"
          },
          logo: "簡介"
        }
      }
    },
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['localStorage', 'navigator'],
    }
  });

function LanguageSwitcher() {
  const { i18n } = useTranslation();
  
  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => i18n.changeLanguage('zh')}
        className={`px-2 py-1 rounded transition-colors ${
          i18n.language === 'zh' ? 'bg-blue-500 text-white' : 'text-gray-300 hover:text-white'
        }`}
      >
        中
      </button>
      <span className="text-gray-500">|</span>
      <button
        onClick={() => i18n.changeLanguage('en')}
        className={`px-2 py-1 rounded transition-colors ${
          i18n.language === 'en' ? 'bg-blue-500 text-white' : 'text-gray-300 hover:text-white'
        }`}
      >
        EN
      </button>
    </div>
  );
}

export default function Navigation() {
  const { t } = useTranslation();

  return (
    <nav className="bg-gray-900 text-white fixed top-0 left-0 right-0 z-[123] shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo 偏左 */}
          <div className="flex-shrink-0 mr-auto">
            <Link href="/" className="text-xl font-bold">
              {t('logo')}
            </Link>
          </div>

          {/* Navigation Links 仍在右侧 */}
          <div className="flex items-center gap-6">
            <Link href="/" className="hover:text-blue-400 transition-colors">
              {t('nav.home')}
            </Link>
            <Link href="/projects" className="hover:text-blue-400 transition-colors">
              {t('nav.projects')}
            </Link>
            <Link href="/todos" className="hover:text-blue-400 transition-colors">
              {t('nav.todos')}
            </Link>
            <Link href="/chat-room" className="hover:text-blue-400 transition-colors">
              {t('nav.chat')}
            </Link>
            <Link href="/contact" className="hover:text-blue-400 transition-colors">
              {t('nav.contact')}
            </Link>
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </nav>
  );
} 