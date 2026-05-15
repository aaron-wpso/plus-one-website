import type { Metadata } from "next";
import Link from "next/link";
import { caseStudies } from "@/lib/caseStudies";

export const metadata: Metadata = {
  title: "Our Work — Case Studies",
  description:
    "5 custom software systems built across 5 industries in Malaysia — F&B, Interior Design, Fitness, EdTech, and Heavy Machinery. Real solutions for real businesses.",
  keywords: [
    "Malaysia software case studies",
    "custom software portfolio Malaysia",
    "F&B software KL",
    "interior design software Malaysia",
    "fitness management system Malaysia",
    "AI education app Malaysia",
    "B2B marketplace Malaysia",
  ],
  openGraph: {
    title: "Our Work — Plus One Software Solution",
    description:
      "5 systems. 5 industries. All built to solve real problems for real Malaysian businesses.",
    url: "https://plusonesoftwaresolution.com/work",
    siteName: "Plus One Software Solution",
    locale: "en_MY",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Work — Plus One Software Solution",
    description:
      "5 systems. 5 industries. All built to solve real problems for real Malaysian businesses.",
  },
  alternates: {
    canonical: "https://plusonesoftwaresolution.com/work",
  },
};

export default function WorkPage() {
  return (
    <div className="min-h-screen pt-28 pb-24">
      <div className="max-w-[1120px] mx-auto px-5 md:px-10">
        {/* Header */}
        <header className="mb-16">
          <h1
            className="text-[56px] md:text-[72px] font-extrabold text-[#111110] leading-[1.0] mb-4"
            style={{ fontFamily: "var(--font-plus-jakarta)" }}
          >
            Our Work.
          </h1>
          <p
            className="text-[18px] text-[#6B6B63] max-w-[480px] leading-relaxed"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            5 systems. 5 industries. All built to solve real problems for real
            Malaysian businesses.
          </p>
        </header>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6" role="list">
          {caseStudies.map((cs) => (
            <article key={cs.slug} role="listitem">
              <Link
                href={`/work/${cs.slug}`}
                className="group rounded-2xl border border-[#E5E5DF] bg-white overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-200 block"
                aria-label={`Case study: ${cs.project} for ${cs.client}`}
              >
                {/* Image area */}
                <div
                  className="h-48 flex items-center justify-center"
                  style={{ backgroundColor: cs.color }}
                >
                  <p
                    className="text-white text-[24px] font-bold text-center px-6"
                    style={{ fontFamily: "var(--font-plus-jakarta)" }}
                  >
                    {cs.project.split("—")[0].trim()}
                  </p>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p
                    className="text-[11px] text-[#9B9B92] uppercase tracking-widest mb-2"
                    style={{ fontFamily: "var(--font-jetbrains)" }}
                  >
                    {cs.client}
                  </p>
                  <h2
                    className="text-[20px] font-bold text-[#111110] mb-2 leading-tight"
                    style={{ fontFamily: "var(--font-plus-jakarta)" }}
                  >
                    {cs.project}
                  </h2>
                  <p
                    className="text-[14px] text-[#6B6B63] mb-4 leading-relaxed"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    {cs.tagline}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {cs.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-[#FFF7ED] text-[#EA580C] text-[11px] font-medium px-2.5 py-1 rounded-md"
                        style={{ fontFamily: "var(--font-inter)" }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p
                    className="mt-4 text-[13px] font-semibold text-[#EA580C] flex items-center gap-1.5"
                    style={{ fontFamily: "var(--font-plus-jakarta)" }}
                  >
                    View Case Study →
                  </p>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
