import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTABanner from "@/components/CTABanner";
import { MapPin } from "lucide-react";

const areas = [
  "Toronto", "North York", "Scarborough", "Etobicoke", "Mississauga",
  "Brampton", "Vaughan", "Markham", "Richmond Hill", "Oakville",
  "Burlington", "Ajax", "Pickering", "Whitby", "Oshawa",
  "Newmarket", "Aurora", "King City", "Caledon", "Milton",
];

const ServiceAreas = () => (
  <div className="min-h-screen">
    <Navbar />
    <section className="gradient-navy py-20">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">Service Areas</h1>
        <p className="text-primary-foreground/70 max-w-2xl mx-auto">Serving the Greater Toronto Area and beyond</p>
      </div>
    </section>
    <section className="py-20 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold text-foreground">Areas We Serve</h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            We proudly serve Toronto and the surrounding communities. If you don't see your area listed, contact us — we likely serve your location too!
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 max-w-5xl mx-auto">
          {areas.map((area) => (
            <div key={area} className="flex items-center gap-2 p-4 bg-card rounded-xl shadow-card border border-border">
              <MapPin className="h-4 w-4 text-secondary shrink-0" />
              <span className="text-foreground text-sm font-medium">{area}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
    <CTABanner />
    <Footer />
  </div>
);

export default ServiceAreas;
