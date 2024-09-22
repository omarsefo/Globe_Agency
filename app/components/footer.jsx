import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import styles from '../Home.module.css';

export const Footer = () => {
  return (
    <footer className={`${styles.footer} text-center text-lg-start text-mute`}>
      <section className="">
        <div className={`container ${styles.cont} text-center text-md-start mt-5`}>
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className="fw-bold mb-4">
                <i className={`fas ${styles.clo} fa-g me-3`}></i>Globe Agency
              </h6>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Expedita ullam, itaque eveniet praesentium.
              </p>
            </div>

            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">About</h6>
              <p>
                <a href="#" className="text-reset">About Us</a>
              </p>
              <p>
                <a href="#" className="text-reset">Featurs</a>
              </p>
              <p>
                <a href="#" className="text-reset">News</a>
              </p>
              <p>
                <a href="#" className="text-reset">careers</a>
              </p>
            </div>

            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Company</h6>
              <p>
                <a href="#" className="text-reset">Our team</a>
              </p>
              <p>
                <a href="#" className="text-reset">partner</a>
              </p>
              <p>
                <a href="#" className="text-reset">FAQ</a>
              </p>
              <p>
                <a href="#" className="text-reset">Blog</a>
              </p>
            </div>

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p><i className="fas fa-home me-3"></i> New York, NY 10012, US</p>
              <p>
                <i className="fas fa-envelope me-3"></i>
                GlobeAgency@gmail.com
              </p>
              <p><i className="fas fa-phone me-3"></i> + 01 234 567 88</p>
              <p><i className="fas fa-print me-3"></i> + 01 234 567 89</p>
            </div>
          </div>
        </div>
      </section>

      <div className={`text-center ${styles.co}`}>
        <span className={styles.span}
        >Created By{" "}
          <a href="https://omarsefo.github.io" target="_Blank">Omarsefo</a> |{' '}
          <span className="far fa-copyright"></span> {new Date().getFullYear()} All right reseved.</span>
        <div className={styles.ic}>
          <a
            href="https://www.linkedin.com/in/omar-sefo-72912120a/"
            className="me-4 text-reset"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="#" className="me-4 text-reset">
            <i className="fab fa-twitter"></i>
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100003924693705"
            className="me-4 text-reset"
          >
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://github.com/omarsefo" className="me-4 text-reset">
            <i className="fab fa-github"></i>
          </a>
        </div>
      </div>
    </footer>
  )
}
