import React from "react";
// We removed Footer import because we embedded a minimal footer in Contact for a seamless look
// But we should check if the original Footer.jsx file exists and maybe delete it or keep it unused.
// For now, let's keep App.jsx clean.

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="min-h-screen bg-background font-sans text-navy-900 selection:bg-primary selection:text-white">
      <Navbar />
      <Hero />
      <Stats />
      <Projects />
      <About />
      <Contact />
    </div>
  );
}

export default App;
