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
            We build the digital logistics engine that bridges the gap between public health availability and citizen participation.
          </h1>
          <p className="mt-6 text-xl md:text-2xl text-teal font-semibold leading-snug">
            Better Adherence. Earlier Detection. Massive Savings.
          </p>
          <p className="mt-5 text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl">
            Current public health outreach is stuck in the past. We replace
            one-size-fits-all paper-based notifications with an intelligent
            digital engine designed to solve the ‘last mile’ of citizen
            engagement.
          </p>
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
