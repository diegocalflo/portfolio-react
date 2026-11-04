import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { About, BackToTop, Contact, Experience, Hero, Navbar, Projects, Tech } from './components';

const App = () => {
  const { t } = useTranslation();

  useEffect(() => {
    const handleMove = (event) => {
      const card = event.target.closest?.('.spotlight');
      if (!card) return;
      const rect = card.getBoundingClientRect();
      card.style.setProperty('--spot-x', `${event.clientX - rect.left}px`);
      card.style.setProperty('--spot-y', `${event.clientY - rect.top}px`);
    };
    document.addEventListener('mousemove', handleMove);
    return () => document.removeEventListener('mousemove', handleMove);
  }, []);

  return (
  <>
    <a className="skip-link" href="#main-content">
      {t('skip')}
    </a>
    <Navbar />
    <main id="main-content">
      <Hero />
      <About />
      <Tech />
      <Experience />
      <Projects />
      <Contact />
    </main>
    <BackToTop />
  </>
  );
};

export default App;
