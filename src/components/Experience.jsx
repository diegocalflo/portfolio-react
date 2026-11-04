import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { experiences, resumes } from '../constants';
import { SectionWrapper } from '../hoc';

const Experience = () => {
  const { t } = useTranslation();
  const [resumeMenuOpen, setResumeMenuOpen] = useState(false);
  const resumeMenuRef = useRef(null);

  useEffect(() => {
    if (!resumeMenuOpen) return undefined;

    const handlePointer = (event) => {
      if (!resumeMenuRef.current?.contains(event.target)) setResumeMenuOpen(false);
    };
    const handleKeyboard = (event) => {
      if (event.key === 'Escape') setResumeMenuOpen(false);
    };

    document.addEventListener('mousedown', handlePointer);
    document.addEventListener('keydown', handleKeyboard);
    return () => {
      document.removeEventListener('mousedown', handlePointer);
      document.removeEventListener('keydown', handleKeyboard);
    };
  }, [resumeMenuOpen]);

  return (
    <>
      <div className="section-heading experience-heading">
        <div>
          <p className="eyebrow"><span />{t('experience.eyebrow')}</p>
          <h2>{t('experience.title')}</h2>
        </div>
        <div className="resume-action">
          <div className="resume-menu" ref={resumeMenuRef}>
            <button
              className="button button-primary"
              type="button"
              aria-expanded={resumeMenuOpen}
              aria-haspopup="menu"
              onClick={() => setResumeMenuOpen((open) => !open)}
            >
              {t('experience.download')} <span aria-hidden="true">{resumeMenuOpen ? '▴' : '▾'}</span>
            </button>
            {resumeMenuOpen && (
              <div className="resume-menu-list" role="menu">
                {resumes.map((resume) => (
                  <a
                    key={resume.filename}
                    role="menuitem"
                    href={resume.file}
                    download={resume.filename}
                    onClick={() => setResumeMenuOpen(false)}
                  >
                    {resume.label} <span aria-hidden="true">↓</span>
                  </a>
                ))}
              </div>
            )}
          </div>
          <small>{t('experience.downloadNote')}</small>
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
