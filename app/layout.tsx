import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// ==========================================
// FONT CONFIGURATION
// ==========================================
const inter = Inter({ 
  subsets: ["latin"], 
  variable: "--font-inter",
  display: "swap",
  preload: true,
});

const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"], 
  variable: "--font-space",
  display: "swap",
  preload: true,
});

// ==========================================
// METADATA CONFIGURATION
// ==========================================
export const metadata: Metadata = {
  title: {
    default: "Hypenbloom | AI & SaaS Venture Studio",
    template: "%s | Hypenbloom",
  },
  description: "We build intelligent SaaS solutions and agentic AI systems that transform how businesses operate. From concept to scale.",
  keywords: [
    "AI development",
    "SaaS solutions",
    "agentic AI",
    "enterprise software",
    "machine learning",
    "cloud infrastructure",
    "venture studio",
    "AI integration",
    "custom AI models",
    "business automation"
  ],
  authors: [{ name: "Hypenbloom" }],
  creator: "Hypenbloom",
  publisher: "Hypenbloom",
  metadataBase: new URL("https://hypenbloom.com"),
  
  // Open Graph
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://hypenbloom.com",
    title: "Hypenbloom | AI & SaaS Venture Studio",
    description: "We build intelligent SaaS solutions and agentic AI systems that transform how businesses operate.",
    siteName: "Hypenbloom",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Hypenbloom - AI & SaaS Venture Studio",
      },
    ],
  },
  
  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Hypenbloom | AI & SaaS Venture Studio",
    description: "Building intelligent solutions that transform businesses",
    images: ["/og-image.jpg"],
    creator: "@hypenbloom",
  },
  
  // Additional SEO
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  
  // Verification (Add your codes)
  verification: {
    google: "your-google-site-verification-code",
    // yandex: "your-yandex-verification",
    // bing: "your-bing-verification",
  },
  
  // Icons
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  
  // Manifest
  manifest: "/site.webmanifest",
};

// ==========================================
// ROOT LAYOUT
// ==========================================
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html 
      lang="en" 
      className={`${inter.variable} ${spaceGrotesk.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <head>
        {/* Preconnect to external domains for faster loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      
      <body className="font-sans bg-black text-white antialiased overflow-x-hidden">
        {/* ================= GLOBAL BACKGROUND LAYERS ================= */}
        {/* These persist across all pages for consistency */}
        <div className="fixed inset-0 -z-50 pointer-events-none">
          {/* Base grid pattern */}
          <div className="absolute inset-0 grid-pattern opacity-20" />
          
          {/* Noise texture for depth */}
          <div className="absolute inset-0 noise-texture opacity-30 mix-blend-overlay" />
          
          {/* Subtle vignette effect */}
          <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-black/50" />
        </div>

        {/* ================= NAVIGATION ================= */}
        <Navbar />

        {/* ================= MAIN CONTENT ================= */}
        <main className="relative flex-1 min-h-screen">
          {children}
        </main>

        {/* ================= FOOTER ================= */}
        <Footer />

        {/* ================= SCROLL TO TOP INDICATOR ================= */}
        <div 
          id="scroll-top-target" 
          className="absolute top-0 left-0 w-full h-1 pointer-events-none" 
          aria-hidden="true"
        />
      </body>
    </html>
  );
}