import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTABanner from "@/components/CTABanner";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

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
  <ServicePageLayout
    title="Siding Installation"
    subtitle="Professional siding installation for homes and businesses"
    description={[
      "Our expert team provides top-quality siding installation using premium materials including vinyl, cedar, and fiber cement. We handle everything from initial consultation to final cleanup.",
      "Every installation begins with a thorough inspection of your property, followed by precise measurements and material selection. Our licensed professionals ensure a perfect fit and finish that will protect your home for decades.",
    ]}
    features={[
      "Free on-site consultation",
      "Premium material selection",
      "Professional installation crew",
      "Weather barrier installation",
      "Trim & finishing work",
      "Complete site cleanup",
      "Manufacturer warranty",
      "Workmanship guarantee",
    ]}
  />
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
