import SEO from "@/components/SEO";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import ProductCard from "@/components/ProductCard";
import HeroSlider from "@/components/HeroSlider";
import TestimonialsSlider from "@/components/TestimonialsSlider";
import { NavLink } from "react-router-dom";
import { HERO_IMAGE, products } from "@/data/products";
import { Truck, Shield, Heart, Sparkles, Award, Clock, Mail, Instagram, Facebook, Twitter } from "lucide-react";

const Index = () => {
  const bestSellers = products.slice(0, 4);

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Gifted And Co — Elegant Flower Bouquets"
        description="Shop elegant, handcrafted flower bouquets with serene, natural beauty. Discover best-sellers and seasonal arrangements."
        canonicalPath="/"
      />

      <main className="flex-1">
        {/* Hero Slider Section */}
        <HeroSlider />

        {/* Features Section */}
        <section className="container mx-auto py-16">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl mb-4">Why Choose Gifted And Co</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Experience the difference with our commitment to quality, freshness, and exceptional service
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="group hover:shadow-lg transition-all duration-300 hover-scale">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <Truck className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Free Delivery</h3>
                <p className="text-muted-foreground">
                  Complimentary delivery on orders over $50 within the metro area
                </p>
              </CardContent>
            </Card>
            <Card className="group hover:shadow-lg transition-all duration-300 hover-scale">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Quality Guarantee</h3>
                <p className="text-muted-foreground">
                  100% satisfaction guarantee with fresh, premium flowers sourced daily
                </p>
              </CardContent>
            </Card>
            <Card className="group hover:shadow-lg transition-all duration-300 hover-scale">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Handcrafted with Love</h3>
                <p className="text-muted-foreground">
                  Each bouquet is personally arranged by our expert florists
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Featured Collections */}
        <section className="container mx-auto py-12">
          <header className="mb-8 text-center">
            <h2 className="font-serif text-3xl mb-4">Featured Collections</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover our most loved arrangements, carefully curated for every occasion
            </p>
          </header>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {bestSellers.map((p) => (
              <div key={p.id} className="animate-fade-in">
                <ProductCard product={p} />
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <NavLink to="/shop">
              <Button variant="outline" size="lg" className="hover-scale">
                View All Bouquets
              </Button>
            </NavLink>
          </div>
        </section>

        {/* Process Section */}
        <section className="bg-muted/30 py-16">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl mb-4">Our Process</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                From selection to delivery, we ensure every step meets our highest standards
              </p>
            </div>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center group">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-all duration-300 hover-scale">
                  <Sparkles className="h-10 w-10 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">1. Select</h3>
                <p className="text-muted-foreground text-sm">
                  Choose from our curated collection or create your custom bouquet
                </p>
              </div>
              <div className="text-center group">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-all duration-300 hover-scale">
                  <Award className="h-10 w-10 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">2. Craft</h3>
                <p className="text-muted-foreground text-sm">
                  Our expert florists hand-arrange each bouquet with premium flowers
                </p>
              </div>
              <div className="text-center group">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-all duration-300 hover-scale">
                  <Shield className="h-10 w-10 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">3. Package</h3>
                <p className="text-muted-foreground text-sm">
                  Carefully wrapped and prepared for safe transport
                </p>
              </div>
              <div className="text-center group">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-all duration-300 hover-scale">
                  <Clock className="h-10 w-10 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">4. Deliver</h3>
                <p className="text-muted-foreground text-sm">
                  Fresh delivery at your chosen time and location
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Story Section - Enhanced */}
        <section className="container mx-auto py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="mb-6">
                <span className="text-primary font-medium text-sm uppercase tracking-wider">Our Story</span>
                <h2 className="font-serif text-3xl mt-2 mb-4">Crafting Beauty, One Bouquet at a Time</h2>
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                We craft calming, elegant bouquets inspired by the softness of dawn, the whisper of eucalyptus, and the quiet
                beauty of nature. Every arrangement is thoughtfully composed and delivered with care.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Our passion for floral artistry drives us to source only the finest, freshest blooms and create arrangements 
                that bring joy to every moment—from everyday celebrations to life's most precious occasions.
              </p>
              <NavLink to="/about">
                <Button variant="outline" className="hover-scale">
                  Learn More About Us
                </Button>
              </NavLink>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative">
                <img
                  src={products[2].image}
                  alt="Atmospheric bouquet reflecting our philosophy"
                  loading="lazy"
                  className="w-full h-96 lg:h-[500px] object-cover rounded-2xl shadow-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Custom Bouquet CTA */}
        <section className="bg-gradient-to-r from-primary/5 to-primary/10 py-16">
          <div className="container mx-auto text-center">
            <h2 className="font-serif text-3xl mb-4">Create Your Perfect Bouquet</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Design a personalized arrangement that's uniquely yours. Choose your flowers, colors, and add-ons for the perfect gift.
            </p>
            <NavLink to="/customize-bouquet">
              <Button size="lg" className="hover-scale">
                Start Customizing
              </Button>
            </NavLink>
          </div>
        </section>

        {/* Subscription Service - Enhanced */}
        <section className="container mx-auto py-16">
          <div className="bg-gradient-to-br from-card to-card/60 rounded-2xl border p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <span className="text-primary font-medium text-sm uppercase tracking-wider">Subscription</span>
                <h2 className="font-serif text-3xl mt-2 mb-4">Never Run Out of Beauty</h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Fresh, elegant flowers delivered to your door—weekly, bi-weekly, or monthly. 
                  Enjoy seasonal varieties and special arrangements curated just for subscribers.
                </p>
                <ul className="space-y-2 mb-8">
                  <li className="flex items-center text-sm">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    Flexible scheduling and easy modifications
                  </li>
                  <li className="flex items-center text-sm">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    Exclusive subscriber-only arrangements
                  </li>
                  <li className="flex items-center text-sm">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    15% savings on all subscription orders
                  </li>
                </ul>
                <NavLink to="/subscriptions">
                  <Button size="lg" className="hover-scale">Start a Subscription</Button>
                </NavLink>
              </div>
              <div className="relative">
                <img
                  src={products[0].image}
                  alt="Subscription flowers"
                  className="w-full h-80 object-cover rounded-xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <TestimonialsSlider />

        {/* Newsletter Section */}
        <section className="bg-muted/30 py-16">
          <div className="container mx-auto">
            <div className="max-w-2xl mx-auto text-center">
              <Mail className="h-12 w-12 text-primary mx-auto mb-4" />
              <h2 className="font-serif text-3xl mb-4">Stay in Bloom</h2>
              <p className="text-muted-foreground mb-8">
                Subscribe to our newsletter for floral inspiration, care tips, and exclusive offers delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="flex-1"
                />
                <Button className="hover-scale">Subscribe</Button>
              </div>
              <p className="text-xs text-muted-foreground mt-4">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </section>

        {/* Instagram Section - Enhanced */}
        <section className="container mx-auto py-16">
          <header className="mb-8 text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Instagram className="h-6 w-6 text-primary" />
              <h2 className="font-serif text-3xl">Follow Our Journey</h2>
            </div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Get inspired by our latest floral creations and behind-the-scenes moments
            </p>
          </header>
          <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
            {products.slice(0, 6).map((p, index) => (
              <a 
                key={p.id} 
                href="https://instagram.com" 
                target="_blank" 
                rel="noreferrer" 
                className={`group block overflow-hidden rounded-lg hover-scale animate-fade-in`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <img
                  src={p.image}
                  alt={`${p.name} bouquet — Instagram post`}
                  loading="lazy"
                  className="aspect-square w-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </a>
            ))}
          </div>
          <div className="text-center mt-8">
            <div className="flex justify-center gap-4">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors story-link"
              >
                <Instagram className="h-5 w-5" />
                Follow on Instagram
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors story-link"
              >
                <Facebook className="h-5 w-5" />
                Like on Facebook
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;