import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { strengths } from '../constants';
import { SectionWrapper } from '../hoc';

const About = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="section-heading split-heading">
        <div>
          <p className="eyebrow"><span />{t('about.eyebrow')}</p>
          <h2>{t('about.title')}</h2>
        </div>
        <div className="section-intro">
          <p>{t('about.summary')}</p>
          <p>{t('about.detail')}</p>
        </div>
      </div>

      <div className="strength-grid">
        {strengths.map((strength, index) => (
          <motion.article
            className="strength-card"
            key={strength.number}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ delay: index * 0.08 }}
          >
            <span className="card-number">{strength.number}</span>
            <h3>{t(strength.titleKey)}</h3>
            <p>{t(strength.textKey)}</p>
          </motion.article>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, 'about');
