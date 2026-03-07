import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="gradient-navy pt-16 pb-8">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <img src={logo} alt="Toronto Siding" className="h-14 w-auto mb-4 brightness-200" />
            <p className="text-primary-foreground/60 text-sm leading-relaxed">
              Toronto's premier siding company. Over 25 years of experience serving homeowners and businesses across the GTA.
            </p>
          </div>
          <div>
            <h4 className="text-primary-foreground font-bold mb-4">Services</h4>
            <ul className="space-y-2.5">
              {["Vinyl Siding", "Cedar Siding", "Fiber Cement Siding", "Siding Repair", "Soffit & Fascia", "Gutter Installation"].map((s) => (
                <li key={s}>
                  <Link to="/services" className="text-primary-foreground/60 text-sm hover:text-secondary transition-colors">
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-primary-foreground font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {[
                { name: "About Us", path: "/about" },
                { name: "Testimonials", path: "/testimonials" },
                { name: "Service Areas", path: "/service-areas" },
                { name: "Contact", path: "/contact" },
              ].map((l) => (
                <li key={l.name}>
                  <Link to={l.path} className="text-primary-foreground/60 text-sm hover:text-secondary transition-colors">
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-primary-foreground font-bold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <a href="tel:+16471234567" className="flex items-center gap-3 text-primary-foreground/60 text-sm hover:text-secondary transition-colors">
                <Phone className="h-4 w-4 shrink-0" /> (647) 123-4567
              </a>
              <a href="mailto:info@torontosiding.ca" className="flex items-center gap-3 text-primary-foreground/60 text-sm hover:text-secondary transition-colors">
                <Mail className="h-4 w-4 shrink-0" /> info@torontosiding.ca
              </a>
              <p className="flex items-start gap-3 text-primary-foreground/60 text-sm">
                <MapPin className="h-4 w-4 shrink-0 mt-0.5" /> 123 Yonge St, Toronto, ON M5C 1T4
              </p>
            </div>
          </div>
        </div>
        <div className="border-t border-primary-foreground/10 pt-6 text-center">
          <p className="text-primary-foreground/40 text-sm">
            © {new Date().getFullYear()} Toronto Siding. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
