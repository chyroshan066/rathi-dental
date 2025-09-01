import Image from 'next/image';
import { IonIcon } from './utility/IonIcon';
import { PHOTOS } from '@/constants';
import { memo } from 'react';

export const Gallery = memo(() => {
    return (
        <section
            className="section"
            id="gallery"
        >
            <div className="custom-container">
                {/* Section Header */}
                <div className="text-center">
                    <p className="section-subtitle">Our Clinic</p>
                    <h2 className="h2 section-title">
                        Take A Look At Our
                        <br />
                        Galleries
                    </h2>
                    <p className="section-text">
                        Experience dental care in our state-of-the-art facility designed for your comfort and equipped with the latest technology.
                    </p>
                </div>

                {/* Photo Grid */}
                <div className="gallery-grid">
                    {PHOTOS.map((photo, index) => (
                        <div
                            key={photo.id}
                            className={`gallery-item ${index === 1 ? 'gallery-item-featured' : ''}`}
                        >

                            <div className="gallery-card">
                                <div
                                    className="img-holder gallery-image"
                                    style={{ '--width': 400, '--height': 300 } as React.CSSProperties}
                                >
                                    <Image
                                        src={photo.src}
                                        alt={photo.alt}
                                        fill
                                        className="img-cover gallery-img"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    />

                                    {/* Overlay */}
                                    <div className="gallery-overlay">
                                        <div className="gallery-content">
                                            <h3 className="gallery-title">{photo.title}</h3>
                                            <div className="gallery-icon-wrapper">
                                                <IonIcon name="image-outline" />
                                            </div>
                                        </div>
                                    </div>

                                </div>

                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
});

Gallery.displayName = "Gallery";