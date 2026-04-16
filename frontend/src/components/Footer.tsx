import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#FEFCE8] text-gray-800 border-t-2 border-gray-200">
      <div className="container mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4 lg:px-6">
          {/* Logo & About */}
          <div>
            <div className="mb-4">
              <img src="/footerlogo.png" alt="Core Space Warehousing" className="h-20 lg:h-24 w-auto object-contain scale-[2] md:scale-[2.3] lg:scale-[2.5] origin-left -ml-2" />
            </div>
            <p className="text-sm text-gray-700 leading-relaxed">
              Core Space Warehousing provides flexible and reliable warehouse solutions for businesses across Canada.
            </p>
            <div className="flex gap-3 mt-4">
              <a href="https://www.facebook.com/profile.php?id=61573476435817" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-gray-800 hover:bg-gray-900 transition-colors text-white"><Facebook className="h-4 w-4" /></a>
              <a href="https://x.com/Corespace1995" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-gray-800 hover:bg-gray-900 transition-colors text-white"><Twitter className="h-4 w-4" /></a>
              <a href="https://www.instagram.com/corespacewarehousing/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-gray-800 hover:bg-gray-900 transition-colors text-white"><Instagram className="h-4 w-4" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-gray-900">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li><Link to="/" className="hover:text-gray-900 hover:underline transition-all">Home</Link></li>
              <li><Link to="/who-we-serve" className="hover:text-gray-900 hover:underline transition-all">Who We Serve</Link></li>
              <li><Link to="/services" className="hover:text-gray-900 hover:underline transition-all">Our Services</Link></li>
              <li><Link to="/about" className="hover:text-gray-900 hover:underline transition-all">About</Link></li>
              <li><Link to="/get-a-quote" className="hover:text-gray-900 hover:underline transition-all">Get a Quote</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-gray-900">Services</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li><Link to="/services#business-warehouses" className="hover:text-gray-900 hover:underline transition-all">Business Warehouses</Link></li>
              <li><Link to="/services#short-term" className="hover:text-gray-900 hover:underline transition-all">Short-Term Rentals</Link></li>
              <li><Link to="/services#long-term" className="hover:text-gray-900 hover:underline transition-all">Long-Term Rentals</Link></li>
              <li><Link to="/services#climate" className="hover:text-gray-900 hover:underline transition-all">Climate-Controlled Units</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-gray-900">Contact Us</h4>
            <ul className="space-y-3 text-sm text-gray-700">
              <li className="flex items-start gap-2"><MapPin className="h-4 w-4 mt-0.5 shrink-0 text-gray-800" /> 290-3030 3 Avenue NE, Calgary, AB, Canada T2A 6T7</li>
              <li className="flex items-center gap-2"><Phone className="h-4 w-4 shrink-0 text-gray-800" /> <a href="tel:+14038363227" className="hover:text-gray-900 hover:underline transition-all">+1 403-836-3227</a></li>
              <li className="flex items-center gap-2"><Mail className="h-4 w-4 shrink-0 text-gray-800" /> <a href="mailto:info@corespacewarehousing.com" className="hover:text-gray-900 hover:underline transition-all">info@corespacewarehousing.com</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-300 mt-8 pt-6 px-4 lg:px-6">
          <p className="text-sm text-gray-700 text-center">
            © {new Date().getFullYear()} Core Space Warehousing. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
