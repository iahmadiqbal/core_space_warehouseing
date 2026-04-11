import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";

const whoWeServeItems = [
  { label: "Retail & E-commerce", path: "/who-we-serve#retail" },
  { label: "Manufacturing & Industrial", path: "/who-we-serve#manufacturing" },
  { label: "Importers & Exporters", path: "/who-we-serve#importers" },
  { label: "Food & Beverage", path: "/who-we-serve#food" },
  { label: "Other Businesses", path: "/who-we-serve#other" },
];

const servicesItems = [
  { label: "Business Warehouses", path: "/services#business-warehouses" },
  { label: "Short-Term Rentals", path: "/services#short-term" },
  { label: "Long-Term Rentals", path: "/services#long-term" },
  { label: "Climate-Controlled Units", path: "/services#climate" },
  { label: "Inventory Management", path: "/services#inventory" },
  { label: "Customized Storage Solutions", path: "/services#custom" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-200 py-1">
      <div className="container mx-auto flex items-center justify-between px-3">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src="/headerlogo.png"
            alt="Core Space Warehousing"
            className="h-28 w-auto"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          <Link
            to="/"
            className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors hover:bg-gray-100 ${
              isActive("/") ? "text-[#951313]" : "text-gray-700"
            }`}
          >
            Home
          </Link>

          <div
            className="relative"
            onMouseEnter={() => setOpenDropdown("serve")}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <button
              className={`flex items-center gap-1 px-3 py-1.5 rounded-md text-sm font-medium transition-colors hover:bg-gray-100 ${
                isActive("/who-we-serve") ? "text-[#951313]" : "text-gray-700"
              }`}
            >
              Who We Serve <ChevronDown className="h-4 w-4" />
            </button>

            {openDropdown === "serve" && (
              <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2">
                {whoWeServeItems.map((item) => (
                  <Link
                    key={item.label}
                    to={item.path}
                    className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#951313]"
                    onClick={() => setOpenDropdown(null)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <div
            className="relative"
            onMouseEnter={() => setOpenDropdown("services")}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <button
              className={`flex items-center gap-1 px-3 py-1.5 rounded-md text-sm font-medium transition-colors hover:bg-gray-100 ${
                isActive("/services") ? "text-[#951313]" : "text-gray-700"
              }`}
            >
              Our Services <ChevronDown className="h-4 w-4" />
            </button>

            {openDropdown === "services" && (
              <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2">
                {servicesItems.map((item) => (
                  <Link
                    key={item.label}
                    to={item.path}
                    className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#951313]"
                    onClick={() => setOpenDropdown(null)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            to="/about"
            className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors hover:bg-gray-100 ${
              isActive("/about") ? "text-[#951313]" : "text-gray-700"
            }`}
          >
            About
          </Link>

          <Link
            to="/get-a-quote"
            className="ml-2 px-4 py-2 bg-[#182448] text-white rounded-md text-sm font-medium hover:opacity-90"
          >
            Get a Quote
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          className="lg:hidden p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>
    </header>
  );
};

export default Header;
