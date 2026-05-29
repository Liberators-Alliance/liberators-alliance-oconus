import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

const BASE_URL = "https://oconus.liberators-alliance.org";

export const metadata: Metadata = {
  title: "Liberators Alliance — Anti-Trafficking Nonprofit | Rescue · Relief · Report",
  description:
    "Liberators Alliance is an international anti-trafficking and humanitarian relief nonprofit with 5 years of operations across Southeast Asia and Central America. Donate, volunteer, or partner to help fight human trafficking.",
  alternates: { canonical: BASE_URL },
  openGraph: {
    title: "Liberators Alliance — Anti-Trafficking Nonprofit | Rescue · Relief · Report",
    description:
      "An international anti-trafficking and humanitarian relief organization operating where others won't. Donate or volunteer to help fight human trafficking.",
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
    title: "Liberators Alliance — Fight Human Trafficking | Donate & Volunteer",
    description:
      "International anti-trafficking operations in high-risk environments. Help rescue victims, fund relief, and fight trafficking.",
    images: [{ url: "/og-image.png", alt: "Liberators Alliance logo and tagline" }],
  },
};

// Three pillars as ItemList for Google rich results
const pillarsSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Liberators Alliance — Three Core Programs",
  description: "The three operational pillars of Liberators Alliance anti-trafficking and humanitarian work",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Rescue",
      description:
        "Direct intervention to extract victims from trafficking situations in high-risk international environments.",
      url: `${BASE_URL}/#rescue`,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Relief",
      description:
        "High-risk humanitarian relief for vulnerable populations in unstable environments where conventional aid cannot reach.",
      url: `${BASE_URL}/#relief`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Report",
      description:
        "A network platform connecting vetted organizations to unmet needs across the humanitarian landscape.",
      url: `${BASE_URL}/#report`,
    },
  ],
};

// FAQ schema — questions mirror real donor/volunteer search queries
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How can I donate to fight human trafficking?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can donate to Liberators Alliance to directly fund anti-trafficking rescue operations, victim aftercare, and humanitarian relief in high-risk environments that conventional aid organizations cannot access. Contact us at contactus@liberators-alliance.org to make a donation. Every dollar goes to field operations. For high-impact principal-level giving, inquire about the Operators Council — our founding donor tier where members fund entire operations end-to-end.",
      },
    },
    {
      "@type": "Question",
      name: "What anti-trafficking organizations can I donate to?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Liberators Alliance is a Colorado-based nonprofit anti-trafficking organization with five years of documented field operations across Southeast Asia and Central America. Unlike advocacy organizations, we are operationally focused — conducting direct rescues, delivering humanitarian relief, and building networks between vetted organizations. We are committed to the full victim journey: from extraction through long-term aftercare and restoration.",
      },
    },
    {
      "@type": "Question",
      name: "How can I volunteer to help stop human trafficking?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Liberators Alliance operates a tiered volunteer structure. Entry-level positions do not require military or law enforcement experience — the requirements are adaptability, commitment, and willingness to do difficult work in unfamiliar environments. Vetting is real. Acceptance is earned. Submit your interest at contactus@liberators-alliance.org with the subject 'Volunteer Inquiry.'",
      },
    },
    {
      "@type": "Question",
      name: "What makes Liberators Alliance different from other anti-trafficking nonprofits?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Liberators Alliance is an operational organization, not an advocacy group. We execute in the field. Every operation is intelligence-driven and multi-phase — no operation launches without a complete picture of the environment. We are committed to the full victim journey, from rescue through long-term restoration. We also build networks between vetted organizations, multiplying impact across the humanitarian sector.",
      },
    },
    {
      "@type": "Question",
      name: "Is Liberators Alliance a legitimate registered nonprofit?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Liberators Alliance is a registered Colorado-based nonprofit organization headquartered in Castle Rock, Colorado, with five years of operational history across Southeast Asia and Central America. Contact us at contactus@liberators-alliance.org for more information.",
      },
    },
  ],
};

const faqs = [
  {
    q: "How can I donate to fight human trafficking?",
    a: "Contact us at contactus@liberators-alliance.org to direct your donation toward rescue operations, victim aftercare, and humanitarian relief in environments conventional aid organizations can't access. For high-impact principal-level giving, inquire about the Operators Council — where members fund entire operations end-to-end.",
  },
  {
    q: "What anti-trafficking organizations can I donate to?",
    a: "Liberators Alliance is a Colorado-based anti-trafficking nonprofit with five years of documented field operations across Southeast Asia and Central America. We are operationally focused — direct rescues, humanitarian relief, victim aftercare — not just advocacy. We are committed to the full victim journey.",
  },
  {
    q: "How can I volunteer to help stop human trafficking?",
    a: "We operate a tiered volunteer structure. No military or law enforcement background required for entry-level positions — just adaptability, commitment, and willingness to do hard things in unfamiliar places. Vetting is real. Acceptance is earned. Submit your interest to contactus@liberators-alliance.org.",
  },
  {
    q: "What makes Liberators Alliance different from other anti-trafficking nonprofits?",
    a: "We are an operational organization, not an advocacy group. Every operation is intelligence-driven and multi-phase. We execute in the field. And we are committed to the full victim journey — from the moment of rescue through long-term restoration. Not just extraction.",
  },
  {
    q: "Is Liberators Alliance a legitimate registered nonprofit?",
    a: "Yes. Liberators Alliance is a registered Colorado nonprofit headquartered in Castle Rock, Colorado, with five years of operational history across Southeast Asia and Central America.",
  },
];

export default function Home() {
  return (
    <div className="bg-[#151515]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pillarsSchema) }}
      />
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
                id: "rescue",
                label: "Rescue",
                body: "Direct intervention to extract victims from trafficking situations in high-risk international environments.",
                img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
                imgAlt: "Aerial view of mountainous terrain representing remote operational environments where Liberators Alliance conducts anti-trafficking rescue operations",
              },
              {
                id: "relief",
                label: "Relief",
                body: "High-risk humanitarian relief for vulnerable populations in unstable environments where conventional aid cannot reach.",
                img: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80",
                imgAlt: "Humanitarian aid workers operating in a remote field environment, representing Liberators Alliance relief operations",
              },
              {
                id: "report",
                label: "Report",
                body: "A network platform connecting vetted organizations to unmet needs across the humanitarian landscape.",
                badge: "Coming Soon",
                img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
                imgAlt: "Satellite view of Earth representing the global intelligence and reporting network for anti-trafficking organizations",
              },
            ].map((pillar) => (
              <div id={pillar.id} key={pillar.label} className="relative bg-[#1A1A1A] group overflow-hidden">
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

          <dl className="border border-white/5">
            {faqs.map((faq, i) => (
              <div key={i} className="p-8 border-b border-white/5 last:border-b-0">
                <dt className="font-display text-xl md:text-2xl text-white tracking-wide mb-4">
                  {faq.q}
                </dt>
                <dd className="text-white/50 font-light text-sm leading-relaxed">
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
