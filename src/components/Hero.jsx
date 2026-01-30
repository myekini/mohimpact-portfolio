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
      {/* Background Ambience - refined for premium feel */}
      <div className="absolute top-[-10%] right-[-5%] w-[60%] h-[60%] bg-blue-500/10 opacity-50 blur-[120px] -z-10 pointer-events-none rounded-full mix-blend-screen"></div>
      <div className="absolute bottom-[-10%] left-[-5%] w-[40%] h-[40%] bg-purple-500/10 opacity-50 blur-[120px] -z-10 pointer-events-none rounded-full mix-blend-screen"></div>

      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <div className="lg:col-span-7 flex flex-col items-start gap-8 z-10 order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2 text-primary font-medium tracking-wide text-xs md:text-sm uppercase bg-primary/5 px-4 py-1.5 rounded-full border border-primary/10 backdrop-blur-sm"
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_8px_rgba(59,130,246,0.5)]"></span>
              Available for new projects
            </motion.div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold tracking-tighter text-foreground leading-[0.95]">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="block text-foreground/90"
              >
                Data
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="block text-primary bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500"
              >
                Intelligence.
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-lg md:text-xl text-muted-foreground max-w-xl font-light leading-relaxed text-balance"
            >
              Transforming raw data into{" "}
              <span className="text-foreground font-medium border-b border-primary/30 pb-0.5">
                clear strategic decisions
              </span>
              . Expert in automated reporting, predictive modeling, and
              actionable dashboards.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-4 mt-2"
            >
              <Button
                size="lg"
                className="rounded-full bg-foreground text-background hover:bg-foreground/90 h-14 px-8 text-base font-medium shadow-xl shadow-foreground/5 transition-all hover:scale-[1.02] active:scale-[0.98]"
                asChild
              >
                <a href="#projects">
                  View Selected Work <ArrowRight size={18} className="ml-2" />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="lg"
                className="rounded-full h-14 px-8 text-base text-muted-foreground hover:text-foreground hover:bg-muted/50 border border-transparent hover:border-border transition-all"
                asChild
              >
                <a
                  href="https://acrobat.adobe.com/id/urn:aaid:sc:EU:4b9cd427-686d-47d5-82ac-05ba165d65f1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Resume <Download size={18} className="ml-2" />
                </a>
              </Button>
            </motion.div>
          </div>

          {/* Right Column: Headshot */}
          <div className="lg:col-span-5 relative order-1 lg:order-2 flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "circOut" }}
              className="relative w-full max-w-[400px]"
            >
              {/* Image Container */}
              <div className="relative aspect-[3.5/4.5] rounded-3xl overflow-hidden shadow-2xl shadow-slate-900/10 dark:shadow-black/30 border border-white/20 dark:border-white/5 ring-1 ring-black/5">
                <img
                  src="/headshot.jpg"
                  alt="Umar Muhammad Abubakar"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />

                {/* Subtle gradient overlay at bottom for text readability if needed */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Floating Metric - Refined Glass Card */}
              <motion.div
                initial={{ opacity: 0, y: 20, x: -20 }}
                animate={{ opacity: 1, y: 0, x: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="absolute bottom-8 -left-8 md:-left-12 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl p-5 rounded-2xl border border-white/50 dark:border-white/10 shadow-xl shadow-slate-900/5 max-w-[220px]"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                      <polyline points="16 7 22 7 22 13"></polyline>
                    </svg>
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                    Impact
                  </span>
                </div>
                <p className="text-sm font-medium text-foreground leading-snug">
                  "Optimized reporting workflows, reducing manual time by{" "}
                  <span className="text-emerald-500 font-bold">40%</span>."
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
