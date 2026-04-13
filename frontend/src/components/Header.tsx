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
  const [mobileServeOpen, setMobileServeOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-200 h-20 lg:h-24">
      <div className="container mx-auto flex items-center justify-between px-0 lg:px-2 h-full">
        {/* Logo */}
        <Link to="/" className="flex items-center h-full py-2 mt-3">
          <img
            src="/footerlogo.png"
            alt="Core Space Warehousing"
            className="h-full w-auto object-contain scale-[2] md:scale-[2.3] lg:scale-[2.5] origin-left"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1 mt-1">
          <Link
            to="/"
            className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors hover:bg-gray-100 ${
              isActive("/") ? "text-[#951313]" : "text-gray-700"
            }`}
          >
            Home
          </Link>

          <div
            className="relative group"
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
              <div
                className="absolute top-full left-0 pt-2 w-64"
                onMouseEnter={() => setOpenDropdown("serve")}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <div className="bg-white rounded-lg shadow-lg border border-gray-200 py-2">
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
              </div>
            )}
          </div>

          <div
            className="relative group"
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
              <div
                className="absolute top-full left-0 pt-2 w-64"
                onMouseEnter={() => setOpenDropdown("services")}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <div className="bg-white rounded-lg shadow-lg border border-gray-200 py-2">
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

      {/* Mobile Menu */}
      {mobileOpen && (
        <nav className="lg:hidden bg-white border-t border-gray-200 shadow-2xl absolute top-full left-0 w-full flex flex-col py-2 px-4 overflow-y-auto max-h-[calc(100vh-80px)]">
          <Link
            to="/"
            className={`block py-3 px-4 rounded-md font-medium border-b border-gray-100 ${
              isActive("/") ? "text-[#951313] bg-gray-50" : "text-gray-800"
            }`}
            onClick={() => {
              setMobileOpen(false);
              window.scrollTo(0, 0);
            }}
          >
            Home
          </Link>

          <div className="py-2 border-b border-gray-100">
            <button
              className="w-full flex items-center justify-between py-2 px-4 font-bold text-gray-900 uppercase text-xs tracking-wider"
              onClick={() => setMobileServeOpen(!mobileServeOpen)}
            >
              Who We Serve
              <ChevronDown
                className={`h-4 w-4 transition-transform ${mobileServeOpen ? "rotate-180" : ""}`}
              />
            </button>
            {mobileServeOpen && (
              <div className="pl-4 flex flex-col mt-1">
                {whoWeServeItems.map((item) => (
                  <Link
                    key={item.label}
                    to={item.path}
                    className="block py-2.5 px-4 text-sm font-medium text-gray-600 hover:text-[#951313] hover:bg-gray-50 rounded-md"
                    onClick={() => {
                      setMobileOpen(false);
                      window.scrollTo(0, 0);
                    }}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <div className="py-2 border-b border-gray-100">
            <button
              className="w-full flex items-center justify-between py-2 px-4 font-bold text-gray-900 uppercase text-xs tracking-wider"
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
            >
              Our Services
              <ChevronDown
                className={`h-4 w-4 transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`}
              />
            </button>
            {mobileServicesOpen && (
              <div className="pl-4 flex flex-col mt-1">
                {servicesItems.map((item) => (
                  <Link
                    key={item.label}
                    to={item.path}
                    className="block py-2.5 px-4 text-sm font-medium text-gray-600 hover:text-[#951313] hover:bg-gray-50 rounded-md"
                    onClick={() => {
                      setMobileOpen(false);
                      window.scrollTo(0, 0);
                    }}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            to="/about"
            className={`block py-3 px-4 rounded-md font-medium border-b border-gray-100 ${
              isActive("/about") ? "text-[#951313] bg-gray-50" : "text-gray-800"
            }`}
            onClick={() => {
              setMobileOpen(false);
              window.scrollTo(0, 0);
            }}
          >
            About
          </Link>

          <Link
            to="/get-a-quote"
            className="mt-6 mb-4 mx-2 px-4 py-3 bg-[#182448] text-white rounded-md text-center font-bold hover:opacity-90 transition-opacity"
            onClick={() => {
              setMobileOpen(false);
              window.scrollTo(0, 0);
            }}
          >
            Get a Quote
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Header;
