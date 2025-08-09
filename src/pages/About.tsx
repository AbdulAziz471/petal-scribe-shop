import SEO from "@/components/SEO";
import { HERO_IMAGE } from "@/data/products";

export default function AboutPage() {
  return (
    <main className="container mx-auto py-10">
      <SEO
        title="About Us — Blossom & Bloom"
        description="Discover our philosophy, team, and mission behind elegant, calming bouquets."
        canonicalPath="/about"
      />

      <h1 className="font-serif text-2xl mb-2">About Us</h1>
      <p className="text-muted-foreground max-w-2xl">We craft serene, elegant bouquets that bring calm beauty to everyday life—thoughtfully designed and delivered with care.</p>

      <section className="mt-8 grid gap-8 md:grid-cols-2 items-center">
        <article>
          <h2 className="font-serif text-xl mb-2">Our Story</h2>
          <p className="text-muted-foreground">Born from a lifelong passion for florals, Blossom & Bloom began with a simple idea: flowers should feel effortless. Our artisans curate gentle palettes—soft blushes, airy whites, fresh greens—to create arrangements that soothe and delight.</p>
          <p className="text-muted-foreground mt-3">We partner with trusted growers and prioritize sustainable practices, ensuring every bouquet is fresh, long‑lasting, and responsibly sourced.</p>
        </article>
        <img src={HERO_IMAGE} alt="Studio scene with soft-toned bouquet and natural light" className="w-full rounded-md object-cover" />
      </section>

      <section className="mt-10 grid gap-6 md:grid-cols-3">
        <div className="rounded-md border p-5">
          <h3 className="font-medium">Our Team</h3>
          <p className="text-sm text-muted-foreground mt-1">Designers, growers, and couriers united by a love of calm, modern florals.</p>
        </div>
        <div className="rounded-md border p-5">
          <h3 className="font-medium">Founders</h3>
          <p className="text-sm text-muted-foreground mt-1">Blossom & Bloom was founded by friends who believe in everyday beauty and mindful gifting.</p>
        </div>
        <div className="rounded-md border p-5">
          <h3 className="font-medium">Our Mission</h3>
          <p className="text-sm text-muted-foreground mt-1">To make elegant florals accessible and stress‑free, delivered with impeccable care.</p>
        </div>
      </section>
    </main>
  );
}
