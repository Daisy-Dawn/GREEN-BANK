import {
  Download,
  FAQ,
  Features,
  Footer,
  Hero,
  Navbar,
  Payment,
  Process,
  Services,
  Testimonial,
} from "./components";

function App() {
  return (
    <div className="bg-[#1A1E1C] ">
      <div className="bg-color">
        <Navbar />
        <Hero />
        <Features />
        <Services />
        <Process />
        <Payment />
        <Testimonial />
        <FAQ />
        <Download />
        <Footer />
      </div>
    </div>
  );
}

export default App;
