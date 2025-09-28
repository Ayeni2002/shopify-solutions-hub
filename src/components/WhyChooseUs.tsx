import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Clock, 
  Globe, 
  Award, 
  Users, 
  TrendingUp, 
  Shield,
  Zap,
  Heart
} from "lucide-react";

const reasons = [
  {
    icon: Clock,
    title: "Lightning Fast Delivery",
    description: "2-4 hour response time and rapid project turnaround without compromising quality"
  },
  {
    icon: Globe,
    title: "Global Expertise",
    description: "Successfully serving clients worldwide across different markets and time zones"
  },
  {
    icon: Award,
    title: "Proven Track Record",
    description: "Successful project completions on Upwork"
  },
  {
    icon: Users,
    title: "Client-First Approach",
    description: "Your success is our priority - we work with you, not just for you"
  },
  {
    icon: TrendingUp,
    title: "Results That Matter",
    description: "Focus on measurable improvements in conversions, sales, and user experience"
  },
  {
    icon: Shield,
    title: "Reliable Partnership",
    description: "Long-term support and maintenance to ensure your store stays optimized"
  },
  {
    icon: Zap,
    title: "Cutting-Edge Solutions",
    description: "Latest Shopify features, apps, and best practices to keep you ahead"
  },
  {
    icon: Heart,
    title: "Passionate Expertise",
    description: "Genuine enthusiasm for e-commerce success drives exceptional results"
  }
];

const WhyChooseUs = () => {
  return (
    <section id="why-choose" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-6 mb-16">
          <Badge variant="secondary" className="px-4 py-2">
            Why Choose Us
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            What Makes Us Different?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            When you work with us, you're not just hiring developers - you're partnering with 
            dedicated Shopify experts committed to your success.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {reasons.map((reason, index) => (
            <Card 
              key={index}
              className="group hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 border-border/50 hover:border-primary/30 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <reason.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                  {reason.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {reason.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;