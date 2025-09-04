"use client";

import { memo, useState, useEffect } from "react";
import { IonIcon } from "./utility/IonIcon";

export const BackToTop = memo(() => {
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 100) {
                setIsActive(true);
            } else {
                setIsActive(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return <a
        href="#"
        className={`back-top-btn ${isActive ? 'active' : ''}`}
        aria-label="back to top"
        data-back-top-btn
    >

        <IonIcon
            name="caret-up"
            aria-hidden="true"
        />

    </a>
});

BackToTop.displayName = "BackToTop";