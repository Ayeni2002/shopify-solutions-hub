import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Star, Leaf, Award } from "lucide-react";

const products = [
  {
    name: "Bio-Active Complete Multi-Vitamin",
    category: "Essential Nutrition",
    description: "24 vitamins and minerals for complete daily nutrition. Supports immune system, cardiovascular health, and healthy aging.",
    features: ["Men's & Women's Formulas", "Bio-Active Ingredients", "Immune Support"],
    rating: 4.8,
    icon: Award,
  },
  {
    name: "Organic Super Greens",
    category: "Superfood Blend",
    description: "Powerful blend of organic greens, fruits, and vegetables. Boosts energy, supports digestion, and promotes detoxification.",
    features: ["100% Organic", "Over 30 Superfoods", "Energy Boost"],
    rating: 4.9,
    icon: Leaf,
  },
  {
    name: "Vitamin D3-K2 2000",
    category: "Bone & Heart Health",
    description: "Essential for bone strength, heart health, and immune function. Optimal D3 and K2 combination for maximum absorption.",
    features: ["Bone Strength", "Heart Health", "Immune Support"],
    rating: 4.7,
    icon: Star,
  },
  {
    name: "Ultimate Wellness Pack",
    category: "Complete Bundle",
    description: "Our most popular package combining essential supplements for total body wellness at an unbeatable value.",
    features: ["Best Value", "6 Core Products", "Complete Nutrition"],
    rating: 5.0,
    icon: Award,
  },
  {
    name: "Organic Coffee",
    category: "Energy & Focus",
    description: "Premium organic coffee blend that supports metabolism and mental clarity without the jitters.",
    features: ["100% Organic", "Metabolism Support", "Clean Energy"],
    rating: 4.8,
    icon: Star,
  },
  {
    name: "Collagen Peptides",
    category: "Beauty & Wellness",
    description: "High-quality collagen for healthy skin, hair, nails, and joint support. Easily absorbed and highly effective.",
    features: ["Skin Health", "Joint Support", "Anti-Aging"],
    rating: 4.9,
    icon: Leaf,
  },
];

const Products = () => {
  return (
    <section id="products" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4">LiveGood Products</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Premium Health & Wellness Products
          </h2>
          <p className="text-lg text-muted-foreground">
            We help LiveGood members market these exceptional products through proven digital strategies and compelling campaigns.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card key={index} className="group hover:shadow-elegant transition-all duration-300 border-border/50">
              <CardHeader>
                <div className="flex items-start justify-between mb-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center">
                    <product.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-semibold">{product.rating}</span>
                  </div>
                </div>
                <Badge variant="secondary" className="w-fit mb-2">{product.category}</Badge>
                <CardTitle className="text-xl">{product.name}</CardTitle>
                <CardDescription className="text-base">{product.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-4">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm">
                      <ShoppingCart className="w-4 h-4 mr-2 text-primary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full group-hover:shadow-primary transition-all">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">Need help marketing these products to your audience?</p>
          <Button size="lg" variant="secondary">
            Get Marketing Strategy
            <ShoppingCart className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Products;
