import { NavLink } from "react-router-dom";
import { ShoppingCart, Flower2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";

export default function Header() {
  const { count } = useCart();

  const navCls = ({ isActive }: { isActive: boolean }) =>
    `px-3 py-2 rounded-md text-sm ${isActive ? "bg-accent text-accent-foreground" : "hover:bg-accent/60"}`;

  return (
    <header className="border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-40">
      <div className="container mx-auto flex h-16 items-center justify-between">
        <NavLink to="/" className="flex items-center gap-2">
          <Flower2 className="h-5 w-5 text-primary" aria-hidden="true" />
          <span className="font-serif text-lg">Blossom & Bloom</span>
        </NavLink>

        <nav className="hidden md:flex items-center gap-1" aria-label="Main Navigation">
          <NavLink to="/shop" className={navCls} end>Shop</NavLink>
          <NavLink to="/subscriptions" className={navCls} end>Subscriptions</NavLink>
          <NavLink to="/about" className={navCls} end>About</NavLink>
        </nav>

        <div className="flex items-center gap-3">
          <NavLink to="/login" className="hidden sm:block">
            <Button variant="ghost">Sign in</Button>
          </NavLink>
          <NavLink to="/cart" className="relative" aria-label="View cart">
            <Button variant="outline" size="icon">
              <ShoppingCart className="h-5 w-5" />
            </Button>
            {count > 0 && (
              <span className="absolute -right-2 -top-2 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-primary px-1.5 text-xs text-primary-foreground">
                {count}
              </span>
            )}
          </NavLink>
        </div>
      </div>
    </header>
  );
}
