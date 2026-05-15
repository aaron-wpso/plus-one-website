"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/#work", label: "Work" },
  { href: "/#services", label: "Services" },
  { href: "/about", label: "About" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
          scrolled
            ? "bg-[#FAFAF7]/95 backdrop-blur-md border-b border-[#E5E5DF]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-[1120px] mx-auto px-5 md:px-10 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 group"
            onClick={() => setMenuOpen(false)}
          >
            <span className="text-[#EA580C] font-bold text-xl leading-none">+</span>
            <span
              className="font-display font-700 text-[17px] text-[#111110] tracking-tight"
              style={{ fontFamily: "var(--font-plus-jakarta)" }}
            >
              Plus One
            </span>
          </Link>

          {/* Desktop links */}
          <nav className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-[15px] font-medium text-[#6B6B63] hover:text-[#111110] transition-colors duration-150"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex">
            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 bg-[#EA580C] hover:bg-[#C2410C] text-white text-[14px] font-semibold px-5 py-2.5 rounded-full transition-all duration-150 hover:scale-[1.02]"
              style={{ fontFamily: "var(--font-plus-jakarta)" }}
            >
              Let&apos;s Talk
              <span aria-hidden>→</span>
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 text-[#111110]"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-40 bg-[#FAFAF7] flex flex-col transition-all duration-300 md:hidden ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="h-16" /> {/* spacer for nav height */}
        <nav className="flex flex-col gap-2 px-6 pt-8">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="text-[28px] font-bold text-[#111110] py-3 border-b border-[#E5E5DF]"
              style={{ fontFamily: "var(--font-plus-jakarta)" }}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="mt-8 inline-flex items-center justify-center gap-2 bg-[#EA580C] text-white text-[18px] font-semibold px-6 py-4 rounded-full"
            style={{ fontFamily: "var(--font-plus-jakarta)" }}
          >
            Let&apos;s Talk →
          </Link>
        </nav>
      </div>
    </>
  );
}
