import { FaMapMarkerAlt, FaHome, FaBuilding } from "react-icons/fa";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

const projects = [
  { img: project1, title: "Cedar Siding Renovation", location: "Scarborough, ON", type: "Residential", icon: FaHome },
  { img: project2, title: "Commercial Fiber Cement", location: "Mississauga, ON", type: "Commercial", icon: FaBuilding },
  { img: project3, title: "Vinyl Siding Replacement", location: "North York, ON", type: "Residential", icon: FaHome },
];

const Projects = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-muted to-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block text-secondary font-bold text-sm uppercase tracking-wider bg-secondary/10 px-4 py-2 rounded-full mb-4">Portfolio</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 tracking-tight">
            Our Recent Projects
          </h2>
          <p className="text-muted-foreground text-base md:text-lg mt-5 max-w-2xl mx-auto leading-relaxed">
            Browse our latest siding installations and renovations across the GTA.
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
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="absolute top-4 left-4 bg-secondary text-secondary-foreground text-xs font-bold px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1.5">
                  <p.icon className="h-3 w-3" />
                  {p.type}
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-foreground text-xl mb-2 tracking-tight group-hover:text-secondary transition-colors">{p.title}</h3>
                <p className="text-muted-foreground text-sm flex items-center gap-2 font-medium">
                  <FaMapMarkerAlt className="h-3.5 w-3.5 text-secondary" />
                  {p.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
