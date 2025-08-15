import Image from "next/image";
import { memo } from "react";
import { IonIcon } from "./utility/IonIcon";
import { Doctors } from "@/types";
import { DOCTORS } from "@/constants";

const DoctorCard = memo(({
    imgSrc, name, ionIcon
}: Doctors) => (
    <li className="scrollbar-item">
        <div className="doctor-card">
            <div
                className="card-banner img-holder"
                style={{ "--width": "460", "--height": "500" } as React.CSSProperties}
            >
                <Image
                    src={imgSrc}
                    width={460}
                    height={500}
                    loading="lazy"
                    alt={name}
                    className="img-cover"
                />
            </div>
            <h3 className="h3">
                <a
                    href="#"
                    className="card-title"
                >
                    {name}
                </a>
            </h3>
            <p className="card-subtitle">Dentist</p>
            <ul className="card-social-list">

                {ionIcon.map((icon, index) => (
                    <li key={index}>
                        <a
                            href={icon.ionIconLink}
                            className="card-social-link"
                        >
                            <IonIcon name={icon.ionIconName}></IonIcon>
                        </a>
                    </li>
                ))}

            </ul>
        </div>
    </li>
));

DoctorCard.displayName = "DoctorCard";

export const Doctor = memo(() => (
    <section
        className="section doctor"
        aria-label="doctor"
    >
        <div className="custom-container">
            <p className="section-subtitle text-center">Our Doctor</p>
            <h2 className="h2 section-title text-center">Best Expert Dentist</h2>
            <ul className="has-scrollbar">

                {DOCTORS.map((doctor, index) => (
                    <DoctorCard
                        key={index}
                        imgSrc={doctor.imgSrc}
                        name={doctor.name}
                        ionIcon={doctor.ionIcon}
                    />
                ))}

            </ul>
        </div>
    </section>
));

Doctor.displayName = "Doctor";