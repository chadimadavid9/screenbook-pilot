import { Sparkles, ShieldCheck, Layers, Brain, Target, TrendingUp, Smartphone } from "lucide-react";
import phoneMockup from "@/assets/phone-mockup.png";

const HeroSection = () => (
  <section className="pt-28 pb-16 md:pt-36 md:pb-24">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="animate-fade-in-up">
          <span className="inline-block px-3 py-1 rounded-full bg-teal-light text-teal text-xs font-semibold tracking-wide uppercase mb-5">
            Digital Logistics for Public Health
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy leading-[1.1] tracking-tight">
            Bridging the Gap Between Public Health Availability and Citizen Participation
          </h1>
          <p className="mt-6 text-xl md:text-2xl text-teal font-semibold leading-snug">
            Better Adherence. Earlier Detection. Massive Savings.
          </p>

          <div className="mt-8 max-w-xl">
            <div className="rounded-xl border border-teal/30 bg-teal-light p-6 shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="w-4 h-4 text-teal" />
                <span className="text-xs font-semibold uppercase tracking-wide text-teal">
                  What We Do
                </span>
              </div>
              <p className="text-sm md:text-base text-navy leading-relaxed mb-3">
                Europe invests <span className="font-semibold">billions</span> in cancer screening programmes, yet participation remains limited by outdated, one-size-fits-all outreach. Postal letters alone are no longer effective in a digital world.
              </p>
              <p className="text-sm md:text-base text-navy leading-relaxed mb-4">
                <span className="font-semibold text-teal">ScreenBook</span> is an intelligent orchestration platform that enables health authorities to deliver targeted communication — improving engagement and increasing screening uptake at scale.
              </p>
              <div className="flex flex-wrap gap-1.5">
                <span className="inline-flex items-center gap-1 rounded-full bg-background px-2.5 py-1 text-[11px] font-medium text-navy border border-teal/20">
                  <ShieldCheck className="w-3 h-3 text-teal" /> GDPR-compliant
                </span>
                <span className="inline-flex items-center gap-1 rounded-full bg-background px-2.5 py-1 text-[11px] font-medium text-navy border border-teal/20">
                  <Layers className="w-3 h-3 text-teal" /> Multi-channel
                </span>
                <span className="inline-flex items-center gap-1 rounded-full bg-background px-2.5 py-1 text-[11px] font-medium text-navy border border-teal/20">
                  <Brain className="w-3 h-3 text-teal" /> Behaviourally informed
                </span>
                <span className="inline-flex items-center gap-1 rounded-full bg-background px-2.5 py-1 text-[11px] font-medium text-navy border border-teal/20">
                  <Target className="w-3 h-3 text-teal" /> Targeted outreach
                </span>
                <span className="inline-flex items-center gap-1 rounded-full bg-background px-2.5 py-1 text-[11px] font-medium text-navy border border-teal/20">
                  <Smartphone className="w-3 h-3 text-teal" /> Digital-first
                </span>
                <span className="inline-flex items-center gap-1 rounded-full bg-background px-2.5 py-1 text-[11px] font-medium text-navy border border-teal/20">
                  <TrendingUp className="w-3 h-3 text-teal" /> Scalable uptake
                </span>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm hover:opacity-90 transition-opacity"
            >
              Request a Briefing
              <span aria-hidden>→</span>
            </a>
            <a
              href="#engine"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-6 py-3 text-sm font-semibold text-navy hover:border-teal hover:text-teal transition-colors"
            >
              Explore the Engine
            </a>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          <img
            src={phoneMockup}
            alt="Smartphone showing a personalised SMS screening notification"
            className="w-72 md:w-80 lg:w-96 drop-shadow-2xl"
            width={512}
            height={768}
          />
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
