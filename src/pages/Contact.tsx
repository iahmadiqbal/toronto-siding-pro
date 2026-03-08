import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => (
  <div className="min-h-screen">
    <Navbar />
    {/* Hero Section with Background Image */}
    <section className="relative py-20 md:py-24 lg:py-28 overflow-hidden min-h-[350px] md:min-h-[400px]">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <img 
          src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1920&q=80" 
          alt="Contact Us"
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

      {/* Floating Contact Icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <FaPhone className="absolute top-20 left-20 h-8 w-8 text-secondary/40 animate-bounce" style={{ animationDuration: '3s' }} />
        <FaEnvelope className="absolute top-32 right-32 h-6 w-6 text-secondary/30 animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }} />
        <FaMapMarkerAlt className="absolute bottom-32 left-1/3 h-10 w-10 text-secondary/35 animate-bounce" style={{ animationDuration: '3.5s', animationDelay: '0.5s' }} />
        <FaPhone className="absolute bottom-20 right-1/4 h-7 w-7 text-secondary/30 animate-bounce" style={{ animationDuration: '4.5s', animationDelay: '1.5s' }} />
      </div>

      {/* Content */}
      <div className="container mx-auto text-center relative z-10 px-4">
        <div className="inline-flex items-center gap-2 bg-secondary text-white font-bold text-sm uppercase tracking-wider px-5 py-2.5 rounded-full mb-6 shadow-lg animate-fade-in-up hover:scale-105 transition-transform">
          <FaEnvelope className="h-4 w-4 animate-pulse" />
          <span>Get In Touch</span>
        </div>
        
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4 tracking-tight animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          Contact Us
        </h1>
        <p className="text-primary-foreground/90 text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-light animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          Get your free estimate today and transform your home with our expert siding services
        </p>
      </div>
    </section>
    <ContactForm />
    <Footer />
  </div>
);

export default Contact;
