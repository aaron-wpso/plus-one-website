const steps = [
  {
    num: "01",
    title: "Discovery",
    body: "We map your current operations and scope the right solution — not the biggest one.",
  },
  {
    num: "02",
    title: "Design",
    body: "UI/UX wireframes and prototypes. Client-approved before we write a line of code.",
  },
  {
    num: "03",
    title: "Build",
    body: "Full-stack development in sprints. You see progress bi-weekly. No black boxes.",
  },
  {
    num: "04",
    title: "UAT",
    body: "Your team tests every flow. We fix every critical bug before go-live. No exceptions.",
  },
  {
    num: "05",
    title: "Launch",
    body: "Deployed. Trained. Documented. 30-day hypercare support included.",
  },
  {
    num: "06",
    title: "Support",
    body: "Monthly retainer. Bug fixes, updates, monitoring. We don't disappear.",
  },
];

export function Process() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-[1120px] mx-auto px-5 md:px-10">
        <div className="mb-12 text-center">
          <p
            className="text-[12px] text-[#EA580C] uppercase tracking-[0.18em] mb-3"
            style={{ fontFamily: "var(--font-jetbrains)" }}
          >
            04
          </p>
          <h2
            className="text-[36px] md:text-[44px] font-bold text-[#111110] leading-tight"
            style={{ fontFamily: "var(--font-plus-jakarta)" }}
          >
            How a project
            <br />
            actually works.
          </h2>
        </div>

        {/* Steps grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-[#E5E5DF] rounded-2xl overflow-hidden">
          {steps.map((step) => (
            <div
              key={step.num}
              className="bg-white p-6 flex flex-col gap-3 group hover:bg-[#FFF7ED] transition-colors duration-200"
            >
              <span
                className="text-[40px] font-extrabold text-[#EA580C] leading-none"
                style={{ fontFamily: "var(--font-plus-jakarta)" }}
              >
                {step.num}
              </span>
              <h3
                className="text-[15px] font-bold text-[#111110]"
                style={{ fontFamily: "var(--font-plus-jakarta)" }}
              >
                {step.title}
              </h3>
              <p
                className="text-[13px] text-[#6B6B63] leading-relaxed"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                {step.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
