import { Link } from "@/types";
import { IonIcon } from "./IonIcon";
import { memo } from "react";

export const SocialLink = memo(({
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
));

SocialLink.displayName = "SocialLink";