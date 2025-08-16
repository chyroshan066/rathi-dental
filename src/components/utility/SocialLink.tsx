import { Link } from "@/types";
import { IonIcon } from "./IonIcon";

export const SocialLink = ({
    href, name
}: Link) => (
    <li>
        <a
            href={href}
            className="social-link"
        >
            <IonIcon name={name} />
        </a>
    </li>
);