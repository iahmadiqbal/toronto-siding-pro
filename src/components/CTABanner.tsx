import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { FaArrowRight, FaPhone, FaCheckCircle } from "react-icons/fa";

const CTABanner = () => (
  <section className="py-20 gradient-amber relative overflow-hidden">
    {/* Animated Background Elements */}
    <div className="absolute inset-0 opacity-10">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white rounded-full blur-3xl animate-pulse" style={{ animationDelay: '0.5s' }}></div>
    </div>

    {/* Floating Icons Animation */}
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-10 left-10 animate-bounce" style={{ animationDuration: '3s', animationDelay: '0s' }}>
        <FaCheckCircle className="h-8 w-8 text-white/20" />
      </div>
      <div className="absolute top-20 right-20 animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }}>
        <FaCheckCircle className="h-10 w-10 text-white/20" />
      </div>
      <div className="absolute bottom-20 left-1/4 animate-bounce" style={{ animationDuration: '3.5s', animationDelay: '0.5s' }}>
        <FaCheckCircle className="h-6 w-6 text-white/20" />
      </div>
      <div className="absolute bottom-10 right-1/3 animate-bounce" style={{ animationDuration: '4.5s', animationDelay: '1.5s' }}>
        <FaCheckCircle className="h-7 w-7 text-white/20" />
      </div>
    </div>

    <div className="container mx-auto text-center relative z-10 px-4">
      {/* Badge */}
      <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white text-sm font-bold px-4 py-2 rounded-full mb-6 animate-fade-in-up border border-white/30">
        <FaCheckCircle className="h-4 w-4" />
        <span>Free Consultation Available</span>
      </div>

      {/* Main Heading with Animation */}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary-foreground mb-5 tracking-tight animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
        Ready to Transform Your Home?
      </h2>
      
      <p className="text-secondary-foreground/90 text-base md:text-lg mb-8 max-w-xl mx-auto leading-relaxed font-light animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
        Get a free, no-obligation estimate for your siding project today. Our experts are ready to help.
      </p>

      {/* Features Grid */}
      <div className="grid md:grid-cols-3 gap-4 max-w-3xl mx-auto mb-8 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
          <div className="text-2xl font-bold text-white mb-1">24/7</div>
          <div className="text-white/80 text-sm">Available Support</div>
        </div>
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
          <div className="text-2xl font-bold text-white mb-1">Free</div>
          <div className="text-white/80 text-sm">Consultation & Quote</div>
        </div>
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
          <div className="text-2xl font-bold text-white mb-1">Fast</div>
          <div className="text-white/80 text-sm">Response Time</div>
        </div>
      </div>

      {/* CTA Buttons */}
      <div className="flex flex-wrap justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
        <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-navy-light text-base font-semibold px-8 shadow-2xl hover:shadow-3xl transition-all hover:scale-105 group">
          <Link to="/contact">
            Get Started Today
            <FaArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </Button>
        <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100 text-base font-semibold px-8 shadow-2xl hover:shadow-3xl transition-all hover:scale-105 group border-2 border-white">
          <a href="tel:+16471234567">
            <FaPhone className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
            Call (647) 123-4567
          </a>
        </Button>
      </div>

      {/* Trust Badge */}
      <div className="mt-8 flex flex-wrap justify-center items-center gap-6 text-white/80 text-sm animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
        <div className="flex items-center gap-2">
          <FaCheckCircle className="h-4 w-4 text-white" />
          <span>Licensed & Insured</span>
        </div>
        <div className="flex items-center gap-2">
          <FaCheckCircle className="h-4 w-4 text-white" />
          <span>25+ Years Experience</span>
        </div>
        <div className="flex items-center gap-2">
          <FaCheckCircle className="h-4 w-4 text-white" />
          <span>5000+ Happy Clients</span>
        </div>
      </div>
    </div>
  </section>
);

export default CTABanner;
