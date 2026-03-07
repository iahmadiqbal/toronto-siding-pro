import { Shield, Clock, Award, ThumbsUp, Users, DollarSign } from "lucide-react";

const reasons = [
  { icon: Shield, title: "Licensed & Insured", desc: "Fully licensed and insured for your peace of mind." },
  { icon: Clock, title: "On-Time Completion", desc: "We deliver projects on schedule, every time." },
  { icon: Award, title: "25+ Years Experience", desc: "Decades of expertise in Toronto's siding industry." },
  { icon: ThumbsUp, title: "Quality Materials", desc: "We use only premium, industry-leading siding materials." },
  { icon: Users, title: "5,000+ Happy Clients", desc: "Trusted by thousands of homeowners and businesses." },
  { icon: DollarSign, title: "Free Estimates", desc: "No-obligation quotes with competitive pricing." },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 gradient-navy">
      <div className="container mx-auto">
        <div className="text-center mb-14">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Why Us</span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mt-2">
            Why Choose Toronto Siding
          </h2>
          <p className="text-primary-foreground/70 mt-4 max-w-2xl mx-auto">
            We're committed to providing the highest quality siding services in the Greater Toronto Area.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((r) => (
            <div key={r.title} className="flex gap-4 p-5 rounded-xl bg-primary-foreground/5 border border-primary-foreground/10">
              <div className="shrink-0 w-12 h-12 rounded-lg gradient-amber flex items-center justify-center">
                <r.icon className="h-6 w-6 text-secondary-foreground" />
              </div>
              <div>
                <h3 className="font-bold text-primary-foreground mb-1">{r.title}</h3>
                <p className="text-primary-foreground/60 text-sm">{r.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
