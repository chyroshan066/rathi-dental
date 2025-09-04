import { MediaItem } from "@/types";

export const MEDIA_ITEMS: MediaItem[] = [
    {
        id: 1,
        src: "/images/media/gallery/g1.webp",
        alt: "Dental Ad",
        title: "Social Media Poster",
        type: "image"
    },
    {
        id: 2,
        src: "/images/media/videos/v1.webm",
        alt: "Dental Location",
        title: "Dental View from Mahendra Chowk",
        type: "video"
    },
    {
        id: 3,
        src: "/images/media/gallery/g2.webp",
        alt: "State-of-the-art dental office",
        title: "Reception Area",
        type: "image"
    },
    {
        id: 4,
        src: "/images/media/gallery/g3.webp",
        alt: "Modern dental equipment",
        title: "Treatment Room 1",
        type: "image"
    },
    {
        id: 5,
        src: "/images/media/gallery/g4.webp",
        alt: "Dental consultation area",
        title: "Consultation Room",
        type: "image"
    },
    {
        id: 6,
        src: "/images/media/gallery/g5.webp",
        alt: "Dental sterilization area",
        title: "Sterilization Unit",
        type: "image"
    },
    {
        id: 7,
        src: "/images/media/videos/v2.webm",
        alt: "Dental X-ray facility",
        title: "X-Ray Room",
        type: "video"
    },
    {
        id: 8,
        src: "/images/media/gallery/g6.webp",
        alt: "Dental waiting area",
        title: "Waiting Lounge",
        type: "image"
    },
    {
        id: 9,
        src: "/images/media/gallery/g7.webp",
        alt: "Advanced dental technology",
        title: "Digital Equipment",
        type: "image"
    },
    {
        id: 10,
        src: "/images/media/videos/v3.webm",
        alt: "Dental surgery room",
        title: "Surgical Suite",
        type: "video"
    },
    {
        id: 11,
        src: "/images/media/gallery/g8.webp",
        alt: "Dental laboratory",
        title: "Laboratory Section",
        type: "image"
    },
    {
        id: 12,
        src: "/images/media/gallery/g9.webp",
        alt: "Dental office exterior",
        title: "Clinic Entrance",
        type: "image"
    },
    {
        id: 13,
        src: "/images/media/gallery/g10.webp",
        alt: "Dental clinic tour video",
        title: "Virtual Clinic Tour",
        type: "image",
        // poster: "/images/gallery/v1-poster.webp" // Optional: thumbnail for the video
    },
    {
        id: 14,
        src: "/images/media/gallery/g11.webp",
        alt: "Dental clinic tour video",
        title: "Virtual Clinic Tour",
        type: "image",
    },
    {
        id: 15,
        src: "/images/media/videos/v4.webm",
        alt: "Dental clinic tour video",
        title: "Virtual Clinic Tour",
        type: "video",
    },
    {
        id: 16,
        src: "/images/media/gallery/g12.webp",
        alt: "Dental clinic tour video",
        title: "Virtual Clinic Tour",
        type: "image",
    },
    {
        id: 17,
        src: "/images/media/gallery/g13.webp",
        alt: "Dental clinic tour video",
        title: "Virtual Clinic Tour",
        type: "image",
    },
    {
        id: 18,
        src: "/images/media/videos/v5.webm",
        alt: "Dental clinic tour video",
        title: "Virtual Clinic Tour",
        type: "video",
    },
    {
        id: 19,
        src: "/images/media/gallery/g14.webp",
        alt: "Dental clinic tour video",
        title: "Virtual Clinic Tour",
        type: "image",
    },
    {
        id: 20,
        src: "/images/media/gallery/g15.webp",
        alt: "Dental clinic tour video",
        title: "Virtual Clinic Tour",
        type: "image",
    },
    {
        id: 21,
        src: "/images/media/gallery/g16.webp",
        alt: "Dental clinic tour video",
        title: "Virtual Clinic Tour",
        type: "image",
    },
    {
        id: 22,
        src: "/images/media/videos/v6.webm",
        alt: "Dental clinic tour video",
        title: "Virtual Clinic Tour",
        type: "video",
    },
    {
        id: 23,
        src: "/images/media/videos/v7.webm",
        alt: "Dental clinic tour video",
        title: "Virtual Clinic Tour",
        type: "video",
    },
    {
        id: 24,
        src: "/images/media/videos/v8.webm",
        alt: "Dental clinic tour video",
        title: "Virtual Clinic Tour",
        type: "video",
    },
];

// Legacy export for backward compatibility
export const PHOTOS = MEDIA_ITEMS.filter(item => item.type === 'image');

// Helper functions for filtering media
export const getImages = () => MEDIA_ITEMS.filter(item => item.type === 'image');
export const getVideos = () => MEDIA_ITEMS.filter(item => item.type === 'video');
export const getAllMedia = () => MEDIA_ITEMS;