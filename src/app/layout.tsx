import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  weight: ["400", "500"],
  display: "swap",
});

const BASE_URL = "https://plusonesoftwaresolution.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Plus One Software Solution — Custom Software for Malaysian SMEs",
    template: "%s | Plus One Software Solution",
  },
  description:
    "We build custom web apps, mobile apps, and AI systems for Malaysian SME owners ready to stop running on chaos. Trusted digitalization advisor based in Kuala Lumpur.",
  keywords: [
    "custom software Malaysia",
    "software development Kuala Lumpur",
    "digitalization consultant Malaysia",
    "web app development Malaysia",
    "mobile app development KL",
    "SME software solution Malaysia",
    "business digitalization Malaysia",
    "Aaron So Plus One",
    "Malaysia software agency",
  ],
  authors: [{ name: "Aaron So", url: BASE_URL }],
  creator: "Aaron So",
  publisher: "Plus One Software Solution",
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
  openGraph: {
    type: "website",
    locale: "en_MY",
    url: BASE_URL,
    siteName: "Plus One Software Solution",
    title: "Plus One Software Solution — Custom Software for Malaysian SMEs",
    description:
      "Custom web apps, mobile apps, and AI systems for Malaysian businesses. Real systems for real operations.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Plus One Software Solution — Custom Software for Malaysian SMEs",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Plus One Software Solution — Custom Software for Malaysian SMEs",
    description:
      "Custom web apps, mobile apps, and AI systems for Malaysian businesses. Real systems for real operations.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: BASE_URL,
  },
  verification: {
    // Add Google Search Console verification token here when ready
    // google: "your-verification-token",
  },
};

// JSON-LD structured data — LocalBusiness schema
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Plus One Software Solution",
  description:
    "Custom software development agency for Malaysian SMEs. We build web apps, mobile apps, and AI systems tailored to your business operations.",
  url: BASE_URL,
  logo: `${BASE_URL}/logo.png`,
  image: `${BASE_URL}/og-image.png`,
  email: "hello@plusonesoftwaresolution.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Kuala Lumpur",
    addressCountry: "MY",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "3.1390",
    longitude: "101.6869",
  },
  areaServed: {
    "@type": "Country",
    name: "Malaysia",
  },
  serviceType: [
    "Custom Web Application Development",
    "Mobile App Development",
    "AI Automation",
    "Digitalization Consulting",
    "Business Software Solutions",
  ],
  founder: {
    "@type": "Person",
    name: "Aaron So",
    jobTitle: "Founder & Digitalization Advisor",
    worksFor: {
      "@type": "Organization",
      name: "Plus One Software Solution",
    },
  },
  sameAs: [
    // Add social profile URLs here when ready
    // "https://www.linkedin.com/company/plus-one-software-solution",
    // "https://www.instagram.com/plusonesoftware",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en-MY"
      className={`${inter.variable} ${plusJakarta.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <Nav />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
