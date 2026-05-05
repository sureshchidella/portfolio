import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "sonner";
import CustomCursor from "@/components/CustomCursor";
import LoadingScreen from "@/components/LoadingScreen";
import ScrollProgress from "@/components/ScrollProgress";
import BackToTop from "@/components/BackToTop";

export const metadata: Metadata = {
  title: "Suresh Venkata Chidella — Software Engineer",
  description:
    "Software Engineer with 2+ years of experience building microservices and REST APIs using Java and Spring Boot. Worked on production systems for Mastercard and Axis Bank.",
  keywords: [
    "Software Engineer",
    "Java",
    "Spring Boot",
    "Microservices",
    "REST APIs",
    "Mastercard",
    "Axis Bank",
    "Backend Engineer",
    "Suresh Chidella",
    "Fintech",
  ],
  authors: [{ name: "Suresh Venkata Chidella" }],
  openGraph: {
    title: "Suresh Venkata Chidella — Software Engineer",
    description:
      "Backend engineer specializing in Java, Spring Boot, and microservices for enterprise clients.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Suresh Venkata Chidella — Software Engineer",
    description: "Backend engineer | Java · Spring Boot · Microservices · Fintech",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Syne:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="noise">
        {/* Global UI overlays */}
        <LoadingScreen />
        <CustomCursor />
        <ScrollProgress />
        <BackToTop />

        {/* Toast notifications */}
        <Toaster
          theme="dark"
          position="bottom-right"
          toastOptions={{
            style: {
              background: "rgba(14,14,26,0.95)",
              border: "1px solid rgba(99,102,241,0.2)",
              color: "#f8fafc",
              backdropFilter: "blur(12px)",
            },
          }}
        />

        {children}
      </body>
    </html>
  );
}
