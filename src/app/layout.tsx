import type { Metadata } from "next";
import { Geist, Geist_Mono, Cherry_Cream_Soda } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });
const cherryCreamSoda = Cherry_Cream_Soda({ variable: "--font-cherry-cream", weight: "400", subsets: ["latin"] });

// SEO Metadata (as before)
export const metadata: Metadata = {
  metadataBase: new URL('https://arshadpasha.com'),
  title: {
    default: "Arshad Pasha | Full Stack Developer & AI/ML Engineer in Mysore, India",
    template: "%s | Arshad Pasha - Full Stack Developer"
  },
  description: "Arshad Pasha - Professional Full Stack Web Developer & AI/ML Engineer based in Mysore, India. Expert in ReactJS, Next.js, Python, Node.js, TypeScript, and Machine Learning. Available for freelance projects and collaborations.",
  keywords: [
    "Arshad Pasha",
    "Arshad Masar",
    "Full Stack Developer",
    "Full Stack Web Developer",
    "AI ML Developer",
    "AI Developer Mysore",
    "ML Engineer India",
    "Web Developer Mysore",
    "React Developer",
    "Next.js Developer",
    "Python Developer",
    "Node.js Developer",
    "Frontend Developer",
    "Backend Developer",
    "Software Engineer",
    "Freelance Developer India",
    "JavaScript Developer",
    "TypeScript Developer",
    "Machine Learning Engineer",
    "Data Science",
    "Cyber Security",
    "UiPath Developer",
    "Automation Developer",
    "Portfolio Website",
    "Seshadripuram Degree College",
    "Mysore Developer",
    "Karnataka Developer",
    "India Developer"
  ],
  authors: [{ name: "Arshad Pasha", url: "https://arshadpasha.com" }],
  creator: "Arshad Pasha",
  publisher: "Arshad Pasha",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://arshadpasha.com",
    siteName: "Arshad Pasha Portfolio",
    title: "Arshad Pasha | Full Stack Developer & AI/ML Engineer",
    description: "Professional Full Stack Web Developer & AI/ML Engineer based in Mysore, India. Expert in ReactJS, Next.js, Python, and Machine Learning. View my projects, certifications, and experience.",
    images: [
      {
        url: "/assets/img/arshad.jpg",
        width: 1200,
        height: 630,
        alt: "Arshad Pasha - Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Arshad Pasha | Full Stack Developer & AI/ML Engineer",
    description: "Professional Full Stack Web Developer & AI/ML Engineer based in Mysore, India. Expert in ReactJS, Next.js, Python, and Machine Learning.",
    images: ["/assets/img/arshad.jpg"],
    creator: "@arshadpasha",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://arshadpasha.com",
  },
  category: "technology",
  icons: {
    icon: [
      { url: "/assets/img/aplogo.png", sizes: "32x32", type: "image/png" },
      { url: "/assets/img/aplogo.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/assets/img/aplogo.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/assets/img/aplogo.png",
  },
  manifest: "/manifest.json",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Arshad Pasha",
  url: "https://arshadpasha.com",
  // ... (rest of JSON-LD)
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
       <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                function setTheme(theme) {
                  document.documentElement.setAttribute('data-theme', theme);
                  localStorage.setItem('theme', theme);
                }
                var savedTheme = localStorage.getItem('theme');
                if (savedTheme) {
                  setTheme(savedTheme);
                } else {
                  var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  setTheme(prefersDark ? 'dark' : 'light');
                }
              })();
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${cherryCreamSoda.variable} antialiased`}
        suppressHydrationWarning
      >
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
