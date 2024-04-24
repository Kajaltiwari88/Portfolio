import Navbar from "./Components/Navbar";
import Home from "./Containers/Home";
import About from "./Containers/About";
import Resume from "./Containers/Resume";
import Skills from "./Containers/Skills";
import Projects from "./Containers/Projects";
import Contact from "./Containers/Contact";
import "./Utils/Particles";
import ParticlesContainer from "./Utils/Particles";
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <div>
      <ParticlesContainer />
      <Navbar />

      <div>
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
