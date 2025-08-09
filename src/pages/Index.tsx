import SEO from "@/components/SEO";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { NavLink } from "react-router-dom";
import { HERO_IMAGE, products } from "@/data/products";

const Index = () => {
  const bestSellers = products.slice(0, 4);

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Blossom & Bloom — Elegant Flower Bouquets"
        description="Shop elegant, handcrafted flower bouquets with serene, natural beauty. Discover best-sellers and seasonal arrangements."
        canonicalPath="/"
      />

      <main className="flex-1">
        <section className="relative">
          <img
            src={HERO_IMAGE}
            alt="Elegant bouquet hero image showcasing blush roses, peonies, and eucalyptus"
            className="h-[80vh] md:h-[90vh] w-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-background/30 to-transparent" />
          <div className="container mx-auto absolute inset-0 flex items-end pb-10">
            <div className="max-w-xl animate-enter">
              <h1 className="font-serif text-4xl md:text-5xl leading-tight">Calm, Elegant Bouquets for Every Moment</h1>
              <p className="mt-3 text-muted-foreground">Handcrafted arrangements in soft, natural tones—delivered with care.</p>
              <div className="mt-6 flex gap-3">
                <NavLink to="/shop">
                  <Button variant="hero">Shop All Bouquets</Button>
                </NavLink>
                <NavLink to="/subscriptions">
                  <Button variant="outline">Subscriptions</Button>
                </NavLink>
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto py-12">
          <header className="mb-6 flex items-end justify-between">
            <div>
              <h2 className="font-serif text-2xl">Best Sellers</h2>
              <p className="text-muted-foreground">Loved by our community</p>
            </div>
            <NavLink to="/shop" className="story-link">View all</NavLink>
          </header>

          <div className="relative">
            <Carousel className="px-12">
              <CarouselContent>
                {bestSellers.map((p) => (
                  <CarouselItem key={p.id} className="md:basis-1/2 lg:basis-1/3">
                    <Card className="overflow-hidden">
                      <img
                        src={p.image}
                        alt={`${p.name} bouquet product photo`}
                        loading="lazy"
                        className="aspect-square w-full object-cover"
                      />
                      <CardContent className="p-4 flex items-center justify-between">
                        <div>
                          <div className="font-medium">{p.name}</div>
                          <div className="text-sm text-muted-foreground">${(p.price / 100).toFixed(2)}</div>
                        </div>
                        <NavLink to={`/product/${p.slug}`} className="hover-scale">
                          <Button variant="outline">View</Button>
                        </NavLink>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;
