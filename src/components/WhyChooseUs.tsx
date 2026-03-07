import { FaShieldAlt, FaClock, FaAward, FaThumbsUp, FaUsers, FaDollarSign, FaStar } from "react-icons/fa";

const reasons = [
  { 
    icon: FaShieldAlt, 
    title: "Licensed & Insured", 
    desc: "Fully licensed and insured for your peace of mind.", 
    color: "from-blue-500 to-blue-600",
    stat: "100%",
    statLabel: "Protected"
  },
  { 
    icon: FaClock, 
    title: "On-Time Completion", 
    desc: "We deliver projects on schedule, every time.", 
    color: "from-green-500 to-green-600",
    stat: "98%",
    statLabel: "On Time"
  },
  { 
    icon: FaAward, 
    title: "25+ Years Experience", 
    desc: "Decades of expertise in Toronto's siding industry.", 
    color: "from-purple-500 to-purple-600",
    stat: "25+",
    statLabel: "Years"
  },
  { 
    icon: FaThumbsUp, 
    title: "Quality Materials", 
    desc: "We use only premium, industry-leading siding materials.", 
    color: "from-amber-500 to-amber-600",
    stat: "A+",
    statLabel: "Grade"
  },
  { 
    icon: FaUsers, 
    title: "5,000+ Happy Clients", 
    desc: "Trusted by thousands of homeowners and businesses.", 
    color: "from-pink-500 to-pink-600",
    stat: "5000+",
    statLabel: "Clients"
  },
  { 
    icon: FaDollarSign, 
    title: "Free Estimates", 
    desc: "No-obligation quotes with competitive pricing.", 
    color: "from-teal-500 to-teal-600",
    stat: "Free",
    statLabel: "Quote"
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 gradient-navy relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-secondary rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-secondary rounded-full blur-3xl animate-pulse" style={{ animationDelay: '0.5s' }}></div>
      </div>

      {/* Floating Stars */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <FaStar className="absolute top-20 left-10 h-6 w-6 text-secondary/30 animate-bounce" style={{ animationDuration: '3s' }} />
        <FaStar className="absolute top-40 right-20 h-4 w-4 text-secondary/30 animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }} />
        <FaStar className="absolute bottom-32 left-1/4 h-5 w-5 text-secondary/30 animate-bounce" style={{ animationDuration: '3.5s', animationDelay: '0.5s' }} />
        <FaStar className="absolute bottom-20 right-1/3 h-7 w-7 text-secondary/30 animate-bounce" style={{ animationDuration: '4.5s', animationDelay: '1.5s' }} />
      </div>

      <div className="container mx-auto relative z-10 px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-secondary/20 backdrop-blur-sm text-secondary font-bold text-sm uppercase tracking-wider px-4 py-2 rounded-full mb-4 border border-secondary/30 animate-fade-in-up">
            <FaStar className="h-4 w-4" />
            <span>Why Choose Us</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mt-3 tracking-tight animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            Why Choose Toronto Siding
          </h2>
          <p className="text-primary-foreground/80 text-base md:text-lg mt-5 max-w-2xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            We're committed to providing the highest quality siding services in the Greater Toronto Area with unmatched expertise and customer care.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {reasons.map((r, index) => (
            <div 
              key={r.title} 
              className="group relative flex flex-col gap-5 p-6 rounded-2xl bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 hover:bg-primary-foreground/15 hover:border-secondary/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Stat Badge */}
              <div className="absolute top-4 right-4 text-center">
                <div className="text-secondary font-bold text-lg leading-none">{r.stat}</div>
                <div className="text-secondary/80 text-xs font-medium">{r.statLabel}</div>
              </div>

              {/* Icon */}
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${r.color} flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                <r.icon className="h-8 w-8 text-white" />
              </div>

              {/* Content */}
              <div>
                <h3 className="font-semibold text-lg text-primary-foreground mb-2 tracking-tight group-hover:text-secondary transition-colors">{r.title}</h3>
                <p className="text-primary-foreground/70 text-sm leading-relaxed">{r.desc}</p>
              </div>

              {/* Hover Glow Effect */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${r.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none`}></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Box */}
        <div className="bg-gradient-to-r from-secondary/20 to-secondary/10 backdrop-blur-sm rounded-2xl p-8 border border-secondary/30 text-center animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <div className="flex flex-wrap justify-center items-center gap-8 text-primary-foreground/90">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center">
                <FaAward className="h-6 w-6 text-secondary" />
              </div>
              <div className="text-left">
                <div className="font-bold text-lg">Award Winning</div>
                <div className="text-sm text-primary-foreground/70">Industry Recognition</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center">
                <FaShieldAlt className="h-6 w-6 text-secondary" />
              </div>
              <div className="text-left">
                <div className="font-bold text-lg">Warranty Protected</div>
                <div className="text-sm text-primary-foreground/70">Long-term Coverage</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center">
                <FaThumbsUp className="h-6 w-6 text-secondary" />
              </div>
              <div className="text-left">
                <div className="font-bold text-lg">Satisfaction Guaranteed</div>
                <div className="text-sm text-primary-foreground/70">100% Money Back</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
