// src/app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css"; // Your global Tailwind CSS imports

// Import the new Header and Footer components
import Header from '../components/Header';
import Footer from '../components/Footer';
import TopSocialBar from '../components/TopSocialBar'; // ADD THIS IMPORT

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Prevail Home Maintenance", // Default title for your site
    template: "%s | Prevail Home Maintenance", // Template for page-specific titles
  },
  description: "Comprehensive home maintenance services: plumbing, painting, CCTV, and more.",
  keywords: ["home maintenance", "plumbing", "painting", "CCTV installation", "general maintenance", "Dubai", "UAE"],
  authors: [{ name: "Prevail Team" }],
  // Add more metadata as needed for SEO and social media sharing
  openGraph: {
    title: 'Prevail Home Maintenance',
    description: 'Your reliable partner for all home maintenance needs in Dubai.',
    url: 'https://yourwebsite.com', // Replace with your actual URL
    siteName: 'Prevail Home Maintenance',
    images: [
      {
        url: 'https://yourwebsite.com/og-image.jpg', // Replace with your OG image
        width: 1200,
        height: 630,
        alt: 'Prevail Home Maintenance',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Prevail Home Maintenance',
    description: 'Your reliable partner for all home maintenance needs in Dubai.',
    creator: '@yourtwitterhandle', // Replace if you have one
    images: ['https://yourwebsite.com/twitter-image.jpg'], // Replace with your Twitter image
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <TopSocialBar /> 
        <Header />

        {/* This main tag will encompass all page content */}
        <main className="min-h-screen pt-[72px]"> {/* ADJUSTED PADDING */}
          {children}
        </main>

        {/* Render the Footer component */}
        <Footer />
      </body>
    </html>
  );
}