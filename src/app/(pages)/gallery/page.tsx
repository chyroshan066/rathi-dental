import { MEDIA_ITEMS } from '@/constants/gallery';
import Gallery from './_components/Gallery';
import { Metadata } from 'next';

const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

export const metadata: Metadata = {
  title: "Rathi Dental Gallery - Modern Dental Clinic Facilities in Itahari",
  description: "Explore Rathi Dental's state-of-the-art facilities in Itahari, Nepal. View our modern dental equipment, comfortable treatment rooms, sterilization facilities, and patient-friendly environment designed for quality dental care.",
  keywords: [
    "Rathi Dental gallery",
    "dental clinic photos Itahari",
    "modern dental equipment",
    "dental facility Itahari",
    "dental clinic interior",
    "sterilization facilities",
    "comfortable dental environment",
    "advanced dental technology",
    "dental treatment rooms",
    "clinic facilities Nepal",
    "dental equipment photos",
    "professional dental setup",
    "clean dental clinic",
    "patient comfort facilities",
    "dental office tour",
    "clinic atmosphere",
    "dental workspace",
    "hygienic dental clinic",
    "dental clinic amenities",
    "Itahari dental facilities"
  ],
  authors: [{ name: "Rathi Dental" }],
  creator: "Rathi Dental",
  publisher: "Rathi Dental",
  metadataBase: new URL("https://rathidentalclinic.com"),
  alternates: {
    canonical: "/gallery",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large", // Important for gallery images
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Rathi Dental Gallery - Modern Facilities & Equipment",
    description: "Take a virtual tour of Rathi Dental's modern facilities in Itahari. See our advanced dental equipment, comfortable treatment rooms, and patient-centered environment.",
    type: "website",
    locale: "en_US",
    url: `${baseURL}/gallery`,
    siteName: "Rathi Dental",
    images: [
      {
        url: `${baseURL}/images/preview.webp`,
        width: 1200,
        height: 630,
        alt: "Rathi Dental Clinic Facilities and Equipment Gallery",
      },
    ],
  },
  other: {
    "og:image:type": "image/webp",
    "twitter:card": "summary_large_image",
    "twitter:title": "Rathi Dental Gallery - Modern Facilities",
    "twitter:description": "Explore our state-of-the-art dental facilities and equipment in Itahari, Nepal",
    "twitter:image": `${baseURL}/images/preview.webp`,
  },
  category: "health",
  classification: "Dental Clinic Gallery",
  referrer: "origin-when-cross-origin",
  applicationName: "Rathi Dental",
  generator: "Next.js",
};

export default function GalleryPage() {
  return (
    <main>
      <Gallery
        mediaItems={MEDIA_ITEMS}
      />
    </main>
  );
}