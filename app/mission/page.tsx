import Image from "next/image";
import Link from "next/link";

export default function Mission() {
  return (
    <div className="bg-[#151515]">

      {/* Hero */}
      <section className="relative pt-40 pb-28 px-6 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1519074069444-1ba4fff66d16?w=1920&q=80"
            alt=""
            fill
            className="object-cover opacity-15"
            unoptimized
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#151515]/80 to-[#151515]" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <p className="text-xs tracking-[0.3em] uppercase text-[#F6DB06] mb-6">The Mission</p>
          <h1 className="font-display text-[clamp(3.5rem,8vw,7rem)] leading-none text-white mb-10">
            Where Others<br />
            <span className="text-[#F6DB06]">Won&apos;t Go</span>
          </h1>
          <p className="text-lg md:text-xl text-white/60 font-light leading-relaxed max-w-2xl">
            We go where the problem is. That means operating in high-risk, low-visibility environments that demand precision, patience, and the right people.
          </p>
        </div>
      </section>

      {/* Operational Approach */}
      <section className="py-24 px-6 bg-[#151515]">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-5 gap-12 items-start">
            <div className="md:col-span-3 space-y-6">
              <h2 className="font-display text-4xl md:text-5xl text-white">Operational Approach</h2>
              <p className="text-white/55 font-light leading-relaxed">
                Intelligence-driven. Multi-phase. Built around preparation before action. No operation is launched without a complete picture of the environment — who is present, what conditions exist, and what outcomes are achievable.
              </p>
              <p className="text-white/55 font-light leading-relaxed">
                Every engagement moves through deliberate stages: understanding the landscape, gathering ground truth, executing with precision, and ensuring those we reach are not simply moved — they are restored. We assess before we act. We prepare before we move. The work that happens before extraction determines everything that follows.
              </p>
              <p className="text-white/55 font-light leading-relaxed">
                Our operational structure is not public. It does not need to be. What matters is that it works.
              </p>
            </div>
            <div className="md:col-span-2">
              <div className="relative h-72 md:h-96 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1448375240586-882707db888b?w=800&q=80"
                  alt="Operational terrain"
                  fill
                  className="object-cover opacity-60"
                  unoptimized
                />
                <div className="absolute inset-0 border border-[#F6DB06]/10" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Regional Presence */}
      <section className="py-24 px-6 bg-[#1A1A1A] border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs tracking-[0.3em] uppercase text-[#F6DB06] mb-4">Regional Presence</p>
          <h2 className="font-display text-4xl md:text-5xl text-white mb-10">Where We Operate</h2>

          <div className="grid md:grid-cols-2 gap-px bg-white/5">
            {[
              {
                region: "Southeast Asia",
                desc: "One of the highest-density trafficking corridors in the world. Complex terrain, fragile governance, and deeply embedded networks require long-term, relationship-driven operations — not one-time interventions.",
                img: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=800&q=80",
              },
              {
                region: "Central America",
                desc: "Intersecting migration routes, economic instability, and criminal infrastructure create compounding vulnerability. Our presence is built on local knowledge and sustained commitment.",
                img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
              },
            ].map((r) => (
              <div key={r.region} className="bg-[#151515] group overflow-hidden">
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={r.img}
                    alt={r.region}
                    fill
                    className="object-cover opacity-40 group-hover:opacity-50 group-hover:scale-105 transition-all duration-700"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#151515] to-transparent" />
                </div>
                <div className="p-8 pt-4">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="w-6 h-px bg-[#F6DB06]" />
                    <h3 className="font-display text-2xl text-white tracking-widest">{r.region}</h3>
                  </div>
                  <p className="text-white/50 font-light text-sm leading-relaxed">{r.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="py-24 px-6 bg-[#151515]">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs tracking-[0.3em] uppercase text-[#F6DB06] mb-4">Differentiators</p>
          <h2 className="font-display text-4xl md:text-5xl text-white mb-12">What Sets Us Apart</h2>

          <div className="space-y-0 border border-white/5">
            {[
              {
                title: "Operators, Not Advocates",
                body: "We are an operational organization. The work is done in the field, not in conference rooms. Every program we run exists because we determined it was the most effective path to a specific outcome.",
              },
              {
                title: "Intelligence Before Action",
                body: "We do not move without a complete operational picture. Intelligence precedes every phase. This is not a preference — it is a structural requirement that determines whether we succeed or fail.",
              },
              {
                title: "The Full Victim Journey",
                body: "Extraction is not the finish line. We are committed to aftercare, restoration, and long-term placement for every individual we reach. The operation does not end at rescue.",
              },
              {
                title: "Network Builder",
                body: "We do not operate in isolation. Liberators Alliance exists to connect vetted organizations across the humanitarian landscape — surfacing unmet needs, building operational alliances, and multiplying impact across the sector.",
              },
            ].map((item, i) => (
              <div key={i} className="p-8 border-b border-white/5 last:border-b-0">
                <div className="flex gap-6">
                  <span className="w-8 h-px bg-[#F6DB06] flex-shrink-0 mt-3" />
                  <div>
                    <h3 className="font-display text-2xl text-white tracking-wide mb-3">{item.title}</h3>
                    <p className="text-white/50 font-light text-sm leading-relaxed">{item.body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="py-24 px-6 bg-[#1A1A1A] border-t border-white/5">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-display text-3xl md:text-4xl text-white leading-snug mb-8">
            &ldquo;The mission doesn&apos;t end at extraction. We are committed to the full arc — from the moment of rescue to long-term restoration.&rdquo;
          </p>
          <p className="text-white/40 font-light text-sm mb-10">
            Our domestic healing program, rooted in aftercare research, provides the foundation for long-term restoration.{" "}
            <a
              href="https://conus.liberators-alliance.org"
              className="text-[#F6DB06] hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              conus.liberators-alliance.org
            </a>
          </p>
          <Link
            href="/get-involved"
            className="inline-block px-8 py-4 bg-[#F6DB06] text-[#151515] font-display text-lg tracking-widest uppercase hover:bg-white transition-colors duration-200"
          >
            Get Involved
          </Link>
        </div>
      </section>
    </div>
  );
}
