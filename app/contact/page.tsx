import type { Metadata } from "next";

const BASE_URL = "https://oconus.liberators-alliance.org";

export const metadata: Metadata = {
  title: "Contact — Reach Liberators Alliance",
  description:
    "Contact Liberators Alliance for general inquiries, volunteer interest, or Operators Council information. Based in Castle Rock, Colorado — operational internationally.",
  alternates: { canonical: `${BASE_URL}/contact` },
  openGraph: {
    title: "Contact | Liberators Alliance",
    description:
      "Reach out about general inquiries, volunteering, or the Operators Council. Castle Rock, Colorado — operational internationally.",
    url: `${BASE_URL}/contact`,
    images: [{ url: "/logo.png", alt: "Liberators Alliance logo" }],
  },
  twitter: {
    title: "Contact | Liberators Alliance",
    description:
      "Reach out about general inquiries, volunteering, or the Operators Council.",
    images: ["/logo.png"],
  },
};

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact — Liberators Alliance",
  description:
    "Contact page for Liberators Alliance. General inquiries, volunteer interest, and Operators Council inquiries.",
  url: `${BASE_URL}/contact`,
  isPartOf: { "@type": "WebSite", url: BASE_URL },
  mainEntity: {
    "@type": "NGO",
    name: "Liberators Alliance",
    email: "contactus@liberators-alliance.org",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Castle Rock",
      addressRegion: "CO",
      addressCountry: "US",
    },
  },
};

export default function Contact() {
  const contacts = [
    {
      label: "General Inquiry",
      subject: "General Inquiry",
      desc: "Questions about Liberators Alliance, our programs, or our work.",
    },
    {
      label: "Volunteer Interest",
      subject: "Volunteer Inquiry",
      desc: "Interested in joining as a volunteer? Tell us about yourself.",
    },
    {
      label: "Operators Council",
      subject: "Operators Council Inquiry",
      desc: "Inquire about principal-level engagement with the Operators Council.",
    },
  ];

  return (
    <div className="bg-[#151515] min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />

      {/* Header */}
      <section className="pt-40 pb-20 px-6 border-b border-white/5">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs tracking-[0.3em] uppercase text-[#F6DB06] mb-6" aria-hidden="true">Contact</p>
          <h1 className="font-display text-[clamp(3rem,8vw,7rem)] leading-none text-white mb-6">
            Reach Out
          </h1>
          <p className="text-white/40 font-light leading-relaxed">
            Castle Rock, Colorado — operational internationally.
          </p>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-24 px-6" aria-labelledby="contact-options-heading">
        <h2 id="contact-options-heading" className="sr-only">Contact Options</h2>
        <div className="max-w-3xl mx-auto space-y-px">
          {contacts.map((contact) => (
            <a
              key={contact.label}
              href={`mailto:contactus@liberators-alliance.org?subject=${encodeURIComponent(contact.subject)}`}
              className="group flex flex-col md:flex-row md:items-center md:justify-between gap-4 p-8 bg-[#1A1A1A] hover:bg-[#1E1E1E] border-l-2 border-transparent hover:border-[#F6DB06] transition-all duration-200"
              aria-label={`${contact.label} — email us with subject: ${contact.subject}`}
            >
              <div>
                <h3 className="font-display text-2xl text-white tracking-widest mb-2 group-hover:text-[#F6DB06] transition-colors duration-200">
                  {contact.label}
                </h3>
                <p className="text-white/40 font-light text-sm">{contact.desc}</p>
              </div>
              <div className="flex-shrink-0 text-right">
                <p className="text-xs text-white/30 tracking-widest uppercase mb-1">Subject</p>
                <p className="text-sm text-white/50 font-light">{contact.subject}</p>
                <p className="text-xs text-[#F6DB06] tracking-widest uppercase mt-3 flex items-center gap-1 md:justify-end">
                  Email us
                  <span className="group-hover:translate-x-1 transition-transform duration-200" aria-hidden="true">→</span>
                </p>
              </div>
            </a>
          ))}
        </div>

        <div className="max-w-3xl mx-auto mt-16 pt-8 border-t border-white/5">
          <p className="text-xs tracking-widest uppercase text-white/30 mb-3">Direct Email</p>
          <a
            href="mailto:contactus@liberators-alliance.org"
            className="text-lg text-white/60 hover:text-[#F6DB06] transition-colors duration-200 font-light"
          >
            contactus@liberators-alliance.org
          </a>
        </div>
      </section>
    </div>
  );
}
