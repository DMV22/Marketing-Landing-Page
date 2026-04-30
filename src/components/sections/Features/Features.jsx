import FeaturesHeader from '../../ui/FeaturesHeader/FeaturesHeader'
import Feature from '../../ui/Feature/Feature'
import { featureData } from './feature.data'
import styles from './Features.module.scss'

export default function Features() {
  return (
    <section className={styles.features}>
      <div className={`${styles.features__container} container`}>
        <FeaturesHeader type="premium" />
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
