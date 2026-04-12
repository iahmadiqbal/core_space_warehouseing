import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ShoppingCart, Factory, Ship, UtensilsCrossed, Building2, Clock, CalendarDays, Thermometer, Settings, CheckCircle2, ArrowRight, ShieldCheck, Activity, Users, BadgeDollarSign } from "lucide-react";
import CTASection from "@/components/CTASection";

// Hero Images
import hero1 from "@/assets/hero-warehouse-1.jpg";
import hero2 from "@/assets/hero-warehouse-2.jpg";
import hero3 from "@/assets/hero-warehouse-3.jpg";
import aboutHero from "@/assets/about-hero.jpg";

// Industry Images
import retailImg from "@/assets/retail-ecommerce.jpg";
import mfgImg from "@/assets/manufacturing.jpg";
import importImg from "@/assets/import-export.jpg";
import foodImg from "@/assets/food-beverage.jpg";
import otherImg from "@/assets/other-business.jpg";

// Services Images
import shortTermImg from "@/assets/short-term.jpg";
import longTermImg from "@/assets/long-term.jpg";
import climateImg from "@/assets/climate-controlled.jpg";
import customImg from "@/assets/custom-storage.jpg";

const slides = [
  { img: hero1, headline: "Flexible Warehouse Space for Your Business", sub: "Reliable and scalable storage solutions across Canada." },
  { img: hero2, headline: "Secure & Scalable Storage Solutions", sub: "From short-term to long-term, we have the right space for you." },
  { img: hero3, headline: "Your Business, Our Warehouse", sub: "Tailored warehousing solutions for every industry." },
];

const HeroSlideshow = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrent((p) => (p + 1) % slides.length), 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[65vh] min-h-[450px] md:h-[80vh] md:min-h-[600px] overflow-hidden">
      {slides.map((s, i) => (
        <div key={i} className={`absolute inset-0 transition-opacity duration-1000 ${i === current ? "opacity-100" : "opacity-0"}`}>
          <img src={s.img} alt="Warehouse" className="w-full h-full object-cover scale-105 transform transition-transform duration-[10000ms] ease-out" width={1920} height={1080} />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
        </div>
      ))}
      <div className="relative z-10 h-full flex items-center justify-center container mx-auto px-4 text-center">
        <div className="max-w-3xl animate-fade-in-up flex flex-col items-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-[1.1]">{slides[current].headline}</h1>
          <p className="text-lg md:text-2xl text-gray-200 mb-10 font-light max-w-2xl">{slides[current].sub}</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/get-a-quote" className="px-8 py-4 bg-accent text-accent-foreground rounded-lg text-lg font-semibold hover:bg-white hover:text-black transition-all shadow-lg hover:shadow-xl flex items-center gap-2">
              Get a Quote <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-10">
        {slides.map((_, i) => (
          <button key={i} onClick={() => setCurrent(i)} className={`h-2 rounded-full transition-all duration-300 ${i === current ? "w-8 bg-accent" : "w-2 bg-white/50 hover:bg-white/80"}`} />
        ))}
      </div>
    </section>
  );
};

const WhoWeAreSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <section ref={ref} className="py-12 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className={`lg:w-1/2 ${isVisible ? "animate-slide-right" : "opacity-0"}`}>
            <div className="relative">
              <img src={aboutHero} alt="Who We Are" className="rounded-2xl shadow-2xl object-cover h-[500px] w-full" />
              <div className="absolute -bottom-8 -right-8 bg-primary p-8 rounded-2xl shadow-xl hidden md:block border-4 border-white">
                <p className="text-4xl font-extrabold text-white mb-1">10+</p>
                <p className="text-primary-foreground/80 font-medium">Years of Trust</p>
              </div>
            </div>
          </div>
          <div className={`lg:w-1/2 ${isVisible ? "animate-slide-left" : "opacity-0"}`}>
            <h2 className="text-sm font-bold text-accent tracking-widest uppercase mb-3">About Core Space</h2>
            <h3 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">Reliable Warehousing for Modern Businesses</h3>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              Core Space Warehousing provides flexible and reliable warehouse spaces designed to meet the needs of businesses of all sizes. Whether you need short-term storage during peak seasons or long-term dedicated space for your operations, we deliver practical solutions that keep your business running smoothly.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              Serving businesses across Canada, we focus on accessibility, scalability, and dependability — so you can focus on what matters most: growing your business.
            </p>
            <Link to="/about" className="inline-flex items-center gap-2 text-primary font-bold hover:text-accent transition-colors">
              Read Our Story <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

const HowItWorksSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const steps = [
    { num: "1", title: "Submit Request", desc: "Fill out a quick form describing your storage needs, volume, and preferred location." },
    { num: "2", title: "We Contact You", desc: "Our Partner Success Team will review your request and get in touch within 24 hours." },
    { num: "3", title: "Review Options", desc: "Browse a curated list of warehouse spaces and configurations that fit your operational budget." },
    { num: "4", title: "Confirm & Book", desc: "Select your ideal space, complete the transparent paperwork, and move your inventory in." },
  ];
  return (
    <section ref={ref} className="py-12 md:py-24 bg-slate-50 border-y border-slate-200">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h3 className={`text-4xl md:text-5xl font-extrabold text-slate-900 ${isVisible ? "animate-slide-down" : "opacity-0"}`}>How It Works</h3>
          <p className={`text-slate-600 text-lg mt-4 ${isVisible ? "animate-slide-down" : "opacity-0"}`}>We make finding the right warehouse space straightforward and hassle-free.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <div key={i} className={`relative bg-white p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 hover:border-primary/30 transition-all ${isVisible ? "animate-slide-down" : "opacity-0"}`} style={{ animationDelay: `${i * 150}ms` }}>
              <div className="w-14 h-14 rounded-full bg-primary/10 text-primary flex items-center justify-center text-2xl font-black mb-6">
                {s.num}
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">{s.title}</h4>
              <p className="text-slate-600 leading-relaxed">{s.desc}</p>
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
    { icon: ShoppingCart, label: "Retail & E-commerce", img: retailImg, desc: "Dedicated storage and fast fulfillment spaces configured perfectly for high-volume online businesses. We provide robust inventory management integrations and rapid dispatch areas to guarantee your customers receive their orders on time, every time." },
    { icon: Factory, label: "Manufacturing & Industrial", img: mfgImg, desc: "Spacious, heavy-duty warehousing designed for raw materials, large equipment, and finished products. Equipped with reinforced flooring, high vertical clearances, and heavy-load docks to support your intensive daily industrial and production supply chains." },
    { icon: Ship, label: "Importers & Exporters", img: importImg, desc: "Strategic cross-border locations acting as an efficient staging area for container receiving and redistribution. Reduce your port demurrage fees by utilizing our streamlined cross-docking and reliable container processing solutions." },
    { icon: UtensilsCrossed, label: "Food & Beverage", img: foodImg, desc: "Temperature-controlled units adhering to strict hygiene and food safety standards to preserve product quality. From cold storage for perishables to dry storage for packaged goods, we ensure unbroken cold chains from farm to table." },
    { icon: Building2, label: "Other Businesses", img: customImg, desc: "Customizable configurations tailored to healthcare, tech, automotive, and any other specialized sector. Whether it's document archiving or pharmaceutical staging, we adapt the facility footprint directly to your bespoke corporate requirements." },
  ];
  return (
    <section ref={ref} className="py-12 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h3 className={`text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 ${isVisible ? "animate-slide-down" : "opacity-0"}`}>Who We Serve</h3>
          <p className={`text-slate-600 text-lg ${isVisible ? "animate-slide-down" : "opacity-0"}`}>
            Our flexible infrastructure is designed to accommodate the distinct needs of diverse sectors. See what we offer for your industry.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {industries.map((item, i) => (
            <Link to="/who-we-serve" key={i} className={`group flex flex-col bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all border border-slate-100 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`} style={{ animationDelay: `${i * 100}ms` }}>
              
              {/* Image Top Half */}
              <div className="relative h-60 overflow-hidden shrink-0">
                <img src={item.img} alt={item.label} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-primary/20 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Content Bottom Half */}
              <div className="p-8 flex flex-col flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-primary/10 p-2.5 rounded-lg text-primary">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <span className="text-2xl font-bold text-slate-900">{item.label}</span>
                </div>
                <p className="text-slate-600 leading-relaxed mb-6 flex-1">{item.desc}</p>
                
                <div className="mt-auto flex items-center gap-2 text-accent font-bold text-sm tracking-widest uppercase transition-all group-hover:gap-3">
                  Read More <ArrowRight className="h-4 w-4" />
                </div>
              </div>
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
    { img: shortTermImg, icon: Clock, title: "Short-Term Storage", desc: "Flexible storage for temporary or seasonal needs. Scale your footprint up or down dynamically as your inventory fluctuates, without being locked into expensive multi-year contracts." },
    { img: longTermImg, icon: CalendarDays, title: "Long-Term Storage", desc: "Dedicated warehouse space for ongoing business operations and growth. Benefit from favorable extended rates and create a stable, customized distribution base for your expanding enterprise." },
    { img: climateImg, icon: Thermometer, title: "Climate-Controlled", desc: "Precision temperature and humidity controlled environments for sensitive goods. Ideal for pharmaceuticals, cosmetics, and fine art requiring constant 24/7 environmental monitoring." },
    { img: customImg, icon: Settings, title: "Custom Solutions", desc: "Fully customized warehouse configurations tailored to your unique requirements. We can install specialized racking, build in-warehouse office spaces, or establish dedicated staging zones." },
  ];
  return (
    <section ref={ref} className="py-12 md:py-24 bg-slate-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className={`text-accent font-bold tracking-widest uppercase text-sm mb-3 ${isVisible ? "animate-slide-down" : "opacity-0"}`}>What we do</h2>
          <h3 className={`text-3xl md:text-5xl font-extrabold mb-6 ${isVisible ? "animate-slide-down" : "opacity-0"}`}>Our Core Services</h3>
          <Link to="/services" className={`inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 rounded-lg font-medium transition-all ${isVisible ? "animate-slide-up" : "opacity-0"}`}>
            View All Services <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {services.map((s, i) => {
            const anims = ["animate-slide-right", "animate-slide-left", "animate-slide-down", "animate-fade-in-up"];
            const animClass = isVisible ? anims[i % 4] : "opacity-0";
            return (
              <div key={i} className={`group flex flex-col bg-slate-800 rounded-3xl overflow-hidden border border-slate-700 hover:border-accent transition-all hover:shadow-2xl hover:shadow-accent/20 ${animClass}`} style={{ animationDelay: `${i * 100}ms` }}>
                
                {/* Image Top Half */}
                <div className="relative h-64 overflow-hidden shrink-0">
                  <img src={s.img} alt={s.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-transparent transition-all" />
                </div>
                
                {/* Content Bottom Half */}
                <div className="p-8 flex flex-col flex-1">
                  <h4 className="text-2xl font-bold mb-4 text-white">{s.title}</h4>
                  <p className="text-white text-base mb-6 leading-relaxed flex-1">{s.desc}</p>
                  
                  <Link to="/services" className="text-accent text-sm font-bold flex items-center gap-2 uppercase tracking-widest hover:text-white transition-colors mt-auto">
                    Learn More <ArrowRight className="h-4 w-4 group-hover:translate-x-2 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const WhyChooseUsSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const points = [
    {
      title: "Scale Flexibly",
      desc: "Warehouse footprints engineered to accommodate any scale, from dynamic startups to massive logistics enterprises.",
      icon: Activity
    },
    {
      title: "Nationwide Security",
      desc: "Premium, ultra-secure facilities across Canada featuring 24/7 surveillance and strict access controls.",
      icon: ShieldCheck
    },
    {
      title: "Dedicated Support",
      desc: "A dedicated Partner Success Team providing immediate response times and ongoing operational guidance.",
      icon: Users
    },
    {
      title: "Transparent Pricing",
      desc: "Clear pricing structures with no hidden fees, enabling accurate budgeting without unwanted surprises.",
      icon: BadgeDollarSign
    }
  ];

  return (
    <section ref={ref} className="py-12 md:py-24 bg-white overflow-hidden relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Left Content Area */}
          <div className={`lg:w-1/2 ${isVisible ? "animate-slide-right" : "opacity-0"}`}>
            <h2 className="text-accent font-bold tracking-widest uppercase text-sm mb-3">Why Us</h2>
            <h3 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">The Preferred Partner for Your Space</h3>
            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              We provide more than just four walls and a roof. Core Space Warehousing is an extension of your supply chain, designed to give you competitive operational advantages at every step.
            </p>
            <div className="relative h-[280px] rounded-3xl overflow-hidden shadow-2xl group">
              <img src={hero3} alt="Logistics Facility" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
              <div className="absolute inset-0 bg-primary/20 mix-blend-multiply" />
            </div>
          </div>

          {/* Right Bento Grid Area */}
          <div className={`lg:w-1/2 relative mt-12 lg:mt-0 ${isVisible ? "animate-slide-left" : "opacity-0"}`}>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-50/50 rounded-full blur-3xl -z-10 pointer-events-none" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative z-10">
              {points.map((p, i) => (
                <div key={i} className={`bg-white p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-slate-100 hover:border-accent hover:shadow-xl transition-all duration-300 ${i % 2 !== 0 ? 'sm:mt-12' : ''}`}>
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6 shadow-sm">
                    <p.icon className="h-7 w-7" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-3">{p.title}</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

const HomePage = () => {
  return (
    <div className="overflow-hidden">
      <HeroSlideshow />
      <WhoWeAreSection />
      <HowItWorksSection />
      <WhoWeServeSection />
      <ServicesOverviewSection />
      <WhyChooseUsSection />
      <CTASection />
    </div>
  );
};

export default HomePage;
