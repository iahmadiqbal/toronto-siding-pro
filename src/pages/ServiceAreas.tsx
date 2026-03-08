import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiceAreasCTA from "@/components/ServiceAreasCTA";
import { FaMapMarkerAlt, FaCheckCircle, FaPhone } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const areas = [
  "Toronto", "North York", "Scarborough", "Etobicoke", "Mississauga",
  "Brampton", "Vaughan", "Markham", "Richmond Hill", "Oakville",
  "Burlington", "Ajax", "Pickering", "Whitby", "Oshawa",
  "Newmarket", "Aurora", "King City", "Caledon", "Milton",
];

const ServiceAreas = () => (
  <div className="min-h-screen">
    <Navbar />
    {/* Hero Section with Background Image */}
    <section className="relative py-20 md:py-24 lg:py-28 overflow-hidden min-h-[350px] md:min-h-[400px]">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <img 
          src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1920&q=80" 
          alt="Toronto City Skyline"
          className="w-full h-full object-cover object-center"
        />
      </div>
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/75"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-64 h-64 bg-secondary rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-secondary rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Floating Map Markers */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <FaMapMarkerAlt className="absolute top-20 left-20 h-8 w-8 text-secondary/40 animate-bounce" style={{ animationDuration: '3s' }} />
        <FaMapMarkerAlt className="absolute top-32 right-32 h-6 w-6 text-secondary/30 animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }} />
        <FaMapMarkerAlt className="absolute bottom-32 left-1/3 h-10 w-10 text-secondary/35 animate-bounce" style={{ animationDuration: '3.5s', animationDelay: '0.5s' }} />
        <FaMapMarkerAlt className="absolute bottom-20 right-1/4 h-7 w-7 text-secondary/30 animate-bounce" style={{ animationDuration: '4.5s', animationDelay: '1.5s' }} />
      </div>

      {/* Content */}
      <div className="container mx-auto text-center relative z-10 px-4">
        <div className="inline-flex items-center gap-2 bg-secondary text-white font-bold text-sm uppercase tracking-wider px-5 py-2.5 rounded-full mb-6 shadow-lg animate-fade-in-up hover:scale-105 transition-transform">
          <FaMapMarkerAlt className="h-4 w-4 animate-pulse" />
          <span>Serving GTA & Beyond</span>
        </div>
        
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4 tracking-tight animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          Service Areas
        </h1>
        <p className="text-primary-foreground/90 text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-light animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          Serving the Greater Toronto Area and beyond with professional siding solutions
        </p>
      </div>
    </section>

    {/* Areas Grid Section */}
    <section className="py-20 bg-gradient-to-b from-background via-muted/30 to-background relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto relative z-10 px-4">
        <div className="text-center mb-14 animate-fade-in-up">
          <span className="inline-block text-secondary font-bold text-sm uppercase tracking-wider bg-secondary/10 px-4 py-2 rounded-full mb-4">Coverage Map</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 tracking-tight">Areas We Serve</h2>
          <p className="text-muted-foreground text-base md:text-lg mt-4 max-w-2xl mx-auto leading-relaxed">
            We proudly serve Toronto and the surrounding communities. If you don't see your area listed, contact us — we likely serve your location too!
          </p>
        </div>

        {/* Areas Grid with Staggered Animation */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 max-w-6xl mx-auto mb-12">
          {areas.map((area, index) => (
            <div 
              key={area} 
              className="group relative bg-white rounded-xl shadow-lg hover:shadow-2xl border-2 border-transparent hover:border-secondary p-5 transition-all duration-300 hover:-translate-y-2 animate-fade-in-up overflow-hidden"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/0 to-secondary/0 group-hover:from-secondary/10 group-hover:to-amber-500/10 transition-all duration-300 rounded-xl"></div>
              
              <div className="relative flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-secondary to-amber-500 flex items-center justify-center shadow-md group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <FaMapMarkerAlt className="h-5 w-5 text-white" />
                </div>
                <span className="text-foreground text-sm font-semibold group-hover:text-secondary transition-colors">{area}</span>
              </div>
              
              {/* Check Icon on Hover */}
              <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <FaCheckCircle className="h-4 w-4 text-green-500" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Box */}
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-primary to-primary/90 rounded-2xl p-8 md:p-10 shadow-2xl border-2 border-secondary/30 animate-fade-in-up" style={{ animationDelay: '1s' }}>
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
              Don't See Your Area?
            </h3>
            <p className="text-primary-foreground/90 text-base md:text-lg mb-6 max-w-2xl mx-auto leading-relaxed">
              We're constantly expanding our service coverage. Contact us today to check if we serve your location!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-secondary hover:bg-amber-500 text-white text-base font-semibold px-8 shadow-xl hover:shadow-2xl transition-all hover:scale-110 group">
                <Link to="/contact">
                  <FaPhone className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                  Contact Us Now
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-white hover:bg-secondary hover:text-white text-primary border-2 border-white text-base font-semibold px-8 shadow-xl hover:shadow-2xl transition-all hover:scale-110">
                <Link to="/services">
                  View Our Services
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <ServiceAreasCTA />
    <Footer />
  </div>
);

export default ServiceAreas;
