const clients = [
  "Hallaway KL & PJ",
  "Titan Innovation",
  "Touch By Design",
  "Project Fit",
  "YelaoShr",
];

export function TrustBar() {
  return (
    <section className="bg-white border-y border-[#E5E5DF] py-10">
      <div className="max-w-[1120px] mx-auto px-5 md:px-10">
        <p
          className="text-center text-[11px] text-[#9B9B92] uppercase tracking-[0.18em] mb-6"
          style={{ fontFamily: "var(--font-jetbrains)" }}
        >
          Systems built across Malaysia
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-3">
          {clients.map((client, i) => (
            <span key={client} className="flex items-center gap-3">
              <span
                className="text-[15px] font-semibold text-[#6B6B63]"
                style={{ fontFamily: "var(--font-plus-jakarta)" }}
              >
                {client}
              </span>
              {i < clients.length - 1 && (
                <span className="text-[#EA580C] text-[10px]">◆</span>
              )}
            </span>
          ))}
        </div>
        <div className="mt-8 flex items-center justify-center gap-8">
          {[
            { num: "5", label: "Systems built" },
            { num: "5", label: "Industries served" },
            { num: "<2", label: "Years old" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p
                className="text-[28px] font-extrabold text-[#EA580C]"
                style={{ fontFamily: "var(--font-plus-jakarta)" }}
              >
                {stat.num}
              </p>
              <p
                className="text-[12px] text-[#9B9B92] mt-0.5"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
