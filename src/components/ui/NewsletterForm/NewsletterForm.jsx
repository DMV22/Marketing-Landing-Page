import { useState } from 'react';
import styles from './NewsletterForm.module.scss';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [status, setStatus] = useState('idle');
  const [isFocused, setIsFocused] = useState(false);

  const validateEmail = (value) => {
    if (!value.trim()) {
      return 'Email address is required.';
    }
    if (!EMAIL_REGEX.test(value.trim())) {
      return 'Please enter a valid email address.';
    }
    return '';
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setEmail(value);

    if (error) {
      setError(validateEmail(value));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationError = validateEmail(email);

    if (validationError) {
      setError(validationError);
      setStatus('error');
      return;
    }

    try {
      setError('');
      setStatus('loading');

      const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        throw new Error('Failed to subscribe. Please ensure your email is correct or try again later.');
      }
      setStatus('success');
      setEmail('');

    } catch (err) {
      setError(err.message || 'Something went wrong. Please try again later.');
      setStatus('error');
    }
  };

  const inputStateClass = `
    ${styles.input}
    ${error ? styles.inputError : ''}
    ${isFocused ? styles.inputFocused : ''}
  `;

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <div className={styles.formGroup}>
        <div className={styles.field}>
          <label htmlFor="newsletter-email" className={`${styles.label} ${styles.visuallyHidden}`}>
            Email
          </label>

          <input
            id="newsletter-email"
            name="email"
            type="email"
            value={email}
            placeholder="Enter your email"
            className={inputStateClass}
            onChange={handleChange}
            onFocus={() => setIsFocused(true)}
            onBlur={() => {
              setIsFocused(false);
              setError(validateEmail(email));
            }}
            aria-invalid={Boolean(error)}
            aria-describedby={error ? 'newsletter-error' : 'newsletter-hint'}
          />

          {error ? (
            <p id="newsletter-error" className={`${styles.message} ${styles.errorMessage}`}>
              {error}
            </p>
          ) : (
            <p id="newsletter-hint" className={styles.message}>
              We only send you the best! No spam.
            </p>
          )}
        </div>

        <button type="submit" className={`${styles.submitBtn} btn btn--secondary`} disabled={status === 'loading'}>
          {status === 'loading' ? 'Submitting...' : 'Subscribe'}
        </button>
      </div>

      {status === 'success' && (
        <p className={`${styles.feedback} ${styles.successMessage}`}>Subscription successful! Please check your email to confirm.</p>
      )}
    </form>
  );
}