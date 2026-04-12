import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { CheckCircle2, ShoppingCart, Factory, Ship, UtensilsCrossed, Building2, Eye, Target, ArrowRight } from "lucide-react";
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
    { icon: ShoppingCart, label: "Retail & E-commerce" },
    { icon: Factory, label: "Manufacturing & Industrial" },
    { icon: Ship, label: "Importers & Exporters" },
    { icon: UtensilsCrossed, label: "Food & Beverage" },
    { icon: Building2, label: "Other Businesses" },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="relative h-[65vh] min-h-[500px] overflow-hidden">
        <img src={aboutHero} alt="About Core Space Warehousing" className="w-full h-full object-cover scale-105 animate-fade-in-up duration-1000" width={1920} height={800} />
        <div className="absolute inset-0 bg-slate-900/60" />
        <div className="relative z-10 h-full flex items-center px-4 container mx-auto">
          <div className="max-w-3xl animate-fade-in-up text-left">
            <span className="inline-block py-1 px-3 rounded-full bg-accent/20 text-accent font-semibold text-sm mb-4 border border-accent/20 tracking-wider uppercase backdrop-blur-sm">Our Story</span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">Setting the Standard in Warehousing</h1>
            <p className="text-xl text-gray-200 font-light mb-8 max-w-2xl">We are your dependable partner, delivering flexible and reliable warehouse solutions across Canada.</p>
          </div>
        </div>
      </section>

      {/* Who We Are - Two Columns */}
      <section ref={whoRef} className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className={`lg:w-1/2 ${whoVis ? "animate-slide-right" : "opacity-0"}`}>
              <div className="grid grid-cols-2 gap-4">
                <img src={businessImg} alt="Warehouse" className="rounded-2xl shadow-xl w-full h-[300px] object-cover" />
                <img src={hero3} alt="Warehouse operations" className="rounded-2xl shadow-xl w-full h-[300px] object-cover mt-8" />
              </div>
            </div>
            <div className={`lg:w-1/2 ${whoVis ? "animate-slide-left" : "opacity-0"}`}>
              <h2 className="text-accent font-bold tracking-widest uppercase text-sm mb-3">Who We Are</h2>
              <h3 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6">Built on Reliability and Trust</h3>
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                Core Space Warehousing is a trusted warehousing solutions provider serving businesses across Canada. We specialize in offering flexible, reliable, and secure warehouse spaces that adapt to the evolving needs of modern businesses.
              </p>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                Our mission is simple: provide the right space, at the right time, at the right price. Whether you're a small business looking for temporary storage or a large enterprise requiring dedicated facilities, we are committed to being your dependable partner.
              </p>
              <div className="flex gap-4">
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 flex-1 text-center">
                  <p className="text-3xl font-extrabold text-primary mb-1">5M+</p>
                  <p className="text-slate-500 text-sm font-medium">Sq. Ft. Managed</p>
                </div>
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 flex-1 text-center">
                  <p className="text-3xl font-extrabold text-primary mb-1">200+</p>
                  <p className="text-slate-500 text-sm font-medium">B2B Clients</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section ref={mvRef} className="py-24 bg-slate-900 text-white relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/20 to-transparent pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className={`text-accent font-bold tracking-widest uppercase text-sm mb-3 ${mvVis ? "animate-slide-down" : "opacity-0"}`}>Our Purpose</h2>
            <h3 className={`text-3xl md:text-5xl font-extrabold ${mvVis ? "animate-slide-down" : "opacity-0"}`}>Mission & Vision</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className={`bg-slate-800/80 backdrop-blur-md p-10 rounded-3xl border border-slate-700 hover:border-primary transition-colors ${mvVis ? "animate-slide-right" : "opacity-0"}`}>
              <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mb-6">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-3xl font-bold mb-4">Our Mission</h3>
              <p className="text-slate-400 text-lg leading-relaxed">
                To provide accessible, flexible, and secure warehouse solutions that empower businesses to operate efficiently and grow without storage constraints. We aim to simplify warehousing by offering transparent pricing, easy onboarding, and dedicated support for every client.
              </p>
            </div>
            <div className={`bg-slate-800/80 backdrop-blur-md p-10 rounded-3xl border border-slate-700 hover:border-accent transition-colors ${mvVis ? "animate-slide-left" : "opacity-0"}`}>
              <div className="w-16 h-16 bg-accent/20 rounded-2xl flex items-center justify-center mb-6">
                <Eye className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-3xl font-bold mb-4">Our Vision</h3>
              <p className="text-slate-400 text-lg leading-relaxed">
                To become Canada's most trusted and preferred warehousing partner by continuously innovating our services, expanding our facility network, and maintaining the highest standards of quality, security, and customer satisfaction in every warehouse we operate.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer Highlights */}
      <section ref={offerRef} className="py-24 bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className={`lg:w-1/3 ${offerVis ? "animate-slide-right" : "opacity-0"}`}>
              <h2 className="text-accent font-bold tracking-widest uppercase text-sm mb-3">Capabilities</h2>
              <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">What We Bring to the Table</h3>
              <p className="text-slate-600 mb-8">An end-to-end suite of warehousing options designed for versatility.</p>
              <Link to="/services" className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-lg font-bold hover:bg-primary transition-colors">
                View Services <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className={`lg:w-2/3 ${offerVis ? "animate-slide-left" : "opacity-0"}`}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {offers.map((item, i) => (
                  <div key={i} className="flex items-center gap-4 bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                    <div className="p-3 bg-primary/10 rounded-lg text-primary">
                      <CheckCircle2 className="h-6 w-6" />
                    </div>
                    <span className="text-slate-800 font-bold text-lg">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Serve - Minimalist Callout */}
      <section ref={serveRef} className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className={`text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 ${serveVis ? "animate-slide-down" : "opacity-0"}`}>Supporting Diverse Industries</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-5xl mx-auto">
            {industries.map((item, i) => (
              <div key={i} className={`flex flex-col items-center justify-center p-8 bg-slate-50 hover:bg-primary hover:text-white transition-all duration-300 rounded-2xl group border border-slate-100 cursor-pointer ${serveVis ? "animate-fade-in-up" : "opacity-0"}`} style={{ animationDelay: `${i * 100}ms` }}>
                <item.icon className="h-10 w-10 text-primary group-hover:text-white mb-4 transition-colors" />
                <span className="text-sm font-bold text-center">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection heading="Ready to optimize your space requirements?" buttonText="Contact Us Today" />
    </div>
  );
};

export default AboutPage;
