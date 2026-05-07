import styles from './ContactBanner.module.scss'

export default function ContactBanner() {
  return (
    <div className={styles.contact}>
      <div className={styles.message}>
        <h4 className={styles.title}>Can’t find the answer you’re looking for?</h4>
        <p className={styles.description}>Reach out to our <span>customer support</span> team.</p>
      </div>
      <button className={`${styles.contactBtn} btn btn--secondary`}>Get in touch</button>
    </div>
  )
}
