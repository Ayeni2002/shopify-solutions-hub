import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Search, Gauge, Smartphone, Bot, AlertTriangle, Eye, Layers, TrendingUp,
  CheckCircle2, ShieldCheck, Zap, Sparkles, ArrowRight, Mail, MessageCircle,
  Twitter, Briefcase, Clock, Target, Rocket, LineChart, Plus, Minus
} from "lucide-react";
import ayeniAsset from "@/assets/ayeni.jpg.asset.json";

const useReveal = () => {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            (e.target as HTMLElement).classList.add("in-view");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
};

const Nav = () => (
  <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border/60">
    <div className="container flex items-center justify-between h-16">
      <a href="#top" className="flex items-center gap-2 font-bold text-lg tracking-tight">
        <span className="w-8 h-8 rounded-lg bg-gradient-primary grid place-items-center text-primary-foreground shadow-primary">
          <Sparkles className="w-4 h-4" />
        </span>
        <span className="text-gradient">SHOPTECH</span>
      </a>
      <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
        <a href="#problems" className="hover:text-foreground transition-colors">Problems</a>
        <a href="#service" className="hover:text-foreground transition-colors">What You Get</a>
        <a href="#pricing" className="hover:text-foreground transition-colors">Pricing</a>
        <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
      </nav>
      <a href="#pricing">
        <Button className="bg-gradient-primary hover:opacity-90 shadow-primary">Claim $60 Audit</Button>
      </a>
    </div>
  </header>
);

const FloatingIcon = ({ Icon, className, delay = "0s" }: { Icon: any; className: string; delay?: string }) => (
  <div
    className={`absolute hidden md:grid place-items-center w-12 h-12 rounded-2xl bg-card border border-border shadow-card text-primary animate-float ${className}`}
    style={{ animationDelay: delay }}
  >
    <Icon className="w-5 h-5" />
  </div>
);

