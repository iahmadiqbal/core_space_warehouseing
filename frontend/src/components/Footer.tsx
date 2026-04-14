import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#182448] text-white border-t-2 border-gray-700">
      <div className="container mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4 lg:px-6">
          {/* Logo & About */}
          <div>
            <div className="mb-4">
              <img src="/footerlogo.png" alt="Core Space Warehousing" className="h-20 lg:h-24 w-auto object-contain scale-[2] md:scale-[2.3] lg:scale-[2.5] origin-left -ml-2" />
            </div>
            <p className="text-sm opacity-90 leading-relaxed">
              Core Space Warehousing provides flexible and reliable warehouse solutions for businesses across Canada.
            </p>
            <div className="flex gap-3 mt-4">
              <a href="https://www.facebook.com/profile.php?id=61573476435817" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"><Facebook className="h-4 w-4" /></a>
              <a href="https://x.com/Corespace1995" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"><Twitter className="h-4 w-4" /></a>
              <a href="https://www.instagram.com/corespacewarehousing/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"><Instagram className="h-4 w-4" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm opacity-90">
              <li><Link to="/" className="hover:opacity-100 hover:underline transition-all">Home</Link></li>
              <li><Link to="/who-we-serve" className="hover:opacity-100 hover:underline transition-all">Who We Serve</Link></li>
              <li><Link to="/services" className="hover:opacity-100 hover:underline transition-all">Our Services</Link></li>
              <li><Link to="/about" className="hover:opacity-100 hover:underline transition-all">About</Link></li>
              <li><Link to="/get-a-quote" className="hover:opacity-100 hover:underline transition-all">Get a Quote</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Services</h4>
            <ul className="space-y-2 text-sm opacity-90">
              <li><Link to="/services#business-warehouses" className="hover:opacity-100 hover:underline transition-all">Business Warehouses</Link></li>
              <li><Link to="/services#short-term" className="hover:opacity-100 hover:underline transition-all">Short-Term Rentals</Link></li>
              <li><Link to="/services#long-term" className="hover:opacity-100 hover:underline transition-all">Long-Term Rentals</Link></li>
              <li><Link to="/services#climate" className="hover:opacity-100 hover:underline transition-all">Climate-Controlled Units</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm opacity-90">
              <li className="flex items-start gap-2"><MapPin className="h-4 w-4 mt-0.5 shrink-0" /> 123 Warehouse Ave, Toronto, ON, Canada</li>
              <li className="flex items-center gap-2"><Phone className="h-4 w-4 shrink-0" /> +1 (800) 123-4567</li>
              <li className="flex items-center gap-2"><Mail className="h-4 w-4 shrink-0" /> info@corespacewh.com</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-6 px-4 lg:px-6">
          <p className="text-sm opacity-80 text-center">
            © {new Date().getFullYear()} Core Space Warehousing. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
