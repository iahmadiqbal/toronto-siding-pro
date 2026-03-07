import { Link } from "react-router-dom";
import { FaHome, FaBuilding, FaTools, FaLayerGroup, FaArrowRight, FaHammer, FaPaintRoller } from "react-icons/fa";
import { MdConstruction } from "react-icons/md";

const services = [
  {
    icon: FaLayerGroup,
    title: "Vinyl Siding",
    desc: "Durable, low-maintenance vinyl siding that withstands Toronto's harsh winters.",
    link: "/services/siding-installation",
    gradient: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    icon: FaHome,
    title: "Cedar Siding",
    desc: "Beautiful, natural cedar siding that adds timeless charm to any home.",
    link: "/services/siding-installation",
    gradient: "from-amber-600 to-orange-600",
    bgColor: "bg-amber-50",
  },
  {
    icon: MdConstruction,
    title: "Fiber Cement",
    desc: "Long-lasting fiber cement siding that resists fire, rot, and insects.",
    link: "/services/siding-installation",
    gradient: "from-slate-600 to-slate-700",
    bgColor: "bg-slate-50",
  },
  {
    icon: FaTools,
    title: "Siding Repair",
    desc: "Fast, expert repair for damaged or aging siding on any property.",
    link: "/services/siding-repair",
    gradient: "from-red-500 to-red-600",
    bgColor: "bg-red-50",
  },
  {
    icon: FaHammer,
    title: "Residential Siding",
    desc: "Complete siding solutions for homes of all sizes across the GTA.",
    link: "/services/residential-siding",
    gradient: "from-green-500 to-green-600",
    bgColor: "bg-green-50",
  },
  {
    icon: FaBuilding,
    title: "Commercial Siding",
    desc: "Professional siding for offices, retail, and commercial buildings.",
    link: "/services/commercial-siding",
    gradient: "from-purple-500 to-purple-600",
    bgColor: "bg-purple-50",
  },
];

const ServicesOverview = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-slate-light">
      <div className="container mx-auto">
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
              className="group relative bg-card rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 border border-border hover:border-secondary/30 hover:-translate-y-2 overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`absolute top-0 right-0 w-32 h-32 ${s.bgColor} rounded-full blur-3xl opacity-50 group-hover:opacity-70 transition-opacity -mr-16 -mt-16`}></div>
              <div className="relative">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${s.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <s.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3 tracking-tight group-hover:text-secondary transition-colors">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-5">{s.desc}</p>
                <span className="inline-flex items-center text-secondary text-sm font-bold group-hover:gap-2 transition-all">
                  Learn More <FaArrowRight className="ml-1 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
