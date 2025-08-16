import Image from "next/image";
import { memo } from "react";

export const CallToAction = memo(() => (
    <section
        className="section cta"
        aria-label="cta"
    >
        <div className="custom-container">

            <figure className="cta-banner">
                <Image
                    src="/images/cta-banner.png"
                    width={1056}
                    height={1076}
                    loading="lazy"
                    alt="cta banner"
                    className="w-fill"
                />
            </figure>

            <div className="cta-content">
                <p className="section-subtitle">Book Dentail Appointment</p>
                <h2 className="h2 section-title">We Are open And Welcoming Patients</h2>
                <a
                    href="#"
                    className="btn"
                >
                    Book appointment
                </a>
            </div>
        </div>
    </section>
));