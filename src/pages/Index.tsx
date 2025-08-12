import SEO from "@/components/SEO";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import ProductCard from "@/components/ProductCard";
import HeroSlider from "@/components/HeroSlider";
import { NavLink } from "react-router-dom";
import { HERO_IMAGE, products } from "@/data/products";

const Index = () => {
  const bestSellers = products.slice(0, 4);
  const testimonials = [
    { quote: "Absolutely stunning and long-lasting.", name: "Sofia M." },
    { quote: "The calm palette is perfect for our home.", name: "Daniel K." },
    { quote: "Exceptional quality and thoughtful design.", name: "Ava R." },
    { quote: "Reliable delivery and gorgeous blooms.", name: "Lucas T." },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Blossom & Bloom — Elegant Flower Bouquets"
        description="Shop elegant, handcrafted flower bouquets with serene, natural beauty. Discover best-sellers and seasonal arrangements."
        canonicalPath="/"
      />

      <main className="flex-1">
        {/* Hero Slider Section */}
        <HeroSlider />

        <section className="container mx-auto py-12">
          <header className="mb-6 flex items-end justify-between">
            <div>
              <h2 className="font-serif text-2xl">Featured Collections</h2>
              <p className="text-muted-foreground">Best-selling and seasonal bouquets</p>
            </div>
            <NavLink to="/shop" className="story-link">View all</NavLink>
          </header>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {bestSellers.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>

        <section className="container mx-auto py-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="font-serif text-2xl">Our Story</h2>
              <p className="mt-3 text-muted-foreground">
                We craft calming, elegant bouquets inspired by the softness of dawn, the whisper of eucalyptus, and the quiet
                beauty of nature. Every arrangement is thoughtfully composed and delivered with care.
              </p>
            </div>
            <div>
              <img
                src={products[1].image}
                alt="Atmospheric bouquet reflecting our philosophy"
                loading="lazy"
                className="w-full h-64 md:h-96 object-cover rounded-lg"
              />
            </div>
          </div>
        </section>

        <section className="container mx-auto pb-12">
          <div className="rounded-xl border bg-card/60 p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="font-serif text-2xl">Subscription Service</h2>
              <p className="mt-2 text-muted-foreground">Fresh, elegant flowers delivered to your door—weekly, bi-weekly, or monthly.</p>
            </div>
            <NavLink to="/subscriptions">
              <Button variant="hero">Start a Subscription</Button>
            </NavLink>
          </div>
        </section>

        <section className="container mx-auto py-12">
          <header className="mb-6">
            <h2 className="font-serif text-2xl">What Customers Say</h2>
            <p className="text-muted-foreground">Kind words from our community</p>
          </header>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {testimonials.map((t, i) => (
              <article key={i} className="rounded-lg border bg-card/60 p-5">
                <p className="italic">“{t.quote}”</p>
                <p className="mt-3 text-sm text-muted-foreground">— {t.name}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="container mx-auto py-12">
          <header className="mb-6 flex items-end justify-between">
            <div>
              <h2 className="font-serif text-2xl">On Instagram</h2>
              <p className="text-muted-foreground">Follow our latest floral moments</p>
            </div>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="story-link">Follow Us</a>
          </header>
          <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
            {products.slice(0, 6).map((p) => (
              <a key={p.id} href="https://instagram.com" target="_blank" rel="noreferrer" className="group block overflow-hidden rounded-md">
                <img
                  src={p.image}
                  alt={`${p.name} bouquet — Instagram post`}
                  loading="lazy"
                  className="aspect-square w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                />
              </a>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;
