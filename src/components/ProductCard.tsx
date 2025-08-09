import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { NavLink } from "react-router-dom";
import type { Product } from "@/data/products";
import { useCart } from "@/contexts/CartContext";
import { toast } from "@/hooks/use-toast";

export default function ProductCard({ product }: { product: Product }) {
  const { add } = useCart();

  const onAdd = () => {
    add(product, 1);
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart`,
    });
  };

  return (
    <Card className="group overflow-hidden bg-card/60 shadow-sm hover:shadow-md transition-shadow">
      <NavLink to={`/product/${product.slug}`} aria-label={`View ${product.name}`}>
        <img
          src={product.image}
          alt={`${product.name} bouquet product photo`}
          loading="lazy"
          className="aspect-square w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
        />
      </NavLink>
      <CardContent className="p-4">
        <div className="flex items-start justify-between gap-2">
          <div>
            <h3 className="font-medium leading-tight">{product.name}</h3>
            <p className="text-sm text-muted-foreground">{(product.rating).toFixed(1)} ★ · {product.reviews} reviews</p>
          </div>
          <div className="text-sm font-semibold">${(product.price / 100).toFixed(2)}</div>
        </div>
        <div className="mt-3 flex gap-2">
          <NavLink to={`/product/${product.slug}`} className="flex-1">
            <Button variant="outline" className="w-full">Quick view</Button>
          </NavLink>
          <Button variant="default" onClick={onAdd}>Add</Button>
        </div>
      </CardContent>
    </Card>
  );
}
