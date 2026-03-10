import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTABanner from "@/components/CTABanner";
import { Check, Shield, Clock, Award, Hammer, Home, Sparkles, Layers, TreePine, Building2 } from "lucide-react";
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
  <ServicePageLayout
    title="Siding Repair & Replacement"
    subtitle="Fast, reliable siding repair services across the GTA"
    description={[
      "Damaged or aging siding can compromise your home's protection and curb appeal. Our repair team quickly diagnoses issues and provides cost-effective solutions to restore your siding.",
      "Whether it's storm damage, moisture issues, or general wear and tear, we have the expertise to fix it. We match existing materials and colors for a seamless repair.",
    ]}
    features={[
      "Emergency repair services",
      "Storm damage assessment",
      "Color & material matching",
      "Moisture damage repair",
      "Partial panel replacement",
      "Full siding replacement",
      "Insurance claim assistance",
      "Same-day estimates",
    ]}
  />
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
