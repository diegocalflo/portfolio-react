import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { navLinks } from '../constants';

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState(() => document.documentElement.dataset.theme || 'dark');
  const language = i18n.resolvedLanguage?.startsWith('en') ? 'en' : 'es';

  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', theme === 'dark' ? '#071018' : '#f5f8fb');
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  const changeLanguage = () => i18n.changeLanguage(language === 'es' ? 'en' : 'es');
  const changeTheme = () => setTheme((current) => (current === 'dark' ? 'light' : 'dark'));

  return (
    <header className="site-header">
      <nav className="navbar container" aria-label="Main navigation">
        <a className="brand" href="#main-content" aria-label="Diego Calderón — Home">
          <span className="brand-mark" aria-hidden="true">DC</span>
          <span className="brand-copy">
            <strong>Diego Calderón</strong>
            <small>Tech Lead</small>
          </span>
        </a>

        <div id="mobile-navigation" className={`nav-panel ${menuOpen ? 'is-open' : ''}`}>
          <ul className="nav-links">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a href={`#${link.id}`} onClick={() => setMenuOpen(false)}>
                  {t(link.labelKey)}
                </a>
              </li>
            ))}
          </ul>
          <div className="nav-controls">
            <button className="language-button" type="button" onClick={changeLanguage} aria-label={t('nav.language')}>
              <span className={language === 'es' ? 'is-active' : ''}>ES</span>
              <span aria-hidden="true">/</span>
              <span className={language === 'en' ? 'is-active' : ''}>EN</span>
            </button>
            <button className="theme-button" type="button" onClick={changeTheme} aria-label={t('nav.theme')} title={t('nav.theme')}>
              <span className={`theme-icon-option ${theme === 'dark' ? 'is-active' : ''}`} aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M20.2 15.2A8.5 8.5 0 0 1 8.8 3.8 8.5 8.5 0 1 0 20.2 15.2Z" />
                </svg>
              </span>
              <span className="theme-divider" aria-hidden="true" />
              <span className={`theme-icon-option ${theme === 'light' ? 'is-active' : ''}`} aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="3.5" />
                  <path d="M12 2v2.2M12 19.8V22M4.9 4.9l1.6 1.6M17.5 17.5l1.6 1.6M2 12h2.2M19.8 12H22M4.9 19.1l1.6-1.6M17.5 6.5l1.6-1.6" />
                </svg>
              </span>
            </button>
          </div>
        </div>

        <button
          className="menu-button"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          aria-label={menuOpen ? t('nav.close') : t('nav.menu')}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
