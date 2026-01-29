import React from "react";
import { motion } from "framer-motion";

// Using reliable CDN links for tool logos
const skills = [
  {
    name: "Python",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  {
    name: "PostgreSQL",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },
  {
    name: "Pandas",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg",
  },
  {
    name: "Power BI",
    url: "https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg",
  },
  {
    name: "Excel",
    url: "https://upload.wikimedia.org/wikipedia/commons/3/34/Microsoft_Office_Excel_%282019%E2%80%93present%29.svg",
  },
  {
    name: "Git",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    name: "NumPy",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg",
  },
  {
    name: "Tableau",
    url: "https://cdn.worldvectorlogo.com/logos/tableau-software.svg",
  },
];

const About = () => {
  return (
    <section
      id="about"
      className="py-24 bg-surface border-t border-border overflow-hidden relative transition-colors duration-300"
    >
      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-6">
            The bridge between{" "}
            <span className="text-muted-foreground">complexity</span> and{" "}
            <span className="text-primary">clarity</span>.
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            I don't just write queries; I translate raw data into business
            language. My background in{" "}
            <strong className="text-foreground">Systems Engineering</strong>{" "}
            allows me to see the "whole picture"—ensuring that every dashboard I
            build isn't just pretty, but structurally sound and actually useful.
          </p>
        </div>

        {/* The "Why Hire Me" Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="p-8 bg-background rounded-2xl border border-border hover:border-primary/50 transition-colors group">
            <div className="h-12 w-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-6 text-2xl group-hover:scale-110 transition-transform">
              🚀
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">
              Efficiency First
            </h3>
            <p className="text-muted-foreground">
              I look for <strong>automation opportunities</strong> everywhere.
              If it takes you 4 hours a week manually, I'll write a Python
              script to do it in 4 seconds.
            </p>
          </div>

          {/* Card 2 */}
          <div className="p-8 bg-background rounded-2xl border border-border hover:border-primary/50 transition-colors group">
            <div className="h-12 w-12 bg-purple-500/10 rounded-lg flex items-center justify-center mb-6 text-2xl group-hover:scale-110 transition-transform">
              💡
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">
              Business Context
            </h3>
            <p className="text-muted-foreground">
              Data without context is noise. I start every project by asking{" "}
              <strong>"What business decision does this drive?"</strong> to
              ensure impact.
            </p>
          </div>

          {/* Card 3 */}
          <div className="p-8 bg-background rounded-2xl border border-border hover:border-primary/50 transition-colors group">
            <div className="h-12 w-12 bg-emerald-500/10 rounded-lg flex items-center justify-center mb-6 text-2xl group-hover:scale-110 transition-transform">
              🛠️
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">
              Full Stack Analyst
            </h3>
            <p className="text-muted-foreground">
              From <strong>SQL</strong> extraction to <strong>Python</strong>{" "}
              transformation and <strong>Power BI</strong> visualization, I own
              the entire data lifecycle.
            </p>
          </div>
        </div>
      </div>

      {/* Infinite Skills Marquee with LOGOS */}
      <div className="mt-24 py-10 border-y border-border bg-background/50 backdrop-blur-sm">
        <div className="relative flex overflow-x-hidden group">
          <div className="animate-marquee whitespace-nowrap flex items-center gap-16 px-8">
            {/* Duplicate list for loop */}
            {[...skills, ...skills, ...skills, ...skills].map((skill, i) => (
              <div
                key={i}
                className="flex flex-col items-center gap-4 group/icon"
              >
                <div className="relative w-16 h-16 grayscale opacity-60 group-hover/icon:grayscale-0 group-hover/icon:opacity-100 transition-all duration-300">
                  <img
                    src={skill.url}
                    alt={skill.name}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
