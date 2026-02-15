import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import { Poppins, Comic_Neue, Roboto, Montserrat } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/src/components/theme-provider";
import { Toaster } from "@/src/components/ui/sonner";
import ReactLenis from "lenis/react";
import { ViewTransitions } from "next-view-transitions";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-roboto",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "700"], // light / regular / bold
  variable: "--font-montserrat",
});

const SITE_URL = "https://nikhilsai.in";
const OG_IMAGE = `${SITE_URL}/og-image.png`;

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Nikhil Sai Ankilla",
  url: SITE_URL,
  image: `${SITE_URL}/nikhil.jpeg`,
  jobTitle: "Full Stack Developer",
  description:
    "Full Stack Developer specializing in Next.js, React, Node.js, Kafka, and ClickHouse. Building scalable web applications, backend systems, and developer tools.",
  email: "mailto:nikhilsaiankilla@gmail.com",
  telephone: "+91-8374056888",
  knowsAbout: [
    "Next.js",
    "React",
    "Node.js",
    "TypeScript",
    "Kafka",
    "ClickHouse",
    "System Design",
    "Backend Development",
    "Web Performance",
  ],
  sameAs: [
    "https://github.com/nikhilsaiankilla",
    "https://www.linkedin.com/in/nikhilsaiankilla",
  ],
  mainEntityOfPage: SITE_URL,
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Nikhil Sai Portfolio",
  url: SITE_URL,
  potentialAction: {
    "@type": "SearchAction",
    target: `${SITE_URL}/search?q={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default:
      "Nikhil Sai Ankilla – Full Stack Developer | Next.js, React, Node.js",
    template: "%s | Nikhil Sai",
  },

  description:
    "Full Stack Developer from India building scalable web apps with Next.js, React, Node.js, Kafka, and ClickHouse. Open to full-time roles and backend-focused opportunities.",

  keywords: [
    "Nikhil Sai Ankilla",
    "Full Stack Developer India",
    "Next.js Developer Portfolio",
    "React Node.js Developer",
    "Backend Developer India",
    "Kafka ClickHouse Engineer",
    "Fresher Full Stack Developer",
  ],

  authors: [{ name: "Nikhil Sai", url: SITE_URL }],
  creator: "Nikhil Sai",
  publisher: "Nikhil Sai",

  category: "technology",
  applicationName: "Nikhil Sai Portfolio",
  referrer: "origin-when-cross-origin",

  alternates: {
    canonical: SITE_URL,
  },

  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  openGraph: {
    title: "Nikhil Sai – Full Stack Developer | Next.js, React, Node.js, Kafka",
    description:
      "Portfolio of Nikhil Sai, a full stack developer building real-world backend systems, scalable platforms, and developer tools.",
    url: SITE_URL,
    siteName: "Nikhil Sai Portfolio",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Nikhil Sai Full Stack Developer Portfolio",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Nikhil Sai – Full Stack Developer",
    description:
      "Building scalable web apps and backend systems with Next.js, Node.js, Kafka, and ClickHouse.",
    images: [OG_IMAGE],
    creator: "@nikhilbuildss",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
  },

  appleWebApp: {
    capable: true,
    title: "Nikhil Sai Portfolio",
    statusBarStyle: "default",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="en" suppressHydrationWarning>
        <head>
          <script
            defer
            src="https://cloud.umami.is/script.js"
            data-website-id="d4bb3fad-5fce-48b5-8f8a-17f873fd923f"
          ></script>

          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(personJsonLd),
            }}
          />

          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(websiteJsonLd),
            }}
          />
        </head>
        <body
          className={`${roboto.variable} ${montserrat.variable} antialiased selection:bg-blue-600/90 selection:text-white`}
        >
          <ThemeProvider
            attribute={"class"}
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
            <ReactLenis root>
              <Toaster />
              {children}
              <Analytics />
            </ReactLenis>
          </ThemeProvider>
        </body>
      </html>
    </ViewTransitions>
  );
}
