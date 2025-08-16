import Image from "next/image";
import { memo } from "react";
import { Button } from "./utility/Button";

export const About = memo(() => (
    <section
        className="section about"
        id="about"
        aria-label="about"
    >
        <div className="custom-container">

            <figure className="about-banner">
                <Image
                    src="/images/about-banner.png"
                    width={470}
                    height={538}
                    loading="lazy"
                    alt="about banner"
                    className="w-fill"
                />
            </figure>

            <div>
                <p className="section-subtitle">About Us</p>
                <h2 className="h2 section-title">We Care For Your Dental Health</h2>
                <p className="section-text section-text-1">
                    Aliquam ac sem et diam iaculis efficitur. Morbi in enim odio. Nullam quis volutpat est, sed dapibus
                    sapien. Cras
                    condimentum eu velit id tempor. Curabitur purus sapien, cursus sed nisl tristique, commodo vehicula arcu.
                </p>
                <p className="section-text">
                    Aliquam erat volutpat. Aliquam enim massa, sagittis blandit ex mattis, ultricies posuere sapien. Morbi a
                    dignissim enim.
                    Fusce elementum, augue in elementum porta, sapien nunc volutpat ex, a accumsan nunc lectus eu lectus.
                </p>

                <Button
                    btnLink={"#"}
                    btnText={"Read more"}
                />

            </div>
        </div>
    </section>
));

About.displayName = "About";