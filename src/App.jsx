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
      <div className="setting font-mPlus1 pt-4 ">
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
    </div>
  );
}

export default App;
// px-[2rem] md:px-[3rem] lg:px-[5rem] py-4