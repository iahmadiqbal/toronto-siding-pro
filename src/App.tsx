import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import { SidingInstallation, SidingRepair, ResidentialSiding, CommercialSiding } from "./pages/ServicePages";
import VinylSiding from "./pages/VinylSiding";
import CedarSiding from "./pages/CedarSiding";
import FiberCementSiding from "./pages/FiberCementSiding";
import SoffitFascia from "./pages/SoffitFascia";
import GutterInstallation from "./pages/GutterInstallation";
import Testimonials from "./pages/Testimonials";
import ServiceAreas from "./pages/ServiceAreas";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/siding-installation" element={<SidingInstallation />} />
          <Route path="/services/siding-repair" element={<SidingRepair />} />
          <Route path="/services/residential-siding" element={<ResidentialSiding />} />
          <Route path="/services/commercial-siding" element={<CommercialSiding />} />
          <Route path="/services/vinyl-siding" element={<VinylSiding />} />
          <Route path="/services/cedar-siding" element={<CedarSiding />} />
          <Route path="/services/fiber-cement-siding" element={<FiberCementSiding />} />
          <Route path="/services/soffit-fascia" element={<SoffitFascia />} />
          <Route path="/services/gutter-installation" element={<GutterInstallation />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/service-areas" element={<ServiceAreas />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
