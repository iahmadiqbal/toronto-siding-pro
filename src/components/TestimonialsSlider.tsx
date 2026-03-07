import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah M.",
    location: "Toronto, ON",
    text: "Toronto Siding transformed our home! The vinyl siding they installed looks incredible and we've already noticed a difference in our energy bills. Highly recommended!",
    rating: 5,
  },
  {
    name: "James K.",
    location: "Mississauga, ON",
    text: "Professional from start to finish. The team was punctual, clean, and the fiber cement siding they installed exceeded our expectations. Great value for money.",
    rating: 5,
  },
  {
    name: "Linda & Robert T.",
    location: "Scarborough, ON",
    text: "We had our old siding removed and replaced with cedar. The craftsmanship is outstanding. Our neighbors keep complimenting our home's new look!",
    rating: 5,
  },
  {
    name: "Michael D.",
    location: "North York, ON",
    text: "After getting quotes from 5 companies, Toronto Siding offered the best combination of quality and price. The installation was done ahead of schedule.",
    rating: 5,
  },
];

const TestimonialsSlider = () => {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-14">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Testimonials</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
            What Our Clients Say
          </h2>
        </div>
        <div className="max-w-3xl mx-auto relative">
          <div className="bg-card rounded-2xl shadow-card p-8 md:p-12 text-center border border-border">
            <div className="flex justify-center gap-1 mb-6">
              {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-secondary text-secondary" />
              ))}
            </div>
            <blockquote className="text-lg md:text-xl text-foreground leading-relaxed mb-6 italic">
              "{testimonials[current].text}"
            </blockquote>
            <p className="font-bold text-foreground">{testimonials[current].name}</p>
            <p className="text-muted-foreground text-sm">{testimonials[current].location}</p>
          </div>
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full bg-primary text-primary-foreground hover:bg-navy-light flex items-center justify-center transition-colors"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${
                    i === current ? "bg-secondary" : "bg-border"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full bg-primary text-primary-foreground hover:bg-navy-light flex items-center justify-center transition-colors"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSlider;
