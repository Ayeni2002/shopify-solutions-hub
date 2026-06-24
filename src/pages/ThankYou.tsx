import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Mail, MessageCircle, ArrowLeft } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const EMAIL = "Ayeniadejuwon52@gmail.com";
const WHATSAPP = "2349137349007";

const ThankYou = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [storeUrl, setStoreUrl] = useState("");
  const [notes, setNotes] = useState("");

  const buildBody = () =>
    `Hi SHOPTECH team,%0D%0A%0D%0AI've completed my $40 Shopify Visibility & Performance Audit payment. Here are my store details:%0D%0A%0D%0AName: ${encodeURIComponent(
      name
    )}%0D%0AEmail: ${encodeURIComponent(email)}%0D%0AShopify Store URL: ${encodeURIComponent(
      storeUrl
    )}%0D%0A%0D%0AAdditional notes:%0D%0A${encodeURIComponent(notes)}%0D%0A%0D%0AThanks!`;

  const handleEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!storeUrl.trim() || !email.trim() || !name.trim()) {
      toast({ title: "Missing info", description: "Please fill in your name, email and store URL.", variant: "destructive" });
      return;
    }
    const subject = encodeURIComponent("Shopify Audit — Store Details Submission");
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${buildBody()}`;
  };

  const handleWhatsApp = () => {
    if (!storeUrl.trim()) {
      toast({ title: "Add your store URL", description: "Please enter your Shopify store URL first.", variant: "destructive" });
      return;
    }
    const msg = `Hi SHOPTECH! I just paid for the $40 Shopify Audit.%0AName: ${name}%0AEmail: ${email}%0AStore URL: ${storeUrl}%0ANotes: ${notes}`;
    window.open(`https://wa.me/${WHATSAPP}?text=${msg}`, "_blank");
  };

  return (
    <main className="min-h-screen bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-mesh opacity-40 pointer-events-none" />
      <div className="relative container mx-auto px-4 py-16 max-w-3xl">
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to home
        </Link>

        <div className="text-center mb-10 animate-fade-in">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-6">
            <CheckCircle2 className="w-12 h-12 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Payment Received — <span className="text-gradient">Thank You!</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            One last step: send us your Shopify store URL so we can start your audit. You'll receive your full report within 24–48 hours.
          </p>
        </div>

        <Card className="p-6 md:p-8 border-primary/20 shadow-xl backdrop-blur">
          <form onSubmit={handleEmail} className="space-y-5">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium mb-2 block">Your Name *</label>
                <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="Jane Doe" maxLength={100} required />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Email (for the report) *</label>
                <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@store.com" maxLength={255} required />
              </div>
            </div>

            <div>
              <label className="text-sm font-medium mb-2 block">Shopify Store URL *</label>
              <Input type="url" value={storeUrl} onChange={(e) => setStoreUrl(e.target.value)} placeholder="https://yourstore.myshopify.com" maxLength={255} required />
            </div>

            <div>
              <label className="text-sm font-medium mb-2 block">Anything specific we should look at? (optional)</label>
              <Textarea value={notes} onChange={(e) => setNotes(e.target.value)} placeholder="e.g. Slow product pages, low Google traffic, mobile issues..." maxLength={1000} rows={4} />
            </div>

            <div className="grid sm:grid-cols-2 gap-3 pt-2">
              <Button type="submit" size="lg" className="w-full gap-2">
                <Mail className="w-4 h-4" /> Send via Email
              </Button>
              <Button type="button" size="lg" variant="outline" className="w-full gap-2" onClick={handleWhatsApp}>
                <MessageCircle className="w-4 h-4" /> Send via WhatsApp
              </Button>
            </div>

            <p className="text-xs text-muted-foreground text-center pt-2">
              Your details go directly to {EMAIL}. We reply within a few hours.
            </p>
          </form>
        </Card>

        <div className="mt-10 text-center text-sm text-muted-foreground">
          <p>What happens next:</p>
          <ol className="mt-3 space-y-1 inline-block text-left">
            <li>1. We confirm your submission within a few hours.</li>
            <li>2. We run your full Visibility & Performance Audit.</li>
            <li>3. You receive your detailed report + action plan in 24–48h.</li>
          </ol>
        </div>
      </div>
    </main>
  );
};

export default ThankYou;