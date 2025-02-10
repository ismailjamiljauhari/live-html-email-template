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
  keywords: "HTML email editor, live preview, responsive email templates",
  author: "Ismail Jamil Jauhari",
  url: "https://ismailjamil-live-html-template.vercel.app",
  image: "/images/preview.png",
  metadataBase: new URL('https://ismailjamil-live-html-template.vercel.app'),
  openGraph: {
    images: '/og-image.png',
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
