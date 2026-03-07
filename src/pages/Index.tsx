import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ServicesOverview from "@/components/ServicesOverview";
import WhyChooseUs from "@/components/WhyChooseUs";
import Projects from "@/components/Projects";
import TestimonialsSlider from "@/components/TestimonialsSlider";
import ContactForm from "@/components/ContactForm";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <ServicesOverview />
      <WhyChooseUs />
      <Projects />
      <TestimonialsSlider />
      <CTABanner />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
