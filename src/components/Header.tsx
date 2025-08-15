"use client";

import { memo, useEffect, useState } from "react";
import { IonIcon } from "./utility/IonIcon";

export const Header = memo(() => {
    const [isNavActive, setIsNavActive] = useState(false);
    const [isHeaderActive, setIsHeaderActive] = useState(false);

    const toggleNav = () => {
        setIsNavActive(prev => !prev);
    };

    const closeNav = () => {
        setIsNavActive(false);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 100) {
                setIsHeaderActive(true);
            } else {
                setIsHeaderActive(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return <>
        <header className={`header ${isHeaderActive ? 'active' : ''}`}>
            <div className="header-top">
                <div className="custom-container">
                    <ul className="contact-list">

                        <li className="contact-item">
                            <IonIcon name="mail-outline" />
                            <a
                                href="mailto:info@example.com"
                                className="contact-link"
                            >
                                info@example.com
                            </a>
                        </li>

                        <li className="contact-item">
                            <IonIcon name="call-outline" />
                            <a
                                href="tel:+917052101786"
                                className="contact-link"
                            >
                                +91-7052-101-786
                            </a>
                        </li>

                    </ul>
                    <ul className="social-list">

                        <li>
                            <a
                                href="#"
                                className="social-link"
                            >
                                <IonIcon name="logo-facebook" />
                            </a>
                        </li>

                        <li>
                            <a
                                href="#"
                                className="social-link"
                            >
                                <IonIcon name="logo-instagram" />
                            </a>
                        </li>

                        <li>
                            <a
                                href="#"
                                className="social-link"
                            >
                                <IonIcon name="logo-twitter" />
                            </a>
                        </li>

                        <li>
                            <a
                                href="#"
                                className="social-link"
                            >
                                <IonIcon name="logo-youtube" />
                            </a>
                        </li>

                    </ul>
                </div>
            </div>
            <div
                className="header-bottom"
                data-header
            >
                <div className="custom-container">
                    <a
                        href="#"
                        className="logo"
                    >
                        Dentelo.
                    </a>
                    <nav
                        className={`navbar custom-container ${isNavActive ? 'active' : ''}`}
                        data-navbar
                    >
                        <ul className="navbar-list">
                            <li>
                                <a
                                    href="#home"
                                    className="navbar-link"
                                    onClick={closeNav}
                                    data-nav-link
                                >
                                    Home
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#service"
                                    className="navbar-link"
                                    onClick={closeNav}
                                    data-nav-link
                                >
                                    Services
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#about"
                                    className="navbar-link"
                                    onClick={closeNav}
                                    data-nav-link
                                >
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#blog"
                                    className="navbar-link"
                                    onClick={closeNav}
                                    data-nav-link
                                >
                                    Blog
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="navbar-link"
                                    onClick={closeNav}
                                    data-nav-link
                                >
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </nav>

                    <a
                        href="#"
                        className="btn"
                    >
                        Book appointment
                    </a>

                    <button
                        className={`nav-toggle-btn ${isNavActive ? 'active' : ''}`}
                        aria-label="Toggle menu"
                        onClick={toggleNav}
                        data-nav-toggler
                    >
                        <IonIcon
                            name="menu-sharp"
                            aria-hidden="true"
                            className="menu-icon"
                        />
                        <IonIcon
                            name="close-sharp"
                            aria-hidden="true"
                            className="close-icon"
                        />
                    </button>

                </div>
            </div>
        </header>
    </>;
});

Header.displayName = "Header";