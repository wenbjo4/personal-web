'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

const navItems = {
  en: {
    home: "Home",
    projects: "Projects",
    contact: "Contact",
    todos: "Todos",
    chat: "Chat"
  },
  zh: {
    home: "首頁",
    projects: "專案",
    contact: "聯絡我",
    todos: "待辦事項",
    chat: "聊天"
  }
};

function LanguageSwitcher() {
  const pathname = usePathname();
  const isEn = pathname.startsWith('/en');
  
  return (
    <div className="flex items-center gap-2">
      <Link
        href={isEn ? pathname.replace('/en', '') : `/en${pathname}`}
        className={`px-2 py-1 rounded transition-colors ${
          !isEn ? 'bg-blue-500 text-white' : 'text-gray-300 hover:text-white'
        }`}
      >
        中
      </Link>
      <span className="text-gray-500">|</span>
      <Link
        href={!isEn ? `/en${pathname}` : pathname.replace('/en', '')}
        className={`px-2 py-1 rounded transition-colors ${
          isEn ? 'bg-blue-500 text-white' : 'text-gray-300 hover:text-white'
        }`}
      >
        EN
      </Link>
    </div>
  );
}

export default function Navigation() {
  const pathname = usePathname();
  const isEn = pathname.startsWith('/en');
  const t = isEn ? navItems.en : navItems.zh;

  return (
    <nav className="bg-gray-900 text-white fixed top-0 left-0 right-0 z-[123] shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo 偏左 */}
          <div className="flex-shrink-0 mr-auto">
            <Link href="/" className="text-xl font-bold">
              {isEn ? "Profilo" : "簡介"}
            </Link>
          </div>

          {/* Navigation Links 仍在右侧 */}
          <div className="flex items-center gap-6">
            <Link href="/" className="hover:text-blue-400 transition-colors">
              {t.home}
            </Link>
            <Link href="/projects" className="hover:text-blue-400 transition-colors">
              {t.projects}
            </Link>
            <Link href="/todos" className="hover:text-blue-400 transition-colors">
              {t.todos}
            </Link>
            <Link href="/chat-room" className="hover:text-blue-400 transition-colors">
              {t.chat}
            </Link>
            <Link href="/contact" className="hover:text-blue-400 transition-colors">
              {t.contact}
            </Link>
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </nav>
  );
} 