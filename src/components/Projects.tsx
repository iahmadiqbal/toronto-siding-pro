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

        {/* Stats Section with Progress Bars */}
        <div className="mt-16 bg-gradient-to-br from-primary to-primary/90 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
          {/* Background Decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/20 rounded-full blur-3xl"></div>
          
          <div className="relative z-10">
            <div className="text-center mb-10">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">Our Track Record Speaks for Itself</h3>
              <p className="text-white/80 text-base">Trusted by thousands across the Greater Toronto Area</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Projects Completed */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-white font-semibold text-lg">Projects Completed</span>
                  <span className="text-secondary font-bold text-2xl">500+</span>
                </div>
                <div className="relative h-3 bg-white/20 rounded-full overflow-hidden">
                  <div 
                    className="absolute top-0 left-0 h-full bg-gradient-to-r from-secondary to-amber-400 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: '95%' }}
                  >
                    <div className="absolute inset-0 bg-white/30 animate-pulse"></div>
                  </div>
                </div>
                <p className="text-white/70 text-sm mt-2">Residential & Commercial Projects</p>
              </div>

              {/* Years Experience */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-white font-semibold text-lg">Years of Experience</span>
                  <span className="text-secondary font-bold text-2xl">25+</span>
                </div>
                <div className="relative h-3 bg-white/20 rounded-full overflow-hidden">
                  <div 
                    className="absolute top-0 left-0 h-full bg-gradient-to-r from-green-400 to-green-600 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: '85%' }}
                  >
                    <div className="absolute inset-0 bg-white/30 animate-pulse"></div>
                  </div>
                </div>
                <p className="text-white/70 text-sm mt-2">Industry Leading Expertise</p>
              </div>

              {/* Satisfaction Rate */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-white font-semibold text-lg">Customer Satisfaction</span>
                  <span className="text-secondary font-bold text-2xl">100%</span>
                </div>
                <div className="relative h-3 bg-white/20 rounded-full overflow-hidden">
                  <div 
                    className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-400 to-blue-600 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: '100%' }}
                  >
                    <div className="absolute inset-0 bg-white/30 animate-pulse"></div>
                  </div>
                </div>
                <p className="text-white/70 text-sm mt-2">Guaranteed Quality Work</p>
              </div>

              {/* Happy Clients */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-white font-semibold text-lg">Happy Clients</span>
                  <span className="text-secondary font-bold text-2xl">5000+</span>
                </div>
                <div className="relative h-3 bg-white/20 rounded-full overflow-hidden">
                  <div 
                    className="absolute top-0 left-0 h-full bg-gradient-to-r from-purple-400 to-purple-600 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: '98%' }}
                  >
                    <div className="absolute inset-0 bg-white/30 animate-pulse"></div>
                  </div>
                </div>
                <p className="text-white/70 text-sm mt-2">Across Greater Toronto Area</p>
              </div>
            </div>

            {/* Bottom Text */}
            <div className="text-center mt-8 pt-6 border-t border-white/20">
              <p className="text-white/90 text-sm md:text-base">
                Join thousands of satisfied homeowners and businesses who trust Toronto Siding for their exterior needs
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
