import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";


const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "SaaS Dashboard — Analytics & Metrics",
    template: "%s | SaaS Dashboard",
  },
  description:
    "Track MRR, churn rate, user growth, and subscription analytics in real time. A full-stack SaaS metrics dashboard built with Next.js.",
  keywords: [
    "SaaS dashboard",
    "analytics",
    "MRR",
    "churn rate",
    "user growth",
    "subscription metrics",
  ],
  authors: [{ name: "Muqee" }],
  openGraph: {
    title: "SaaS Dashboard — Analytics & Metrics",
    description:
      "Track MRR, churn rate, user growth, and subscription analytics in real time.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "SaaS Dashboard — Analytics & Metrics",
    description:
      "Track MRR, churn rate, user growth, and subscription analytics in real time.",
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
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
