import { MessageSquare, Route, ShieldCheck } from "lucide-react";

const features = [
  {
    icon: MessageSquare,
    title: "Smart Notifications",
    desc: "Context-aware SMS and Email workflows that adapt to citizen behavior and regional demographics, ensuring the message is seen and acted upon.",
  },
  {
    icon: Route,
    title: "Frictionless Pathways",
    desc: "Personalized digital landing pages that remove every barrier between receiving a notice and requesting a kit or booking an appointment.",
  },
  {
    icon: ShieldCheck,
    title: "Data-Driven Governance",
    desc: "A secure, GDPR-compliant dashboard providing health authorities with real-time analytics on engagement trends and population-level adherence.",
  },
];

const EngineSection = () => (
  <section id="engine" className="py-16 md:py-24 bg-teal-light">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center mb-14">
        <span className="inline-block px-3 py-1 rounded-full bg-background text-teal text-xs font-semibold tracking-wide uppercase mb-4">
          The Platform
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-navy tracking-tight">
          The Digital Logistics Engine
        </h2>
        <p className="mt-4 text-muted-foreground text-lg">
          Three integrated layers engineered to deliver measurable adherence
          uplift at population scale.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {features.map((f) => (
          <div
            key={f.title}
            className="rounded-xl bg-background p-7 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all border border-transparent hover:border-teal-muted"
          >
            <div className="w-12 h-12 rounded-lg bg-teal-light flex items-center justify-center mb-5">
              <f.icon className="w-6 h-6 text-teal" />
            </div>
            <h3 className="text-xl font-semibold text-navy mb-3">{f.title}</h3>
            <p className="text-muted-foreground leading-relaxed text-sm">{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default EngineSection;
