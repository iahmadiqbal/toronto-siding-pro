import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { FaArrowRight, FaHandshake, FaClipboardCheck, FaTools, FaCheckCircle, FaAward, FaStar } from "react-icons/fa";

const AboutCTA = () => (
  <section className="py-20 bg-gradient-to-br from-slate-100 via-gray-100 to-slate-200 relative overflow-hidden">
    {/* Animated Decorative Elements */}
    <div className="absolute inset-0 opacity-10">
      <div className="absolute top-10 left-10 w-64 h-64 bg-primary rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-secondary rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-primary rounded-full blur-3xl animate-pulse" style={{ animationDelay: '0.5s' }}></div>
    </div>

    {/* Floating Icons */}
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <FaStar className="absolute top-20 left-20 h-6 w-6 text-primary/20 animate-bounce" style={{ animationDuration: '3s' }} />
      <FaStar className="absolute top-40 right-32 h-5 w-5 text-secondary/20 animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }} />
      <FaStar className="absolute bottom-32 left-1/3 h-7 w-7 text-primary/20 animate-bounce" style={{ animationDuration: '3.5s', animationDelay: '0.5s' }} />
      <FaStar className="absolute bottom-20 right-1/4 h-6 w-6 text-secondary/20 animate-bounce" style={{ animationDuration: '4.5s', animationDelay: '1.5s' }} />
    </div>

    <div className="container mx-auto relative z-10 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Main Content */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-secondary to-amber-500 text-white font-bold text-sm uppercase tracking-wider px-5 py-2.5 rounded-full mb-6 shadow-lg animate-fade-in-up hover:scale-105 transition-transform">
            <FaAward className="h-4 w-4 animate-pulse" />
            <span>Work With Experts</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-5 tracking-tight animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            Experience The Toronto Siding Difference
          </h2>
          
          <p className="text-muted-foreground text-base md:text-lg mb-10 max-w-2xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            When you choose us, you're choosing a partner dedicated to excellence, quality, and your complete satisfaction. Let's bring your vision to life.
          </p>
        </div>

        {/* Process Steps with Animation */}
        <div className="grid md:grid-cols-3 gap-6 mb-12 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 border-2 border-transparent hover:border-blue-500 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity -mr-16 -mt-16"></div>
            <div className="relative">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                <FaHandshake className="h-8 w-8 text-white" />
              </div>
              <div className="text-2xl font-bold text-blue-600 mb-2">Step 1</div>
              <div className="text-lg font-semibold text-foreground mb-3 group-hover:text-blue-600 transition-colors">Meet & Discuss</div>
              <div className="text-muted-foreground text-sm leading-relaxed">We listen to your needs and provide expert recommendations tailored to your property</div>
            </div>
          </div>

          <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 border-2 border-transparent hover:border-green-500 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-green-100 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity -mr-16 -mt-16"></div>
            <div className="relative">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                <FaClipboardCheck className="h-8 w-8 text-white" />
              </div>
              <div className="text-2xl font-bold text-green-600 mb-2">Step 2</div>
              <div className="text-lg font-semibold text-foreground mb-3 group-hover:text-green-600 transition-colors">Plan & Prepare</div>
              <div className="text-muted-foreground text-sm leading-relaxed">Detailed planning, material selection, and transparent pricing with no surprises</div>
            </div>
          </div>

          <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 border-2 border-transparent hover:border-purple-500 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-100 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity -mr-16 -mt-16"></div>
            <div className="relative">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                <FaTools className="h-8 w-8 text-white" />
              </div>
              <div className="text-2xl font-bold text-purple-600 mb-2">Step 3</div>
              <div className="text-lg font-semibold text-foreground mb-3 group-hover:text-purple-600 transition-colors">Build & Deliver</div>
              <div className="text-muted-foreground text-sm leading-relaxed">Professional installation with quality craftsmanship and attention to every detail</div>
            </div>
          </div>
        </div>

        {/* CTA Buttons with Different Colors */}
        <div className="flex flex-wrap justify-center gap-4 mb-10 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <Button asChild size="lg" className="bg-gradient-to-r from-secondary to-amber-500 text-white hover:from-amber-500 hover:to-secondary text-base font-semibold px-8 shadow-xl hover:shadow-2xl transition-all hover:scale-110 group">
            <Link to="/contact">
              Schedule Your Consultation
              <FaArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform" />
            </Link>
          </Button>
          <Button asChild size="lg" className="bg-gradient-to-r from-primary to-blue-700 text-white hover:from-blue-700 hover:to-primary text-base font-semibold px-8 shadow-xl hover:shadow-2xl transition-all hover:scale-110">
            <Link to="/services">
              Explore Services
            </Link>
          </Button>
        </div>

        {/* Bottom Features with Animation */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border-2 border-secondary/20 shadow-lg animate-fade-in-up hover:shadow-xl transition-all" style={{ animationDelay: '0.5s' }}>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="group hover:scale-105 transition-transform">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center mx-auto mb-3 shadow-lg group-hover:rotate-12 transition-transform">
                <FaCheckCircle className="h-6 w-6 text-white" />
              </div>
              <div className="font-semibold text-foreground mb-1">Lifetime Workmanship Warranty</div>
              <div className="text-sm text-muted-foreground">Peace of mind for years to come</div>
            </div>
            <div className="group hover:scale-105 transition-transform">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center mx-auto mb-3 shadow-lg group-hover:rotate-12 transition-transform">
                <FaCheckCircle className="h-6 w-6 text-white" />
              </div>
              <div className="font-semibold text-foreground mb-1">Flexible Payment Options</div>
              <div className="text-sm text-muted-foreground">Financing available for your project</div>
            </div>
            <div className="group hover:scale-105 transition-transform">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center mx-auto mb-3 shadow-lg group-hover:rotate-12 transition-transform">
                <FaCheckCircle className="h-6 w-6 text-white" />
              </div>
              <div className="font-semibold text-foreground mb-1">Satisfaction Guarantee</div>
              <div className="text-sm text-muted-foreground">We don't rest until you're happy</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutCTA;
