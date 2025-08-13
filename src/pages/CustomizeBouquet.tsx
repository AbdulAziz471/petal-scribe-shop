import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";
import { Plus, Minus, Heart, Gift } from "lucide-react";
import SEO from "@/components/SEO";
import { useCart } from "@/contexts/CartContext";
import { useNavigate } from "react-router-dom";

// Mock data for flowers, wrapping, and add-ons
const availableFlowers = [
  { id: "roses", name: "Red Roses", price: 350, image: "/src/assets/product-rose-blush.jpg" },
  { id: "peonies", name: "Pink Peonies", price: 450, image: "/src/assets/product-peony-dawn.jpg" },
  { id: "eucalyptus", name: "Eucalyptus", price: 250, image: "/src/assets/product-eucalyptus-whisper.jpg" },
  { id: "sage", name: "Sage Greens", price: 200, image: "/src/assets/product-sage-meadow.jpg" },
];

const wrappingOptions = [
  { id: "classic", name: "Classic Paper", price: 0, description: "Simple brown kraft paper" },
  { id: "premium", name: "Premium Silk", price: 150, description: "Elegant silk ribbon wrap" },
  { id: "luxury", name: "Luxury Box", price: 300, description: "Deluxe presentation box" },
];

const addOns = [
  { id: "chocolates", name: "Artisan Chocolates", price: 250, description: "Hand-crafted Belgian chocolates" },
  { id: "card", name: "Premium Card", price: 50, description: "Embossed greeting card" },
  { id: "vase", name: "Crystal Vase", price: 400, description: "Hand-blown crystal vase" },
];

type SelectedFlower = {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
};