const Hero = () => (
  <section id="top" className="relative pt-32 pb-24 overflow-hidden bg-mesh">
    <div
      className="absolute inset-0 -z-10 opacity-60"
      style={{
        backgroundImage:
          "linear-gradient(120deg, hsl(150 60% 96%), transparent 40%, hsl(150 60% 96%))",
        backgroundSize: "200% 200%",
        animation: "gradient-shift 14s ease infinite",
      }}
    />
    <FloatingIcon Icon={Search} className="top-28 left-[6%]" />
    <FloatingIcon Icon={Gauge} className="top-44 right-[8%]" delay="1.2s" />
    <FloatingIcon Icon={Bot} className="bottom-24 left-[12%]" delay="2.4s" />
    <FloatingIcon Icon={LineChart} className="bottom-32 right-[14%]" delay="0.6s" />

    <div className="container relative">
      <div className="grid lg:grid-cols-[1.15fr_1fr] gap-12 items-center">
        <div className="reveal">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold border border-primary/20">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            Limited Audit Slots Available This Month
          </span>
          <h1 className="mt-6 text-4xl md:text-6xl font-bold tracking-tight leading-[1.05]">
            Is Google Actually <br className="hidden md:block" />
            <span className="text-gradient">Finding Your Shopify Store?</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-xl">
            Many Shopify stores lose traffic and sales because Google cannot properly
            discover, crawl, index, or understand their pages.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#pricing">
              <Button size="lg" className="bg-gradient-primary hover:opacity-90 shadow-primary animate-pulse-glow text-base h-12 px-6">
                Claim My $60 Audit <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </a>
            <a href="#service">
              <Button size="lg" variant="outline" className="h-12 px-6">See What's Included</Button>
            </a>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            One-time payment. No monthly fees. No contracts.
          </p>

          <div className="mt-10 flex items-center gap-4 p-4 rounded-2xl border border-border bg-card/70 backdrop-blur shadow-card max-w-md">
            <img
              src={ayeniAsset.url}
              alt="Samuel Ayeni — Shopify visibility specialist"
              className="w-16 h-16 rounded-full object-cover ring-2 ring-primary/30"
            />
            <p className="text-sm text-foreground/80 leading-relaxed">
              <span className="font-semibold text-foreground">Hi, I'm Samuel Ayeni.</span> I help Shopify store
              owners identify hidden technical issues affecting visibility, indexing, speed, and search performance.
            </p>
          </div>
        </div>

        <div className="relative reveal" style={{ transitionDelay: "120ms" }}>
          <div className="relative mx-auto max-w-md">
            <div className="absolute -inset-6 bg-gradient-primary opacity-20 blur-3xl rounded-full" />
            <div className="relative rounded-3xl border border-border bg-card shadow-elegant p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm font-semibold">
                  <ShieldCheck className="w-4 h-4 text-primary" /> Audit Snapshot
                </div>
                <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary font-medium">Live</span>
              </div>
              <div className="mt-5 space-y-3">
                {[
                  { label: "Indexed Pages", val: "42%", bad: true },
                  { label: "Crawl Health", val: "Issues Found", bad: true },
                  { label: "Mobile Speed", val: "Slow", bad: true },
                  { label: "Recommendations", val: "Ready", bad: false },
                ].map((r, i) => (
                  <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-secondary">
                    <span className="text-sm text-muted-foreground">{r.label}</span>
                    <span className={`text-sm font-semibold ${r.bad ? "text-destructive" : "text-primary"}`}>
                      {r.val}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-5 h-2 rounded-full bg-secondary overflow-hidden">
                <div
                  className="h-full bg-gradient-primary"
                  style={{
                    width: "68%",
                    backgroundSize: "200% 100%",
                    animation: "shimmer 3s linear infinite",
                  }}
                />
              </div>
              <p className="mt-3 text-xs text-muted-foreground">Scanning visibility signals…</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Problems = () => {
  const items = [
    { icon: Eye, text: "Important pages not indexed" },
    { icon: Bot, text: "Crawl restrictions blocking Google" },
    { icon: Gauge, text: "Slow loading pages" },
    { icon: AlertTriangle, text: "Technical SEO issues" },
    { icon: Target, text: "Missing optimization opportunities" },
    { icon: Search, text: "Poor search visibility" },
    { icon: Smartphone, text: "Mobile performance concerns" },
    { icon: Layers, text: "Store structure issues" },
  ];
  return (
    <section id="problems" className="py-24 bg-background">
      <div className="container">
        <div className="max-w-2xl reveal">
          <span className="text-xs uppercase tracking-widest text-primary font-semibold">The Problem</span>
          <h2 className="mt-3 text-3xl md:text-5xl font-bold tracking-tight">
            Your Store May Have <span className="text-gradient">Hidden Problems</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            These silent issues quietly drain organic traffic and revenue every single day.
          </p>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((it, i) => (
            <div
              key={i}
              className="reveal group p-6 rounded-2xl border border-border bg-card shadow-card hover:shadow-primary hover:-translate-y-1 hover:border-primary/40 transition-all duration-300"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary grid place-items-center group-hover:bg-gradient-primary group-hover:text-primary-foreground transition-colors">
                <it.icon className="w-5 h-5" />
              </div>
              <p className="mt-4 font-medium text-foreground/90">{it.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Service = () => {
  const list = [
    "Complete website visibility audit",
    "Google indexing analysis",
    "Crawlability review",
    "Technical SEO assessment",
    "Speed and performance report",
    "Mobile experience review",
    "Search visibility opportunities",
    "Actionable improvement recommendations",
  ];
  return (
    <section id="service" className="py-24 bg-gradient-subtle">
      <div className="container grid lg:grid-cols-2 gap-12 items-center">
        <div className="reveal">
          <span className="text-xs uppercase tracking-widest text-primary font-semibold">What You'll Receive</span>
          <h2 className="mt-3 text-3xl md:text-5xl font-bold tracking-tight">
            A clear, actionable <span className="text-gradient">audit deliverable</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-lg">
            A complete review of how Google sees and experiences your Shopify store — with the exact
            fixes that move the needle.
          </p>
          <a href="#pricing" className="inline-block mt-8">
            <Button size="lg" className="bg-gradient-primary hover:opacity-90 shadow-primary">
              Claim My $60 Audit <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </a>
        </div>
        <div className="reveal grid sm:grid-cols-2 gap-3">
          {list.map((t, i) => (
            <div
              key={i}
              className="flex items-start gap-3 p-4 rounded-xl bg-card border border-border shadow-card hover:border-primary/40 hover:translate-x-1 transition-all"
              style={{ transitionDelay: `${i * 40}ms` }}
            >
              <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
              <span className="text-sm font-medium text-foreground/90">{t}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Pricing = () => (
  <section id="pricing" className="py-24 bg-background">
    <div className="container">
      <div className="max-w-xl mx-auto text-center reveal">
        <span className="text-xs uppercase tracking-widest text-primary font-semibold">Simple Pricing</span>
        <h2 className="mt-3 text-3xl md:text-5xl font-bold tracking-tight">One audit. One price.</h2>
        <p className="mt-4 text-muted-foreground">No subscriptions. No retainers. Just clarity.</p>
      </div>
      <div className="mt-12 max-w-md mx-auto reveal">
        <div className="relative rounded-3xl border border-primary/30 bg-card shadow-elegant overflow-hidden">
          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-primary" />
          <div className="p-8 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">
              <Clock className="w-3.5 h-3.5" /> Limited slots this month
            </div>
            <div className="mt-6 flex items-end justify-center gap-2">
              <span className="text-6xl font-bold tracking-tight">$60</span>
              <span className="text-muted-foreground mb-2">USD</span>
            </div>
            <p className="mt-1 font-semibold text-primary">One-Time Payment</p>
            <ul className="mt-6 space-y-3 text-left">
              {["No subscriptions", "No recurring charges", "No hidden fees", "Full audit deliverable", "Actionable recommendations"].map((f) => (
                <li key={f} className="flex items-center gap-3 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-primary" /> {f}
                </li>
              ))}
            </ul>
            <a href="#contact" className="block mt-8">
              <Button size="lg" className="w-full bg-gradient-primary hover:opacity-90 shadow-primary animate-pulse-glow h-12">
                Secure My Spot
              </Button>
            </a>
            <p className="mt-4 text-xs text-muted-foreground">
              Only a limited number of audits are accepted each month.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Benefits = () => {
  const items = [
    { icon: Rocket, title: "Get discovered faster", desc: "Help Google find new and important pages on your store sooner." },
    { icon: TrendingUp, title: "Improve organic visibility", desc: "Surface in more relevant search queries that bring buyers." },
    { icon: Bot, title: "Speak Google's language", desc: "Help search engines clearly understand what your store sells." },
    { icon: ShieldCheck, title: "Catch issues early", desc: "Identify silent technical problems before they hurt sales." },
    { icon: Zap, title: "Better user experience", desc: "A faster, cleaner store keeps shoppers engaged and buying." },
    { icon: Layers, title: "Foundation for growth", desc: "A solid technical base every future marketing effort builds on." },
  ];
  return (
    <section className="py-24 bg-gradient-subtle">
      <div className="container">
        <div className="max-w-2xl reveal">
          <span className="text-xs uppercase tracking-widest text-primary font-semibold">Why This Matters</span>
          <h2 className="mt-3 text-3xl md:text-5xl font-bold tracking-tight">
            Built for stores that want to <span className="text-gradient">scale cleanly</span>
          </h2>
        </div>
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((b, i) => (
            <div
              key={i}
              className="reveal p-6 rounded-2xl bg-card border border-border shadow-card hover:-translate-y-1 hover:shadow-elegant hover:border-primary/30 transition-all"
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <div className="w-12 h-12 rounded-2xl bg-gradient-primary text-primary-foreground grid place-items-center shadow-primary">
                <b.icon className="w-5 h-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">{b.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => (
  <section id="contact" className="py-24 bg-background">
    <div className="container">
      <div className="max-w-2xl mx-auto text-center reveal">
        <span className="text-xs uppercase tracking-widest text-primary font-semibold">Contact</span>
        <h2 className="mt-3 text-3xl md:text-5xl font-bold tracking-tight">Get Your Shopify Audit</h2>
        <p className="mt-4 text-muted-foreground">
          Reach out through your preferred channel. I personally reply to every message.
        </p>
      </div>
      <div className="mt-12 max-w-3xl mx-auto grid sm:grid-cols-2 gap-4 reveal">
        <a href="https://wa.me/2349137349007" target="_blank" rel="noreferrer"
          className="group flex items-center gap-4 p-5 rounded-2xl border border-border bg-card shadow-card hover:border-primary/40 hover:shadow-primary transition-all">
          <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary grid place-items-center group-hover:bg-gradient-primary group-hover:text-primary-foreground transition-colors">
            <MessageCircle className="w-5 h-5" />
          </div>
          <div>
            <p className="font-semibold">WhatsApp</p>
            <p className="text-sm text-muted-foreground">Chat instantly</p>
          </div>
          <ArrowRight className="ml-auto w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
        </a>
        <a href="https://www.upwork.com/freelancers/sammy1" target="_blank" rel="noreferrer"
          className="group flex items-center gap-4 p-5 rounded-2xl border border-border bg-card shadow-card hover:border-primary/40 hover:shadow-primary transition-all">
          <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary grid place-items-center group-hover:bg-gradient-primary group-hover:text-primary-foreground transition-colors">
            <Briefcase className="w-5 h-5" />
          </div>
          <div>
            <p className="font-semibold">Upwork</p>
            <p className="text-sm text-muted-foreground">Hire securely</p>
          </div>
          <ArrowRight className="ml-auto w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
        </a>
        <a href="mailto:Ayeniadejuwon52@gmail.com"
          className="group flex items-center gap-4 p-5 rounded-2xl border border-border bg-card shadow-card hover:border-primary/40 hover:shadow-primary transition-all">
          <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary grid place-items-center group-hover:bg-gradient-primary group-hover:text-primary-foreground transition-colors">
            <Mail className="w-5 h-5" />
          </div>
          <div>
            <p className="font-semibold">Email</p>
            <p className="text-sm text-muted-foreground break-all">Ayeniadejuwon52@gmail.com</p>
          </div>
        </a>
        <a href="https://x.com/ayeniadejuwon19" target="_blank" rel="noreferrer"
          className="group flex items-center gap-4 p-5 rounded-2xl border border-border bg-card shadow-card hover:border-primary/40 hover:shadow-primary transition-all">
          <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary grid place-items-center group-hover:bg-gradient-primary group-hover:text-primary-foreground transition-colors">
            <Twitter className="w-5 h-5" />
          </div>
          <div>
            <p className="font-semibold">X (Twitter)</p>
            <p className="text-sm text-muted-foreground">Connect with me</p>
          </div>
          <ArrowRight className="ml-auto w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
        </a>
      </div>
    </div>
  </section>
);

const FinalCTA = () => (
  <section className="py-24">
    <div className="container">
      <div className="relative overflow-hidden rounded-3xl p-10 md:p-16 text-center reveal bg-gradient-primary">
        <div className="absolute inset-0 opacity-30 bg-mesh" />
        <div className="relative">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-primary-foreground max-w-3xl mx-auto leading-tight">
            Every Day Your Store Isn't Properly Optimized Is a Missed Opportunity
          </h2>
          <p className="mt-5 text-primary-foreground/90 max-w-xl mx-auto">
            Book your Shopify visibility and performance audit today for a one-time payment of $60.
          </p>
          <a href="#contact">
            <Button size="lg" className="mt-8 bg-background text-primary hover:bg-background/90 h-12 px-8 shadow-elegant">
              Claim My Audit Now <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </a>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="border-t border-border bg-card">
    <div className="container py-12 grid md:grid-cols-3 gap-8">
      <div>
        <div className="flex items-center gap-2 font-bold text-lg">
          <span className="w-8 h-8 rounded-lg bg-gradient-primary grid place-items-center text-primary-foreground">
            <Sparkles className="w-4 h-4" />
          </span>
          <span className="text-gradient">SHOPTECH</span>
        </div>
        <p className="mt-3 text-sm text-muted-foreground">Shopify Visibility & Performance Audits</p>
      </div>
      <div>
        <p className="text-sm font-semibold mb-3">Reach Out</p>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li><a href="mailto:Ayeniadejuwon52@gmail.com" className="hover:text-primary">Ayeniadejuwon52@gmail.com</a></li>
          <li><a href="https://wa.me/2349137349007" target="_blank" rel="noreferrer" className="hover:text-primary">WhatsApp</a></li>
          <li><a href="https://www.upwork.com/freelancers/sammy1" target="_blank" rel="noreferrer" className="hover:text-primary">Upwork</a></li>
          <li><a href="https://x.com/ayeniadejuwon19" target="_blank" rel="noreferrer" className="hover:text-primary">X (Twitter)</a></li>
        </ul>
      </div>
      <div>
        <p className="text-sm font-semibold mb-3">Service</p>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li><a href="#problems" className="hover:text-primary">Hidden Problems</a></li>
          <li><a href="#service" className="hover:text-primary">What's Included</a></li>
          <li><a href="#pricing" className="hover:text-primary">Pricing</a></li>
          <li><a href="#contact" className="hover:text-primary">Contact</a></li>
        </ul>
      </div>
    </div>
    <div className="border-t border-border">
      <div className="container py-5 text-xs text-muted-foreground flex flex-col md:flex-row items-center justify-between gap-2">
        <p>© {new Date().getFullYear()} SHOPTECH. All rights reserved.</p>
        <p>Built for Shopify store owners who want to be found.</p>
      </div>
    </div>
  </footer>
);

const Index = () => {
  useReveal();
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <Problems />
      <Service />
      <Pricing />
      <Benefits />
      <Contact />
      <FinalCTA />
      <Footer />
    </main>
  );
};

export default Index;