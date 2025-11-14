import { memo } from "react";
import { IonIcon } from "./utility/IonIcon";
import { NAVLINKS, SERVICES, SOCIALLINKS } from "@/constants";
import { NavLink, Services } from "@/types";
import { SocialLink } from "./utility/SocialLink";
import Link from "next/link";

interface FooterColumn {
    footerListTitle: string;
    list: NavLink[] | Services[];
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
                <Link
                    href={link.href}
                    className="footer-link"
                >
                    <IonIcon name="add-outline" />
                    <span className="span">{link.name}</span>
                </Link>
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
                    <Link
                        href="/"
                        className="logo"
                    >
                        Rathi Dental
                    </Link>
                    <p className="footer-text">
                        Your trusted <strong>dental clinic in Itahari</strong> for <strong>dental implants</strong>, <strong>braces</strong>, <strong>cosmetic dentistry</strong>, <strong>root canal</strong>, <strong>teeth whitening</strong>, <strong>orthodontics</strong>, and <strong>family dental care</strong> at an affordable price. Visit <strong>Rathi Dental Nepal</strong> for healthy smiles.
                    </p>

                    <div className="schedule">
                        <div className="schedule-icon">
                            <IonIcon name="time-outline" />
                        </div>
                        <span className="span">
                            Saturday - Sunday:<br />
                            10:00 AM - 5:00 PM
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
                            Hatiya Line, Itahari-6 <br />
                            Sunsari, Nepal
                        </address>
                    </li>

                    <li className="footer-item">
                        <div className="item-icon">
                            <IonIcon name="call-outline" />
                        </div>
                        <a
                            href="tel:+97725582240"
                            className="footer-link"
                        >
                            025-582240
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
                            rathidental.ith@gmail.com
                        </a>
                    </li>

                </ul>
            </div>
        </div>

        <div className="footer-bottom">
            <div className="custom-container">
                <p className="copyright">
                    &copy; 2025 All Rights Reserved by Rathi Dental.
                </p>
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
    </footer>
));

Footer.displayName = "Footer";