import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

export default function ProductGallery() {
  return (
    <section className="container mx-auto py-10">
      <div className="mb-6">
        <h2 className="font-serif text-2xl">All Bouquets</h2>
        <p className="text-muted-foreground">Handcrafted arrangements curated with care</p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  );
}
