import { Analytics } from '@vercel/analytics/next';
import type { Metadata } from "next";
import { Poppins, Comic_Neue, Roboto, Montserrat } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/src/components/theme-provider";
import { Toaster } from "@/src/components/ui/sonner";
import ReactLenis from 'lenis/react';
import { ViewTransitions } from 'next-view-transitions'

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

export const metadata: Metadata = {
  title: {
    default: "Nikhil Sai | Full Stack Developer",
    template: "%s | Nikhil Sai",
  },
  description:
    "Full stack developer building products across web, backend systems, and developer tools. Interested in system design, analytics, and scalable platforms.",
  keywords: [
    "Nikhil Sai",
    "Full Stack Developer",
    "Web Developer",
    "Backend Engineer",
    "System Design",
    "Developer Tools",
    "React",
    "Next.js",
    "Node.js",
    "Kafka",
    "ClickHouse",
  ],
  metadataBase: new URL("https://nikhilsai.in"),
  alternates: {
    canonical: "https://nikhilsai.in",
  },
  openGraph: {
    title: "Nikhil Sai — Full Stack Developer",
    description:
      "Building real-world products, backend systems, and developer tools. Exploring scalable architectures and modern web stacks.",
    url: "https://nikhilsai.in",
    siteName: "Nikhil Sai / Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Nikhil Sai Portfolio",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nikhil Sai — Full Stack Developer",
    description:
      "Building products, backend systems, and developer tools. Documenting what I build and what I learn.",
    images: ["/og-image.png"],
    creator: "@nikhilbuildss",
  },
  robots: {
    index: true,
    follow: true,
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
          <script defer src="https://cloud.umami.is/script.js" data-website-id="d4bb3fad-5fce-48b5-8f8a-17f873fd923f"></script>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Nikhil sai ",
  "url": "https://nikhilsai.in",
  "logo": "https://nikhilsai.in/nikhil.jpeg",
  "description": "This is the portfolio of Nikhil Sai Ankilla, a fresher full-stack developer. It showcases his projects, technical work, and includes his contact details.",
  "email": "nikhilsaiankilla@gmail.com",
  "telephone": "+918374056888"
}
</script>
        </head>
        <body
          className={`${roboto.variable} ${montserrat.variable} antialiased selection:bg-blue-600/90 selection:text-white`}
        >
          <ThemeProvider
            attribute={'class'}
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
