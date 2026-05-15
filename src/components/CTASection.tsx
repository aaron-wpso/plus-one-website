import Link from "next/link";

export function CTASection() {
  return (
    <section
      className="py-32 md:py-40 text-center px-5"
      style={{
        background:
          "radial-gradient(ellipse at 50% 0%, #FFF3E0 0%, #FAFAF7 60%)",
      }}
    >
      <h2
        className="text-[44px] md:text-[64px] font-extrabold text-[#111110] leading-[1.02] mb-4"
        style={{ fontFamily: "var(--font-plus-jakarta)" }}
      >
        Have a project in mind?
      </h2>
      <p
        className="text-[18px] text-[#6B6B63] mb-10 max-w-[400px] mx-auto"
        style={{ fontFamily: "var(--font-inter)" }}
      >
        Let&apos;s talk about your business first. No commitment, no jargon.
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 bg-[#EA580C] hover:bg-[#C2410C] text-white font-semibold text-[16px] px-8 py-4 rounded-full transition-all duration-150 hover:scale-[1.02]"
          style={{ fontFamily: "var(--font-plus-jakarta)" }}
        >
          Book a Free 30-Min Call
        </Link>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 border border-[#E5E5DF] hover:border-[#EA580C] text-[#111110] hover:text-[#EA580C] font-semibold text-[16px] px-8 py-4 rounded-full transition-all duration-150"
          style={{ fontFamily: "var(--font-plus-jakarta)" }}
        >
          Send Us a Message
        </Link>
      </div>
    </section>
  );
}
