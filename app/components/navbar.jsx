"use client"
import { useEffect } from 'react';
import styles from '../Home.module.css';

export const Navbar = () => {
    useEffect(() => {
        const scrollHandler = () => {
            const nav = document.getElementById("nav");
            if (nav) {
                nav.classList.toggle(styles.sticky, window.scrollY > 24);
            }
        };

        window.addEventListener("scroll", scrollHandler);

        return () => {
            window.removeEventListener("scroll", scrollHandler);
        };
    }, []);

    useEffect(() => {
        const closeMenu = () => {
            const menu = document.getElementById('menu');
            const overlay = document.querySelector("[data-overlay]");
            if (menu) {
                menu.style.top = '-200%';
            }
            if (overlay) {
                overlay.classList.remove(styles.over);
            }
        };

        const showMenu = () => {
            const menu = document.getElementById('menu');
            const overlay = document.querySelector("[data-overlay]");
            if (menu) {
                menu.style.display = 'inline-block';
                menu.style.top = '0px';
            }
            if (overlay) {
                overlay.classList.add(styles.over);
            }
        };

        const closeEvents = ['load', 'loadeddata', 'DOMContentLoaded'];
        closeEvents.forEach((event) => {
            window.addEventListener(event, closeMenu);
        });

        const openMenuBtn = document.getElementById('menu_btn');
        if (openMenuBtn) {
            openMenuBtn.addEventListener('click', showMenu);
        }

        const closeMenuBtn = document.getElementById('close');
        if (closeMenuBtn) {
            closeMenuBtn.addEventListener('click', closeMenu);
        }

        const overlay = document.querySelector("[data-overlay]");
        if (overlay) {
            overlay.addEventListener('click', closeMenu);
        }

        // Add event listener to document for event delegation
        document.addEventListener("click", (event) => {
            if (event.target.closest("ul > li > a")) {
                closeMenu();
            }
        });


        return () => {
            if (openMenuBtn) {
                openMenuBtn.removeEventListener('click', showMenu);
            }
            if (closeMenuBtn) {
                closeMenuBtn.removeEventListener('click', closeMenu);
            }
            if (overlay) {
                overlay.removeEventListener('click', closeMenu);
            }
            closeEvents.forEach((event) => {
                window.removeEventListener(event, closeMenu);
            });
        };
    }, []);

    return (
        <nav className={styles.navbars} id="nav">
            <div className={styles.maxw}>
                <div className={styles.overlay} data-overlay></div>
                <div className={styles.logo}>
                    <a href="#"
                       ><img
                        src="./img/png-transparent-g-removebg-preview.png"
                        className={styles.gimg}
                        alt=""
                    />Globe Agency</a>
                </div>
                <ul className={styles.menu} id="menu">
                    <div className={styles.close_menu}>
                        <i className={styles.close}>
                            <i className="fa fa-times" id="close" aria-hidden="true"></i></i>
                        <i className={styles.line}></i>
                    </div>
                    <li><a className={styles.activ} href="#Home">Home</a></li>
                    <li><a href="#aboutus">About us</a></li>
                    <li><a href="#Services">Services</a></li>
                    <li><a href="#pages">Pages</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
                <div className={styles.space}>
                <a href="#login" className={styles.alogin}>Login</a>
                <div className={styles.menu_btn} id='menu_btn'>
                    <i className="fas fa-bars" aria-hidden="true"></i>
                </div>
                </div>
            </div>
        </nav>
    );
};
