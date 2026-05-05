import { cardData } from './cards.data'
import checkMark from '../../../assets/check-fill.svg'
import styles from './Cards.module.scss'

export default function Cards({ billing }) {
  return (
    <div className={styles.container}>
      {cardData.map(({ name, description, monthlyPrice, annualPrice, popular, advantages }) => (
        <div key={name} className={`${styles.card} ${popular ? styles.popularCard : styles.simpleCard}`}>
          {popular && <p className={styles.popularBadge}>Most Popular</p>}
          <div className={styles.content}>
            <div className={styles.header}>
              <h3 className={styles.title}>{name}</h3>
              <p className={styles.description}>{description}</p>
            </div>
            <div className={styles.prices}>
              <span className={styles.price}>${billing === 'monthly' ? monthlyPrice : annualPrice}</span>
              <span className={styles.period}> / {billing === 'monthly' ? 'month' : 'year'}</span>
              <p className={styles.period}>Billed {billing === 'monthly' ? 'monthly' : 'annually'}</p>
            </div>
            <div className={styles.advantages}>
              {advantages.map((advantage, index) => (
                <div className={styles.advantageItem} key={index}>
                  <img className={styles.checkmark} src={checkMark} alt="" />
                  <p className={styles.advantage}>
                    {advantage}
                  </p>
                </div>
              ))}
            </div>
            <button className={`${styles.buyBtn} btn ${popular ? 'btn--secondary' : 'btn--primary'}`}>Buy now</button>
          </div>
        </div>
      ))}
    </div>
  )
}
