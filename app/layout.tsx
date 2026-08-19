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
    title: "Efe Onaran | Probability & Stochastic Topology",
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
      title: "Efe Onaran | Probability & Stochastic Topology",
      description: "Probability at the meeting point of space, time, and shape.",
      type: "website",
      url: origin,
      images: [{ url: `${origin}/og.png`, width: 1730, height: 909, alt: "Efe Onaran — probability, stochastic topology, and random geometry" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Efe Onaran | Probability & Stochastic Topology",
      description: "Probability at the meeting point of space, time, and shape.",
      images: [`${origin}/og.png`],
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
