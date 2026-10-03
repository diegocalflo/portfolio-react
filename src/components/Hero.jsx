import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { metrics } from '../constants';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-glow" aria-hidden="true" />
      <div className="container hero-content">
        <motion.div
          className="hero-copy"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
        >
          <p className="eyebrow"><span />{t('hero.eyebrow')}</p>
          <h1 id="hero-title">{t('hero.title')}</h1>
          <p className="hero-summary">{t('hero.summary')}</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#contact">{t('hero.contactCta')}</a>
            <a className="button button-secondary" href="#projects">{t('hero.projectsCta')}</a>
          </div>
          <p className="availability"><span aria-hidden="true" />{t('hero.availability')}</p>
        </motion.div>

        <motion.dl
          className="metric-grid"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.65, delay: 0.15 }}
        >
          {metrics.map((metric) => (
            <div className={`metric-card ${metric.valueKey ? 'metric-card-text' : ''}`} key={metric.labelKey}>
              <dt>{t(metric.labelKey)}</dt>
              <dd>{metric.valueKey ? t(metric.valueKey) : metric.value}</dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
};

export default Hero;
