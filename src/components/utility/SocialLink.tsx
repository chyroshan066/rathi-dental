import { NavLink } from "@/types";
import { IonIcon } from "./IonIcon";
import { memo } from "react";

export const SocialLink = memo(({
    href, name
}: NavLink) => (
    <li>
        <a
            href={href}
            className="social-link"
            target="_blank"
        >
            <IonIcon name={name} />
        </a>
    </li>
));

SocialLink.displayName = "SocialLink";