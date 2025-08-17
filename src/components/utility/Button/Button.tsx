import { memo } from "react";

interface Button {
    btnLink: string;
    btnText: string;
}

export const Button = memo(({
    btnLink, btnText
}: Button) => (
    <a
        href={btnLink}
        className="btn"
    >
        {btnText}
    </a>
));

Button.displayName = "Button";