import Link from "next/link";

const navLinks = [
  { label: "01  Work", href: "/#work" },
  { label: "02  Services", href: "/#services" },
  { label: "03  About", href: "/about" },
  { label: "04  Contact", href: "/contact" },
];

const caseStudies = [
  { label: "BORS — Hallaway", href: "/work/bors" },
  { label: "BuildLah — Touch By Design", href: "/work/buildlah" },
  { label: "ClassOne AI — YelaoShr", href: "/work/classone" },
  { label: "FLEX — Project Fit", href: "/work/flex" },
  { label: "Titan Innovation", href: "/work/titan" },
];

export function Footer() {
  return (
    <footer className="bg-[#FFFFFF] border-t border-[#E5E5DF]">
      <div className="max-w-[1120px] mx-auto px-5 md:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-6">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <span className="text-[#EA580C] font-bold text-xl">+</span>
              <span
                className="font-bold text-[16px] text-[#111110]"
                style={{ fontFamily: "var(--font-plus-jakarta)" }}
              >
                Plus One
              </span>
            </Link>
            <p
              className="text-[14px] text-[#6B6B63] leading-relaxed max-w-[220px]"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              A Malaysia-based software agency building custom systems for
              businesses ready to grow.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p
              className="text-[11px] text-[#9B9B92] uppercase tracking-widest mb-4"
              style={{ fontFamily: "var(--font-jetbrains)" }}
            >
              Company
            </p>
            <ul className="flex flex-col gap-2.5">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-[14px] text-[#6B6B63] hover:text-[#EA580C] transition-colors duration-150"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Case Studies */}
          <div>
            <p
              className="text-[11px] text-[#9B9B92] uppercase tracking-widest mb-4"
              style={{ fontFamily: "var(--font-jetbrains)" }}
            >
              Select Work
            </p>
            <ul className="flex flex-col gap-2.5">
              {caseStudies.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-[14px] text-[#6B6B63] hover:text-[#EA580C] transition-colors duration-150"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p
              className="text-[11px] text-[#9B9B92] uppercase tracking-widest mb-4"
              style={{ fontFamily: "var(--font-jetbrains)" }}
            >
              Contact
            </p>
            <ul className="flex flex-col gap-2.5">
              <li>
                <a
                  href="mailto:hello@plusonesoftwaresolution.com"
                  className="text-[14px] text-[#6B6B63] hover:text-[#EA580C] transition-colors duration-150 break-all"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  hello@plusonesoftwaresolution.com
                </a>
              </li>
              <li>
                <p
                  className="text-[14px] text-[#6B6B63]"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  Kuala Lumpur, Malaysia
                </p>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-[#E5E5DF] flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
          <p
            className="text-[13px] text-[#9B9B92]"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            © {new Date().getFullYear()} Plus One Software Solution. All rights reserved.
          </p>
          <p
            className="text-[13px] text-[#9B9B92]"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Built in KL 🇲🇾
          </p>
        </div>
      </div>
    </footer>
  );
}
