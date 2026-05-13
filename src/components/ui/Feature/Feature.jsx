import styles from './Feature.module.scss'

export default function Feature({ image, title, description, variant }) {
  return (
    <div className={`${styles.container} ${variant === 'aside' ? styles.aside : ''}`}>
      <img src={image} alt={title} className={styles.image} />
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  )
}
