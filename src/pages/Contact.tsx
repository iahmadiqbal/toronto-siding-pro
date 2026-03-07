import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

const Contact = () => (
  <div className="min-h-screen">
    <Navbar />
    <section className="gradient-navy py-20">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">Contact Us</h1>
        <p className="text-primary-foreground/70 max-w-2xl mx-auto">Get your free estimate today</p>
      </div>
    </section>
    <ContactForm />
    <Footer />
  </div>
);

export default Contact;
