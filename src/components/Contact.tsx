import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, ExternalLink, MessageCircle } from "lucide-react";

const contactMethods = [
  {
    icon: ExternalLink,
    title: "Upwork Profile",
    description: "View my portfolio and hire me directly",
    action: "Visit Profile",
    href: "https://www.upwork.com/freelancers/~01335a915de51108df",
    primary: true
  },
  {
    icon: Mail,
    title: "Email",
    description: "Send me a detailed project inquiry",
    action: "Send Email",
    href: "mailto:ayenijaywon@gmail.com",
    primary: false
  },
  {
    icon: Phone,
    title: "Phone",
    description: "Call for immediate consultation",
    action: "Call Now",
    href: "tel:+2349137349007",
    primary: false
  }
];

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-6 mb-16">
          <div className="flex items-center justify-center space-x-2 text-primary">
            <MessageCircle className="w-5 h-5" />
            <span className="text-sm font-semibold uppercase tracking-wide">Contact</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Ready to Transform Your Shopify Store?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Let's discuss your project and see how I can help you achieve your e-commerce goals. 
            I'm available for clients worldwide and ready to start immediately.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {contactMethods.map((method, index) => (
            <Card 
              key={index} 
              className={`group hover:shadow-primary transition-all duration-300 border-border/50 hover:border-primary/30 ${
                method.primary ? 'ring-2 ring-primary/20 bg-gradient-subtle' : ''
              }`}
            >
              <CardHeader className="text-center space-y-4">
                <div className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 ${
                  method.primary ? 'bg-gradient-primary' : 'bg-secondary'
                }`}>
                  <method.icon className={`w-8 h-8 ${
                    method.primary ? 'text-primary-foreground' : 'text-primary'
                  }`} />
                </div>
                <CardTitle className="text-foreground group-hover:text-primary transition-colors">
                  {method.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="text-muted-foreground">
                  {method.description}
                </p>
                <Button 
                  variant={method.primary ? "hero" : "outline"} 
                  asChild 
                  className="w-full"
                >
                  <a 
                    href={method.href} 
                    target={method.href.startsWith('http') ? '_blank' : undefined}
                    rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  >
                    {method.action}
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-16 p-8 bg-gradient-subtle rounded-2xl border border-border/50">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Fast Response Guaranteed
          </h3>
          <p className="text-lg text-muted-foreground mb-6">
            I typically respond to inquiries within 2-4 hours during business hours. 
            For urgent projects, feel free to call directly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="flex items-center space-x-2 text-muted-foreground">
              <Mail className="w-4 h-4" />
              <span>ayenijaywon@gmail.com</span>
            </div>
            <div className="hidden sm:block h-4 w-px bg-border"></div>
            <div className="flex items-center space-x-2 text-muted-foreground">
              <Phone className="w-4 h-4" />
              <span>+234 913 734 9007</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;