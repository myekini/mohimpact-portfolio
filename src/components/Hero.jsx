import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { Button } from "./ui/Button";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center pt-24 pb-12 relative overflow-hidden"
    >
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-[50%] h-[70%] bg-gradient-radial from-primary-light/50 to-transparent opacity-60 blur-3xl -z-10 pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Text Content (Editorial Layout - Left) */}
          <div className="lg:col-span-7 flex flex-col items-start gap-8 z-10 order-2 lg:order-1">
            {/* Minimal Status Text */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2 text-primary font-medium tracking-wide text-sm uppercase"
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              Available for work
            </motion.div>

            {/* Massive Editorial Headline */}
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-heading font-bold tracking-tighter text-navy-900 leading-[0.9]">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="block"
              >
                Data
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="block text-primary"
              >
                Visionary.
              </motion.span>
            </h1>

            {/* Refined Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-xl md:text-2xl text-neutral-500 max-w-xl font-light leading-relaxed text-balance"
            >
              I help companies turn{" "}
              <span className="text-navy-900 font-medium">chaotic data</span>{" "}
              into{" "}
              <span className="text-navy-900 font-medium">clear strategy</span>.
              Specializing in automated pipelines and executive intelligence.
            </motion.p>

            {/* Minimal Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-4 mt-4"
            >
              <Button
                size="lg"
                className="rounded-full bg-navy-900 text-white hover:bg-primary h-14 px-8 text-lg shadow-xl shadow-navy-900/10 transition-all hover:scale-105"
                asChild
              >
                <a href="#projects">
                  View Selected Layouts{" "}
                  <ArrowRight size={20} className="ml-2" />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="lg"
                className="rounded-full h-14 px-8 text-lg text-neutral-600 hover:text-navy-900 hover:bg-neutral-100"
                onClick={() => window.open("/resume.pdf", "_blank")}
              >
                Resume <Download size={20} className="ml-2" />
              </Button>
            </motion.div>
          </div>

          {/* Right Column: Clean Headshot (Editorial Style) */}
          <div className="lg:col-span-5 relative order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "circOut" }}
              className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl shadow-neutral-200/50"
            >
              {/* Image */}
              <img
                src="/headshot.jpg"
                alt="Umar Muhammad Abubakar"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />

              {/* Subtle Overlay Gradient for Depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/20 to-transparent pointer-events-none"></div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
