import SEO from "@/components/SEO";
import ProductGallery from "@/components/ProductGallery";

export default function Shop() {
  return (
    <main>
      <SEO
        title="Shop Bouquets — Blossom & Bloom"
        description="Explore all elegant, handcrafted bouquets in serene, natural palettes."
        canonicalPath="/shop"
      />
      <ProductGallery />
    </main>
  );
}
