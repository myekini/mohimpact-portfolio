import React from "react";
import { motion } from "framer-motion";

const skills = [
  "SQL",
  "Python",
  "Power BI",
  "Pandas",
  "NumPy",
  "Tableau",
  "Excel",
  "Git",
  "PostgreSQL",
  "Data Modeling",
  "ET",
  "Automation",
];

const About = () => {
  return (
    <section
      id="about"
      className="py-24 bg-background overflow-hidden relative"
    >
      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Image (Clean, no blobs) */}
          <div className="order-2 lg:order-1">
            <div className="aspect-square relative rounded-2xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
              <img
                src="/headshot.jpg"
                alt="Umar A."
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right: Content */}
          <div className="order-1 lg:order-2">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-navy-900 mb-8 leading-tight">
              Precision.
              <br />
              Context.
              <br />
              <span className="text-primary">Impact.</span>
            </h2>

            <div className="space-y-6 text-lg text-neutral-600 font-light leading-relaxed">
              <p>
                Data is just noise until you give it a voice. With a background
                in{" "}
                <strong className="text-navy-900 font-medium">
                  Systems Engineering
                </strong>
                , I approach analysis not just as "charts and numbers," but as a
                structural component of business strategy.
              </p>
              <p>
                I specialize in building{" "}
                <strong className="text-navy-900 font-medium">
                  automated pipelines
                </strong>{" "}
                that eliminate manual drudgery, freeing up teams to focus on
                actual decision-making. Whether it's optimizing a sales funnel
                or predicting churn, my goal is always the same: **clear,
                actionable truth.**
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Infinite Skills Marquee */}
      <div className="mt-24 py-10 border-y border-neutral-200 bg-white/50 backdrop-blur-sm">
        <div className="relative flex overflow-x-hidden group">
          <div className="animate-marquee whitespace-nowrap flex items-center gap-16 px-8">
            {/* Duplicate list for seamless loop */}
            {[...skills, ...skills, ...skills].map((skill, i) => (
              <span
                key={i}
                className="text-4xl md:text-5xl font-heading font-bold text-neutral-200 uppercase hover:text-primary transition-colors cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>

          <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex items-center gap-16 px-8 hidden">
            {/* Second layer for perfect loop handling involves more complex css, 
                 but the above simple double/triple array works for most screens. 
                 We stick to the simple one for reliability in this environment. */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
