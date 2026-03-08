import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TestimonialsSlider from "@/components/TestimonialsSlider";
import TestimonialsCTA from "@/components/TestimonialsCTA";
import { Star } from "lucide-react";

const Testimonials = () => (
  <div className="min-h-screen">
    <Navbar />
    {/* Hero Section with Background Image */}
    <section className="relative py-20 md:py-24 lg:py-28 overflow-hidden min-h-[350px] md:min-h-[400px]">
      {/* Background Image */}
      <div 
        className="absolute inset-0 w-full h-full"
      >
        <img 
          src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1920&q=80" 
          alt="Team Meeting"
          className="w-full h-full object-cover object-top"
        />
      </div>
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/80 to-primary/70"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-64 h-64 bg-secondary rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-secondary rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Content */}
      <div className="container mx-auto text-center relative z-10 px-4">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4 tracking-tight animate-fade-in-up">
          What Our Clients Say
        </h1>
        <p className="text-primary-foreground/90 text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-light animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          Real stories from real customers who trusted us with their siding projects
        </p>
      </div>
    </section>
    <TestimonialsCTA />
    <TestimonialsSlider />
    <Footer />
  </div>
);

export default Testimonials;
