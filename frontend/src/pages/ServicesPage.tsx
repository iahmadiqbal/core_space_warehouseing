import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import CTASection from "@/components/CTASection";
import hero2 from "@/assets/hero-warehouse-2.jpg";
import businessImg from "@/assets/business-warehouse.jpg";
import shortTermImg from "@/assets/short-term.jpg";
import longTermImg from "@/assets/long-term.jpg";
import climateImg from "@/assets/climate-controlled.jpg";
import inventoryImg from "@/assets/inventory-management.jpg";
import customImg from "@/assets/custom-storage.jpg";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const sections = [
  {
    id: "business-warehouses",
    title: "Business Warehouses",
    subtitle: "Scalable Hubs for Enterprises",
    image: businessImg,
    content: "Core Space Warehousing offers business warehouse solutions designed for companies of all sizes. Whether you're a startup looking for your first storage space or an established enterprise needing a large distribution hub, we have options that fit perfectly.",
    bullets: ["Flexible floor plans & high ceilings", "Dedicated loading docks", "Secure access systems", "Strategically located for logistics"]
  },
  {
    id: "short-term",
    title: "Short-Term Rentals",
    subtitle: "Agiity when you need it",
    image: shortTermImg,
    content: "Need warehouse space for a limited period? We offer flexible short-term rental options perfect for seasonal demands, project-based storage, or overflow inventory. Get all the benefits of a full warehouse without the long-term commitment.",
    bullets: ["No complicated contracts", "Quick onboarding process", "Perfect for seasonal peaks", "Fully secure facilities"]
  },
  {
    id: "long-term",
    title: "Long-Term Rentals",
    subtitle: "Your stable base of operations",
    image: longTermImg,
    content: "For businesses that need consistent, dedicated warehouse space, our long-term solutions provide stability and cost-effectiveness. Act as an extension of your operations, giving you a reliable base for inventory management and distribution.",
    bullets: ["Competitive extended rates", "Priority premium access", "Layout customization options", "Unmatched reliability"]
  },
  {
    id: "climate",
    title: "Climate-Controlled Units",
    subtitle: "Precision environments",
    image: climateImg,
    content: "Protect sensitive goods with our state-of-the-art climate-controlled units. Ideal for pharmaceuticals, electronics, fine art, wine, and cosmetics. Each unit maintains precise temperature and humidity levels around the clock.",
    bullets: ["Advanced HVAC systems", "Continuous sensor monitoring", "Backup power supplies", "Detailed environmental reports"]
  },
  {
    id: "inventory",
    title: "Inventory Management",
    subtitle: "End-to-end stock control",
    image: inventoryImg,
    content: "Beyond space, we offer comprehensive inventory management. Let our experienced staff handle receiving, cataloging, tracking, and reporting. Streamline your operations without heavy infrastructure investments.",
    bullets: ["Real-time digital visibility", "Barcode scanning systems", "Regular stock reporting", "SKU-based organization"]
  },
  {
    id: "custom",
    title: "Customized Storage",
    subtitle: "Built around your specifications",
    image: customImg,
    content: "Every business is unique. We design and implement specialized setups including racking systems, partitioned areas, clean rooms, and unique loading configurations to maximize efficiency and minimize costs.",
    bullets: ["Adjustable shelving heights", "Dedicated staging areas", "Specialized handling equipment", "In-warehouse office spaces"]
  },
];

const SectionBlock = ({ section, index }: { section: typeof sections[0]; index: number }) => {
  const { ref, isVisible } = useScrollAnimation();
  const isEven = index % 2 === 0;

  return (
    <section ref={ref} id={section.id} className={`py-12 md:py-24 relative overflow-hidden scroll-mt-24 ${index % 2 === 0 ? "bg-white" : "bg-slate-50"}`}>
      {/* Decorative background element */}
      <div className={`absolute top-1/2 -translate-y-1/2 ${isEven ? 'right-0 translate-x-1/3' : 'left-0 -translate-x-1/3'} w-96 h-96 bg-primary/5 rounded-full blur-3xl`} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className={`flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} gap-16 items-center`}>
          <div className={`lg:w-1/2 w-full ${isVisible ? (isEven ? "animate-slide-right" : "animate-slide-left") : "opacity-0"}`}>
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-accent/20 to-primary/20 rounded-3xl blur-lg opacity-0 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
              <img src={section.image} alt={section.title} className="relative rounded-2xl shadow-2xl w-full object-cover h-[400px] md:h-[500px] transform transition-transform duration-700 group-hover:scale-[1.02]" loading="lazy" />
            </div>
          </div>
          <div className={`lg:w-1/2 w-full ${isVisible ? (isEven ? "animate-slide-left" : "animate-slide-right") : "opacity-0"}`}>
            <span className="text-accent font-bold tracking-widest uppercase text-sm mb-3 block">{section.subtitle}</span>
            <h3 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">{section.title}</h3>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">{section.content}</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {section.bullets.map((bullet, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                  <span className="text-slate-700 font-medium">{bullet}</span>
                </div>
              ))}
            </div>

            <Link to="/get-a-quote" className="group inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-lg font-bold hover:bg-accent transition-all shadow-lg hover:shadow-xl">
              Get Started <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

const ServicesPage = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const el = document.querySelector(location.hash);
        if (el) {
          const headerHeight = 100; // Header height + extra padding
          const y = el.getBoundingClientRect().top + window.scrollY - headerHeight;
          window.scrollTo({ top: y, behavior: "smooth" });
        }
      }, 300);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location.hash, location.pathname]);

  const { ref: introRef, isVisible: introVisible } = useScrollAnimation();

  return (
    <div className="overflow-hidden">
      <section className="relative h-[50vh] min-h-[350px] md:h-[60vh] md:min-h-[400px] overflow-hidden">
        <img src={hero2} alt="Warehouse Services" className="w-full h-full object-cover scale-105 transform animate-fade-in-up duration-1000" width={1920} height={800} />
        <div className="absolute inset-0 bg-gray-900/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 container mx-auto">
          <div className="animate-fade-in-up max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">Explore Our Services</h1>
            <p className="text-xl md:text-2xl text-gray-200 font-light mb-8">Flexible warehouse solutions designed to meet diverse business needs</p>
            <a 
              href="#business-warehouses" 
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-lg font-bold hover:bg-accent transition-all shadow-lg hover:shadow-xl"
            >
              View Services <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      <section ref={introRef} className="py-10 md:py-20 bg-white relative z-20 -mt-10 mx-4 md:mx-auto max-w-5xl rounded-3xl shadow-xl border border-slate-100">
        <div className={`container mx-auto px-8 md:px-16 text-center ${introVisible ? "animate-slide-up" : "opacity-0"}`}>
          <p className="text-slate-600 text-xl md:text-2xl font-light leading-relaxed">
            We provide adaptable warehouse solutions tailored to your operational requirements. From short-term flexibility to long-term stability, climate-controlled environments to fully customized setups — explore our comprehensive range of services.
          </p>
        </div>
      </section>

      <div className="py-10">
        {sections.map((s, i) => (
          <SectionBlock key={s.id} section={s} index={i} />
        ))}
      </div>

      <CTASection heading="Looking for the right storage solution for your business?" buttonText="Get in Touch" />
    </div>
  );
};

export default ServicesPage;
