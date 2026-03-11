import { Link } from "react-router-dom";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="gradient-navy pt-12 xl:pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8 mb-10 xl:mb-12">
          <div className="pl-2">
            <Link to="/" className="flex items-center gap-1 mb-4">
              <img src={logo} alt="Toronto Siding" className="h-10 xl:h-12 w-auto brightness-200" />
              <span className="text-xl xl:text-2xl font-bold text-primary-foreground tracking-tight whitespace-nowrap">Toronto Siding</span>
            </Link>
            <p className="text-primary-foreground/90 text-sm leading-relaxed font-medium">
              Toronto's premier siding company. Over 25 years of experience serving homeowners and businesses across the GTA.
            </p>
          </div>
          <div className="pl-2">
            <h4 className="text-primary-foreground font-bold text-base mb-4 tracking-tight">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/services/vinyl-siding" className="text-primary-foreground/90 text-sm hover:text-secondary transition-colors font-medium">
                  Vinyl Siding
                </Link>
              </li>
              <li>
                <Link to="/services/cedar-siding" className="text-primary-foreground/90 text-sm hover:text-secondary transition-colors font-medium">
                  Cedar Siding
                </Link>
              </li>
              <li>
                <Link to="/services/fiber-cement-siding" className="text-primary-foreground/90 text-sm hover:text-secondary transition-colors font-medium">
                  Fiber Cement Siding
                </Link>
              </li>
              <li>
                <Link to="/services/siding-repair" className="text-primary-foreground/90 text-sm hover:text-secondary transition-colors font-medium">
                  Siding Repair
                </Link>
              </li>
              <li>
                <Link to="/services/soffit-fascia" className="text-primary-foreground/90 text-sm hover:text-secondary transition-colors font-medium">
                  Soffit & Fascia
                </Link>
              </li>
              <li>
                <Link to="/services/gutter-installation" className="text-primary-foreground/90 text-sm hover:text-secondary transition-colors font-medium">
                  Gutter Installation
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-primary-foreground font-bold text-base mb-4 tracking-tight">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { name: "About Us", path: "/about" },
                { name: "Testimonials", path: "/testimonials" },
                { name: "Service Areas", path: "/service-areas" },
                { name: "Contact", path: "/contact" },
              ].map((l) => (
                <li key={l.name}>
                  <Link to={l.path} className="text-primary-foreground/90 text-sm hover:text-secondary transition-colors font-medium">
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-primary-foreground font-bold text-base mb-4 tracking-tight">Contact Info</h4>
            <div className="space-y-3">
              <a href="tel:+16471234567" className="flex items-center gap-2 text-primary-foreground/90 text-sm hover:text-secondary transition-colors font-medium">
                <FaPhone className="h-3.5 w-3.5 shrink-0" /> (647) 123-4567
              </a>
              <a href="mailto:info@torontosiding.ca" className="flex items-center gap-2 text-primary-foreground/90 text-sm hover:text-secondary transition-colors font-medium break-all">
                <FaEnvelope className="h-3.5 w-3.5 shrink-0" /> info@torontosiding.ca
              </a>
              <a href="https://maps.google.com/?q=123+Yonge+St,+Toronto,+ON+M5C+1T4" target="_blank" rel="noopener noreferrer" className="flex items-start gap-2 text-primary-foreground/90 text-sm hover:text-secondary transition-colors font-medium">
                <FaMapMarkerAlt className="h-3.5 w-3.5 shrink-0 mt-0.5" /> 123 Yonge St, Toronto, ON M5C 1T4
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-primary-foreground/10 pt-6 text-center">
          <p className="text-primary-foreground/70 text-sm font-medium">
            © {new Date().getFullYear()} Toronto Siding. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
