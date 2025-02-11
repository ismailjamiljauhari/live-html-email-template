import "./globals.css";

import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Edit & Preview HTML Email Templates - Ismail Jamil Jauhari",
  description:
    "Live HTML email editor with real-time preview. Create, edit, and test responsive email templates effortlessly.",
  keywords: ['HTML email editor', 'live preview', 'responsive email templates', 'nextjs', 'ismail jamil'],
  author: "Ismail Jamil Jauhari",
  creator: 'Ismail Jamil Jauhari',
  publisher: 'Ismail Jamil Jauhari',
  url: "https://email-template.ismailjamil.my.id",
  image: "/images/og-image.webp",
  metadataBase: new URL('https://email-template.ismailjamil.my.id'),
  openGraph: {
    siteName: 'Edit & Preview HTML Email Templates - Ismail Jamil Jauhari',
    images: '/images/og-image.webp',
    description: 'Live HTML email editor with real-time preview. Create, edit, and test responsive email templates effortlessly.',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
