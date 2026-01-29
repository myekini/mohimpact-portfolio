import React from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/Button";
import { Card } from "./ui/Card";
import {
  Linkedin,
  Github,
  Mail,
  Download,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-20 pb-10 bg-gradient-to-br from-white via-neutral-50 to-primary-50 overflow-hidden relative"
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column: Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-start gap-6 relative z-10"
          >
            {/* Status Badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary-200 bg-primary-50 text-primary-700 text-sm font-medium"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
              </span>
              Open to opportunities
            </motion.div>

            {/* Heading */}
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
              >
                Hi, I'm Umar{" "}
                <span className="animate-wave inline-block origin-[70%_70%]">
                  👋
                </span>
              </motion.h1>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="text-2xl md:text-3xl font-medium text-neutral-600 mt-4"
              >
                Data Analyst turning raw data into{" "}
                <span className="text-primary-500 font-semibold">
                  business impact
                </span>
                .
              </motion.h2>
            </div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="text-lg text-neutral-600 max-w-lg leading-relaxed"
            >
              I build automated pipelines and interactive dashboards that save
              time and drive smarter decisions. Focused on SQL, Power BI, and
              Python.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-2"
            >
              <Button size="lg" className="gap-2" asChild>
                <a href="#projects">
                  View Projects <ArrowRight size={18} />
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="gap-2"
                onClick={() => window.open("/resume.pdf", "_blank")}
              >
                Download CV <Download size={18} />
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="flex items-center gap-6 mt-4"
            >
              <a
                href="https://linkedin.com/in/umar-muhammad-abubakar"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-500 hover:text-primary-500 transition-colors transform hover:scale-110 duration-200"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://github.com/mohimpact"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-500 hover:text-primary-500 transition-colors transform hover:scale-110 duration-200"
              >
                <Github size={24} />
              </a>
              <a
                href="mailto:muhammadumarabubakar363@gmail.com"
                className="text-neutral-500 hover:text-primary-500 transition-colors transform hover:scale-110 duration-200"
              >
                <Mail size={24} />
              </a>
            </motion.div>
          </motion.div>

          {/* Right Column: Image & Floating Cards */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative hidden lg:block"
          >
            <div className="relative w-[450px] h-[550px] mx-auto">
              {/* Background Blob/Gradient */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary-200/50 rounded-full blur-3xl -z-10"></div>

              {/* Main Image Container */}
              <div className="w-full h-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white/50 relative bg-neutral-800">
                {/* Placeholder for Headshot */}
                <div className="w-full h-full bg-gradient-to-b from-neutral-700 to-neutral-900 flex items-center justify-center p-8 text-center">
                  <div className="text-neutral-300">
                    <p className="font-bold text-xl mb-2">Umar Abubakar</p>
                    <p className="text-sm opacity-70">Data Analyst</p>
                  </div>
                </div>
              </div>

              {/* Floating Card 1: Records */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="absolute -bottom-6 -left-10 z-20"
              >
                <Card className="p-4 flex items-center gap-4 bg-white/90 backdrop-blur shadow-xl border-none">
                  <div className="p-3 bg-primary-100 text-primary-600 rounded-full">
                    <CheckCircle2 size={24} />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-neutral-900">60K+</p>
                    <p className="text-xs text-neutral-500 font-medium uppercase tracking-wide">
                      Records Analyzed
                    </p>
                  </div>
                </Card>
              </motion.div>

              {/* Floating Card 2: Speed */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2, duration: 0.5 }}
                className="absolute top-10 -right-12 z-20"
              >
                <Card className="p-4 flex items-center gap-4 bg-white/90 backdrop-blur shadow-xl border-none">
                  <div className="p-3 bg-accent-500/10 text-accent-500 rounded-full">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-neutral-900">30%</p>
                    <p className="text-xs text-neutral-500 font-medium uppercase tracking-wide">
                      Faster Decisions
                    </p>
                  </div>
                </Card>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
