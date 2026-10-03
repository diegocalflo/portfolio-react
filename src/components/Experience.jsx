import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { experiences } from '../constants';
import { SectionWrapper } from '../hoc';
import resumePdf from '../assets/curriculum/Diego-Calderon-Resume-EN.pdf';

const Experience = () => {
  const { t, i18n } = useTranslation();
  const isSpanish = i18n.resolvedLanguage?.startsWith('es');

  return (
    <>
      <div className="section-heading experience-heading">
        <div>
          <p className="eyebrow"><span />{t('experience.eyebrow')}</p>
          <h2>{t('experience.title')}</h2>
        </div>
        <div className="resume-action">
          <a className="button button-primary" href={resumePdf} download="Diego-Calderon-Resume-EN.pdf">
            {t('experience.download')}
          </a>
          <small>{t('experience.downloadNote')}</small>
          {isSpanish && <span className="language-note">EN</span>}
        </div>
      </div>

      <div className="timeline">
        {experiences.map((experience, index) => {
          const points = t(experience.pointsKey, { returnObjects: true });
          return (
            <motion.article
              className="timeline-item"
              key={`${experience.company}-${experience.dateKey}`}
              initial={{ opacity: 0, x: -18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ delay: index * 0.05 }}
            >
              <div className="timeline-marker" aria-hidden="true"><span /></div>
              <div className="timeline-meta">
                <time>{t(experience.dateKey)}</time>
                {experience.current && <span className="status-badge">{t('experience.current')}</span>}
              </div>
              <div className="timeline-content">
                <h3>{t(experience.roleKey)}</h3>
                <p className="company-name">{experience.company}</p>
                <ul>
                  {Array.isArray(points) && points.map((point) => <li key={point}>{point}</li>)}
                </ul>
              </div>
            </motion.article>
          );
        })}
      </div>
    </>
  );
};

export default SectionWrapper(Experience, 'experience');
