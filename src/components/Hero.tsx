import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { FaArrowRight, FaPhone } from "react-icons/fa";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[600px] xl:min-h-[700px] 2xl:min-h-[800px] flex items-center">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 gradient-hero-overlay" />
      <div className="relative container mx-auto py-20 xl:py-24 2xl:py-32">
        <div className="max-w-2xl xl:max-w-3xl 2xl:max-w-4xl">
          <span className="inline-block bg-secondary text-secondary-foreground text-sm xl:text-base font-bold px-4 py-1.5 rounded-full mb-6 animate-fade-in-up tracking-wide">
            Toronto's #1 Siding Company
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-extrabold text-primary-foreground leading-tight mb-6 animate-fade-in-up tracking-tight" style={{ animationDelay: "0.1s" }}>
            Expert Siding Installation & Repair in Toronto
          </h1>
          <p className="text-lg md:text-xl xl:text-2xl 2xl:text-3xl text-primary-foreground/90 mb-8 max-w-xl xl:max-w-2xl 2xl:max-w-3xl animate-fade-in-up font-light leading-relaxed" style={{ animationDelay: "0.2s" }}>
            Transform your home's exterior with premium siding solutions. Licensed, insured, and trusted by thousands of Toronto homeowners.
          </p>
          <div className="flex flex-wrap gap-4 xl:gap-6 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <Button asChild size="lg" className="bg-secondary text-white hover:bg-amber-dark text-base xl:text-lg font-semibold px-8 xl:px-10 shadow-lg">
              <Link to="/contact">
                Get Free Estimate
                <FaArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" className="bg-white text-primary hover:bg-secondary hover:text-white text-base xl:text-lg font-semibold px-8 xl:px-10 shadow-lg border-2 border-white hover:border-secondary transition-all duration-300">
              <Link to="/contact">
                Contact Us
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
