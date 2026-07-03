'use client';

import { useEffect, useSyncExternalStore } from 'react';

import { MdDarkMode, MdLightMode } from 'react-icons/md';

import {
  applyTheme,
  getThemeServerSnapshot,
  getThemeSnapshot,
  persistTheme,
  subscribeToTheme,
} from '@/lib/theme';

const DarkModeToggle = () => {
  const isLight = useSyncExternalStore(subscribeToTheme, getThemeSnapshot, getThemeServerSnapshot);

  useEffect(() => {
    applyTheme(isLight ? 'light' : 'dark');
  }, [isLight]);

  const toggleTheme = () => {
    const nextTheme = isLight ? 'dark' : 'light';
    applyTheme(nextTheme);
    persistTheme(nextTheme);
  };

  return (
    <button
      aria-label="Toggle theme"
      onClick={toggleTheme}
      className="relative w-12 h-6 rounded-full p-1 transition-all duration-500 focus-ring group hover:shadow-lg hover:shadow-[var(--accent)]/25 gradient-bg"
    >
      <div
        className={`w-4 h-4 bg-[var(--foreground)] rounded-full shadow-lg transform transition-transform duration-500 ease-out ${
          isLight ? 'translate-x-6' : 'translate-x-0'
        }`}
      />

      <div className="absolute inset-0 flex items-center justify-between px-1 pointer-events-none">
        <MdLightMode
          size={12}
          className={`text-yellow-400 transition-all duration-300 ${
            isLight ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
          }`}
        />
        <MdDarkMode
          size={12}
          className={`text-blue-400 transition-all duration-300 ${
            !isLight ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
          }`}
        />
      </div>

      <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-sm gradient-bg"></div>
    </button>
  );
};

export default DarkModeToggle;
