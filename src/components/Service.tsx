import { SERVICES } from "@/constants";
import { Services } from "@/types";
import Image from "next/image";
import { memo } from "react";
import { TitleHeader } from "./utility/TitleHeader";

const ServiceCard = memo(({
    imgSrc, name, text
}: Services) => (
    <li>
        <div className="service-card">
            <div className="card-icon">
                <Image
                    src={imgSrc}
                    width={100}
                    height={100}
                    loading="lazy"
                    alt="service icon"
                    className="w-fill"
                />
            </div>
            <div>
                <h3 className="h3 card-title">{name}</h3>
                <p className="card-text">{text}</p>
            </div>
        </div>
    </li>
));

ServiceCard.displayName = "ServiceCard";

export const Service = memo(() => (
    <section
        className="section service"
        id="service"
        aria-label="service"
    >
        <div className="custom-container">

            <TitleHeader
                title={"Our Services"}
                subTitle={"What We Provide"}
            />

            <ul className="service-list">

                {SERVICES
                    .filter(service => service.id != null && service.id <= 3)
                    .map((service) => (
                        <ServiceCard
                            key={service.id ? service.id : service.name}
                            imgSrc={service.imgSrc}
                            name={service.name}
                            text={service.text}
                        />
                    ))
                }

                <li className="service-banner">
                    <figure>
                        <Image
                            src="/images/service-banner.png"
                            width={409}
                            height={467}
                            loading="lazy"
                            alt="service banner"
                            className="w-fill"
                        />
                    </figure>
                </li>

                {SERVICES
                    .filter(service => service.id != null && service.id > 3 && service.id <= 6)
                    .map((service) => (
                        <ServiceCard
                            key={service.id ? service.id : service.name}
                            imgSrc={service.imgSrc}
                            name={service.name}
                            text={service.text}
                        />
                    ))
                }

            </ul>
        </div>
    </section>
));

Service.displayName = "Service";