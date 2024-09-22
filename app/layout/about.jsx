import styles from '../Home.module.css';

export const About = () => {
    return (
        <section className={styles.pages2}>
            <div className={styles.maxw}>
                <h2 className={styles.text}>What Say Our Client</h2>
                <div className={styles.content}>
                    <div data-aos="fade-right" className={`${styles.colume} ${styles.left}`}>
                        <img src="/img/person.jpg" alt="" />
                    </div>
                    <div
                        data-aos="fade-up"
                        data-aos-delay="500"
                        data-aos-offset="250"
                        className={`${styles.colume} ${styles.right}`}
                    >
                        <h2 className={styles.textb}>,,</h2>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                            Consequatur praesentium quo numquam! Alias quas fugiat dicta
                            provident accusantium, aspernatur repellat officiis consequatur ea
                            doloremque rem commodi modi corporis neque dolor, incidunt rerum
                            eos. Incidunt porro voluptate libero laborum sunt quam?
                            Perferendis totam doloribus obcaecati error adipisci cupiditate
                            tenetur. Non quae mollitia sequi fugiat itaque debitis unde velit
                            expedita, dolorum ab?
                        </p>
                        <div className={styles.butts}>
                            <a href="#" className={styles.smbtn}
                            ><i className="fa-solid fa-angle-left">
                                </i>
                            </a>
                            <a href="#" className={styles.smbtn}
                            ><i className="fa-solid fa-angle-right">
                                </i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}
