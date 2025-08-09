import SEO from "@/components/SEO";
import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";

export default function CartPage() {
  const { items, remove, setQty, total } = useCart();
  const hasItems = items.length > 0;

  return (
    <main className="container mx-auto py-10">
      <SEO
        title="Your Cart — Blossom & Bloom"
        description="Review your selected bouquets and proceed to secure checkout."
        canonicalPath="/cart"
      />

      <h1 className="font-serif text-2xl mb-6">Shopping Cart</h1>

      {!hasItems ? (
        <div className="text-muted-foreground">
          Your cart is empty. <NavLink className="story-link" to="/shop">Browse bouquets</NavLink>.
        </div>
      ) : (
        <div className="grid gap-8 md:grid-cols-[2fr_1fr]">
          <ul className="space-y-4">
            {items.map((i) => (
              <li key={i.id} className="flex gap-4 border rounded-md p-3">
                <img src={i.image} alt={`${i.name} bouquet thumbnail`} className="h-24 w-24 rounded object-cover" />
                <div className="flex-1">
                  <div className="font-medium">{i.name}</div>
                  <div className="text-sm text-muted-foreground">${(i.price / 100).toFixed(2)}</div>
                  <div className="mt-3 flex items-center gap-2">
                    <label htmlFor={`qty-${i.id}`} className="text-sm">Qty</label>
                    <input
                      id={`qty-${i.id}`}
                      type="number"
                      min={1}
                      value={i.quantity}
                      onChange={(e) => setQty(i.id, Math.max(1, Number(e.target.value)))}
                      className="w-20 rounded-md border bg-background px-2 py-1 text-sm"
                    />
                    <Button variant="ghost" onClick={() => remove(i.id)}>Remove</Button>
                  </div>
                </div>
                <div className="font-medium">${((i.price * i.quantity) / 100).toFixed(2)}</div>
              </li>
            ))}
          </ul>

          <aside className="rounded-md border p-4 h-fit sticky top-24">
            <h2 className="font-medium mb-2">Order Summary</h2>
            <div className="flex justify-between text-sm"><span>Subtotal</span><span>${(total / 100).toFixed(2)}</span></div>
            <p className="mt-2 text-xs text-muted-foreground">Shipping and taxes calculated at checkout.</p>
            <NavLink to="/checkout">
              <Button className="w-full mt-4">Proceed to Checkout</Button>
            </NavLink>
          </aside>
        </div>
      )}
    </main>
  );
}
