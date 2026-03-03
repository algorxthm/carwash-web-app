import Navbar from "./components/Navbar";
import Hero3D from "./components/Hero3D";
import Services from "./components/Services";
import Pricing from "./components/Pricing";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import LocationMap from "./components/LocationMap";
import FloatingSocial from "./components/FloatingSocials";
import SEOHead from "./components/SEOHead";


export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <SEOHead/>
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
      <FloatingSocial />
      <Footer />
    </div>
  );
}
