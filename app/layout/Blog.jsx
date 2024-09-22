"use client"
import styles from '../Home.module.css';
import data from '../../db.json';

export const Blog = () => {

  return (
    <section id="pages" className={styles.pages}>
    <div className={styles.maxw}>
      <div className={styles.textflex}>
        <h2 className={styles.text}>Our Latest <b> Articles</b></h2>
      </div>
      <div className={styles.countainer}>
        {data?.blogs.map((blog, i) => (
                  <div
                  key={i}
                  data-aos="zoom-in-up"
                  data-aos-delay="300"
                  data-aos-offset="220"
                  className={styles.cardb}
                >
                  <div className={styles.box}>
                    <div className={styles.imgitem}>
                      <div className={styles.likes}>
                        <div>
                          <i className="fa-regular fa-heart"></i> <span>{blog.like}</span>
                        </div>
                        <div>
                          <i className="fa-regular fa-message"></i> <span>{blog.comments}</span>
                        </div>
                        <div>
                          <i className="fa-solid fa-arrow-up-from-bracket"></i> 
                          <span> {blog.share}</span>
                        </div>
                      </div>
                      <img className={styles.lapimg} src={`./img/${blog.image}`} alt="" />
                    </div>
                    <div className={styles.tects}>
                      <div className={styles.dates}>
                        <div><i className="fa-regular fa-calendar"></i> {blog.date}</div>
                        <div><i className="fa-regular fa-user"></i> {blog.author}</div>
                      </div>
                      <div className={styles.textn}>{blog.title}</div>
                      <p>{blog.desc}</p>
                    </div>
                  </div>
                </div>
        ))}
        </div>
      </div>
  </section>
  )
}
