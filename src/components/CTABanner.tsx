import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { FaArrowRight } from "react-icons/fa";

const CTABanner = () => (
  <section className="py-16 gradient-amber relative overflow-hidden">
    <div className="absolute inset-0 opacity-10">
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-white rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-white rounded-full blur-3xl"></div>
    </div>
    <div className="container mx-auto text-center relative z-10">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary-foreground mb-5 tracking-tight">
        Ready to Transform Your Home?
      </h2>
      <p className="text-secondary-foreground/90 text-base md:text-lg mb-8 max-w-xl mx-auto leading-relaxed font-light">
        Get a free, no-obligation estimate for your siding project today. Our experts are ready to help.
      </p>
      <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-navy-light text-base font-semibold px-8 shadow-xl hover:shadow-2xl transition-all">
        <Link to="/contact">
          Get Started Today
          <FaArrowRight className="ml-2 h-5 w-5" />
        </Link>
      </Button>
    </div>
  </section>
);

export default CTABanner;
