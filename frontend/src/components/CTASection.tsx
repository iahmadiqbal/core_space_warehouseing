import { Link } from "react-router-dom";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface CTASectionProps {
  heading?: string;
  buttonText?: string;
  buttonLink?: string;
}

const CTASection = ({
  heading = "Looking for Warehouse Space?",
  buttonText = "Get a Quote",
  buttonLink = "/get-a-quote",
}: CTASectionProps) => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="bg-[#951313] py-20">
      <div className={`container mx-auto px-4 text-center ${isVisible ? "animate-slide-up" : "opacity-0"}`}>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">{heading}</h2>
        <Link
          to={buttonLink}
          className="inline-block px-8 py-4 bg-white text-[#951313] rounded-lg text-lg font-semibold hover:opacity-90 transition-opacity shadow-lg"
        >
          {buttonText}
        </Link>
      </div>
    </section>
  );
};

export default CTASection;
