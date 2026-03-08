import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { FaArrowRight, FaStar, FaQuoteLeft, FaUserCheck, FaAward } from "react-icons/fa";

const TestimonialsCTA = () => (
  <section className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden">
    {/* Animated Decorative Elements */}
    <div className="absolute inset-0 opacity-10">
      <div className="absolute top-10 right-10 w-64 h-64 bg-purple-500 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '0.5s' }}></div>
    </div>

    {/* Floating Quote Icons */}
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <FaQuoteLeft className="absolute top-20 left-20 h-8 w-8 text-purple-300/30 animate-bounce" style={{ animationDuration: '3s' }} />
      <FaQuoteLeft className="absolute top-40 right-32 h-6 w-6 text-blue-300/30 animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }} />
      <FaQuoteLeft className="absolute bottom-32 left-1/3 h-10 w-10 text-indigo-300/30 animate-bounce" style={{ animationDuration: '3.5s', animationDelay: '0.5s' }} />
      <FaQuoteLeft className="absolute bottom-20 right-1/4 h-7 w-7 text-purple-300/30 animate-bounce" style={{ animationDuration: '4.5s', animationDelay: '1.5s' }} />
    </div>

    <div className="container mx-auto relative z-10 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Main Content */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-bold text-sm uppercase tracking-wider px-5 py-2.5 rounded-full mb-6 shadow-lg animate-fade-in-up hover:scale-105 transition-transform">
            <FaStar className="h-4 w-4 animate-pulse fill-yellow-300" />
            <span>Join Our Happy Clients</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-5 tracking-tight animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            Ready To Share Your Success Story?
          </h2>
          
          <p className="text-muted-foreground text-base md:text-lg mb-10 max-w-2xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Join thousands of satisfied homeowners who transformed their properties with our expert siding services. Your dream exterior is just one call away.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 border-2 border-transparent hover:border-purple-500 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-100 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity -mr-16 -mt-16"></div>
            <div className="relative">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                <FaUserCheck className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-purple-600 mb-2">98%</div>
              <div className="text-lg font-semibold text-foreground mb-2 group-hover:text-purple-600 transition-colors">Customer Satisfaction</div>
              <div className="text-muted-foreground text-sm leading-relaxed">Our clients love the results we deliver</div>
            </div>
          </div>

          <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 border-2 border-transparent hover:border-blue-500 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity -mr-16 -mt-16"></div>
            <div className="relative">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                <FaStar className="h-8 w-8 text-white fill-white" />
              </div>
              <div className="text-3xl font-bold text-blue-600 mb-2">4.9/5</div>
              <div className="text-lg font-semibold text-foreground mb-2 group-hover:text-blue-600 transition-colors">Average Rating</div>
              <div className="text-muted-foreground text-sm leading-relaxed">Based on verified customer reviews</div>
            </div>
          </div>

          <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 border-2 border-transparent hover:border-indigo-500 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-100 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity -mr-16 -mt-16"></div>
            <div className="relative">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-indigo-500 to-indigo-600 flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                <FaAward className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-indigo-600 mb-2">100%</div>
              <div className="text-lg font-semibold text-foreground mb-2 group-hover:text-indigo-600 transition-colors">Would Recommend</div>
              <div className="text-muted-foreground text-sm leading-relaxed">Clients who refer us to friends & family</div>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <Button asChild size="lg" className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:from-indigo-600 hover:to-purple-600 text-base font-semibold px-8 shadow-xl hover:shadow-2xl transition-all hover:scale-110 group">
            <Link to="/contact">
              Start Your Project Today
              <FaArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform" />
            </Link>
          </Button>
          <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:from-cyan-600 hover:to-blue-600 text-base font-semibold px-8 shadow-xl hover:shadow-2xl transition-all hover:scale-110">
            <Link to="/services">
              View Our Services
            </Link>
          </Button>
        </div>
      </div>
    </div>
  </section>
);

export default TestimonialsCTA;
