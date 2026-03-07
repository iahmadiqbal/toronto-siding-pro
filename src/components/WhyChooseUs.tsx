import { FaShieldAlt, FaClock, FaAward, FaThumbsUp, FaUsers, FaDollarSign } from "react-icons/fa";

const reasons = [
  { icon: FaShieldAlt, title: "Licensed & Insured", desc: "Fully licensed and insured for your peace of mind.", color: "from-blue-500 to-blue-600" },
  { icon: FaClock, title: "On-Time Completion", desc: "We deliver projects on schedule, every time.", color: "from-green-500 to-green-600" },
  { icon: FaAward, title: "25+ Years Experience", desc: "Decades of expertise in Toronto's siding industry.", color: "from-purple-500 to-purple-600" },
  { icon: FaThumbsUp, title: "Quality Materials", desc: "We use only premium, industry-leading siding materials.", color: "from-amber-500 to-amber-600" },
  { icon: FaUsers, title: "5,000+ Happy Clients", desc: "Trusted by thousands of homeowners and businesses.", color: "from-pink-500 to-pink-600" },
  { icon: FaDollarSign, title: "Free Estimates", desc: "No-obligation quotes with competitive pricing.", color: "from-teal-500 to-teal-600" },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 gradient-navy relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
      </div>
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block text-secondary font-bold text-sm uppercase tracking-wider bg-secondary/20 px-4 py-2 rounded-full mb-4">Why Us</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mt-3 tracking-tight">
            Why Choose Toronto Siding
          </h2>
          <p className="text-primary-foreground/80 text-base md:text-lg mt-5 max-w-2xl mx-auto leading-relaxed">
            We're committed to providing the highest quality siding services in the Greater Toronto Area.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((r, index) => (
            <div 
              key={r.title} 
              className="group flex gap-5 p-6 rounded-2xl bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 hover:bg-primary-foreground/15 hover:border-secondary/50 transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br ${r.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <r.icon className="h-7 w-7 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-lg text-primary-foreground mb-2 tracking-tight group-hover:text-secondary transition-colors">{r.title}</h3>
                <p className="text-primary-foreground/70 text-sm leading-relaxed">{r.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
