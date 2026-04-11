import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Home, Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

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
    <header className="sticky top-0 z-50 bg-card shadow-sm border-b border-border">
      <div className="container mx-auto flex items-center justify-between py-3 px-4">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Core Space Warehousing" className="h-10 w-auto" />
          <Home className="h-5 w-5 text-primary" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {/* Who We Serve Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setOpenDropdown("serve")}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <button className={`flex items-center gap-1 px-4 py-2 rounded-md text-sm font-medium transition-colors hover:bg-secondary ${isActive("/who-we-serve") ? "text-primary" : "text-foreground"}`}>
              Who We Serve <ChevronDown className="h-4 w-4" />
            </button>
            {openDropdown === "serve" && (
              <div className="absolute top-full left-0 mt-1 w-64 bg-card rounded-lg shadow-lg border border-border py-2 animate-fade-in-up">
                {whoWeServeItems.map((item) => (
                  <Link
                    key={item.label}
                    to={item.path}
                    className="block px-4 py-2.5 text-sm text-foreground hover:bg-secondary hover:text-primary transition-colors"
                    onClick={() => setOpenDropdown(null)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Our Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setOpenDropdown("services")}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <button className={`flex items-center gap-1 px-4 py-2 rounded-md text-sm font-medium transition-colors hover:bg-secondary ${isActive("/services") ? "text-primary" : "text-foreground"}`}>
              Our Services <ChevronDown className="h-4 w-4" />
            </button>
            {openDropdown === "services" && (
              <div className="absolute top-full left-0 mt-1 w-64 bg-card rounded-lg shadow-lg border border-border py-2 animate-fade-in-up">
                {servicesItems.map((item) => (
                  <Link
                    key={item.label}
                    to={item.path}
                    className="block px-4 py-2.5 text-sm text-foreground hover:bg-secondary hover:text-primary transition-colors"
                    onClick={() => setOpenDropdown(null)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link to="/about" className={`px-4 py-2 rounded-md text-sm font-medium transition-colors hover:bg-secondary ${isActive("/about") ? "text-primary" : "text-foreground"}`}>
            About
          </Link>

          <Link to="/get-a-quote" className="ml-2 px-5 py-2.5 bg-primary text-primary-foreground rounded-md text-sm font-medium hover:opacity-90 transition-opacity">
            Get a Quote
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button className="lg:hidden p-2" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="lg:hidden bg-card border-t border-border animate-slide-down">
          <div className="px-4 py-3 space-y-1">
            <div>
              <button onClick={() => setOpenDropdown(openDropdown === "m-serve" ? null : "m-serve")} className="flex items-center justify-between w-full py-2 text-sm font-medium text-foreground">
                Who We Serve <ChevronDown className={`h-4 w-4 transition-transform ${openDropdown === "m-serve" ? "rotate-180" : ""}`} />
              </button>
              {openDropdown === "m-serve" && whoWeServeItems.map((item) => (
                <Link key={item.label} to={item.path} className="block pl-4 py-2 text-sm text-muted-foreground hover:text-primary" onClick={() => setMobileOpen(false)}>
                  {item.label}
                </Link>
              ))}
            </div>
            <div>
              <button onClick={() => setOpenDropdown(openDropdown === "m-services" ? null : "m-services")} className="flex items-center justify-between w-full py-2 text-sm font-medium text-foreground">
                Our Services <ChevronDown className={`h-4 w-4 transition-transform ${openDropdown === "m-services" ? "rotate-180" : ""}`} />
              </button>
              {openDropdown === "m-services" && servicesItems.map((item) => (
                <Link key={item.label} to={item.path} className="block pl-4 py-2 text-sm text-muted-foreground hover:text-primary" onClick={() => setMobileOpen(false)}>
                  {item.label}
                </Link>
              ))}
            </div>
            <Link to="/about" className="block py-2 text-sm font-medium text-foreground hover:text-primary" onClick={() => setMobileOpen(false)}>About</Link>
            <Link to="/get-a-quote" className="block mt-2 text-center py-2.5 bg-primary text-primary-foreground rounded-md text-sm font-medium" onClick={() => setMobileOpen(false)}>Get a Quote</Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
