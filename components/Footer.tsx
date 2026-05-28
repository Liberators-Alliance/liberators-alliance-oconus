import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/mission", label: "The Mission" },
  { href: "/get-involved", label: "Get Involved" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#1A1A1A] border-t border-white/5 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10">
          <div className="flex flex-col gap-4">
            <Link href="/">
              <Image src="/logo.png" alt="Liberators Alliance" width={48} height={48} className="h-12 w-auto" />
            </Link>
            <p className="font-display text-lg tracking-widest text-[#F6DB06]">
              Building Alliances to Free the Oppressed
            </p>
            <p className="text-sm text-white/40">A Colorado-based nonprofit</p>
          </div>

          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm tracking-widest uppercase text-white/50 hover:text-[#F6DB06] transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex flex-col gap-3">
            <p className="text-xs tracking-widest uppercase text-white/30 mb-1">Contact</p>
            <a
              href="mailto:contactus@liberators-alliance.org"
              className="text-sm text-white/60 hover:text-[#F6DB06] transition-colors duration-200"
            >
              contactus@liberators-alliance.org
            </a>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/5">
          <p className="text-xs text-white/20 tracking-wide">
            &copy; {new Date().getFullYear()} Liberators Alliance. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
