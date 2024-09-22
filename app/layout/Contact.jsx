import styles from '../Home.module.css';

export const Contact = () => {
    return (
        <section className={styles.contact} id="contact">
            <div className={styles.maxw}>
                <div className={styles.contact_container}>
                    <div>
                        <div id="p1" className={styles.text_1}>
                            <span className={styles.spa}>Subscribe</span> To Get The Latest
                        </div>
                        <div id="p2" className={styles.text_2}>News About Us</div>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                            Delectus, adipisci doloribus. Id ipsum minus commodi obcaecati, at
                            repellat nihil facere est aliquid sapiente reiciendis quae
                            expedita eaque esse modi itaque beatae.
                        </p>
                    </div>
                    <div className={styles.su}>
                        <input
                            className={styles.input}
                            type="email"
                            placeholder="Your email address"
                        />
                        <a className={styles.subtn} href="#">Subscribe</a>
                    </div>
                </div>
            </div>
        </section>
    )
}
