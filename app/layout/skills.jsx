import styles from "../Home.module.css";
import { Card } from "../components/Card";
import data from '../../db.json';


export const Skills = () => {
  return (
    <section id="aboutus" className={styles.skills}>
      <div className={styles.maxw}>
        <h2 className={styles.text}>How To We Work</h2>
        <div className={styles.countainer}>
          {data?.cards.map((card, i) => (
            <Card title={card.title} desc={card.desc} font={card.font} />
          ))}
        </div>
      </div>
      <section className={styles.skills2}>
        <div className={styles.maxw}>
          <div className={styles.content}>
            <div data-aos="fade-right" className={`${styles.colume} ${styles.left}`}>
              <img src="./img/pexels-flo-dahm-699459.jpg" alt="" />
            </div>
            <div
              data-aos="fade-up"
              data-aos-delay="500"
              data-aos-offset="250"
              className={`${styles.colume} ${styles.right}`}
            >
              <h2 className={styles.textb}>We Take Care Of Your Business</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi,
                dolorem! Voluptatum, esse! Debitis quisquam iste ipsam
                laboriosam aliquam magni id repudiandae dicta tempora mollitia,
                ut ipsa magnam obcaecati amet eius voluptates dolorem cum
                excepturi.
              </p>
              <img className={styles.oip2} src="/img/OIP2.jpg" alt="" />
            </div>
          </div>
        </div>
      </section>
    </section>
  )
}
