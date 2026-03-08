import { useState } from "react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { FaUserCircle } from "react-icons/fa";

const testimonials = [
  {
    name: "Sarah M.",
    location: "Toronto, ON",
    text: "Toronto Siding transformed our home! The vinyl siding they installed looks incredible and we've already noticed a difference in our energy bills. Highly recommended!",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=80",
  },
  {
    name: "James K.",
    location: "Mississauga, ON",
    text: "Professional from start to finish. The team was punctual, clean, and the fiber cement siding they installed exceeded our expectations. Great value for money.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80",
  },
  {
    name: "Linda & Robert T.",
    location: "Scarborough, ON",
    text: "We had our old siding removed and replaced with cedar. The craftsmanship is outstanding. Our neighbors keep complimenting our home's new look!",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&q=80",
  },
  {
    name: "Michael D.",
    location: "North York, ON",
    text: "After getting quotes from 5 companies, Toronto Siding offered the best combination of quality and price. The installation was done ahead of schedule.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&q=80",
  },
];

const TestimonialsSlider = () => {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block text-secondary font-bold text-sm uppercase tracking-wider bg-secondary/10 px-4 py-2 rounded-full mb-4">Testimonials</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 tracking-tight">
            What Our Clients Say
          </h2>
          <p className="text-muted-foreground text-base md:text-lg mt-5 max-w-2xl mx-auto leading-relaxed">
            Real feedback from real customers who experienced our exceptional service
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto relative">
          {/* Main Testimonial Card */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 relative overflow-hidden border-2 border-secondary/20">
            {/* Quote Icon Background */}
            <div className="absolute top-8 right-8 opacity-5">
              <Quote className="h-32 w-32 text-secondary" />
            </div>

            {/* Content */}
            <div className="relative z-10">
              {/* Avatar & Info */}
              <div className="flex flex-col items-center mb-8">
                <div className="relative mb-4">
                  <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-secondary shadow-lg">
                    <img 
                      src={testimonials[current].avatar} 
                      alt={testimonials[current].name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-secondary rounded-full flex items-center justify-center shadow-lg">
                    <Quote className="h-5 w-5 text-white" />
                  </div>
                </div>
                
                {/* Stars */}
                <div className="flex justify-center gap-1 mb-4">
                  {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                    <Star key={i} className="h-6 w-6 fill-yellow-400 text-yellow-400 animate-pulse" style={{ animationDelay: `${i * 0.1}s` }} />
                  ))}
                </div>
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-lg md:text-xl text-foreground leading-relaxed mb-6 text-center font-light">
                "{testimonials[current].text}"
              </blockquote>

              {/* Author Info */}
              <div className="text-center">
                <p className="font-bold text-lg text-foreground">{testimonials[current].name}</p>
                <p className="text-secondary text-sm font-medium flex items-center justify-center gap-2 mt-1">
                  <span className="w-2 h-2 bg-secondary rounded-full"></span>
                  {testimonials[current].location}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-6 mt-10">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-primary/80 text-primary-foreground hover:from-primary/90 hover:to-primary flex items-center justify-center transition-all shadow-lg hover:shadow-xl hover:scale-110"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            
            <div className="flex items-center gap-3">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`transition-all duration-300 rounded-full ${
                    i === current 
                      ? "w-12 h-3 bg-secondary" 
                      : "w-3 h-3 bg-border hover:bg-secondary/50"
                  }`}
                />
              ))}
            </div>
            
            <button
              onClick={next}
              className="w-12 h-12 rounded-full bg-gradient-to-r from-secondary to-amber-500 text-white hover:from-amber-500 hover:to-secondary flex items-center justify-center transition-all shadow-lg hover:shadow-xl hover:scale-110"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>

          {/* Counter */}
          <div className="text-center mt-6">
            <p className="text-sm text-muted-foreground font-medium">
              {current + 1} of {testimonials.length} Reviews
            </p>
          </div>
        </div>

        {/* Bottom Trust Box */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border-2 border-secondary/20 shadow-lg hover:shadow-xl transition-all mt-12 max-w-4xl mx-auto">
          <div className="text-center">
            <p className="text-lg font-semibold text-foreground mb-4">
              "The best decision we made for our home renovation!"
            </p>
            <div className="flex justify-center gap-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <p className="text-muted-foreground text-sm">
              Join our growing family of 5,000+ satisfied customers across the GTA
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSlider;
