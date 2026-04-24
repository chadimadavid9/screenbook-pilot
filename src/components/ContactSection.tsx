import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Mail } from "lucide-react";

const contacts = [
  { name: "Andrew O'Leary, PhD", email: "andrew@screenbook.health" },
  { name: "David Chadima", email: "david@screenbook.health" },
];

const ContactSection = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast({ title: "Briefing requested", description: "We'll be in touch shortly." });
      (e.target as HTMLFormElement).reset();
    }, 800);
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-teal-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 rounded-full bg-background text-teal text-xs font-semibold tracking-wide uppercase mb-4">
            Strategic Briefing
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-navy tracking-tight">
            Request a Technical Briefing.
          </h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
            Connect with us to discuss technical integration and regional
            deployment tailored to your health ecosystem's specific needs.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-8 items-start">
          <div className="md:col-span-2 space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-navy">
              Direct Contacts
            </h3>
            {contacts.map((c) => (
              <a
                key={c.email}
                href={`mailto:${c.email}`}
                className="flex items-start gap-3 rounded-xl bg-background p-4 border border-border hover:border-teal transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-teal-light flex items-center justify-center shrink-0 group-hover:bg-teal/10 transition-colors">
                  <Mail className="w-5 h-5 text-teal" />
                </div>
                <div className="min-w-0">
                  <div className="font-semibold text-navy text-sm">{c.name}</div>
                  <div className="text-sm text-muted-foreground truncate group-hover:text-teal transition-colors">
                    {c.email}
                  </div>
                </div>
              </a>
            ))}
          </div>

          <form
            onSubmit={handleSubmit}
            className="md:col-span-3 space-y-4 rounded-xl bg-background p-6 md:p-8 shadow-sm border border-border"
          >
            <Input placeholder="Name" required className="bg-background" />
            <Input placeholder="Organisation / Health Authority" required className="bg-background" />
            <Input type="email" placeholder="Email" required className="bg-background" />
            <Textarea
              placeholder="Briefly describe your region and screening priorities…"
              rows={4}
              required
              className="bg-background resize-none"
            />
            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? "Sending…" : "Request Briefing"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
