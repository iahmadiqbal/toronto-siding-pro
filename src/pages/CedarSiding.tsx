import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Check, TreePine, Heart, Leaf, Award, Sparkles, Paintbrush, Shield, Sun, Droplets, Wind } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CedarSiding = () => (
  <div className="min-h-screen">
    <Navbar />
    
    {/* Hero Section */}
    <section className="relative py-32 overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-primary/85"></div>
      </div>
      
      <div className="container mx-auto text-center relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6">Cedar Siding</h1>
        <p className="text-primary-foreground/90 text-lg md:text-xl max-w-2xl mx-auto">
          Natural beauty and timeless elegance for your home
        </p>
      </div>
    </section>

    {/* Main Description */}
    <section className="py-20 bg-background">
      <div className="container mx-auto max-w-4xl">
        <p className="text-muted-foreground mb-4 text-lg leading-relaxed">
          Cedar siding offers unmatched natural beauty with its rich wood grain patterns and warm tones. It's a premium choice for homeowners who value authentic materials and classic aesthetics.
        </p>
        <p className="text-muted-foreground mb-4 text-lg leading-relaxed">
          Western Red Cedar is naturally resistant to rot, decay, and insect damage. It provides excellent insulation properties and can last 30+ years with proper maintenance.
        </p>
      </div>
    </section>

    {/* Natural Advantages */}
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Natural Excellence</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">Why Choose Cedar Siding</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Premium wood siding with unmatched character</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-background rounded-xl p-6 shadow-lg hover:shadow-xl transition-all text-center">
            <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-amber-600 to-amber-700 flex items-center justify-center mx-auto mb-4">
              <Heart className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-lg font-bold text-foreground mb-2">Natural Beauty</h3>
            <p className="text-muted-foreground text-sm">
              Unique wood grain and warm tones
            </p>
          </div>

          <div className="bg-background rounded-xl p-6 shadow-lg hover:shadow-xl transition-all text-center">
            <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-green-600 to-green-700 flex items-center justify-center mx-auto mb-4">
              <Leaf className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-lg font-bold text-foreground mb-2">Eco-Friendly</h3>
            <p className="text-muted-foreground text-sm">
              Renewable and sustainable resource
            </p>
          </div>

          <div className="bg-background rounded-xl p-6 shadow-lg hover:shadow-xl transition-all text-center">
            <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center mx-auto mb-4">
              <TreePine className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-lg font-bold text-foreground mb-2">Natural Insulation</h3>
            <p className="text-muted-foreground text-sm">
              Superior thermal properties
            </p>
          </div>

          <div className="bg-background rounded-xl p-6 shadow-lg hover:shadow-xl transition-all text-center">
            <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-600 to-purple-700 flex items-center justify-center mx-auto mb-4">
              <Shield className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-lg font-bold text-foreground mb-2">Naturally Resistant</h3>
            <p className="text-muted-foreground text-sm">
              Resists rot, decay, and insects
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Cedar Finish Options with Images */}
    <section className="py-16 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Finish Options</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">Cedar Finishing Choices</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Customize your cedar siding appearance</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="border-none shadow-xl overflow-hidden hover:shadow-2xl transition-shadow">
            <div 
              className="h-48 bg-cover bg-center relative"
              style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070&auto=format&fit=crop')"
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-lg gradient-amber flex items-center justify-center">
                    <Sparkles className="h-5 w-5 text-secondary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Natural Finish</h3>
                </div>
              </div>
            </div>
            <CardContent className="pt-6 pb-6">
              <p className="text-muted-foreground mb-4">
                Let cedar age naturally to a beautiful silver-gray patina. Requires minimal maintenance and showcases authentic character.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm">
                  <Check className="h-4 w-4 text-secondary mt-0.5 shrink-0" />
                  <span>Authentic weathered look</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <Check className="h-4 w-4 text-secondary mt-0.5 shrink-0" />
                  <span>Low maintenance required</span>
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
                    <Paintbrush className="h-5 w-5 text-secondary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Stained Cedar</h3>
                </div>
              </div>
            </div>
            <CardContent className="pt-6 pb-6">
              <p className="text-muted-foreground mb-4">
                Semi-transparent or solid stains enhance the wood grain while providing UV protection and color consistency.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm">
                  <Check className="h-4 w-4 text-secondary mt-0.5 shrink-0" />
                  <span>Enhances natural grain</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <Check className="h-4 w-4 text-secondary mt-0.5 shrink-0" />
                  <span>UV protection included</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-none shadow-xl overflow-hidden hover:shadow-2xl transition-shadow">
            <div 
              className="h-48 bg-cover bg-center relative"
              style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1600607687644-c7171b42498f?q=80&w=2070&auto=format&fit=crop')"
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-lg gradient-amber flex items-center justify-center">
                    <Shield className="h-5 w-5 text-secondary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Clear Sealant</h3>
                </div>
              </div>
            </div>
            <CardContent className="pt-6 pb-6">
              <p className="text-muted-foreground mb-4">
                Preserve the natural honey color with clear protective sealants that guard against moisture and UV damage.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm">
                  <Check className="h-4 w-4 text-secondary mt-0.5 shrink-0" />
                  <span>Maintains natural color</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <Check className="h-4 w-4 text-secondary mt-0.5 shrink-0" />
                  <span>Moisture protection</span>
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
                    <Award className="h-5 w-5 text-secondary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Painted Cedar</h3>
                </div>
              </div>
            </div>
            <CardContent className="pt-6 pb-6">
              <p className="text-muted-foreground mb-4">
                High-quality exterior paint provides maximum protection and allows for any color choice to match your design vision.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm">
                  <Check className="h-4 w-4 text-secondary mt-0.5 shrink-0" />
                  <span>Any color available</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <Check className="h-4 w-4 text-secondary mt-0.5 shrink-0" />
                  <span>Maximum protection</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>

    {/* Cedar Performance Features */}
    <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Performance Features</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">Cedar's Natural Advantages</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center mx-auto mb-6 shadow-lg">
              <Sun className="h-10 w-10 text-white" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">UV Resistance</h3>
            <p className="text-muted-foreground">
              Natural oils in cedar provide inherent UV protection, helping maintain color and integrity over time.
            </p>
          </div>

          <div className="text-center">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mx-auto mb-6 shadow-lg">
              <Droplets className="h-10 w-10 text-white" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">Moisture Control</h3>
            <p className="text-muted-foreground">
              Cedar naturally repels moisture and resists warping, making it ideal for humid climates.
            </p>
          </div>

          <div className="text-center">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center mx-auto mb-6 shadow-lg">
              <Wind className="h-10 w-10 text-white" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">Dimensional Stability</h3>
            <p className="text-muted-foreground">
              Low shrinkage rate means cedar maintains its shape and size through temperature changes.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* CTA Section */}
    <section className="py-16 bg-background">
      <div className="container mx-auto max-w-4xl">
        <div className="bg-gradient-to-br from-primary to-primary/90 rounded-2xl p-12 shadow-xl text-primary-foreground text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience Natural Beauty</h2>
          <p className="text-primary-foreground/90 mb-8 text-lg max-w-2xl mx-auto">
            Transform your home with the timeless elegance of cedar siding. Get a free consultation and discover the perfect finish for your project.
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

export default CedarSiding;
