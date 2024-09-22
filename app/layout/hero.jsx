import styles from "../Home.module.css";

export const Hero = () => {
  return (
    <section className={styles.home} id="Home">
      <div className={styles.maxw}>
        <div className={styles.home_container}>
          <div>
            <div id="p1" className={styles.text_1}>The Next Level Marketing</div>
            <div id="p2" className={styles.text_2}>For Your Brand</div>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Delectus, adipisci doloribus. Id ipsum minus commodi obcaecati, at
              repellat nihil facere est aliquid sapiente reiciendis quae
              expedita eaque esse modi itaque beatae nemo officiis animi unde,
              nostrum laborum nisi, nam cum!
            </p>
          </div>
          <div className={styles.buttons}>
            <a href="#" className={styles.gbtn}>Get Started</a>
            <a href="#" className={styles.lbtn}>Learn More</a>
          </div>
        </div>
      </div>
    </section>
  )
}
