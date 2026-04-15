import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast({ title: "Message sent", description: "We'll be in touch shortly." });
      (e.target as HTMLFormElement).reset();
    }, 800);
  };

  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-navy tracking-tight">
            Request Pilot Brief
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Connect with <strong className="text-navy">David Chadima</strong> and{" "}
            <strong className="text-navy">Andrew O'Leary, PhD</strong> to discuss
            technical integration and regional deployment.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <Input placeholder="Name" required className="bg-background" />
          <Input placeholder="Organization" required className="bg-background" />
          <Input type="email" placeholder="Email" required className="bg-background" />
          <Textarea placeholder="Message" rows={4} required className="bg-background resize-none" />
          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? "Sending…" : "Send Message"}
          </Button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
