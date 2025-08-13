import { useState, useMemo } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";
import { Filter, Grid, List, SlidersHorizontal } from "lucide-react";

const categories = [
  { id: "all", name: "All Bouquets", count: products.length },
  { id: "roses", name: "Roses", count: products.filter(p => p.tags.includes("roses") || p.tags.includes("white-roses")).length },
  { id: "seasonal", name: "Seasonal", count: products.filter(p => p.tags.includes("spring") || p.tags.includes("luxury")).length },
  { id: "modern", name: "Modern", count: products.filter(p => p.tags.includes("modern") || p.tags.includes("eucalyptus")).length },
  { id: "romantic", name: "Romantic", count: products.filter(p => p.tags.includes("romantic") || p.tags.includes("peonies")).length },
];

const colors = ["All", "Blush", "White", "Blue", "Peach", "Green"];
const occasions = ["All", "Wedding", "Anniversary", "Birthday", "Everyday", "Sympathy"];

export default function EnhancedProductGallery() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedColor, setSelectedColor] = useState("All");
  const [selectedOccasion, setSelectedOccasion] = useState("All");
  const [priceRange, setPriceRange] = useState([0, 100]);
  const [sortBy, setSortBy] = useState("featured");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [showFilters, setShowFilters] = useState(false);

  const filteredProducts = useMemo(() => {
    let filtered = products;

    // Category filter
    if (selectedCategory !== "all") {
      filtered = filtered.filter(product => {
        switch (selectedCategory) {
          case "roses":
            return product.tags.includes("roses") || product.tags.includes("white-roses");
          case "seasonal":
            return product.tags.includes("spring") || product.tags.includes("luxury");
          case "modern":
            return product.tags.includes("modern") || product.tags.includes("eucalyptus");
          case "romantic":
            return product.tags.includes("romantic") || product.tags.includes("peonies");
          default:
            return true;
        }
      });
    }

    // Color filter
    if (selectedColor !== "All") {
      filtered = filtered.filter(product => 
        product.name.toLowerCase().includes(selectedColor.toLowerCase()) ||
        product.description.toLowerCase().includes(selectedColor.toLowerCase()) ||
        product.tags.some(tag => tag.includes(selectedColor.toLowerCase()))
      );
    }

    // Price filter
    const minPrice = priceRange[0] * 100;
    const maxPrice = priceRange[1] * 100;
    filtered = filtered.filter(product => 
      product.price >= minPrice && product.price <= maxPrice
    );

    // Sort
    switch (sortBy) {
      case "price-low":
        filtered.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        filtered.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case "name":
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        // Keep original order for "featured"
        break;
    }

    return filtered;
  }, [selectedCategory, selectedColor, selectedOccasion, priceRange, sortBy]);

  return (
    <section className="container mx-auto py-10">
      {/* Header */}
      <div className="mb-8">
        <h1 className="font-serif text-3xl mb-2">Shop Bouquets</h1>
        <p className="text-muted-foreground">Handcrafted arrangements curated with care</p>
      </div>

      {/* Categories */}
      <div className="mb-8">
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              onClick={() => setSelectedCategory(category.id)}
              className="relative"
            >
              {category.name}
              <Badge variant="secondary" className="ml-2 text-xs">
                {category.count}
              </Badge>
            </Button>
          ))}
        </div>
      </div>

      {/* Filters and Controls */}
      <div className="mb-8">
        <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
          <div className="flex flex-wrap gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2"
            >
              <SlidersHorizontal className="h-4 w-4" />
              Filters
            </Button>
            
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="featured">Featured</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="rating">Highest Rated</SelectItem>
                <SelectItem value="name">Name A-Z</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">
              {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''}
            </span>
            <div className="flex border rounded-md">
              <Button
                variant={viewMode === "grid" ? "default" : "ghost"}
                size="sm"
                onClick={() => setViewMode("grid")}
                className="rounded-r-none"
              >
                <Grid className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "ghost"}
                size="sm"
                onClick={() => setViewMode("list")}
                className="rounded-l-none"
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Advanced Filters */}
        {showFilters && (
          <Card className="mt-4">
            <CardContent className="p-6">
              <div className="grid gap-6 md:grid-cols-3">
                <div>
                  <label className="text-sm font-medium mb-2 block">Color</label>
                  <Select value={selectedColor} onValueChange={setSelectedColor}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {colors.map((color) => (
                        <SelectItem key={color} value={color}>{color}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Occasion</label>
                  <Select value={selectedOccasion} onValueChange={setSelectedOccasion}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {occasions.map((occasion) => (
                        <SelectItem key={occasion} value={occasion}>{occasion}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Price Range: ${priceRange[0]} - ${priceRange[1]}
                  </label>
                  <Slider
                    value={priceRange}
                    onValueChange={setPriceRange}
                    max={100}
                    min={0}
                    step={5}
                    className="mt-2"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </div>

      {/* Products Grid/List */}
      <div className={
        viewMode === "grid" 
          ? "grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          : "space-y-4"
      }>
        {filteredProducts.map((product) => (
          <ProductCard 
            key={product.id} 
            product={product} 
            viewMode={viewMode}
          />
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="text-center py-12">
          <h3 className="font-serif text-xl mb-2">No products found</h3>
          <p className="text-muted-foreground mb-4">Try adjusting your filters</p>
          <Button 
            variant="outline" 
            onClick={() => {
              setSelectedCategory("all");
              setSelectedColor("All");
              setSelectedOccasion("All");
              setPriceRange([0, 100]);
            }}
          >
            Clear Filters
          </Button>
        </div>
      )}
    </section>
  );
}
