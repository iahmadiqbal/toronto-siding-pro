import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutCTA from "@/components/AboutCTA";
import aboutTeam from "@/assets/about-team.jpg";
import { Shield, Award, Users, Clock, CheckCircle, Target } from "lucide-react";

const stats = [
  { icon: Award, value: "25+", label: "Years Experience" },
  { icon: Users, value: "5,000+", label: "Happy Clients" },
  { icon: Shield, value: "100%", label: "Licensed & Insured" },
  { icon: Clock, value: "24h", label: "Response Time" },
];

const values = [
  {
    icon: CheckCircle,
    title: "Quality Craftsmanship",
    desc: "We take pride in every project, ensuring the highest standards of workmanship and attention to detail.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80"
  },
  {
    icon: Shield,
    title: "Integrity & Trust",
    desc: "Transparent pricing, honest communication, and reliable service you can count on every time.",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=80"
  },
  {
    icon: Target,
    title: "Customer Focused",
    desc: "Your satisfaction is our priority. We listen, understand, and deliver solutions tailored to your needs.",
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&q=80"
  },
  {
    icon: Award,
    title: "Industry Leaders",
    desc: "Recognized for excellence with decades of experience and thousands of successful projects.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80"
  },
];

const About = () => (
  <div className="min-h-screen">
    <Navbar />
    {/* Hero Section with Background Image */}
    <section className="relative py-32 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1920&q=80')"
        }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/75"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-64 h-64 bg-secondary rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-secondary rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Content */}
      <div className="container mx-auto text-center relative z-10 px-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 tracking-tight animate-fade-in-up">
          About Toronto Siding
        </h1>
        <p className="text-primary-foreground/90 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-light animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          Your trusted siding experts since 1998
        </p>
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
    <section className="py-20 bg-gradient-to-b from-muted to-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((s) => (
            <div key={s.label} className="text-center p-6 bg-card rounded-xl shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1">
              <s.icon className="h-8 w-8 text-secondary mx-auto mb-3" />
              <p className="text-3xl font-bold text-foreground">{s.value}</p>
              <p className="text-sm text-muted-foreground mt-1">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Our Values Section with Images */}
        <div className="text-center mb-16">
          <span className="inline-block text-secondary font-bold text-sm uppercase tracking-wider bg-secondary/10 px-4 py-2 rounded-full mb-4">Our Values</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-5 tracking-tight">Our Core Values</h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            These principles guide everything we do and define who we are as a company
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {values.map((v, index) => (
            <div 
              key={v.title} 
              className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image Section */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={v.image} 
                  alt={v.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center shadow-lg">
                    <v.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3 tracking-tight group-hover:text-secondary transition-colors">{v.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    <AboutCTA />
    <Footer />
  </div>
);

export default About;
