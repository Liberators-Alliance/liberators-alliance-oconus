import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

const BASE_URL = "https://oconus.liberators-alliance.org";

export const metadata: Metadata = {
  title: "Liberators Alliance — Building Alliances to Free the Oppressed",
  description:
    "Liberators Alliance is an international anti-trafficking and humanitarian relief nonprofit with five years of operations across Southeast Asia and Central America. We rescue. We relieve. We report.",
  alternates: { canonical: BASE_URL },
  openGraph: {
    title: "Liberators Alliance — Building Alliances to Free the Oppressed",
    description:
      "An international anti-trafficking and humanitarian relief organization. We operate in the places others won't, for the people no one else is coming for.",
    url: BASE_URL,
    images: [{ url: "/logo.png", alt: "Liberators Alliance logo" }],
  },
  twitter: {
    title: "Liberators Alliance — Building Alliances to Free the Oppressed",
    description:
      "An international anti-trafficking and humanitarian relief organization operating where others won't.",
    images: ["/logo.png"],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What does Liberators Alliance do?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Liberators Alliance is an international anti-trafficking and humanitarian relief organization. We conduct direct rescue operations to extract victims from trafficking situations, deliver humanitarian relief to populations in unstable environments where conventional aid cannot reach, and operate a network platform that connects vetted organizations to unmet needs across the humanitarian landscape.",
      },
    },
    {
      "@type": "Question",
      name: "Where does Liberators Alliance operate?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Liberators Alliance has five years of operational history across Southeast Asia, Central America, and beyond. We operate in high-risk, low-visibility environments that demand precision, patience, and experienced personnel. We do not publicly name specific countries for operational security reasons.",
      },
    },
    {
      "@type": "Question",
      name: "How is Liberators Alliance different from other anti-trafficking organizations?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We are an operational organization, not an advocacy group. Our work is intelligence-driven and field-based. Every operation is preceded by comprehensive assessment and intelligence gathering. We are committed to the full victim journey — from initial rescue through long-term aftercare and restoration — not just extraction.",
      },
    },
    {
      "@type": "Question",
      name: "How can I support Liberators Alliance?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "There are three ways to engage: volunteer (we operate a tiered volunteer structure with real vetting — no military background required), donate to fund operations and aftercare, or inquire about the Operators Council — our principal-level engagement tier for those who want to fund entire operations from initial intelligence through aftercare placement.",
      },
    },
    {
      "@type": "Question",
      name: "Is Liberators Alliance a registered nonprofit?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Liberators Alliance is a Colorado-based nonprofit organization headquartered in Castle Rock, Colorado, with international operations spanning Southeast Asia, Central America, and beyond.",
      },
    },
  ],
};

const faqs = [
  {
    q: "What does Liberators Alliance do?",
    a: "We conduct direct rescue operations, deliver humanitarian relief where conventional aid cannot reach, and operate a network platform connecting vetted organizations to unmet needs. Five years of operations across Southeast Asia, Central America, and beyond.",
  },
  {
    q: "Where does Liberators Alliance operate?",
    a: "We operate across Southeast Asia and Central America — high-density trafficking corridors and fragile environments where most organizations cannot or will not go. We do not name specific countries for operational security reasons.",
  },
  {
    q: "How is Liberators Alliance different from other anti-trafficking organizations?",
    a: "We are an operational organization, not an advocacy group. Intelligence precedes every phase. We are committed to the full victim journey — from initial rescue through long-term aftercare and restoration — not just extraction.",
  },
  {
    q: "How can I support Liberators Alliance?",
    a: "Three paths: volunteer (tiered structure, real vetting, no military background required), donate to fund operations and aftercare, or inquire about the Operators Council — our principal-level tier for those who want to fund entire operations end-to-end.",
  },
  {
    q: "Is Liberators Alliance a registered nonprofit?",
    a: "Yes. Liberators Alliance is a Colorado-based nonprofit headquartered in Castle Rock, Colorado, with international operations across two continents.",
  },
];

