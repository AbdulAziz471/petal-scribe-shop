import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious,
  type CarouselApi 
} from "@/components/ui/carousel";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { HERO_IMAGE, products } from "@/data/products";

const slides = [
  {
    image: HERO_IMAGE,
    title: "Calm, Elegant Bouquets for Every Moment",
    subtitle: "Handcrafted arrangements in soft, natural tones—delivered with care.",
    primaryCTA: "Shop All Bouquets",
    secondaryCTA: "Subscriptions"
  },
  {
    image: products[0].image,
    title: "Seasonal Collections Now Available",
    subtitle: "Discover our latest seasonal arrangements featuring the finest blooms.",
    primaryCTA: "View Collections",
    secondaryCTA: "Learn More"
  },
  {
    image: products[2].image,
    title: "Fresh Flowers, Delivered Weekly",
    subtitle: "Subscribe to our premium flower service and never miss nature's beauty.",
    primaryCTA: "Start Subscription",
    secondaryCTA: "Shop Once"
  },
  {
    image: products[4].image,
    title: "Handpicked with Love & Care",
    subtitle: "Every bouquet is thoughtfully composed by our expert florists.",
    primaryCTA: "Our Story",
    secondaryCTA: "Contact Us"
  }
];

const HeroSlider = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });

    // Auto-play functionality
    const autoplay = setInterval(() => {
      if (api.canScrollNext()) {
        api.scrollNext();
      } else {
        api.scrollTo(0);
      }
    }, 5000);

    return () => clearInterval(autoplay);
  }, [api]);

  const getButtonLink = (cta: string) => {
    switch (cta) {
      case "Shop All Bouquets":
      case "View Collections":
      case "Shop Once":
        return "/shop";
      case "Subscriptions":
      case "Start Subscription":
        return "/subscriptions";
      case "Our Story":
        return "/about";
      case "Contact Us":
        return "/contact";
      default:
        return "/shop";
    }
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <Carousel 
        setApi={setApi} 
        className="h-full w-full"
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent className="h-full">
          {slides.map((slide, index) => (
            <CarouselItem key={index} className="h-full">
              <div className="relative h-full w-full">
                <img
                  src={slide.image}
                  alt={`Hero slide ${index + 1}: ${slide.title}`}
                  className="h-full w-full object-cover"
                  loading={index === 0 ? "eager" : "lazy"}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/40 to-background/20" />
                <div className="container mx-auto absolute inset-0 flex items-center">
                  <div className="max-w-2xl animate-enter">
                    <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl leading-tight text-foreground">
                      {slide.title}
                    </h1>
                    <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-xl">
                      {slide.subtitle}
                    </p>
                    <div className="mt-8 flex flex-col sm:flex-row gap-4">
                      <NavLink to={getButtonLink(slide.primaryCTA)}>
                        <Button variant="hero" size="lg" className="w-full sm:w-auto">
                          {slide.primaryCTA}
                        </Button>
                      </NavLink>
                      <NavLink to={getButtonLink(slide.secondaryCTA)}>
                        <Button variant="outline" size="lg" className="w-full sm:w-auto">
                          {slide.secondaryCTA}
                        </Button>
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Custom Navigation Buttons */}
        <div className="absolute left-8 top-1/2 -translate-y-1/2 z-10">
          <Button
            variant="outline"
            size="icon"
            className="h-12 w-12 rounded-full bg-background/20 backdrop-blur-sm border-white/20 text-white hover:bg-background/40"
            onClick={() => api?.scrollPrev()}
          >
            <ChevronLeft className="h-6 w-6" />
            <span className="sr-only">Previous slide</span>
          </Button>
        </div>
        
        <div className="absolute right-8 top-1/2 -translate-y-1/2 z-10">
          <Button
            variant="outline"
            size="icon"
            className="h-12 w-12 rounded-full bg-background/20 backdrop-blur-sm border-white/20 text-white hover:bg-background/40"
            onClick={() => api?.scrollNext()}
          >
            <ChevronRight className="h-6 w-6" />
            <span className="sr-only">Next slide</span>
          </Button>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
          <div className="flex space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`h-3 w-3 rounded-full transition-all duration-300 ${
                  index === current 
                    ? "bg-white scale-110" 
                    : "bg-white/50 hover:bg-white/75"
                }`}
                onClick={() => api?.scrollTo(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </Carousel>
    </section>
  );
};

export default HeroSlider;