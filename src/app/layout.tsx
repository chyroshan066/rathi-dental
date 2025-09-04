import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import IonicScripts from "@/utils/IonicScripts";
import AnalyticsWrapper from "@/utils/AnalyticsWrapper";
import { Header } from "@/components/Header";
import { BackToTop } from "@/components/BackToTop";
import { Footer } from "@/components/Footer";

const roboto = localFont({
  src: [
    {
      path: "../../public/fonts/roboto/Roboto-Regular.woff2",
      weight: "400",
      style: "normal"
    },
    {
      path: "../../public/fonts/roboto/Roboto-500.woff2",
      weight: "500",
      style: "normal"
    },
    {
      path: "../../public/fonts/roboto/Roboto-600.woff2",
      weight: "600",
      style: "normal"
    },
    {
      path: "../../public/fonts/roboto/Roboto-700.woff2",
      weight: "700",
      style: "normal"
    },
    {
      path: "../../public/fonts/roboto/Roboto-800.woff2",
      weight: "800",
      style: "normal"
    },
  ],
  display: 'swap',
  variable: '--font-roboto'
});

const poppins = localFont({
  src: [
    {
      path: "../../public/fonts/poppins/Poppins-Regular.woff2",
      weight: "400",
      style: "normal"
    },
    {
      path: "../../public/fonts/poppins/Poppins-500.woff2",
      weight: "500",
      style: "normal"
    },
    {
      path: "../../public/fonts/poppins/Poppins-600.woff2",
      weight: "600",
      style: "normal"
    },
    {
      path: "../../public/fonts/poppins/Poppins-700.woff2",
      weight: "700",
      style: "normal"
    },
    {
      path: "../../public/fonts/poppins/Poppins-800.woff2",
      weight: "800",
      style: "normal"
    },
  ],
  display: 'swap',
  variable: '--font-poppins'
});

export const metadata: Metadata = {
  title: "Rathi Dental - Advanced Dental Care in Itahari, Nepal",
  description: "Rathi Dental offers comprehensive dental care in Itahari, Nepal. Expert dentists providing treatments such as dental implants, braces, root canal therapy, cosmetic dentistry, teeth whitening, and preventive oral care in a modern, comfortable clinic.",
  keywords: [
    "Rathi Dental",
    "dental clinic",
    "dentist Itahari",
    "dental implants Itahari",
    "braces Itahari",
    "cosmetic dentistry Itahari",
    "root canal Itahari",
    "teeth whitening Itahari",
    "orthodontics Itahari",
    "best dentist Itahari",
    "dental care Nepal",
    "oral surgery Itahari",
    "family dentist Itahari",
    "tooth extraction Itahari",
    "dental checkup Itahari",
    "gum treatment Itahari",
    "pediatric dentist Itahari",
    "affordable dental care Itahari",
    "emergency dental Itahari",
    "dental hygiene Itahari",
    "Rathi Dental Nepal"
  ],
  authors: [{ name: "Rathi Dental" }],
  creator: "Rathi Dental",
  publisher: "Rathi Dental",
  metadataBase: new URL("https://www.rathidentalclinic.com/"),
  alternates: {
    canonical: "/",
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
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      {
        url: '/favicon_io/favicon-16x16.png',
        sizes: '16x16',
        type: 'image/png'
      },
      {
        url: '/favicon_io/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png'
      },
      {
        url: '/favicon_io/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png'
      },
      {
        url: '/favicon_io/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png'
      },
      {
        url: '/favicon_io/favicon.ico',
        sizes: '32x32'
      },
    ],
    shortcut: '/favicon_io/favicon.ico',
    apple: '/favicon_io/apple-touch-icon.png',
  },
  manifest: '/favicon_io/site.webmanifest',
  openGraph: {
    title: "Rathi Dental - Advanced Dental Care in Itahari, Nepal",
    description: "Expert dentists in Itahari offering dental implants, braces, root canals, cosmetic dentistry, and preventive care in a modern, patient-friendly clinic.",
    type: "website",
    locale: "en_US",
    url: "https://www.rathidentalclinic.com/",
    siteName: "Rathi Dental",
    images: [
      {
        url: "/images/preview.webp",
        width: 1200,
        height: 630,
        alt: "Rathi Dental Clinic Preview",
      }
    ],
  },
  category: "health",
  classification: "Dental Clinic",
  referrer: "origin-when-cross-origin",
  applicationName: "Rathi Dental",
  generator: "Next.js",
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${poppins.variable}`}
        suppressHydrationWarning={true}
        id="top"
      >
        <Header />
        {children}
        <Footer />
        <BackToTop />
        <IonicScripts />
        <AnalyticsWrapper />
      </body>
    </html>
  );
}
