import { NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useCart } from "@/contexts/CartContext";
import { toast } from "@/hooks/use-toast";
import { Star, ShoppingCart } from "lucide-react";
import type { Product } from "@/data/products";
import ImageZoom from "./ImageZoom";

interface ProductCardProps {
  product: Product;
  viewMode?: "grid" | "list";
}

export default function ProductCard({ product, viewMode = "grid" }: ProductCardProps) {
  const { add } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    add(product, 1);
    toast({ 
      title: "Added to cart", 
      description: `${product.name} added to your cart.` 
    });
  };

  if (viewMode === "list") {
    return (
      <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-64 flex-shrink-0">
            <ImageZoom
              src={product.image}
              alt={`${product.name} bouquet`}
              className="w-full h-48 md:h-full object-cover"
            />
          </div>
          <div className="flex-1 p-6">
            <div className="flex justify-between items-start mb-2">
              <NavLink to={`/product/${product.slug}`} className="flex-1">
                <h3 className="font-serif text-xl hover:text-primary transition-colors">
                  {product.name}
                </h3>
              </NavLink>
              <div className="text-right ml-4">
                <div className="text-lg font-semibold">
                  ${(product.price / 100).toFixed(2)}
                </div>
              </div>
            </div>
            
            <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
              {product.description}
            </p>
            
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <span className="text-sm ml-1">{product.rating}</span>
              </div>
              <span className="text-sm text-muted-foreground">
                ({product.reviews} reviews)
              </span>
            </div>
            
            <div className="flex flex-wrap gap-1 mb-4">
              {product.tags.slice(0, 3).map((tag) => (
                <Badge key={tag} variant="secondary" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>
            
            <Button onClick={handleAddToCart} className="w-full md:w-auto">
              <ShoppingCart className="h-4 w-4 mr-2" />
              Add to Cart
            </Button>
          </div>
        </div>
      </Card>
    );
  }

  return (
    <Card className="group overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <div className="relative overflow-hidden">
        <ImageZoom
          src={product.image}
          alt={`${product.name} bouquet`}
          className="w-full h-64 object-cover"
        />
        <div className="absolute top-2 right-2">
          <div className="flex items-center bg-background/90 backdrop-blur-sm rounded-full px-2 py-1">
            <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
            <span className="text-xs ml-1">{product.rating}</span>
          </div>
        </div>
      </div>
      
      <CardContent className="p-4">
        <NavLink to={`/product/${product.slug}`}>
          <h3 className="font-serif text-lg group-hover:text-primary transition-colors mb-2">
            {product.name}
          </h3>
        </NavLink>
        
        <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
          {product.description}
        </p>
        
        <div className="flex flex-wrap gap-1 mb-3">
          {product.tags.slice(0, 2).map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
        
        <div className="flex items-center justify-between">
          <div className="text-lg font-semibold">
            ${(product.price / 100).toFixed(2)}
          </div>
          <div className="text-xs text-muted-foreground">
            {product.reviews} reviews
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="p-4 pt-0">
        <Button onClick={handleAddToCart} className="w-full" size="sm">
          <ShoppingCart className="h-4 w-4 mr-2" />
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
}