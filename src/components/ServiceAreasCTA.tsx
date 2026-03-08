import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { FaArrowRight, FaPhone, FaMapMarkedAlt, FaTruck, FaClock, FaTools } from "react-icons/fa";

const ServiceAreasCTA = () => (
  <section className="py-20 bg-gradient-to-br from-slate-50 via-gray-50 to-slate-100 relative overflow-hidden">
    {/* Animated Background Elements */}
    <div className="absolute inset-0 opacity-5">
      <div className="absolute top-10 right-10 w-96 h-96 bg-primary rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-secondary rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-primary rounded-full blur-3xl animate-pulse" style={{ animationDelay: '0.5s' }}></div>
    </div>

    {/* Floating Map Icons */}
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <FaMapMarkedAlt className="absolute top-20 left-20 h-8 w-8 text-primary/10 animate-bounce" style={{ animationDuration: '3s' }} />
      <FaMapMarkedAlt className="absolute top-40 right-32 h-6 w-6 text-secondary/10 animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }} />
      <FaMapMarkedAlt className="absolute bottom-32 left-1/3 h-10 w-10 text-primary/10 animate-bounce" style={{ animationDuration: '3.5s', animationDelay: '0.5s' }} />
      <FaMapMarkedAlt className="absolute bottom-20 right-1/4 h-7 w-7 text-secondary/10 animate-bounce" style={{ animationDuration: '4.5s', animationDelay: '1.5s' }} />
    </div>

    <div className="container mx-auto relative z-10 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Main Content */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-primary/90 text-white font-bold text-sm uppercase tracking-wider px-5 py-2.5 rounded-full mb-6 shadow-lg animate-fade-in-up hover:scale-105 transition-transform">
            <FaMapMarkedAlt className="h-4 w-4 animate-pulse" />
            <span>Local Service Excellence</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-5 tracking-tight animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            Your Local Siding Experts
          </h2>
          
          <p className="text-muted-foreground text-base md:text-lg mb-10 max-w-2xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Experience the difference of working with a trusted local team. Fast response times, personalized service, and unmatched quality across the GTA.
          </p>
        </div>

        {/* Service Features Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 border-2 border-transparent hover:border-primary relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity -mr-16 -mt-16"></div>
            <div className="relative">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                <FaTruck className="h-8 w-8 text-white" />
              </div>
              <div className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">Same-Day Service</div>
              <div className="text-muted-foreground text-sm leading-relaxed">Quick response and scheduling in your area</div>
            </div>
          </div>

          <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 border-2 border-transparent hover:border-secondary relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity -mr-16 -mt-16"></div>
            <div className="relative">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-secondary to-amber-500 flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                <FaClock className="h-8 w-8 text-white" />
              </div>
              <div className="text-xl font-bold text-foreground mb-2 group-hover:text-secondary transition-colors">Flexible Scheduling</div>
              <div className="text-muted-foreground text-sm leading-relaxed">Work around your busy schedule with ease</div>
            </div>
          </div>

          <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 border-2 border-transparent hover:border-primary relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity -mr-16 -mt-16"></div>
            <div className="relative">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                <FaTools className="h-8 w-8 text-white" />
              </div>
              <div className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">Expert Installation</div>
              <div className="text-muted-foreground text-sm leading-relaxed">Professional team with local expertise</div>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-10 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <Button asChild size="lg" className="bg-gradient-to-r from-primary to-primary/90 text-white hover:from-primary/90 hover:to-primary text-base font-semibold px-8 shadow-xl hover:shadow-2xl transition-all hover:scale-110 group">
            <Link to="/contact">
              Schedule Free Estimate
              <FaArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform" />
            </Link>
          </Button>
          <Button asChild size="lg" className="bg-gradient-to-r from-secondary to-amber-500 text-white hover:from-amber-500 hover:to-secondary text-base font-semibold px-8 shadow-xl hover:shadow-2xl transition-all hover:scale-110 group">
            <a href="tel:+16471234567">
              <FaPhone className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
              Call (647) 123-4567
            </a>
          </Button>
        </div>

        {/* Bottom Info Box */}
        <div className="bg-gradient-to-r from-primary to-primary/95 rounded-2xl p-8 shadow-2xl border-2 border-primary/20 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
          <div className="grid md:grid-cols-3 gap-6 text-center text-white">
            <div className="space-y-2">
              <div className="text-3xl font-bold">20+</div>
              <div className="text-white/80 text-sm">Cities Served</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold">24/7</div>
              <div className="text-white/80 text-sm">Emergency Service</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold">100%</div>
              <div className="text-white/80 text-sm">Local Coverage</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ServiceAreasCTA;
