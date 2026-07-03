export const THEME_STORAGE_KEY = 'theme';
export const THEME_CHANGE_EVENT = 'portfolio-theme-change';

export type Theme = 'light' | 'dark';

export const themeInitScript = `(function(){try{var s=localStorage.getItem('${THEME_STORAGE_KEY}');var l=s==='light'||(!s&&window.matchMedia('(prefers-color-scheme: light)').matches);var r=document.documentElement;r.classList.remove(l?'dark':'light');r.classList.add(l?'light':'dark');}catch(e){}})();`;

export const getPreferredTheme = (): Theme => {
  if (typeof window === 'undefined') return 'dark';

  try {
    const stored = localStorage.getItem(THEME_STORAGE_KEY);
    if (stored === 'light') return 'light';
    if (stored === 'dark') return 'dark';
    return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  } catch {
    return 'dark';
  }
};

export const getThemeSnapshot = () => getPreferredTheme() === 'light';

export const getThemeServerSnapshot = () => false;

export const subscribeToTheme = (callback: () => void) => {
  const mediaQuery = window.matchMedia('(prefers-color-scheme: light)');
  const onChange = () => callback();

  mediaQuery.addEventListener('change', onChange);
  window.addEventListener('storage', onChange);
  window.addEventListener(THEME_CHANGE_EVENT, onChange);

  return () => {
    mediaQuery.removeEventListener('change', onChange);
    window.removeEventListener('storage', onChange);
    window.removeEventListener(THEME_CHANGE_EVENT, onChange);
  };
};

export const applyTheme = (theme: Theme) => {
  const root = document.documentElement;
  root.classList.remove(theme === 'light' ? 'dark' : 'light');
  root.classList.add(theme);
};

export const persistTheme = (theme: Theme) => {
  try {
    localStorage.setItem(THEME_STORAGE_KEY, theme);
    window.dispatchEvent(new Event(THEME_CHANGE_EVENT));
  } catch {
    // Ignore storage errors (private browsing, etc.)
  }
};
