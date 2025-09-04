"use client";

import { memo, useEffect, useState } from "react";
import { IonIcon } from "./utility/IonIcon";
import { NAVLINKS, SOCIALLINKS } from "@/constants";
import { SocialLink } from "./utility/SocialLink";
import { Button } from "./utility/Button/Button";
import Image from "next/image";
import Link from "next/link";

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
                                href="mailto:rathidental.ith@gmail.com"
                                className="contact-link"
                            >
                                rathidental.ith@gmail.com
                            </a>
                        </li>

                        <li className="contact-item">
                            <IonIcon name="call-outline" />
                            <a
                                href="tel:025582240"
                                className="contact-link"
                            >
                                025-582240
                            </a>
                        </li>

                    </ul>
                    <ul className="social-list">

                        {SOCIALLINKS.map((link, index) => (
                            <SocialLink
                                key={index}
                                href={link.href}
                                name={link.name}
                            />
                        ))}

                    </ul>
                </div>
            </div>
            <div
                className={`header-bottom ${isHeaderActive ? 'active' : ''}`}
                data-header
            >
                <div className="custom-container">

                    <Link
                        href="/"
                        className="logo"
                    >
                        {/* Rathi Dental */}
                        <Image
                            width={120}
                            height={80}
                            src="/images/logo.webp"
                            alt="logo"
                        />
                    </Link>

                    <nav
                        className={`navbar custom-container ${isNavActive ? 'active' : ''}`}
                        data-navbar
                    >
                        <ul className="navbar-list">

                            {NAVLINKS.map((link, index) => (
                                <li key={index}>
                                    <Link
                                        href={link.href}
                                        className="navbar-link"
                                        onClick={closeNav}
                                        data-nav-link
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}

                        </ul>
                    </nav>

                    <Button
                        btnLink={"/#contact"}
                        btnText={"Book appointment"}
                    />

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