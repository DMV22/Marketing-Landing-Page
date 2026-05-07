import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactSchema } from './contactForm.schema';
import { submitContactForm } from './contactForm.service';
import { CONTACT_MESSAGES } from './contactForm.constants';
import styles from './ContactForm.module.scss';

export default function ContactForm() {
  const [status, setStatus] = useState('idle');
  const [apiError, setApiError] = useState('');
  const [focusedField, setFocusedField] = useState('');

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(contactSchema),
    mode: 'onBlur',
    reValidateMode: 'onChange',
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  const messageValue = watch('message') || '';
  const messageLength = messageValue.length;
  const isMessageLimitExceeded = messageLength > CONTACT_MESSAGES.maxMessageLength;

  const nameField = register('name');
  const emailField = register('email');
  const messageField = register('message');

  const onSubmit = async (data) => {
    try {
      setApiError('');
      setStatus('loading');

      await submitContactForm(data);

      setStatus('success');
      reset();
    } catch (err) {
      setApiError(err.message || CONTACT_MESSAGES.genericError);
      setStatus('error');
    }
  };

  const getInputClassName = ({ hasError, isFocused }) => {
    return `
      ${styles.input}
      ${hasError ? styles.inputError : ''}
      ${isFocused && !hasError ? styles.inputFocused : ''}
    `;
  };

  const getTextareaClassName = ({ hasError, isFocused, isLimitExceeded }) => {
    return `
      ${styles.textarea}
      ${hasError || isLimitExceeded ? styles.textareaError : ''}
      ${isFocused && !(hasError || isLimitExceeded) ? styles.textareaFocused : ''}
    `;
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className={styles.formGroup}>
        <div className={styles.fields}>
          <div className={styles.field}>
            <label htmlFor="contact-name" className={styles.label}>
              Name
            </label>

            <input
              id="contact-name"
              type="text"
              placeholder={CONTACT_MESSAGES.namePlaceholder}
              className={getInputClassName({
                hasError: Boolean(errors.name),
                isFocused: focusedField === 'name',
              })}
              aria-invalid={Boolean(errors.name)}
              aria-describedby={errors.name ? 'contact-name-error' : undefined}
              {...nameField}
              onFocus={() => setFocusedField('name')}
              onBlur={(e) => {
                setFocusedField('');
                nameField.onBlur(e);
              }}
              onChange={(e) => {
                if (status === 'success') setStatus('idle');
                if (apiError) setApiError('');
                nameField.onChange(e);
              }}
            />

            {errors.name && (
              <p id="contact-name-error" className={`${styles.message} ${styles.errorMessage}`}>{errors.name.message}</p>
            )}
          </div>

          <div className={styles.field}>
            <label htmlFor="contact-email" className={styles.label}>
              Email
            </label>

            <input
              id="contact-email"
              type="email"
              placeholder={CONTACT_MESSAGES.emailPlaceholder}
              className={getInputClassName({
                hasError: Boolean(errors.email),
                isFocused: focusedField === 'email',
              })}
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? 'contact-email-error' : undefined}
              {...emailField}
              onFocus={() => setFocusedField('email')}
              onBlur={(e) => {
                setFocusedField('');
                emailField.onBlur(e);
              }}
              onChange={(e) => {
                if (status === 'success') setStatus('idle');
                if (apiError) setApiError('');
                emailField.onChange(e);
              }}
            />

            {errors.email && (
              <p id="contact-email-error" className={`${styles.message} ${styles.errorMessage}`}>{errors.email.message}</p>
            )}
          </div>

          <div className={styles.field}>
            <label htmlFor="contact-message" className={styles.label}>
              Message
            </label>

            <textarea
              id="contact-message"
              placeholder={CONTACT_MESSAGES.messagePlaceholder}
              className={getTextareaClassName({
                hasError: Boolean(errors.message),
                isFocused: focusedField === 'message',
                isLimitExceeded: isMessageLimitExceeded,
              })}
              aria-invalid={Boolean(errors.message) || isMessageLimitExceeded}
              aria-describedby={errors.message ? 'contact-message-error' : 'contact-message-counter'}
              {...messageField}
              onFocus={() => setFocusedField('message')}
              onBlur={(e) => {
                setFocusedField('');
                messageField.onBlur(e);
              }}
              onChange={(e) => {
                if (status === 'success') setStatus('idle');
                if (apiError) setApiError('');
                messageField.onChange(e);
              }}
            />

            <div className={styles.messageMeta}>
              {errors.message ? (
                <p id="contact-message-error" className={`${styles.message} ${styles.errorMessage}`}>{errors.message.message}</p>
              ) : (
                <span className={styles.messageSpacer} />
              )}

              <p id="contact-message-counter" className={`${styles.counter} 
            ${isMessageLimitExceeded ? styles.counterError : ''}`}>
                {messageLength}/{CONTACT_MESSAGES.maxMessageLength}
              </p>
            </div>
          </div>
        </div>

        <button
          type="submit"
          className={`${styles.submitBtn} btn btn--secondary`}
          disabled={isSubmitting}>
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </button>

        {apiError && !errors.name && !errors.email && !errors.message && (
          <p className={`${styles.feedback} ${styles.errorMessage}`}>{apiError}</p>
        )}

        {status === 'success' && (
          <p className={`${styles.feedback} ${styles.successMessage}`}>{CONTACT_MESSAGES.success}</p>
        )}
      </div>
    </form>
  );
}