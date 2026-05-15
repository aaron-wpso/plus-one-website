import { Hero } from "@/components/Hero";
import { TrustBar } from "@/components/TrustBar";
import { Services } from "@/components/Services";
import { CaseStudies } from "@/components/CaseStudies";
import { WhyPlusOne } from "@/components/WhyPlusOne";
import { Process } from "@/components/Process";
import { CTASection } from "@/components/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Services />
      <CaseStudies />
      <WhyPlusOne />
      <Process />
      <CTASection />
    </>
  );
}
