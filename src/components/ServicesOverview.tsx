import { Link } from "react-router-dom";
import { Home, Building2, Wrench, Layers, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Layers,
    title: "Vinyl Siding",
    desc: "Durable, low-maintenance vinyl siding that withstands Toronto's harsh winters.",
    link: "/services/siding-installation",
  },
  {
    icon: Home,
    title: "Cedar Siding",
    desc: "Beautiful, natural cedar siding that adds timeless charm to any home.",
    link: "/services/siding-installation",
  },
  {
    icon: Building2,
    title: "Fiber Cement",
    desc: "Long-lasting fiber cement siding that resists fire, rot, and insects.",
    link: "/services/siding-installation",
  },
  {
    icon: Wrench,
    title: "Siding Repair",
    desc: "Fast, expert repair for damaged or aging siding on any property.",
    link: "/services/siding-repair",
  },
  {
    icon: Home,
    title: "Residential Siding",
    desc: "Complete siding solutions for homes of all sizes across the GTA.",
    link: "/services/residential-siding",
  },
  {
    icon: Building2,
    title: "Commercial Siding",
    desc: "Professional siding for offices, retail, and commercial buildings.",
    link: "/services/commercial-siding",
  },
];

const ServicesOverview = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-14">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Our Services</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
            Premium Siding Solutions
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            From installation to repair, we provide comprehensive siding services for residential and commercial properties across Toronto.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <Link
              to={s.link}
              key={s.title}
              className="group bg-card rounded-xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 border border-border hover:border-secondary/30"
            >
              <div className="w-12 h-12 rounded-lg gradient-amber flex items-center justify-center mb-4">
                <s.icon className="h-6 w-6 text-secondary-foreground" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm mb-4">{s.desc}</p>
              <span className="inline-flex items-center text-secondary text-sm font-semibold group-hover:gap-2 transition-all">
                Learn More <ArrowRight className="h-4 w-4 ml-1" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
