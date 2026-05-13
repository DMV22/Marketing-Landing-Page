import styles from './ToggleButton.module.scss'

export default function ToggleButton({ billing, onToggle }) {

  return (
    <div className={styles.container} aria-label="Billing period">
      <button className={`btn ${styles.toggleBtn} ${billing === 'monthly' ? 'btn--primary' : ''}`} type="button" onClick={() => onToggle('monthly')} aria-pressed={billing === 'monthly'}>Monthly</button>
      <button className={`btn ${styles.toggleBtn} ${billing === 'annually' ? 'btn--primary' : ''}`} type="button" onClick={() => onToggle('annually')} aria-pressed={billing === 'annually'}>Annually</button>
    </div>
  )
}

