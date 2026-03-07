import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { FaArrowRight, FaPhone } from "react-icons/fa";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[600px] flex items-center">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 gradient-hero-overlay" />
      <div className="relative container mx-auto py-20">
        <div className="max-w-2xl">
          <span className="inline-block bg-secondary text-secondary-foreground text-sm font-bold px-4 py-1.5 rounded-full mb-6 animate-fade-in-up tracking-wide">
            Toronto's #1 Siding Company
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary-foreground leading-tight mb-6 animate-fade-in-up tracking-tight" style={{ animationDelay: "0.1s" }}>
            Expert Siding Installation & Repair in Toronto
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-xl animate-fade-in-up font-light leading-relaxed" style={{ animationDelay: "0.2s" }}>
            Transform your home's exterior with premium siding solutions. Licensed, insured, and trusted by thousands of Toronto homeowners.
          </p>
          <div className="flex flex-wrap gap-4 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <Button asChild size="lg" className="bg-secondary text-secondary-foreground hover:bg-amber-dark text-base font-semibold px-8">
              <Link to="/contact">
                Get Free Estimate
                <FaArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 text-base font-semibold px-8">
              <a href="tel:+16471234567">
                <FaPhone className="mr-2 h-5 w-5" />
                (647) 123-4567
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
