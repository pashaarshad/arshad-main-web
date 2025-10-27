import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en">
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
        <meta name="theme-color" content="#000000" />
      </head>
      <body>{children}</body>
    </html>
  );
}
