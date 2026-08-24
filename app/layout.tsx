import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://eonaran.github.io"),
  title: "Efe Onaran",
  description:
    "Academic website of Efe Onaran, a probabilist working on stochastic processes, random geometric graphs, and stochastic topology.",
  authors: [{ name: "Efe Onaran" }],
  keywords: [
    "Efe Onaran",
    "probability",
    "stochastic processes",
    "random geometric graphs",
    "stochastic topology",
  ],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    title: "Efe Onaran",
    description: "Research, publications, teaching, and contact information for Efe Onaran.",
    type: "website",
    url: "/",
    siteName: "Efe Onaran",
  },
  twitter: {
    card: "summary",
    title: "Efe Onaran",
    description: "Research, publications, teaching, and contact information for Efe Onaran.",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
