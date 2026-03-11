import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Check, Droplets, Home, Shield, Leaf, Zap, Ruler, Wrench, CloudRain, Waves, Mountain, Filter } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const GutterInstallation = () => (
  <div className="min-h-screen">
    <Navbar />
    
    {/* Hero Section */}
    <section className="relative py-32 overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2070&auto=format&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-primary/85"></div>
      </div>
      
      <div className="container mx-auto text-center relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6">Gutter Installation</h1>
        <p className="text-primary-foreground/90 text-lg md:text-xl max-w-2xl mx-auto">
          Protect your foundation with professional gutter systems
        </p>
      </div>
    </section>

    {/* Main Description */}
    <section className="py-20 bg-background">
      <div className="container mx-auto max-w-4xl">
        <p className="text-muted-foreground mb-4 text-lg leading-relaxed">
          A properly installed gutter system is essential for protecting your home's foundation, landscaping, and exterior from water damage. Our seamless gutters are custom-made on-site for a perfect fit.
        </p>
        <p className="text-muted-foreground mb-4 text-lg leading-relaxed">
          We offer a complete gutter solution including installation, downspouts, guards, and drainage systems to keep water flowing away from your home.
        </p>
      </div>
    </section>

    {/* Protection Benefits */}
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Home Protection</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">Why Install New Gutters</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Essential protection for your home's foundation and structure</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-background rounded-xl p-6 shadow-lg hover:shadow-xl transition-all text-center">
            <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mx-auto mb-4">
              <Home className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-lg font-bold text-foreground mb-2">Foundation Protection</h3>
            <p className="text-muted-foreground text-sm">
              Directs water away safely
            </p>
          </div>

          <div className="bg-background rounded-xl p-6 shadow-lg hover:shadow-xl transition-all text-center">
            <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center mx-auto mb-4">
              <Droplets className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-lg font-bold text-foreground mb-2">Prevents Water Damage</h3>
            <p className="text-muted-foreground text-sm">
              Protects siding and windows
            </p>
          </div>

          <div className="bg-background rounded-xl p-6 shadow-lg hover:shadow-xl transition-all text-center">
            <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center mx-auto mb-4">
              <Leaf className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-lg font-bold text-foreground mb-2">Protects Landscaping</h3>
            <p className="text-muted-foreground text-sm">
              Prevents soil erosion
            </p>
          </div>

          <div className="bg-background rounded-xl p-6 shadow-lg hover:shadow-xl transition-all text-center">
            <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center mx-auto mb-4">
              <Shield className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-lg font-bold text-foreground mb-2">Prevents Flooding</h3>
            <p className="text-muted-foreground text-sm">
              Keeps basements dry
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Gutter System Components with Images */}
    <section className="py-16 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Complete System</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">Gutter System Components</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Everything you need for complete water management</p>
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
                    <Ruler className="h-5 w-5 text-secondary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Seamless Gutters</h3>
                </div>
              </div>
            </div>
            <CardContent className="pt-6 pb-6">
              <p className="text-muted-foreground mb-4">
                Custom-fabricated on-site to exact measurements. No seams means no leaks and a cleaner appearance.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm">
                  <Check className="h-4 w-4 text-secondary mt-0.5 shrink-0" />
                  <span>Custom-made on-site</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <Check className="h-4 w-4 text-secondary mt-0.5 shrink-0" />
                  <span>No leaks or separations</span>
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
                    <Droplets className="h-5 w-5 text-secondary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Downspouts & Elbows</h3>
                </div>
              </div>
            </div>
            <CardContent className="pt-6 pb-6">
              <p className="text-muted-foreground mb-4">
                Properly sized and positioned downspouts to efficiently channel water away from your foundation.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm">
                  <Check className="h-4 w-4 text-secondary mt-0.5 shrink-0" />
                  <span>Strategic placement</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <Check className="h-4 w-4 text-secondary mt-0.5 shrink-0" />
                  <span>Efficient water flow</span>
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
                    <Shield className="h-5 w-5 text-secondary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Gutter Guards</h3>
                </div>
              </div>
            </div>
            <CardContent className="pt-6 pb-6">
              <p className="text-muted-foreground mb-4">
                Optional leaf protection systems that reduce cleaning frequency and prevent clogs from debris.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm">
                  <Check className="h-4 w-4 text-secondary mt-0.5 shrink-0" />
                  <span>Reduces maintenance</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <Check className="h-4 w-4 text-secondary mt-0.5 shrink-0" />
                  <span>Prevents clogs</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-none shadow-xl overflow-hidden hover:shadow-2xl transition-shadow">
            <div 
              className="h-48 bg-cover bg-center relative"
              style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop')"
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-lg gradient-amber flex items-center justify-center">
                    <Wrench className="h-5 w-5 text-secondary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Drainage Extensions</h3>
                </div>
              </div>
            </div>
            <CardContent className="pt-6 pb-6">
              <p className="text-muted-foreground mb-4">
                Underground or surface extensions to direct water far from your home's foundation and landscaping.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm">
                  <Check className="h-4 w-4 text-secondary mt-0.5 shrink-0" />
                  <span>Foundation protection</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <Check className="h-4 w-4 text-secondary mt-0.5 shrink-0" />
                  <span>Landscape preservation</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>

    {/* Water Management Benefits */}
    <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Water Management</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">Complete Water Control</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mx-auto mb-6 shadow-lg">
              <CloudRain className="h-10 w-10 text-white" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">Heavy Rain Protection</h3>
            <p className="text-muted-foreground">
              Properly sized gutters handle heavy rainfall, preventing overflow and water damage to your home.
            </p>
          </div>

          <div className="text-center">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center mx-auto mb-6 shadow-lg">
              <Waves className="h-10 w-10 text-white" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">Proper Slope & Pitch</h3>
            <p className="text-muted-foreground">
              Expert installation ensures optimal water flow toward downspouts without pooling or standing water.
            </p>
          </div>

          <div className="text-center">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center mx-auto mb-6 shadow-lg">
              <Mountain className="h-10 w-10 text-white" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">Durable Materials</h3>
            <p className="text-muted-foreground">
              Heavy-gauge aluminum or copper gutters withstand harsh weather and last for decades.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* CTA Section */}
    <section className="py-16 bg-background">
      <div className="container mx-auto max-w-4xl">
        <div className="bg-gradient-to-br from-primary to-primary/90 rounded-2xl p-12 shadow-xl text-primary-foreground text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Protect Your Home Investment</h2>
          <p className="text-primary-foreground/90 mb-8 text-lg max-w-2xl mx-auto">
            Professional gutter installation protects your foundation and prevents costly water damage. Get a free consultation today.
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

export default GutterInstallation;
