import { contactData } from './contact.data'
import ContactForm from '../../ui/ContactForm/ContactForm'
import styles from './Contact.module.scss'


export default function Contact() {
  return (
    <section className={styles.contact}>
      <div className={styles.content}>
        <h2 className={styles.title}>Talk to our team</h2>
        <p className={styles.description}>We're committed to delivering the support you require to make your experience as smooth as possible.</p>

        <ul className={styles.menu}>
          {contactData.map(({ id, image, link, text }) => (
            <li key={id} className={styles.item}>
              <img src={image} alt="" />
              <a href={link} target="_blank" rel="noreferrer" className={styles.link}>
                {text}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <ContactForm />
    </section>
  )
}
