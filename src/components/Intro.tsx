'use client';

import { useState, useRef, memo, useEffect } from 'react';
import { IonIcon } from './utility/IonIcon';

interface IntroProps {
    videoUrl?: string;
    posterImage?: string;
}

export const Intro = memo(({
    videoUrl = "/images/media/videos/v1.webm",
    posterImage = "/images/video-poster.webp"
}: IntroProps) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [hasUserInteracted, setHasUserInteracted] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        const playVideo = async () => {
            if (videoRef.current && !hasUserInteracted) {
                try {
                    setIsLoading(true);
                    videoRef.current.muted = true;
                    await videoRef.current.play();
                    setIsPlaying(true);
                    setIsLoading(false);
                } catch (error) {
                    console.error('Auto-play failed:', error);
                    setIsLoading(false);
                }
            }
        };

        // Small delay to ensure component is fully mounted
        const timer = setTimeout(playVideo, 500);

        return () => clearTimeout(timer);
    }, [hasUserInteracted]);

    const handlePlayVideo = () => {
        if (videoRef.current) {
            setIsLoading(true);
            setHasUserInteracted(true);
            videoRef.current.muted = false;
            videoRef.current.play()
                .then(() => {
                    setIsPlaying(true);
                    setIsLoading(false);
                })
                .catch((error) => {
                    console.error('Error playing video:', error);
                    setIsLoading(false);
                });
        }
    };

    const handlePauseVideo = () => {
        if (videoRef.current) {
            videoRef.current.pause();
            setIsPlaying(false);
        }
    };

    const handleVideoEnded = () => {
        setIsPlaying(false);
    };

    const handleVideoClick = () => {
        if (isPlaying) {
            handlePauseVideo();
        } else {
            handlePlayVideo();
        }
    };

    return (
        <section
            className="intro section"
            id="intro"
        >
            <div className="custom-container">
                <div className="intro-content">
                    {/* Section Header */}
                    <div className="intro-header text-center">
                        <p className="section-subtitle">Our Story</p>
                        <h2 className="h2 section-title">
                            Experience Excellence In <br />
                            Dental Care
                        </h2>
                        <p className="section-text">
                            Watch our journey of providing world-class dental treatments with
                            cutting-edge technology and compassionate care in the heart of Itahari.
                        </p>
                    </div>

                    {/* Video Container */}
                    <div className="intro-video-container-fullwidth">
                        <div className="video-wrapper">
                            <video
                                ref={videoRef}
                                className="intro-video"
                                poster={posterImage}
                                onEnded={handleVideoEnded}
                                onLoadStart={() => setIsLoading(true)}
                                onCanPlay={() => setIsLoading(false)}
                                onClick={handleVideoClick}
                                controls={isPlaying && hasUserInteracted}
                                preload="metadata"
                                muted
                                loop={!hasUserInteracted}
                            >
                                <source
                                    src={videoUrl}
                                    type="video/webm"
                                />
                                Your browser does not support the video tag.
                            </video>

                            {/* Custom Play/Pause Overlay */}
                            {(!isPlaying || !hasUserInteracted) && (
                                <div className="video-overlay">
                                    <button
                                        className="play-btn"
                                        onClick={handlePlayVideo}
                                        disabled={isLoading}
                                        aria-label={hasUserInteracted ? "Play promotional video" : "Play promotional video with sound"}
                                    >
                                        {isLoading ? (
                                            <div className="loading-spinner">
                                                <div className="spinner"></div>
                                            </div>
                                        ) : (
                                            <IonIcon
                                                name="play"
                                                aria-hidden="true"
                                            />
                                        )}
                                    </button>

                                    {/* Video Info Badge */}
                                    <div className="video-info-badge">
                                        <div className="badge-content">
                                            <span>{hasUserInteracted ? "Watch Demo" : "Click for Sound"}</span>
                                            <span className="badge-duration">0:50</span>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Decorative Elements */}
                            <div className="video-decoration">
                                <div className="decoration-dots">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
});