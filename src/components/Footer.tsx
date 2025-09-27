import { ExternalLink, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">ST</span>
              </div>
              <span className="text-xl font-bold">SHOPTECH</span>
            </div>
            <p className="text-background/70 leading-relaxed">
              Professional Shopify solutions for businesses worldwide. 
              Transform your store, boost sales, and grow your online presence with expert help.
            </p>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Services</h3>
            <ul className="space-y-2 text-background/70">
              <li>Store Setup & Configuration</li>
              <li>Custom Design & Development</li>
              <li>Performance Optimization</li>
              <li>Analytics & Conversion</li>
              <li>App Integration</li>
              <li>Mobile Commerce</li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Info</h3>
            <div className="space-y-3">
              <a 
                href="mailto:ayeniadejuwon52@gmail.com" 
                className="flex items-center space-x-2 text-background/70 hover:text-background transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>ayeniadejuwon52@gmail.com</span>
              </a>
              <a 
                href="tel:+2349137349007" 
                className="flex items-center space-x-2 text-background/70 hover:text-background transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>+234 913 734 9007</span>
              </a>
              <a 
                href="https://www.upwork.com/freelancers/~01335a915de51108df" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-background/70 hover:text-background transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Upwork Profile</span>
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-background/20 pt-8 mt-8 text-center">
          <p className="text-background/70">
            © {new Date().getFullYear()} SHOPTECH. All rights reserved. 
            Professional Shopify solutions by Adejuwon Ayeni.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;