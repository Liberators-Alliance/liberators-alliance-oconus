import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";

const BASE_URL = "https://oconus.liberators-alliance.org";

export const metadata: Metadata = {
  title: "Get Involved — Donate, Volunteer, or Fight Trafficking Today",
  description:
    "Help fight human trafficking: donate to fund rescue operations and victim aftercare, volunteer through our tiered structure, or join the Operators Council. Liberators Alliance — five years of anti-trafficking operations across two continents.",
  alternates: { canonical: `${BASE_URL}/get-involved` },
  openGraph: {
    title: "Help Fight Human Trafficking — Donate or Volunteer | Liberators Alliance",
    description:
      "Donate to anti-trafficking operations, volunteer with a field-based nonprofit, or join the Operators Council. Real vetting. Real operations. Real impact.",
    url: `${BASE_URL}/get-involved`,
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
    title: "Donate or Volunteer to Fight Human Trafficking | Liberators Alliance",
    description:
      "Fund anti-trafficking rescues, volunteer with real vetting, or join our principal-level Operators Council. Every dollar goes to the field.",
    images: [{ url: "/og-image.png", alt: "Liberators Alliance — Building Alliances to Free the Oppressed" }],
  },
};

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${BASE_URL}/get-involved/#webpage`,
  name: "Get Involved — Donate to Fight Human Trafficking | Liberators Alliance",
  description:
    "Donate, volunteer, or join the Operators Council to support anti-trafficking rescue operations and humanitarian relief.",
  url: `${BASE_URL}/get-involved`,
  isPartOf: { "@type": "WebSite", "@id": `${BASE_URL}/#website` },
  about: { "@type": "NGO", "@id": `${BASE_URL}/#organization` },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
    { "@type": "ListItem", position: 2, name: "Get Involved", item: `${BASE_URL}/get-involved` },
  ],
};

const donateSchema = {
  "@context": "https://schema.org",
  "@type": "DonateAction",
  "@id": `${BASE_URL}/get-involved/#donate-action`,
  name: "Donate to Liberators Alliance Anti-Trafficking Operations",
  description:
    "Fund direct anti-trafficking rescue operations, victim aftercare, and humanitarian relief in high-risk international environments where conventional aid cannot reach.",
  recipient: {
    "@type": "NGO",
    "@id": `${BASE_URL}/#organization`,
    name: "Liberators Alliance",
  },
  target: {
    "@type": "EntryPoint",
    urlTemplate: `mailto:contactus@liberators-alliance.org?subject=Donation%20Inquiry`,
    actionPlatform: ["http://schema.org/DesktopWebPlatform", "http://schema.org/MobileWebPlatform"],
  },
};

const volunteerSchema = {
  "@context": "https://schema.org",
  "@type": "VolunteerAction",
  "@id": `${BASE_URL}/get-involved/#volunteer-action`,
  name: "Volunteer with Liberators Alliance to Fight Human Trafficking",
  description:
    "Join Liberators Alliance's tiered volunteer structure. No military or law enforcement background required for entry-level positions. Vetting is real. Acceptance is earned.",
  agent: {
    "@type": "Organization",
    "@id": `${BASE_URL}/#organization`,
    name: "Liberators Alliance",
  },
  target: {
    "@type": "EntryPoint",
    urlTemplate: `mailto:contactus@liberators-alliance.org?subject=Volunteer%20Inquiry`,
    actionPlatform: ["http://schema.org/DesktopWebPlatform", "http://schema.org/MobileWebPlatform"],
  },
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Help Fight Human Trafficking with Liberators Alliance",
  description: "Three ways to support anti-trafficking operations and humanitarian relief",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Volunteer",
      text: "Apply through our tiered volunteer structure. No military background required. Submit your name, email, and background to contactus@liberators-alliance.org with subject 'Volunteer Inquiry.'",
      url: `${BASE_URL}/get-involved#volunteer`,
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Donate",
      text: "Contact us at contactus@liberators-alliance.org to fund rescue operations, victim aftercare, or humanitarian relief efforts.",
      url: `${BASE_URL}/get-involved#donate`,
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Join the Operators Council",
      text: "Inquire about principal-level membership to fund entire operations end-to-end. Contact contactus@liberators-alliance.org with subject 'Operators Council Inquiry.'",
      url: `${BASE_URL}/get-involved#operators-council`,
    },
  ],
};

