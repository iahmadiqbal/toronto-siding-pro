import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTABanner = () => (
  <section className="py-16 gradient-amber">
    <div className="container mx-auto text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-secondary-foreground mb-4">
        Ready to Transform Your Home?
      </h2>
      <p className="text-secondary-foreground/80 mb-8 max-w-xl mx-auto">
        Get a free, no-obligation estimate for your siding project today. Our experts are ready to help.
      </p>
      <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-navy-light text-base px-8">
        <Link to="/contact">
          Get Started Today
          <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
      </Button>
    </div>
  </section>
);

export default CTABanner;
