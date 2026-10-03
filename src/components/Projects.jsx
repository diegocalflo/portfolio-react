import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { projects } from '../constants';
import { SectionWrapper } from '../hoc';

const ProjectModal = ({ project, onClose }) => {
  const { t } = useTranslation();
  const dialogRef = useRef(null);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    const previousFocus = document.activeElement;
    document.body.style.overflow = 'hidden';
    dialogRef.current?.querySelector('button')?.focus();

    const handleKeyboard = (event) => {
      if (event.key === 'Escape') onClose();
      if (event.key !== 'Tab') return;

      const focusable = dialogRef.current?.querySelectorAll('button, a, input, textarea, [tabindex]:not([tabindex="-1"])');
      if (!focusable?.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    window.addEventListener('keydown', handleKeyboard);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyboard);
      previousFocus?.focus();
    };
  }, [onClose]);

  return (
    <div className="modal-backdrop" role="presentation" onMouseDown={(event) => event.target === event.currentTarget && onClose()}>
      <motion.div
        ref={dialogRef}
        className="project-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        tabIndex="-1"
        initial={{ opacity: 0, y: 20, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
      >
        <button className="modal-close" type="button" onClick={onClose} aria-label={t('projects.close')}>×</button>
        <p className="eyebrow"><span />{t('projects.impact')}</p>
        <p className="project-impact">{project.impact}</p>
        <h2 id="project-modal-title">{t(project.titleKey)}</h2>
        <p className="modal-detail">{t(project.detailKey)}</p>
        <div className="modal-stack">
          <span>{t('projects.stack')}</span>
          <ul>{project.technologies.map((technology) => <li key={technology}>{technology}</li>)}</ul>
        </div>
      </motion.div>
    </div>
  );
};

const Projects = () => {
  const { t } = useTranslation();
  const [activeProject, setActiveProject] = useState(null);

  return (
    <>
      <div className="section-heading split-heading">
        <div>
          <p className="eyebrow"><span />{t('projects.eyebrow')}</p>
          <h2>{t('projects.title')}</h2>
        </div>
        <p className="section-summary">{t('projects.summary')}</p>
      </div>

      <div className="project-grid">
        {projects.map((project, index) => (
          <motion.article
            className={`project-card ${project.ready ? '' : 'is-pending'}`}
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: index * 0.07 }}
          >
            <div className="project-visual">
              <img src={project.image} alt="" loading="lazy" />
              {project.impact && <span className="impact-chip">{project.impact}</span>}
            </div>
            <div className="project-body">
              <h3>{t(project.titleKey)}</h3>
              <p>{t(project.summaryKey)}</p>
              <ul className="tag-list">
                {project.technologies.map((technology) => <li key={technology}>{technology}</li>)}
              </ul>
              {project.ready ? (
                <button className="text-link" type="button" onClick={() => setActiveProject(project)}>
                  {t('projects.view')} <span aria-hidden="true">↗</span>
                </button>
              ) : (
                <span className="pending-label">{t('projects.pending')}</span>
              )}
            </div>
          </motion.article>
        ))}
      </div>

      {activeProject && <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />}
    </>
  );
};

export default SectionWrapper(Projects, 'projects', 'section-dark');
