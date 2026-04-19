import { Bell, Brain, MousePointerClick, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: Bell,
    title: "Intelligent Notification",
    desc: "Context-aware messages timed and framed for each citizen segment.",
  },
  {
    icon: Brain,
    title: "Behavioral Trigger",
    desc: "Evidence-based nudges that overcome anxiety, inertia, and procrastination.",
  },
  {
    icon: MousePointerClick,
    title: "Frictionless Action",
    desc: "A one-tap path from notification to kit request or appointment.",
  },
];

const NudgeSection = () => (
  <section className="py-16 md:py-24">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center mb-14">
        <span className="inline-block px-3 py-1 rounded-full bg-teal-light text-teal text-xs font-semibold tracking-wide uppercase mb-4">
          Engagement Engineering
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-navy tracking-tight">
          Powered by Behavioral Science, Not Just Digitalization.
        </h2>
        <p className="mt-5 text-muted-foreground text-lg leading-relaxed">
          The barrier to screening isn't a lack of technology — it is behavioral
          inertia. We utilize evidence-based <strong className="text-navy">Nudge Theory</strong> to
          move citizens from <em>notified</em> to <em>screened</em> through
          psychological optimization of the entire engagement path.
        </p>
      </div>

      <div className="grid md:grid-cols-[1fr_auto_1fr_auto_1fr] gap-6 md:gap-4 items-stretch max-w-5xl mx-auto">
        {steps.map((step, i) => (
          <div key={step.title} className="contents">
            <div className="rounded-xl border border-border bg-background p-6 md:p-7 shadow-sm hover:shadow-md transition-shadow text-center">
              <div className="mx-auto w-12 h-12 rounded-lg bg-teal-light flex items-center justify-center mb-4">
                <step.icon className="w-6 h-6 text-teal" />
              </div>
              <h3 className="font-semibold text-navy text-lg mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
            </div>
            {i < steps.length - 1 && (
              <div className="hidden md:flex items-center justify-center text-teal">
                <ArrowRight className="w-6 h-6" />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default NudgeSection;
