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
            <a href={socialLinks.github} target="_blank" rel="noreferrer">GitHub <span aria-hidden="true">↗</span></a>
            <a href={socialLinks.linkedin} target="_blank" rel="noreferrer">LinkedIn <span aria-hidden="true">↗</span></a>
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
