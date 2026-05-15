"use client";

import { useState } from "react";
import {
  Globe,
  Smartphone,
  Sparkles,
  MapPin,
  Search,
  Wrench,
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Custom Web Application",
    summary:
      "Web-based systems tailored to how your business actually works — order management, client portals, booking systems, inventory dashboards, reporting tools.",
    deliverables: [
      "Requirements discovery & scoping",
      "UI/UX design & wireframes",
      "Full-stack development",
      "UAT (User Acceptance Testing)",
      "Launch + 30-day hypercare",
    ],
  },
  {
    icon: Smartphone,
    title: "Mobile Application",
    summary:
      "iOS and Android apps built from the ground up for your team or your customers — from gym membership apps to field staff tools.",
    deliverables: [
      "iOS & Android development",
      "User experience design",
      "App Store submission",
      "Push notifications & analytics",
      "Post-launch support",
    ],
  },
  {
    icon: Sparkles,
    title: "AI Automation & Integration",
    summary:
      "Embed AI into your existing workflows — chatbots, document processing, recommendation engines, predictive reporting. Practical AI, not experiments.",
    deliverables: [
      "AI use-case identification",
      "Model selection & integration",
      "Workflow automation design",
      "Testing & validation",
      "Staff training & handover",
    ],
  },
  {
    icon: MapPin,
    title: "Digitalization Consulting",
    summary:
      "Not sure where to start? We map your current operations, identify where technology will have the highest ROI, and give you a prioritized digital roadmap — without selling you something you don't need.",
    deliverables: [
      "Current workflow mapping",
      "Gap & opportunity analysis",
      "Recommended tech stack",
      "Phased implementation plan",
      "Written roadmap report",
    ],
  },
  {
    icon: Search,
    title: "Discovery & Strategy Session",
    summary:
      "A structured 2-hour session to understand your business, define the problem, and scope a solution. Output: written business process document + recommended tech stack + phased plan.",
    deliverables: [
      "Business process document",
      "Tech stack recommendation",
      "Phased implementation plan",
      "Honest fit assessment",
    ],
  },
  {
    icon: Wrench,
    title: "Maintenance & Support",
    summary:
      "We don't disappear after launch. Monthly retainers cover bug fixes, minor updates, server monitoring, and priority support. Your system stays healthy.",
    deliverables: [
      "Bug fixes & patches",
      "Minor feature updates",
      "Server monitoring & backups",
      "Priority support (24hr response)",
      "Quarterly system health review",
    ],
  },
];

export function Services() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="services" className="py-20 md:py-28">
      <div className="max-w-[1120px] mx-auto px-5 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-10 md:gap-20">
          {/* Sticky left header */}
          <div className="md:sticky md:top-24 md:self-start">
            <p
              className="text-[12px] text-[#EA580C] uppercase tracking-[0.18em] mb-3"
              style={{ fontFamily: "var(--font-jetbrains)" }}
            >
              01
            </p>
            <h2
              className="text-[36px] md:text-[40px] font-bold leading-[1.1] text-[#111110] mb-4"
              style={{ fontFamily: "var(--font-plus-jakarta)" }}
            >
              What we can
              <br />
              build for you.
            </h2>
            <p
              className="text-[16px] text-[#6B6B63] leading-relaxed"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Every system we build starts with understanding your operations
              — not your budget.
            </p>
          </div>

          {/* Accordion */}
          <div className="divide-y divide-[#E5E5DF]">
            {services.map((svc, i) => {
              const Icon = svc.icon;
              const isOpen = open === i;
              return (
                <div key={svc.title}>
                  <button
                    className="w-full flex items-center gap-4 py-5 text-left group"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                  >
                    {/* Icon circle */}
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#FFF7ED] flex items-center justify-center transition-colors duration-150 group-hover:bg-[#EA580C]/15">
                      <Icon size={18} className="text-[#EA580C]" strokeWidth={1.75} />
                    </div>
                    <span
                      className="flex-1 text-[17px] font-semibold text-[#111110]"
                      style={{ fontFamily: "var(--font-plus-jakarta)" }}
                    >
                      {svc.title}
                    </span>
                    <span
                      className="text-[#9B9B92] text-[20px] font-light select-none transition-transform duration-200"
                      style={{ transform: isOpen ? "rotate(45deg)" : "rotate(0deg)" }}
                    >
                      +
                    </span>
                  </button>

                  {/* Expandable content */}
                  <div
                    className="overflow-hidden transition-all duration-250 ease-in-out"
                    style={{ maxHeight: isOpen ? "400px" : "0px" }}
                  >
                    <div className="pl-14 pb-6">
                      <p
                        className="text-[15px] text-[#6B6B63] leading-relaxed mb-4"
                        style={{ fontFamily: "var(--font-inter)" }}
                      >
                        {svc.summary}
                      </p>
                      <ul className="flex flex-col gap-1.5">
                        {svc.deliverables.map((d) => (
                          <li
                            key={d}
                            className="flex items-start gap-2 text-[14px] text-[#9B9B92]"
                            style={{ fontFamily: "var(--font-inter)" }}
                          >
                            <span className="text-[#EA580C] mt-[2px]">·</span>
                            {d}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
