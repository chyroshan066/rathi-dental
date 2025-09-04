import { MediaItem } from "@/types";

export const MEDIA_ITEMS: MediaItem[] = [
    {
        id: 1,
        src: "/images/media/gallery/g1.webp",
        alt: "Modern Dental Treatment Room",
        title: "Modern Dental Treatment Room",
        type: "image"
    },
    {
        id: 2,
        src: "/images/media/videos/v1.webm",
        alt: "Welcome to Rathi Dental Clinic - Where Your Smile is Our Priority",
        title: "Welcome to Rathi Dental Clinic - Where Your Smile is Our Priority",
        type: "video",
        // poster: "/images/gallery/v1-poster.webp" // Optional: thumbnail for the video
    },
    {
        id: 3,
        src: "/images/media/gallery/g2.webp",
        alt: "Expert Dental Team in Action",
        title: "Expert Dental Team in Action",
        type: "image"
    },
    {
        id: 4,
        src: "/images/media/gallery/g3.webp",
        alt: "Advanced Sterilization and Instrument Processing Center",
        title: "Advanced Sterilization and Instrument Processing Center",
        type: "image"
    },
    {
        id: 5,
        src: "/images/media/gallery/g4.webp",
        alt: "Clinic Location and Directions",
        title: "Clinic Location and Directions",
        type: "image"
    },
    {
        id: 6,
        src: "/images/media/gallery/g5.webp",
        alt: "Dr. Mamta Soni's Professional Certifications",
        title: "Dr. Mamta Soni's Professional Certifications",
        type: "image"
    },
    {
        id: 7,
        src: "/images/media/videos/v2.webm",
        alt: "Find Us - Convenient Location and Easy Access",
        title: "Find Us - Convenient Location and Easy Access",
        type: "video"
    },
    {
        id: 8,
        src: "/images/media/gallery/g6.webp",
        alt: "Dr. Mamta Soni - Lead Dentist",
        title: "Dr. Mamta Soni - Lead Dentist",
        type: "image"
    },
    {
        id: 9,
        src: "/images/media/gallery/g7.webp",
        alt: "Comprehensive Dental Treatment",
        title: "Comprehensive Dental Treatment",
        type: "image"
    },
    {
        id: 10,
        src: "/images/media/videos/v3.webm",
        alt: "Gentle Pediatric Dental Care - Making Kids Comfortable",
        title: "Gentle Pediatric Dental Care - Making Kids Comfortable",
        type: "video"
    },
    {
        id: 11,
        src: "/images/media/gallery/g8.webp",
        alt: "Dr. Mamta Soni Providing Expert Dental Care",
        title: "Dr. Mamta Soni Providing Expert Dental Care",
        type: "image"
    },
    {
        id: 12,
        src: "/images/media/gallery/g9.webp",
        alt: "Precision Dental Treatment",
        title: "Precision Dental Treatment",
        type: "image"
    },
    {
        id: 13,
        src: "/images/media/gallery/g10.webp",
        alt: "Advanced Dental Procedures with Precision Equipment",
        title: "Advanced Dental Procedures with Precision Equipment",
        type: "image",
    },
    {
        id: 14,
        src: "/images/media/gallery/g11.webp",
        alt: "Professional Dental Care in Action",
        title: "Professional Dental Care in Action",
        type: "image",
    },
    {
        id: 15,
        src: "/images/media/videos/v4.webm",
        alt: "A Day at Our Dental Practice - Behind the Scenes",
        title: "A Day at Our Dental Practice - Behind the Scenes",
        type: "video",
    },
    {
        id: 16,
        src: "/images/media/gallery/g12.webp",
        alt: "Advanced Dental Technology and Care",
        title: "Advanced Dental Technology and Care",
        type: "image",
    },
    {
        id: 17,
        src: "/images/media/gallery/g13.webp",
        alt: "Community Dental Education Program",
        title: "Community Dental Education Program",
        type: "image",
    },
    {
        id: 18,
        src: "/images/media/videos/v5.webm",
        alt: "Advanced Dental Technology and Team Excellence",
        title: "Advanced Dental Technology and Team Excellence",
        type: "video",
    },
    {
        id: 19,
        src: "/images/media/gallery/g14.webp",
        alt: "nteractive Dental Health Education Session",
        title: "nteractive Dental Health Education Session",
        type: "image",
    },
    {
        id: 20,
        src: "/images/media/gallery/g15.webp",
        alt: "Digital Dentistry Education and Equipment Demonstration",
        title: "Digital Dentistry Education and Equipment Demonstration",
        type: "image",
    },
    {
        id: 21,
        src: "/images/media/gallery/g16.webp",
        alt: "Happy Patient, Successful Treatment",
        title: "Happy Patient, Successful Treatment",
        type: "image",
    },
    {
        id: 22,
        src: "/images/media/videos/v6.webm",
        alt: "Advanced Dental Technology and Team Excellence",
        title: "Advanced Dental Technology and Team Excellence",
        type: "video",
    },
    {
        id: 23,
        src: "/images/media/videos/v7.webm",
        alt: "Infection Control and Sterilization - Your Safety is Our Priority",
        title: "Infection Control and Sterilization - Your Safety is Our Priority",
        type: "video",
    },
    {
        id: 24,
        src: "/images/media/videos/v8.webm",
        alt: "Tour Our State-of-the-Art Dental Facility",
        title: "Tour Our State-of-the-Art Dental Facility",
        type: "video",
    },
];

// Legacy export for backward compatibility
export const PHOTOS = MEDIA_ITEMS.filter(item => item.type === 'image');

// Helper functions for filtering media
export const getImages = () => MEDIA_ITEMS.filter(item => item.type === 'image');
export const getVideos = () => MEDIA_ITEMS.filter(item => item.type === 'video');
export const getAllMedia = () => MEDIA_ITEMS;