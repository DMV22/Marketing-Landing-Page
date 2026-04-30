import styles from './Buttons.module.scss';

export default function Buttons({
  variant = 'header',
  primaryText = 'Learn more',
  secondaryText = 'See pricing',
  className = '',
}) {
  const classes = `${styles['cta-buttons']} ${styles[variant]} ${className}`.trim();

  return (
    <div className={classes}>
      <button type="button" className="btn btn--primary">
        {primaryText}
      </button>

      <button type="button" className="btn btn--secondary">
        {secondaryText}
      </button>
    </div>
  );
}