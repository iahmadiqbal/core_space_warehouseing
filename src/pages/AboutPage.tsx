import { Link } from "react-router-dom";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { CheckCircle2, ShoppingCart, Factory, Ship, UtensilsCrossed, Building2, Eye, Target } from "lucide-react";
import CTASection from "@/components/CTASection";
import aboutHero from "@/assets/about-hero.jpg";


const AboutPage = () => {
  const { ref: whoRef, isVisible: whoVis } = useScrollAnimation();
  const { ref: mvRef, isVisible: mvVis } = useScrollAnimation();
  const { ref: offerRef, isVisible: offerVis } = useScrollAnimation();
  const { ref: serveRef, isVisible: serveVis } = useScrollAnimation();
  const { ref: whyRef, isVisible: whyVis } = useScrollAnimation();

  const offers = [
    "Flexible Warehouse Spaces",
    "Short & Long-Term Storage",
    "Secure Facilities",
    "Easy Access & Convenient Locations",
    "Climate-Controlled Options",
    "Dedicated Support Team",
  ];

  const industries = [
    { icon: ShoppingCart, label: "Retail & E-commerce" },
    { icon: Factory, label: "Manufacturing & Industrial" },
    { icon: Ship, label: "Importers & Exporters" },
    { icon: UtensilsCrossed, label: "Food & Beverage" },
    { icon: Building2, label: "Other Businesses" },
  ];

  const whyPoints = [
    "Flexible solutions tailored to your needs",
    "Secure and well-maintained warehouses",
    "Fast and responsive support team",
    "Reliable service you can count on",
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[350px] overflow-hidden">
        <img src={aboutHero} alt="About Core Space Warehousing" className="w-full h-full object-cover" width={1920} height={800} />
        <div className="absolute inset-0 bg-hero-overlay/60" />
        <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
          <div className="animate-fade-in-up">
            <h1 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-4">About Core Space Warehousing</h1>
            <p className="text-lg text-primary-foreground/80">Flexible and reliable warehouse solutions across Canada</p>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section ref={whoRef} className="py-20 bg-background">
        <div className={`container mx-auto px-4 max-w-3xl text-center ${whoVis ? "animate-slide-up" : "opacity-0"}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Who We Are</h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Core Space Warehousing is a trusted warehousing solutions provider serving businesses across Canada. We specialize in offering flexible, reliable, and secure warehouse spaces that adapt to the evolving needs of modern businesses. Our mission is simple: provide the right space, at the right time, at the right price. Whether you're a small business looking for temporary storage or a large enterprise requiring dedicated facilities, we are committed to being your dependable warehousing partner.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section ref={mvRef} className="py-20 bg-section-alt">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
            <div className={`bg-card p-8 rounded-xl shadow-md border border-border ${mvVis ? "animate-slide-right" : "opacity-0"}`}>
              <div className="flex items-center gap-3 mb-4">
                <Target className="h-8 w-8 text-primary" />
                <h3 className="text-2xl font-bold text-foreground">Our Mission</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                To provide accessible, flexible, and secure warehouse solutions that empower businesses to operate efficiently and grow without storage constraints. We aim to simplify warehousing by offering transparent pricing, easy onboarding, and dedicated support for every client.
              </p>
            </div>
            <div className={`bg-card p-8 rounded-xl shadow-md border border-border ${mvVis ? "animate-slide-left" : "opacity-0"}`}>
              <div className="flex items-center gap-3 mb-4">
                <Eye className="h-8 w-8 text-primary" />
                <h3 className="text-2xl font-bold text-foreground">Our Vision</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                To become Canada's most trusted and preferred warehousing partner by continuously innovating our services, expanding our facility network, and maintaining the highest standards of quality, security, and customer satisfaction in every warehouse we operate.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section ref={offerRef} className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className={`text-3xl md:text-4xl font-bold text-foreground text-center mb-10 ${offerVis ? "animate-slide-down" : "opacity-0"}`}>What We Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {offers.map((item, i) => (
              <div key={i} className={`flex items-center gap-3 p-4 bg-card rounded-lg border border-border ${offerVis ? "animate-fade-in-up" : "opacity-0"}`} style={{ animationDelay: `${i * 100}ms` }}>
                <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                <span className="text-foreground font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section ref={serveRef} className="py-20 bg-section-alt">
        <div className="container mx-auto px-4">
          <h2 className={`text-3xl md:text-4xl font-bold text-foreground text-center mb-12 ${serveVis ? "animate-slide-up" : "opacity-0"}`}>Who We Serve</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-4xl mx-auto">
            {industries.map((item, i) => (
              <div key={i} className={`flex flex-col items-center p-6 bg-card rounded-xl shadow-md border border-border ${serveVis ? "animate-fade-in-up" : "opacity-0"}`} style={{ animationDelay: `${i * 100}ms` }}>
                <item.icon className="h-10 w-10 text-primary mb-3" />
                <span className="text-sm font-medium text-foreground text-center">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section ref={whyRef} className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className={`text-3xl md:text-4xl font-bold text-foreground text-center mb-10 ${whyVis ? "animate-slide-down" : "opacity-0"}`}>Why Choose Us</h2>
          <div className="space-y-4">
            {whyPoints.map((p, i) => (
              <div key={i} className={`flex items-start gap-3 ${whyVis ? "animate-slide-left" : "opacity-0"}`} style={{ animationDelay: `${i * 150}ms` }}>
                <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                <p className="text-foreground text-lg">{p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
};

export default AboutPage;