export default function Home() {
  return (
    <div className="bg-[#151515]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero */}
      <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
        <div className="absolute inset-0" aria-hidden="true">
          <Image
            src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1920&q=80"
            alt=""
            fill
            className="object-cover opacity-20"
            unoptimized
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#151515]/60 via-[#151515]/40 to-[#151515]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-24">
          <div className="max-w-4xl">
            <h1 className="font-display text-[clamp(4rem,10vw,9rem)] leading-none tracking-wide text-white mb-6">
              Building Alliances<br />
              <span className="text-[#F6DB06]">to Free the Oppressed</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/70 font-light leading-relaxed mb-6 max-w-2xl">
              We operate in the places others won&apos;t. For the people no one else is coming for.
            </p>
            <p className="text-base text-white/50 font-light leading-relaxed max-w-xl">
              Liberators Alliance is an international anti-trafficking and humanitarian relief organization with five years of operational history across Southeast Asia, Central America, and beyond. We rescue. We relieve. We report.
            </p>
            <div className="mt-12 flex flex-col sm:flex-row gap-4">
              <Link
                href="/mission"
                className="inline-block px-8 py-4 bg-[#F6DB06] text-[#151515] font-display text-lg tracking-widest uppercase hover:bg-white transition-colors duration-200"
              >
                The Mission
              </Link>
              <Link
                href="/get-involved"
                className="inline-block px-8 py-4 border border-white/20 text-white font-display text-lg tracking-widest uppercase hover:border-[#F6DB06] hover:text-[#F6DB06] transition-colors duration-200"
              >
                Get Involved
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Three Pillars */}
      <section className="py-28 px-6 bg-[#151515]" aria-labelledby="pillars-heading">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs tracking-[0.3em] uppercase text-[#F6DB06] mb-4" aria-hidden="true">What We Do</p>
          <h2 id="pillars-heading" className="font-display text-5xl md:text-6xl text-white mb-16">Three Pillars</h2>

          <div className="grid md:grid-cols-3 gap-px bg-white/5">
            {[
              {
                label: "Rescue",
                body: "Direct intervention to extract victims from trafficking situations in high-risk international environments.",
                img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
                imgAlt: "Aerial view of mountainous terrain representing remote operational environments",
              },
              {
                label: "Relief",
                body: "High-risk humanitarian relief for vulnerable populations in unstable environments where conventional aid cannot reach.",
                img: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80",
                imgAlt: "Humanitarian aid workers in a remote field environment",
              },
              {
                label: "Report",
                body: "A network platform connecting vetted organizations to unmet needs across the humanitarian landscape.",
                badge: "Coming Soon",
                img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
                imgAlt: "Satellite imagery representing the global intelligence and reporting network",
              },
            ].map((pillar) => (
              <div key={pillar.label} className="relative bg-[#1A1A1A] group overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={pillar.img}
                    alt={pillar.imgAlt}
                    fill
                    className="object-cover opacity-30 group-hover:opacity-40 group-hover:scale-105 transition-all duration-700"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] to-transparent" aria-hidden="true" />
                </div>
                <div className="p-8 pt-4">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="w-8 h-px bg-[#F6DB06]" aria-hidden="true" />
                    <h3 className="font-display text-3xl text-white tracking-widest">{pillar.label}</h3>
                    {pillar.badge && (
                      <span className="text-xs tracking-widest uppercase text-[#F6DB06] border border-[#F6DB06]/40 px-2 py-0.5">
                        {pillar.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-white/50 font-light leading-relaxed text-sm">{pillar.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Get Involved Preview */}
      <section className="py-28 px-6 bg-[#1A1A1A] border-t border-white/5" aria-labelledby="paths-heading">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs tracking-[0.3em] uppercase text-[#F6DB06] mb-4" aria-hidden="true">How to Get Involved</p>
          <h2 id="paths-heading" className="font-display text-5xl md:text-6xl text-white mb-16">Three Paths</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Volunteer",
                desc: "Tiered structure. Real vetting. Not for everyone — that's the point.",
                href: "/get-involved#volunteer",
                cta: "Apply",
              },
              {
                title: "Donate",
                desc: "Fund operations, aftercare, and relief efforts across two continents.",
                href: "/get-involved#donate",
                cta: "Support the Mission",
              },
              {
                title: "Operators Council",
                desc: "The founding principal tier for those who want to be part of what makes it possible.",
                href: "/get-involved#operators-council",
                cta: "Inquire",
              },
            ].map((path) => (
              <Link
                key={path.title}
                href={path.href}
                className="group block p-8 border border-white/10 hover:border-[#F6DB06]/40 transition-colors duration-300"
              >
                <h3 className="font-display text-3xl text-white tracking-widest mb-3 group-hover:text-[#F6DB06] transition-colors duration-200">
                  {path.title}
                </h3>
                <p className="text-white/40 font-light text-sm leading-relaxed mb-6">{path.desc}</p>
                <span className="text-xs tracking-[0.2em] uppercase text-[#F6DB06] flex items-center gap-2">
                  {path.cta}
                  <span className="group-hover:translate-x-1 transition-transform duration-200" aria-hidden="true">→</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-28 px-6 bg-[#151515] border-t border-white/5" aria-labelledby="faq-heading">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs tracking-[0.3em] uppercase text-[#F6DB06] mb-4" aria-hidden="true">Common Questions</p>
          <h2 id="faq-heading" className="font-display text-5xl md:text-6xl text-white mb-16">
            Frequently Asked Questions
          </h2>

          <dl className="space-y-0 border border-white/5">
            {faqs.map((faq, i) => (
              <div key={i} className="p-8 border-b border-white/5 last:border-b-0">
                <dt className="font-display text-xl md:text-2xl text-white tracking-wide mb-4">
                  {faq.q}
                </dt>
                <dd className="text-white/50 font-light text-sm leading-relaxed pl-0">
                  {faq.a}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </div>
  );
}
