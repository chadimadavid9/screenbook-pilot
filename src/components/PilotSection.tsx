import { Card, CardContent } from "@/components/ui/card";

const highlights = [
  { label: "Citizen Cohort", value: "10,000" },
  { label: "Performance Model", value: "Zero-Risk" },
  { label: "Participation Target", value: "+15–20%" },
];

const PilotSection = () => (
  <section id="pilot" className="py-16 md:py-24 bg-teal-light">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-navy tracking-tight">
          2026 Catalan Pilot Program Framework
        </h2>
        <p className="mt-4 text-muted-foreground text-lg">
          A deployment-ready pilot aligned with the Catalan health ecosystem,
          built in collaboration with Biocat and ACCIÓ.
        </p>
      </div>

      <div className="grid sm:grid-cols-3 gap-6 mb-12">
        {highlights.map((h) => (
          <Card key={h.label} className="border-none shadow-sm bg-background">
            <CardContent className="flex flex-col items-center justify-center py-8">
              <span className="text-3xl md:text-4xl font-bold text-teal">
                {h.value}
              </span>
              <span className="mt-2 text-sm font-medium text-muted-foreground">
                {h.label}
              </span>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="max-w-3xl mx-auto border-none shadow-sm bg-background">
        <CardContent className="p-8">
          <h3 className="text-xl font-semibold text-navy mb-3">
            Success-Fee Model
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            ScreenBook operates on a <strong className="text-navy">Success-Fee</strong> basis — costs are
            tied directly to the measurable increase in screening participation
            (Uplift). This zero-risk performance model means the health system
            pays only for proven results, ensuring full alignment of incentives
            between technology provider and public health outcomes.
          </p>
        </CardContent>
      </Card>
    </div>
  </section>
);

export default PilotSection;
