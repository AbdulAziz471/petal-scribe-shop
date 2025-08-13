import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";

export default function LoginPage() {
  return (
    <main className="container mx-auto py-10">
      <SEO
        title="Sign In — Gifted And Co"
        description="Access your account to track orders and manage details."
        canonicalPath="/login"
      />

      <h1 className="font-serif text-2xl mb-6">Sign in</h1>
      <form className="max-w-md grid gap-4">
        <input placeholder="Email" className="rounded-md border bg-background px-3 py-2" />
        <input placeholder="Password" type="password" className="rounded-md border bg-background px-3 py-2" />
        <Button type="button">Sign in</Button>
      </form>
      <p className="mt-3 text-sm text-muted-foreground">
        New here? <NavLink className="story-link" to="/register">Create an account</NavLink>
      </p>
      <p className="mt-6 text-xs text-muted-foreground">
        To enable real accounts, connect Supabase (Auth) from the top-right green button in Lovable.
      </p>
    </main>
  );
}
