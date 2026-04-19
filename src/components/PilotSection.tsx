import { TrendingUp, Users, Target } from "lucide-react";

const stats = [
  { icon: Users, label: "Citizen Cohort", value: "10K – 50K" },
  { icon: Target, label: "Screening Focus", value: "Colorectal · Breast · Cervical" },
  { icon: TrendingUp, label: "Adherence Uplift Target", value: "+15–20%" },
];

const PilotSection = () => (
  <section id="pilot" className="py-16 md:py-24">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <span className="inline-block px-3 py-1 rounded-full bg-teal-light text-teal text-xs font-semibold tracking-wide uppercase mb-4">
          Global Innovation Pilot Track
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-navy tracking-tight">
          A Partner for Visionary Health Authorities.
        </h2>
        <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
          We are seeking regional health partners globally for a high-impact
          pilot program (10,000 – 50,000 citizen cohort) to validate adherence
          uplift in Colorectal, Breast, or Cervical cancer screenings.
        </p>
      </div>

      <div className="grid sm:grid-cols-3 gap-5 mb-10 max-w-5xl mx-auto">
        {stats.map((s) => (
          <div
            key={s.label}
            className="rounded-xl border border-border bg-background p-6 text-center shadow-sm"
          >
            <s.icon className="w-6 h-6 text-teal mx-auto mb-3" />
            <div className="text-2xl md:text-3xl font-bold text-navy">{s.value}</div>
            <div className="mt-2 text-xs font-medium text-muted-foreground uppercase tracking-wide">
              {s.label}
            </div>
          </div>
        ))}
      </div>

      <div className="max-w-4xl mx-auto rounded-2xl bg-navy text-white p-8 md:p-10 shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-teal/20 rounded-full blur-3xl -translate-y-32 translate-x-32" aria-hidden />
        <div className="relative">
          <span className="inline-block px-3 py-1 rounded-full bg-teal text-white text-xs font-semibold tracking-wide uppercase mb-4">
            Success-Fee Model
          </span>
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Zero-Risk Performance Model.
          </h3>
          <p className="text-white/80 leading-relaxed text-base md:text-lg">
            Our model aligns our success with your public health targets. We
            operate on a <strong className="text-white">success-fee basis</strong>, where costs are
            linked directly to the verified percentage-point uplift in
            participation above your current baseline.
          </p>
          <div className="mt-6 inline-flex items-center gap-3 rounded-lg bg-white/10 backdrop-blur px-5 py-3 border border-white/20">
            <TrendingUp className="w-5 h-5 text-teal" />
            <span className="text-sm font-medium">
              Targeting a <strong className="text-white">+15-20% relative increase</strong> in screening adherence.
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default PilotSection;
