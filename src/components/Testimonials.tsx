import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star, Quote } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "LiveGood Member",
    location: "California, USA",
    rating: 5,
    text: "Working with this team transformed my LiveGood business. In just 3 months, my sales increased by 250% thanks to their social media strategies and funnel optimization!",
    initial: "SM",
  },
  {
    name: "James Rodriguez",
    role: "LiveGood Affiliate",
    location: "Texas, USA",
    rating: 5,
    text: "Best investment I've made for my business! Their marketing expertise helped me reach audiences I never thought possible. My team has grown from 5 to 40 members.",
    initial: "JR",
  },
  {
    name: "Emily Chen",
    role: "LiveGood Ambassador",
    location: "Florida, USA",
    rating: 5,
    text: "Professional, responsive, and results-driven. They created stunning content for my LiveGood products and my engagement skyrocketed. Highly recommend!",
    initial: "EC",
  },
  {
    name: "Michael Thompson",
    role: "LiveGood Partner",
    location: "New York, USA",
    rating: 5,
    text: "I was struggling to get traction until I found this team. Their strategic approach to marketing LiveGood products helped me achieve consistent monthly growth.",
    initial: "MT",
  },
  {
    name: "Lisa Anderson",
    role: "LiveGood Member",
    location: "Georgia, USA",
    rating: 5,
    text: "The ROI has been incredible! They understand the LiveGood business model and know exactly how to position products for maximum conversions.",
    initial: "LA",
  },
  {
    name: "David Park",
    role: "LiveGood Leader",
    location: "Washington, USA",
    rating: 5,
    text: "These guys are the real deal. Professional marketing services at a fair price. My LiveGood business went from part-time to full-time income within 6 months!",
    initial: "DP",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4">Success Stories</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Trusted by LiveGood Members Worldwide
          </h2>
          <p className="text-lg text-muted-foreground">
            See how we've helped LiveGood members scale their businesses and achieve their goals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="relative hover:shadow-elegant transition-all duration-300">
              <CardContent className="pt-6">
                <Quote className="w-8 h-8 text-primary/20 mb-4" />
                
                <div className="flex mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>

                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarFallback className="bg-gradient-primary text-white font-semibold">
                      {testimonial.initial}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.location}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-6 py-3 rounded-full">
            <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
            <span className="font-semibold">4.9/5</span>
            <span className="text-muted-foreground">Average rating from 200+ clients</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
