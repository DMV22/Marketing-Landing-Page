import { featuresHeaderData } from './featuresHeader.data'
import styles from './FeaturesHeader.module.scss'

export default function FeaturesHeader({ type }) {
  const feature = featuresHeaderData[type]

  if (!feature) {
    console.warn(`Feature with type "${type}" not found`)
    return null
  }

  return (
    <div className={styles.features__header}>
      <p className={styles.features__name}>{feature.name}</p>
      <h2 className={styles.features__title}>{feature.title}</h2>
      <p className={styles.features__description}>{feature.description}</p>
    </div>
  )
}
