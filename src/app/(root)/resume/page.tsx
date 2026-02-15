import ResumeComponent from "@/src/components/resume-component";

export const metadata = {
  title: "Full Stack Developer Resume – Next.js, Node.js, Kafka | Nikhil Sai",
  description:
    "Download the resume of Nikhil Sai, a full stack developer specializing in Next.js, Node.js, Kafka, ClickHouse, and scalable backend systems.",
  alternates: {
    canonical: "https://nikhilsai.in/resume",
  },
  openGraph: {
    title: "Full Stack Developer Resume – Nikhil Sai",
    description:
      "Resume of a full stack developer focused on backend systems, system design, and modern web architecture.",
    url: "https://nikhilsai.in/resume",
    siteName: "Nikhil Sai",
    images: [
      {
        url: "https://nikhilsai.in/og-image.png",
        width: 1200,
        height: 630,
        alt: "Nikhil Sai Resume",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Full Stack Developer Resume – Nikhil Sai",
    description:
      "Next.js, Node.js, Kafka, ClickHouse, backend systems, and real-world project experience.",
    images: ["https://nikhilsai.in/og-image.png"],
    creator: "@nikhilbuildss",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const ResumePage = () => {
  return <ResumeComponent />;
};

export default ResumePage;
