import { memo } from "react";
import { IonIcon } from "./utility/IonIcon";
import { NAVLINKS, SERVICES, SOCIALLINKS } from "@/constants";
import { Link, Services } from "@/types";
import { SocialLink } from "./utility/SocialLink";

interface FooterColumn {
    footerListTitle: string;
    list: Link[] | Services[];
}

const FOOTERCOLUMN: FooterColumn[] = [
    {
        footerListTitle: "Other Links",
        list: NAVLINKS,
    },
    {
        footerListTitle: "Our Services",
        list: SERVICES,
    },
];

const FooterColumn = memo(({
    footerListTitle, list
}: FooterColumn) => (
    <ul className="footer-list">
        <li>
            <p className="footer-list-title">{footerListTitle}</p>
        </li>

        {list.map((link, index) => (
            <li key={index}>
                <a
                    href={link.href}
                    className="footer-link"
                >
                    <IonIcon name="add-outline" />
                    <span className="span">{link.name}</span>
                </a>
            </li>
        ))}

    </ul>
));

FooterColumn.displayName = "FooterColumn";

export const Footer = memo(() => (
    <footer className="footer">
        <div className="footer-top section">
            <div className="custom-container">
                <div className="footer-brand">
                    <a
                        href="#"
                        className="logo"
                    >
                        Dentelo.
                    </a>
                    <p className="footer-text">
                        Mauris non nisi semper, lacinia neque in, dapibus leo. Curabitur sagittis libero tincidunt tempor finibus.
                        Mauris at
                        dignissim ligula, nec tristique orci.Quisque vitae metus.
                    </p>

                    <div className="schedule">
                        <div className="schedule-icon">
                            <IonIcon name="time-outline" />
                        </div>
                        <span className="span">
                            Monday - Saturday:<br />
                            9:00am - 10:00Pm
                        </span>
                    </div>

                </div>

                {FOOTERCOLUMN.map((column, index) => (
                    <FooterColumn
                        key={index}
                        footerListTitle={column.footerListTitle}
                        list={column.list}
                    />
                ))}

                <ul className="footer-list">
                    <li>
                        <p className="footer-list-title">Contact Us</p>
                    </li>

                    <li className="footer-item">
                        <div className="item-icon">
                            <IonIcon name="location-outline" />
                        </div>
                        <address className="item-text">
                            1247/Plot No. 39, 15th Phase,<br />
                            LHB Colony, Kanpur
                        </address>
                    </li>

                    <li className="footer-item">
                        <div className="item-icon">
                            <IonIcon name="call-outline" />
                        </div>
                        <a
                            href="tel:+917052101786"
                            className="footer-link"
                        >
                            +91-7052-101-786
                        </a>
                    </li>

                    <li className="footer-item">
                        <div className="item-icon">
                            <IonIcon name="mail-outline" />
                        </div>
                        <a
                            href="mailto:help@example.com"
                            className="footer-link"
                        >
                            help@example.com
                        </a>
                    </li>

                </ul>
            </div>
        </div>

        <div className="footer-bottom">
            <div className="custom-container">
                <p className="copyright">
                    &copy; 2022 All Rights Reserved by codewithsadee.
                </p>
                <ul className="social-list">

                    {SOCIALLINKS.map((link, index) => (
                        // <li key={index}>
                        //     <a
                        //         href={link.href}
                        //         className="social-link"
                        //     >
                        //         <IonIcon name={link.name} />
                        //     </a>
                        // </li>

                        <SocialLink
                            key={index}
                            href={link.href}
                            name={link.name}
                        />
                    ))}

                </ul>
            </div>
        </div>
    </footer>
));

Footer.displayName = "Footer";