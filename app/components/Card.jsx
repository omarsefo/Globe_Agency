import styles from "../Home.module.css";

export const Card = ({ title, desc, font }) => {
    return (
        <div
            data-aos="zoom-in-up"
            data-aos-delay="300"
            data-aos-offset="220"
            className={styles.cardb}
        >
            <div className={styles.box}>
                <div className={styles.mbox}>
                    <i className={font}></i>
                </div>
                <div className={styles.textn}>{title}</div>
                <p>{desc}</p>
                <a href="#" className={styles.bbtn}>See More</a>
            </div>
        </div>
    )
}
