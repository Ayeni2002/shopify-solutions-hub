import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Share2, Target, TrendingUp, MessageSquare, Mail, Video } from "lucide-react";

const services = [
  {
    icon: Share2,
    title: "Social Media Management",
    description: "Build your LiveGood presence with strategic content and community engagement across all platforms.",
    features: ["Daily content creation", "Community engagement", "Platform optimization", "Growth analytics"],
  },
  {
    icon: Target,
    title: "Sales Funnel Development",
    description: "Convert prospects into members with high-converting sales funnels designed for LiveGood products.",
    features: ["Landing page design", "Email automation", "Lead magnets", "Conversion optimization"],
  },
  {
    icon: TrendingUp,
    title: "Paid Advertising",
    description: "Reach your ideal LiveGood audience with targeted ad campaigns on Facebook, Instagram, and Google.",
    features: ["Campaign strategy", "Ad creative development", "Audience targeting", "ROI optimization"],
  },
  {
    icon: MessageSquare,
    title: "Content Marketing",
    description: "Establish authority and attract leads with valuable content about LiveGood products and wellness.",
    features: ["Blog posts & articles", "Product education", "Success stories", "SEO content"],
  },
  {
    icon: Mail,
    title: "Email Marketing",
    description: "Nurture leads and retain members with automated email campaigns that convert.",
    features: ["Welcome sequences", "Product launches", "Newsletters", "Personalization"],
  },
  {
    icon: Video,
    title: "Video Marketing",
    description: "Create engaging video content showcasing LiveGood products and member success stories.",
    features: ["Product demonstrations", "Testimonial videos", "Educational content", "Social video ads"],
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4">Our Services</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Complete Marketing Solutions for LiveGood Members
          </h2>
          <p className="text-lg text-muted-foreground">
            We handle everything from social media to sales funnels, so you can focus on building relationships and growing your team.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-elegant transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center mb-3">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <CardTitle>{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="secondary">Schedule Free Consultation</Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
