import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Hero from "./sections/Hero";
import About from "./sections/About";
import YouTube from "./sections/YouTube";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import Education from "./sections/Education";
import Achievements from "./sections/Achievements";
import Contact from "./sections/Contact";

function App() {
  return (
    <div className="bg-[#050B16] text-white">

      {}
      <Navbar />

      {}
      <Hero />
      <About />
      <YouTube />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Achievements />
      <Contact />

      {}
      <Footer />
    </div>
  );
}

export default App;
