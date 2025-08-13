import SEO from "@/components/SEO";
import EnhancedProductGallery from "@/components/EnhancedProductGallery";

export default function Shop() {
  return (
    <main>
      <SEO
        title="Shop Bouquets — Gifted And Co"
        description="Explore all elegant, handcrafted bouquets in serene, natural palettes. Filter by category, color, and price."
        canonicalPath="/shop"
      />
      <EnhancedProductGallery />
    </main>
  );
}
