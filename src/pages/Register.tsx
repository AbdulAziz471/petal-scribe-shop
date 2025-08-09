import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";

export default function RegisterPage() {
  return (
    <main className="container mx-auto py-10">
      <SEO
        title="Create Account — Blossom & Bloom"
        description="Register to save details and view order history."
        canonicalPath="/register"
      />

      <h1 className="font-serif text-2xl mb-6">Create account</h1>
      <form className="max-w-md grid gap-4">
        <div className="grid grid-cols-2 gap-4">
          <input placeholder="First name" className="rounded-md border bg-background px-3 py-2" />
          <input placeholder="Last name" className="rounded-md border bg-background px-3 py-2" />
        </div>
        <input placeholder="Email" className="rounded-md border bg-background px-3 py-2" />
        <input placeholder="Password" type="password" className="rounded-md border bg-background px-3 py-2" />
        <Button type="button">Create account</Button>
      </form>
      <p className="mt-3 text-sm text-muted-foreground">
        Already have an account? <NavLink className="story-link" to="/login">Sign in</NavLink>
      </p>
      <p className="mt-6 text-xs text-muted-foreground">
        To enable real accounts, connect Supabase (Auth) from the top-right green button in Lovable.
      </p>
    </main>
  );
}
