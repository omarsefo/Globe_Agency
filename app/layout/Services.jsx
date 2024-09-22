import styles from '../Home.module.css';
import { Card } from '../components/Card';
import data from '../../db.json';
export const Services = () => {

    return (
        <section id="Services" className={styles.services}>
            <div className={styles.maxw}>
                <div className={styles.textflex}>
                    <h2 className={styles.text}>Choose What You Like</h2>
                    <h2 className={styles.text}>Our <b> Services</b></h2>
                </div>
                <div className={styles.countainer}>
                    {data?.cards.map((card, i) => (
                        <Card title={card.title} desc={card.desc} font={card.font} />
                    ))}
                </div>
            </div>
        </section>
    )
}
