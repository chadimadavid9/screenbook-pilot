import phoneMockup from "@/assets/phone-mockup.png";

const HeroSection = () => (
  <section className="pt-28 pb-16 md:pt-36 md:pb-24">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy leading-tight tracking-tight">
            Digital Logistics for Cancer Screening Adherence.
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">
            Transforming regional health outcomes by moving from paper-based
            invitations to intelligent, nudge-led digital engagement.
          </p>
          <a
            href="#pilot"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm hover:opacity-90 transition-opacity"
          >
            Explore the Pilot
            <span aria-hidden>→</span>
          </a>
        </div>

        <div className="flex justify-center lg:justify-end animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          <img
            src={phoneMockup}
            alt="Smartphone showing a personalized SMS screening notification"
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
