import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Quote, Star } from "lucide-react";
import { useEffect } from "react";
import type { CarouselApi } from "@/components/ui/carousel";

interface Testimonial {
  quote: string;
  name: string;
  location?: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  { 
    quote: "Absolutely stunning and long-lasting. These flowers brightened our entire home for weeks.", 
    name: "Sofia M.", 
    location: "New York",
    rating: 5 
  },
  { 
    quote: "The calm palette is perfect for our home. Every arrangement feels like a work of art.", 
    name: "Daniel K.", 
    location: "California",
    rating: 5 
  },
  { 
    quote: "Exceptional quality and thoughtful design. I'm amazed by the attention to detail.", 
    name: "Ava R.", 
    location: "Texas",
    rating: 5 
  },
  { 
    quote: "Reliable delivery and gorgeous blooms. My subscription brings joy every month.", 
    name: "Lucas T.", 
    location: "Florida",
    rating: 5 
  },
  { 
    quote: "The most beautiful flower arrangements I've ever received. Truly magical.", 
    name: "Emma W.", 
    location: "Oregon",
    rating: 5 
  },
  { 
    quote: "Fresh, elegant, and perfectly arranged. These flowers exceeded all expectations.", 
    name: "James H.", 
    location: "Washington",
    rating: 5 
  },
];

const TestimonialsSlider = () => {
  return (
    <section className="container mx-auto py-16">
      <header className="mb-12 text-center">
        <h2 className="font-serif text-3xl mb-3">What Customers Say</h2>
        <p className="text-muted-foreground text-lg">Kind words from our community</p>
      </header>
      
      <div className="relative max-w-5xl mx-auto">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <Card className="h-full bg-gradient-to-br from-background to-muted/20 border-primary/10 hover:border-primary/20 transition-colors duration-300">
                  <CardContent className="p-8 h-full flex flex-col">
                    <div className="mb-4">
                      <Quote className="h-8 w-8 text-primary/40 mb-4" />
                      <div className="flex mb-4">
                        {Array.from({ length: testimonial.rating }).map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                    
                    <blockquote className="italic text-foreground/90 leading-relaxed flex-1 mb-6">
                      "{testimonial.quote}"
                    </blockquote>
                    
                    <footer className="mt-auto">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-primary/40 flex items-center justify-center">
                          <span className="text-sm font-semibold text-primary">
                            {testimonial.name.charAt(0)}
                          </span>
                        </div>
                        <div>
                          <p className="font-medium text-foreground">{testimonial.name}</p>
                          {testimonial.location && (
                            <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                          )}
                        </div>
                      </div>
                    </footer>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex -left-12 bg-background/80 backdrop-blur-sm border-primary/20 hover:bg-primary hover:text-primary-foreground" />
          <CarouselNext className="hidden md:flex -right-12 bg-background/80 backdrop-blur-sm border-primary/20 hover:bg-primary hover:text-primary-foreground" />
        </Carousel>
        
        {/* Mobile navigation dots */}
        <div className="flex justify-center mt-8 md:hidden space-x-2">
          {testimonials.map((_, index) => (
            <div 
              key={index} 
              className="w-2 h-2 rounded-full bg-muted-foreground/30"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSlider;