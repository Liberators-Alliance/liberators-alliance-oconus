import Link from "next/link";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";

export default function GetInvolved() {
  return (
    <div className="bg-[#151515]">

      {/* Page Header */}
      <section className="relative pt-40 pb-20 px-6 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0">
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
          <p className="text-xs tracking-[0.3em] uppercase text-[#F6DB06] mb-6">Get Involved</p>
          <h1 className="font-display text-[clamp(3rem,7vw,6rem)] leading-none text-white">
            Three Ways<br />
            <span className="text-[#F6DB06]">to Engage</span>
          </h1>
        </div>
      </section>

      {/* Section 1 — Volunteer */}
      <section id="volunteer" className="py-28 px-6 bg-[#151515]">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-xs tracking-[0.3em] uppercase text-[#F6DB06] mb-6">01 / Volunteer</p>
              <h2 className="font-display text-5xl md:text-6xl text-white leading-none mb-6">
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
              <ContactForm subject="Volunteer Inquiry" />
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 — Donate */}
      <section id="donate" className="py-28 px-6 bg-[#1A1A1A] border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative h-72 overflow-hidden hidden md:block">
              <Image
                src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&q=80"
                alt="Support the mission"
                fill
                className="object-cover opacity-50"
                unoptimized
              />
              <div className="absolute inset-0 border border-[#F6DB06]/10" />
            </div>
            <div>
              <p className="text-xs tracking-[0.3em] uppercase text-[#F6DB06] mb-6">02 / Support</p>
              <h2 className="font-display text-5xl md:text-6xl text-white leading-none mb-6">
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
              >
                Donate — Coming Soon
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 — Operators Council */}
      <section id="operators-council" className="py-28 px-6 bg-[#0E0E0E] border-t border-[#F6DB06]/10 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{ backgroundImage: "repeating-linear-gradient(0deg, #F6DB06 0px, #F6DB06 1px, transparent 1px, transparent 60px), repeating-linear-gradient(90deg, #F6DB06 0px, #F6DB06 1px, transparent 1px, transparent 60px)" }} />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <p className="text-xs tracking-[0.3em] uppercase text-[#F6DB06] mb-6">03 / Principal Tier</p>
          <div className="flex items-start gap-4 mb-8">
            <span className="w-12 h-px bg-[#F6DB06] flex-shrink-0 mt-4" />
            <h2 className="font-display text-5xl md:text-6xl text-white leading-none">
              The Operators Council
            </h2>
          </div>

          <p className="text-xl text-white/70 font-light leading-relaxed mb-6 max-w-2xl">
            For those who don&apos;t just want to support the mission — they want to be part of what makes it possible.
          </p>

          <div className="my-10 pl-8 border-l-2 border-[#F6DB06]">
            <p className="text-white/60 font-light leading-relaxed mb-4">
              Operators Council members are the founding principals of Liberators Alliance. Their investment doesn&apos;t fund a line item — it funds an entire operation, from initial intelligence through final aftercare placement.
            </p>
            <p className="text-white/60 font-light leading-relaxed mb-4">
              In return, Council members receive direct access to mission outcomes and operational updates unavailable to the public.
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
