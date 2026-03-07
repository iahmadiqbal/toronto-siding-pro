import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { FaPhone } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const services = [
  { name: "Siding Installation", path: "/services/siding-installation" },
  { name: "Siding Repair", path: "/services/siding-repair" },
  { name: "Residential Siding", path: "/services/residential-siding" },
  { name: "Commercial Siding", path: "/services/commercial-siding" },
];

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services", children: services },
  { name: "Testimonials", path: "/testimonials" },
  { name: "Service Areas", path: "/service-areas" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo and Brand */}
          <Link to="/" className="flex items-center gap-2.5">
            <img src={logo} alt="Toronto Siding" className="h-10 w-auto" />
            <span className="text-xl font-bold text-primary tracking-tight whitespace-nowrap">Toronto Siding</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.name} className="relative group">
                  <button
                    className={`flex items-center gap-1 text-[15px] font-medium transition-colors ${
                      location.pathname.startsWith("/services")
                        ? "text-secondary"
                        : "text-foreground hover:text-secondary"
                    }`}
                  >
                    {link.name}
                    <ChevronDown className="h-4 w-4" />
                  </button>
                  <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="bg-white rounded-lg shadow-lg border border-gray-100 py-2 min-w-[220px]">
                      <Link
                        to="/services"
                        className="block px-4 py-2.5 text-[15px] text-foreground hover:bg-gray-50 hover:text-secondary transition-colors"
                      >
                        All Services
                      </Link>
                      {link.children.map((child) => (
                        <Link
                          key={child.path}
                          to={child.path}
                          className="block px-4 py-2.5 text-[15px] text-foreground hover:bg-gray-50 hover:text-secondary transition-colors"
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-[15px] font-medium transition-colors ${
                    location.pathname === link.path
                      ? "text-secondary"
                      : "text-foreground hover:text-secondary"
                  }`}
                >
                  {link.name}
                </Link>
              )
            )}
          </div>

          {/* Right Side - Phone & CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a href="tel:+16471234567" className="flex items-center gap-2 text-[15px] font-semibold text-foreground">
              <FaPhone className="h-4 w-4" />
              (647) 123-4567
            </a>
            <Button asChild className="bg-secondary text-white hover:bg-amber-dark font-semibold px-6 rounded-md">
              <Link to="/contact">Get Free Quote</Link>
            </Button>
          </div>

          {/* Mobile toggle */}
          <button className="lg:hidden p-2 text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 pb-4">
          <div className="container mx-auto px-4 flex flex-col gap-1 pt-2">
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.name}>
                  <button
                    onClick={() => setServicesOpen(!servicesOpen)}
                    className="w-full flex items-center justify-between px-4 py-3 text-[15px] font-medium text-foreground"
                  >
                    {link.name}
                    <ChevronDown className={`h-4 w-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
                  </button>
                  {servicesOpen && (
                    <div className="pl-4">
                      <Link
                        to="/services"
                        onClick={() => setMobileOpen(false)}
                        className="block px-4 py-2 text-[15px] text-muted-foreground hover:text-secondary font-medium"
                      >
                        All Services
                      </Link>
                      {link.children.map((child) => (
                        <Link
                          key={child.path}
                          to={child.path}
                          onClick={() => setMobileOpen(false)}
                          className="block px-4 py-2 text-[15px] text-muted-foreground hover:text-secondary font-medium"
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setMobileOpen(false)}
                  className="px-4 py-3 text-[15px] font-medium text-foreground hover:text-secondary"
                >
                  {link.name}
                </Link>
              )
            )}
            <div className="px-4 pt-2 flex flex-col gap-3">
              <a href="tel:+16471234567" className="flex items-center gap-2 text-[15px] font-semibold text-foreground">
                <FaPhone className="h-4 w-4" />
                (647) 123-4567
              </a>
              <Button asChild className="bg-secondary text-white hover:bg-amber-dark w-full font-semibold">
                <Link to="/contact" onClick={() => setMobileOpen(false)}>Get Free Quote</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
