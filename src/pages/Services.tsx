import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServicesOverview from "@/components/ServicesOverview";
import CTABanner from "@/components/CTABanner";

const Services = () => (
  <div className="min-h-screen">
    <Navbar />
    <section className="gradient-navy py-20">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">Our Services</h1>
        <p className="text-primary-foreground/70 max-w-2xl mx-auto">Comprehensive siding solutions for every need</p>
      </div>
    </section>
    <ServicesOverview />
    <section className="py-20 bg-background">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Additional Services</h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {[
            { title: "Soffit & Fascia Installation", desc: "Protect your roof edges with professionally installed soffit and fascia. Prevents moisture damage and improves ventilation." },
            { title: "Gutter Installation", desc: "Seamless gutter installation to protect your home's foundation. Includes downspouts, guards, and drainage solutions." },
            { title: "Old Siding Removal", desc: "Safe and efficient removal of existing siding. Proper disposal and surface preparation for new installation." },
            { title: "Siding Inspection", desc: "Comprehensive inspection of your current siding. Detailed reports and recommendations for maintenance or replacement." },
          ].map((s) => (
            <div key={s.title} className="p-6 bg-card rounded-xl shadow-card border border-border">
              <h3 className="text-lg font-bold text-foreground mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
    <CTABanner />
    <Footer />
  </div>
);

export default Services;
