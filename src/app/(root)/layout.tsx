import type { Metadata } from "next";
import { Poppins, Comic_Neue } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/src/components/theme-provider";
import { Toaster } from "@/src/components/ui/sonner";
import ReactLenis from 'lenis/react';
import { ViewTransitions } from 'next-view-transitions'

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"], // pick the ones you need
  variable: "--font-poppins",
});

const comicNeue = Comic_Neue({
  subsets: ["latin"],
  weight: ["300", "400", "700"], // light / regular / bold
  variable: "--font-comic",
});

export const metadata: Metadata = {
  title: {
    default: "Nikhil Sai — Full Stack Developer",
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
        </head>
        <body
          className={`${poppins.variable} ${comicNeue.variable} antialiased`}
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
            </ReactLenis>
          </ThemeProvider>
        </body>
      </html>
    </ViewTransitions>
  );
}
