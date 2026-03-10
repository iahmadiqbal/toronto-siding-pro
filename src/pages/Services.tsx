import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Hammer, Wrench, Home, Building2, CheckCircle, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Services = () => (
  <div className="min-h-screen">
    <Navbar />
    
    {/* Hero Section with Background Image */}
    <section className="relative py-32 overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2076&auto=format&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-primary/85"></div>
      </div>
      
      <div className="container mx-auto text-center relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6 animate-fade-in-up">Our Services</h1>
        <p className="text-primary-foreground/90 text-lg md:text-xl max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          Comprehensive siding solutions for every need
        </p>
      </div>
    </section>

    {/* Main Services Grid */}
    <section className="py-20 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="border-none shadow-xl hover:shadow-2xl transition-all group overflow-hidden">
            <div 
              className="h-56 bg-cover bg-center relative"
              style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2073&auto=format&fit=crop')"
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20 group-hover:from-black/90 transition-all"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <div className="w-14 h-14 rounded-xl gradient-amber flex items-center justify-center mb-4">
                  <Hammer className="h-7 w-7 text-secondary-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Siding Installation</h3>
                <p className="text-white/90 text-sm">Professional installation with premium materials</p>
              </div>
            </div>
            <CardContent className="pt-6 pb-6">
              <p className="text-muted-foreground mb-4">
                Expert installation using vinyl, cedar, and fiber cement. Complete service from consultation to cleanup.
              </p>
              <Button asChild variant="outline" className="w-full group">
                <Link to="/services/siding-installation">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="border-none shadow-xl hover:shadow-2xl transition-all group overflow-hidden">
            <div 
              className="h-56 bg-cover bg-center relative"
              style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1621905251918-48416bd8575a?q=80&w=2069&auto=format&fit=crop')"
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20 group-hover:from-black/90 transition-all"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <div className="w-14 h-14 rounded-xl gradient-amber flex items-center justify-center mb-4">
                  <Wrench className="h-7 w-7 text-secondary-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Siding Repair</h3>
                <p className="text-white/90 text-sm">Fast and reliable repair services</p>
              </div>
            </div>
            <CardContent className="pt-6 pb-6">
              <p className="text-muted-foreground mb-4">
                Quick diagnosis and cost-effective solutions for damaged or aging siding. Emergency services available.
              </p>
              <Button asChild variant="outline" className="w-full group">
                <Link to="/services/siding-repair">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="border-none shadow-xl hover:shadow-2xl transition-all group overflow-hidden">
            <div 
              className="h-56 bg-cover bg-center relative"
              style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=2070&auto=format&fit=crop')"
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20 group-hover:from-black/90 transition-all"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <div className="w-14 h-14 rounded-xl gradient-amber flex items-center justify-center mb-4">
                  <Home className="h-7 w-7 text-secondary-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Residential Siding</h3>
                <p className="text-white/90 text-sm">Transform your home's exterior</p>
              </div>
            </div>
            <CardContent className="pt-6 pb-6">
              <p className="text-muted-foreground mb-4">
                Beautiful siding for single-family homes, townhouses, and condos. Custom design consultation included.
              </p>
              <Button asChild variant="outline" className="w-full group">
                <Link to="/services/residential-siding">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="border-none shadow-xl hover:shadow-2xl transition-all group overflow-hidden">
            <div 
              className="h-56 bg-cover bg-center relative"
              style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop')"
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20 group-hover:from-black/90 transition-all"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <div className="w-14 h-14 rounded-xl gradient-amber flex items-center justify-center mb-4">
                  <Building2 className="h-7 w-7 text-secondary-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Commercial Siding</h3>
                <p className="text-white/90 text-sm">Professional solutions for businesses</p>
              </div>
            </div>
            <CardContent className="pt-6 pb-6">
              <p className="text-muted-foreground mb-4">
                Professional-grade exterior cladding for offices, retail, warehouses, and multi-unit buildings.
              </p>
              <Button asChild variant="outline" className="w-full group">
                <Link to="/services/commercial-siding">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>

    {/* Additional Services */}
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Additional Services</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Complete exterior solutions for your property
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { 
              title: "Soffit & Fascia Installation", 
              desc: "Protect your roof edges with professionally installed soffit and fascia. Prevents moisture damage and improves ventilation.",
              icon: CheckCircle
            },
            { 
              title: "Gutter Installation", 
              desc: "Seamless gutter installation to protect your home's foundation. Includes downspouts, guards, and drainage solutions.",
              icon: CheckCircle
            },
            { 
              title: "Old Siding Removal", 
              desc: "Safe and efficient removal of existing siding. Proper disposal and surface preparation for new installation.",
              icon: CheckCircle
            },
            { 
              title: "Siding Inspection", 
              desc: "Comprehensive inspection of your current siding. Detailed reports and recommendations for maintenance or replacement.",
              icon: CheckCircle
            },
          ].map((s) => (
            <Card key={s.title} className="border-none shadow-lg hover:shadow-xl transition-all">
              <CardContent className="pt-6 pb-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center shrink-0">
                    <s.icon className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-2">{s.title}</h3>
                    <p className="text-muted-foreground text-sm">{s.desc}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>

    {/* CTA Section */}
    <section className="py-16 bg-background">
      <div className="container mx-auto max-w-4xl">
        <Card className="border-none shadow-2xl overflow-hidden">
          <div className="bg-gradient-to-br from-primary to-primary/90 p-12 text-center text-primary-foreground">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h3>
            <p className="text-primary-foreground/90 text-lg mb-8 max-w-2xl mx-auto">
              Contact us today for a free consultation and quote. Transform your property with our expert siding services.
            </p>
            <Button asChild size="lg" className="bg-secondary text-secondary-foreground hover:bg-amber-dark px-10 py-6 text-lg shadow-lg">
              <Link to="/contact">Get Free Quote</Link>
            </Button>
          </div>
        </Card>
      </div>
    </section>

    <Footer />
  </div>
);

export default Services;
