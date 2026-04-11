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

const sections = [
  {
    id: "business-warehouses",
    title: "Business Warehouses",
    image: businessImg,
    content: "Core Space Warehousing offers business warehouse solutions designed for companies of all sizes — small, medium, and large. Whether you're a startup looking for your first storage space or an established enterprise needing a large distribution hub, we have warehouse options that fit your operational scale. Our business warehouses come with flexible floor plans, high ceilings, loading docks, and secure access systems. We understand that every business has different storage volumes and workflows, so we offer customizable configurations to match your specific requirements. Our facilities are strategically located for easy transportation and logistics access, helping you reduce operational costs. With competitive pricing and flexible lease terms, scaling your warehouse space up or down is hassle-free. Let us be your warehousing partner and provide the foundation your business needs to thrive."
  },
  {
    id: "short-term",
    title: "Short-Term Rentals",
    image: shortTermImg,
    content: "Need warehouse space for a limited period? Core Space Warehousing offers flexible short-term rental options perfect for seasonal demands, project-based storage, or overflow inventory. Our short-term rentals provide all the benefits of a full warehouse facility without the commitment of a long-term lease. Whether you need space for a few weeks or several months, we accommodate your timeline. Our short-term solutions are ideal for businesses experiencing seasonal peaks, companies managing special projects, or organizations in transition. You get access to secure, well-maintained facilities with loading docks, shelving systems, and 24/7 security. The onboarding process is quick and straightforward — submit your requirements, and our team will match you with available space that meets your needs. No hidden fees, no complicated contracts — just the storage space you need, when you need it."
  },
  {
    id: "long-term",
    title: "Long-Term Rentals",
    image: longTermImg,
    content: "For businesses that need consistent, dedicated warehouse space, Core Space Warehousing offers long-term rental solutions that provide stability and cost-effectiveness. Our long-term warehouses serve as an extension of your business operations, giving you a reliable base for inventory management, distribution, and logistics. Long-term tenants benefit from priority access to premium warehouse spaces, dedicated loading docks, and the option to customize their storage layout. We offer competitive rates that become more favorable with extended commitments, helping you budget effectively for your storage needs. Our long-term partnerships are built on trust and reliability — we invest in maintaining our facilities to the highest standards so your goods are always stored safely. Whether you're establishing a new distribution center or expanding your existing operations, our long-term solutions grow with your business."
  },
  {
    id: "climate",
    title: "Climate-Controlled Units",
    image: climateImg,
    content: "Some products require specific environmental conditions to maintain their quality and integrity. Core Space Warehousing provides state-of-the-art climate-controlled storage units that maintain precise temperature and humidity levels. Our climate-controlled facilities are ideal for pharmaceuticals, electronics, fine art, wine, food products, cosmetics, and any goods sensitive to environmental fluctuations. Each unit is equipped with advanced HVAC systems, continuous monitoring sensors, and backup power supplies to ensure consistent conditions around the clock. Our team regularly inspects and maintains these systems to guarantee optimal performance. You'll receive detailed environmental reports and can monitor conditions remotely. Whether you need cold storage, temperature-maintained rooms, or humidity-controlled environments, we have the infrastructure to protect your valuable inventory."
  },
  {
    id: "inventory",
    title: "Inventory Management",
    image: inventoryImg,
    content: "Beyond just providing warehouse space, Core Space Warehousing offers optional inventory management services to help you keep track of your stored goods. Our inventory management solutions include receiving and cataloging shipments, organizing stock by category or SKU, tracking inventory levels, and generating regular reports. Using modern tracking systems, we ensure you have real-time visibility into your inventory at all times. This service is perfect for businesses that want to streamline their warehousing operations without investing in their own inventory management infrastructure. Our experienced warehouse staff handles the day-to-day management of your stock, allowing you to focus on core business activities. From barcode scanning to digital inventory records, we bring efficiency and accuracy to your warehouse operations."
  },
  {
    id: "custom",
    title: "Customized Storage Solutions",
    image: customImg,
    content: "Every business has unique storage needs, and sometimes standard warehouse configurations don't fit the bill. Core Space Warehousing offers customized storage solutions tailored to your specific requirements. Whether you need specialized racking systems, partitioned areas, clean room environments, or unique loading configurations, our team works with you to design and implement the perfect warehouse setup. We start by understanding your business operations, product types, volume requirements, and workflow patterns. Based on this assessment, we create a customized warehouse plan that maximizes efficiency and minimizes costs. Our customization options include adjustable shelving heights, dedicated staging areas, office spaces within the warehouse, and specialized handling equipment. No request is too unique — if you need it, we can build it."
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

const ServicesPage = () => {
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
      <section className="relative h-[50vh] min-h-[350px] overflow-hidden">
        <img src={hero2} alt="Warehouse Services" className="w-full h-full object-cover" width={1920} height={800} />
        <div className="absolute inset-0 bg-hero-overlay/60" />
        <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
          <div className="animate-fade-in-up">
            <h1 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-4">Our Services</h1>
            <p className="text-lg text-primary-foreground/80">Flexible warehouse solutions designed to meet diverse business needs</p>
          </div>
        </div>
      </section>

      <section ref={introRef} className="py-16 bg-background">
        <div className={`container mx-auto px-4 max-w-3xl text-center ${introVisible ? "animate-slide-up" : "opacity-0"}`}>
          <p className="text-muted-foreground text-lg leading-relaxed">
            We provide adaptable warehouse solutions tailored to your operational requirements. From short-term flexibility to long-term stability, climate-controlled environments to fully customized setups — explore our comprehensive range of services.
          </p>
        </div>
      </section>

      {sections.map((s, i) => (
        <SectionBlock key={s.id} section={s} index={i} />
      ))}

      <CTASection heading="Looking for the right storage solution for your business?" buttonText="Get in Touch" />
    </>
  );
};

export default ServicesPage;
