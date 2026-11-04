import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { useTranslation } from 'react-i18next';
import { socialLinks } from '../constants';
import { SectionWrapper } from '../hoc';

const initialForm = { name: '', email: '', message: '', company: '' };

const Contact = () => {
  const { t } = useTranslation();
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState('idle');
  const [errors, setErrors] = useState({});

  const validate = () => {
    const next = {};
    if (!form.name.trim()) next.name = 'required';
    if (!form.email.trim()) next.email = 'required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) next.email = 'email';
    if (!form.message.trim()) next.message = 'required';
    return next;
  };

  const handleChange = ({ target }) => {
    setForm((current) => ({ ...current, [target.name]: target.value }));
    setErrors((current) => {
      if (!current[target.name]) return current;
      const next = { ...current };
      delete next[target.name];
      return next;
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (form.company) return;

    const next = validate();
    setErrors(next);
    if (Object.keys(next).length > 0) return;

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID?.trim();
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID?.trim();
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY?.trim();

    if (!serviceId || !templateId || !publicKey) {
      setStatus('configurationError');
      return;
    }

    setStatus('sending');
    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: form.name.trim(),
          from_email: form.email.trim(),
          message: form.message.trim(),
          to_name: 'Diego',
          to_email: 'dcalflo8@gmail.com',
        },
        { publicKey },
      );
      setForm(initialForm);
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  return (
    <>
      <div className="contact-layout">
        <div className="contact-copy">
          <p className="eyebrow"><span />{t('contact.eyebrow')}</p>
          <h2>{t('contact.title')}</h2>
          <p>{t('contact.summary')}</p>

          <div className="contact-details">
            <p><span>{t('contact.emailLabel')}</span><a href={socialLinks.email}>dcalflo8@gmail.com</a></p>
            <p><span>{t('contact.phone')}</span><a href="tel:+527771911219">+52 777 191 1219</a></p>
            <p><span>{t('contact.locationLabel')}</span>{t('contact.location')}</p>
          </div>

          <div className="social-links" aria-label={t('contact.follow')}>
            <a className="social-link" href={socialLinks.github} target="_blank" rel="noreferrer" aria-label="GitHub">
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
            </a>
            <a className="social-link" href={socialLinks.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <div className="form-row">
            <label>
              <span>{t('contact.name')}</span>
              <input name="name" value={form.name} onChange={handleChange} placeholder={t('contact.namePlaceholder')} maxLength="80" autoComplete="name" required aria-invalid={Boolean(errors.name)} className={errors.name ? 'is-invalid' : undefined} />
              {errors.name && <span className="field-error" role="alert">{t(`contact.errors.${errors.name}`)}</span>}
            </label>
            <label>
              <span>{t('contact.email')}</span>
              <input type="email" name="email" value={form.email} onChange={handleChange} placeholder={t('contact.emailPlaceholder')} maxLength="120" autoComplete="email" required aria-invalid={Boolean(errors.email)} className={errors.email ? 'is-invalid' : undefined} />
              {errors.email && <span className="field-error" role="alert">{t(`contact.errors.${errors.email}`)}</span>}
            </label>
          </div>
          <label>
            <span>{t('contact.message')}</span>
            <textarea name="message" value={form.message} onChange={handleChange} placeholder={t('contact.messagePlaceholder')} maxLength="2000" rows="6" required aria-invalid={Boolean(errors.message)} className={errors.message ? 'is-invalid' : undefined} />
            {errors.message && <span className="field-error" role="alert">{t(`contact.errors.${errors.message}`)}</span>}
          </label>
          <label className="honeypot" aria-hidden="true">
            Company
            <input name="company" value={form.company} onChange={handleChange} tabIndex="-1" autoComplete="off" />
          </label>
          <div className="form-footer">
            <button className="button button-primary" type="submit" disabled={status === 'sending'}>
              {status === 'sending' ? t('contact.sending') : t('contact.send')}
            </button>
            {status !== 'idle' && status !== 'sending' && (
              <p className={`form-status ${status === 'success' ? 'is-success' : 'is-error'}`} role="status">
                {t(`contact.${status}`)}
              </p>
            )}
          </div>
        </form>
      </div>

      <footer className="footer">
        <span>© {new Date().getFullYear()} Diego Calderón</span>
        <span>{t('footer')}</span>
      </footer>
    </>
  );
};

export default SectionWrapper(Contact, 'contact');
