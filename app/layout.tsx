import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const BASE_URL = "https://oconus.liberators-alliance.org";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Liberators Alliance — Building Alliances to Free the Oppressed",
    template: "%s | Liberators Alliance",
  },
  description:
    "Liberators Alliance is an international anti-trafficking and humanitarian relief nonprofit operating across Southeast Asia, Central America, and beyond. We rescue. We relieve. We report.",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Liberators Alliance",
    url: BASE_URL,
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 800,
        alt: "Liberators Alliance — Building Alliances to Free the Oppressed",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@liberatorsalliance",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "NGO",
  name: "Liberators Alliance",
  alternateName: "Liberators Alliance International",
  url: BASE_URL,
  logo: `${BASE_URL}/logo.png`,
  description:
    "An international anti-trafficking and humanitarian relief organization with five years of operational history across Southeast Asia, Central America, and beyond.",
  foundingLocation: {
    "@type": "Place",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Castle Rock",
      addressRegion: "CO",
      addressCountry: "US",
    },
  },
  areaServed: [
    { "@type": "Place", name: "Southeast Asia" },
    { "@type": "Place", name: "Central America" },
  ],
  email: "contactus@liberators-alliance.org",
  sameAs: [],
  knowsAbout: [
    "Human trafficking prevention",
    "Victim rescue and extraction",
    "Humanitarian relief operations",
    "Anti-trafficking intelligence",
    "Victim aftercare and restoration",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
