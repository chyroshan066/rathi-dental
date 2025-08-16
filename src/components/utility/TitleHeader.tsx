import { memo } from "react";

interface TitleHeader {
    title: string;
    subTitle: string;
}

export const TitleHeader = memo(({
    title, subTitle
}: TitleHeader) => (
    <>
        <p className="section-subtitle text-center">{title}</p>
        <h2 className="h2 section-title text-center">{subTitle}</h2>
    </>
));