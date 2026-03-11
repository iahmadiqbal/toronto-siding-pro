import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Check, Wind, Shield, Home, Droplets, Bug, Wrench, Sparkles, Thermometer, Leaf, CircleDot, Hammer } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const SoffitFascia = () => (
  <div className="min-h-screen">
    <Navbar />
    
    {/* Hero Section */}
    <section className="relative py-32 overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2069&auto=format&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-primary/85"></div>
      </div>
      
      <div className="container mx-auto text-center relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6">Soffit & Fascia</h1>
        <p className="text-primary-foreground/90 text-lg md:text-xl max-w-2xl mx-auto">
          Protect your roof edges and improve ventilation
        </p>
      </div>
    </section>

    {/* Main Description */}
    <section className="py-20 bg-background">
      <div className="container mx-auto max-w-4xl">
        <p className="text-muted-foreground mb-4 text-lg leading-relaxed">
          Soffit and fascia are essential components of your home's roofing system. The fascia is the vertical board along the roof edge, while the soffit is the underside of the roof overhang.
        </p>
        <p className="text-muted-foreground mb-4 text-lg leading-relaxed">
          Together, they protect your roof structure from moisture damage, provide proper attic ventilation, and give your home a finished, polished appearance.
        </p>
      </div>
    </section>

    {/* Key Benefits */}
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Essential Protection</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">Why Install Soffit & Fascia</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Critical components for roof health and home protection</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-background rounded-xl p-6 shadow-lg hover:shadow-xl transition-all text-center">
            <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mx-auto mb-4">
              <Wind className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-lg font-bold text-foreground mb-2">Proper Ventilation</h3>
            <p className="text-muted-foreground text-sm">
              Air circulation prevents moisture
            </p>
          </div>

          <div className="bg-background rounded-xl p-6 shadow-lg hover:shadow-xl transition-all text-center">
            <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center mx-auto mb-4">
              <Droplets className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-lg font-bold text-foreground mb-2">Moisture Protection</h3>
            <p className="text-muted-foreground text-sm">
              Prevents water damage
            </p>
          </div>

          <div className="bg-background rounded-xl p-6 shadow-lg hover:shadow-xl transition-all text-center">
            <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center mx-auto mb-4">
              <Bug className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-lg font-bold text-foreground mb-2">Pest Prevention</h3>
            <p className="text-muted-foreground text-sm">
              Seals entry points
            </p>
          </div>

          <div className="bg-background rounded-xl p-6 shadow-lg hover:shadow-xl transition-all text-center">
            <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center mx-auto mb-4">
              <Home className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-lg font-bold text-foreground mb-2">Curb Appeal</h3>
            <p className="text-muted-foreground text-sm">
              Clean, finished look
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Material Options with Images */}
    <section className="py-16 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Material Choices</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">Soffit & Fascia Materials</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Choose the right material for your home</p>
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
                    <Sparkles className="h-5 w-5 text-secondary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Vinyl Soffit & Fascia</h3>
                </div>
              </div>
            </div>
            <CardContent className="pt-6 pb-6">
              <p className="text-muted-foreground mb-4">
                Low-maintenance, weather-resistant, and available in various colors. Never needs painting and resists moisture damage.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm">
                  <Check className="h-4 w-4 text-secondary mt-0.5 shrink-0" />
                  <span>Never needs painting</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <Check className="h-4 w-4 text-secondary mt-0.5 shrink-0" />
                  <span>Multiple color options</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-none shadow-xl overflow-hidden hover:shadow-2xl transition-shadow">
            <div 
              className="h-48 bg-cover bg-center relative"
              style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=2070&auto=format&fit=crop')"
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-lg gradient-amber flex items-center justify-center">
                    <Shield className="h-5 w-5 text-secondary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Aluminum Soffit & Fascia</h3>
                </div>
              </div>
            </div>
            <CardContent className="pt-6 pb-6">
              <p className="text-muted-foreground mb-4">
                Durable metal option that won't rot or warp. Excellent for high-moisture areas and provides superior ventilation.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm">
                  <Check className="h-4 w-4 text-secondary mt-0.5 shrink-0" />
                  <span>Won't rot or warp</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <Check className="h-4 w-4 text-secondary mt-0.5 shrink-0" />
                  <span>Superior ventilation</span>
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
                    <Home className="h-5 w-5 text-secondary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Wood Soffit & Fascia</h3>
                </div>
              </div>
            </div>
            <CardContent className="pt-6 pb-6">
              <p className="text-muted-foreground mb-4">
                Traditional option with natural beauty. Requires regular maintenance but offers authentic wood appearance.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm">
                  <Check className="h-4 w-4 text-secondary mt-0.5 shrink-0" />
                  <span>Natural wood beauty</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <Check className="h-4 w-4 text-secondary mt-0.5 shrink-0" />
                  <span>Can be painted any color</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-none shadow-xl overflow-hidden hover:shadow-2xl transition-shadow">
            <div 
              className="h-48 bg-cover bg-center relative"
              style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop')"
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-lg gradient-amber flex items-center justify-center">
                    <Wrench className="h-5 w-5 text-secondary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Fiber Cement</h3>
                </div>
              </div>
            </div>
            <CardContent className="pt-6 pb-6">
              <p className="text-muted-foreground mb-4">
                Premium option with maximum durability. Fire-resistant, pest-proof, and can be painted any color.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm">
                  <Check className="h-4 w-4 text-secondary mt-0.5 shrink-0" />
                  <span>Fire-resistant material</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <Check className="h-4 w-4 text-secondary mt-0.5 shrink-0" />
                  <span>Maximum durability</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>

    {/* Ventilation Benefits */}
    <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Ventilation Benefits</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">Proper Attic Ventilation</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mx-auto mb-6 shadow-lg">
              <Thermometer className="h-10 w-10 text-white" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">Temperature Control</h3>
            <p className="text-muted-foreground">
              Vented soffits allow hot air to escape in summer, reducing cooling costs and extending roof life.
            </p>
          </div>

          <div className="text-center">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center mx-auto mb-6 shadow-lg">
              <Droplets className="h-10 w-10 text-white" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">Moisture Prevention</h3>
            <p className="text-muted-foreground">
              Proper airflow prevents condensation buildup that can lead to mold, mildew, and wood rot.
            </p>
          </div>

          <div className="text-center">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center mx-auto mb-6 shadow-lg">
              <Leaf className="h-10 w-10 text-white" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">Energy Efficiency</h3>
            <p className="text-muted-foreground">
              Balanced ventilation reduces strain on HVAC systems, lowering energy bills year-round.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* CTA Section */}
    <section className="py-16 bg-background">
      <div className="container mx-auto max-w-4xl">
        <div className="bg-gradient-to-br from-primary to-primary/90 rounded-2xl p-12 shadow-xl text-primary-foreground text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Protect Your Roof Investment</h2>
          <p className="text-primary-foreground/90 mb-8 text-lg max-w-2xl mx-auto">
            Quality soffit and fascia installation protects your home and improves ventilation. Get a free consultation today.
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

export default SoffitFascia;
