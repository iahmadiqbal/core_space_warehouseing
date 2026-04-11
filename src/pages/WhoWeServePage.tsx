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

const sections = [
  {
    id: "retail",
    title: "Retail & E-commerce",
    image: retailImg,
    content: "In the fast-paced world of retail and e-commerce, having reliable warehouse space is essential. Core Space Warehousing provides dedicated storage facilities designed to support online stores, inventory management, and order fulfillment operations. Our spaces are equipped to handle high-volume inventory with easy access for quick turnaround times. Whether you're a small online boutique or a large-scale e-commerce operation, our flexible warehouse solutions scale with your business. We understand the seasonal demands of retail and offer both short-term and long-term options to keep your supply chain running smoothly. From receiving shipments to organizing stock and preparing orders for dispatch, our warehouse spaces are designed to optimize your fulfillment workflow. Partner with us and focus on growing your sales while we take care of your storage needs."
  },
  {
    id: "manufacturing",
    title: "Manufacturing & Industrial",
    image: manufacturingImg,
    content: "Manufacturing and industrial businesses require robust storage solutions for raw materials, work-in-progress components, and finished products. Core Space Warehousing offers spacious, secure warehouse facilities that can accommodate heavy equipment, bulk materials, and large inventory volumes. Our warehouses feature high ceilings, wide loading docks, and reinforced flooring to handle the demands of industrial storage. We provide flexible lease terms that adapt to your production cycles, whether you need additional space during peak manufacturing periods or a permanent storage solution. Our facilities are strategically located for easy transportation access, reducing logistics costs and delivery times. With 24/7 security and climate-controlled options available, your valuable materials and products are always protected. Let us handle your storage so you can focus on manufacturing excellence."
  },
  {
    id: "importers",
    title: "Importers & Exporters",
    image: importExportImg,
    content: "For businesses involved in international trade, having a reliable warehousing partner is critical. Core Space Warehousing provides strategic warehouse locations ideal for importers and exporters who need temporary or long-term storage for cross-border goods. Our facilities serve as an efficient staging area where your imported goods can be received, inspected, sorted, and redistributed. We understand the complexities of import/export logistics and offer flexible storage solutions that accommodate varying shipment sizes and schedules. Our warehouses are designed to handle diverse cargo types, from containerized goods to palletized shipments. With our streamlined receiving process and inventory tracking capabilities, you can maintain full visibility of your stock at all times. Reduce port congestion fees and demurrage charges by moving your goods to our secure warehouse facilities."
  },
  {
    id: "food",
    title: "Food & Beverage",
    image: foodImg,
    content: "The food and beverage industry has unique storage requirements that demand specialized warehouse solutions. Core Space Warehousing offers both temperature-controlled and regular warehouse facilities designed specifically for food products, beverages, and related supplies. Our climate-controlled units maintain optimal temperature and humidity levels to preserve product quality and meet health and safety regulations. Whether you need cold storage for perishable goods or dry storage for packaged products, we have the right solution for your business. Our facilities adhere to strict hygiene standards and are regularly inspected to ensure compliance with food safety protocols. We offer flexible storage terms to accommodate seasonal inventory fluctuations common in the food and beverage industry. From farm-to-table distribution to large-scale food manufacturing, our warehouse spaces support your entire supply chain."
  },
  {
    id: "other",
    title: "Other Businesses",
    image: otherImg,
    content: "No matter what industry you operate in, Core Space Warehousing has the flexible storage solutions to meet your needs. From healthcare and pharmaceuticals to technology, automotive, construction, and beyond — our warehouse facilities are designed to accommodate any business type. We understand that every business has unique storage requirements, which is why we offer customizable warehouse configurations that can be tailored to your specific needs. Whether you need document storage, equipment housing, seasonal inventory management, or overflow storage during busy periods, we have the space and infrastructure to support your operations. Our team works closely with each client to understand their specific requirements and recommend the most suitable warehouse solution. With competitive pricing, flexible lease terms, and a commitment to excellent customer service, Core Space Warehousing is your trusted storage partner."
  },
];

const SectionBlock = ({ section, index }: { section: typeof sections[0]; index: number }) => {
  const { ref, isVisible } = useScrollAnimation();
  const isEven = index % 2 === 0;

  return (
    <section ref={ref} id={section.id} className={`py-20 ${index % 2 === 0 ? "bg-background" : "bg-section-alt"}`}>
      <div className="container mx-auto px-4">
        <div className={`flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} gap-10 items-center`}>
          <div className={`lg:w-1/2 ${isVisible ? (isEven ? "animate-slide-right" : "animate-slide-left") : "opacity-0"}`}>
            <img src={section.image} alt={section.title} className="rounded-xl shadow-lg w-full object-cover h-[350px]" loading="lazy" width={800} height={600} />
          </div>
          <div className={`lg:w-1/2 ${isVisible ? (isEven ? "animate-slide-left" : "animate-slide-right") : "opacity-0"}`}>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">{section.title}</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">{section.content}</p>
            <Link to="/get-a-quote" className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity">
              View Details
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
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, [location.hash]);

  const { ref: introRef, isVisible: introVisible } = useScrollAnimation();

  return (
    <>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[350px] overflow-hidden">
        <img src={hero1} alt="Warehouse" className="w-full h-full object-cover" width={1920} height={800} />
        <div className="absolute inset-0 bg-hero-overlay/60" />
        <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
          <div className="animate-fade-in-up">
            <h1 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-4">Who We Serve</h1>
            <p className="text-lg text-primary-foreground/80">Flexible warehouse solutions for diverse business needs</p>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section ref={introRef} className="py-16 bg-background">
        <div className={`container mx-auto px-4 max-w-3xl text-center ${introVisible ? "animate-slide-up" : "opacity-0"}`}>
          <p className="text-muted-foreground text-lg leading-relaxed">
            No matter your industry, we provide space that works for your business. From retail to manufacturing, food storage to international trade — Core Space Warehousing serves them all.
          </p>
        </div>
      </section>

      {sections.map((s, i) => (
        <SectionBlock key={s.id} section={s} index={i} />
      ))}

      <CTASection heading="Looking for the right warehouse for your business?" buttonText="Get in Touch" />
    </>
  );
};

export default WhoWeServePage;