export default function CustomizeBouquet() {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedFlowers, setSelectedFlowers] = useState<SelectedFlower[]>([]);
  const [selectedWrapping, setSelectedWrapping] = useState("classic");
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>([]);
  const [personalMessage, setPersonalMessage] = useState("");
  const [recipientName, setRecipientName] = useState("");
  
  const { add } = useCart();
  const navigate = useNavigate();

  const totalSteps = 5;
  const progress = (currentStep / totalSteps) * 100;

  const updateFlowerQuantity = (flowerId: string, delta: number) => {
    setSelectedFlowers(prev => {
      const existing = prev.find(f => f.id === flowerId);
      if (existing) {
        const newQty = Math.max(0, existing.quantity + delta);
        if (newQty === 0) {
          return prev.filter(f => f.id !== flowerId);
        }
        return prev.map(f => f.id === flowerId ? { ...f, quantity: newQty } : f);
      } else if (delta > 0) {
        const flower = availableFlowers.find(f => f.id === flowerId);
        if (flower) {
          return [...prev, { ...flower, quantity: 1 }];
        }
      }
      return prev;
    });
  };

  const calculateTotal = () => {
    const flowersTotal = selectedFlowers.reduce((sum, f) => sum + f.price * f.quantity, 0);
    const wrappingTotal = wrappingOptions.find(w => w.id === selectedWrapping)?.price || 0;
    const addOnsTotal = selectedAddOns.reduce((sum, id) => {
      const addon = addOns.find(a => a.id === id);
      return sum + (addon?.price || 0);
    }, 0);
    return flowersTotal + wrappingTotal + addOnsTotal;
  };

  const handleAddToCart = () => {
    const bouquetName = `Custom Bouquet${recipientName ? ` for ${recipientName}` : ''}`;
    const bouquet = {
      id: `custom-${Date.now()}`,
      slug: `custom-${Date.now()}`,
      name: bouquetName,
      price: calculateTotal(),
      image: selectedFlowers[0]?.image || "/src/assets/hero-bouquet.jpg",
      description: `Custom bouquet with ${selectedFlowers.map(f => `${f.quantity}x ${f.name}`).join(', ')}`,
      tags: ["custom", "bouquet"],
      rating: 5,
      reviews: 0
    };
    
    add(bouquet);
    navigate("/cart");
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-2xl font-semibold mb-2">Choose Your Flowers</h2>
              <p className="text-muted-foreground">Select the flowers you'd like in your bouquet</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {availableFlowers.map((flower) => {
                const selected = selectedFlowers.find(f => f.id === flower.id);
                return (
                  <Card key={flower.id} className="overflow-hidden">
                    <div className="aspect-square relative">
                      <img
                        src={flower.image}
                        alt={flower.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-semibold">{flower.name}</h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        ${(flower.price / 100).toFixed(2)} each
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Button
                            variant="outline"
                            size="icon"
                            onClick={() => updateFlowerQuantity(flower.id, -1)}
                            disabled={!selected}
                          >
                            <Minus className="h-4 w-4" />
                          </Button>
                          <span className="w-8 text-center">{selected?.quantity || 0}</span>
                          <Button
                            variant="outline"
                            size="icon"
                            onClick={() => updateFlowerQuantity(flower.id, 1)}
                          >
                            <Plus className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-2xl font-semibold mb-2">Choose Wrapping</h2>
              <p className="text-muted-foreground">Select how you'd like your bouquet wrapped</p>
            </div>
            <RadioGroup value={selectedWrapping} onValueChange={setSelectedWrapping}>
              <div className="grid gap-4">
                {wrappingOptions.map((option) => (
                  <div key={option.id} className="flex items-center space-x-2">
                    <RadioGroupItem value={option.id} id={option.id} />
                    <Label htmlFor={option.id} className="flex-1 cursor-pointer">
                      <Card className="p-4">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-semibold">{option.name}</h3>
                            <p className="text-sm text-muted-foreground">{option.description}</p>
                          </div>
                          <Badge variant="secondary">
                            {option.price === 0 ? "Free" : `+$${(option.price / 100).toFixed(2)}`}
                          </Badge>
                        </div>
                      </Card>
                    </Label>
                  </div>
                ))}
              </div>
            </RadioGroup>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-2xl font-semibold mb-2">Add Extras</h2>
              <p className="text-muted-foreground">Make your bouquet extra special</p>
            </div>
            <div className="space-y-4">
              {addOns.map((addon) => (
                <div key={addon.id} className="flex items-center space-x-2">
                  <Checkbox
                    id={addon.id}
                    checked={selectedAddOns.includes(addon.id)}
                    onCheckedChange={(checked) => {
                      if (checked) {
                        setSelectedAddOns(prev => [...prev, addon.id]);
                      } else {
                        setSelectedAddOns(prev => prev.filter(id => id !== addon.id));
                      }
                    }}
                  />
                  <Label htmlFor={addon.id} className="flex-1 cursor-pointer">
                    <Card className="p-4">
                      <div className="flex justify-between items-start">
                        <div className="flex items-center gap-3">
                          <Gift className="h-5 w-5 text-primary" />
                          <div>
                            <h3 className="font-semibold">{addon.name}</h3>
                            <p className="text-sm text-muted-foreground">{addon.description}</p>
                          </div>
                        </div>
                        <Badge variant="secondary">+${(addon.price / 100).toFixed(2)}</Badge>
                      </div>
                    </Card>
                  </Label>
                </div>
              ))}
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-2xl font-semibold mb-2">Personal Message</h2>
              <p className="text-muted-foreground">Add a heartfelt message to your bouquet</p>
            </div>
            <div className="space-y-4 max-w-md mx-auto">
              <div>
                <Label htmlFor="recipient">Recipient Name (Optional)</Label>
                <Input
                  id="recipient"
                  value={recipientName}
                  onChange={(e) => setRecipientName(e.target.value)}
                  placeholder="Enter recipient's name"
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="message">Personal Message (Optional)</Label>
                <Textarea
                  id="message"
                  value={personalMessage}
                  onChange={(e) => setPersonalMessage(e.target.value)}
                  placeholder="Write your heartfelt message here..."
                  className="mt-1 min-h-[120px]"
                  maxLength={200}
                />
                <p className="text-xs text-muted-foreground mt-1">
                  {personalMessage.length}/200 characters
                </p>
              </div>
            </div>
          </div>
        );

      case 5:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-2xl font-semibold mb-2">Review Your Bouquet</h2>
              <p className="text-muted-foreground">Check your selection before adding to cart</p>
            </div>
            <Card className="max-w-md mx-auto">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Heart className="h-5 w-5 text-primary" />
                  Your Custom Bouquet
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Flowers:</h4>
                  {selectedFlowers.map((flower) => (
                    <div key={flower.id} className="flex justify-between text-sm">
                      <span>{flower.quantity}x {flower.name}</span>
                      <span>${((flower.price * flower.quantity) / 100).toFixed(2)}</span>
                    </div>
                  ))}
                </div>
                
                <Separator />
                
                <div className="flex justify-between text-sm">
                  <span>Wrapping: {wrappingOptions.find(w => w.id === selectedWrapping)?.name}</span>
                  <span>${((wrappingOptions.find(w => w.id === selectedWrapping)?.price || 0) / 100).toFixed(2)}</span>
                </div>
                
                {selectedAddOns.length > 0 && (
                  <>
                    <Separator />
                    <div>
                      <h4 className="font-semibold mb-2">Add-ons:</h4>
                      {selectedAddOns.map((addonId) => {
                        const addon = addOns.find(a => a.id === addonId);
                        return addon ? (
                          <div key={addonId} className="flex justify-between text-sm">
                            <span>{addon.name}</span>
                            <span>${(addon.price / 100).toFixed(2)}</span>
                          </div>
                        ) : null;
                      })}
                    </div>
                  </>
                )}
                
                {recipientName && (
                  <>
                    <Separator />
                    <div className="text-sm">
                      <span className="font-semibold">For:</span> {recipientName}
                    </div>
                  </>
                )}
                
                {personalMessage && (
                  <>
                    <Separator />
                    <div className="text-sm">
                      <span className="font-semibold">Message:</span>
                      <p className="mt-1 italic">"{personalMessage}"</p>
                    </div>
                  </>
                )}
                
                <Separator />
                
                <div className="flex justify-between font-semibold text-lg">
                  <span>Total:</span>
                  <span>${(calculateTotal() / 100).toFixed(2)}</span>
                </div>
              </CardContent>
            </Card>
          </div>
        );

      default:
        return null;
    }
  };

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return selectedFlowers.length > 0;
      case 2:
        return selectedWrapping !== "";
      case 3:
      case 4:
        return true;
      case 5:
        return selectedFlowers.length > 0;
      default:
        return false;
    }
  };

  return (
    <>
      <SEO 
        title="Customize Your Bouquet - Create Your Perfect Arrangement"
        description="Design your perfect bouquet step-by-step. Choose flowers, wrapping, add-ons, and personalize with a heartfelt message. Fresh flowers delivered daily."
      />
      
      <main className="min-h-screen bg-gradient-to-br from-background to-muted/30">
        <div className="container mx-auto px-4 py-8">
          {/* Progress Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="flex justify-between items-center mb-4">
              <h1 className="text-3xl font-bold">Customize Your Bouquet</h1>
              <Badge variant="outline">Step {currentStep} of {totalSteps}</Badge>
            </div>
            <Progress value={progress} className="h-2" />
          </div>

          {/* Step Content */}
          <div className="max-w-4xl mx-auto">
            {renderStepContent()}
          </div>

          {/* Navigation */}
          <div className="max-w-2xl mx-auto mt-8 flex justify-between items-center">
            <Button
              variant="outline"
              onClick={() => setCurrentStep(prev => Math.max(1, prev - 1))}
              disabled={currentStep === 1}
            >
              Previous
            </Button>
            
            <div className="text-center">
              <p className="text-lg font-semibold">
                Total: ${(calculateTotal() / 100).toFixed(2)}
              </p>
            </div>

            {currentStep < totalSteps ? (
              <Button
                onClick={() => setCurrentStep(prev => prev + 1)}
                disabled={!canProceed()}
              >
                Next
              </Button>
            ) : (
              <Button
                onClick={handleAddToCart}
                disabled={!canProceed()}
                className="bg-primary hover:bg-primary/90"
              >
                Add to Cart
              </Button>
            )}
          </div>
        </div>
      </main>
    </>
  );
}