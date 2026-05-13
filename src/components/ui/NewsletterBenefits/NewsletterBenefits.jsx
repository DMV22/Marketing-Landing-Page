import { newsletterBenefits } from './newsletterBenefits.data'
import checkMark from '../../../assets/check-fill.svg'
import styles from './NewsletterBenefits.module.scss'

export default function NewsletterBenefits() {
  return (
    <div className={styles.benefits}>
      {newsletterBenefits.map((benefit, index) => (
        <div className={styles.benefitItem} key={index}>
          <img className={styles.checkmark} src={checkMark} alt="" />
          <p className={styles.benefit}>
            {benefit}
          </p>
        </div>
      ))}
    </div>
  )
}
