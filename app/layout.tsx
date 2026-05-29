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
    "Liberators Alliance is an international anti-trafficking and humanitarian relief nonprofit operating across Southeast Asia and Central America. We rescue. We relieve. We report.",
  keywords: [
    "anti-trafficking organization",
    "anti trafficking nonprofit",
    "fight human trafficking",
    "donate to fight trafficking",
    "how to help stop human trafficking",
    "volunteer anti trafficking",
    "humanitarian relief nonprofit",
    "human trafficking rescue",
    "anti trafficking charity",
    "international nonprofit operations",
    "Liberators Alliance",
    "Colorado nonprofit",
    "how to donate anti trafficking",
    "organizations fighting trafficking",
    "anti trafficking donation",
  ],
  authors: [{ name: "Liberators Alliance", url: BASE_URL }],
  creator: "Liberators Alliance",
  publisher: "Liberators Alliance",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Liberators Alliance",
    url: BASE_URL,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Liberators Alliance — Building Alliances to Free the Oppressed",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [{ url: "/og-image.png", alt: "Liberators Alliance — Building Alliances to Free the Oppressed" }],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  other: {
    // Geographic meta tags for local SEO and entity disambiguation
    "geo.region": "US-CO",
    "geo.placename": "Castle Rock, Colorado",
    "geo.position": "39.3722;-104.8561",
    "ICBM": "39.3722, -104.8561",
    // Theme
    "theme-color": "#151515",
    "msapplication-TileColor": "#F6DB06",
    // AI/LLM crawler hints
    "llms": `${BASE_URL}/llms.txt`,
  },
};

// Full NGO schema — appears on every page via layout
const orgSchema = {
  "@context": "https://schema.org",
  "@type": "NGO",
  "@id": `${BASE_URL}/#organization`,
  name: "Liberators Alliance",
  alternateName: ["Liberators Alliance International", "Liberators Alliance OCONUS"],
  url: BASE_URL,
  logo: {
    "@type": "ImageObject",
    url: `${BASE_URL}/logo.png`,
    width: 400,
    height: 400,
  },
  image: `${BASE_URL}/og-image.png`,
  description:
    "An international anti-trafficking and humanitarian relief organization with five years of operational history across Southeast Asia and Central America. Intelligence-driven, field-based, committed to the full victim journey from rescue through long-term restoration.",
  slogan: "Building Alliances to Free the Oppressed",
  foundingDate: "2021",
  nonprofitStatus: "Nonprofit501c3",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Castle Rock",
    addressRegion: "CO",
    addressCountry: "US",
  },
  areaServed: [
    { "@type": "Place", name: "Southeast Asia" },
    { "@type": "Place", name: "Central America" },
  ],
  email: "contactus@liberators-alliance.org",
  knowsAbout: [
    "Human trafficking prevention and rescue",
    "Anti-trafficking operations",
    "Victim aftercare and long-term restoration",
    "Humanitarian relief in unstable environments",
    "Intelligence-driven field operations",
    "International nonprofit operations",
    "Trauma recovery programs",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Ways to Support Liberators Alliance",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Donate to Anti-Trafficking Operations",
          description:
            "Fund direct rescue operations, victim aftercare, and humanitarian relief efforts in high-risk international environments.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Volunteer with Liberators Alliance",
          description:
            "Join our tiered volunteer structure. No military background required. Vetting is real. Acceptance is earned.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Operators Council Principal Membership",
          description:
            "Fund entire operations end-to-end, from initial intelligence through final aftercare placement. Average commitment $250,000+.",
        },
      },
    ],
  },
  potentialAction: [
    {
      "@type": "DonateAction",
      name: "Donate to Liberators Alliance",
      description: "Support anti-trafficking rescue operations, humanitarian relief, and victim aftercare",
      recipient: {
        "@type": "NGO",
        name: "Liberators Alliance",
        "@id": `${BASE_URL}/#organization`,
      },
    },
    {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${BASE_URL}/?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  ],
  sameAs: [],
};

// Website schema for sitelinks/search
const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${BASE_URL}/#website`,
  url: BASE_URL,
  name: "Liberators Alliance",
  description: "International anti-trafficking and humanitarian relief nonprofit",
  publisher: {
    "@id": `${BASE_URL}/#organization`,
  },
  inLanguage: "en-US",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Preconnect to Google Fonts to reduce render-blocking latency */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
