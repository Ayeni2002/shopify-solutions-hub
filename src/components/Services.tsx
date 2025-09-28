import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  ShoppingCart, 
  Palette, 
  Zap, 
  BarChart, 
  Settings, 
  Smartphone,
  ArrowRight 
} from "lucide-react";

const services = [
  {
    icon: ShoppingCart,
    title: "Store Setup & Configuration",
    description: "Complete Shopify store setup, theme customization, and essential app integrations to get your business running smoothly.",
    features: ["Theme Setup", "Payment Integration", "Shipping Configuration"]
  },
  {
    icon: Palette,
    title: "Custom Design & Development",
    description: "Transform your store with custom designs, responsive layouts, and enhanced user experience that converts visitors to customers.",
    features: ["Custom Themes", "Mobile Optimization", "UI/UX Enhancement"]
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description: "Speed up your store, fix technical issues, and optimize for better search engine rankings and user experience.",
    features: ["Speed Optimization", "SEO Setup", "Bug Fixes"]
  },
  {
    icon: BarChart,
    title: "Analytics & Conversion",
    description: "Set up tracking, analyze store performance, and implement strategies to increase your conversion rates and sales.",
    features: ["Google Analytics", "Conversion Tracking", "A/B Testing"]
  },
  {
    icon: Settings,
    title: "App Integration & Automation",
    description: "Integrate essential apps, set up automated workflows, and streamline your business operations for maximum efficiency.",
    features: ["App Setup", "Workflow Automation", "Third-party Integrations"]
  },
  {
    icon: Smartphone,
    title: "Mobile Commerce Solutions",
    description: "Optimize your store for mobile users, implement mobile-first strategies, and capture the growing mobile market.",
    features: ["Mobile Optimization", "Progressive Web App", "Mobile Analytics"]
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-6 mb-16">
          <div className="flex items-center justify-center space-x-2 text-primary">
            <Settings className="w-5 h-5" />
            <span className="text-sm font-semibold uppercase tracking-wide">Solutions</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Comprehensive Shopify Solutions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From store setup to advanced optimization, we provide end-to-end Shopify services 
            that help your business grow and succeed in the competitive e-commerce landscape.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-primary transition-all duration-300 border-border/50 hover:border-primary/30">
              <CardHeader className="space-y-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <CardTitle className="text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <Button variant="cta" size="lg" asChild>
            <a 
              href="https://www.upwork.com/freelancers/~01335a915de51108df" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group"
            >
              Start Your Project Today
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;