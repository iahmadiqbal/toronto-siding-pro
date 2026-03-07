import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

const projects = [
  { img: project1, title: "Cedar Siding Renovation", location: "Scarborough, ON", type: "Residential" },
  { img: project2, title: "Commercial Fiber Cement", location: "Mississauga, ON", type: "Commercial" },
  { img: project3, title: "Vinyl Siding Replacement", location: "North York, ON", type: "Residential" },
];

const Projects = () => {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto">
        <div className="text-center mb-14">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Portfolio</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
            Our Recent Projects
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Browse our latest siding installations and renovations across the GTA.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p) => (
            <div key={p.title} className="group rounded-xl overflow-hidden shadow-card bg-card">
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 bg-secondary text-secondary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                  {p.type}
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-foreground text-lg">{p.title}</h3>
                <p className="text-muted-foreground text-sm mt-1">{p.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
