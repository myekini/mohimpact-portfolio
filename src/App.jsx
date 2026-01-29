import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-neutral-50 font-sans text-neutral-900 selection:bg-primary-100 selection:text-primary-900">
      <Navbar />
      <Hero />
      <Stats />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
