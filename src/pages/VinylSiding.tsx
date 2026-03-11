import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Check, Shield, DollarSign, Palette, Zap, Home, Sparkles, Clock, TrendingUp, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const VinylSiding = () => (
  <div className="min-h-screen">
    <Navbar />
    
    {/* Hero Section */}
    <section className="relative py-32 overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?q=80&w=2070&auto=format&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-primary/85"></div>
      </div>
      
      <div className="container mx-auto text-center relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6">Vinyl Siding</h1>
        <p className="text-primary-foreground/90 text-lg md:text-xl max-w-2xl mx-auto">
          Durable, low-maintenance, and cost-effective siding solution
        </p>
      </div>
    </section>

    {/* Main Description */}
    <section className="py-20 bg-background">
      <div className="container mx-auto max-w-4xl">
        <p className="text-muted-foreground mb-4 text-lg leading-relaxed">
          Vinyl siding is one of the most popular exterior cladding options for homes across North America. It offers exceptional durability, requires minimal maintenance, and comes in a wide variety of colors and styles.
        </p>
        <p className="text-muted-foreground mb-4 text-lg leading-relaxed">
          Our premium vinyl siding products are engineered to withstand harsh weather conditions while maintaining their appearance for decades. With proper installation, vinyl siding can last 20-40 years.
        </p>
      </div>
    </section>

    {/* Why Choose Vinyl - Top Benefits */}
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Top Benefits</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">Why Choose Vinyl Siding</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">The smart choice for homeowners seeking value and performance</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-background rounded-xl p-6 shadow-lg hover:shadow-xl transition-all text-center">
            <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mx-auto mb-4">
              <DollarSign className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-lg font-bold text-foreground mb-2">Cost-Effective</h3>
            <p className="text-muted-foreground text-sm">
              Affordable installation with long-term savings
            </p>
          </div>

          <div className="bg-background rounded-xl p-6 shadow-lg hover:shadow-xl transition-all text-center">
            <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center mx-auto mb-4">
              <Zap className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-lg font-bold text-foreground mb-2">Low Maintenance</h3>
            <p className="text-muted-foreground text-sm">
              Never needs painting or staining
            </p>
          </div>

          <div className="bg-background rounded-xl p-6 shadow-lg hover:shadow-xl transition-all text-center">
            <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center mx-auto mb-4">
              <Shield className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-lg font-bold text-foreground mb-2">Weather Resistant</h3>
            <p className="text-muted-foreground text-sm">
              Withstands harsh weather conditions
            </p>
          </div>

          <div className="bg-background rounded-xl p-6 shadow-lg hover:shadow-xl transition-all text-center">
            <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center mx-auto mb-4">
              <Palette className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-lg font-bold text-foreground mb-2">Wide Color Range</h3>
            <p className="text-muted-foreground text-sm">
              Dozens of colors and styles available
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Vinyl Siding Styles with Images */}
    <section className="py-16 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Style Options</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">Popular Vinyl Siding Styles</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Choose the perfect look for your home</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="border-none shadow-xl overflow-hidden hover:shadow-2xl transition-shadow">
            <div 
              className="h-48 bg-cover bg-center relative"
              style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2073&auto=format&fit=crop')"
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-lg gradient-amber flex items-center justify-center">
                    <Home className="h-5 w-5 text-secondary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Horizontal Lap Siding</h3>
                </div>
              </div>
            </div>
            <CardContent className="pt-6 pb-6">
              <p className="text-muted-foreground mb-4">
                Classic overlapping boards that create a traditional look. Available in various widths from 4" to 12".
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm">
                  <Check className="h-4 w-4 text-secondary mt-0.5 shrink-0" />
                  <span>Traditional American style</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <Check className="h-4 w-4 text-secondary mt-0.5 shrink-0" />
                  <span>Multiple width options</span>
                </li>
              </ul>
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
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-lg gradient-amber flex items-center justify-center">
                    <Sparkles className="h-5 w-5 text-secondary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Vertical Siding</h3>
                </div>
              </div>
            </div>
            <CardContent className="pt-6 pb-6">
              <p className="text-muted-foreground mb-4">
                Modern vertical panels that add height and contemporary style to your home's exterior.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm">
                  <Check className="h-4 w-4 text-secondary mt-0.5 shrink-0" />
                  <span>Contemporary appearance</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <Check className="h-4 w-4 text-secondary mt-0.5 shrink-0" />
                  <span>Makes homes look taller</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-none shadow-xl overflow-hidden hover:shadow-2xl transition-shadow">
            <div 
              className="h-48 bg-cover bg-center relative"
              style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop')"
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-lg gradient-amber flex items-center justify-center">
                    <Award className="h-5 w-5 text-secondary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Shake & Shingle</h3>
                </div>
              </div>
            </div>
            <CardContent className="pt-6 pb-6">
              <p className="text-muted-foreground mb-4">
                Textured panels that mimic the look of cedar shakes without the maintenance requirements.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm">
                  <Check className="h-4 w-4 text-secondary mt-0.5 shrink-0" />
                  <span>Rustic wood appearance</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <Check className="h-4 w-4 text-secondary mt-0.5 shrink-0" />
                  <span>No wood maintenance needed</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-none shadow-xl overflow-hidden hover:shadow-2xl transition-shadow">
            <div 
              className="h-48 bg-cover bg-center relative"
              style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop')"
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-lg gradient-amber flex items-center justify-center">
                    <Clock className="h-5 w-5 text-secondary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Board & Batten</h3>
                </div>
              </div>
            </div>
            <CardContent className="pt-6 pb-6">
              <p className="text-muted-foreground mb-4">
                Rustic farmhouse style with wide boards and narrow battens for a distinctive appearance.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm">
                  <Check className="h-4 w-4 text-secondary mt-0.5 shrink-0" />
                  <span>Farmhouse aesthetic</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <Check className="h-4 w-4 text-secondary mt-0.5 shrink-0" />
                  <span>Bold, distinctive look</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>

    {/* Value Proposition */}
    <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Investment Value</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">Smart Investment for Your Home</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mx-auto mb-6 shadow-lg">
              <TrendingUp className="h-10 w-10 text-white" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">Increases Home Value</h3>
            <p className="text-muted-foreground">
              Vinyl siding can recoup up to 80% of installation costs in increased home value.
            </p>
          </div>

          <div className="text-center">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center mx-auto mb-6 shadow-lg">
              <DollarSign className="h-10 w-10 text-white" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">Energy Savings</h3>
            <p className="text-muted-foreground">
              Insulated vinyl siding reduces heating and cooling costs by improving thermal efficiency.
            </p>
          </div>

          <div className="text-center">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center mx-auto mb-6 shadow-lg">
              <Clock className="h-10 w-10 text-white" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">Long Lifespan</h3>
            <p className="text-muted-foreground">
              Quality vinyl siding lasts 20-40 years with minimal maintenance required.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* CTA Section */}
    <section className="py-16 bg-background">
      <div className="container mx-auto max-w-4xl">
        <div className="bg-gradient-to-br from-primary to-primary/90 rounded-2xl p-12 shadow-xl text-primary-foreground text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Home?</h2>
          <p className="text-primary-foreground/90 mb-8 text-lg max-w-2xl mx-auto">
            Get a free consultation and quote for your vinyl siding project. Our experts will help you choose the perfect style and color.
          </p>
          <Button asChild size="lg" className="bg-secondary text-secondary-foreground hover:bg-amber-dark px-10 py-6 text-lg shadow-lg">
            <Link to="/contact">Get Free Quote</Link>
          </Button>
        </div>
      </div>
    </section>

    <Footer />
  </div>
);

export default VinylSiding;
