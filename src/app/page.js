import Image from "next/image";
import Hero from "./sections/Hero";
import Marquee from "./sections/Marquee";
import Services from "./sections/Services";
import About from "./sections/About";
import Footer from "./sections/Footer";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Marquee />
      <Services />
      <About />
      <Footer />
    </div>
  );
}
