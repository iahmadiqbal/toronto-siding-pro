import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTABanner from "@/components/CTABanner";
import aboutTeam from "@/assets/about-team.jpg";
import { Shield, Award, Users, Clock } from "lucide-react";

const stats = [
  { icon: Award, value: "25+", label: "Years Experience" },
  { icon: Users, value: "5,000+", label: "Happy Clients" },
  { icon: Shield, value: "100%", label: "Licensed & Insured" },
  { icon: Clock, value: "24h", label: "Response Time" },
];

const About = () => (
  <div className="min-h-screen">
    <Navbar />
    <section className="gradient-navy py-20">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">About Toronto Siding</h1>
        <p className="text-primary-foreground/70 max-w-2xl mx-auto">Your trusted siding experts since 1998</p>
      </div>
    </section>
    <section className="py-20 bg-background">
      <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Our Story</span>
          <h2 className="text-3xl font-bold text-foreground mt-2 mb-6">Building Toronto's Most Beautiful Exteriors</h2>
          <p className="text-muted-foreground mb-4">Toronto Siding has been providing premium siding installation, repair, and replacement services across the Greater Toronto Area for over 25 years. Our team of skilled professionals is committed to transforming your property with the highest quality materials and expert craftsmanship.</p>
          <p className="text-muted-foreground mb-4">We specialize in vinyl, cedar, and fiber cement siding, along with soffit, fascia, and gutter installation. Whether you're a homeowner looking to boost curb appeal or a business needing commercial siding, we deliver results that exceed expectations.</p>
          <p className="text-muted-foreground">Every project starts with a free, no-obligation estimate. We believe in transparent pricing, honest communication, and workmanship you can trust.</p>
        </div>
        <div className="rounded-2xl overflow-hidden shadow-card">
          <img src={aboutTeam} alt="Toronto Siding Team at work" className="w-full h-auto" />
        </div>
      </div>
    </section>
    <section className="py-16 bg-muted">
      <div className="container mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((s) => (
          <div key={s.label} className="text-center p-6 bg-card rounded-xl shadow-card">
            <s.icon className="h-8 w-8 text-secondary mx-auto mb-3" />
            <p className="text-3xl font-bold text-foreground">{s.value}</p>
            <p className="text-sm text-muted-foreground mt-1">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
    <CTABanner />
    <Footer />
  </div>
);

export default About;
