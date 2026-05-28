import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-[#151515]">

      {/* Hero */}
      <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
        <div className="absolute inset-0">
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
      <section className="py-28 px-6 bg-[#151515]">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs tracking-[0.3em] uppercase text-[#F6DB06] mb-4">What We Do</p>
          <h2 className="font-display text-5xl md:text-6xl text-white mb-16">Three Pillars</h2>

          <div className="grid md:grid-cols-3 gap-px bg-white/5">
            {[
              {
                label: "Rescue",
                body: "Direct intervention to extract victims from trafficking situations in high-risk international environments.",
                img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
              },
              {
                label: "Relief",
                body: "High-risk humanitarian relief for vulnerable populations in unstable environments where conventional aid cannot reach.",
                img: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80",
              },
              {
                label: "Report",
                body: "A network platform connecting vetted organizations to unmet needs across the humanitarian landscape.",
                badge: "Coming Soon",
                img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
              },
            ].map((pillar) => (
              <div key={pillar.label} className="relative bg-[#1A1A1A] group overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={pillar.img}
                    alt={pillar.label}
                    fill
                    className="object-cover opacity-30 group-hover:opacity-40 group-hover:scale-105 transition-all duration-700"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] to-transparent" />
                </div>
                <div className="p-8 pt-4">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="w-8 h-px bg-[#F6DB06]" />
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
      <section className="py-28 px-6 bg-[#1A1A1A] border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs tracking-[0.3em] uppercase text-[#F6DB06] mb-4">How to Get Involved</p>
          <h2 className="font-display text-5xl md:text-6xl text-white mb-16">Three Paths</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Volunteer",
                desc: "Tiered structure. Real vetting. Not for everyone — that&apos;s the point.",
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
                <p className="text-white/40 font-light text-sm leading-relaxed mb-6"
                   dangerouslySetInnerHTML={{ __html: path.desc }} />
                <span className="text-xs tracking-[0.2em] uppercase text-[#F6DB06] flex items-center gap-2">
                  {path.cta}
                  <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
