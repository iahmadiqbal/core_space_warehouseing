import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ShoppingCart, Factory, Ship, UtensilsCrossed, Building2, Clock, CalendarDays, Thermometer, Settings, CheckCircle2, ArrowRight } from "lucide-react";
import CTASection from "@/components/CTASection";
import hero1 from "@/assets/hero-warehouse-1.jpg";
import hero2 from "@/assets/hero-warehouse-2.jpg";
import hero3 from "@/assets/hero-warehouse-3.jpg";

const slides = [
  { img: hero1, headline: "Flexible Warehouse Space for Your Business Needs", sub: "Reliable and scalable storage solutions across Canada." },
  { img: hero2, headline: "Secure & Scalable Storage Solutions", sub: "From short-term to long-term, we have the right space for you." },
  { img: hero3, headline: "Your Business, Our Warehouse", sub: "Tailored warehousing solutions for every industry." },
];

const HeroSlideshow = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrent((p) => (p + 1) % slides.length), 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
      {slides.map((s, i) => (
        <div key={i} className={`absolute inset-0 transition-opacity duration-1000 ${i === current ? "opacity-100" : "opacity-0"}`}>
          <img src={s.img} alt="Warehouse" className="w-full h-full object-cover" width={1920} height={800} />
          <div className="absolute inset-0 bg-hero-overlay/60" />
        </div>
      ))}
      <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
        <div className="max-w-3xl animate-fade-in-up">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4 leading-tight">{slides[current].headline}</h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-8">{slides[current].sub}</p>
          <Link to="/get-a-quote" className="inline-block px-8 py-4 bg-accent text-accent-foreground rounded-lg text-lg font-semibold hover:opacity-90 transition-opacity shadow-lg">
            Get a Quote
          </Link>
        </div>
      </div>
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, i) => (
          <button key={i} onClick={() => setCurrent(i)} className={`w-3 h-3 rounded-full transition-colors ${i === current ? "bg-accent" : "bg-primary-foreground/40"}`} />
        ))}
      </div>
    </section>
  );
};

const WhoWeAreSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <section ref={ref} className="py-20 bg-background">
      <div className={`container mx-auto px-4 max-w-3xl text-center ${isVisible ? "animate-slide-up" : "opacity-0"}`}>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Who We Are</h2>
        <p className="text-muted-foreground text-lg leading-relaxed">
          Core Space Warehousing provides flexible and reliable warehouse spaces designed to meet the needs of businesses of all sizes. Whether you need short-term storage during peak seasons or long-term dedicated space for your operations, we deliver practical solutions that keep your business running smoothly. Serving businesses across Canada, we focus on accessibility, scalability, and dependability — so you can focus on what matters most: growing your business.
        </p>
      </div>
    </section>
  );
};

const HowItWorksSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const steps = [
    { num: "1", title: "Submit Your Requirement", desc: "Tell us what you need through our simple form." },
    { num: "2", title: "Our Team Contacts You", desc: "A dedicated team member will reach out within 24 hours." },
    { num: "3", title: "Review Available Options", desc: "Browse warehouse spaces that match your needs." },
    { num: "4", title: "Confirm & Book", desc: "Finalize your selection and start using your space." },
  ];
  return (
    <section ref={ref} className="py-20 bg-section-alt">
      <div className="container mx-auto px-4">
        <h2 className={`text-3xl md:text-4xl font-bold text-foreground text-center mb-12 ${isVisible ? "animate-slide-down" : "opacity-0"}`}>How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((s, i) => (
            <div key={i} className={`text-center ${isVisible ? "animate-fade-in-up" : "opacity-0"}`} style={{ animationDelay: `${i * 150}ms` }}>
              <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mx-auto mb-4">{s.num}</div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WhoWeServeSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const industries = [
    { icon: ShoppingCart, label: "Retail & E-commerce" },
    { icon: Factory, label: "Manufacturing & Industrial" },
    { icon: Ship, label: "Importers & Exporters" },
    { icon: UtensilsCrossed, label: "Food & Beverage" },
    { icon: Building2, label: "Other Businesses" },
  ];
  return (
    <section ref={ref} className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className={`text-3xl md:text-4xl font-bold text-foreground text-center mb-12 ${isVisible ? "animate-slide-up" : "opacity-0"}`}>Who We Serve</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {industries.map((item, i) => (
            <Link to="/who-we-serve" key={i} className={`flex flex-col items-center p-6 bg-card rounded-xl shadow-md hover:shadow-lg hover:-translate-y-1 transition-all border border-border ${isVisible ? "animate-fade-in-up" : "opacity-0"}`} style={{ animationDelay: `${i * 100}ms` }}>
              <item.icon className="h-10 w-10 text-primary mb-3" />
              <span className="text-sm font-medium text-foreground text-center">{item.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

const ServicesOverviewSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const services = [
    { icon: Clock, title: "Short-Term Storage", desc: "Flexible storage for temporary or seasonal needs. Scale up or down as required." },
    { icon: CalendarDays, title: "Long-Term Storage", desc: "Dedicated warehouse space for ongoing business operations and growth." },
    { icon: Thermometer, title: "Climate-Controlled Units", desc: "Temperature and humidity controlled environments for sensitive goods." },
    { icon: Settings, title: "Flexible Storage Solutions", desc: "Customized warehouse configurations tailored to your unique requirements." },
  ];
  return (
    <section ref={ref} className="py-20 bg-section-alt">
      <div className="container mx-auto px-4">
        <h2 className={`text-3xl md:text-4xl font-bold text-foreground text-center mb-12 ${isVisible ? "animate-slide-down" : "opacity-0"}`}>Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <div key={i} className={`bg-card p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-border ${isVisible ? "animate-fade-in-up" : "opacity-0"}`} style={{ animationDelay: `${i * 150}ms` }}>
              <s.icon className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm mb-4">{s.desc}</p>
              <Link to="/services" className="text-primary text-sm font-medium flex items-center gap-1 hover:gap-2 transition-all">
                Learn More <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WhyChooseUsSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const points = [
    "Flexible warehouse solutions for any business size",
    "Reliable and secure facilities across Canada",
    "Quick response and dedicated support team",
    "Suitable for businesses of all sizes and industries",
  ];
  return (
    <section ref={ref} className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className={`text-3xl md:text-4xl font-bold text-foreground text-center mb-10 ${isVisible ? "animate-slide-up" : "opacity-0"}`}>Why Choose Us</h2>
        <div className="space-y-4">
          {points.map((p, i) => (
            <div key={i} className={`flex items-start gap-3 ${isVisible ? "animate-slide-left" : "opacity-0"}`} style={{ animationDelay: `${i * 150}ms` }}>
              <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-0.5" />
              <p className="text-foreground text-lg">{p}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const HomePage = () => {
  return (
    <>
      <HeroSlideshow />
      <WhoWeAreSection />
      <HowItWorksSection />
      <WhoWeServeSection />
      <ServicesOverviewSection />
      <WhyChooseUsSection />
      <CTASection />
    </>
  );
};

export default HomePage;
