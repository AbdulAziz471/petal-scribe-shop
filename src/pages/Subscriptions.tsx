import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";

export default function SubscriptionsPage() {
  return (
    <main className="container mx-auto py-10">
      <SEO
        title="Flower Subscriptions — Blossom & Bloom"
        description="Set up recurring bouquet deliveries weekly, bi-weekly, or monthly."
        canonicalPath="/subscriptions"
      />

      <h1 className="font-serif text-2xl mb-2">Subscriptions</h1>
      <p className="text-muted-foreground max-w-2xl">
        Choose a schedule that suits your lifestyle and enjoy fresh flowers on repeat. Manage easily from your account.
      </p>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {[
          { name: "Weekly", desc: "Perfect for flower lovers and gifting", save: "15% off" },
          { name: "Bi-weekly", desc: "Balance freshness and value", save: "10% off" },
          { name: "Monthly", desc: "A gentle cadence of blooms", save: "8% off" },
        ].map((p) => (
          <div key={p.name} className="rounded-md border p-5">
            <h3 className="font-medium">{p.name}</h3>
            <p className="text-sm text-muted-foreground">{p.desc}</p>
            <div className="mt-2 text-xs">Save {p.save}</div>
            <div className="mt-4">
              <Button variant="outline">Select</Button>
            </div>
          </div>
        ))}
      </div>

      <p className="mt-8 text-xs text-muted-foreground">
        Subscriptions require Supabase + Stripe. We’ll enable billing after you connect them.
      </p>
      <NavLink to="/shop" className="story-link mt-4 inline-block">Back to shop</NavLink>
    </main>
  );
}
