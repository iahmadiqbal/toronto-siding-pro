import { Link } from "react-router-dom";
import { FaArrowRight, FaCheckCircle } from "react-icons/fa";

const services = [
  {
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
    title: "Vinyl Siding",
    desc: "Durable, low-maintenance vinyl siding that withstands Toronto's harsh winters.",
    link: "/services/siding-installation",
    gradient: "from-blue-500 to-blue-600",
    features: ["Weather Resistant", "Energy Efficient", "25+ Year Warranty"],
    badge: "Most Popular",
  },
  {
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    title: "Cedar Siding",
    desc: "Beautiful, natural cedar siding that adds timeless charm to any home.",
    link: "/services/siding-installation",
    gradient: "from-amber-600 to-orange-600",
    features: ["Natural Beauty", "Eco-Friendly", "Premium Quality"],
    badge: "Premium Choice",
  },
  {
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
    title: "Fiber Cement",
    desc: "Long-lasting fiber cement siding that resists fire, rot, and insects.",
    link: "/services/siding-installation",
    gradient: "from-slate-600 to-slate-700",
    features: ["Fire Resistant", "Pest Proof", "50+ Year Lifespan"],
    badge: "Best Value",
  },
  {
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80",
    title: "Siding Repair",
    desc: "Fast, expert repair for damaged or aging siding on any property.",
    link: "/services/siding-repair",
    gradient: "from-red-500 to-red-600",
    features: ["Same Day Service", "Expert Technicians", "Quality Guaranteed"],
    badge: "Fast Service",
  },
  {
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80",
    title: "Residential Siding",
    desc: "Complete siding solutions for homes of all sizes across the GTA.",
    link: "/services/residential-siding",
    gradient: "from-green-500 to-green-600",
    features: ["Custom Design", "Free Consultation", "Licensed & Insured"],
    badge: "Trusted by 5000+",
  },
  {
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
    title: "Commercial Siding",
    desc: "Professional siding for offices, retail, and commercial buildings.",
    link: "/services/commercial-siding",
    gradient: "from-purple-500 to-purple-600",
    features: ["Large Projects", "Minimal Downtime", "Commercial Grade"],
    badge: "Business Solutions",
  },
];

const ServicesOverview = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-slate-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block text-secondary font-bold text-sm uppercase tracking-wider bg-secondary/10 px-4 py-2 rounded-full mb-4">Our Services</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 tracking-tight">
            Premium Siding Solutions
          </h2>
          <p className="text-muted-foreground text-base md:text-lg mt-5 max-w-2xl mx-auto leading-relaxed">
            From installation to repair, we provide comprehensive siding services for residential and commercial properties across Toronto.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, index) => (
            <Link
              to={s.link}
              key={s.title}
              className="group relative bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 border border-border hover:border-secondary/30 hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={s.image} 
                  alt={s.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${s.gradient} opacity-60 group-hover:opacity-40 transition-opacity`}></div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3 tracking-tight group-hover:text-secondary transition-colors">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{s.desc}</p>
                
                {/* Features List */}
                <div className="space-y-2 mb-5">
                  {s.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm">
                      <FaCheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                      <span className="text-muted-foreground font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div className="pt-4 border-t border-border">
                  <span className="inline-flex items-center text-secondary text-sm font-bold group-hover:gap-2 transition-all">
                    Read More <FaArrowRight className="ml-1 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-16 text-center bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-8 border border-primary/10">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3">Not Sure Which Service You Need?</h3>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Our expert team is here to help you choose the perfect siding solution for your property. Get a free consultation today!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/contact" 
              className="inline-flex items-center gap-2 bg-secondary text-white px-6 py-3 rounded-lg font-semibold hover:bg-amber-dark transition-colors shadow-lg"
            >
              Get Free Consultation
              <FaArrowRight />
            </Link>
            <a 
              href="tel:+16471234567" 
              className="inline-flex items-center gap-2 bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors shadow-lg border-2 border-primary"
            >
              Call (647) 123-4567
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
