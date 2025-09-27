import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Globe } from "lucide-react";
import heroImage from "@/assets/hero-shopify.jpg";

const Hero = () => {
  return (
    <section className="pt-20 pb-16 bg-gradient-subtle min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-primary">
                <Zap className="w-5 h-5" />
                <span className="text-sm font-semibold uppercase tracking-wide">Shopify Expert</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Transform Your 
                <span className="bg-gradient-primary bg-clip-text text-transparent"> Shopify Store</span> 
                Into a Sales Machine
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Stop struggling with Shopify issues. Get professional solutions that boost your store's performance, 
                increase conversions, and drive real results for your business.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" asChild>
                <a 
                  href="https://www.upwork.com/freelancers/~01335a915de51108df" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group"
                >
                  Get Expert Help Now
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="#services">View Services</a>
              </Button>
            </div>
            
            <div className="flex items-center space-x-6 pt-4">
              <div className="flex items-center space-x-2">
                <Globe className="w-5 h-5 text-primary" />
                <span className="text-sm text-muted-foreground">Serving clients globally</span>
              </div>
              <div className="h-4 w-px bg-border"></div>
              <div className="text-sm text-muted-foreground">
                Available on <span className="text-primary font-semibold">Upwork</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative z-10">
              <img 
                src={heroImage} 
                alt="Professional Shopify dashboard solutions" 
                className="rounded-2xl shadow-elegant w-full h-auto"
              />
            </div>
            <div className="absolute -top-4 -right-4 -bottom-4 -left-4 bg-gradient-primary rounded-2xl opacity-20 blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;