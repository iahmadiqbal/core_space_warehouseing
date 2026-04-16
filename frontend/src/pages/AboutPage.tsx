import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { CheckCircle2, ShoppingCart, Factory, Ship, UtensilsCrossed, Building2, Rocket, Telescope, ArrowRight } from "lucide-react";
import CTASection from "@/components/CTASection";
import aboutHero from "@/assets/about-hero.jpg";
import hero3 from "@/assets/hero-warehouse-3.jpg";
import businessImg from "@/assets/business-warehouse.jpg";
import { Link } from "react-router-dom";

const AboutPage = () => {
  const { ref: whoRef, isVisible: whoVis } = useScrollAnimation();
  const { ref: mvRef, isVisible: mvVis } = useScrollAnimation();
  const { ref: offerRef, isVisible: offerVis } = useScrollAnimation();
  const { ref: serveRef, isVisible: serveVis } = useScrollAnimation();

  const offers = [
    "Flexible Warehouse Spaces",
    "Short & Long-Term Storage",
    "Secure Facilities",
    "Easy Access & Convenient Locations",
    "Climate-Controlled Options",
    "Dedicated Support Team",
  ];

  const industries = [
    { icon: ShoppingCart, label: "Retail & E-commerce", desc: "Fast fulfillment and scalable inventory solutions for online stores and retail operations." },
    { icon: Factory, label: "Manufacturing & Industrial", desc: "Heavy-duty storage for raw materials, equipment, and finished goods with reinforced infrastructure." },
    { icon: Ship, label: "Importers & Exporters", desc: "Strategic cross-border staging areas for efficient container handling and redistribution." },
    { icon: UtensilsCrossed, label: "Food & Beverage", desc: "Temperature-controlled facilities meeting strict hygiene and food safety compliance standards." },
    { icon: Building2, label: "Other Businesses", desc: "Customizable warehouse configurations for healthcare, tech, automotive, and specialized sectors." },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="relative h-[35vh] md:h-[60vh] min-h-[280px] md:min-h-[450px] overflow-hidden">
        <img src={aboutHero} alt="About Core Space Warehousing" className="w-full h-full object-cover scale-105 animate-fade-in-up duration-1000" width={1920} height={800} />
        <div className="absolute inset-0 bg-slate-900/60" />
        <div className="relative z-10 h-full flex items-center px-4 container mx-auto">
          <div className="max-w-3xl animate-fade-in-up text-left">
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">Setting the Standard in Warehousing</h1>
            <p className="text-xl text-gray-200 font-light mb-8 max-w-2xl">We are your dependable partner, delivering flexible and reliable warehouse solutions across Canada.</p>
          </div>
        </div>
      </section>

      {/* Who We Are - Simplified Text Only */}
      <section ref={whoRef} className="py-8 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className={`max-w-4xl mx-auto ${whoVis ? "animate-slide-up" : "opacity-0"}`}>
            <h2 className="text-accent font-bold tracking-widest uppercase text-sm mb-3 text-center md:text-left">Who We Are</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 text-center md:text-left leading-tight">Built on Reliability and Trust</h3>
            <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-6 text-center md:text-left">
              Core Space Warehousing is a trusted warehousing solutions provider serving businesses across Canada. We specialize in offering flexible, reliable, and secure warehouse spaces that adapt to the evolving needs of modern businesses.
            </p>
            <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-10 text-center md:text-left">
              Our mission is simple: provide the right space, at the right time, at the right price. Whether you're a small business looking for temporary storage or a large enterprise requiring dedicated facilities, we are committed to being your dependable partner.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section ref={mvRef} className="py-10 md:py-24 bg-slate-900 text-white relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/20 to-transparent pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className={`text-accent font-bold tracking-widest uppercase text-sm mb-3 ${mvVis ? "animate-slide-down" : "opacity-0"}`}>Our Purpose</h2>
            <h3 className={`text-3xl md:text-5xl font-extrabold ${mvVis ? "animate-slide-down" : "opacity-0"}`}>Mission & Vision</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className={`bg-slate-800/80 backdrop-blur-md p-10 rounded-3xl border border-slate-700 transition-all duration-300 shadow-2xl hover:shadow-[0_0_40px_rgba(59,130,246,0.3)] hover:-translate-y-3 group hover:border-blue-500/50 ${mvVis ? "animate-slide-right" : "opacity-0"}`}>
              <div className="w-24 h-24 bg-blue-500/20 rounded-full flex items-center justify-center mb-8 mx-auto ring-8 ring-blue-500/10 group-hover:bg-blue-500/30 group-hover:scale-110 transition-all duration-500">
                <Rocket className="h-14 w-14 text-blue-400 group-hover:text-blue-300 group-hover:animate-bounce" />
              </div>
              <h3 className="text-3xl font-extrabold mb-4 text-center">Our Mission</h3>
              <p className="text-slate-300 text-lg leading-relaxed text-center">
                To provide accessible, flexible, and secure warehouse solutions that empower businesses to operate efficiently and grow without storage constraints. We aim to simplify warehousing by offering transparent pricing, easy onboarding, and dedicated support for every client.
              </p>
            </div>
            <div className={`bg-slate-800/80 backdrop-blur-md p-10 rounded-3xl border border-slate-700 transition-all duration-300 shadow-2xl hover:shadow-[0_0_40px_rgba(245,158,11,0.3)] hover:-translate-y-3 group hover:border-amber-500/50 ${mvVis ? "animate-slide-left" : "opacity-0"}`}>
              <div className="w-24 h-24 bg-amber-500/20 rounded-full flex items-center justify-center mb-8 mx-auto ring-8 ring-amber-500/10 group-hover:bg-amber-500/30 group-hover:scale-110 transition-all duration-500">
                <Telescope className="h-14 w-14 text-amber-400 group-hover:text-amber-300 group-hover:animate-pulse" />
              </div>
              <h3 className="text-3xl font-extrabold mb-4 text-center">Our Vision</h3>
              <p className="text-slate-300 text-lg leading-relaxed text-center">
                To become Canada's most trusted and preferred warehousing partner by continuously innovating our services, expanding our facility network, and maintaining the highest standards of quality, security, and customer satisfaction in every warehouse we operate.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer Highlights */}
      <section ref={offerRef} className="py-10 md:py-24 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-accent font-bold tracking-widest uppercase text-sm mb-3">Capabilities</h2>
            <h3 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6">What We Bring to the Table</h3>
            <p className="text-slate-600 text-lg mb-8">An end-to-end suite of warehousing options designed for versatility.</p>
            <Link to="/services" className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 text-white rounded-xl font-bold hover:bg-primary hover:shadow-lg transition-all hover:-translate-y-1">
              View Services <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {offers.map((item, i) => (
              <div key={i} className={`flex items-start gap-4 bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:border-primary/40 transition-all duration-300 hover:-translate-y-2 cursor-pointer group ${offerVis ? "animate-fade-in-up" : "opacity-0"}`} style={{ animationDelay: `${i * 100}ms` }}>
                <div className="bg-primary/10 p-2 rounded-xl text-primary shrink-0 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <CheckCircle2 className="h-6 w-6" />
                </div>
                <span className="text-slate-800 font-bold text-lg pt-1 group-hover:text-primary transition-colors duration-300">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Serve - Minimalist Callout */}
      <section ref={serveRef} className="py-10 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className={`text-accent font-bold tracking-widest uppercase text-sm mb-3 ${serveVis ? "animate-slide-down" : "opacity-0"}`}>Sectors</h2>
            <h3 className={`text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 ${serveVis ? "animate-slide-down" : "opacity-0"}`}>Supporting Diverse Industries</h3>
            <p className={`text-slate-600 text-lg leading-relaxed ${serveVis ? "animate-slide-up" : "opacity-0"}`}>
              We provide specialized warehouse infrastructure tailored to your industry's unique requirements, ensuring your inventory is handled with precision and care.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {industries.map((item, i) => {
              const anims = ["animate-slide-right", "animate-slide-up", "animate-slide-down", "animate-slide-up", "animate-slide-left", "animate-fade-in-up"];
              const animClass = serveVis ? anims[i % 6] : "opacity-0";
              return (
                <div key={i} className={`flex flex-col items-center p-8 bg-white transition-all duration-500 rounded-3xl group border-2 border-transparent hover:border-primary/30 cursor-pointer shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-3 relative overflow-hidden ${animClass}`} style={{ animationDelay: `${i * 100}ms` }}>
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative z-10 w-20 h-20 bg-slate-50 group-hover:bg-white rounded-full shadow-sm flex items-center justify-center mb-5 ring-1 ring-slate-100 group-hover:ring-primary/20 group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-500">
                    <item.icon className="h-8 w-8 text-slate-400 group-hover:text-primary transition-colors duration-500" />
                  </div>
                  <h4 className="relative z-10 text-xl font-extrabold text-center text-slate-800 group-hover:text-primary transition-colors duration-500 mb-3">{item.label}</h4>
                  <p className="relative z-10 text-slate-600 text-sm text-center leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection heading="Ready to optimize your space requirements?" buttonText="Contact Us Today" />
    </div>
  );
};

export default AboutPage;
