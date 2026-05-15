import Link from "next/link";
import { caseStudies } from "@/lib/caseStudies";

const featured = caseStudies.slice(0, 3);

export function CaseStudies() {
  return (
    <section id="work" className="py-20 md:py-28 bg-white">
      <div className="max-w-[1120px] mx-auto px-5 md:px-10">
        {/* Header */}
        <div className="mb-14">
          <p
            className="text-[12px] text-[#EA580C] uppercase tracking-[0.18em] mb-3"
            style={{ fontFamily: "var(--font-jetbrains)" }}
          >
            02
          </p>
          <h2
            className="text-[36px] md:text-[48px] font-bold leading-[1.05] text-[#111110]"
            style={{ fontFamily: "var(--font-plus-jakarta)" }}
          >
            Real systems.
            <br />
            Real businesses.
          </h2>
        </div>

        {/* Case study rows */}
        <div className="flex flex-col gap-16 md:gap-20">
          {featured.map((cs, i) => (
            <div
              key={cs.slug}
              className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center ${
                i % 2 === 1 ? "md:[direction:rtl]" : ""
              }`}
            >
              {/* Image placeholder */}
              <div
                className={`rounded-2xl overflow-hidden aspect-[4/3] flex items-center justify-center ${
                  i % 2 === 1 ? "md:[direction:ltr]" : ""
                }`}
                style={{ backgroundColor: cs.color }}
              >
                <div className="text-center p-8">
                  <p
                    className="text-white/30 text-[11px] uppercase tracking-widest mb-2"
                    style={{ fontFamily: "var(--font-jetbrains)" }}
                  >
                    {cs.client}
                  </p>
                  <p
                    className="text-white text-[28px] md:text-[36px] font-bold leading-tight"
                    style={{ fontFamily: "var(--font-plus-jakarta)" }}
                  >
                    {cs.project.split("—")[0].trim()}
                  </p>
                </div>
              </div>

              {/* Text */}
              <div className={i % 2 === 1 ? "md:[direction:ltr]" : ""}>
                <p
                  className="text-[12px] text-[#9B9B92] uppercase tracking-widest mb-2"
                  style={{ fontFamily: "var(--font-jetbrains)" }}
                >
                  {cs.client}
                </p>
                <h3
                  className="text-[24px] md:text-[28px] font-bold text-[#111110] leading-tight mb-4"
                  style={{ fontFamily: "var(--font-plus-jakarta)" }}
                >
                  {cs.project}
                </h3>
                <p
                  className="text-[16px] font-semibold text-[#EA580C] mb-3 leading-snug"
                  style={{ fontFamily: "var(--font-plus-jakarta)" }}
                >
                  {cs.tagline}
                </p>
                <p
                  className="text-[15px] text-[#6B6B63] leading-relaxed mb-5"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  {cs.description.slice(0, 200)}…
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {cs.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-[#FFF7ED] text-[#EA580C] text-[12px] font-medium px-3 py-1 rounded-md"
                      style={{ fontFamily: "var(--font-inter)" }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <Link
                  href={`/work/${cs.slug}`}
                  className="inline-flex items-center gap-2 text-[#EA580C] font-semibold text-[14px] hover:gap-3 transition-all duration-150"
                  style={{ fontFamily: "var(--font-plus-jakarta)" }}
                >
                  View Case Study →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Archive links */}
        <div className="mt-16 pt-10 border-t border-[#E5E5DF]">
          <p
            className="text-[13px] text-[#9B9B92] mb-4"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Also completed:
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-3">
            {caseStudies.slice(3).map((cs) => (
              <Link
                key={cs.slug}
                href={`/work/${cs.slug}`}
                className="flex items-center gap-2 text-[15px] text-[#6B6B63] hover:text-[#EA580C] transition-colors duration-150"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                <span className="text-[#EA580C] text-[10px]">◆</span>
                {cs.project.split("—")[0].trim()} — {cs.client}
              </Link>
            ))}
          </div>
          <Link
            href="/work"
            className="mt-6 inline-flex items-center gap-2 border border-[#E5E5DF] hover:border-[#EA580C] text-[#111110] hover:text-[#EA580C] font-semibold text-[14px] px-6 py-3 rounded-full transition-all duration-150"
            style={{ fontFamily: "var(--font-plus-jakarta)" }}
          >
            View All Work →
          </Link>
        </div>
      </div>
    </section>
  );
}
