"use client";

import { useState } from "react";
import { CheckCircle } from "lucide-react";

const services = [
  "Custom Web Application",
  "Mobile App",
  "AI Automation",
  "Digitalization Consulting",
  "Discovery & Strategy Session",
  "Not sure yet — let's talk",
];

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [selected, setSelected] = useState<string[]>([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [business, setBusiness] = useState("");
  const [message, setMessage] = useState("");

  function toggleService(s: string) {
    setSelected((prev) =>
      prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]
    );
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, business, services: selected, message }),
      });
      if (!res.ok) throw new Error();
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please email us directly at hello@plusonesoftwaresolution.com");
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center text-center py-20 gap-4">
        <CheckCircle size={48} className="text-[#EA580C]" />
        <h2
          className="text-[28px] font-bold text-[#111110]"
          style={{ fontFamily: "var(--font-plus-jakarta)" }}
        >
          Message received.
        </h2>
        <p
          className="text-[16px] text-[#6B6B63] max-w-[320px]"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          Aaron will get back to you within 1 business day. In the meantime,
          follow the journey on Instagram.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      {/* Name */}
      <div>
        <label
          className="block text-[11px] text-[#9B9B92] uppercase tracking-widest mb-2"
          style={{ fontFamily: "var(--font-jetbrains)" }}
        >
          Name
        </label>
        <input
          required
          type="text"
          placeholder="Your full name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full h-12 px-4 rounded-lg border border-[#E5E5DF] bg-white text-[15px] text-[#111110] placeholder:text-[#9B9B92] focus:outline-none focus:border-[#EA580C] transition-colors duration-150"
          style={{ fontFamily: "var(--font-inter)" }}
        />
      </div>

      {/* Email */}
      <div>
        <label
          className="block text-[11px] text-[#9B9B92] uppercase tracking-widest mb-2"
          style={{ fontFamily: "var(--font-jetbrains)" }}
        >
          Email
        </label>
        <input
          required
          type="email"
          placeholder="your@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full h-12 px-4 rounded-lg border border-[#E5E5DF] bg-white text-[15px] text-[#111110] placeholder:text-[#9B9B92] focus:outline-none focus:border-[#EA580C] transition-colors duration-150"
          style={{ fontFamily: "var(--font-inter)" }}
        />
      </div>

      {/* Business */}
      <div>
        <label
          className="block text-[11px] text-[#9B9B92] uppercase tracking-widest mb-2"
          style={{ fontFamily: "var(--font-jetbrains)" }}
        >
          Your Business
        </label>
        <input
          type="text"
          placeholder="e.g. F&B, Interior Design, Fitness..."
          value={business}
          onChange={(e) => setBusiness(e.target.value)}
          className="w-full h-12 px-4 rounded-lg border border-[#E5E5DF] bg-white text-[15px] text-[#111110] placeholder:text-[#9B9B92] focus:outline-none focus:border-[#EA580C] transition-colors duration-150"
          style={{ fontFamily: "var(--font-inter)" }}
        />
      </div>

      {/* Services */}
      <div>
        <label
          className="block text-[11px] text-[#9B9B92] uppercase tracking-widest mb-3"
          style={{ fontFamily: "var(--font-jetbrains)" }}
        >
          What do you need? (select all that apply)
        </label>
        <div className="flex flex-col gap-2">
          {services.map((svc) => {
            const active = selected.includes(svc);
            return (
              <button
                key={svc}
                type="button"
                onClick={() => toggleService(svc)}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg border text-left text-[14px] transition-all duration-150 ${
                  active
                    ? "border-[#EA580C] bg-[#FFF7ED] text-[#EA580C]"
                    : "border-[#E5E5DF] bg-white text-[#6B6B63] hover:border-[#EA580C]/50"
                }`}
                style={{ fontFamily: "var(--font-inter)" }}
              >
                <span
                  className={`w-4 h-4 rounded border flex items-center justify-center flex-shrink-0 ${
                    active
                      ? "border-[#EA580C] bg-[#EA580C]"
                      : "border-[#E5E5DF]"
                  }`}
                >
                  {active && (
                    <svg
                      width="10"
                      height="8"
                      viewBox="0 0 10 8"
                      fill="none"
                    >
                      <path
                        d="M1 4L3.5 6.5L9 1"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </span>
                {svc}
              </button>
            );
          })}
        </div>
      </div>

      {/* Message */}
      <div>
        <label
          className="block text-[11px] text-[#9B9B92] uppercase tracking-widest mb-2"
          style={{ fontFamily: "var(--font-jetbrains)" }}
        >
          Tell us about your business
        </label>
        <textarea
          rows={4}
          placeholder="What's the biggest operational challenge you're facing right now?"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full px-4 py-3 rounded-lg border border-[#E5E5DF] bg-white text-[15px] text-[#111110] placeholder:text-[#9B9B92] focus:outline-none focus:border-[#EA580C] transition-colors duration-150 resize-none"
          style={{ fontFamily: "var(--font-inter)" }}
        />
      </div>

      {error && (
        <p
          className="text-[13px] text-red-600 leading-relaxed"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full h-14 bg-[#EA580C] hover:bg-[#C2410C] disabled:opacity-60 text-white font-semibold text-[16px] rounded-full transition-all duration-150 hover:scale-[1.01]"
        style={{ fontFamily: "var(--font-plus-jakarta)" }}
      >
        {loading ? "Sending..." : "Send Message →"}
      </button>
    </form>
  );
}
