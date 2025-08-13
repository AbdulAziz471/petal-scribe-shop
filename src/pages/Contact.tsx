import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, Instagram, Facebook } from "lucide-react";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      (toast as any)({ title: "Message sent", description: "Thanks! We'll get back to you shortly." });
    }, 600);
  };

  return (
    <main className="container mx-auto py-10">
      <SEO
        title="Contact Us — Gifted And Co"
        description="Have a question? Reach out to Gifted And Co for support on orders, subscriptions, and more."
        canonicalPath="/contact"
      />

      <h1 className="font-serif text-2xl mb-2">Contact Us</h1>
      <p className="text-muted-foreground max-w-2xl">We'd love to hear from you. Send us a message and our team will respond within 1–2 business days.</p>

      <div className="mt-8 grid gap-8 md:grid-cols-2">
        <form onSubmit={onSubmit} className="rounded-md border p-6 bg-card/50">
          <div className="grid gap-4">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input id="name" name="name" placeholder="Your name" required />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" type="email" placeholder="you@example.com" required />
            </div>
            <div>
              <Label htmlFor="subject">Subject</Label>
              <Input id="subject" name="subject" placeholder="How can we help?" required />
            </div>
            <div>
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" name="message" placeholder="Write your message..." rows={6} required />
            </div>
            <div>
              <Button type="submit" disabled={loading}>{loading ? "Sending..." : "Send Message"}</Button>
            </div>
          </div>
        </form>

        <aside className="rounded-md border p-6 bg-card/50">
          <h2 className="font-medium">Contact Information</h2>
          <div className="mt-4 space-y-3 text-sm">
            <div className="flex items-center gap-2"><Mail className="h-4 w-4" aria-hidden="true" /><a href="mailto:hello@blossomandbloom.com" className="story-link">hello@blossomandbloom.com</a></div>
            <div className="flex items-center gap-2"><Phone className="h-4 w-4" aria-hidden="true" /><a href="tel:+18005550134" className="story-link">+1 (800) 555‑0134</a></div>
          </div>
          <div className="mt-6">
            <h3 className="font-medium">Follow us</h3>
            <div className="mt-3 flex gap-3">
              <a aria-label="Instagram" href="https://instagram.com" target="_blank" rel="noreferrer" className="hover-scale rounded-md border px-3 py-2 inline-flex items-center gap-2"><Instagram className="h-4 w-4" />Instagram</a>
              <a aria-label="Facebook" href="https://facebook.com" target="_blank" rel="noreferrer" className="hover-scale rounded-md border px-3 py-2 inline-flex items-center gap-2"><Facebook className="h-4 w-4" />Facebook</a>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}
