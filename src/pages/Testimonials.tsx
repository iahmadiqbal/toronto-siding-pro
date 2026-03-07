import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TestimonialsSlider from "@/components/TestimonialsSlider";
import CTABanner from "@/components/CTABanner";

const Testimonials = () => (
  <div className="min-h-screen">
    <Navbar />
    <section className="gradient-navy py-20">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">Testimonials</h1>
        <p className="text-primary-foreground/70 max-w-2xl mx-auto">Hear from our satisfied customers</p>
      </div>
    </section>
    <TestimonialsSlider />
    <CTABanner />
    <Footer />
  </div>
);

export default Testimonials;
