import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import CTASection from "@/components/CTASection";
import hero1 from "@/assets/hero-warehouse-1.jpg";
import retailImg from "@/assets/retail-ecommerce.jpg";
import manufacturingImg from "@/assets/manufacturing.jpg";
import importExportImg from "@/assets/import-export.jpg";
import foodImg from "@/assets/food-beverage.jpg";
import otherImg from "@/assets/other-business.jpg";
import { Factory, ShoppingCart, Ship, UtensilsCrossed, Building2, ArrowRight, CheckCircle2 } from "lucide-react";

// @ts-ignore
const sections = [
  {
    id: "retail",
    title: "Retail & E-commerce",
    icon: ShoppingCart,
    image: retailImg,
    content: "In the fast-paced world of retail and e-commerce, having reliable warehouse space is essential. Core Space Warehousing provides dedicated storage facilities designed to support online stores, inventory management, and order fulfillment operations. Our spaces are equipped to handle high-volume inventory with easy access for quick turnaround times.",
    highlights: ["High-volume inventory scaling", "Seasonal storage options", "Order fulfillment support"]
  },
  {
    id: "manufacturing",
    title: "Manufacturing & Industrial",
    icon: Factory,
    image: manufacturingImg,
    content: "Manufacturing and industrial businesses require robust storage solutions for raw materials, work-in-progress components, and finished products. Core Space Warehousing offers spacious, secure warehouse facilities that can accommodate heavy equipment, bulk materials, and large inventory volumes.",
    highlights: ["High ceilings & wide docks", "Reinforced flooring", "Flexible production-cycle terms"]
  },
  {
    id: "importers",
    title: "Importers & Exporters",
    icon: Ship,
    image: importExportImg,
    content: "For businesses involved in international trade, having a reliable warehousing partner is critical. Core Space Warehousing provides strategic warehouse locations ideal for importers and exporters who need temporary or long-term storage for cross-border goods. Our facilities serve as an efficient staging area.",
    highlights: ["Container staging areas", "Logistics-friendly locations", "Demurrage cost reduction"]
  },
  {
    id: "food",
    title: "Food & Beverage",
    icon: UtensilsCrossed,
    image: foodImg,
    content: "The food and beverage industry has unique storage requirements that demand specialized warehouse solutions. Core Space Warehousing offers both temperature-controlled and regular warehouse facilities designed specifically for food products, beverages, and related supplies.",
    highlights: ["Temperature-controlled units", "Strict hygiene compliance", "Farm-to-table supply support"]
  },
  {
    id: "other",
    title: "Other Businesses",
    icon: Building2,
    image: otherImg,
    content: "No matter what industry you operate in, Core Space Warehousing has the flexible storage solutions to meet your needs. From healthcare and pharmaceuticals to technology, automotive, construction, and beyond — our warehouse facilities are designed to accommodate any business type.",
    highlights: ["Customizable configurations", "Healthcare & pharma prep", "Secure document storage"]
  },
];

const SectionBlock = ({ section, index }: { section: typeof sections[0]; index: number }) => {
  const { ref, isVisible } = useScrollAnimation();
  const isEven = index % 2 === 0;

  return (
    <section ref={ref} id={section.id} className={`py-12 md:py-24 relative ${index % 2 === 0 ? "bg-white" : "bg-slate-50 border-y border-slate-200"}`}>
      <div className="container mx-auto px-4">
        <div className={`flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} gap-12 lg:gap-20 items-center`}>
          <div className={`lg:w-1/2 w-full ${isVisible ? (isEven ? "animate-slide-right" : "animate-slide-left") : "opacity-0"}`}>
            <div className="relative group p-4">
              <div className="absolute inset-0 bg-primary/10 rounded-3xl transform translate-x-4 translate-y-4 group-hover:translate-x-6 group-hover:translate-y-6 transition-transform duration-500" />
              <img src={section.image} alt={section.title} className="relative rounded-3xl shadow-lg w-full object-cover h-[450px] z-10" loading="lazy" />
              <div className="absolute -top-4 -left-4 z-20 bg-white p-4 rounded-xl shadow-xl border border-slate-100">
                <section.icon className="h-10 w-10 text-accent" />
              </div>
            </div>
          </div>
          <div className={`lg:w-1/2 w-full ${isVisible ? (isEven ? "animate-slide-left" : "animate-slide-right") : "opacity-0"}`}>
            <h3 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6">{section.title}</h3>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">{section.content}</p>
            
            <div className="bg-slate-100/50 rounded-2xl p-6 mb-8 border border-slate-200">
              <h4 className="font-bold text-slate-900 mb-4">Key Benefits</h4>
              <ul className="space-y-3">
                {section.highlights.map((h, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-700">
                    <CheckCircle2 className="h-5 w-5 text-accent shrink-0" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Link to="/get-a-quote" className="inline-flex items-center gap-2 text-primary font-bold hover:text-accent transition-colors uppercase tracking-wide">
              Request a Quote <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

const WhoWeServePage = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const el = document.querySelector(location.hash);
        if (el) {
          const y = el.getBoundingClientRect().top + window.scrollY - 120;
          window.scrollTo({ top: y, behavior: "smooth" });
        }
      }, 100);
    }
  }, [location.hash]);

  const { ref: introRef, isVisible: introVisible } = useScrollAnimation();

  return (
    <div className="overflow-hidden">
      <section className="relative h-[50vh] min-h-[350px] md:h-[60vh] md:min-h-[400px] overflow-hidden">
        <img src={hero1} alt="Warehouse" className="w-full h-full object-cover scale-105 transform animate-fade-in-up duration-1000" width={1920} height={800} />
        <div className="absolute inset-0 bg-primary/80 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-80" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 container mx-auto">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">Explore Who We Serve</h1>
            <p className="text-xl md:text-2xl text-gray-200 font-light max-w-2xl mx-auto mb-8">Flexible warehouse solutions for diverse business needs</p>
            <a 
              href="#retail" 
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-white rounded-lg font-bold hover:bg-primary transition-all shadow-lg hover:shadow-xl"
            >
              View Industries <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      <section ref={introRef} className="py-12 md:py-24 bg-white">
        <div className={`container mx-auto px-4 max-w-4xl text-center ${introVisible ? "animate-slide-up" : "opacity-0"}`}>
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Designed For Every Sector</h2>
          <p className="text-slate-600 text-xl font-light leading-relaxed">
            No matter your industry, we provide space that works for your business. From retail to manufacturing, food storage to international trade — Core Space Warehousing serves them all with uncompromised quality.
          </p>
        </div>
      </section>

      <div>
        {sections.map((s, i) => (
          <SectionBlock key={s.id} section={s} index={i} />
        ))}
      </div>

      <CTASection heading="Looking for the right warehouse for your business?" buttonText="Get in Touch" />
    </div>
  );
};

export default WhoWeServePage;
