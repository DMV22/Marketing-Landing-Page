import styles from './Feature.module.scss'

export default function Feature({ image, title, description }) {
  return (
    <div className={styles.feature}>
      <div className={styles.feature__container}>
        <img src={image} alt={title} className={styles.feature__image} />
        <div className={styles.feature__content}>
          <h3 className={styles.feature__title}>{title}</h3>
          <p className={styles.feature__description}>{description}</p>
        </div>
      </div>
    </div>
  )
}
