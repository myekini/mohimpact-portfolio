import React from "react";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/Tabs";

const skills = {
  analysis: ["SQL", "Python", "Pandas", "NumPy", "Excel", "Data Cleaning"],
  visualization: [
    "Power BI",
    "Tableau",
    "DAX",
    "Google Sheets",
    "Data Storytelling",
  ],
  tools: [
    "Git/GitHub",
    "VS Code",
    "Jupyter",
    "Google Colab",
    "AWS (Learning)",
    "PostgreSQL",
  ],
};

const About = () => {
  return (
    <section
      id="about"
      className="py-20 bg-neutral-50 relative overflow-hidden"
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column: Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-[3/4] relative rounded-2xl overflow-hidden shadow-2xl bg-neutral-200">
              {/* Use a solid color or gradient as placeholder until user adds image */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-800 to-primary-500 flex items-center justify-center p-8 text-center">
                <div className="text-white/80">
                  <p className="text-lg font-medium mb-2">
                    Umar Muhammad Abubakar
                  </p>
                  <p className="text-sm opacity-75">B.Eng Systems Analysis</p>
                </div>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary-500/10 rounded-full blur-2xl -z-10"></div>
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-secondary-500/10 rounded-full blur-2xl -z-10"></div>
          </motion.div>

          {/* Right Column: Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="inline-flex items-center justify-center px-4 py-1.5 mb-6 border border-primary-200 rounded-full bg-white text-primary-700 text-sm font-medium shadow-sm">
              About Me
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
              More than just number crunching.
            </h2>

            <div className="space-y-4 text-lg text-neutral-600 mb-8">
              <p>
                I'm a{" "}
                <strong className="text-neutral-900 font-semibold">
                  Data Analyst with engineering rigor
                </strong>
                , specializing in translating complex datasets into clear,
                executive-ready insights. My background in Systems Analysis
                (B.Eng) gives me a unique perspective on optimizing pipelines
                and ensuring data integrity.
              </p>
              <p>
                My work is driven by impact: whether it's automating grading
                pipelines to save{" "}
                <strong className="text-primary-600">8 hours weekly</strong> or
                building dashboards that cut decision time by{" "}
                <strong className="text-primary-600">30%</strong>. I believe
                that good data analysis isn't just about the "what"—it's about
                the "so what?" and "now what?".
              </p>
              <p>
                Currently leveraging SQL, Python, and Power BI to build scalable
                measurement frameworks for the EdTech and Finance sectors.
              </p>
            </div>

            {/* Skills Tabs */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-neutral-200">
              <h3 className="text-xl font-bold text-neutral-900 mb-4">
                Technical Toolkit
              </h3>
              <Tabs defaultValue="analysis" className="w-full">
                <TabsList className="mb-4 w-full justify-start bg-neutral-100 p-1">
                  <TabsTrigger value="analysis" className="flex-1">
                    Analysis
                  </TabsTrigger>
                  <TabsTrigger value="visualization" className="flex-1">
                    Visualization
                  </TabsTrigger>
                  <TabsTrigger value="tools" className="flex-1">
                    Tools
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="analysis" className="flex flex-wrap gap-2">
                  {skills.analysis.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-primary-50 text-primary-700 text-sm font-medium rounded-full border border-primary-100"
                    >
                      {skill}
                    </span>
                  ))}
                </TabsContent>

                <TabsContent
                  value="visualization"
                  className="flex flex-wrap gap-2"
                >
                  {skills.visualization.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-secondary-50 text-secondary-700 text-sm font-medium rounded-full border border-secondary-100"
                    >
                      {skill}
                    </span>
                  ))}
                </TabsContent>

                <TabsContent value="tools" className="flex flex-wrap gap-2">
                  {skills.tools.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-neutral-100 text-neutral-700 text-sm font-medium rounded-full border border-neutral-200"
                    >
                      {skill}
                    </span>
                  ))}
                </TabsContent>
              </Tabs>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
