import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MapPin, Phone, Clock, Award, Users, CheckCircle, Building2, Home, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

const ServiceAreas = () => (
  <div className="min-h-screen">
    <Navbar />
    
    {/* Hero Section */}
    <section className="relative py-32 overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=2070&auto=format&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-primary/85"></div>
      </div>
      
      <div className="container mx-auto text-center relative z-10">
        <div className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground font-semibold text-sm uppercase tracking-wider px-5 py-2 rounded-full mb-6">
          <MapPin className="h-4 w-4" />
          <span>Serving GTA & Beyond</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6">Service Areas</h1>
        <p className="text-primary-foreground/90 text-lg md:text-xl max-w-2xl mx-auto">
          Professional siding solutions across the Greater Toronto Area
        </p>
      </div>
    </section>

    {/* Stats Section */}
    <section className="py-16 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-4 gap-6">
          <Card className="border-none shadow-lg text-center">
            <CardContent className="pt-8 pb-6">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-foreground mb-2">20+</h3>
              <p className="text-muted-foreground text-sm">Cities Served</p>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg text-center">
            <CardContent className="pt-8 pb-6">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-foreground mb-2">5000+</h3>
              <p className="text-muted-foreground text-sm">Happy Clients</p>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg text-center">
            <CardContent className="pt-8 pb-6">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-foreground mb-2">25+</h3>
              <p className="text-muted-foreground text-sm">Years Experience</p>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg text-center">
            <CardContent className="pt-8 pb-6">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-foreground mb-2">24/7</h3>
              <p className="text-muted-foreground text-sm">Support Available</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>

    {/* Service Areas Grid */}
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Coverage Map</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">Areas We Serve</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We proudly serve Toronto and surrounding communities with professional siding services
          </p>
        </div>

        {/* Central GTA */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
              <Building2 className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-foreground">Central GTA</h3>
          </div>
          <div className="grid md:grid-cols-4 gap-4">
            {["Toronto", "North York", "Scarborough", "Etobicoke"].map((area) => (
              <div key={area} className="bg-background rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow border-l-4 border-blue-500">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-blue-500 shrink-0" />
                  <span className="text-foreground font-semibold">{area}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* West GTA */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center">
              <Home className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-foreground">West GTA</h3>
          </div>
          <div className="grid md:grid-cols-4 gap-4">
            {["Mississauga", "Brampton", "Oakville", "Burlington", "Caledon", "Milton"].map((area) => (
              <div key={area} className="bg-background rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow border-l-4 border-green-500">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 shrink-0" />
                  <span className="text-foreground font-semibold">{area}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* North GTA */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center">
              <Navigation className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-foreground">North GTA</h3>
          </div>
          <div className="grid md:grid-cols-4 gap-4">
            {["Vaughan", "Markham", "Richmond Hill", "Newmarket", "Aurora", "King City"].map((area) => (
              <div key={area} className="bg-background rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow border-l-4 border-purple-500">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-purple-500 shrink-0" />
                  <span className="text-foreground font-semibold">{area}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* East GTA */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center">
              <MapPin className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-foreground">East GTA</h3>
          </div>
          <div className="grid md:grid-cols-4 gap-4">
            {["Ajax", "Pickering", "Whitby", "Oshawa"].map((area) => (
              <div key={area} className="bg-background rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow border-l-4 border-amber-500">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-amber-500 shrink-0" />
                  <span className="text-foreground font-semibold">{area}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* Featured Locations with Images */}
    <section className="py-16 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Featured Locations</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">Popular Service Locations</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="border-none shadow-xl overflow-hidden hover:shadow-2xl transition-shadow">
            <div 
              className="h-48 bg-cover bg-center relative"
              style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1517935706615-2717063c2225?q=80&w=2070&auto=format&fit=crop')"
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-2xl font-bold text-white mb-1">Toronto</h3>
                <p className="text-white/90 text-sm">Downtown & Surrounding Areas</p>
              </div>
            </div>
            <CardContent className="pt-6 pb-6">
              <p className="text-muted-foreground text-sm mb-4">
                Serving all Toronto neighborhoods with premium siding installation and repair services.
              </p>
              <Button asChild variant="outline" className="w-full">
                <Link to="/contact">Get Quote</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="border-none shadow-xl overflow-hidden hover:shadow-2xl transition-shadow">
            <div 
              className="h-48 bg-cover bg-center relative"
              style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2073&auto=format&fit=crop')"
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-2xl font-bold text-white mb-1">Mississauga</h3>
                <p className="text-white/90 text-sm">Residential & Commercial</p>
              </div>
            </div>
            <CardContent className="pt-6 pb-6">
              <p className="text-muted-foreground text-sm mb-4">
                Complete siding solutions for homes and businesses throughout Mississauga.
              </p>
              <Button asChild variant="outline" className="w-full">
                <Link to="/contact">Get Quote</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="border-none shadow-xl overflow-hidden hover:shadow-2xl transition-shadow">
            <div 
              className="h-48 bg-cover bg-center relative"
              style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=2070&auto=format&fit=crop')"
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-2xl font-bold text-white mb-1">Vaughan</h3>
                <p className="text-white/90 text-sm">North GTA Coverage</p>
              </div>
            </div>
            <CardContent className="pt-6 pb-6">
              <p className="text-muted-foreground text-sm mb-4">
                Expert siding services for Vaughan and surrounding North GTA communities.
              </p>
              <Button asChild variant="outline" className="w-full">
                <Link to="/contact">Get Quote</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>

    {/* CTA Section */}
    <section className="py-16 bg-gradient-to-br from-muted/50 to-muted/20">
      <div className="container mx-auto max-w-4xl">
        <div className="bg-gradient-to-br from-primary to-primary/90 rounded-2xl p-12 shadow-xl text-primary-foreground text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Don't See Your Area?</h2>
          <p className="text-primary-foreground/90 mb-8 text-lg max-w-2xl mx-auto">
            We're constantly expanding our service coverage. Contact us today to check if we serve your location!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-secondary text-secondary-foreground hover:bg-amber-dark px-10 py-6 text-lg shadow-lg">
              <Link to="/contact">
                <Phone className="mr-2 h-5 w-5" />
                Contact Us Now
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-white hover:bg-secondary hover:text-white text-primary px-10 py-6 text-lg shadow-lg">
              <Link to="/services">View Services</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>

    <Footer />
  </div>
);

export default ServiceAreas;
