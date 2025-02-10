'use client';
import { useTranslation } from 'react-i18next';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

function LanguageSwitcher() {
  const { i18n } = useTranslation();
  
  const languages = [
    { code: 'zh', label: '中' },
    { code: 'en', label: 'EN' },
    { code: 'ja', label: '日' }
  ];

  return (
    <div className="flex items-center gap-2">
      {languages.map((lang, index) => (
        <div key={lang.code} className="flex items-center">
          <button
            onClick={() => i18n.changeLanguage(lang.code)}
            aria-label={`Switch to ${lang.code}`}
            className={`px-2 py-1 rounded transition-colors ${
              i18n.language.startsWith(lang.code)
                ? 'bg-blue-500 text-white' 
                : 'text-gray-300 hover:text-white hover:bg-blue-400'
            }`}
          >
            {lang.label}
          </button>
          {index < languages.length - 1 && (
            <span className="text-gray-500 mx-1" aria-hidden="true">|</span>
          )}
        </div>
      ))}
    </div>
  );
}

export default function Navigation() {
  const { t } = useTranslation();
  const pathname = usePathname();

  const navLinks = [
    { href: '/', label: t('home:pageTitle') },
    { href: '/projects', label: t('projects:pageTitle') },
    { href: '/schedule', label: t('schedule:pageTitle') },
    { href: '#', label: t('footer:title'), onClick: (e) => {
      e.preventDefault();
      scrollToFooter();
      }
    }
  ];


  const scrollToFooter = () => {
    const footer = document.getElementById('footer');
    if (footer) {
      footer.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="bg-gray-900 text-white fixed top-0 left-0 right-0 z-[123] shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 mr-auto">
            <Link href="/" className="text-xl font-bold">
              {t('nav:logo')}
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="flex items-center gap-6">
            {navLinks.map(({ href, label, onClick }) => (
              <Link 
                key={href}
                href={href}
                onClick={onClick}
                className={`hover:text-blue-400 transition-colors ${
                  pathname === href ? 'text-blue-400' : ''
                }`}
              >
                {label}
              </Link>
            ))}
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </nav>
  );
} 