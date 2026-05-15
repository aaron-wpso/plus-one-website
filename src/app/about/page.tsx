import type { Metadata } from "next";
import Link from "next/link";
import { CTASection } from "@/components/CTASection";

export const metadata: Metadata = {
  title: "About Aaron So — Founder & Digitalization Advisor",
  description:
    "Aaron So is the founder of Plus One Software Solution — a former software developer at Agmo Studio turned digitalization advisor for Malaysian SMEs. Based in Kuala Lumpur.",
  keywords: [
    "Aaron So digitalization advisor Malaysia",
    "Plus One Software Solution founder",
    "software developer turned consultant Malaysia",
    "Agmo Studio alumni",
    "KL software agency founder",
  ],
  openGraph: {
    title: "About Aaron So — Founder, Plus One Software Solution",
    description:
      "Former developer. Now helping Malaysian SMEs build the right software for their operations. Based in KL.",
    url: "https://plusonesoftwaresolution.com/about",
    siteName: "Plus One Software Solution",
    locale: "en_MY",
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Aaron So — Plus One Software Solution",
    description:
      "Former developer. Now helping Malaysian SMEs build the right software for their operations.",
  },
  alternates: {
    canonical: "https://plusonesoftwaresolution.com/about",
  },
};

// JSON-LD — Person schema for Aaron
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Aaron So",
  jobTitle: "Founder & Digitalization Advisor",
  worksFor: {
    "@type": "Organization",
    name: "Plus One Software Solution",
    url: "https://plusonesoftwaresolution.com",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Kuala Lumpur",
    addressCountry: "MY",
  },
  knowsAbout: [
    "Custom Software Development",
    "Business Digitalization",
    "Web Application Development",
    "Mobile App Development",
    "AI Integration",
    "SME Technology Strategy",
  ],
};

const beliefs = [
  "The best software is the one your team will actually use.",
  "Technology doesn't fix a bad process. It amplifies it.",
  "I will tell you what you don't need — even if it costs me the deal.",
];

const track = [
  {
    title: "Former Software Developer",
    body: "Agmo Studio — one of Malaysia's leading mobile and web development agencies. Built real products for real clients from the ground up.",
  },
  {
    title: "5 Systems. 5 Industries.",
    body: "BORS (F&B), BuildLah (Interior Design), FLEX (Fitness), ClassOne AI (EdTech), Titan Innovation (Heavy Machinery Marketplace).",
  },
  {
    title: "Personally coded the first 3.",
    body: "BORS, Titan, and BuildLah were built from the ground up — Aaron wrote the code, managed the client, and ran the delivery end to end.",
  },
  {
    title: "Based in Kuala Lumpur.",
    body: "Serving Klang Valley and Malaysia-wide. If you're an SME owner and you know you need to go digital — this is the conversation to have.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />

      {/* Hero */}
      <section
        className="pt-32 pb-20 px-5 md:px-10"
        style={{
          background:
            "radial-gradient(ellipse at 0% 50%, #FFF3E0 0%, #FAFAF7 50%)",
        }}
      >
        <div className="max-w-[1120px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <h1
                className="text-[52px] md:text-[64px] font-extrabold text-[#111110] leading-[1.0] mb-6"
                style={{ fontFamily: "var(--font-plus-jakarta)" }}
              >
                Hi. I&apos;m Aaron So.
              </h1>
              <p
                className="text-[18px] text-[#6B6B63] leading-relaxed mb-6"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                Founder of Plus One Software Solution. Former software developer
                at Agmo Studio. Now I help Malaysian SME owners figure out what
                to build — and make sure it gets built right.
              </p>
              <p
                className="text-[16px] text-[#6B6B63] leading-relaxed"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                I used to write the code. I still do sometimes. But somewhere
                along the way I realised the biggest problem wasn&apos;t the
                technology — it was that business owners didn&apos;t know what
                technology they actually needed. So I switched.
              </p>
            </div>

            {/* Photo placeholder */}
            <div className="flex justify-center md:justify-end">
              <div
                className="w-64 h-80 rounded-2xl bg-[#E5E5DF] border-2 border-white shadow-xl flex items-center justify-center"
                style={{ transform: "rotate(2deg)" }}
                aria-label="Photo of Aaron So"
              >
                <p
                  className="text-[12px] text-[#9B9B92] text-center px-4"
                  style={{ fontFamily: "var(--font-jetbrains)" }}
                >
                  [ Aaron So — portrait photo ]
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Beliefs manifesto */}
      <section className="py-20 bg-white" aria-label="Aaron's beliefs">
        <div className="max-w-[1120px] mx-auto px-5 md:px-10">
          <p
            className="text-[12px] text-[#EA580C] uppercase tracking-[0.18em] mb-6"
            style={{ fontFamily: "var(--font-jetbrains)" }}
          >
            What I actually believe.
          </p>
          <div className="flex flex-col divide-y divide-[#E5E5DF]">
            {beliefs.map((b, i) => (
              <p
                key={i}
                className="text-[24px] md:text-[32px] font-bold text-[#111110] py-8 leading-tight"
                style={{ fontFamily: "var(--font-plus-jakarta)" }}
              >
                &ldquo;{b}&rdquo;
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Track record */}
      <section className="py-20 px-5 md:px-10" aria-label="Track record">
        <div className="max-w-[1120px] mx-auto">
          <p
            className="text-[12px] text-[#EA580C] uppercase tracking-[0.18em] mb-8"
            style={{ fontFamily: "var(--font-jetbrains)" }}
          >
            Track record.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {track.map((t) => (
              <article
                key={t.title}
                className="bg-white border border-[#E5E5DF] rounded-2xl p-6"
              >
                <h2
                  className="text-[17px] font-bold text-[#111110] mb-2"
                  style={{ fontFamily: "var(--font-plus-jakarta)" }}
                >
                  {t.title}
                </h2>
                <p
                  className="text-[15px] text-[#6B6B63] leading-relaxed"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  {t.body}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-10">
            <Link
              href="/work"
              className="inline-flex items-center gap-2 text-[#EA580C] font-semibold text-[15px] hover:gap-3 transition-all duration-150"
              style={{ fontFamily: "var(--font-plus-jakarta)" }}
            >
              See the work that came out of this →
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
