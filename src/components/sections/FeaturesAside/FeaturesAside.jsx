import FeaturesHeader from '../../ui/FeaturesHeader/FeaturesHeader'
import Feature from '../../ui/Feature/Feature'
import { featuresAsideConfig } from './featuresAside.config'
import styles from './FeaturesAside.module.scss'


export default function FeaturesAside() {
  return (
    <>
      {featuresAsideConfig.map(({ type, image, data, imagePosition }) => (
        <section className={styles.features} key={type}>
          <FeaturesHeader type={type} />

          <div className={styles.content}>
            {imagePosition === 'left' && (
              <div className={styles.imageWrapper}>
                <img className={styles.image} src={image} alt={`${type} illustration`} />
              </div>
            )}

            <div className={styles.feature}>
              {data.map(({ image, title, description }) => (
                <Feature
                  key={title}
                  image={image}
                  title={title}
                  description={description}
                  variant="aside"
                />
              ))}
            </div>

            {imagePosition === 'right' && (
              <div className={styles.imageWrapper}>
                <img className={styles.image} src={image} alt={`${type} illustration`} />
              </div>
            )}
          </div>
        </section>
      ))}
    </>
  )
}
