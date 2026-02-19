import Navbar from "./components/Navbar";
import Hero3D from "./components/Hero3D";
import Services from "./components/Services";
import Pricing from "./components/Pricing";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat";
import LocationMap from "./components/LocationMap";


export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <main>
        <Hero3D />
        <Services />
        <Pricing />
        <Gallery />
        <Testimonials />
        <Contact />
        <LocationMap/>
      </main>
      <WhatsAppFloat />
      <Footer />
      
    </div>
  );
}
