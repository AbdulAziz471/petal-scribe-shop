import { useParams, NavLink } from "react-router-dom";
import SEO from "@/components/SEO";
import { products } from "@/data/products";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useCart } from "@/contexts/CartContext";
import { toast } from "@/hooks/use-toast";
import ProductImageGallery from "@/components/ProductImageGallery";
import ProductCard from "@/components/ProductCard";

export default function ProductPage() {
  const { slug } = useParams();
  const product = products.find((p) => p.slug === slug);
  const { add } = useCart();

  // Get related products (same tags or similar)
  const relatedProducts = product 
    ? products
        .filter(p => p.id !== product.id)
        .filter(p => p.tags.some(tag => product.tags.includes(tag)))
        .slice(0, 4)
    : [];

  if (!product) {
    return (
      <main className="container mx-auto py-16">
        <h1 className="font-serif text-2xl mb-2">Bouquet not found</h1>
        <NavLink to="/shop" className="story-link">Back to shop</NavLink>
      </main>
    );
  }

  const handleAdd = () => {
    add(product, 1);
    toast({ title: "Added to cart", description: `${product.name} added to your cart.` });
  };

  return (
    <main>
      <SEO
        title={`${product.name} — Gifted And Co`}
        description={product.description}
        canonicalPath={`/product/${product.slug}`}
      />

      <section className="container mx-auto py-10 grid gap-8 lg:grid-cols-2">
        <div>
          <ProductImageGallery
            images={product.images}
            productName={product.name}
          />
        </div>
        <div>
          <h1 className="font-serif text-3xl">{product.name}</h1>
          <p className="mt-2 text-muted-foreground">{product.description}</p>
          <div className="mt-4 text-xl font-semibold">${(product.price / 100).toFixed(2)}</div>

          <div className="mt-6 flex gap-3">
            <Button variant="default" onClick={handleAdd}>Add to Cart</Button>
            <NavLink to="/checkout">
              <Button variant="outline">Buy Now</Button>
            </NavLink>
          </div>

          <Card className="mt-8">
            <CardContent className="p-5">
              <h3 className="font-medium mb-2">Subscribe & Save</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Enjoy recurring deliveries weekly, bi-weekly, or monthly with seamless billing.
              </p>
              <div className="flex flex-wrap gap-2">
                <Button variant="outline">Weekly</Button>
                <Button variant="outline">Bi-weekly</Button>
                <Button variant="outline">Monthly</Button>
              </div>
              <p className="mt-3 text-xs text-muted-foreground">
                To enable subscriptions and billing, please connect Supabase and Stripe.
              </p>
            </CardContent>
          </Card>

          <div className="mt-10">
            <h3 className="font-medium mb-2">Customer Reviews</h3>
            <p className="text-sm text-muted-foreground">{product.rating.toFixed(1)} ★ · {product.reviews} reviews</p>
            <div className="mt-3 rounded-md border p-4 text-sm text-muted-foreground">
              Reviews are coming soon. Sign in to add yours after we enable accounts.
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="container mx-auto py-16">
          <div className="mb-8">
            <h2 className="font-serif text-2xl mb-2">You might also like</h2>
            <p className="text-muted-foreground">Similar bouquets handpicked for you</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {relatedProducts.map((relatedProduct) => (
              <ProductCard key={relatedProduct.id} product={relatedProduct} />
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
