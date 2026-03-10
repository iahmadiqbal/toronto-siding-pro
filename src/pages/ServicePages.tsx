import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTABanner from "@/components/CTABanner";
import { Check, Shield, Clock, Award, Hammer, Home, Sparkles, Layers, TreePine, Building2, Wrench, AlertTriangle, Zap, Phone, FileText, DollarSign } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface ServicePageProps {
  title: string;
  subtitle: string;
  description: string[];
  features: string[];
}

const ServicePageLayout = ({ title, subtitle, description, features }: ServicePageProps) => (
  <div className="min-h-screen">
    <Navbar />
    <section className="gradient-navy py-20">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">{title}</h1>
        <p className="text-primary-foreground/70 max-w-2xl mx-auto">{subtitle}</p>
      </div>
    </section>
    <section className="py-20 bg-background">
      <div className="container mx-auto max-w-4xl">
        {description.map((p, i) => (
          <p key={i} className="text-muted-foreground mb-4 text-lg leading-relaxed">{p}</p>
        ))}
        <div className="mt-10 bg-muted rounded-2xl p-8">
          <h3 className="text-xl font-bold text-foreground mb-6">What's Included</h3>
          <div className="grid sm:grid-cols-2 gap-3">
            {features.map((f) => (
              <div key={f} className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full gradient-amber flex items-center justify-center shrink-0">
                  <Check className="h-3.5 w-3.5 text-secondary-foreground" />
                </div>
                <span className="text-foreground text-sm">{f}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-10 text-center">
          <Button asChild size="lg" className="bg-secondary text-secondary-foreground hover:bg-amber-dark">
            <Link to="/contact">Get a Free Quote</Link>
          </Button>
        </div>
      </div>
    </section>
    <CTABanner />
    <Footer />
  </div>
);

export const SidingInstallation = () => (
  <div className="min-h-screen">
    <Navbar />
    
    {/* Hero Section with Background Image */}
    <section className="relative py-32 overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2073&auto=format&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-primary/80"></div>
      </div>
      <div className="container mx-auto text-center relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6">Siding Installation</h1>
        <p className="text-primary-foreground/90 max-w-2xl mx-auto text-lg md:text-xl">Professional siding installation for homes and businesses</p>
      </div>
    </section>

    {/* Main Description */}
    <section className="py-20 bg-background">
      <div className="container mx-auto max-w-4xl">
        <p className="text-muted-foreground mb-4 text-lg leading-relaxed">
          Our expert team provides top-quality siding installation using premium materials including vinyl, cedar, and fiber cement. We handle everything from initial consultation to final cleanup.
        </p>
        <p className="text-muted-foreground mb-4 text-lg leading-relaxed">
          Every installation begins with a thorough inspection of your property, followed by precise measurements and material selection. Our licensed professionals ensure a perfect fit and finish that will protect your home for decades.
        </p>
      </div>
    </section>

    {/* Why Choose Our Installation Service */}
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Why Choose Our Installation Service</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">We deliver excellence in every aspect of siding installation</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="pt-8 text-center">
              <div className="w-16 h-16 rounded-full gradient-amber flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-secondary-foreground" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Quality Guaranteed</h3>
              <p className="text-muted-foreground">
                We use only premium materials and provide comprehensive warranties on both materials and workmanship for your peace of mind.
              </p>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="pt-8 text-center">
              <div className="w-16 h-16 rounded-full gradient-amber flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-secondary-foreground" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">On-Time Completion</h3>
              <p className="text-muted-foreground">
                We respect your time and schedule. Our efficient team completes projects on time without compromising quality or attention to detail.
              </p>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="pt-8 text-center">
              <div className="w-16 h-16 rounded-full gradient-amber flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-secondary-foreground" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Expert Craftsmen</h3>
              <p className="text-muted-foreground">
                Our licensed and insured professionals have years of experience, ensuring flawless installation that stands the test of time.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>

    {/* Installation Process */}
    <section className="py-20 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5"></div>
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">How We Work</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">Our Installation Process</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">A seamless journey from consultation to completion</p>
        </div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-secondary via-secondary to-secondary opacity-20" style={{ top: '80px' }}></div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Step 1 */}
            <div className="relative">
              <div className="bg-background rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border-2 border-transparent hover:border-secondary/30 h-full">
                <div className="flex flex-col items-center text-center">
                  <div className="relative mb-6">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-secondary to-amber-600 flex items-center justify-center shadow-lg">
                      <Home className="h-10 w-10 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-10 h-10 rounded-full gradient-amber flex items-center justify-center text-secondary-foreground font-bold text-lg shadow-md">
                      1
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">Free Consultation</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    We visit your property, assess your needs, and provide expert recommendations tailored to your home's unique requirements.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative lg:mt-12">
              <div className="bg-background rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border-2 border-transparent hover:border-secondary/30 h-full">
                <div className="flex flex-col items-center text-center">
                  <div className="relative mb-6">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-secondary to-amber-600 flex items-center justify-center shadow-lg">
                      <Sparkles className="h-10 w-10 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-10 h-10 rounded-full gradient-amber flex items-center justify-center text-secondary-foreground font-bold text-lg shadow-md">
                      2
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">Material Selection</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Choose from our wide range of premium siding materials, colors, and styles that perfectly match your vision and budget.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative">
              <div className="bg-background rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border-2 border-transparent hover:border-secondary/30 h-full">
                <div className="flex flex-col items-center text-center">
                  <div className="relative mb-6">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-secondary to-amber-600 flex items-center justify-center shadow-lg">
                      <Hammer className="h-10 w-10 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-10 h-10 rounded-full gradient-amber flex items-center justify-center text-secondary-foreground font-bold text-lg shadow-md">
                      3
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">Professional Installation</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Our skilled team installs your siding with precision, ensuring perfect alignment, weatherproofing, and lasting quality.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="relative lg:mt-12">
              <div className="bg-background rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border-2 border-transparent hover:border-secondary/30 h-full">
                <div className="flex flex-col items-center text-center">
                  <div className="relative mb-6">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-secondary to-amber-600 flex items-center justify-center shadow-lg">
                      <Check className="h-10 w-10 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-10 h-10 rounded-full gradient-amber flex items-center justify-center text-secondary-foreground font-bold text-lg shadow-md">
                      4
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">Final Inspection</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    We conduct a thorough walkthrough, ensure your complete satisfaction, and leave your property spotless.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Siding Material Options */}
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Premium Siding Materials</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Choose the perfect material for your home's protection and beauty</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="border-none shadow-lg overflow-hidden">
            <div 
              className="h-48 bg-cover bg-center relative"
              style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?q=80&w=2070&auto=format&fit=crop')"
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20 flex items-end justify-center pb-4">
                <p className="text-xl font-bold text-white">Vinyl Siding</p>
              </div>
            </div>
            <CardContent className="pt-6">
              <h3 className="text-xl font-bold text-foreground mb-3">Vinyl Siding</h3>
              <p className="text-muted-foreground mb-4">
                Durable, low-maintenance, and cost-effective. Available in a wide range of colors and styles.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm">
                  <Check className="h-4 w-4 text-secondary mt-0.5 shrink-0" />
                  <span>Weather resistant</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <Check className="h-4 w-4 text-secondary mt-0.5 shrink-0" />
                  <span>Never needs painting</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <Check className="h-4 w-4 text-secondary mt-0.5 shrink-0" />
                  <span>Energy efficient</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg overflow-hidden">
            <div 
              className="h-48 bg-cover bg-center relative"
              style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop')"
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20 flex items-end justify-center pb-4">
                <p className="text-xl font-bold text-white">Cedar Siding</p>
              </div>
            </div>
            <CardContent className="pt-6">
              <h3 className="text-xl font-bold text-foreground mb-3">Cedar Siding</h3>
              <p className="text-muted-foreground mb-4">
                Natural beauty and timeless elegance. Perfect for traditional and modern homes alike.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm">
                  <Check className="h-4 w-4 text-secondary mt-0.5 shrink-0" />
                  <span>Natural insulation</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <Check className="h-4 w-4 text-secondary mt-0.5 shrink-0" />
                  <span>Unique wood grain</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <Check className="h-4 w-4 text-secondary mt-0.5 shrink-0" />
                  <span>Eco-friendly option</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg overflow-hidden">
            <div 
              className="h-48 bg-cover bg-center relative"
              style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop')"
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20 flex items-end justify-center pb-4">
                <p className="text-xl font-bold text-white">Fiber Cement</p>
              </div>
            </div>
            <CardContent className="pt-6">
              <h3 className="text-xl font-bold text-foreground mb-3">Fiber Cement</h3>
              <p className="text-muted-foreground mb-4">
                Maximum durability and fire resistance. Mimics wood appearance without the maintenance.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm">
                  <Check className="h-4 w-4 text-secondary mt-0.5 shrink-0" />
                  <span>Fire resistant</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <Check className="h-4 w-4 text-secondary mt-0.5 shrink-0" />
                  <span>Pest proof</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <Check className="h-4 w-4 text-secondary mt-0.5 shrink-0" />
                  <span>50+ year lifespan</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>

    {/* What's Included */}
    <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Complete Package</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">What's Included in Every Installation</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">Comprehensive service from start to finish with no hidden costs</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-background rounded-xl p-8 shadow-lg border-l-4 border-secondary hover:shadow-xl transition-all">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-xl gradient-amber flex items-center justify-center shrink-0">
                <Shield className="h-7 w-7 text-secondary-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">Free On-Site Consultation</h3>
                <p className="text-muted-foreground">Our experts visit your property to assess your needs and provide personalized recommendations at no cost.</p>
              </div>
            </div>
          </div>

          <div className="bg-background rounded-xl p-8 shadow-lg border-l-4 border-secondary hover:shadow-xl transition-all">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-xl gradient-amber flex items-center justify-center shrink-0">
                <Sparkles className="h-7 w-7 text-secondary-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">Premium Material Selection</h3>
                <p className="text-muted-foreground">Choose from our extensive range of high-quality materials in various colors, styles, and finishes.</p>
              </div>
            </div>
          </div>

          <div className="bg-background rounded-xl p-8 shadow-lg border-l-4 border-secondary hover:shadow-xl transition-all">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-xl gradient-amber flex items-center justify-center shrink-0">
                <Award className="h-7 w-7 text-secondary-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">Professional Installation Crew</h3>
                <p className="text-muted-foreground">Licensed, insured, and experienced professionals handle your project with precision and care.</p>
              </div>
            </div>
          </div>

          <div className="bg-background rounded-xl p-8 shadow-lg border-l-4 border-secondary hover:shadow-xl transition-all">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-xl gradient-amber flex items-center justify-center shrink-0">
                <Shield className="h-7 w-7 text-secondary-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">Weather Barrier Installation</h3>
                <p className="text-muted-foreground">Complete moisture protection system to safeguard your home from the elements year-round.</p>
              </div>
            </div>
          </div>

          <div className="bg-background rounded-xl p-8 shadow-lg border-l-4 border-secondary hover:shadow-xl transition-all">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-xl gradient-amber flex items-center justify-center shrink-0">
                <Hammer className="h-7 w-7 text-secondary-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">Trim & Finishing Work</h3>
                <p className="text-muted-foreground">Meticulous attention to detail with perfect edges, corners, and finishing touches throughout.</p>
              </div>
            </div>
          </div>

          <div className="bg-background rounded-xl p-8 shadow-lg border-l-4 border-secondary hover:shadow-xl transition-all">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-xl gradient-amber flex items-center justify-center shrink-0">
                <Sparkles className="h-7 w-7 text-secondary-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">Complete Site Cleanup</h3>
                <p className="text-muted-foreground">We leave your property spotless, removing all debris and materials when the job is complete.</p>
              </div>
            </div>
          </div>

          <div className="bg-background rounded-xl p-8 shadow-lg border-l-4 border-secondary hover:shadow-xl transition-all">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-xl gradient-amber flex items-center justify-center shrink-0">
                <Shield className="h-7 w-7 text-secondary-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">Manufacturer Warranty</h3>
                <p className="text-muted-foreground">Full material coverage included with comprehensive manufacturer warranties for peace of mind.</p>
              </div>
            </div>
          </div>

          <div className="bg-background rounded-xl p-8 shadow-lg border-l-4 border-secondary hover:shadow-xl transition-all">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-xl gradient-amber flex items-center justify-center shrink-0">
                <Award className="h-7 w-7 text-secondary-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">Workmanship Guarantee</h3>
                <p className="text-muted-foreground">Our quality installation is backed by our workmanship guarantee for your complete satisfaction.</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center bg-background rounded-2xl p-10 shadow-xl">
          <h3 className="text-2xl font-bold text-foreground mb-4">Ready to Get Started?</h3>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">Contact us today for a free consultation and quote. Transform your home with professional siding installation.</p>
          <Button asChild size="lg" className="bg-secondary text-secondary-foreground hover:bg-amber-dark px-10 py-6 text-lg shadow-lg">
            <Link to="/contact">Get a Free Quote</Link>
          </Button>
        </div>
      </div>
    </section>

    <Footer />
  </div>
);

export const SidingRepair = () => (
  <div className="min-h-screen">
    <Navbar />
    
    {/* Hero Section with Background Image */}
    <section className="relative py-32 overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1621905251918-48416bd8575a?q=80&w=2069&auto=format&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-primary/80"></div>
      </div>
      <div className="container mx-auto text-center relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6">Siding Repair & Replacement</h1>
        <p className="text-primary-foreground/90 max-w-2xl mx-auto text-lg md:text-xl">Fast, reliable siding repair services across the GTA</p>
      </div>
    </section>

    {/* Main Description */}
    <section className="py-20 bg-background">
      <div className="container mx-auto max-w-4xl">
        <p className="text-muted-foreground mb-4 text-lg leading-relaxed">
          Damaged or aging siding can compromise your home's protection and curb appeal. Our repair team quickly diagnoses issues and provides cost-effective solutions to restore your siding.
        </p>
        <p className="text-muted-foreground mb-4 text-lg leading-relaxed">
          Whether it's storm damage, moisture issues, or general wear and tear, we have the expertise to fix it. We match existing materials and colors for a seamless repair.
        </p>
      </div>
    </section>

    {/* Common Siding Problems We Fix */}
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Expert Solutions</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">Common Siding Problems We Fix</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">From minor repairs to complete replacements, we handle it all</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="border-none shadow-lg hover:shadow-xl transition-all">
            <CardContent className="pt-8 pb-6">
              <div className="w-16 h-16 rounded-xl bg-red-500/10 flex items-center justify-center mx-auto mb-4">
                <AlertTriangle className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2 text-center">Storm Damage</h3>
              <p className="text-muted-foreground text-sm text-center">
                Wind, hail, and debris damage from severe weather conditions requiring immediate attention.
              </p>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg hover:shadow-xl transition-all">
            <CardContent className="pt-8 pb-6">
              <div className="w-16 h-16 rounded-xl bg-blue-500/10 flex items-center justify-center mx-auto mb-4">
                <Layers className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2 text-center">Cracked Panels</h3>
              <p className="text-muted-foreground text-sm text-center">
                Broken or cracked siding panels that compromise your home's weather protection.
              </p>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg hover:shadow-xl transition-all">
            <CardContent className="pt-8 pb-6">
              <div className="w-16 h-16 rounded-xl bg-purple-500/10 flex items-center justify-center mx-auto mb-4">
                <Wrench className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2 text-center">Loose Siding</h3>
              <p className="text-muted-foreground text-sm text-center">
                Panels that have come loose or detached, creating gaps and potential water entry.
              </p>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg hover:shadow-xl transition-all">
            <CardContent className="pt-8 pb-6">
              <div className="w-16 h-16 rounded-xl bg-amber-500/10 flex items-center justify-center mx-auto mb-4">
                <AlertTriangle className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2 text-center">Water Damage</h3>
              <p className="text-muted-foreground text-sm text-center">
                Moisture infiltration causing rot, mold, and structural issues behind the siding.
              </p>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg hover:shadow-xl transition-all">
            <CardContent className="pt-8 pb-6">
              <div className="w-16 h-16 rounded-xl bg-green-500/10 flex items-center justify-center mx-auto mb-4">
                <Sparkles className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2 text-center">Fading & Discoloration</h3>
              <p className="text-muted-foreground text-sm text-center">
                UV damage and weathering causing unsightly color changes and reduced curb appeal.
              </p>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg hover:shadow-xl transition-all">
            <CardContent className="pt-8 pb-6">
              <div className="w-16 h-16 rounded-xl bg-slate-500/10 flex items-center justify-center mx-auto mb-4">
                <Building2 className="h-8 w-8 text-slate-600" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2 text-center">Warping & Buckling</h3>
              <p className="text-muted-foreground text-sm text-center">
                Heat and moisture causing panels to warp, buckle, or become misaligned.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>

    {/* Our Repair Process */}
    <section className="py-16 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Fast & Efficient</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">Our Repair Process</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Quick turnaround without compromising quality</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="relative">
            <div className="bg-gradient-to-br from-secondary/10 to-secondary/5 rounded-2xl p-8 h-full border-2 border-secondary/20">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg gradient-amber flex items-center justify-center shrink-0">
                  <Phone className="h-6 w-6 text-secondary-foreground" />
                </div>
                <div className="w-10 h-10 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center font-bold text-lg">
                  1
                </div>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Contact & Assessment</h3>
              <p className="text-muted-foreground">
                Call us for emergency or scheduled service. We provide same-day estimates and quick response times for urgent repairs.
              </p>
            </div>
          </div>

          <div className="relative md:mt-8">
            <div className="bg-gradient-to-br from-secondary/10 to-secondary/5 rounded-2xl p-8 h-full border-2 border-secondary/20">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg gradient-amber flex items-center justify-center shrink-0">
                  <FileText className="h-6 w-6 text-secondary-foreground" />
                </div>
                <div className="w-10 h-10 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center font-bold text-lg">
                  2
                </div>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Diagnosis & Quote</h3>
              <p className="text-muted-foreground">
                Our experts inspect the damage, identify the root cause, and provide a detailed quote with repair options.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-secondary/10 to-secondary/5 rounded-2xl p-8 h-full border-2 border-secondary/20">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg gradient-amber flex items-center justify-center shrink-0">
                  <Wrench className="h-6 w-6 text-secondary-foreground" />
                </div>
                <div className="w-10 h-10 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center font-bold text-lg">
                  3
                </div>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Expert Repair</h3>
              <p className="text-muted-foreground">
                We complete the repair with precision, matching materials and colors perfectly for a seamless finish.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Why Choose Our Repair Service */}
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Why Choose Our Repair Service</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="flex items-start gap-4 bg-background p-6 rounded-xl shadow-md">
            <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center shrink-0">
              <Zap className="h-6 w-6 text-secondary" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-foreground mb-2">Emergency Services Available</h3>
              <p className="text-muted-foreground text-sm">24/7 emergency response for urgent repairs that can't wait.</p>
            </div>
          </div>

          <div className="flex items-start gap-4 bg-background p-6 rounded-xl shadow-md">
            <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center shrink-0">
              <Sparkles className="h-6 w-6 text-secondary" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-foreground mb-2">Perfect Color Matching</h3>
              <p className="text-muted-foreground text-sm">We match your existing siding color and texture for invisible repairs.</p>
            </div>
          </div>

          <div className="flex items-start gap-4 bg-background p-6 rounded-xl shadow-md">
            <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center shrink-0">
              <DollarSign className="h-6 w-6 text-secondary" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-foreground mb-2">Insurance Claim Assistance</h3>
              <p className="text-muted-foreground text-sm">We help you navigate insurance claims for storm and weather damage.</p>
            </div>
          </div>

          <div className="flex items-start gap-4 bg-background p-6 rounded-xl shadow-md">
            <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center shrink-0">
              <Clock className="h-6 w-6 text-secondary" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-foreground mb-2">Same-Day Estimates</h3>
              <p className="text-muted-foreground text-sm">Fast quotes so you can make informed decisions quickly.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* CTA Section */}
    <section className="py-16 bg-background">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center bg-gradient-to-br from-primary to-primary/90 rounded-2xl p-12 shadow-xl text-primary-foreground">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Need Siding Repair?</h2>
          <p className="text-primary-foreground/90 mb-8 text-lg max-w-2xl mx-auto">
            Don't let damaged siding compromise your home's protection. Get a free estimate today and restore your home's beauty and safety.
          </p>
          <Button asChild size="lg" className="bg-secondary text-secondary-foreground hover:bg-amber-dark px-10 py-6 text-lg shadow-lg">
            <Link to="/contact">Get Free Estimate</Link>
          </Button>
        </div>
      </div>
    </section>

    <Footer />
  </div>
);

export const ResidentialSiding = () => (
  <ServicePageLayout
    title="Residential Siding"
    subtitle="Transform your home's exterior with beautiful new siding"
    description={[
      "Your home deserves the best protection and aesthetic appeal. Our residential siding services cover everything from single-family homes to townhouses and condos across the Greater Toronto Area.",
      "We help homeowners choose the perfect siding material, color, and style to complement their home's architecture while maximizing energy efficiency and weather resistance.",
    ]}
    features={[
      "Single-family homes",
      "Townhouses & semis",
      "Custom color matching",
      "Energy-efficient options",
      "Noise reduction solutions",
      "Curb appeal design",
      "HOA compliance",
      "Financing available",
    ]}
  />
);

export const CommercialSiding = () => (
  <ServicePageLayout
    title="Commercial Siding"
    subtitle="Professional siding solutions for commercial properties"
    description={[
      "First impressions matter for your business. Our commercial siding services deliver professional-grade exterior cladding for offices, retail spaces, warehouses, and multi-unit residential buildings.",
      "We understand the unique requirements of commercial projects including timelines, budgets, and building codes. Our team works efficiently to minimize disruption to your business operations.",
    ]}
    features={[
      "Office buildings",
      "Retail storefronts",
      "Warehouse & industrial",
      "Multi-unit residential",
      "Code compliance",
      "Minimal business disruption",
      "Project management",
      "Commercial warranties",
    ]}
  />
);
