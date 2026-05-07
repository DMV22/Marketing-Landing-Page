import NewsletterBenefits from '../../ui/NewsletterBenefits/NewsletterBenefits'
import NewsletterForm from '../../ui/NewsletterForm/NewsletterForm'
import image from '../../../assets/newsletter.svg'
import styles from './Newsletter.module.scss'

export default function Newsletter() {
  return (
    <section id="newsletter" className={styles.newsletter}>
      <div className={styles.content}>
        <div className={styles.info}>
          <h2 className={styles.title}>Get the finest curated abstracts delivered weekly to your inbox</h2>
          <NewsletterBenefits />
          <NewsletterForm />
        </div>
        <div className={styles.imageWrapper}>
          <img className={styles.image} src={image} alt="Preview of abstract illustration collection" />
        </div>
      </div>
    </section>
  )
}