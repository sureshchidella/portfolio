import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Toaster } from "sonner";
import CustomCursor from "@/components/CustomCursor";
import LoadingScreen from "@/components/LoadingScreen";
import ScrollProgress from "@/components/ScrollProgress";
import BackToTop from "@/components/BackToTop";
import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata: Metadata = {
  title: "Suresh Venkata Chidella — Backend Software Engineer",
  description:
    "Backend Software Engineer with 2+ years of experience building production microservices for Mastercard and Axis Bank. Java 17, Spring Boot, CQRS, Event Sourcing, Axon Framework, Kafka.",
  keywords: [
    "Backend Software Engineer",
    "Java",
    "Spring Boot",
    "Microservices",
    "REST APIs",
    "CQRS",
    "Event Sourcing",
    "Axon Framework",
    "Kafka",
    "Mastercard",
    "Axis Bank",
    "Backend Engineer",
    "Suresh Chidella",
    "Fintech",
  ],
  authors: [{ name: "Suresh Venkata Chidella" }],
  openGraph: {
    title: "Suresh Venkata Chidella — Backend Software Engineer",
    description:
      "Backend engineer specializing in Java, Spring Boot, CQRS/Event Sourcing, and microservices for enterprise clients.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Suresh Venkata Chidella — Backend Software Engineer",
    description: "Backend Engineer | Java · Spring Boot · CQRS · Event Sourcing · Fintech",
  },
  robots: {
    index: true,
    follow: true,
  },
  // Apple / iOS
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Suresh Chidella",
  },
  // Android / Chrome
  applicationName: "Suresh Chidella Portfolio",
  formatDetection: {
    telephone: false,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#070711" },
    { media: "(prefers-color-scheme: light)", color: "#f8fafc" },
  ],
};

interface RootLayoutProps {
  readonly children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
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
        {/* Windows tile color */}
        <meta name="msapplication-TileColor" content="#070711" />
        {/* Mobile web-app */}
        <meta name="mobile-web-app-capable" content="yes" />
      </head>
      <body className="noise">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange={false}
        >
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
        </ThemeProvider>
      </body>
    </html>
  );
}