export default function GetInvolved() {
  return (
    <div className="bg-[#151515]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(donateSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(volunteerSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />

      {/* Page Header */}
      <section className="relative pt-40 pb-20 px-6 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0" aria-hidden="true">
          <Image
            src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1920&q=80"
            alt=""
            fill
            className="object-cover opacity-10"
            unoptimized
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#151515]/80 to-[#151515]" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <p className="text-xs tracking-[0.3em] uppercase text-[#F6DB06] mb-6" aria-hidden="true">Get Involved</p>
          <h1 className="font-display text-[clamp(3rem,7vw,6rem)] leading-none text-white">
            Three Ways<br />
            <span className="text-[#F6DB06]">to Engage</span>
          </h1>
        </div>
      </section>

      {/* Section 1 — Volunteer */}
      <section id="volunteer" className="py-28 px-6 bg-[#151515]" aria-labelledby="volunteer-heading">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-xs tracking-[0.3em] uppercase text-[#F6DB06] mb-6" aria-hidden="true">01 / Volunteer</p>
              <h2 id="volunteer-heading" className="font-display text-5xl md:text-6xl text-white leading-none mb-6">
                This isn&apos;t for everyone.
                <span className="text-[#F6DB06]"> That&apos;s the point.</span>
              </h2>
              <p className="text-white/55 font-light leading-relaxed mb-6">
                Liberators Alliance operates with a tiered volunteer structure. Entry-level positions require no military or law enforcement background — just adaptability, commitment, and the willingness to do hard things in unfamiliar places.
              </p>
              <p className="text-white/55 font-light leading-relaxed">
                Vetting is real. Acceptance is earned.
              </p>
            </div>
            <div>
              <h3 className="sr-only">Volunteer Application Form</h3>
              <ContactForm subject="Volunteer Inquiry" />
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 — Donate */}
      <section id="donate" className="py-28 px-6 bg-[#1A1A1A] border-t border-white/5" aria-labelledby="donate-heading">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative h-72 overflow-hidden hidden md:block">
              <Image
                src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&q=80"
                alt="People working together in a humanitarian field environment, representing the operations funded by donations to Liberators Alliance"
                fill
                className="object-cover opacity-50"
                unoptimized
              />
              <div className="absolute inset-0 border border-[#F6DB06]/10" aria-hidden="true" />
            </div>
            <div>
              <p className="text-xs tracking-[0.3em] uppercase text-[#F6DB06] mb-6" aria-hidden="true">02 / Support</p>
              <h2 id="donate-heading" className="font-display text-5xl md:text-6xl text-white leading-none mb-6">
                Fund the Mission
              </h2>
              <p className="text-white/55 font-light leading-relaxed mb-4">
                Every operation is funded by people who decided the problem was worth solving.
              </p>
              <p className="text-white/55 font-light leading-relaxed mb-8">
                Donations fund direct operations, victim aftercare, and relief efforts reaching populations conventional aid organizations cannot access. Every dollar is put to work in the field.
              </p>
              <button
                className="inline-block px-8 py-4 bg-[#F6DB06] text-[#151515] font-display text-lg tracking-widest uppercase hover:bg-white transition-colors duration-200 cursor-not-allowed opacity-80"
                disabled
                aria-label="Donate — online giving coming soon"
              >
                Donate — Coming Soon
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 — Operators Council */}
      <section id="operators-council" className="py-28 px-6 bg-[#0E0E0E] border-t border-[#F6DB06]/10 relative overflow-hidden" aria-labelledby="council-heading">
        <div className="absolute inset-0 opacity-5" aria-hidden="true">
          <div className="absolute inset-0" style={{ backgroundImage: "repeating-linear-gradient(0deg, #F6DB06 0px, #F6DB06 1px, transparent 1px, transparent 60px), repeating-linear-gradient(90deg, #F6DB06 0px, #F6DB06 1px, transparent 1px, transparent 60px)" }} />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <p className="text-xs tracking-[0.3em] uppercase text-[#F6DB06] mb-6" aria-hidden="true">03 / Principal Tier</p>
          <div className="flex items-start gap-4 mb-4">
            <span className="w-12 h-px bg-[#F6DB06] flex-shrink-0 mt-4" aria-hidden="true" />
            <h2 id="council-heading" className="font-display text-5xl md:text-6xl text-white leading-none">
              The Operators Council
            </h2>
          </div>

          <p className="text-xl text-white/70 font-light leading-relaxed mb-6 max-w-2xl">
            For those who don&apos;t just want to support the mission — they want to be what makes it possible.
          </p>

          <div className="my-10 pl-8 border-l-2 border-[#F6DB06]">
            <p className="text-white/60 font-light leading-relaxed mb-4">
              Operators Council members are the foundational capital of Liberators Alliance. Their investment doesn&apos;t fund a line item — it funds an entire operation, from initial intelligence through final aftercare placement.
            </p>
            <p className="text-white/60 font-light leading-relaxed mb-4">
              In return, Council members receive direct access to mission briefs from real Operators and operational updates unavailable to the public.
            </p>
            <p className="text-white/60 font-light leading-relaxed">
              This is not a donor recognition program. It is an invitation to the inner circle of one of the most consequential anti-trafficking efforts in the world.
            </p>
          </div>

          <p className="text-sm text-white/30 font-light mb-10">Average commitment: $250,000+</p>

          <Link
            href="/contact?subject=Operators+Council+Inquiry"
            className="inline-block px-10 py-5 bg-[#F6DB06] text-[#151515] font-display text-xl tracking-widest uppercase hover:bg-white transition-colors duration-200"
          >
            Inquire about the Operators Council
          </Link>
        </div>
      </section>
    </div>
  );
}
