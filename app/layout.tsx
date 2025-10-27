import type { Metadata } from "next";
import { Inter, Poppins } from 'next/font/google';
import "./globals.css";

// Optimized font loading with next/font
const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  preload: true,
});

const poppins = Poppins({ 
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  preload: true,
});

export const metadata: Metadata = {
  title: "Arshad Pasha - Full Stack Developer | Portfolio",
  description:
    "Hi there! I'm Arshad Pasha, a passionate and results-driven full-stack web developer with real-world experience building dynamic websites and custom tools for small and medium-sized businesses.",
  keywords: [
    "Arshad Pasha",
    "Full Stack Developer",
    "Web Developer",
    "Python Developer",
    "React Developer",
    "AI/ML Developer",
    "Portfolio",
  ],
  authors: [{ name: "Arshad Pasha" }],
  openGraph: {
    title: "Arshad Pasha - Full Stack Web Developer",
    description:
      "Passionate full-stack web developer with expertise in Python, React, AI/ML, and more.",
    type: "website",
    url: "https://arshadpasha.tech/",
    images: [
      {
        url: "/assets/images/aplogo.png",
        width: 800,
        height: 600,
        alt: "Arshad Pasha Logo",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <link rel="icon" href="/assets/images/aplogo.png" type="image/png" />
        <link
          rel="icon"
          href="/assets/images/aplogo (16x16).png"
          type="image/png"
          sizes="16x16"
        />
        <link
          rel="icon"
          href="/assets/images/aplogo(32x32).png"
          type="image/png"
          sizes="32x32"
        />
        <link rel="apple-touch-icon" href="/assets/images/aplogo.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="theme-color" content="#000000" />
      </head>
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
