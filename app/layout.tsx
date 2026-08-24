import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "localhost:3000";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.startsWith("localhost") ? "http" : "https");
  const origin = `${protocol}://${host}`;

  return {
    metadataBase: new URL(origin),
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
    openGraph: {
      title: "Efe Onaran",
      description: "Research, publications, teaching, and contact information for Efe Onaran.",
      type: "website",
      url: origin,
    },
    twitter: {
      card: "summary",
      title: "Efe Onaran",
      description: "Research, publications, teaching, and contact information for Efe Onaran.",
    },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
