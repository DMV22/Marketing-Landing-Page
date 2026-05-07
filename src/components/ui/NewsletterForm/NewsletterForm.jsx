import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { newsletterSchema } from './newsletterForm.schema';
import { subscribeToNewsletter } from './newsletterForm.service';
import styles from './NewsletterForm.module.scss';

export default function NewsletterForm() {
  const [status, setStatus] = useState('idle');
  const [apiError, setApiError] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(newsletterSchema),
    mode: 'onBlur',
    reValidateMode: 'onChange',
    defaultValues: {
      email: '',
    },
  });

  const emailField = register('email');

  const onSubmit = async (data) => {
    try {
      setApiError('');
      setStatus('loading');

      await subscribeToNewsletter(data.email);

      setStatus('success');
      reset();
    } catch (err) {
      setApiError(err.message || 'Something went wrong. Please try again later.');
      setStatus('error');
    }
  };

  const emailError = errors.email?.message || apiError;

  const inputStateClass = `
    ${styles.input}
    ${emailError ? styles.inputError : ''}
    ${isFocused && !emailError ? styles.inputFocused : ''}
  `;

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className={styles.formGroup}>
        <div className={styles.field}>
          <label htmlFor="newsletter-email" className={`${styles.label} ${styles.visuallyHidden}`}>
            Email
          </label>

          <input
            id="newsletter-email"
            type="email"
            placeholder="Enter your email"
            className={inputStateClass}
            aria-invalid={Boolean(emailError)}
            aria-describedby={emailError ? 'newsletter-error' : 'newsletter-hint'}
            {...emailField}
            onFocus={() => setIsFocused(true)}
            onBlur={(e) => {
              setIsFocused(false);
              emailField.onBlur(e);
            }}
            onChange={(e) => {
              if (status === 'success') setStatus('idle');
              emailField.onChange(e);
            }}
          />

          {emailError ? (
            <p id="newsletter-error" className={`${styles.message} ${styles.errorMessage}`}>
              {emailError}
            </p>
          ) : (
            <p id="newsletter-hint" className={styles.message}>
              We only send you the best! No spam.
            </p>
          )}
        </div>

        <button
          type="submit"
          className={`${styles.submitBtn} btn btn--secondary`}
          disabled={isSubmitting}
        >
          {isSubmitting || status === 'loading' ? 'Submitting...' : 'Subscribe'}
        </button>
      </div>

      {status === 'success' && !emailError && (
        <p className={`${styles.feedback} ${styles.successMessage}`}>
          Subscription successful! Please check your email to confirm.
        </p>
      )}
    </form>
  );
}