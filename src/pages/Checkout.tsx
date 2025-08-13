import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { toast } from "@/hooks/use-toast";
import { useState } from "react";

export default function CheckoutPage() {
  const { items, total, clear } = useCart();
  const [step, setStep] = useState<1 | 2 | 3>(1);

  const handlePay = () => {
    toast({
      title: "Checkout not yet connected",
      description:
        "To enable secure payments, connect Supabase and add your Stripe secret key.",
    });
    clear();
  };

  return (
    <main className="container mx-auto py-10">
      <SEO
        title="Secure Checkout — Gifted And Co"
        description="Complete your order with our simple, secure checkout."
        canonicalPath="/checkout"
      />

      <h1 className="font-serif text-2xl mb-6">Checkout</h1>

      <div className="mb-6 flex gap-2 text-sm">
        <span className={step >= 1 ? "font-medium" : "text-muted-foreground"}>1. Shipping</span>
        <span>›</span>
        <span className={step >= 2 ? "font-medium" : "text-muted-foreground"}>2. Billing</span>
        <span>›</span>
        <span className={step >= 3 ? "font-medium" : "text-muted-foreground"}>3. Payment</span>
      </div>

      <div className="grid gap-8 md:grid-cols-[2fr_1fr]">
        <section className="space-y-6">
          {step === 1 && (
            <form className="grid gap-4">
              <div className="grid grid-cols-2 gap-4">
                <input placeholder="First name" className="rounded-md border bg-background px-3 py-2" />
                <input placeholder="Last name" className="rounded-md border bg-background px-3 py-2" />
              </div>
              <input placeholder="Address" className="rounded-md border bg-background px-3 py-2" />
              <div className="grid grid-cols-3 gap-4">
                <input placeholder="City" className="rounded-md border bg-background px-3 py-2" />
                <input placeholder="State" className="rounded-md border bg-background px-3 py-2" />
                <input placeholder="ZIP" className="rounded-md border bg-background px-3 py-2" />
              </div>
              <div className="flex justify-end">
                <Button onClick={(e) => { e.preventDefault(); setStep(2); }}>Continue</Button>
              </div>
            </form>
          )}
          {step === 2 && (
            <form className="grid gap-4">
              <input placeholder="Email" className="rounded-md border bg-background px-3 py-2" />
              <input placeholder="Phone" className="rounded-md border bg-background px-3 py-2" />
              <div className="flex justify-between">
                <Button variant="ghost" onClick={(e) => { e.preventDefault(); setStep(1); }}>Back</Button>
                <Button onClick={(e) => { e.preventDefault(); setStep(3); }}>Continue</Button>
              </div>
            </form>
          )}
          {step === 3 && (
            <form className="grid gap-4">
              <input placeholder="Card number" className="rounded-md border bg-background px-3 py-2" />
              <div className="grid grid-cols-2 gap-4">
                <input placeholder="MM / YY" className="rounded-md border bg-background px-3 py-2" />
                <input placeholder="CVC" className="rounded-md border bg-background px-3 py-2" />
              </div>
              <div className="flex justify-between">
                <Button variant="ghost" onClick={(e) => { e.preventDefault(); setStep(2); }}>Back</Button>
                <Button onClick={(e) => { e.preventDefault(); handlePay(); }}>Pay ${(total / 100).toFixed(2)}</Button>
              </div>
            </form>
          )}
        </section>

        <aside className="rounded-md border p-4 h-fit sticky top-24">
          <h2 className="font-medium mb-2">Order Summary</h2>
          <ul className="space-y-2 text-sm">
            {items.map((i) => (
              <li key={i.id} className="flex justify-between">
                <span>{i.quantity} × {i.name}</span>
                <span>${((i.price * i.quantity) / 100).toFixed(2)}</span>
              </li>
            ))}
          </ul>
          <div className="mt-3 flex justify-between font-medium">
            <span>Total</span>
            <span>${(total / 100).toFixed(2)}</span>
          </div>
        </aside>
      </div>
    </main>
  );
}
