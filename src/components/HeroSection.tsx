import { AlertTriangle, Sparkles, ArrowRight, ShieldCheck, Layers, Brain } from "lucide-react";
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

          <div className="mt-8 grid sm:grid-cols-[1fr_auto_1fr] gap-4 items-stretch max-w-xl">
            {/* Problem */}
            <div className="rounded-xl border border-destructive/20 bg-destructive/5 p-5 shadow-sm">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="w-4 h-4 text-destructive" />
                <span className="text-xs font-semibold uppercase tracking-wide text-destructive">
                  The Problem
                </span>
              </div>
              <p className="text-sm text-navy font-semibold leading-snug mb-2">
                Billions invested. Participation stalls.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Europe spends billions on cancer screening, yet uptake is held back by
                outdated, one-size-fits-all postal outreach that no longer works in a
                digital world.
              </p>
            </div>

            {/* Arrow divider */}
            <div className="hidden sm:flex items-center justify-center">
              <div className="w-9 h-9 rounded-full bg-teal text-white flex items-center justify-center shadow-md">
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>

            {/* Solution */}
            <div className="rounded-xl border border-teal/30 bg-teal-light p-5 shadow-sm">
              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="w-4 h-4 text-teal" />
                <span className="text-xs font-semibold uppercase tracking-wide text-teal">
                  The Solution
                </span>
              </div>
              <p className="text-sm text-navy font-semibold leading-snug mb-2">
                ScreenBook orchestrates engagement.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                An intelligent platform that helps health authorities deliver
                targeted communication — improving engagement and increasing
                screening uptake at scale.
              </p>
              <div className="flex flex-wrap gap-1.5">
                <span className="inline-flex items-center gap-1 rounded-full bg-background px-2 py-0.5 text-[11px] font-medium text-navy border border-teal/20">
                  <ShieldCheck className="w-3 h-3 text-teal" /> GDPR-compliant
                </span>
                <span className="inline-flex items-center gap-1 rounded-full bg-background px-2 py-0.5 text-[11px] font-medium text-navy border border-teal/20">
                  <Layers className="w-3 h-3 text-teal" /> Multi-channel
                </span>
                <span className="inline-flex items-center gap-1 rounded-full bg-background px-2 py-0.5 text-[11px] font-medium text-navy border border-teal/20">
                  <Brain className="w-3 h-3 text-teal" /> Behaviourally informed
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
