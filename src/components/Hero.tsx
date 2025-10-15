import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import heroImage from "@/assets/hero-shopify.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-gradient-hero overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:32px_32px]" />
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-6 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
              <CheckCircle2 className="w-4 h-4" />
              <span className="text-sm font-medium">LiveGood Marketing Experts</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Scale Your LiveGood Business with
              <span className="block text-primary-glow">Professional Marketing</span>
            </h1>
            
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              We're a dedicated team of marketing specialists helping LiveGood members grow their business through proven digital strategies, social media management, and sales funnel optimization.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" variant="secondary" className="group">
                Get Started Today
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                View Our Services
              </Button>
            </div>
            
            <div className="flex flex-wrap gap-8 pt-6 border-t border-white/20">
              <div>
                <p className="text-sm text-white/70">Trusted By</p>
                <p className="text-xl font-semibold">500+ LiveGood Members</p>
              </div>
              <div>
                <p className="text-sm text-white/70">Success Rate</p>
                <p className="text-xl font-semibold">98% Client Satisfaction</p>
              </div>
            </div>
          </div>
          
          <div className="relative lg:block hidden">
            <div className="absolute inset-0 bg-gradient-primary blur-3xl opacity-30 rounded-full" />
            <img
              src={heroImage}
              alt="LiveGood Marketing Team"
              className="relative rounded-2xl shadow-elegant w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
