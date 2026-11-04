import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { metrics } from '../constants';

const Hero = () => {
  const { t } = useTranslation();
  const gridRef = useRef(null);
  const glowRef = useRef(null);
  const words = t('hero.title').split(' ');

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
    let ticking = false;
    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const y = window.scrollY;
        if (gridRef.current) gridRef.current.style.transform = `translateY(${y * 0.12}px)`;
        if (glowRef.current) glowRef.current.style.transform = `translateY(${y * -0.08}px)`;
        ticking = false;
      });
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-grid" ref={gridRef} aria-hidden="true" />
      <div className="hero-glow" ref={glowRef} aria-hidden="true" />
      <div className="container hero-content">
        <motion.div
          className="hero-copy"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
        >
          <p className="eyebrow"><span />{t('hero.eyebrow')}</p>
          <h1 id="hero-title">
            {words.map((word, index) => (
              <span key={`${word}-${index}`}>
                <motion.span
                  className="hero-word"
                  style={{ display: 'inline-block' }}
                  initial={{ opacity: 0, y: 22, filter: 'blur(4px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  transition={{ duration: 0.55, delay: 0.15 + index * 0.05 }}
                >
                  {word}
                </motion.span>
                {' '}
              </span>
            ))}
          </h1>
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
            <div className={`metric-card spotlight ${metric.valueKey ? 'metric-card-text' : ''}`} key={metric.labelKey}>
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
