"use client"
import styles from "./Home.module.css";
import { Footer } from "./components/footer";
import { Navbar } from "./components/navbar";
import { Contact } from "./layout/Contact";
import { Services } from "./layout/Services";
import { About } from "./layout/about";
import { Hero } from "./layout/hero";
import { Blog } from "./layout/Blog";
import { Skills } from "./layout/skills";
import Modal from './components/Modal';

export default function Home() {
  return (
    <main className={styles.main}>
      <Modal />
      <Navbar />
      <Hero />
      <Skills />
      <Services />
      <Blog />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
