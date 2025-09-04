import Link from "next/link";
import { memo } from "react";

interface Button {
    btnLink: string;
    btnText: string;
}

export const Button = memo(({
    btnLink, btnText
}: Button) => (
    <Link
        href={btnLink}
        className="btn"
    >
        {btnText}
    </Link>
));

Button.displayName = "Button";