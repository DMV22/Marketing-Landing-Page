import Marquee from "react-fast-marquee";
import Brands from '../../ui/Brands/Brands'
import { brand } from './brand.data'
import styles from './Social.module.scss'

export default function Social() {
  return (
    <section className={styles.social}>
        <p className={styles.text}>Used by teams that you love</p>
        <Marquee
          speed={60}
          gradient={true}
          gradientColor="white"
          gradientWidth={200}
          pauseOnHover={true}
          autoFill={true}
          direction="right"
        >
          {brand.map((item, index) => (
            <Brands
              key={index}
              brandSrc={item.logo}
              brand={item.name}
              className={styles.image}
            />
          ))}
        </Marquee>
    </section>
  );
}
