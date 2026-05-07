import FeaturesHeader from '../../ui/FeaturesHeader/FeaturesHeader'
import AccordionItems from '../../ui/AccordionItems/AccordionItems'
import ContactBanner from '../../ui/ContactBanner/ContactBanner'
import styles from './FAQ.module.scss'

export default function FAQ() {


  return (
    <section id='faq' className={styles.faq}>
      <FeaturesHeader type="questions" />
      <AccordionItems />
      <ContactBanner />
    </section >
  )
}