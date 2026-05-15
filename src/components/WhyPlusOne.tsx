import Link from "next/link";

const values = [
  {
    title: "You talk to the person who builds it.",
    body: "No account managers. No handoffs. Aaron is in the room from discovery to delivery — and your number goes straight to him.",
  },
  {
    title: "We diagnose before we prescribe.",
    body: "We will tell you what you don't need. We've turned away projects that weren't the right fit — that's how we keep the ones we take.",
  },
  {
    title: "We've lived in the operations we digitalize.",
    body: "Aaron has sat inside a client's bar managing live operations on a Friday night in KL. That's not a case study — that's experience.",
  },
  {
    title: "Less than 2 years old. Already 5 industries.",
    body: "We move fast. We're hungry. Every project we take on, we treat like it's the one that defines us — because it is.",
  },
];

export function WhyPlusOne() {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-[1120px] mx-auto px-5 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">
          {/* Left — values */}
          <div>
            <p
              className="text-[12px] text-[#EA580C] uppercase tracking-[0.18em] mb-3"
              style={{ fontFamily: "var(--font-jetbrains)" }}
            >
              03
            </p>
            <h2
              className="text-[36px] md:text-[44px] font-bold leading-[1.05] text-[#111110] mb-3"
              style={{ fontFamily: "var(--font-plus-jakarta)" }}
            >
              Why work with
              <br />a startup?
            </h2>
            <p
              className="text-[17px] text-[#6B6B63] mb-10 font-medium"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Because startups still have something to prove.
            </p>

            <div className="flex flex-col gap-8">
              {values.map((v) => (
                <div key={v.title} className="border-l-2 border-[#EA580C] pl-5">
                  <h3
                    className="text-[16px] font-semibold text-[#111110] mb-1.5"
                    style={{ fontFamily: "var(--font-plus-jakarta)" }}
                  >
                    {v.title}
                  </h3>
                  <p
                    className="text-[15px] text-[#6B6B63] leading-relaxed"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    {v.body}
                  </p>
                </div>
              ))}
            </div>

            <Link
              href="/contact"
              className="mt-10 inline-flex items-center gap-2 bg-[#EA580C] hover:bg-[#C2410C] text-white font-semibold text-[15px] px-7 py-3.5 rounded-full transition-all duration-150 hover:scale-[1.02]"
              style={{ fontFamily: "var(--font-plus-jakarta)" }}
            >
              Talk to Aaron →
            </Link>
          </div>

          {/* Right — photo collage placeholder */}
          <div className="relative flex items-center justify-center min-h-[400px]">
            {/* Photo cards stacked at angles */}
            <div
              className="absolute w-56 h-64 bg-[#E5E5DF] rounded-xl border-2 border-white shadow-lg"
              style={{ transform: "rotate(-4deg) translate(-30px, -20px)" }}
            >
              <div className="w-full h-full rounded-xl bg-gradient-to-br from-[#FFF7ED] to-[#E5E5DF] flex items-center justify-center">
                <p
                  className="text-[12px] text-[#9B9B92] text-center px-4"
                  style={{ fontFamily: "var(--font-jetbrains)" }}
                >
                  [ Photo: Aaron at client site ]
                </p>
              </div>
            </div>
            <div
              className="absolute w-52 h-60 bg-[#E5E5DF] rounded-xl border-2 border-white shadow-lg"
              style={{ transform: "rotate(3deg) translate(40px, 10px)" }}
            >
              <div className="w-full h-full rounded-xl bg-gradient-to-br from-[#EEF2FF] to-[#E5E5DF] flex items-center justify-center">
                <p
                  className="text-[12px] text-[#9B9B92] text-center px-4"
                  style={{ fontFamily: "var(--font-jetbrains)" }}
                >
                  [ Photo: Whiteboard session ]
                </p>
              </div>
            </div>
            <div
              className="absolute w-48 h-56 bg-[#E5E5DF] rounded-xl border-2 border-white shadow-xl"
              style={{ transform: "rotate(-1deg) translate(-10px, 60px)" }}
            >
              <div className="w-full h-full rounded-xl bg-gradient-to-br from-[#F0FDF4] to-[#E5E5DF] flex items-center justify-center">
                <p
                  className="text-[12px] text-[#9B9B92] text-center px-4"
                  style={{ fontFamily: "var(--font-jetbrains)" }}
                >
                  [ Photo: Aaron portrait ]
                </p>
              </div>
            </div>

            {/* Caption */}
            <p
              className="absolute bottom-0 left-0 text-[12px] text-[#9B9B92]"
              style={{ fontFamily: "var(--font-jetbrains)" }}
            >
              Replace with real photos when ready
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
