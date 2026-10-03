import { useTranslation } from 'react-i18next';
import { About, Contact, Experience, Hero, Navbar, Projects, Tech } from './components';

const App = () => {
  const { t } = useTranslation();

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
  </>
  );
};

export default App;
