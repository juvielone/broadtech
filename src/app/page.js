import Hero from "./sections/Hero";
import MarqueeBrand from "./sections/MarqueeBrand";
import Services from "./sections/Services";
import About from "./sections/About";
import Footer from "./sections/Footer";

export default function Home() {
  return (
    <div className="sm:w-11/12 mx-auto">
      <Hero />
      <MarqueeBrand />
      <Services />
      <About />
      <Footer />
    </div>
  );
}
