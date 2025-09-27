import { Button } from "@/components/ui/button";
import { CheckCircle, Globe, Clock, Users } from "lucide-react";
import globalTeamImage from "@/assets/global-team.jpg";

const stats = [
  { icon: Users, value: "50+", label: "Happy Clients" },
  { icon: Globe, value: "15+", label: "Countries Served" },
  { icon: Clock, value: "24/7", label: "Support Available" },
  { icon: CheckCircle, value: "100%", label: "Project Success Rate" }
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img 
              src={globalTeamImage} 
              alt="Global team working on e-commerce solutions" 
              className="rounded-2xl shadow-elegant w-full h-auto"
            />
            <div className="absolute -bottom-4 -right-4 bg-background rounded-xl p-4 shadow-primary border border-border/50">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-foreground">Available for hire</span>
              </div>
            </div>
          </div>
          
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-primary">
                <Users className="w-5 h-5" />
                <span className="text-sm font-semibold uppercase tracking-wide">About SHOPTECH</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Your Trusted Shopify Partner for Global Success
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm Jaywon Ayeni, a certified Shopify expert with years of experience helping businesses 
                worldwide transform their online presence. From small startups to established brands, 
                I've helped clients across the globe overcome their Shopify challenges and achieve 
                remarkable growth.
              </p>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">Why Choose SHOPTECH?</h3>
              <ul className="space-y-3">
                {[
                  "Proven track record with successful Shopify implementations",
                  "Deep understanding of e-commerce best practices",
                  "Available for clients worldwide with flexible scheduling",
                  "Comprehensive support from concept to launch and beyond"
                ].map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center space-y-2">
                  <stat.icon className="w-6 h-6 text-primary mx-auto" />
                  <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
            
            <div className="pt-4">
              <Button variant="outline" size="lg" asChild>
                <a href="#contact">Get In Touch</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;