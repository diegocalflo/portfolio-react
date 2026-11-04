import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { navLinks } from '../constants';

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [fabHidden, setFabHidden] = useState(false);
  const [theme, setTheme] = useState(() => document.documentElement.dataset.theme || 'dark');
  const language = i18n.resolvedLanguage?.startsWith('en') ? 'en' : 'es';
  const progressRef = useRef(null);
  const lastScrollY = useRef(0);
  const navRef = useRef(null);

  useEffect(() => {
    const anchors = navLinks
      .map((link) => document.getElementById(link.id))
      .filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: '-40% 0px -55% 0px' },
    );
    anchors.forEach((anchor) => observer.observe(anchor));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const y = window.scrollY;
        setFabHidden(y > 280 && y > lastScrollY.current && !menuOpen);
        lastScrollY.current = y;
        if (progressRef.current) {
          const max = document.documentElement.scrollHeight - window.innerHeight;
          progressRef.current.style.transform = `scaleX(${max > 0 ? Math.min(y / max, 1) : 0})`;
        }
        ticking = false;
      });
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return undefined;

    const handlePointer = (event) => {
      if (!navRef.current?.contains(event.target)) setMenuOpen(false);
    };
    const handleKeyboard = (event) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };

    document.addEventListener('mousedown', handlePointer);
    document.addEventListener('keydown', handleKeyboard);
    return () => {
      document.removeEventListener('mousedown', handlePointer);
      document.removeEventListener('keydown', handleKeyboard);
    };
  }, [menuOpen]);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', theme === 'dark' ? '#071018' : '#f5f8fb');
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  const changeLanguage = () => i18n.changeLanguage(language === 'es' ? 'en' : 'es');
  const changeTheme = () => setTheme((current) => (current === 'dark' ? 'light' : 'dark'));

  return (
    <>
      <div className="scroll-progress" ref={progressRef} aria-hidden="true" />
      <div className="section-rail">
        {navLinks.map((link) => (
          <a
            key={link.id}
            className={activeSection === link.id ? 'is-active' : ''}
            href={`#${link.id}`}
            aria-label={t(link.labelKey)}
            aria-current={activeSection === link.id ? 'true' : undefined}
          />
        ))}
      </div>
      <div className={`nav-fab ${fabHidden ? 'is-hidden' : ''}`} ref={navRef}>
        <button
          className={`fab-button ${menuOpen ? 'is-open' : ''}`}
          type="button"
          aria-expanded={menuOpen}
          aria-controls="floating-navigation"
          aria-label={menuOpen ? t('nav.close') : t('nav.menu')}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
        </button>
        <nav id="floating-navigation" className={`nav-panel ${menuOpen ? 'is-open' : ''}`} aria-label="Main navigation">
          <ul className="nav-links">
            {navLinks.map((link, index) => (
              <li key={link.id}>
                <a
                  className={activeSection === link.id ? 'is-active' : ''}
                  href={`#${link.id}`}
                  aria-current={activeSection === link.id ? 'true' : undefined}
                  onClick={() => setMenuOpen(false)}
                >
                  <span className="nav-index" aria-hidden="true">{`0${index + 1}`}</span>
                  {t(link.labelKey)}
                </a>
              </li>
            ))}
          </ul>
          <div className="nav-controls">
            <button className="toggle-button" type="button" onClick={changeLanguage} aria-label={t('nav.language')} title={t('nav.language')}>
              <span className="toggle-code">{language === 'es' ? 'EN' : 'ES'}</span>
            </button>
            <button className="toggle-button" type="button" onClick={changeTheme} aria-label={t('nav.theme')} title={t('nav.theme')}>
              <span className="toggle-icon" aria-hidden="true">
                <svg className={theme === 'dark' ? 'is-on' : ''} viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="3.5" />
                  <path d="M12 2v2.2M12 19.8V22M4.9 4.9l1.6 1.6M17.5 17.5l1.6 1.6M2 12h2.2M19.8 12H22M4.9 19.1l1.6-1.6M17.5 6.5l1.6-1.6" />
                </svg>
                <svg className={theme === 'light' ? 'is-on' : ''} viewBox="0 0 24 24" fill="none">
                  <path d="M20.2 15.2A8.5 8.5 0 0 1 8.8 3.8 8.5 8.5 0 1 0 20.2 15.2Z" />
                </svg>
              </span>
            </button>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
