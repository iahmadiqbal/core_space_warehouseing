import { Link } from "react-router-dom";
import { Facebook, Twitter, Linkedin, Instagram, Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & About */}
          <div>
            <img src={logo} alt="Core Space Warehousing" className="h-12 w-auto mb-4 brightness-200" />
            <p className="text-sm opacity-80 leading-relaxed">
              Core Space Warehousing provides flexible and reliable warehouse solutions for businesses across Canada.
            </p>
            <div className="flex gap-3 mt-4">
              <a href="#" className="p-2 rounded-full bg-primary/20 hover:bg-primary/40 transition-colors"><Facebook className="h-4 w-4" /></a>
              <a href="#" className="p-2 rounded-full bg-primary/20 hover:bg-primary/40 transition-colors"><Twitter className="h-4 w-4" /></a>
              <a href="#" className="p-2 rounded-full bg-primary/20 hover:bg-primary/40 transition-colors"><Linkedin className="h-4 w-4" /></a>
              <a href="#" className="p-2 rounded-full bg-primary/20 hover:bg-primary/40 transition-colors"><Instagram className="h-4 w-4" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li><Link to="/" className="hover:opacity-100 hover:text-accent transition-colors">Home</Link></li>
              <li><Link to="/who-we-serve" className="hover:opacity-100 hover:text-accent transition-colors">Who We Serve</Link></li>
              <li><Link to="/services" className="hover:opacity-100 hover:text-accent transition-colors">Our Services</Link></li>
              <li><Link to="/about" className="hover:opacity-100 hover:text-accent transition-colors">About</Link></li>
              <li><Link to="/get-a-quote" className="hover:opacity-100 hover:text-accent transition-colors">Get a Quote</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Services</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li><Link to="/services#business-warehouses" className="hover:opacity-100 hover:text-accent transition-colors">Business Warehouses</Link></li>
              <li><Link to="/services#short-term" className="hover:opacity-100 hover:text-accent transition-colors">Short-Term Rentals</Link></li>
              <li><Link to="/services#long-term" className="hover:opacity-100 hover:text-accent transition-colors">Long-Term Rentals</Link></li>
              <li><Link to="/services#climate" className="hover:opacity-100 hover:text-accent transition-colors">Climate-Controlled Units</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm opacity-80">
              <li className="flex items-start gap-2"><MapPin className="h-4 w-4 mt-0.5 shrink-0" /> 123 Warehouse Ave, Toronto, ON, Canada</li>
              <li className="flex items-center gap-2"><Phone className="h-4 w-4 shrink-0" /> +1 (800) 123-4567</li>
              <li className="flex items-center gap-2"><Mail className="h-4 w-4 shrink-0" /> info@corespacewh.com</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-6 text-center text-sm opacity-60">
          © {new Date().getFullYear()} Core Space Warehousing. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
