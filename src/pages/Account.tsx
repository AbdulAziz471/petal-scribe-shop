import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { NavLink } from "react-router-dom";

export default function AccountPage() {
  return (
    <main className="container mx-auto py-10">
      <SEO
        title="Your Account — Blossom & Bloom"
        description="Manage your profile, orders, and subscriptions."
        canonicalPath="/account"
      />

      <h1 className="font-serif text-2xl mb-2">Your Account</h1>
      <p className="text-muted-foreground max-w-2xl">Sign in to view your profile details, order history, and subscription settings.</p>

      <div className="mt-6 flex gap-3">
        <NavLink to="/login"><Button variant="outline">Sign in</Button></NavLink>
        <NavLink to="/register"><Button variant="default">Create account</Button></NavLink>
      </div>

      <section className="mt-8 grid gap-6 md:grid-cols-3">
        <Card>
          <CardContent className="p-5">
            <h3 className="font-medium">Profile</h3>
            <p className="text-sm text-muted-foreground">Personal details and addresses will appear here after enabling authentication.</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-5">
            <h3 className="font-medium">Orders</h3>
            <p className="text-sm text-muted-foreground">Your past orders will be listed here once we connect Supabase.</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-5">
            <h3 className="font-medium">Subscriptions</h3>
            <p className="text-sm text-muted-foreground">Manage your recurring deliveries via Stripe Customer Portal (coming soon).</p>
          </CardContent>
        </Card>
      </section>

      <p className="mt-6 text-xs text-muted-foreground">To enable real accounts and data, connect the built‑in Supabase integration.</p>
    </main>
  );
}
