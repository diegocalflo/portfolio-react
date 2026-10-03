import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { skillGroups } from '../constants';
import { SectionWrapper } from '../hoc';

const Tech = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="section-heading">
        <p className="eyebrow"><span />{t('skills.eyebrow')}</p>
        <h2>{t('skills.title')}</h2>
        <p className="section-summary">{t('skills.summary')}</p>
      </div>

      <div className="skill-grid">
        {skillGroups.map((group, index) => (
          <motion.article
            className="skill-group"
            key={group.titleKey}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ delay: index * 0.06 }}
          >
            <h3>{t(group.titleKey)}</h3>
            <ul>
              {group.items.map((item) => (
                <li key={item.name}>
                  <span className="skill-icon" aria-hidden="true">
                    {item.icon ? <img src={item.icon} alt="" loading="lazy" /> : item.short}
                  </span>
                  <span className="skill-name">{item.name}</span>
                </li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, 'skills', 'section-dark');
