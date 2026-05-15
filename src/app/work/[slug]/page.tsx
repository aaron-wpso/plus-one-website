import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { caseStudies } from "@/lib/caseStudies";

export async function generateStaticParams() {
  return caseStudies.map((cs) => ({ slug: cs.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const cs = caseStudies.find((c) => c.slug === slug);
  if (!cs) return {};

  const url = `https://plusonesoftwaresolution.com/work/${cs.slug}`;

  return {
    title: `${cs.project} — Case Study`,
    description: `${cs.tagline} — ${cs.industry} software built by Plus One Software Solution for ${cs.client} in Malaysia.`,
    keywords: [
      `${cs.industry} software Malaysia`,
      `${cs.client} case study`,
      `custom ${cs.type.toLowerCase()} Malaysia`,
      "Plus One Software Solution case study",
    ],
    openGraph: {
      title: `${cs.project} — Plus One Software Solution`,
      description: cs.tagline,
      url,
      siteName: "Plus One Software Solution",
      locale: "en_MY",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${cs.project} — Plus One Software Solution`,
      description: cs.tagline,
    },
    alternates: {
      canonical: url,
    },
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cs = caseStudies.find((c) => c.slug === slug);
  if (!cs) notFound();

  const others = caseStudies.filter((c) => c.slug !== cs.slug).slice(0, 2);

  // JSON-LD for the case study (Article schema)
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: cs.project,
    description: cs.tagline,
    author: {
      "@type": "Person",
      name: "Aaron So",
      url: "https://plusonesoftwaresolution.com/about",
    },
    publisher: {
      "@type": "Organization",
      name: "Plus One Software Solution",
      url: "https://plusonesoftwaresolution.com",
    },
    about: {
      "@type": "SoftwareApplication",
      name: cs.project,
      applicationCategory: cs.type,
      operatingSystem: "Web",
    },
    keywords: cs.tags.join(", "),
  };

  return (
    <div className="min-h-screen pt-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      {/* Hero banner */}
      <header
        className="h-[50vh] min-h-[320px] flex items-end pb-12 px-5 md:px-10"
        style={{ backgroundColor: cs.color }}
      >
        <div className="max-w-[1120px] mx-auto w-full">
          <Link
            href="/work"
            className="text-white/50 text-[13px] mb-4 flex items-center gap-1 hover:text-white/80 transition-colors"
            style={{ fontFamily: "var(--font-jetbrains)" }}
            aria-label="Back to all work"
          >
            ← Work
          </Link>
          <p
            className="text-white/50 text-[11px] uppercase tracking-widest mb-2"
            style={{ fontFamily: "var(--font-jetbrains)" }}
          >
            {cs.client}
          </p>
          <h1
            className="text-[36px] md:text-[52px] font-extrabold text-white leading-tight max-w-[700px]"
            style={{ fontFamily: "var(--font-plus-jakarta)" }}
          >
            {cs.project}
          </h1>
        </div>
      </header>

      {/* Body */}
      <article className="max-w-[760px] mx-auto px-5 md:px-10 py-16">
        {/* Tags + meta */}
        <div className="flex flex-wrap gap-2 mb-8" aria-label="Project tags">
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

        <dl className="grid grid-cols-2 md:grid-cols-3 gap-4 py-6 border-y border-[#E5E5DF] mb-10">
          {[
            { label: "Industry", value: cs.industry },
            { label: "Type", value: cs.type },
            { label: "Status", value: "Live" },
          ].map((m) => (
            <div key={m.label}>
              <dt
                className="text-[11px] text-[#9B9B92] uppercase tracking-widest mb-1"
                style={{ fontFamily: "var(--font-jetbrains)" }}
              >
                {m.label}
              </dt>
              <dd
                className="text-[14px] font-semibold text-[#111110]"
                style={{ fontFamily: "var(--font-plus-jakarta)" }}
              >
                {m.value}
              </dd>
            </div>
          ))}
        </dl>

        {/* Metric callout */}
        <blockquote className="bg-[#FFF7ED] border border-[#EA580C]/20 rounded-2xl p-6 mb-10">
          <p
            className="text-[18px] md:text-[20px] font-bold text-[#EA580C] leading-snug"
            style={{ fontFamily: "var(--font-plus-jakarta)" }}
          >
            &ldquo;{cs.tagline}&rdquo;
          </p>
        </blockquote>

        <h2
          className="text-[28px] font-bold text-[#111110] mb-4"
          style={{ fontFamily: "var(--font-plus-jakarta)" }}
        >
          The problem.
        </h2>
        <p
          className="text-[16px] text-[#6B6B63] leading-relaxed mb-10"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          {cs.metric}
        </p>

        <h2
          className="text-[28px] font-bold text-[#111110] mb-4"
          style={{ fontFamily: "var(--font-plus-jakarta)" }}
        >
          What we built.
        </h2>
        <p
          className="text-[16px] text-[#6B6B63] leading-relaxed mb-10"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          {cs.description}
        </p>

        {/* Image placeholder */}
        <div
          className="rounded-2xl h-64 flex items-center justify-center mb-12"
          style={{ backgroundColor: cs.color + "33" }}
          role="img"
          aria-label={`${cs.project} product screenshots — coming soon`}
        >
          <p
            className="text-[13px] text-[#9B9B92]"
            style={{ fontFamily: "var(--font-jetbrains)" }}
          >
            [ Product screenshots coming soon ]
          </p>
        </div>

        {/* CTA */}
        <div className="border-t border-[#E5E5DF] pt-10">
          <h2
            className="text-[22px] font-bold text-[#111110] mb-3"
            style={{ fontFamily: "var(--font-plus-jakarta)" }}
          >
            Have a similar problem?
          </h2>
          <p
            className="text-[15px] text-[#6B6B63] mb-6"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Let&apos;s talk about what we can build for your business.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#EA580C] hover:bg-[#C2410C] text-white font-semibold text-[15px] px-7 py-3.5 rounded-full transition-all duration-150"
            style={{ fontFamily: "var(--font-plus-jakarta)" }}
          >
            Book a Free Call →
          </Link>
        </div>

        {/* Related work */}
        {others.length > 0 && (
          <nav className="mt-16" aria-label="Related case studies">
            <h3
              className="text-[18px] font-bold text-[#111110] mb-6"
              style={{ fontFamily: "var(--font-plus-jakarta)" }}
            >
              More work
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {others.map((o) => (
                <Link
                  key={o.slug}
                  href={`/work/${o.slug}`}
                  className="group rounded-xl border border-[#E5E5DF] p-5 hover:border-[#EA580C]/40 hover:bg-[#FFF7ED] transition-all duration-150"
                >
                  <p
                    className="text-[11px] text-[#9B9B92] uppercase tracking-widest mb-1"
                    style={{ fontFamily: "var(--font-jetbrains)" }}
                  >
                    {o.client}
                  </p>
                  <p
                    className="text-[15px] font-semibold text-[#111110] group-hover:text-[#EA580C] transition-colors"
                    style={{ fontFamily: "var(--font-plus-jakarta)" }}
                  >
                    {o.project}
                  </p>
                </Link>
              ))}
            </div>
          </nav>
        )}
      </article>
    </div>
  );
}
