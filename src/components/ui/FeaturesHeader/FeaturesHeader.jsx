import { benefitsHeaderData } from './featuresHeader.data'
import styles from './FeaturesHeader.module.scss'

export default function FeaturesHeader({ type }) {
  const feature = benefitsHeaderData[type]

  if (!feature) {
    console.warn(`Feature with type "${type}" not found`)
    return null
  }

  return (
    <div className={`${styles.header} ${type === 'pricing' ? styles.pricing : ''}`}>
      <p className={styles.name}>{feature.name}</p>
      <h2 className={styles.title}>{feature.title}</h2>
      <p className={styles.description}>{feature.description}</p>
    </div>
  )
}
