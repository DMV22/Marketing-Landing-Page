import FeaturesHeader from '../../ui/FeaturesHeader/FeaturesHeader'
import styles from './FAQ.module.scss'
import ContactBanner from '../../ui/ContactBanner/ContactBanner'
import AccordionItems from '../../ui/AccordionItems/AccordionItems'

export default function FAQ() {


  return (
    <section className={styles.faq}>
      <div className="container">
        <FeaturesHeader type="questions" />
        <AccordionItems />
        <ContactBanner />
      </div>
    </section >
  )
}