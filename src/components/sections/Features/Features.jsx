import FeaturesHeader from '../../ui/FeaturesHeader/FeaturesHeader'
import Feature from '../../ui/Feature/Feature'
import { featureData } from './feature.data'
import styles from './Features.module.scss'

export default function Features() {
  return (
    <section id="features" className={styles.features}>
      <FeaturesHeader type="premium" />
      <div className={`${styles.feature}`}>
        {featureData.map(({ image, title, description }) => (
          <Feature
            key={title}
            image={image}
            title={title}
            description={description}
          />
        ))}
      </div>
    </section>
  )
}
