import type { Metadata } from "next";
import { Poppins, Comic_Neue } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

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
  title: "Nikhil Sai Portfolio",
  description: "Your friendly Developer from Hyderabad India",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${poppins.variable} ${comicNeue.variable} antialiased`}
      >
        <ThemeProvider
          attribute={'class'}
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
