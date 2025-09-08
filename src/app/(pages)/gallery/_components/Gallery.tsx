"use client";

import Image from 'next/image';
import { IonIcon } from '@/components/utility/IonIcon';
import { useState, useRef, useEffect } from 'react';
import { MediaItem } from '@/types';

interface GalleryProps {
  mediaItems: MediaItem[];
}

export default function Gallery({
  mediaItems = []
}: GalleryProps) {
  const [selectedMedia, setSelectedMedia] = useState<number | null>(null);
  const [loadedItems, setLoadedItems] = useState(12);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [volume, setVolume] = useState(0.5);

  const lightboxVideoRef = useRef<HTMLVideoElement>(null);
  const gridVideoRefs = useRef<{ [key: number]: HTMLVideoElement | null }>({});

  // Calculate stats based on media items
  const imageCount = mediaItems.filter(item => item.type === 'image').length;
  const videoCount = mediaItems.filter(item => item.type === 'video').length;

  const STATS = [
    {
      number: imageCount,
      label: "Photos",
      icon: "camera-outline",
    },
    {
      number: videoCount,
      label: "Videos",
      icon: "videocam-outline",
    },
    {
      number: "Latest",
      label: "Equipment",
      icon: "construct-outline",
    },
  ];

  const visibleMediaItems = mediaItems.slice(0, loadedItems);

  const handleLoadMore = () => {
    setLoadedItems(prev => Math.min(prev + 12, mediaItems.length));
  };

  const openLightbox = (index: number) => {
    setSelectedMedia(index);
    setIsPlaying(false);
    setIsMuted(true);
  };

  const closeLightbox = () => {
    setSelectedMedia(null);
    setIsPlaying(false);
    // Pause lightbox video if playing
    if (lightboxVideoRef.current) {
      lightboxVideoRef.current.pause();
    }
  };

  const navigateLightbox = (direction: 'prev' | 'next') => {
    if (selectedMedia === null) return;

    // Pause current video if playing
    if (lightboxVideoRef.current) {
      lightboxVideoRef.current.pause();
    }

    setIsPlaying(false);

    if (direction === 'prev') {
      setSelectedMedia(selectedMedia > 0 ? selectedMedia - 1 : mediaItems.length - 1);
    } else {
      setSelectedMedia(selectedMedia < mediaItems.length - 1 ? selectedMedia + 1 : 0);
    }
  };

  const togglePlayPause = () => {
    if (!lightboxVideoRef.current) return;

    if (isPlaying) {
      lightboxVideoRef.current.pause();
    } else {
      lightboxVideoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    if (!lightboxVideoRef.current) return;

    lightboxVideoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleVolumeChange = (newVolume: number) => {
    if (!lightboxVideoRef.current) return;

    setVolume(newVolume);
    lightboxVideoRef.current.volume = newVolume;

    // Unmute if volume is increased from 0
    if (newVolume > 0 && isMuted) {
      setIsMuted(false);
      lightboxVideoRef.current.muted = false;
    }
  };

  // Auto-play grid videos on intersection
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target as HTMLVideoElement;
          if (entry.isIntersecting) {
            video.play().catch(() => {
              // Auto-play failed, which is normal
            });
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.5 }
    );

    // Observe all video elements
    Object.values(gridVideoRefs.current).forEach((video) => {
      if (video) observer.observe(video);
    });

    return () => observer.disconnect();
  }, [visibleMediaItems]);

  const setVideoRef = (index: number) => (ref: HTMLVideoElement | null) => {
    gridVideoRefs.current[index] = ref;
  };

  return (
    <>
      <section
        className="section gallery-section"
        id="gallery"
      >
        <div className="custom-container">

          {/* Section Header */}
          <div className="text-center">
            <p className="section-subtitle">Our Clinic</p>
            <h2 className="h2 section-title">
              Explore Our Dental
              <br />
              Gallery
            </h2>
            <p className="section-text">
              Take a virtual tour of our modern dental facility, featuring state-of-the-art equipment,
              comfortable treatment rooms, and a welcoming environment designed with your comfort in mind.
            </p>
          </div>

          {/* Stats Bar */}
          <div className="gallery-stats">
            {STATS.map((stat, index) => (
              <div key={index} className="stat-item">
                <div className="stat-icon">
                  <IonIcon name={stat.icon} />
                </div>
                <div className="stat-content">
                  <span className="stat-number">{stat.number}</span>
                  <span className="stat-label">{stat.label}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Media Grid */}
          <div className="enhanced-gallery-grid">
            {visibleMediaItems.map((item, index) => (
              <div
                key={item.id}
                className={`gallery-item ${index % 8 === 1 || index % 8 === 6 ? 'gallery-item-large' : ''
                  }`}
              >
                <div
                  className="gallery-card"
                  onClick={() => openLightbox(index)}
                >
                  <div
                    className="img-holder gallery-image"
                    style={{
                      '--width': index % 8 === 1 || index % 8 === 6 ? 600 : 400,
                      '--height': index % 8 === 1 || index % 8 === 6 ? 400 : 300
                    } as React.CSSProperties}
                  >
                    {item.type === 'video' ? (
                      <video
                        ref={setVideoRef(index)}
                        src={item.src}
                        poster={item.poster}
                        className="img-cover gallery-video"
                        muted
                        loop
                        playsInline
                        preload="metadata"
                      />
                    ) : (
                      <Image
                        src={item.src}
                        alt={item.alt}
                        fill
                        className="img-cover gallery-img"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    )}

                    {/* Overlay */}
                    <div className="gallery-overlay">
                      <div className="gallery-content">
                        <h3 className="gallery-title">{item.title}</h3>
                        <p className="gallery-description">Click to view larger</p>
                        <div className="gallery-actions">
                          <div className="gallery-icon-wrapper">
                            <IonIcon name="expand-outline" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Media Type Badge */}
                  <div className="photo-badge">
                    <IonIcon name={item.type === 'video' ? 'videocam' : 'camera'} />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          {loadedItems < mediaItems.length && (
            <div className="gallery-load-more">
              <button
                className="btn load-more-btn"
                onClick={handleLoadMore}
              >
                Load More Media
                <IonIcon name="chevron-down-outline" />
              </button>
            </div>
          )}

          {/* Empty State */}
          {mediaItems.length === 0 && (
            <div className="gallery-empty">
              <div className="empty-icon">
                <IonIcon name="images-outline" />
              </div>
              <h3 className="empty-title">No Media Available</h3>
              <p className="empty-text">
                We&apos;re working on updating our gallery. Check back soon for updates!
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Enhanced Lightbox Modal with Video Controls */}
      {selectedMedia !== null && (
        <div
          className="lightbox-overlay"
          onClick={closeLightbox}
        >
          <div
            className="lightbox-container"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Media Container */}
            <div className="lightbox-image-wrapper">
              {/* Close Button */}
              <button
                className="lightbox-close"
                onClick={closeLightbox}
              >
                <IonIcon name="close" />
              </button>

              {/* Navigation Buttons */}
              <button
                className="lightbox-nav lightbox-prev"
                onClick={(e) => {
                  e.stopPropagation();
                  navigateLightbox('prev');
                }}
              >
                <IonIcon name="chevron-back" />
              </button>

              <button
                className="lightbox-nav lightbox-next"
                onClick={(e) => {
                  e.stopPropagation();
                  navigateLightbox('next');
                }}
              >
                <IonIcon name="chevron-forward" />
              </button>

              <div className="lightbox-image-container">
                {mediaItems[selectedMedia]?.type === 'video' ? (
                  <div className="lightbox-video-container">
                    <video
                      ref={lightboxVideoRef}
                      src={mediaItems[selectedMedia]?.src}
                      poster={mediaItems[selectedMedia]?.poster}
                      className="lightbox-video"
                      muted={isMuted}
                      onPlay={() => setIsPlaying(true)}
                      onPause={() => setIsPlaying(false)}
                      onClick={togglePlayPause}
                      onLoadedData={() => {
                        if (lightboxVideoRef.current) {
                          lightboxVideoRef.current.volume = volume;
                        }
                      }}
                    />

                    {/* Video Controls */}
                    <div className="video-controls">
                      <div className="video-controls-left">
                        <button
                          className="video-control-btn"
                          onClick={togglePlayPause}
                        >
                          <IonIcon name={isPlaying ? 'pause' : 'play'} />
                        </button>

                        <button
                          className="video-control-btn"
                          onClick={toggleMute}
                        >
                          <IonIcon name={isMuted ? 'volume-mute' : 'volume-high'} />
                        </button>

                        <div className="volume-slider-container">
                          <input
                            type="range"
                            min="0"
                            max="1"
                            step="0.1"
                            value={volume}
                            onChange={(e) => handleVolumeChange(parseFloat(e.target.value))}
                            className="volume-slider"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <Image
                    src={mediaItems[selectedMedia]?.src}
                    alt={mediaItems[selectedMedia]?.alt}
                    width={800}
                    height={600}
                    className="lightbox-image"
                    sizes="85vw"
                    priority
                  />
                )}
              </div>
            </div>

            {/* Media Info */}
            <div className="lightbox-info">
              <div className="lightbox-header">
                <h3 className="lightbox-title">{mediaItems[selectedMedia]?.title}</h3>
                <div className="media-info-badges">
                  <span className="media-type-badge">
                    <IonIcon name={mediaItems[selectedMedia]?.type === 'video' ? 'videocam' : 'camera'} />
                    {mediaItems[selectedMedia]?.type === 'video' ? 'Video' : 'Photo'}
                  </span>
                  <span className="image-counter">
                    {selectedMedia + 1} of {mediaItems.length}
                  </span>
                </div>
              </div>
              <p className="lightbox-description">
                Professional dental care environment
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Enhanced Styles */}
      <style jsx>{`
        .gallery-section {
          background: linear-gradient(135deg, #f8f9ff 0%, #fff 100%);
        }

        .gallery-stats {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 30px;
          margin: 40px 0 60px;
          padding: 40px;
          background: var(--white);
          border-radius: var(--radius-6);
          box-shadow: var(--shadow-3);
        }

        .stat-item {
          display: flex;
          align-items: center;
          gap: 15px;
          text-align: left;
        }

        .stat-icon {
          width: 60px;
          height: 60px;
          background: var(--gradient);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--white);
          font-size: 24px;
          flex-shrink: 0;
        }

        .stat-content {
          display: flex;
          flex-direction: column;
        }

        .stat-number {
          font-size: var(--fontSize-4);
          font-weight: var(--weight-700);
          color: var(--deep-purple-1);
          line-height: 1;
        }

        .stat-label {
          font-size: var(--fontSize-7);
          color: var(--sonic-silver);
          margin-top: 5px;
        }

        .enhanced-gallery-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 30px;
          margin-top: 50px;
        }

        .gallery-item-large {
          grid-column: span 2;
          grid-row: span 2;
        }

        .gallery-video {
          object-fit: cover;
          transition: var(--transition-2);
        }

        .gallery-card:hover .gallery-video {
          transform: scale(1.05);
        }

        .photo-badge {
          position: absolute;
          top: 15px;
          right: 15px;
          width: 40px;
          height: 40px;
          background: rgba(255, 255, 255, 0.9);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--royal-purple);
          font-size: 18px;
          backdrop-filter: blur(10px);
          opacity: 0;
          transition: var(--transition);
          z-index: 2;
        }

        .gallery-card:hover .photo-badge {
          opacity: 1;
        }

        .gallery-description {
          font-size: 14px;
          color: rgba(255, 255, 255, 0.9);
          margin: 10px 0 20px;
          line-height: 1.5;
        }

        .gallery-actions {
          display: flex;
          gap: 15px;
        }

        .gallery-load-more {
          text-align: center;
          margin-top: 50px;
        }

        .load-more-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
        }

        .gallery-empty {
          text-align: center;
          padding: 80px 20px;
          color: var(--sonic-silver);
        }

        .empty-icon {
          font-size: 64px;
          color: var(--light-gray);
          margin-bottom: 20px;
        }

        .empty-title {
          font-size: var(--fontSize-4);
          color: var(--deep-purple-1);
          margin-bottom: 15px;
        }

        .empty-text {
          max-width: 400px;
          margin: 0 auto;
          line-height: 1.6;
        }

        /* Enhanced Lightbox Styles */
        .lightbox-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: rgba(0, 0, 0, 0.95);
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          backdrop-filter: blur(5px);
          padding: 20px;
        }

        .lightbox-container {
          position: relative;
          width: 95vw;
          height: 95vh;
          max-width: 1200px;
          max-height: 900px;
          cursor: default;
          display: flex;
          flex-direction: column;
          background: var(--white);
          border-radius: var(--radius-6);
          overflow: hidden;
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.5);
        }

        .lightbox-image-wrapper {
          position: relative;
          flex: 1;
          min-height: 0;
          background: #f8f9fa;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        .lightbox-image-container {
          position: relative;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .lightbox-image {
          object-fit: contain;
          max-width: 100%;
          max-height: 100%;
        }

        .lightbox-video-container {
          position: relative;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .lightbox-video {
          max-width: 100%;
          max-height: 100%;
          object-fit: contain;
          cursor: pointer;
        }

        .video-controls {
          position: absolute;
          bottom: 5px;
          left: 20px;
          right: 20px;
          background: rgba(0, 0, 0, 0.8);
          border-radius: 10px;
          padding: 15px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          backdrop-filter: blur(10px);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .lightbox-video-container:hover .video-controls {
          opacity: 1;
        }

        .video-controls-left {
          display: flex;
          align-items: center;
          gap: 15px;
        }

        .video-control-btn {
          background: none;
          border: none;
          color: white;
          font-size: 20px;
          cursor: pointer;
          padding: 8px;
          border-radius: 50%;
          transition: background-color 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .video-control-btn:hover {
          background: rgba(255, 255, 255, 0.2);
        }

        .volume-slider-container {
          display: flex;
          align-items: center;
        }

        .volume-slider {
          width: 80px;
          height: 4px;
          background: rgba(255, 255, 255, 0.3);
          border-radius: 2px;
          outline: none;
          cursor: pointer;
        }

        .volume-slider::-webkit-slider-thumb {
          appearance: none;
          width: 14px;
          height: 14px;
          background: var(--royal-purple);
          border-radius: 50%;
          cursor: pointer;
        }

        .volume-slider::-moz-range-thumb {
          width: 14px;
          height: 14px;
          background: var(--royal-purple);
          border-radius: 50%;
          cursor: pointer;
          border: none;
        }

        .lightbox-info {
          padding: 25px 30px;
          background: var(--white);
          border-top: 1px solid #e9ecef;
          flex-shrink: 0;
        }

        .lightbox-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 15px;
          gap: 20px;
        }

        .lightbox-title {
          font-size: var(--fontSize-5);
          color: var(--deep-purple-1);
          margin: 0;
          font-weight: var(--weight-600);
        }

        .lightbox-description {
          color: var(--sonic-silver);
          line-height: 1.6;
          margin: 0;
          font-size: 14px;
        }

        .media-info-badges {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
        }

        .media-type-badge {
          display: flex;
          align-items: center;
          gap: 5px;
          background: rgba(var(--lavender-blue-rgb, 102, 102, 255), 0.1);
          color: var(--lavender-blue);
          padding: 6px 12px;
          border-radius: 15px;
          font-size: 12px;
          font-weight: var(--weight-600);
          white-space: nowrap;
        }

        .image-counter {
          color: var(--royal-purple);
          font-weight: var(--weight-600);
          background: rgba(var(--royal-purple-rgb, 88, 56, 255), 0.1);
          padding: 8px 16px;
          border-radius: 20px;
          font-size: 13px;
          white-space: nowrap;
        }

        /* Close and Navigation Buttons */
        .lightbox-close {
          position: absolute;
          top: 15px;
          right: 15px;
          width: 40px;
          height: 40px;
          background: rgba(0, 0, 0, 0.7);
          border: none;
          border-radius: 50%;
          color: white;
          font-size: 20px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1001;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
        }

        .lightbox-close:hover {
          background: rgba(0, 0, 0, 0.9);
          transform: scale(1.1);
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.4);
        }

        .lightbox-nav {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 50px;
          height: 50px;
          background: rgba(0, 0, 0, 0.7);
          border: none;
          border-radius: 50%;
          color: white;
          font-size: 20px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
          z-index: 1001;
        }

        .lightbox-nav:hover {
          background: rgba(0, 0, 0, 0.9);
          transform: translateY(-50%) scale(1.1);
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.4);
        }

        .lightbox-prev {
          left: 15px;
        }

        .lightbox-next {
          right: 15px;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .gallery-stats {
            grid-template-columns: 1fr;
            padding: 30px 20px;
            text-align: center;
          }

          .stat-item {
            justify-content: center;
          }

          .enhanced-gallery-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .gallery-item-large {
            grid-column: span 1;
            grid-row: span 1;
          }

          .lightbox-overlay {
            padding: 10px;
          }

          .lightbox-container {
            width: 100vw;
            height: 100vh;
            max-width: none;
            max-height: none;
            border-radius: 0;
          }

          .lightbox-close {
            top: 10px;
            right: 10px;
            width: 35px;
            height: 35px;
            font-size: 18px;
          }

          .lightbox-nav {
            width: 40px;
            height: 40px;
            font-size: 18px;
          }

          .lightbox-prev {
            left: 10px;
          }

          .lightbox-next {
            right: 10px;
          }

          .lightbox-info {
            padding: 15px;
          }

          .lightbox-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 10px;
          }

          .lightbox-title {
            font-size: var(--fontSize-6);
          }

          .media-info-badges {
            align-self: flex-end;
            justify-content: flex-end;
          }

          .video-controls {
            bottom: 10px;
            left: 10px;
            right: 10px;
            padding: 10px;
          }

          .video-controls-left {
            gap: 10px;
          }

          .volume-slider {
            width: 60px;
          }
        }

        @media (min-width: 769px) and (max-width: 1024px) {
          .enhanced-gallery-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .gallery-item-large {
            grid-column: span 2;
            grid-row: span 1;
          }

          .lightbox-container {
            max-width: 90vw;
            max-height: 75vh;
          }
        }

        @media (min-width: 1025px) {
          .enhanced-gallery-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        /* Accessibility improvements */
        .video-control-btn:focus,
        .lightbox-close:focus,
        .lightbox-nav:focus {
          outline: 2px solid var(--royal-purple);
          outline-offset: 2px;
        }

        /* Smooth transitions for media switching */
        .lightbox-image,
        .lightbox-video {
          transition: opacity 0.3s ease;
        }

        /* Loading state for videos */
        .lightbox-video:not([data-loaded]) {
          background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="35" fill="none" stroke="%23ccc" stroke-width="6"/><circle cx="50" cy="50" r="35" fill="none" stroke="%23007bff" stroke-width="6" stroke-dasharray="164.93361431346415 56.97787143782138"><animateTransform attributeName="transform" type="rotate" dur="1s" values="0 50 50;360 50 50" repeatCount="indefinite"/></circle></svg>') center/50px no-repeat;
        }
      `}</style>
    </>
  );
};