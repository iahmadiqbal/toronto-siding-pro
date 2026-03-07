import { FaMapMarkerAlt, FaHome, FaBuilding, FaCheckCircle, FaCalendarAlt } from "react-icons/fa";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

const projects = [
  { 
    img: project1, 
    title: "Cedar Siding Renovation", 
    location: "Scarborough, ON", 
    type: "Residential", 
    icon: FaHome,
    year: "2024",
    details: "Complete exterior transformation with premium cedar siding",
    features: ["Premium Cedar Wood", "Custom Color Match", "Energy Efficient"]
  },
  { 
    img: project2, 
    title: "Commercial Fiber Cement", 
    location: "Mississauga, ON", 
    type: "Commercial", 
    icon: FaBuilding,
    year: "2024",
    details: "Modern commercial building with durable fiber cement siding",
    features: ["Fire Resistant", "Low Maintenance", "Weather Proof"]
  },
  { 
    img: project3, 
    title: "Vinyl Siding Replacement", 
    location: "North York, ON", 
    type: "Residential", 
    icon: FaHome,
    year: "2023",
    details: "Full vinyl siding replacement with improved insulation",
    features: ["Energy Savings", "25 Year Warranty", "Quick Installation"]
  },
];

const Projects = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-muted to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block text-secondary font-bold text-sm uppercase tracking-wider bg-secondary/10 px-4 py-2 rounded-full mb-4">Portfolio</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 tracking-tight">
            Our Recent Projects
          </h2>
          <p className="text-muted-foreground text-base md:text-lg mt-5 max-w-2xl mx-auto leading-relaxed">
            Browse our latest siding installations and renovations across the GTA. Each project showcases our commitment to quality and customer satisfaction.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((p, index) => (
            <div 
              key={p.title} 
              className="group rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover bg-card transition-all duration-300 hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                {/* Type Badge */}
                <div className="flex items-center gap-2 mb-3">
                  <span className="inline-flex items-center gap-1.5 bg-secondary/10 text-secondary text-xs font-bold px-3 py-1.5 rounded-full">
                    <p.icon className="h-3 w-3" />
                    {p.type}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-muted-foreground text-xs font-medium">
                    <FaCalendarAlt className="h-3 w-3" />
                    {p.year}
                  </span>
                </div>

                <h3 className="font-semibold text-foreground text-xl mb-2 tracking-tight group-hover:text-secondary transition-colors">{p.title}</h3>
                
                <p className="text-muted-foreground text-sm mb-3 flex items-center gap-2">
                  <FaMapMarkerAlt className="h-3.5 w-3.5 text-secondary flex-shrink-0" />
                  {p.location}
                </p>

                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {p.details}
                </p>

                {/* Features */}
                <div className="space-y-2 pt-4 border-t border-border">
                  {p.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs">
                      <FaCheckCircle className="h-3.5 w-3.5 text-green-500 flex-shrink-0" />
                      <span className="text-muted-foreground font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-card rounded-xl border border-border">
            <div className="text-3xl md:text-4xl font-bold text-secondary mb-2">500+</div>
            <div className="text-sm text-muted-foreground font-medium">Projects Completed</div>
          </div>
          <div className="text-center p-6 bg-card rounded-xl border border-border">
            <div className="text-3xl md:text-4xl font-bold text-secondary mb-2">25+</div>
            <div className="text-sm text-muted-foreground font-medium">Years Experience</div>
          </div>
          <div className="text-center p-6 bg-card rounded-xl border border-border">
            <div className="text-3xl md:text-4xl font-bold text-secondary mb-2">100%</div>
            <div className="text-sm text-muted-foreground font-medium">Satisfaction Rate</div>
          </div>
          <div className="text-center p-6 bg-card rounded-xl border border-border">
            <div className="text-3xl md:text-4xl font-bold text-secondary mb-2">5000+</div>
            <div className="text-sm text-muted-foreground font-medium">Happy Clients</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
