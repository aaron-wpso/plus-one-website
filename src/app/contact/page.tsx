import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact — Plus One Software Solution | Book a Free Discovery Call",
  description:
    "Talk to Aaron So about your digitalization project. Free 30-minute discovery call for Malaysian SME owners. No commitment, no jargon. Based in Kuala Lumpur.",
  keywords: [
    "contact Plus One Software Solution",
    "book discovery call Malaysia",
    "digitalization consultation KL",
    "custom software inquiry Malaysia",
  ],
  openGraph: {
    title: "Book a Free Call — Plus One Software Solution",
    description:
      "Talk to Aaron directly. Free 30-minute call. No commitment, no jargon.",
    url: "https://plusonesoftwaresolution.com/contact",
    siteName: "Plus One Software Solution",
    locale: "en_MY",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Book a Free Call — Plus One Software Solution",
    description:
      "Talk to Aaron directly. Free 30-minute call. No commitment, no jargon.",
  },
  alternates: {
    canonical: "https://plusonesoftwaresolution.com/contact",
  },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-28 pb-24">
      <div className="max-w-[1120px] mx-auto px-5 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">
          {/* Left — info */}
          <div className="md:sticky md:top-28">
            <p
              className="text-[12px] text-[#EA580C] uppercase tracking-[0.18em] mb-4"
              style={{ fontFamily: "var(--font-jetbrains)" }}
            >
              Let&apos;s talk
            </p>
            <h1
              className="text-[44px] md:text-[52px] font-extrabold text-[#111110] leading-[1.05] mb-5"
              style={{ fontFamily: "var(--font-plus-jakarta)" }}
            >
              Let&apos;s talk about
              your project.
            </h1>
            <p
              className="text-[16px] text-[#6B6B63] leading-relaxed mb-10"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Not sure if you&apos;re ready? That&apos;s exactly when to call.
              The first conversation is free and there&apos;s no commitment.
              Aaron picks up every inquiry personally.
            </p>

            <div className="flex flex-col gap-5">
              <div>
                <p
                  className="text-[11px] text-[#9B9B92] uppercase tracking-widest mb-1"
                  style={{ fontFamily: "var(--font-jetbrains)" }}
                >
                  Email
                </p>
                <a
                  href="mailto:hello@plusonesoftwaresolution.com"
                  className="text-[15px] text-[#111110] hover:text-[#EA580C] transition-colors duration-150"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  hello@plusonesoftwaresolution.com
                </a>
              </div>
              <div>
                <p
                  className="text-[11px] text-[#9B9B92] uppercase tracking-widest mb-1"
                  style={{ fontFamily: "var(--font-jetbrains)" }}
                >
                  Location
                </p>
                <p
                  className="text-[15px] text-[#111110]"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  Kuala Lumpur, Malaysia
                </p>
              </div>
              <div>
                <p
                  className="text-[11px] text-[#9B9B92] uppercase tracking-widest mb-1"
                  style={{ fontFamily: "var(--font-jetbrains)" }}
                >
                  Response time
                </p>
                <p
                  className="text-[15px] text-[#111110]"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  Within 1 business day
                </p>
              </div>
            </div>
          </div>

          {/* Right — form */}
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
