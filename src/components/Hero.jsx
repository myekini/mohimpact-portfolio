import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download, ChevronRight } from "lucide-react";
import { Button } from "./ui/Button";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center pt-24 pb-12 relative overflow-hidden bg-background transition-colors duration-300"
    >
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-[50%] h-[70%] bg-blue-500/20 opacity-60 blur-[100px] -z-10 pointer-events-none rounded-full"></div>
      <div className="absolute bottom-0 left-0 w-[30%] h-[50%] bg-purple-500/10 opacity-60 blur-[100px] -z-10 pointer-events-none rounded-full"></div>

      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Text Content */}
          <div className="lg:col-span-7 flex flex-col items-start gap-8 z-10 order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2 text-primary font-medium tracking-wide text-sm uppercase bg-primary/10 px-3 py-1 rounded-full border border-primary/20"
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              Available for work
            </motion.div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold tracking-tighter text-foreground leading-[0.9]">
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

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-lg md:text-2xl text-muted-foreground max-w-xl font-light leading-relaxed text-balance"
            >
              I help companies turn data transparency into{" "}
              <span className="text-foreground font-medium">profit</span>.
              Specializing in automated pipelines, predictive modeling, and
              executive intelligence.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-4 mt-4"
            >
              <Button
                size="lg"
                className="rounded-full bg-foreground text-background hover:bg-primary hover:text-white h-14 px-8 text-lg shadow-xl shadow-foreground/5 transition-all hover:scale-105"
                asChild
              >
                <a href="#projects">
                  View Selected Work <ArrowRight size={20} className="ml-2" />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="lg"
                className="rounded-full h-14 px-8 text-lg text-muted-foreground hover:text-foreground hover:bg-muted"
                onClick={() => window.open("/resume.pdf", "_blank")}
              >
                Download CV <Download size={20} className="ml-2" />
              </Button>
            </motion.div>
          </div>

          {/* Right Column: Headshot */}
          <div className="lg:col-span-5 relative order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "circOut" }}
              className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl shadow-black/20 dark:shadow-primary/10 border-4 border-surface"
            >
              <img
                src="/headshot.jpg"
                alt="Umar Muhammad Abubakar"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent pointer-events-none"></div>

              {/* Floating Metric for "Recruiter Appeal" */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="absolute bottom-6 right-6 bg-surface/90 backdrop-blur-md p-4 rounded-xl border border-border shadow-lg max-w-[200px]"
              >
                <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold mb-1">
                  Impact
                </p>
                <p className="text-sm font-medium text-foreground">
                  "Built dashboards that cut decision time by 30%."
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
